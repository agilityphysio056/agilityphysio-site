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
      const message = await storage.createContactMessage(result.data);
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
      const r = await fetch(url.toString(), { headers: { "x-api-key": key } });
      if (!r.ok) throw new Error(`availability ${r.status}: ${await r.text()}`);
      res.json(await r.json());
    } catch (e) {
      passThroughError(res, e);
    }
  });

  app.post("/api/cms/bookings", async (req, res) => {
    try {
      const body = req.body as { clinicId?: string } | undefined;
      const clinicId = body?.clinicId;
      if (!clinicId) return res.status(400).json({ error: "clinicId is required" });
      const key = await apiKeyFor(clinicId);
      if (!key) return res.status(404).json({ error: "Unknown clinic" });
      const r = await fetch(`${CMS_BASE}/api/public/bookings`, {
        method: "POST",
        headers: {
          "x-api-key": key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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
