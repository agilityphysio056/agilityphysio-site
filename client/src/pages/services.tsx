import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Bone,
  Brain,
  Building2,
  CheckCircle2,
  HeartPulse,
  Target,
} from "lucide-react";

const services = [
  {
    id: "sports",
    icon: Activity,
    title: "Sports Injury Treatment",
    description:
      "Comprehensive assessment and treatment for all sports-related injuries. Our specialized approach combines manual therapy, exercise rehabilitation, and biomechanical correction to get you back to peak performance.",
    features: [
      "Acute injury management",
      "Muscle and ligament rehabilitation",
      "Return-to-sport programmes",
      "Performance optimization",
      "Injury prevention strategies",
    ],
  },
  {
    id: "back",
    icon: Bone,
    title: "Back & Neck Pain",
    description:
      "Expert diagnosis and treatment for spinal conditions, disc problems, and chronic back pain. We use evidence-based manual therapy and targeted exercise to address the root cause of your pain.",
    features: [
      "Spinal assessment and diagnosis",
      "Disc herniation treatment",
      "Postural correction",
      "Core strengthening programmes",
      "Ergonomic advice",
    ],
  },
  {
    id: "rehab",
    icon: HeartPulse,
    title: "Post-Surgery Rehabilitation",
    description:
      "Structured rehabilitation programmes designed to optimize your recovery following orthopaedic or spinal surgery. We work closely with your surgical team to ensure the best outcomes.",
    features: [
      "Hip and knee replacement rehab",
      "ACL reconstruction recovery",
      "Shoulder surgery rehabilitation",
      "Spinal surgery recovery",
      "Progressive exercise protocols",
    ],
  },
  {
    id: "assessment",
    icon: Target,
    title: "Biomechanical Assessment",
    description:
      "Detailed movement analysis to identify dysfunction patterns and develop targeted treatment strategies. Ideal for athletes and those with recurring injuries.",
    features: [
      "Gait analysis",
      "Movement screening",
      "Postural assessment",
      "Strength testing",
      "Custom exercise prescription",
    ],
  },
  {
    id: "chronic",
    icon: Brain,
    title: "Chronic Pain Management",
    description:
      "A holistic, multi-modal approach to managing persistent pain conditions. We focus on improving function, reducing pain sensitivity, and enhancing quality of life.",
    features: [
      "Pain education",
      "Graded exercise therapy",
      "Manual therapy techniques",
      "Lifestyle modification",
      "Self-management strategies",
    ],
  },
  {
    id: "workplace",
    icon: Building2,
    title: "Workplace & Occupational Health",
    description:
      "Assessment and treatment for occupational injuries including repetitive strain, postural problems, and work-related musculoskeletal disorders.",
    features: [
      "Workstation assessment",
      "RSI treatment",
      "Ergonomic recommendations",
      "Return-to-work programmes",
      "Preventative strategies",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-services-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
              data-testid="text-services-page-title"
            >
              Our Physiotherapy Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a comprehensive range of physiotherapy services, each
              delivered by HCPC registered practitioners using evidence-based
              techniques. Our goal is to help you achieve lasting pain relief
              and optimal function.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
                data-testid={`section-service-${service.id}`}
              >
                <Card className="overflow-hidden">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="p-8 lg:p-12">
                      <div className="w-14 h-14 rounded-md bg-secondary/10 flex items-center justify-center mb-6">
                        <service.icon className="w-7 h-7 text-secondary" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-2 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button data-testid={`button-book-${service.id}`}>
                        Book This Service
                      </Button>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 min-h-[300px] lg:min-h-0">
                      <img
                        src={`https://images.unsplash.com/photo-157609116055${index}-2173dba999ef?auto=format&fit=crop&w=800&q=80`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary" data-testid="section-services-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Book an initial assessment and we'll help determine the best
            treatment approach for your specific condition.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-foreground hover:bg-white/90"
            data-testid="button-services-cta"
          >
            Book Initial Assessment
          </Button>
        </div>
      </section>
    </Layout>
  );
}
