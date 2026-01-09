import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Home as HomeIcon,
  MapPin,
  Monitor,
  Phone,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";

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
        className="relative py-16 lg:py-24 bg-muted"
        data-testid="section-hero"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
                data-testid="text-hero-title"
              >
                Musculoskeletal Physiotherapy & Rehabilitation
              </h1>
              <p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                data-testid="text-hero-subtitle"
              >
                Back, neck and joint pain. Evidence-based assessment, hands-on treatment, and a clear rehab plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="text-base w-full sm:w-auto" data-testid="button-hero-book">
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:02012345678">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base w-full sm:w-auto"
                    data-testid="button-hero-call"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                  alt="Clinical physiotherapy treatment session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
                    <svg
                      key={i}
                      className="w-4 h-4 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
