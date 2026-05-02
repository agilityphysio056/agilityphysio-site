import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarPlus, Home, Info } from "lucide-react";

type StoredBooking = {
  clinic: { id: string; name: string; address: string };
  service?: {
    id: string;
    name: string;
    priceGBP: number;
    durationMinutes: number;
  };
  clinician: { id: string; name: string };
  date: string;
  time: string;
  reference?: string | null;
  patient: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    firstVisit: "yes" | "no";
    reason: string;
    notes: string;
  };
};

function AnimatedCheck() {
  return (
    <div
      className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center"
      data-testid="icon-success"
    >
      <svg viewBox="0 0 52 52" className="w-14 h-14" aria-hidden="true">
        <circle
          cx="26"
          cy="26"
          r="23"
          fill="none"
          stroke="#16a34a"
          strokeWidth="3"
          strokeDasharray="145"
          strokeDashoffset="145"
          style={{
            animation: "tickCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
          }}
        />
        <path
          d="M14 27 L23 36 L39 18"
          fill="none"
          stroke="#16a34a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="50"
          strokeDashoffset="50"
          style={{
            animation:
              "tickDraw 0.4s 0.55s cubic-bezier(0.65, 0, 0.45, 1) forwards",
          }}
        />
      </svg>
      <style>{`
        @keyframes tickCircle { to { stroke-dashoffset: 0; } }
        @keyframes tickDraw   { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}

function buildIcsHref(b: StoredBooking) {
  const date = new Date(b.date);
  const [hh, mm] = b.time.split(":").map(Number);
  const start = new Date(date);
  start.setHours(hh, mm, 0, 0);
  const durationMin = b.service?.durationMinutes ?? 30;
  const end = new Date(start.getTime() + durationMin * 60 * 1000);
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Agility Physio//Booking//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@agilityphysio.net`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Physio appointment with ${b.clinician.name}`,
    `LOCATION:${b.clinic.name}, ${b.clinic.address}`,
    `DESCRIPTION:${b.service ? b.service.name + ". " : ""}Reason: ${b.patient.reason}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
}

export default function BookingConfirmationPage() {
  const [booking, setBooking] = useState<StoredBooking | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem("agility:booking");
    if (raw) {
      try {
        setBooking(JSON.parse(raw));
      } catch {
        setBooking(null);
      }
    }
    setLoaded(true);
  }, []);

  // Google Ads conversion + GTM dataLayer event.
  // Fires exactly once per booking (keyed by booking reference, or a
  // single-shot session flag if no reference is present) so a refresh
  // of /bookings/confirmation does not double-count the conversion.
  // The conversion label below is a placeholder — replace
  // REPLACE_WITH_CONVERSION_LABEL with the value from Google Ads.
  useEffect(() => {
    if (!booking) return;
    if (typeof window === "undefined") return;

    const firedKey = "agility:booking:conversion_fired";
    const firedFor = sessionStorage.getItem(firedKey);
    const thisFire = booking.reference || "1";
    if (firedFor === thisFire) return;

    const w = window as any;
    if (typeof w.gtag === "function") {
      w.gtag("event", "conversion", {
        send_to: "AW-17788015342/REPLACE_WITH_CONVERSION_LABEL",
        value: 50.0,
        currency: "GBP",
      });
    }
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "booking_confirmed" });

    sessionStorage.setItem(firedKey, thisFire);
  }, [booking]);

  const formattedDate = booking
    ? new Date(booking.date).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <Layout
      title="Booking confirmed | Agility Physio"
      description="Your physiotherapy appointment with Agility Physio is confirmed."
    >
      <section className="py-14 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {!loaded ? null : booking ? (
            <>
              <AnimatedCheck />
              <div className="text-center mt-6 mb-8">
                <h1
                  className="text-3xl lg:text-4xl font-bold mb-3"
                  data-testid="text-confirmation-title"
                >
                  Your booking is confirmed
                </h1>
                <p className="text-muted-foreground">
                  A confirmation has been sent to{" "}
                  <span className="font-medium text-foreground">
                    {booking.patient.email}
                  </span>
                  . We'll send a reminder by SMS to{" "}
                  <span className="font-medium text-foreground">
                    {booking.patient.phone}
                  </span>{" "}
                  before your appointment.
                </p>
                {booking.reference && (
                  <p className="text-sm text-muted-foreground mt-3">
                    Booking reference:{" "}
                    <span
                      className="font-mono font-medium text-foreground"
                      data-testid="confirm-reference"
                    >
                      {booking.reference}
                    </span>
                  </p>
                )}
              </div>

              <Card
                className="p-6 lg:p-8"
                data-testid="card-confirmation-summary"
              >
                <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-5">
                  Booking summary
                </h2>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Clinic</dt>
                    <dd className="font-medium" data-testid="confirm-clinic">
                      {booking.clinic.name}
                      <div className="text-muted-foreground font-normal">
                        {booking.clinic.address}
                      </div>
                    </dd>
                  </div>
                  {booking.service && (
                    <div>
                      <dt className="text-muted-foreground">Appointment</dt>
                      <dd className="font-medium" data-testid="confirm-service">
                        {booking.service.name} · £{booking.service.priceGBP} ·{" "}
                        {booking.service.durationMinutes} min
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-muted-foreground">Clinician</dt>
                    <dd className="font-medium" data-testid="confirm-clinician">
                      {booking.clinician.name}
                    </dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-muted-foreground">Date</dt>
                      <dd className="font-medium" data-testid="confirm-date">
                        {formattedDate}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Time</dt>
                      <dd className="font-medium" data-testid="confirm-time">
                        {booking.time}
                      </dd>
                    </div>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Patient</dt>
                    <dd className="font-medium" data-testid="confirm-patient">
                      {booking.patient.firstName} {booking.patient.lastName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Reason</dt>
                    <dd className="font-medium" data-testid="confirm-reason">
                      {booking.patient.reason}
                    </dd>
                  </div>
                </dl>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  data-testid="button-add-to-calendar"
                >
                  <a href={buildIcsHref(booking)} download="agility-physio.ics">
                    <CalendarPlus className="w-4 h-4 mr-2" /> Add to Calendar
                  </a>
                </Button>
                <Button asChild size="lg" data-testid="button-back-home">
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" /> Back to homepage
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-8">
                Need to change or cancel? Please call 0203 092 9976 at least 24
                hours before your appointment.
              </p>
            </>
          ) : (
            <Card className="p-8 text-center" data-testid="card-no-booking">
              <div
                className="w-16 h-16 mx-auto mb-5 rounded-full bg-muted flex items-center justify-center"
                aria-hidden="true"
              >
                <Info className="w-8 h-8 text-muted-foreground" />
              </div>
              <h1
                className="text-2xl lg:text-3xl font-bold mb-3"
                data-testid="text-no-booking-title"
              >
                No booking in progress
              </h1>
              <p className="text-muted-foreground mb-6">
                We couldn't find a recent booking from this session. To book an
                appointment, start from the beginning.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" data-testid="button-start-booking">
                  <Link href="/bookings">Start a new booking</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  data-testid="button-back-home"
                >
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" /> Back to homepage
                  </Link>
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
}
