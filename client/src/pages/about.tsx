import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HandMetal,
  MapPin,
  Pause,
  Phone,
  Play,
  RefreshCw,
  Shield,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import heroAboutImage from "../assets/images/hero-about.jpg";

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const clinicalStandards = [
  { icon: Shield, label: "HCPC Registered Physiotherapists" },
  { icon: Stethoscope, label: "Evidence-Based MSK Care" },
  { icon: ClipboardList, label: "Structured Assessment & Treatment Planning" },
  { icon: RefreshCw, label: "Clear Rehab Plans and Home Exercise Guidance" },
  { icon: CheckCircle2, label: "Progress Tracking and Regular Reviews" },
  { icon: Users, label: "Consistent Standards Across Clinics" },
];

const conditions = [
  "Back Pain & Sciatica",
  "Neck Pain & Headache-Related Symptoms",
  "Shoulder Pain (rotator cuff, impingement, frozen shoulder)",
  "Knee Pain (tendinopathy, OA, ligament-related)",
  "Sports Injuries & Return-to-Sport Rehab",
  "Post-Operative Rehabilitation",
];

const treatmentMethods = [
  "Manual therapy and joint mobilisation (where indicated)",
  "Progressive exercise rehabilitation",
  "Education, pacing and self-management strategies",
  "Ergonomics / posture advice relevant to your daily activities",
  "Return-to-activity and performance rehabilitation",
  "Modalities such as TENS/heat may be used as supportive options (not the core treatment)",
];

const processSteps = [
  {
    step: "1",
    title: "Assess",
    description: "Thorough history, examination and working diagnosis.",
  },
  {
    step: "2",
    title: "Treat",
    description: "Hands-on care where appropriate, combined with tailored exercises.",
  },
  {
    step: "3",
    title: "Rehabilitate",
    description: "Progressive plan, education and prevention strategies.",
  },
];

const clinics = [
  {
    name: "Stanmore",
    slug: "stanmore",
    address: "Stanmore Business and Innovation Centre, Howard Road, HA7 1GB",
    description: "Our clinic in North London with full facilities.",
  },
  {
    name: "Stockwell",
    slug: "stockwell",
    address: "Pulse Pharmacy, 310 Clapham Road, Stockwell, SW9 9AE",
    description: "Modern clinic in South London with excellent transport links.",
  },
];

const googleReviews = [
  {
    quote: "Uzma is very knowledgeable and explains the treatment clearly. After 8 sessions, the difference is brilliant. She has worked miracles in the weeks she has been treating me.",
    location: "Stanmore",
  },
  {
    quote: "Great and kind people. Amazing service 100% recommending. Professional yet friendly approach. The exercises they provided really helped with my recovery.",
    location: "Harrow",
  },
  {
    quote: "I was treated after a car accident with severe neck and shoulder pain. Within weeks I was 80%+ better with the massage and TENS machine treatments. First class service.",
    location: "Edgware",
  },
  {
    quote: "Excellent experience with the physiotherapists here. They took time to explain my condition and created a personalised rehabilitation plan that actually worked.",
    location: "Wembley",
  },
  {
    quote: "Helped me recover from a pulled calf muscle with their equipment-assisted treatment. The team is helpful with exercises beyond just the primary complaint. Highly recommended.",
    location: "Pinner",
  },
];

function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!isPlaying || !scrollRef.current) return;

    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPos = prev + 1;
        if (newPos >= maxScroll) {
          return 0;
        }
        return newPos;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const duplicatedReviews = [...googleReviews, ...googleReviews];

  return (
    <section
      className="py-16 lg:py-20 bg-slate-900"
      data-testid="section-about-testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <div>
            <h2
              className="text-2xl lg:text-3xl font-bold text-white"
              data-testid="text-about-feedback-title"
            >
              Patient Feedback
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              We're proud of the feedback we receive and continuously improve our service standards.
            </p>
          </div>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/10 border-white/30 text-white"
            data-testid="button-about-testimonial-toggle"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none border-2 border-primary/20"
              data-testid={`card-about-review-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <GoogleLogo />
              </div>
              <blockquote className="text-sm text-slate-700 mb-6 leading-relaxed min-h-[120px]">
                {review.quote}
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-slate-900" />
                <p className="text-sm font-semibold text-slate-900">
                  Patient in {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <Layout
      title="Our Approach to Physiotherapy Care | Agility Physio"
      description="Evidence-based musculoskeletal physiotherapy and rehabilitation across our clinics in Stanmore and Stockwell. Clear assessment, structured rehab plans and measurable progress."
    >
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" data-testid="section-about-hero">
        <img
          src={heroAboutImage}
          alt="Professional physiotherapy team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              data-testid="text-about-page-title"
            >
              Our Approach to Physiotherapy Care
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Evidence-based musculoskeletal physiotherapy and rehabilitation focused on clear diagnosis, structured recovery plans and measurable progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/contact">
                <Button size="lg" data-testid="button-about-book">
                  Book Assessment
                </Button>
              </Link>
              <a href="tel:02030929976">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white" data-testid="button-about-call">
                  <Phone className="w-4 h-4 mr-2" />
                  0203 092 9976
                </Button>
              </a>
            </div>
            <p className="text-sm text-white/70">
              HCPC Registered Physiotherapists &bull; Clinic, Home Visits & Virtual
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background" data-testid="section-clinical-standards">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10" data-testid="text-clinical-standards-title">
            Clinical Standards You Can Rely On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalStandards.map((item, index) => (
              <Card key={index} className="p-5" data-testid={`card-standard-${index}`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none bg-secondary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted" data-testid="section-conditions-treated">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10" data-testid="text-conditions-treated-title">
            Conditions We Commonly Treat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-3" data-testid={`item-condition-${index}`}>
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-foreground">{condition}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8">
            If you're unsure what's causing your symptoms, we can assess and guide you to the most appropriate plan.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background" data-testid="section-how-care-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10" data-testid="text-how-care-works-title">
            How Your Care Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((item, index) => (
              <Card key={index} className="p-6" data-testid={`card-process-${index}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted" data-testid="section-treatment-methods">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10" data-testid="text-treatment-methods-title">
            Treatment Methods (Used When Appropriate)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {treatmentMethods.map((method, index) => (
              <div key={index} className="flex items-start gap-3" data-testid={`item-method-${index}`}>
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background" data-testid="section-about-clinics">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid="text-about-clinics-title">
            Our Clinics
          </h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            We currently offer appointments at our clinics in Stanmore and Stockwell, with clinic-based care, home visits and virtual appointments available.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
            {clinics.map((clinic, index) => (
              <Link key={clinic.slug} href={`/clinics/${clinic.slug}`}>
                <div
                  className="p-6 bg-card border border-border cursor-pointer group transition-all hover:-translate-y-1 hover:shadow-md rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                  data-testid={`card-about-clinic-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                      <MapPin className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {clinic.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {clinic.address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {clinic.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/clinics">
              <Button variant="outline" data-testid="button-about-view-clinics">
                View Clinics
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 lg:py-20 bg-secondary/10" data-testid="section-about-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid="text-about-cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book an assessment and we'll guide you through a clear plan to support your recovery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-about-cta-book">
                Book Assessment
              </Button>
            </Link>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline" data-testid="button-about-cta-call">
                <Phone className="w-4 h-4 mr-2" />
                0203 092 9976
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
