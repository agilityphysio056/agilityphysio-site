// Booking CMS client.
//
// Routing:
//   - In production (host = agilityphysio.net / www.agilityphysio.net) we call
//     https://cms.agilityphysio.net/api/public/* directly. The CMS allows CORS
//     from those origins. The clinics endpoint already exposes per-clinic
//     apiKey values publicly, so the browser caches them and uses x-api-key
//     for subsequent calls.
//   - In development (Replit preview, localhost) the upstream blocks CORS, so
//     we go through the Express proxy at /api/cms/*. The proxy attaches the
//     apiKey server-side and strips it from the clinics response.

const CMS_DIRECT_BASE = "https://cms.agilityphysio.net/api/public";
const PROXY_BASE = "/api/cms";

const PROD_HOSTS = new Set(["agilityphysio.net", "www.agilityphysio.net"]);

function isProdHost(): boolean {
  if (typeof window === "undefined") return false;
  return PROD_HOSTS.has(window.location.hostname);
}

export type Clinic = {
  clinicId: string;
  name: string;
  address: string;
  phone: string;
};

type ClinicWithKey = Clinic & { apiKey?: string };

export type Clinician = {
  clinicianId: string;
  firstName: string;
  lastName: string;
  title: string | null;
  hcpcNumber: string | null;
  bio: string | null;
  specialisms: string[];
  photoUrl: string | null;
  serviceIds: string[];
};

export type Service = {
  serviceId: string;
  name: string;
  durationMinutes: number;
  priceGBP: number;
  description: string | null;
  clinicianIds: string[];
};

export type Slot = { startTime: string; endTime: string };
export type Day = { date: string; slots: Slot[] };
export type Availability = {
  clinicId: string;
  clinicianId: string;
  serviceId: string;
  timezone: string;
  days: Day[];
};

export type BookingPayload = {
  clinicId: string;
  serviceId: string;
  clinicianId: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

export type BookingResult = {
  bookingReference?: string;
  bookingId?: string;
};

const apiKeyCache = new Map<string, string>();

async function readJsonOrThrow<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let msg = `${res.status}`;
    try {
      const j = await res.json();
      msg = (j && (j.error || j.message)) || msg;
    } catch {
      try {
        const t = await res.text();
        if (t) msg = t;
      } catch {}
    }
    throw new Error(msg);
  }
  return res.json() as Promise<T>;
}

function keyForOrThrow(clinicId: string): string {
  const key = apiKeyCache.get(clinicId);
  if (!key) {
    throw new Error(
      "Booking session expired. Please refresh the page and try again.",
    );
  }
  return key;
}

export async function listClinics(): Promise<Clinic[]> {
  if (isProdHost()) {
    const res = await fetch(`${CMS_DIRECT_BASE}/clinics`);
    const data = await readJsonOrThrow<ClinicWithKey[]>(res);
    for (const c of data) {
      if (c.apiKey) apiKeyCache.set(c.clinicId, c.apiKey);
    }
    return data.map(({ apiKey: _ignored, ...rest }) => rest);
  }
  const res = await fetch(`${PROXY_BASE}/clinics`);
  return readJsonOrThrow<Clinic[]>(res);
}

export async function listServices(clinicId: string): Promise<Service[]> {
  if (isProdHost()) {
    const res = await fetch(
      `${CMS_DIRECT_BASE}/services?clinicId=${encodeURIComponent(clinicId)}`,
      { headers: { "x-api-key": keyForOrThrow(clinicId) } },
    );
    return readJsonOrThrow<Service[]>(res);
  }
  const res = await fetch(
    `${PROXY_BASE}/services?clinicId=${encodeURIComponent(clinicId)}`,
  );
  return readJsonOrThrow<Service[]>(res);
}

export async function listClinicians(clinicId: string): Promise<Clinician[]> {
  if (isProdHost()) {
    const res = await fetch(
      `${CMS_DIRECT_BASE}/clinicians?clinicId=${encodeURIComponent(clinicId)}`,
      { headers: { "x-api-key": keyForOrThrow(clinicId) } },
    );
    return readJsonOrThrow<Clinician[]>(res);
  }
  const res = await fetch(
    `${PROXY_BASE}/clinicians?clinicId=${encodeURIComponent(clinicId)}`,
  );
  return readJsonOrThrow<Clinician[]>(res);
}

export async function getAvailability(args: {
  clinicId: string;
  clinicianId: string;
  serviceId: string;
  fromDate: string;
  toDate?: string;
}): Promise<Availability> {
  const qs = new URLSearchParams({
    clinicId: args.clinicId,
    clinicianId: args.clinicianId,
    serviceId: args.serviceId,
    fromDate: args.fromDate,
  });
  if (args.toDate) qs.set("toDate", args.toDate);
  if (isProdHost()) {
    const res = await fetch(`${CMS_DIRECT_BASE}/availability?${qs}`, {
      headers: { "x-api-key": keyForOrThrow(args.clinicId) },
    });
    return readJsonOrThrow<Availability>(res);
  }
  const res = await fetch(`${PROXY_BASE}/availability?${qs}`);
  return readJsonOrThrow<Availability>(res);
}

export async function createBooking(
  payload: BookingPayload,
): Promise<BookingResult> {
  if (isProdHost()) {
    const res = await fetch(`${CMS_DIRECT_BASE}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": keyForOrThrow(payload.clinicId),
      },
      body: JSON.stringify(payload),
    });
    return readJsonOrThrow<BookingResult>(res);
  }
  const res = await fetch(`${PROXY_BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return readJsonOrThrow<BookingResult>(res);
}
