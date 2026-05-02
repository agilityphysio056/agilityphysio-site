import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
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
  Clock,
  MapPin,
  AlertCircle,
  Loader2,
} from "lucide-react";
import stanmoreHero from "@assets/tuLjAm5XPGVuF4lEP2OYKEca7eUXVQNfJIxDOLqD_1768161733217.jpeg";
import stockwellHero from "@assets/front_elevation_1768163052162.jpg";
import {
  listClinics,
  listServices,
  listClinicians,
  getAvailability,
  createBooking,
  type Clinic,
  type Clinician,
  type Service,
  type Slot,
  type Availability,
} from "@/lib/cms";

function formatDateISO(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function clinicImage(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("stockwell")) return stockwellHero;
  return stanmoreHero;
}

function displayServiceName(name: string): string {
  return name
    .replace(/^pay as you go\s*[-–]\s*/i, "")
    .replace(/^private\s*[-–]\s*/i, "")
    .trim();
}

function serviceOrder(name: string): number {
  const clean = displayServiceName(name).toLowerCase();
  if (clean.includes("initial")) return 0;
  if (clean.includes("treatment") || clean.includes("follow")) return 1;
  if (clean.includes("home")) return 2;
  return 3;
}

const REASONS = [
  "Back Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Knee Pain",
  "Sports Injury",
  "Post-Surgery Rehab",
  "Other",
];

const STEPS = ["Clinic", "Service", "Clinician", "Date & Time", "Your details"];

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
      <div className="flex items-center gap-1.5 sm:gap-3">
        {STEPS.map((label, i) => {
          const n = i + 1;
          const completed = step > n;
          const active = step === n;
          return (
            <div key={label} className="flex-1 flex items-center gap-1.5">
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
                  className={`text-[10px] sm:text-xs text-center truncate w-full ${
                    active
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
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
        direction === 1
          ? "slide-in-from-right-6"
          : "slide-in-from-left-6"
      } fade-in duration-300`}
    >
      {children}
    </div>
  );
}

function SummaryCard({
  clinic,
  service,
  clinician,
  date,
  time,
}: {
  clinic?: Clinic;
  service?: Service;
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
          <dt className="text-muted-foreground">Service</dt>
          <dd className="font-medium" data-testid="summary-service">
            {service
              ? `${displayServiceName(service.name)} · £${service.priceGBP}`
              : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Clinician</dt>
          <dd className="font-medium" data-testid="summary-clinician">
            {clinician
              ? `${clinician.firstName} ${clinician.lastName}`
              : "—"}
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
  const [serviceId, setServiceId] = useState<string | undefined>();
  const [clinicianId, setClinicianId] = useState<string | undefined>();
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | undefined>();

  const clinicsQ = useQuery<Clinic[]>({
    queryKey: ["/api/cms/clinics"],
    queryFn: () => listClinics(),
  });
  const clinic = clinicsQ.data?.find((c) => c.clinicId === clinicId);

  const servicesQ = useQuery<Service[]>({
    queryKey: ["/api/cms/services", clinic?.clinicId],
    queryFn: () => listServices(clinic!.clinicId),
    enabled: !!clinic,
  });
  const sortedServices = useMemo(
    () =>
      (servicesQ.data ?? [])
        .slice()
        .sort((a, b) => serviceOrder(a.name) - serviceOrder(b.name)),
    [servicesQ.data],
  );
  const service = sortedServices.find((s) => s.serviceId === serviceId);

  const cliniciansQ = useQuery<Clinician[]>({
    queryKey: ["/api/cms/clinicians", clinic?.clinicId],
    queryFn: () => listClinicians(clinic!.clinicId),
    enabled: !!clinic,
  });
  const cliniciansForService = useMemo(() => {
    if (!service) return [];
    return (cliniciansQ.data ?? []).filter((c) =>
      c.serviceIds.includes(service.serviceId),
    );
  }, [cliniciansQ.data, service]);
  const clinician = (cliniciansQ.data ?? []).find(
    (c) => c.clinicianId === clinicianId,
  );

  const todayISO = useMemo(() => formatDateISO(new Date()), []);
  const toDateISO = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 90);
    return formatDateISO(d);
  }, []);
  const availabilityQ = useQuery<Availability>({
    queryKey: [
      "/api/cms/availability",
      clinic?.clinicId,
      clinician?.clinicianId,
      service?.serviceId,
      todayISO,
      toDateISO,
    ],
    queryFn: () =>
      getAvailability({
        clinicId: clinic!.clinicId,
        clinicianId: clinician!.clinicianId,
        serviceId: service!.serviceId,
        fromDate: todayISO,
        toDate: toDateISO,
      }),
    enabled: !!clinic && !!clinician && !!service,
    staleTime: 60 * 1000,
  });
  const availableDays = useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const d of availabilityQ.data?.days ?? []) map.set(d.date, d.slots);
    return map;
  }, [availabilityQ.data]);
  const slotsForDate = (d: Date | undefined): Slot[] => {
    if (!d) return [];
    return availableDays.get(formatDateISO(d)) ?? [];
  };

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(STEPS.length, s + 1));
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(1, s - 1));
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  const bookingMutation = useMutation({
    mutationFn: async (data: PatientForm) => {
      if (!clinic || !service || !clinician || !date || !time)
        throw new Error("Missing booking details");
      const dateISO = formatDateISO(date);
      const noteParts = [
        `First visit: ${data.firstVisit === "yes" ? "Yes" : "No"}`,
        `Reason: ${data.reason}`,
        `DOB: ${data.dob}`,
      ];
      if (data.notes && data.notes.trim())
        noteParts.push(`Notes: ${data.notes.trim()}`);
      return createBooking({
        clinicId: clinic.clinicId,
        serviceId: service.serviceId,
        clinicianId: clinician.clinicianId,
        date: dateISO,
        time: time!,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        notes: noteParts.join(" | "),
      });
    },
    onSuccess: (resData, formData) => {
      if (!clinic || !service || !clinician || !date || !time) return;
      const stored = {
        clinic: {
          id: clinic.clinicId,
          name: clinic.name,
          address: clinic.address,
        },
        service: {
          id: service.serviceId,
          name: displayServiceName(service.name),
          priceGBP: service.priceGBP,
          durationMinutes: service.durationMinutes,
        },
        clinician: {
          id: clinician.clinicianId,
          name: `${clinician.firstName} ${clinician.lastName}`,
        },
        date: date.toISOString(),
        time,
        reference: resData?.bookingReference ?? resData?.bookingId ?? null,
        patient: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          firstVisit: formData.firstVisit,
          reason: formData.reason,
          notes: formData.notes ?? "",
        },
      };
      sessionStorage.setItem("agility:booking", JSON.stringify(stored));
      setLocation("/bookings/confirmation");
    },
  });

  const onSubmit = (data: PatientForm) => bookingMutation.mutate(data);

  return (
    <Layout
      title="Book an appointment | Agility Physio"
      description="Book your physiotherapy appointment at Agility Physio. Choose your clinic, clinician and time in a few simple steps."
    >
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
                <h2 className="text-2xl font-bold mb-6">
                  Select a clinic
                </h2>
                {clinicsQ.isLoading && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[0, 1].map((i) => (
                      <Card key={i} className="overflow-hidden">
                        <Skeleton className="aspect-[2/1] w-full" />
                        <div className="p-5 space-y-2">
                          <Skeleton className="h-5 w-40" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
                {clinicsQ.error && (
                  <Alert variant="destructive" data-testid="alert-clinics-error">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      We couldn't load the clinics right now. Please refresh, or
                      call us on 0203 092 9976 to book.
                    </AlertDescription>
                  </Alert>
                )}
                {!clinicsQ.isLoading && !clinicsQ.error && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(clinicsQ.data ?? []).map((c) => {
                      const selected = clinicId === c.clinicId;
                      return (
                        <button
                          key={c.clinicId}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => {
                            if (clinicId !== c.clinicId) {
                              setServiceId(undefined);
                              setClinicianId(undefined);
                              setDate(undefined);
                              setTime(undefined);
                            }
                            setClinicId(c.clinicId);
                          }}
                          className={`text-left rounded-2xl overflow-hidden border-2 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                            selected
                              ? "border-primary shadow-lg"
                              : "border-border"
                          }`}
                          data-testid={`card-clinic-${c.clinicId}`}
                        >
                          <div className="aspect-[2/1] bg-muted relative">
                            <img
                              src={clinicImage(c.name)}
                              alt={`${c.name} exterior`}
                              className="absolute inset-0 w-full h-full object-cover"
                              loading="lazy"
                              data-testid={`img-clinic-${c.clinicId}`}
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
                )}
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
                  Choose your appointment
                </h2>
                <p className="text-muted-foreground mb-6">
                  At{" "}
                  <span className="font-medium text-foreground">
                    {clinic?.name}
                  </span>
                </p>
                {servicesQ.isLoading && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[0, 1, 2].map((i) => (
                      <Card key={i} className="p-6 space-y-3">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-8 w-20" />
                        <Skeleton className="h-3 w-24" />
                      </Card>
                    ))}
                  </div>
                )}
                {servicesQ.error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      We couldn't load services. Please try again or call 0203
                      092 9976.
                    </AlertDescription>
                  </Alert>
                )}
                {!servicesQ.isLoading && !servicesQ.error && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sortedServices.map((s) => {
                      const selected = serviceId === s.serviceId;
                      const display = displayServiceName(s.name);
                      return (
                        <button
                          key={s.serviceId}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => {
                            if (serviceId !== s.serviceId) {
                              setClinicianId(undefined);
                              setDate(undefined);
                              setTime(undefined);
                            }
                            setServiceId(s.serviceId);
                          }}
                          className={`text-left rounded-2xl bg-card p-6 border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                            selected
                              ? "border-primary shadow-lg"
                              : "border-border"
                          }`}
                          data-testid={`card-service-${s.serviceId}`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <h3 className="font-bold text-lg leading-tight">
                              {display}
                            </h3>
                            {selected && (
                              <Badge className="bg-primary text-primary-foreground gap-1 flex-shrink-0">
                                <Check className="w-3 h-3" />
                              </Badge>
                            )}
                          </div>
                          <div className="text-3xl font-bold text-foreground mb-2">
                            £{s.priceGBP}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{s.durationMinutes} minutes</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
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
                    disabled={!serviceId}
                    data-testid="button-step2-next"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </StepShell>
            )}

            {step === 3 && (
              <StepShell direction={direction} step={3}>
                <h2 className="text-2xl font-bold mb-1">
                  Choose your clinician
                </h2>
                <p className="text-muted-foreground mb-6">
                  Available for{" "}
                  <span className="font-medium text-foreground">
                    {service ? displayServiceName(service.name) : ""}
                  </span>{" "}
                  at{" "}
                  <span className="font-medium text-foreground">
                    {clinic?.name}
                  </span>
                </p>
                {cliniciansQ.isLoading && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[0, 1].map((i) => (
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
                    ))}
                  </div>
                )}
                {cliniciansQ.error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      We couldn't load clinicians. Please try again.
                    </AlertDescription>
                  </Alert>
                )}
                {!cliniciansQ.isLoading &&
                  !cliniciansQ.error &&
                  cliniciansForService.length === 0 && (
                    <Card
                      className="p-6 text-center"
                      data-testid="state-no-clinicians"
                    >
                      <p className="text-muted-foreground">
                        No clinicians available for this appointment type at{" "}
                        {clinic?.name}. Please go back and choose a different
                        service or clinic.
                      </p>
                    </Card>
                  )}
                {!cliniciansQ.isLoading &&
                  !cliniciansQ.error &&
                  cliniciansForService.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cliniciansForService.map((c) => {
                        const selected = clinicianId === c.clinicianId;
                        const fullName = `${c.firstName} ${c.lastName}`;
                        const initials = fullName
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("");
                        return (
                          <button
                            key={c.clinicianId}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => {
                              if (clinicianId !== c.clinicianId) {
                                setDate(undefined);
                                setTime(undefined);
                              }
                              setClinicianId(c.clinicianId);
                            }}
                            className={`text-left rounded-2xl bg-card p-6 border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                              selected
                                ? "border-primary shadow-lg"
                                : "border-border"
                            }`}
                            data-testid={`card-clinician-${c.clinicianId}`}
                          >
                            <div className="flex gap-4 mb-4">
                              {c.photoUrl ? (
                                <img
                                  src={c.photoUrl}
                                  alt={fullName}
                                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                />
                              ) : (
                                <div className="w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0">
                                  {initials}
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <h3 className="font-bold">{fullName}</h3>
                                    {c.title && (
                                      <p className="text-xs text-muted-foreground">
                                        {c.title}
                                      </p>
                                    )}
                                    {c.hcpcNumber && (
                                      <p className="text-xs text-muted-foreground">
                                        HCPC {c.hcpcNumber}
                                      </p>
                                    )}
                                  </div>
                                  {selected && (
                                    <Badge className="bg-primary text-primary-foreground gap-1 flex-shrink-0">
                                      <Check className="w-3 h-3" /> Selected
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            {c.bio && (
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                {c.bio}
                              </p>
                            )}
                            {c.specialisms.length > 0 && (
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
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
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
                    disabled={!clinicianId}
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
                  Pick a date and time
                </h2>
                {availabilityQ.isLoading && (
                  <Card className="p-12 flex items-center justify-center">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    <span className="ml-3 text-muted-foreground">
                      Loading availability…
                    </span>
                  </Card>
                )}
                {availabilityQ.error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      We couldn't load availability. Please try again or call
                      0203 092 9976.
                    </AlertDescription>
                  </Alert>
                )}
                {!availabilityQ.isLoading && !availabilityQ.error && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-3 order-2 lg:order-1">
                      <Card className="p-5">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4 flex items-center gap-2">
                          <Clock className="w-4 h-4" /> Available Times
                        </h3>
                        {!date && (
                          <p className="text-sm text-muted-foreground">
                            Select a date to see available times.
                          </p>
                        )}
                        {date && (
                          <div className="grid grid-cols-2 gap-2">
                            {slotsForDate(date).map((slot) => {
                              const isSelected = time === slot.startTime;
                              return (
                                <button
                                  key={slot.startTime}
                                  type="button"
                                  onClick={() => setTime(slot.startTime)}
                                  className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
                                    isSelected
                                      ? "bg-primary text-primary-foreground border-primary scale-105"
                                      : "bg-background border-border hover:border-primary hover:scale-105"
                                  }`}
                                  data-testid={`button-slot-${slot.startTime.replace(
                                    ":",
                                    "",
                                  )}`}
                                >
                                  {slot.startTime}
                                </button>
                              );
                            })}
                            {slotsForDate(date).length === 0 && (
                              <p className="col-span-2 text-sm text-muted-foreground">
                                No slots available on this day. Please pick
                                another date.
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
                          disabled={(d) => {
                            if (d < today) return true;
                            const slots = availableDays.get(formatDateISO(d));
                            return !slots || slots.length === 0;
                          }}
                          className="rounded-md"
                        />
                      </Card>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Greyed-out dates are unavailable. For appointments
                        further ahead, please call 0203 092 9976.
                      </p>
                    </div>

                    <div className="lg:col-span-3 order-3">
                      <SummaryCard
                        clinic={clinic}
                        service={service}
                        clinician={clinician}
                        date={date}
                        time={time}
                      />
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={goBack}
                    data-testid="button-step4-back"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                  <Button
                    size="lg"
                    onClick={goNext}
                    disabled={!date || !time}
                    data-testid="button-step4-next"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </StepShell>
            )}

            {step === 5 && (
              <StepShell direction={direction} step={5}>
                <h2 className="text-2xl font-bold mb-6">
                  Your details
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
                                <FormLabel>Notes (optional)</FormLabel>
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
                          {bookingMutation.isError && (
                            <Alert
                              variant="destructive"
                              data-testid="alert-booking-error"
                            >
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription>
                                We couldn't confirm your booking.{" "}
                                {bookingMutation.error instanceof Error
                                  ? bookingMutation.error.message
                                  : ""}{" "}
                                Please try again, or call 0203 092 9976.
                              </AlertDescription>
                            </Alert>
                          )}
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="lg"
                              onClick={goBack}
                              disabled={bookingMutation.isPending}
                              data-testid="button-step5-back"
                            >
                              <ArrowLeft className="w-4 h-4 mr-1" /> Back
                            </Button>
                            <Button
                              type="submit"
                              size="lg"
                              className="font-bold"
                              disabled={bookingMutation.isPending}
                              data-testid="button-confirm-booking"
                            >
                              {bookingMutation.isPending ? (
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                  Confirming…
                                </>
                              ) : (
                                <>
                                  Confirm Booking{" "}
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </>
                              )}
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </Card>
                  </div>
                  <div className="lg:col-span-4">
                    <SummaryCard
                      clinic={clinic}
                      service={service}
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
