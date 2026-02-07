import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, ArrowRight } from "lucide-react";
import heroConditionsImage from "../assets/images/hero-conditions.jpg";

const conditions = [
  { title: "Back Pain", slug: "back-pain", description: "Assessment and treatment for acute and chronic back conditions including disc problems and muscle strains." },
  { title: "Neck Pain", slug: "neck-pain", description: "Relief from neck stiffness, whiplash, cervical spine issues, and associated headaches." },
  { title: "Shoulder Pain", slug: "shoulder-pain", description: "Treatment for frozen shoulder, rotator cuff injuries, impingement, and shoulder instability." },
  { title: "Knee Pain", slug: "knee-pain", description: "Rehabilitation for ligament injuries, meniscal problems, patellofemoral pain, and arthritis." },
  { title: "Hip Pain", slug: "hip-pain", description: "Management of hip arthritis, bursitis, labral tears, and hip impingement." },
  { title: "Sciatica", slug: "sciatica", description: "Targeted treatment for sciatic nerve pain, leg symptoms, and associated numbness or tingling." },
  { title: "Sports Injuries", slug: "sports-injuries", description: "Return to sport programmes for muscle strains, ligament sprains, and overuse injuries." },
  { title: "Post-Op Rehab", slug: "post-op-rehab", description: "Structured recovery following joint replacement, ACL reconstruction, and other orthopaedic surgery." },
];

const additionalConditions = [
  "Disc herniation",
  "Whiplash",
  "Tennis elbow",
  "Golfer's elbow",
  "Achilles tendinopathy",
  "Plantar fasciitis",
  "Ankle sprains",
  "Muscle strains",
  "Postural problems",
  "Repetitive strain injury",
  "Arthritis",
  "Headaches",
];

export default function Conditions() {
  return (
    <Layout
      title="Conditions We Treat | Agility Physio"
      description="Expert physiotherapy treatment for back pain, neck pain, sciatica, sports injuries, and post-operative rehabilitation. HCPC registered physiotherapists."
    >
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" data-testid="section-conditions-hero">
        <img
          src={heroConditionsImage}
          alt="Physiotherapist assessing a patient"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              data-testid="text-conditions-page-title"
            >
              Conditions We Treat
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Our HCPC registered physiotherapists specialise in the assessment and treatment of musculoskeletal conditions. Select a condition below to learn more about how we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Link key={condition.slug} href={`/conditions/${condition.slug}`}>
                <Card
                  className="p-5 hover-elevate cursor-pointer h-full"
                  data-testid={`card-condition-${index}`}
                >
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    {condition.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {condition.description}
                  </p>
                  <span className="text-sm font-medium text-secondary flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              We Also Treat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our physiotherapists have experience treating many other musculoskeletal conditions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {additionalConditions.map((condition, index) => (
              <div
                key={index}
                className="text-sm text-foreground text-center py-3 px-4 bg-background rounded-md"
              >
                {condition}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/10" data-testid="section-conditions-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Don't See Your Condition Listed?
          </h2>
          <p className="text-muted-foreground mb-8">
            We treat many other musculoskeletal conditions not listed here. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-conditions-contact">
                Contact Us
              </Button>
            </Link>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline" data-testid="button-conditions-call">
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
