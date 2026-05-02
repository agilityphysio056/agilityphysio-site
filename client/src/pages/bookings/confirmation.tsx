import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarPlus, Home, AlertTriangle } from "lucide-react";

type StoredBooking = {
  clinic: { id: string; name: string; address: string };
  clinician: { id: string; name: string };
  date: string;
  time: string;
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
      <svg
        viewBox="0 0 52 52"
        className="w-14 h-14"
        aria-hidden="true"
      >
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
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const fmt = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
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
    `DESCRIPTION:Reason: ${b.patient.reason}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
}

export default function BookingConfirmationPage() {
  const [booking, setBooking] = useState<StoredBooking | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("agility:demo-booking");
    if (raw) {
      try {
        setBooking(JSON.parse(raw));
      } catch {
        setBooking(null);
      }
    }
  }, []);

  useEffect(() => {
    if (!booking) return;
    // REPLACE AW-CONVERSION_ID and CONVERSION_LABEL with values from Google Ads
    // (Google Ads conversion tracking — disabled in this demo prototype.)
    // if (typeof window !== "undefined" && (window as any).gtag) {
    //   (window as any).gtag("event", "conversion", {
    //     send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
    //     value: 1.0,
    //     currency: "GBP",
    //   });
    // }
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: "booking_confirmed" });
    }
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
      description="Your physiotherapy appointment has been confirmed at Agility Physio."
    >
      <div
        className="bg-amber-50 border-b border-amber-200 text-amber-900"
        data-testid="banner-demo"
      >
        <div className="max-w-3xl mx-auto px-6 py-2.5 flex items-start sm:items-center gap-3 text-sm">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="font-semibold">Demo only — not connected.</strong>{" "}
            No booking has been created and no email or SMS has been sent.
          </p>
        </div>
      </div>

      <section className="py-14 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedCheck />
          <div className="text-center mt-6 mb-8">
            <h1
              className="text-3xl lg:text-4xl font-bold mb-3"
              data-testid="text-confirmation-title"
            >
              You're all booked in!
            </h1>
            {booking ? (
              <p className="text-muted-foreground">
                A confirmation has been sent to{" "}
                <span className="font-medium text-foreground">
                  {booking.patient.email}
                </span>
                . We'll also send an SMS reminder before your appointment.
              </p>
            ) : (
              <p className="text-muted-foreground">
                We couldn't find a booking in this session. Start again to
                make a new booking.
              </p>
            )}
          </div>

          {booking && (
            <Card className="p-6 lg:p-8" data-testid="card-confirmation-summary">
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
                  <dt className="text-muted-foreground">Appointment type</dt>
                  <dd className="font-medium" data-testid="confirm-reason">
                    {booking.patient.reason}
                  </dd>
                </div>
              </dl>
            </Card>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
            {booking && (
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
            )}
            <Button asChild size="lg" data-testid="button-back-home">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" /> Back to homepage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
