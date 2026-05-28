/**
 * Cookie consent + script gating for analytics, session recording and
 * advertising. Nothing loads until the user accepts a category, and even
 * then session-recording / page-view analytics are blocked on sensitive
 * pages where personal or health data is collected.
 */

export type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = ConsentCategories & {
  decidedAt: string; // ISO timestamp
};

export const CONSENT_STORAGE_KEY = "website_cookie_consent_v1";

const GA_MEASUREMENT_ID = "G-JBRX62S0VY";
const ADS_CONVERSION_ID = "AW-17788015342";
const CLARITY_PROJECT_ID = "wu6maznu33";

/**
 * Pages where personal / health data is collected. Page-view analytics
 * (GA4) and session recording (Clarity) must NEVER load on these paths
 * — even if the user has granted analytics consent. Marketing tags
 * (Google Ads conversion) are likewise blocked on the form steps, and
 * are only allowed to fire on /bookings/confirmation (handled in that
 * page directly, gated by marketingConsentGranted()).
 */
const SENSITIVE_PATH_PREFIXES = ["/bookings", "/contact"];

export function isSensitivePath(pathname: string): boolean {
  return SENSITIVE_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    return {
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      decidedAt: typeof parsed.decidedAt === "string" ? parsed.decidedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function setConsent(categories: ConsentCategories): void {
  if (typeof window === "undefined") return;
  const record: ConsentRecord = {
    ...categories,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  // Re-apply scripts for the current page based on new consent.
  applyConsent(window.location.pathname);
  window.dispatchEvent(new CustomEvent("consent:changed", { detail: record }));
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
}

export function analyticsConsentGranted(): boolean {
  return !!getConsent()?.analytics;
}

export function marketingConsentGranted(): boolean {
  return !!getConsent()?.marketing;
}

// ---------------------------------------------------------------------------
// Script loaders. Each is idempotent — re-calling does nothing.
// ---------------------------------------------------------------------------

const loaded = {
  ga4: false,
  clarity: false,
  ads: false,
};

function ensureGtagBase(): void {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = function () {
      w.dataLayer.push(arguments);
    };
  }
}

function loadGa4(): void {
  if (loaded.ga4) return;
  loaded.ga4 = true;
  ensureGtagBase();
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  const w = window as any;
  w.gtag("js", new Date());
  w.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

function loadClarity(): void {
  if (loaded.clarity) return;
  loaded.clarity = true;
  (function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode!.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
}

function loadAds(): void {
  if (loaded.ads) return;
  loaded.ads = true;
  ensureGtagBase();
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_CONVERSION_ID}`;
  document.head.appendChild(s);
  const w = window as any;
  w.gtag("js", new Date());
  w.gtag("config", ADS_CONVERSION_ID);
}

/**
 * Activate or suppress GA4 / Clarity for the current page. Once scripts
 * are loaded into the document we cannot remove them, but we can use
 * Google's official opt-out flag and Clarity's `stop()` API to ensure
 * no pageviews are sent / no session is recorded while the user is on
 * a sensitive page, then re-enable them when they navigate away.
 */
function setSensitiveSuppression(sensitive: boolean): void {
  const w = window as any;
  // Google Analytics official disable flag.
  // https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
  w[`ga-disable-${GA_MEASUREMENT_ID}`] = sensitive;
  // Clarity: stop or resume session recording.
  if (typeof w.clarity === "function") {
    try {
      w.clarity(sensitive ? "stop" : "start");
    } catch {
      /* clarity not yet ready — disable flag above still guards GA */
    }
  }
}

/**
 * Decide which scripts (if any) should be loaded for the given page
 * based on the user's current consent. Call this on first load and on
 * every route change.
 */
export function applyConsent(pathname: string): void {
  if (typeof window === "undefined") return;
  const consent = getConsent();
  if (!consent) {
    // No decision yet — make sure nothing fires.
    setSensitiveSuppression(true);
    return;
  }

  const sensitive = isSensitivePath(pathname);

  // Always apply suppression first so that if GA/Clarity were loaded on
  // a prior non-sensitive page, they don't track this one.
  setSensitiveSuppression(sensitive || !consent.analytics);

  // Analytics + session recording — blocked on sensitive paths even
  // when the user has granted analytics consent.
  if (consent.analytics && !sensitive) {
    loadGa4();
    loadClarity();
  }

  // Marketing (Google Ads). Loaded only on the booking confirmation
  // page so the conversion can fire there. Other pages don't need it.
  // /bookings (the form) is excluded by isSensitivePath above only for
  // analytics — but for marketing we also restrict to confirmation.
  if (consent.marketing && pathname === "/bookings/confirmation") {
    loadAds();
  }
}
