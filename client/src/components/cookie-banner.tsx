import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  applyConsent,
  getConsent,
  setConsent,
  type ConsentCategories,
} from "@/lib/consent";

const OPEN_EVENT = "consent:open-settings";

export function openCookieSettings(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT));
  }
}

export function CookieBanner() {
  const [location] = useLocation();
  const [hasDecided, setHasDecided] = useState<boolean>(() => !!getConsent());
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentCategories>(() => {
    const c = getConsent();
    return { analytics: !!c?.analytics, marketing: !!c?.marketing };
  });

  // Apply consent (= load scripts) on every route change so that
  // navigating from a non-sensitive page to /bookings or /contact
  // does not retroactively load tags, and vice versa.
  useEffect(() => {
    applyConsent(location);
  }, [location]);

  useEffect(() => {
    const handler = () => {
      const c = getConsent();
      setDraft({ analytics: !!c?.analytics, marketing: !!c?.marketing });
      setPrefsOpen(true);
    };
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

  const acceptAll = () => {
    setConsent({ analytics: true, marketing: true });
    setHasDecided(true);
    setPrefsOpen(false);
  };

  const rejectAll = () => {
    setConsent({ analytics: false, marketing: false });
    setHasDecided(true);
    setPrefsOpen(false);
  };

  const openPrefs = () => {
    const c = getConsent();
    setDraft({ analytics: !!c?.analytics, marketing: !!c?.marketing });
    setPrefsOpen(true);
  };

  const savePrefs = () => {
    setConsent(draft);
    setHasDecided(true);
    setPrefsOpen(false);
  };

  return (
    <>
      {!hasDecided && (
        <div
          className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6"
          role="region"
          aria-label="Cookie consent"
          data-testid="cookie-banner"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card shadow-2xl p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex-1">
                <h2 className="font-semibold text-foreground mb-1">
                  We value your privacy
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use essential cookies to make this site work. With your
                  consent, we also use analytics and advertising cookies to
                  understand how the site is used and to measure the
                  effectiveness of our advertising. You can change your choice
                  at any time via "Cookie Settings" in the footer. Read our{" "}
                  <a
                    href="/privacy"
                    className="underline text-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-shrink-0 sm:w-56">
                <Button
                  onClick={acceptAll}
                  data-testid="button-cookies-accept-all"
                >
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  data-testid="button-cookies-reject-all"
                >
                  Reject All
                </Button>
                <Button
                  variant="ghost"
                  onClick={openPrefs}
                  data-testid="button-cookies-manage"
                >
                  Manage Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={prefsOpen} onOpenChange={setPrefsOpen}>
        <DialogContent className="max-w-lg" data-testid="dialog-cookie-prefs">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Choose which categories of cookies you allow. Essential cookies
              are always on because the site needs them to work.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-2">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div className="flex-1">
                <Label className="font-semibold text-foreground">
                  Essential
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Required for site functionality, security, and remembering
                  your preferences. Cannot be disabled.
                </p>
              </div>
              <Switch
                checked
                disabled
                aria-label="Essential cookies (always on)"
              />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div className="flex-1">
                <Label
                  htmlFor="toggle-analytics"
                  className="font-semibold text-foreground"
                >
                  Analytics
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Google Analytics 4 and Microsoft Clarity. Helps us understand
                  how visitors use the site so we can improve it. Never loaded
                  on the contact or booking pages.
                </p>
              </div>
              <Switch
                id="toggle-analytics"
                checked={draft.analytics}
                onCheckedChange={(v) =>
                  setDraft((d) => ({ ...d, analytics: !!v }))
                }
                data-testid="switch-analytics"
              />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div className="flex-1">
                <Label
                  htmlFor="toggle-marketing"
                  className="font-semibold text-foreground"
                >
                  Marketing
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Google Ads conversion tracking. Lets us measure the
                  effectiveness of advertising. Only fires on the booking
                  confirmation page.
                </p>
              </div>
              <Switch
                id="toggle-marketing"
                checked={draft.marketing}
                onCheckedChange={(v) =>
                  setDraft((d) => ({ ...d, marketing: !!v }))
                }
                data-testid="switch-marketing"
              />
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button
              variant="ghost"
              onClick={rejectAll}
              data-testid="button-prefs-reject-all"
            >
              Reject All
            </Button>
            <Button
              variant="outline"
              onClick={acceptAll}
              data-testid="button-prefs-accept-all"
            >
              Accept All
            </Button>
            <Button onClick={savePrefs} data-testid="button-prefs-save">
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
