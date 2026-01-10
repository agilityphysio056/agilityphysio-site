import { Link } from "wouter";
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
import { SiGoogle } from "react-icons/si";

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

const testimonials = [
  {
    quote: "After months of back pain, I finally received a proper diagnosis and treatment plan. The team were thorough, professional, and genuinely caring.",
    initials: "J.M.",
    condition: "Lower Back Pain",
  },
  {
    quote: "Excellent post-surgery rehabilitation. Clear guidance at every stage and I'm now back to full mobility. Highly recommended.",
    initials: "S.K.",
    condition: "Knee Replacement Rehab",
  },
  {
    quote: "The home visit service was invaluable when I couldn't travel. Professional treatment and a clear recovery plan that actually worked.",
    initials: "R.P.",
    condition: "Hip Pain",
  },
];

const clinics = [
  {
    name: "Stanmore",
    slug: "stanmore",
    address: "123 High Street, Stanmore, HA7 4XY",
    description: "Our flagship clinic in North London with full facilities.",
  },
  {
    name: "Stockwell",
    slug: "stockwell",
    address: "45 Clapham Road, Stockwell, SW9 0HP",
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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/5473762/5473762-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-slate-900/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Agility Physio
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-testid="text-hero-title"
          >
            Patients First <span className="text-primary">Expert Care</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            Our highly trained physiotherapists help you restore function, reduce pain, and get back to doing what you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/clinics">
              <Button size="lg" className="text-base px-8" data-testid="button-hero-find-clinic">
                Find a Clinic
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-book"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-3" data-testid="google-reviews-badge">
            <SiGoogle className="w-8 h-8 text-white" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-white font-medium">Over 200 Reviews</span>
          </div>
        </div>
      </section>

      <section
        className="bg-background py-8 border-b border-border"
        data-testid="section-trust-bar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 justify-center"
              >
                <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <span
                  className="text-sm font-medium text-foreground"
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
        className="py-16 lg:py-20 bg-background"
        data-testid="section-dont-stay-in-pain"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Don't stay in pain.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our experienced physios work with you to treat the whole body through hands on treatment, advice and creating personalised rehabilitation plans right for you. If you are experiencing neck, back, shoulder, knee or joint pain, or have suffered an injury through sports or accident that has impacted your function or quality of life, our physiotherapists can help you.
          </p>
          <p className="font-semibold text-foreground mb-8">
            Why wait. Call us today or book online for a fast appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8" data-testid="button-pain-book">
                Book Online
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-pain-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-muted"
        data-testid="section-conditions"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                <Card
                  className="p-4 lg:p-5 hover-elevate cursor-pointer h-full"
                  data-testid={`card-condition-${index}`}
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {condition.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {condition.description}
                  </p>
                </Card>
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
        className="py-16 lg:py-20 bg-muted"
        data-testid="section-services"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
              data-testid="text-services-title"
            >
              How We Can Help
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible treatment options to suit your needs and circumstances.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card
                  className="p-6 hover-elevate cursor-pointer h-full bg-background"
                  data-testid={`card-service-${index}`}
                >
                  <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
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
                className="relative text-center"
                data-testid={`card-process-${index}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-muted"
        data-testid="section-testimonials"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
              data-testid="text-testimonials-title"
            >
              Patient Feedback
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-background"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-xs font-semibold text-secondary">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">
                      {testimonial.initials}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.condition}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                <Card
                  className="p-6 hover-elevate cursor-pointer"
                  data-testid={`card-clinic-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
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
                </Card>
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
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-book">
                Book Online
              </Button>
            </Link>
            <a href="tel:02012345678">
              <Button size="lg" variant="outline" data-testid="button-cta-call">
                <Phone className="w-4 h-4 mr-2" />
                020 1234 5678
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
