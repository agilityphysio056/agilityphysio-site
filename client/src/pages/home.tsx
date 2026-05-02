import { Link } from "wouter";
import { openBookingWidget } from "@/lib/booking";
import heroHomeImage from "../assets/images/hero-home.jpg";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  Home as HomeIcon,
  MapPin,
  Monitor,
  Phone,
  Shield,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import hcpcLogo from "@assets/hcpc-registered_1770502955561.png";
import cspLogo from "@assets/csp_1770502966293.png";
import charteredCrestLogo from "@assets/chartered-physio-crest_1770502966292.png";
import { TestimonialsSection, GoogleLogo } from "@/components/testimonials-section";

const trustItems = [
  { icon: Shield, label: "HCPC Registered Physios" },
  { icon: Stethoscope, label: "Evidence-based MSK Care" },
  { icon: Users, label: "Clinic, Home Visits & Virtual" },
];

const conditions = [
  { title: "Back Pain", slug: "back-pain", description: "Assessment and treatment for acute and chronic back conditions" },
  { title: "Neck Pain", slug: "neck-pain", description: "Relief from neck stiffness, whiplash, and cervical issues" },
  { title: "Shoulder Pain", slug: "shoulder-pain", description: "Treatment for frozen shoulder, rotator cuff, and impingement" },
  { title: "Knee Pain", slug: "knee-pain", description: "Rehabilitation for ligament injuries, arthritis, and post-surgery" },
  { title: "Hip Pain", slug: "hip-pain", description: "Management of hip arthritis, bursitis, and mobility issues" },
  { title: "Sciatica", slug: "sciatica", description: "Targeted treatment for sciatic nerve pain and leg symptoms" },
  { title: "Sports Injuries", slug: "sports-injuries", description: "Return to sport programmes for all activity levels" },
  { title: "Post-Op Rehab", slug: "post-op-rehab", description: "Structured recovery following orthopaedic surgery" },
];

const services = [
  {
    icon: Building2,
    title: "Clinic Physiotherapy",
    slug: "clinic-physiotherapy",
    description: "Face-to-face assessment and treatment at one of our clinics. Full access to clinical equipment and hands-on therapy.",
  },
  {
    icon: HomeIcon,
    title: "Home Visit Physiotherapy",
    slug: "home-visit-physiotherapy",
    description: "Professional physiotherapy in the comfort of your home. Ideal for those with mobility limitations or busy schedules.",
  },
  {
    icon: Monitor,
    title: "Virtual Physiotherapy",
    slug: "virtual-physiotherapy",
    description: "Video consultations for assessment, exercise prescription, and ongoing rehabilitation support from anywhere.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Assess",
    description: "Thorough clinical examination to identify the root cause of your pain and establish a clear diagnosis.",
  },
  {
    step: "2",
    title: "Treat",
    description: "Hands-on therapy and evidence-based techniques tailored to your specific condition and goals.",
  },
  {
    step: "3",
    title: "Rehab Plan",
    description: "Personalised exercise programme and guidance for long-term recovery and prevention.",
  },
];

const clinics = [
  {
    name: "Stanmore",
    slug: "stanmore",
    address: "Stanmore Business and Innovation Centre, Howard Road, HA7 1GB",
    description: "Our flagship clinic in North London with full facilities.",
  },
  {
    name: "Stockwell",
    slug: "stockwell",
    address: "Pulse Pharmacy, 310 Clapham Road, Stockwell, SW9 9AE",
    description: "Modern clinic in South London with excellent transport links.",
  },
];

export default function Home() {
  return (
    <Layout
      title="Agility Physio | Musculoskeletal Physiotherapy & Rehabilitation"
      description="Back, neck and joint pain specialists. HCPC registered physiotherapists providing evidence-based assessment, hands-on treatment, and clear rehabilitation plans."
    >
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        <img
          src={heroHomeImage}
          alt="Physiotherapist performing manual therapy treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-slate-900/60 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Agility Physio
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-testid="text-hero-title"
          >
            Evidence-Based <span className="text-primary">Physio Care</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            Our highly trained physiotherapists help you restore function, reduce pain, and get back to doing what you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center items-stretch sm:items-center mb-12 max-w-sm sm:max-w-none mx-auto">
            <Link href="/clinics" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base px-8" data-testid="button-hero-find-clinic">
                Find a Clinic
              </Button>
            </Link>
            <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-book"
                onClick={openBookingWidget}
              >
                Book Appointment
              </Button>
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-8" data-testid="google-reviews-badge">
            <GoogleLogo />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-white font-medium">Over 200 Reviews</span>
          </div>
        </div>
      </section>

      <section className="-mt-10 relative z-20 px-6 lg:px-12 pb-4" data-testid="section-insurance-logos">
        <div className="max-w-6xl mx-auto bg-[#1F2A44] py-5 px-6 lg:px-10 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none shadow-lg">
          <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10 flex-wrap">
            <img 
              src="https://mlf4ooqm0yfc.i.optimole.com/cb:epmi.4239a/w:93/h:87/q:75/f:best/dpr:2/https://purephysiotherapy.co.uk/wp-content/uploads/2025/07/tc_logos_axa_big-1.png" 
              alt="AXA" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
              data-testid="logo-axa"
            />
            <img 
              src="https://mlf4ooqm0yfc.i.optimole.com/cb:epmi.4239a/w:300/h:54/q:75/f:best/https://purephysiotherapy.co.uk/wp-content/uploads/2025/07/EXCEPTION_Aviva-primary-logo-white_RGB_14939-1.png" 
              alt="Aviva" 
              className="h-6 md:h-7 w-auto object-contain opacity-90"
              data-testid="logo-aviva"
            />
            <img 
              src="https://purephysiotherapy.co.uk/wp-content/uploads/2025/07/Bupa_logo.svg" 
              alt="Bupa" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
              data-testid="logo-bupa"
            />
            <img 
              src="https://mlf4ooqm0yfc.i.optimole.com/cb:epmi.4239a/w:300/h:79/q:75/f:best/https://purephysiotherapy.co.uk/wp-content/uploads/2025/07/simplyhealth-wob.png" 
              alt="Simplyhealth" 
              className="h-6 md:h-8 w-auto object-contain opacity-90"
              data-testid="logo-simplyhealth"
            />
            <img 
              src="https://mlf4ooqm0yfc.i.optimole.com/cb:epmi.4239a/w:300/h:162/q:75/f:best/https://purephysiotherapy.co.uk/wp-content/uploads/2025/07/vitality-logo-1.png" 
              alt="Vitality" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
              data-testid="logo-vitality"
            />
            <img 
              src="https://purephysiotherapy.co.uk/wp-content/uploads/2025/07/wpa.svg" 
              alt="WPA" 
              className="h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-90"
              data-testid="logo-wpa"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-[#F4F6FA] py-4 border-b-2 border-[#F2B705]"
        data-testid="section-trust-bar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-2 md:gap-3 justify-center text-center md:text-left"
              >
                <div className="w-8 h-8 shrink-0 rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none bg-[#1F2A44] flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <span
                  className="text-xs md:text-sm font-medium text-[#1F2A44] leading-tight"
                  data-testid={`text-trust-${index}`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-16 lg:py-20 bg-background overflow-visible"
        data-testid="section-dont-stay-in-pain"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl hidden lg:block" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Don't stay in pain.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our experienced physiotherapists in Stanmore and Stockwell provide evidence-based treatment for back pain, neck pain, shoulder pain, knee pain and sports injuries. We combine hands-on therapy, expert advice and personalised rehabilitation plans to restore movement, reduce pain and improve your quality of life.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Whether your pain is caused by work, sport or everyday activity, our clinics in Stanmore and Stockwell are here to help you recover safely and effectively.
          </p>
          <p className="font-semibold text-foreground mb-8">
            Why wait. Call us today or book online for a fast appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8" data-testid="button-pain-book" onClick={openBookingWidget}>
              Book Online
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-pain-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6FA] py-6 lg:py-8" data-testid="section-accreditation">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-medium text-[#1F2A44] text-center mb-4 uppercase tracking-wider">Professional Accreditation</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <img
              src={hcpcLogo}
              alt="HCPC Registered"
              loading="lazy"
              className="h-10 sm:h-[52px] w-auto object-contain"
              data-testid="logo-hcpc"
            />
            <img
              src={cspLogo}
              alt="Chartered Society of Physiotherapy"
              loading="lazy"
              className="h-10 sm:h-[52px] w-auto object-contain"
              data-testid="logo-csp"
            />
            <img
              src={charteredCrestLogo}
              alt="Chartered Physiotherapist"
              loading="lazy"
              className="h-10 sm:h-[52px] w-auto object-contain"
              data-testid="logo-chartered-crest"
            />
          </div>
        </div>
      </section>

      <section
        className="relative py-16 lg:py-20 bg-muted overflow-visible"
        data-testid="section-conditions"
      >
        <div className="absolute -left-20 top-1/2 w-40 h-40 bg-secondary/5 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute -right-10 bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
              data-testid="text-conditions-title"
            >
              Conditions We Treat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our HCPC registered physiotherapists specialise in the assessment and treatment of musculoskeletal conditions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {conditions.map((condition, index) => (
              <Link key={condition.slug} href={`/conditions/${condition.slug}`}>
                <div
                  className="p-4 lg:p-5 bg-card border border-border cursor-pointer h-full group transition-all hover:-translate-y-1 hover:shadow-md rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                  data-testid={`card-condition-${index}`}
                >
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {condition.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {condition.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/conditions">
              <Button variant="outline" data-testid="button-view-all-conditions">
                View All Conditions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 lg:py-20 bg-background overflow-hidden"
        data-testid="section-services"
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-muted to-transparent" />
        <div className="absolute -right-20 top-1/3 w-48 h-48 bg-primary/5 rounded-full blur-3xl hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-secondary mb-3 font-medium">
              Our Services
            </p>
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
              data-testid="text-services-title"
            >
              Physio services and treatments designed{" "}
              <span className="relative">
                around you
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-10 transform translate-y-1" />
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible treatment options to suit your needs and circumstances.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div
                  className="p-6 cursor-pointer h-full bg-card border border-border group transition-all hover:-translate-y-2 hover:shadow-lg relative overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none"
                  data-testid={`card-service-${index}`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="w-14 h-14 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-secondary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-background"
        data-testid="section-how-it-works"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
              data-testid="text-how-it-works-title"
            >
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A clear, structured approach to your recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="relative text-center group"
                data-testid={`card-process-${index}`}
              >
                <div className="w-16 h-16 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section
        className="py-16 lg:py-20 bg-background"
        data-testid="section-clinics"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
              data-testid="text-clinics-title"
            >
              Our Clinics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Convenient locations across London for your physiotherapy needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {clinics.map((clinic, index) => (
              <Link key={clinic.slug} href={`/clinics/${clinic.slug}`}>
                <div
                  className="p-6 bg-card border border-border cursor-pointer group transition-all hover:-translate-y-1 hover:shadow-md rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                  data-testid={`card-clinic-${index}`}
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
          <div className="text-center mt-8">
            <Link href="/clinics">
              <Button variant="outline" data-testid="button-view-all-clinics">
                View All Clinics
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-secondary/10"
        data-testid="section-cta"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
            data-testid="text-cta-title"
          >
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards recovery. Our team is ready to help you get back to doing what you love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" data-testid="button-cta-book" onClick={openBookingWidget}>
              Book Online
            </Button>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline" data-testid="button-cta-call">
                <Phone className="w-4 h-4 mr-2" />
                0203 092 9976
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Mon-Fri 8am-8pm | Sat 9am-2pm
          </p>
        </div>
      </section>
    </Layout>
  );
}
