import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBannerImg from "@/assets/images/hero-home-visit-nw-london.jpg";
import {
  CheckCircle2,
  Phone,
  MapPin,
  Users,
  Activity,
  Heart,
  Brain,
  Footprints,
  Shield,
  Dumbbell,
  PersonStanding,
  Star,
  CalendarCheck,
  Home,
  Stethoscope,
  BadgeCheck,
  Pause,
  Play,
} from "lucide-react";

const coverageAreas = [
  "Harrow",
  "Stanmore",
  "Wembley",
  "Edgware",
  "Pinner",
  "Northwood",
  "Ruislip",
  "Uxbridge",
  "Watford",
];

const whoIsItFor = [
  {
    icon: PersonStanding,
    title: "Elderly Patients",
    description: "Ideal for older adults who find travelling to a clinic difficult or need rehabilitation in a familiar environment.",
  },
  {
    icon: Heart,
    title: "Post-Surgery Recovery",
    description: "Structured, evidence-based rehabilitation following orthopaedic or spinal surgery delivered safely at home.",
  },
  {
    icon: Activity,
    title: "Back, Neck & Joint Pain",
    description: "Expert treatment for musculoskeletal pain conditions that make travel uncomfortable or impractical.",
  },
  {
    icon: Footprints,
    title: "Mobility & Balance Problems",
    description: "Targeted programmes to improve walking ability, balance, and independence for those with limited mobility.",
  },
  {
    icon: Users,
    title: "Busy Professionals",
    description: "Convenient home appointments that fit around your schedule — no waiting rooms, no travel time.",
  },
  {
    icon: Home,
    title: "Home Rehabilitation",
    description: "For anyone who benefits from being assessed and treated within their own home environment.",
  },
];

const homeServices = [
  {
    icon: Activity,
    title: "Musculoskeletal (MSK) Physiotherapy",
    description: "Treatment for joint, muscle, ligament, and soft-tissue conditions affecting mobility and daily function.",
  },
  {
    icon: PersonStanding,
    title: "Back & Neck Physiotherapy",
    description: "Assessment and treatment for spinal pain, stiffness, and movement-related issues managed safely at home.",
  },
  {
    icon: Heart,
    title: "Post-Surgical Rehabilitation",
    description: "Structured rehabilitation following orthopaedic or spinal surgery to restore strength, movement, and independence.",
  },
  {
    icon: Brain,
    title: "Neurological Physiotherapy",
    description: "Rehabilitation for neurological conditions focusing on balance, coordination, mobility, and functional recovery.",
  },
  {
    icon: Footprints,
    title: "Mobility & Balance Rehabilitation",
    description: "Improving walking ability, strength, and stability to support independence and reduce fall risk.",
  },
  {
    icon: Shield,
    title: "Elderly & Falls Prevention",
    description: "Specialist physiotherapy to maintain mobility, confidence, and safety for older adults.",
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Rehabilitation",
    description: "Recovery programmes designed to support safe return to activity following injury.",
  },
  {
    icon: Users,
    title: "Postural Assessment & Correction",
    description: "Addressing posture-related pain and movement dysfunctions through targeted exercises and education.",
  },
];

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Experienced HCPC Registered Physiotherapists",
    description: "All our physiotherapists are fully qualified, HCPC registered, and experienced in treating a wide range of musculoskeletal and neurological conditions.",
  },
  {
    icon: Home,
    title: "Treatment in the Comfort of Your Own Home",
    description: "No need to travel or sit in waiting rooms. We come to you, providing professional physiotherapy in a familiar and comfortable environment.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Day or Next-Day Appointments",
    description: "We aim to offer appointments within 24–48 hours where possible, so you can start your recovery without delay.",
  },
  {
    icon: Stethoscope,
    title: "Personalised Rehabilitation Plans",
    description: "Every treatment plan is tailored to your specific condition, lifestyle, and recovery goals — never a one-size-fits-all approach.",
  },
  {
    icon: Activity,
    title: "Evidence-Based Hands-On Treatment",
    description: "We use proven physiotherapy techniques including manual therapy, joint mobilisation, and exercise rehabilitation.",
  },
  {
    icon: Users,
    title: "Friendly, Patient-Centred Care",
    description: "Our team delivers professional, compassionate care that puts your wellbeing and recovery at the centre of every appointment.",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const googleReviews = [
  {
    quote: "Professional, knowledgeable, and incredibly convenient. Having physio at home made a huge difference to my recovery after knee surgery.",
    location: "Stanmore",
  },
  {
    quote: "Excellent service from start to finish. Clear advice, effective hands-on treatment, and very easy to arrange. Highly recommended.",
    location: "Harrow",
  },
  {
    quote: "A great option for anyone who struggles to travel. The physiotherapist was thorough, professional, and put me at ease straight away.",
    location: "Edgware",
  },
  {
    quote: "Uzma is very knowledgeable and explains the treatment clearly. After 8 sessions, the difference is brilliant. She has worked miracles.",
    location: "Stanmore",
  },
  {
    quote: "Great and kind people. Amazing service 100% recommending. Professional yet friendly approach. The exercises really helped with my recovery.",
    location: "Wembley",
  },
];

function TestimonialsCarousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!isPlaying || !scrollRef.current) return;
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const next = prev + 1;
        return next >= maxScroll ? 0 : next;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  const duplicated = [...googleReviews, ...googleReviews];

  return (
    <section className="py-16 lg:py-20 bg-slate-900" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3 font-medium">Testimonials</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Trusted by Patients Across London</h2>
          </div>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            data-testid="button-testimonial-toggle"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ touchAction: "pan-y" }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={() => setIsPlaying(false)}
          onTouchEnd={() => setIsPlaying(true)}
        >
          {duplicated.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none border-2 border-primary/20"
              data-testid={`card-review-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <GoogleLogo />
              </div>
              <blockquote className="text-sm text-slate-700 mb-6 leading-relaxed min-h-[100px]">
                {review.quote}
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-slate-900" />
                <p className="text-sm font-semibold text-slate-900">Patient in {review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Do I need a GP referral?",
    a: "No, you can book directly with us without a GP or consultant referral. Simply contact us to arrange your home physiotherapy appointment.",
  },
  {
    q: "Do you offer home physiotherapy near me?",
    a: "Yes, we provide home physiotherapy across North-West London including Stanmore, Harrow, Edgware, Wembley, and nearby areas. Contact us to confirm availability in your location.",
  },
  {
    q: "What areas do you cover?",
    a: "We provide home physiotherapy across North-West London, including Stanmore, Harrow, Edgware, Wembley, Pinner, Northwood, Ruislip, Uxbridge, and surrounding areas.",
  },
  {
    q: "How quickly can I book a home visit?",
    a: "Same-day or next-day appointments are available in many cases. We aim to offer appointments within 24–48 hours where possible. Contact us to check current availability.",
  },
  {
    q: "What conditions do you treat?",
    a: "We treat a wide range of conditions including back pain, neck pain, joint pain, mobility problems, post-surgical rehabilitation, balance issues, and musculoskeletal injuries across North-West London.",
  },
  {
    q: "Is home physiotherapy suitable for elderly patients?",
    a: "Yes. Home physiotherapy is ideal for elderly patients who find travelling difficult or who would benefit from rehabilitation in their own environment.",
  },
  {
    q: "Do you offer follow-up treatment at home?",
    a: "Yes. We provide both initial assessments and ongoing follow-up treatment sessions at home, allowing for continuity of care throughout your recovery.",
  },
  {
    q: "How long does recovery take?",
    a: "Recovery varies depending on the condition and individual factors. Most patients see meaningful improvement within 4–6 weeks of consistent physiotherapy.",
  },
  {
    q: "Is home visit physiotherapy covered by insurance?",
    a: "Home visit services may not always be covered by insurance. Please contact your provider and speak with us to discuss your options.",
  },
];

export default function HomePhysioWestMidlands() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["MedicalBusiness", "LocalBusiness"],
          "name": "Agility Physio",
          "url": "https://agilityphysio.co.uk",
          "telephone": "+442030929976",
          "image": "https://agilityphysio.co.uk/og-image.jpg",
          "description": "Agility Physio provides expert home physiotherapy services across North-West London, including Stanmore, Harrow, Edgware, and Wembley.",
          "medicalSpecialty": "Physiotherapy",
          "areaServed": [
            "North-West London", "Stanmore", "Harrow", "Edgware", "Wembley",
            "Pinner", "Northwood", "Ruislip", "Uxbridge", "Watford"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Physiotherapy Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Visit Physiotherapy" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MSK Physiotherapy" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-Surgical Rehabilitation" } }
            ]
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "250",
            "bestRating": "5"
          }
        }
      ]
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <Layout
      title="Home Physiotherapy North-West London | Agility Physio"
      description="Expert home physiotherapy in North-West London — Stanmore, Harrow, Edgware, Wembley & more. HCPC registered physiotherapists. Same-day appointments available. Book today."
    >
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden" data-testid="section-west-midlands-hero">
        <img
          src={heroBannerImg}
          alt="Home physiotherapy North-West London — physiotherapist treating patient at home"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-slate-900/70 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Home Visit Physiotherapy · North-West London</p>
            <h1
              className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-5"
              data-testid="text-west-midlands-title"
            >
              Home Physiotherapy in North-West London
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
              Expert home physiotherapy for pain, mobility issues, post-surgery recovery, and rehabilitation — delivered to your doorstep across Stanmore, Harrow, Edgware, Wembley, and surrounding areas. Same-day appointments available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8 w-full sm:w-auto" data-testid="button-book-west-midlands">
                  Book Your Home Visit Today
                </Button>
              </a>
              <a href="tel:02030929976">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-base px-8 w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now to Book
                </Button>
              </a>
            </div>
            <p className="text-sm text-white/70">
              HCPC registered physiotherapists &nbsp;•&nbsp; Evidence-based treatment &nbsp;•&nbsp; Same-day appointments available
            </p>
          </div>
        </div>
      </section>

      {/* GOOGLE RATING TRUST BAR */}
      <section className="py-4 bg-[#1F2A44]" data-testid="section-rating-bar">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
              <span className="text-white font-bold ml-1">5.0 / 5</span>
            </div>
            <span className="hidden sm:block text-white/30">|</span>
            <p className="text-white/90 text-sm font-medium">
              Rated 5.0/5 from <strong className="text-white">250+ verified patient reviews</strong> across North-West London
            </p>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-16 lg:py-20 bg-background" data-testid="section-who-is-it-for">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Who Is Home Physiotherapy For?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our home physiotherapy service is designed for anyone who would benefit from professional treatment without the need to visit a clinic.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoIsItFor.map((item, index) => (
              <Card key={index} className="p-6" data-testid={`card-who-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE AREA */}
      <section className="py-10 bg-muted" data-testid="section-coverage">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Card className="p-6 lg:p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Home Visits Across North-West London</h3>
                <p className="text-muted-foreground mb-4">
                  We cover a wide area across North-West London including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {coverageAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background text-sm font-medium text-foreground rounded-tl-lg rounded-br-lg border border-border"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Not sure if we cover your area? <a href="tel:02030929976" className="text-primary font-medium hover:underline">Call us to check availability.</a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="py-12 bg-background" data-testid="section-local-seo">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Local Home Physiotherapy in North-West London
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide home physiotherapy across <strong>Stanmore</strong>, <strong>Harrow</strong>, <strong>Edgware</strong>, <strong>Wembley</strong>, <strong>Pinner</strong>, <strong>Northwood</strong>, <strong>Ruislip</strong>, <strong>Uxbridge</strong>, and surrounding areas. Whether you are searching for a mobile physiotherapist near you or need home physio in Stanmore or Harrow, our HCPC registered team brings professional, evidence-based physiotherapy directly to your door — no referral required and same-day appointments available.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 lg:py-20 bg-muted" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why Choose Agility Physio for Home Visits?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver professional, patient-centred physiotherapy directly to your home — with the same clinical standards as our clinic appointments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6" data-testid={`card-why-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-book-why">
                Book Your Home Visit Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 lg:py-20 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Home Physiotherapy Treatments We Provide
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced physiotherapists deliver a full range of clinical treatments in your home, tailored to your condition and recovery goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((service, index) => (
              <Card key={index} className="p-6" data-testid={`card-home-service-${index}`}>
                <div className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 bg-muted rounded-tl-2xl rounded-br-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-sm text-muted-foreground">
              Treating conditions including back pain, neck pain, joint injuries, and more.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/conditions/back-pain">
                <span className="text-sm font-medium text-primary hover:underline cursor-pointer">Back pain physiotherapy →</span>
              </Link>
              <Link href="/conditions/neck-pain">
                <span className="text-sm font-medium text-primary hover:underline cursor-pointer">Neck pain physiotherapy →</span>
              </Link>
              <Link href="/services/clinic-physiotherapy">
                <span className="text-sm font-medium text-primary hover:underline cursor-pointer">Clinic physiotherapy →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 lg:py-20 bg-[#1F2A44]" data-testid="section-pricing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Home Visit Physiotherapy Pricing
          </h2>
          <p className="text-white/70 mb-10">
            Transparent, competitive pricing for professional home physiotherapy across North-West London.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 bg-white/5 border-white/10 text-left" data-testid="card-pricing-initial">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Initial Assessment</p>
              <p className="text-4xl font-bold text-white mb-1">from £50</p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                Comprehensive assessment, diagnosis, and first treatment session delivered in your home.
              </p>
            </Card>
            <Card className="p-8 bg-white/5 border-white/10 text-left" data-testid="card-pricing-followup">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Follow-Up Session</p>
              <p className="text-4xl font-bold text-white mb-1">from £45</p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                Ongoing treatment and rehabilitation sessions to support your continued recovery.
              </p>
            </Card>
          </div>
          <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
            Final pricing may vary depending on location, complexity, and treatment requirements. Please contact us to confirm availability and pricing for your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-book-pricing">
                Book Your Home Visit Today
              </Button>
            </a>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Phone className="w-4 h-4 mr-2" />
                Call Now to Book
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-background" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6" data-testid={`card-faq-${index}`}>
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Still have questions? We're happy to help.</p>
            <a href="tel:02030929976">
              <Button variant="outline" data-testid="button-enquire-faq">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-20 pb-36 md:pb-20 bg-secondary/10" data-testid="section-final-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Book Your Home Visit Today — Same-Day Appointments Available
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Get expert home physiotherapy in North-West London delivered directly to your door. Whether you are recovering from injury, struggling with mobility, or need physiotherapy at home in Stanmore, Harrow, or nearby — we are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-book-home-visit-cta">
                Book Your Home Visit Today
              </Button>
            </a>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline" data-testid="button-call-west-midlands">
                <Phone className="w-4 h-4 mr-2" />
                Call Now to Book
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Trusted by <strong>250+ patients</strong> across North-West London for professional, reliable home physiotherapy.
          </p>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg px-4 py-3 flex gap-3"
        data-testid="sticky-mobile-cta"
      >
        <a
          href="https://new-ob.rushcliff.com/holding-page/445519"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full" size="sm" data-testid="sticky-button-book">
            Book Home Visit
          </Button>
        </a>
        <a href="tel:02030929976" className="flex-1">
          <Button variant="outline" className="w-full" size="sm" data-testid="sticky-button-call">
            <Phone className="w-4 h-4 mr-1.5" />
            Call Us
          </Button>
        </a>
      </div>
    </Layout>
  );
}
