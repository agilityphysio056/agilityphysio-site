import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

const CMS_BASE = "https://cms.agilityphysio.net";

type CmsClinic = {
  clinicId: string;
  name: string;
  address: string;
  phone: string;
  apiKey: string;
};

let clinicCache: { data: CmsClinic[]; fetchedAt: number } | null = null;
const CLINIC_TTL_MS = 5 * 60 * 1000;

async function getClinics(): Promise<CmsClinic[]> {
  const now = Date.now();
  if (clinicCache && now - clinicCache.fetchedAt < CLINIC_TTL_MS) {
    return clinicCache.data;
  }
  const r = await fetch(`${CMS_BASE}/api/public/clinics`);
  if (!r.ok) throw new Error(`clinics ${r.status}: ${await r.text()}`);
  const data = (await r.json()) as CmsClinic[];
  clinicCache = { data, fetchedAt: now };
  return data;
}

async function apiKeyFor(clinicId: string): Promise<string | null> {
  const list = await getClinics();
  return list.find((c) => c.clinicId === clinicId)?.apiKey ?? null;
}

function passThroughError(res: Response, e: unknown) {
  const msg = e instanceof Error ? e.message : "Unknown error";
  console.error("[cms proxy]", msg);
  res.status(502).json({ error: "Upstream booking service is unavailable. Please try again, or call 0203 092 9976." });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactMessageSchema.safeParse(req.body);
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ error: validationError.message });
      }
      // Schema enforces consentGiven === true via z.literal(true), but
      // double-check defensively in case the schema is loosened later.
      if (result.data.consentGiven !== true) {
        return res.status(400).json({
          error:
            "You must consent to us storing your details to respond to your enquiry.",
        });
      }
      const ipAddress =
        (req.headers["x-forwarded-for"] as string | undefined)
          ?.split(",")[0]
          ?.trim() ??
        req.socket.remoteAddress ??
        null;
      const userAgent = (req.headers["user-agent"] as string | undefined) ?? null;
      const message = await storage.createContactMessage(result.data, {
        ipAddress,
        userAgent,
      });
      // Audit log without PII — log only the record id. The full email
      // is stored against the record; logs are kept 30 days (see privacy
      // policy) and must not contain personal data beyond what's needed.
      console.log(`[audit] contact.form.submitted id=${message.id}`);
      res.status(201).json({
        success: true,
        message: "Thank you for your enquiry. We'll be in touch shortly.",
        id: message.id,
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(500).json({ error: "An error occurred. Please try again later." });
    }
  });

  // ---------- CMS booking proxy ----------
  // The Agility CMS only allows CORS from agilityphysio.net itself, so the
  // browser can't call it directly. We proxy through Express, hiding the
  // per-clinic API keys from the client at the same time.

  app.get("/api/cms/clinics", async (_req, res) => {
    try {
      const list = await getClinics();
      // strip apiKey before returning to client
      res.json(list.map(({ apiKey, ...rest }) => rest));
    } catch (e) {
      passThroughError(res, e);
    }
  });

  app.get("/api/cms/services", async (req, res) => {
    try {
      const clinicId = String(req.query.clinicId ?? "");
      if (!clinicId) return res.status(400).json({ error: "clinicId is required" });
      const key = await apiKeyFor(clinicId);
      if (!key) return res.status(404).json({ error: "Unknown clinic" });
      const r = await fetch(
        `${CMS_BASE}/api/public/services?clinicId=${encodeURIComponent(clinicId)}`,
        { headers: { "x-api-key": key } },
      );
      if (!r.ok) throw new Error(`services ${r.status}: ${await r.text()}`);
      res.json(await r.json());
    } catch (e) {
      passThroughError(res, e);
    }
  });

  app.get("/api/cms/clinicians", async (req, res) => {
    try {
      const clinicId = String(req.query.clinicId ?? "");
      if (!clinicId) return res.status(400).json({ error: "clinicId is required" });
      const key = await apiKeyFor(clinicId);
      if (!key) return res.status(404).json({ error: "Unknown clinic" });
      const r = await fetch(
        `${CMS_BASE}/api/public/clinicians?clinicId=${encodeURIComponent(clinicId)}`,
        { headers: { "x-api-key": key } },
      );
      if (!r.ok) throw new Error(`clinicians ${r.status}: ${await r.text()}`);
      res.json(await r.json());
    } catch (e) {
      passThroughError(res, e);
    }
  });

  app.get("/api/cms/availability", async (req, res) => {
    try {
      const clinicId = String(req.query.clinicId ?? "");
      const clinicianId = String(req.query.clinicianId ?? "");
      const serviceId = String(req.query.serviceId ?? "");
      const fromDate = String(req.query.fromDate ?? "");
      const toDate = req.query.toDate ? String(req.query.toDate) : "";
      if (!clinicId || !clinicianId || !serviceId || !fromDate) {
        return res.status(400).json({ error: "clinicId, clinicianId, serviceId and fromDate are required" });
      }
      const key = await apiKeyFor(clinicId);
      if (!key) return res.status(404).json({ error: "Unknown clinic" });
      const url = new URL(`${CMS_BASE}/api/public/availability`);
      url.searchParams.set("clinicId", clinicId);
      url.searchParams.set("clinicianId", clinicianId);
      url.searchParams.set("serviceId", serviceId);
      url.searchParams.set("fromDate", fromDate);
      if (toDate) url.searchParams.set("toDate", toDate);
      const r = await fetch(url.toString(), { headers: { "x-api-key": key } });
      if (!r.ok) throw new Error(`availability ${r.status}: ${await r.text()}`);
      res.json(await r.json());
    } catch (e) {
      passThroughError(res, e);
    }
  });

  app.post("/api/cms/bookings", async (req, res) => {
    try {
      const body = req.body as
        | { clinicId?: string; dataConsent?: boolean; [k: string]: unknown }
        | undefined;
      const clinicId = body?.clinicId;
      if (!clinicId) return res.status(400).json({ error: "clinicId is required" });
      // GDPR / Article 9(2)(h) — explicit consent for processing health
      // data must be present before we forward the booking to the CMS.
      if (body?.dataConsent !== true) {
        return res.status(400).json({
          error:
            "You must consent to us processing your health information to provide treatment.",
        });
      }
      console.log(
        `[audit] booking.submitted clinicId=${clinicId} dataConsent=true`,
      );
      const key = await apiKeyFor(clinicId);
      if (!key) return res.status(404).json({ error: "Unknown clinic" });
      // Strip our internal consent flag from the upstream payload — the
      // CMS schema doesn't know about it and may reject unknown fields.
      const { dataConsent: _omit, ...upstreamBody } = body;
      const r = await fetch(`${CMS_BASE}/api/public/bookings`, {
        method: "POST",
        headers: {
          "x-api-key": key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(upstreamBody),
      });
      const text = await r.text();
      // forward upstream status + body (success or validation error)
      res.status(r.status);
      try {
        res.json(JSON.parse(text));
      } catch {
        res.send(text);
      }
    } catch (e) {
      passThroughError(res, e);
    }
  });

  return httpServer;
}
