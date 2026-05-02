import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  AlertTriangle,
} from "lucide-react";
import stanmoreHero from "@assets/tuLjAm5XPGVuF4lEP2OYKEca7eUXVQNfJIxDOLqD_1768161733217.jpeg";
import stockwellHero from "@assets/front_elevation_1768163052162.jpg";

type Clinic = {
  id: string;
  name: string;
  address: string;
  image: string;
};

type Clinician = {
  id: string;
  clinicId: string;
  name: string;
  hcpc: string;
  bio: string;
  specialisms: string[];
};

const CLINICS: Clinic[] = [
  {
    id: "stanmore",
    name: "Stanmore Clinic",
    address:
      "Stanmore Business and Innovation Centre, Howard Road, Stanmore, HA7 1GB",
    image: stanmoreHero,
  },
  {
    id: "stockwell",
    name: "Stockwell Clinic",
    address: "Stockwell, London SW8",
    image: stockwellHero,
  },
];

const CLINICIANS: Clinician[] = [
  {
    id: "uzma",
    clinicId: "stanmore",
    name: "Uzma Khan",
    hcpc: "HCPC PH00001",
    bio: "Senior physiotherapist with 15+ years treating MSK and post-surgical rehab. Known for clear, calming explanations.",
    specialisms: ["Back Pain", "Post-Surgery Rehab", "Sports Injury"],
  },
  {
    id: "james",
    clinicId: "stanmore",
    name: "James Mitchell",
    hcpc: "HCPC PH00234",
    bio: "Sports physiotherapist focused on running, cycling and shoulder injuries. Works with weekend athletes and pros alike.",
    specialisms: ["Sports Injury", "Shoulder Pain", "Knee Pain"],
  },
  {
    id: "sarah",
    clinicId: "stockwell",
    name: "Sarah Chen",
    hcpc: "HCPC PH00567",
    bio: "Specialist in chronic pain, neck pain and posture-related issues. Combines manual therapy with structured exercise plans.",
    specialisms: ["Neck Pain", "Posture", "Chronic Pain"],
  },
  {
    id: "david",
    clinicId: "stockwell",
    name: "David Patel",
    hcpc: "HCPC PH00891",
    bio: "Musculoskeletal physiotherapist with a background in elite rugby. Strong focus on returning patients to full activity.",
    specialisms: ["Sports Injury", "Back Pain", "Rehab"],
  },
];

const ALL_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

function pseudoSlotsForDate(date: Date): string[] {
  const seed = date.getDate() + date.getMonth() * 31;
  return ALL_SLOTS.filter((_, i) => (seed + i) % 3 !== 0);
}

const REASONS = [
  "Back Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Sports Injury",
  "Post-Surgery Rehab",
  "Other",
];

const STEPS = ["Clinic", "Clinician", "Date & Time", "Your details"];

const patientSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  dob: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid mobile number"),
  firstVisit: z.enum(["yes", "no"], { required_error: "Please choose one" }),
  reason: z.string().min(1, "Please choose a reason"),
  notes: z.string().optional(),
  agreed: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the cancellation policy" }),
  }),
});
type PatientForm = z.infer<typeof patientSchema>;

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="w-full" aria-label="Booking progress">
      <div className="flex items-center gap-2 sm:gap-4">
        {STEPS.map((label, i) => {
          const n = i + 1;
          const completed = step > n;
          const active = step === n;
          return (
            <div key={label} className="flex-1 flex items-center gap-2">
              <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    completed
                      ? "bg-primary text-primary-foreground"
                      : active
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/25"
                      : "bg-muted text-muted-foreground"
                  }`}
                  data-testid={`step-indicator-${n}`}
                >
                  {completed ? <Check className="w-4 h-4" /> : n}
                </div>
                <span
                  className={`text-[11px] sm:text-xs text-center truncate w-full ${
                    active ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="h-1 flex-1 rounded-full bg-muted overflow-hidden -mt-4">
                  <div
                    className={`h-full bg-primary transition-all duration-500 ${
                      step > n ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StepShell({
  children,
  direction,
  step,
}: {
  children: React.ReactNode;
  direction: 1 | -1;
  step: number;
}) {
  return (
    <div
      key={step}
      className={`animate-in ${
        direction === 1 ? "slide-in-from-right-6" : "slide-in-from-left-6"
      } fade-in duration-300`}
    >
      {children}
    </div>
  );
}

function DemoBanner() {
  return (
    <div
      className="bg-amber-50 border-b border-amber-200 text-amber-900"
      data-testid="banner-demo"
    >
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-start sm:items-center gap-3 text-sm">
        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
        <p>
          <strong className="font-semibold">Demo only — not connected.</strong>{" "}
          This page is a visual prototype using sample data. Bookings made here
          are not saved or sent. To book a real appointment, use the floating
          "Book Appointment" button.
        </p>
      </div>
    </div>
  );
}

function SummaryCard({
  clinic,
  clinician,
  date,
  time,
}: {
  clinic?: Clinic;
  clinician?: Clinician;
  date?: Date;
  time?: string;
}) {
  const formattedDate = date
    ? date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <Card className="p-6 sticky top-24" data-testid="card-summary">
      <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
        Your Booking
      </h3>
      <dl className="space-y-4 text-sm">
        <div>
          <dt className="text-muted-foreground">Clinic</dt>
          <dd className="font-medium" data-testid="summary-clinic">
            {clinic?.name ?? "—"}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Clinician</dt>
          <dd className="font-medium" data-testid="summary-clinician">
            {clinician?.name ?? "—"}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Date</dt>
          <dd className="font-medium" data-testid="summary-date">
            {formattedDate ?? "—"}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Time</dt>
          <dd className="font-medium" data-testid="summary-time">
            {time ?? "—"}
          </dd>
        </div>
      </dl>
    </Card>
  );
}

export default function BookingsPage() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const [clinicId, setClinicId] = useState<string | undefined>();
  const [clinicianId, setClinicianId] = useState<string | undefined>();
  const [date, setDate] = useState<Date | undefined>();
  const [hoverDate, setHoverDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | undefined>();
  const [cliniciansLoading, setCliniciansLoading] = useState(false);

  const clinic = CLINICS.find((c) => c.id === clinicId);
  const clinician = CLINICIANS.find((c) => c.id === clinicianId);
  const availableClinicians = useMemo(
    () => CLINICIANS.filter((c) => c.clinicId === clinicId),
    [clinicId],
  );

  const previewDate = date ?? hoverDate;
  const previewSlots = previewDate ? pseudoSlotsForDate(previewDate) : [];

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  useEffect(() => {
    if (step === 2 && clinicId) {
      setCliniciansLoading(true);
      const t = setTimeout(() => setCliniciansLoading(false), 500);
      return () => clearTimeout(t);
    }
  }, [step, clinicId]);

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(4, s + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(1, s - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const form = useForm<PatientForm>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      firstVisit: undefined as unknown as "yes",
      reason: "",
      notes: "",
      agreed: false as unknown as true,
    },
  });

  const onSubmit = (data: PatientForm) => {
    if (!clinic || !clinician || !date || !time) return;
    const payload = {
      clinic: { id: clinic.id, name: clinic.name, address: clinic.address },
      clinician: { id: clinician.id, name: clinician.name },
      date: date.toISOString(),
      time,
      patient: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        firstVisit: data.firstVisit,
        reason: data.reason,
        notes: data.notes ?? "",
      },
    };
    sessionStorage.setItem("agility:demo-booking", JSON.stringify(payload));
    setLocation("/bookings/confirmation");
  };

  return (
    <Layout
      title="Book an appointment | Agility Physio"
      description="Book your physiotherapy appointment at Agility Physio. Choose your clinic, clinician and time in a few simple steps."
    >
      <DemoBanner />

      <section className="bg-slate-900 text-white py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
            Book online
          </p>
          <h1
            className="text-3xl lg:text-4xl font-bold mb-2"
            data-testid="text-bookings-title"
          >
            Reserve your appointment
          </h1>
          <p className="text-slate-300 max-w-2xl">
            A few quick steps and you're done — pick your clinic, your
            clinician and a time that suits you.
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <StepIndicator step={step} />

          <div className="mt-10">
            {step === 1 && (
              <StepShell direction={direction} step={1}>
                <h2 className="text-2xl font-bold mb-6">Step 1 — Select a clinic</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CLINICS.map((c) => {
                    const selected = clinicId === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => {
                          if (clinicId !== c.id) {
                            setClinicianId(undefined);
                            setDate(undefined);
                            setTime(undefined);
                          }
                          setClinicId(c.id);
                        }}
                        className={`text-left rounded-2xl overflow-hidden border-2 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                          selected
                            ? "border-primary shadow-lg"
                            : "border-border"
                        }`}
                        data-testid={`card-clinic-${c.id}`}
                      >
                        <div className="aspect-[2/1] bg-muted relative">
                          <img
                            src={c.image}
                            alt={`${c.name} exterior`}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            data-testid={`img-clinic-${c.id}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                          {selected && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-primary text-primary-foreground gap-1 shadow-lg">
                                <Check className="w-3 h-3" /> Selected
                              </Badge>
                            </div>
                          )}
                          <div className="absolute bottom-3 left-4 right-4 text-white">
                            <h3 className="font-bold text-xl drop-shadow-md">
                              {c.name}
                            </h3>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="text-sm text-muted-foreground flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                            <span>{c.address}</span>
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    size="lg"
                    onClick={goNext}
                    disabled={!clinicId}
                    data-testid="button-step1-next"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </StepShell>
            )}

            {step === 2 && (
              <StepShell direction={direction} step={2}>
                <h2 className="text-2xl font-bold mb-1">
                  Step 2 — Choose your clinician
                </h2>
                <p className="text-muted-foreground mb-6">
                  Available at{" "}
                  <span className="font-medium text-foreground">
                    {clinic?.name}
                  </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cliniciansLoading
                    ? Array.from({ length: 2 }).map((_, i) => (
                        <Card key={i} className="p-6">
                          <div className="flex gap-4">
                            <Skeleton className="w-16 h-16 rounded-full" />
                            <div className="flex-1 space-y-2">
                              <Skeleton className="h-4 w-32" />
                              <Skeleton className="h-3 w-24" />
                              <Skeleton className="h-3 w-full" />
                              <Skeleton className="h-3 w-3/4" />
                            </div>
                          </div>
                        </Card>
                      ))
                    : availableClinicians.map((c) => {
                        const selected = clinicianId === c.id;
                        const initials = c.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("");
                        return (
                          <button
                            key={c.id}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => {
                              if (clinicianId !== c.id) {
                                setDate(undefined);
                                setTime(undefined);
                              }
                              setClinicianId(c.id);
                            }}
                            className={`text-left rounded-2xl bg-card p-6 border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                              selected ? "border-primary shadow-lg" : "border-border"
                            }`}
                            data-testid={`card-clinician-${c.id}`}
                          >
                            <div className="flex gap-4 mb-4">
                              <div className="w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0">
                                {initials}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <h3 className="font-bold">{c.name}</h3>
                                    <p className="text-xs text-muted-foreground">
                                      {c.hcpc}
                                    </p>
                                  </div>
                                  {selected && (
                                    <Badge className="bg-primary text-primary-foreground gap-1 flex-shrink-0">
                                      <Check className="w-3 h-3" /> Selected
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {c.bio}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {c.specialisms.map((s) => (
                                <Badge
                                  key={s}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {s}
                                </Badge>
                              ))}
                            </div>
                          </button>
                        );
                      })}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={goBack}
                    data-testid="button-step2-back"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                  <Button
                    size="lg"
                    onClick={goNext}
                    disabled={!clinicianId}
                    data-testid="button-step2-next"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </StepShell>
            )}

            {step === 3 && (
              <StepShell direction={direction} step={3}>
                <h2 className="text-2xl font-bold mb-6">
                  Step 3 — Pick a date and time
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3 order-2 lg:order-1">
                    <Card className="p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Available Times
                      </h3>
                      {!previewDate && (
                        <p className="text-sm text-muted-foreground">
                          Hover or select a date to see available times.
                        </p>
                      )}
                      {previewDate && (
                        <div className="grid grid-cols-2 gap-2">
                          {previewSlots.map((slot) => {
                            const isSelected = time === slot && !!date;
                            const clickable = !!date;
                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={!clickable}
                                onClick={() => setTime(slot)}
                                className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
                                  isSelected
                                    ? "bg-primary text-primary-foreground border-primary scale-105"
                                    : clickable
                                    ? "bg-background border-border hover:border-primary hover:scale-105"
                                    : "bg-muted text-muted-foreground border-border opacity-70"
                                }`}
                                data-testid={`button-slot-${slot.replace(":", "")}`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                          {previewSlots.length === 0 && (
                            <p className="col-span-2 text-sm text-muted-foreground">
                              No slots available on this day.
                            </p>
                          )}
                        </div>
                      )}
                    </Card>
                  </div>

                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <Card className="p-2 sm:p-4 flex justify-center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(d) => {
                          setDate(d);
                          setTime(undefined);
                        }}
                        onDayMouseEnter={(d) => setHoverDate(d)}
                        onDayMouseLeave={() => setHoverDate(undefined)}
                        disabled={(d) => {
                          if (d < today) return true;
                          const day = d.getDay();
                          return day === 0 || day === 6;
                        }}
                        className="rounded-md"
                      />
                    </Card>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Weekends and past dates are unavailable. (Demo
                      availability — not real clinic schedule.)
                    </p>
                  </div>

                  <div className="lg:col-span-3 order-3">
                    <SummaryCard
                      clinic={clinic}
                      clinician={clinician}
                      date={date}
                      time={time}
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={goBack}
                    data-testid="button-step3-back"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                  <Button
                    size="lg"
                    onClick={goNext}
                    disabled={!date || !time}
                    data-testid="button-step3-next"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </StepShell>
            )}

            {step === 4 && (
              <StepShell direction={direction} step={4}>
                <h2 className="text-2xl font-bold mb-6">
                  Step 4 — Your details
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8">
                    <Card className="p-6">
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-5"
                          data-testid="form-patient-details"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First name</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      data-testid="input-first-name"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last name</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      data-testid="input-last-name"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date of birth</FormLabel>
                                <FormControl>
                                  <Input
                                    type="date"
                                    {...field}
                                    data-testid="input-dob"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email address</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      {...field}
                                      data-testid="input-email"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Mobile number</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="tel"
                                      {...field}
                                      data-testid="input-phone"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="firstVisit"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Is this your first visit?</FormLabel>
                                <div className="flex gap-2">
                                  {(["yes", "no"] as const).map((v) => {
                                    const active = field.value === v;
                                    return (
                                      <button
                                        key={v}
                                        type="button"
                                        aria-pressed={active}
                                        onClick={() => field.onChange(v)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                                          active
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "bg-background border-border hover:border-primary"
                                        }`}
                                        data-testid={`button-first-visit-${v}`}
                                      >
                                        {v === "yes" ? "Yes" : "No"}
                                      </button>
                                    );
                                  })}
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="reason"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Reason for appointment</FormLabel>
                                <Select
                                  value={field.value}
                                  onValueChange={field.onChange}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-reason">
                                      <SelectValue placeholder="Choose a reason" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {REASONS.map((r) => (
                                      <SelectItem key={r} value={r}>
                                        {r}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Notes (optional)
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    rows={3}
                                    placeholder="Anything we should know before your visit?"
                                    {...field}
                                    data-testid="input-notes"
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="agreed"
                            render={({ field }) => (
                              <FormItem>
                                <div className="flex items-start gap-3">
                                  <FormControl>
                                    <Checkbox
                                      id="agreed-checkbox"
                                      checked={!!field.value}
                                      onCheckedChange={(v) =>
                                        field.onChange(v === true)
                                      }
                                      data-testid="checkbox-agreed"
                                    />
                                  </FormControl>
                                  <Label
                                    htmlFor="agreed-checkbox"
                                    className="text-sm font-normal leading-snug cursor-pointer"
                                  >
                                    I agree to the{" "}
                                    <a
                                      href="/about"
                                      className="underline text-primary"
                                    >
                                      cancellation policy
                                    </a>
                                    .
                                  </Label>
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="lg"
                              onClick={goBack}
                              data-testid="button-step4-back"
                            >
                              <ArrowLeft className="w-4 h-4 mr-1" /> Back
                            </Button>
                            <Button
                              type="submit"
                              size="lg"
                              className="font-bold"
                              data-testid="button-confirm-booking"
                            >
                              Confirm Booking{" "}
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </Card>
                  </div>
                  <div className="lg:col-span-4">
                    <SummaryCard
                      clinic={clinic}
                      clinician={clinician}
                      date={date}
                      time={time}
                    />
                  </div>
                </div>
              </StepShell>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
