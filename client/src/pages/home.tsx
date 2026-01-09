import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Bone,
  Brain,
  Building2,
  CheckCircle2,
  Clock,
  Dumbbell,
  HeartPulse,
  Phone,
  Shield,
  Stethoscope,
  Target,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  { icon: Clock, label: "15+ Years Experience" },
  { icon: Shield, label: "HCPC Registered" },
  { icon: Users, label: "1000+ Patients Treated" },
  { icon: Zap, label: "Same-Day Appointments" },
];

const services = [
  {
    icon: Activity,
    title: "Sports Injuries",
    description:
      "Comprehensive assessment and treatment for all sports-related injuries. Return to your sport stronger and injury-free.",
  },
  {
    icon: Bone,
    title: "Back & Neck Pain",
    description:
      "Expert diagnosis and treatment for spinal conditions, disc problems, and chronic back pain using evidence-based techniques.",
  },
  {
    icon: HeartPulse,
    title: "Post-Surgery Rehabilitation",
    description:
      "Structured rehabilitation programmes to optimize your recovery following orthopaedic or spinal surgery.",
  },
  {
    icon: Target,
    title: "Biomechanical Assessment",
    description:
      "Detailed movement analysis to identify dysfunction patterns and develop targeted treatment strategies.",
  },
  {
    icon: Brain,
    title: "Chronic Pain Management",
    description:
      "Holistic approach to managing persistent pain conditions with a focus on improving function and quality of life.",
  },
  {
    icon: Building2,
    title: "Workplace Injuries",
    description:
      "Assessment and treatment for occupational injuries including repetitive strain and postural problems.",
  },
];

const conditions = [
  "Lower back pain & sciatica",
  "Neck pain & stiffness",
  "Shoulder injuries & frozen shoulder",
  "Knee pain & ligament injuries",
  "Hip pain & arthritis",
  "Tennis & golfer's elbow",
  "Achilles tendinopathy",
  "Muscle strains & sprains",
  "Post-surgical recovery",
  "Postural problems",
];

const process = [
  {
    step: "01",
    icon: Stethoscope,
    title: "Assessment & Diagnosis",
    description:
      "Thorough clinical examination to identify the root cause of your pain. We use evidence-based diagnostic methods to ensure accurate assessment.",
  },
  {
    step: "02",
    icon: Target,
    title: "Personalised Treatment Plan",
    description:
      "A bespoke treatment programme tailored to your specific condition, goals, and lifestyle. Clear milestones and expected outcomes.",
  },
  {
    step: "03",
    icon: Dumbbell,
    title: "Rehabilitation & Prevention",
    description:
      "Progressive exercise therapy and education to restore function, prevent recurrence, and maintain long-term results.",
  },
];

const testimonials = [
  {
    quote:
      "After months of chronic back pain, I was skeptical anything would help. The team at Agility Physio not only diagnosed the issue correctly but provided treatment that finally gave me relief.",
    initials: "J.M.",
    condition: "Chronic Lower Back Pain",
  },
  {
    quote:
      "Professional, knowledgeable, and genuinely caring. My shoulder is now fully recovered and I'm back to playing tennis. Highly recommend their sports injury expertise.",
    initials: "S.K.",
    condition: "Rotator Cuff Injury",
  },
  {
    quote:
      "The post-surgery rehabilitation programme was excellent. Clear guidance, measurable progress, and constant support throughout my recovery journey.",
    initials: "R.P.",
    condition: "Knee Replacement Rehab",
  },
  {
    quote:
      "I appreciated the thorough assessment and the time taken to explain my condition. The treatment plan was effective and I felt informed every step of the way.",
    initials: "A.T.",
    condition: "Neck Pain & Headaches",
  },
];

export default function Home() {
  return (
    <Layout>
      <section
        className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              data-testid="text-hero-title"
            >
              Expert Physiotherapy for{" "}
              <span className="text-primary">Lasting Pain Relief</span>
            </h1>
            <p
              className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed"
              data-testid="text-hero-subtitle"
            >
              Specializing in musculoskeletal conditions, sports injuries, and
              rehabilitation. HCPC registered practitioners delivering
              evidence-based treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" data-testid="button-hero-book">
                Book Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                data-testid="button-hero-services"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-muted py-8 lg:py-10"
        data-testid="section-trust-bar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <span
                  className="text-sm font-medium text-foreground"
                  data-testid={`text-stat-${index}`}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-24 bg-background"
        data-testid="section-services"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-testid="text-services-title"
            >
              Our Physiotherapy Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive treatment options tailored to your specific needs
              and goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-secondary hover:underline"
                >
                  Learn More →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-24 bg-muted"
        data-testid="section-conditions"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
                data-testid="text-conditions-title"
              >
                Common Conditions We Treat
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our experienced physiotherapists have expertise in treating a
                wide range of musculoskeletal conditions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span
                      className="text-sm text-foreground"
                      data-testid={`text-condition-${index}`}
                    >
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" data-testid="button-conditions-cta">
                Book Your Assessment
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Clinical physiotherapy assessment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-md shadow-lg">
                <span className="font-semibold">HCPC Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-24 bg-background"
        data-testid="section-approach"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-testid="text-approach-title"
            >
              Evidence-Based Treatment Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our structured approach ensures you receive the most effective
              treatment for lasting results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative"
                data-testid={`card-process-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-primary mb-2">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-24 bg-secondary/5"
        data-testid="section-testimonials"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-testid="text-testimonials-title"
            >
              Patient Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from patients who have experienced our care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 bg-background"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-secondary">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
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
        className="py-16 lg:py-24 bg-background"
        data-testid="section-about"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-slate-200 max-w-md mx-auto lg:mx-0">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                    alt="Professional physiotherapist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
                data-testid="text-about-title"
              >
                Meet Your Physiotherapist
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of clinical experience, our lead
                physiotherapist is dedicated to providing the highest standard
                of musculoskeletal care.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "HCPC Registered Physiotherapist",
                  "Chartered Society of Physiotherapy (CSP) Member",
                  "MSc Musculoskeletal Physiotherapy",
                  "Sports Injury Specialist",
                  "Manual Therapy & Acupuncture Certified",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" data-testid="button-about-more">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-primary"
        data-testid="section-cta"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4"
            data-testid="text-cta-title"
          >
            Ready to Start Your Recovery?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Book your initial assessment today and take the first step towards
            lasting pain relief. Same-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-foreground hover:bg-white/90"
              data-testid="button-cta-book"
            >
              Book Your Assessment
            </Button>
            <a
              href="tel:+442012345678"
              className="flex items-center gap-2 text-primary-foreground hover:underline"
              data-testid="link-cta-phone"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">020 1234 5678</span>
            </a>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-6">
            Clinic Hours: Mon-Fri 8am-8pm | Sat 9am-2pm
          </p>
        </div>
      </section>
    </Layout>
  );
}
