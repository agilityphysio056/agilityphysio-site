import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Clock,
  GraduationCap,
  Heart,
  Shield,
  Target,
  UserCheck,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-Centred Care",
    description:
      "Every treatment plan is tailored to your individual needs, goals, and lifestyle.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Practice",
    description:
      "We use the latest research and proven techniques to deliver effective treatment.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "Clear goals and measurable outcomes to track your progress and recovery.",
  },
  {
    icon: Shield,
    title: "Professional Standards",
    description:
      "HCPC registered practitioners adhering to the highest ethical standards.",
  },
];

const qualifications = [
  "BSc (Hons) Physiotherapy",
  "MSc Musculoskeletal Physiotherapy",
  "HCPC Registered",
  "Chartered Society of Physiotherapy Member",
  "Sports Injury Specialist Certification",
  "Manual Therapy Certification",
  "Acupuncture Training",
  "15+ Years Clinical Experience",
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Patients Treated" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "4.9", label: "Google Rating" },
];

export default function About() {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
                data-testid="text-about-page-title"
              >
                About Agility Physio
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a commitment to providing exceptional
                physiotherapy care, Agility Physio has been helping patients
                overcome pain and return to their active lives for over 15
                years.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our clinic combines clinical expertise with a patient-centred
                approach, ensuring that every individual receives personalized
                care tailored to their specific condition and goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center"
                  data-testid={`card-stat-${index}`}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach to physiotherapy care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center"
                data-testid={`card-value-${index}`}
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="team"
        className="py-16 lg:py-24 bg-muted scroll-mt-24"
        data-testid="section-team"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-slate-200 max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                  alt="Lead Physiotherapist"
                  className="w-full h-full object-cover"
                />
              </div>
              <Card className="absolute -bottom-6 -right-6 p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">HCPC Registered</div>
                    <div className="text-xs text-muted-foreground">Since 2008</div>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet the Lead Physiotherapist
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of clinical experience specializing in
                musculoskeletal physiotherapy, our lead practitioner brings
                expertise in treating a wide range of conditions from sports
                injuries to chronic pain.
              </p>
              <div className="space-y-3 mb-8">
                {qualifications.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-philosophy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Treatment Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe in a holistic approach to physiotherapy that addresses
              not just the symptoms, but the underlying causes of pain and
              dysfunction. Our evidence-based methods combine hands-on manual
              therapy with targeted exercise rehabilitation to achieve lasting
              results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <GraduationCap className="w-10 h-10 text-secondary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding your condition empowers your recovery
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-10 h-10 text-secondary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Working together towards your treatment goals
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-10 h-10 text-secondary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Long-Term Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Prevention and self-management for lasting results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary" data-testid="section-about-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Book your initial consultation and take the first step towards
            recovery.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-foreground hover:bg-white/90"
            data-testid="button-about-cta"
          >
            Book Your Assessment
          </Button>
        </div>
      </section>
    </Layout>
  );
}
