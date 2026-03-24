import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Stethoscope, 
  Users, 
  Activity, 
  Heart,
  Brain,
  Footprints,
  Shield,
  Dumbbell,
  PersonStanding
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

const treatmentApproach = [
  {
    step: "1",
    title: "Comprehensive Assessment & Diagnosis",
    items: [
      "Thorough examination identifying the root cause of pain",
      "Postural and gait analysis evaluating movement patterns",
      "Custom treatment plans tailored for optimal recovery",
    ],
  },
  {
    step: "2",
    title: "Hands-On Physiotherapy & Manual Therapy",
    items: [
      "Spinal manipulation and mobilisation to restore alignment",
      "Soft tissue therapy and massage for muscle tension relief",
      "Trigger point therapy targeting deep-seated muscle pain",
    ],
  },
  {
    step: "3",
    title: "Strengthening & Rehabilitation Exercises",
    items: [
      "Core stability training to strengthen spinal support",
      "Stretching and mobility work for increased flexibility",
      "Postural training and ergonomic adjustments",
    ],
  },
  {
    step: "4",
    title: "Pain Management & Specialised Therapies",
    items: [
      "Electrotherapy and ultrasound therapy for healing",
      "Heat and cold therapy for swelling and discomfort",
      "Lifestyle and workplace ergonomic advice",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Experienced Home Visit Physiotherapists",
    description: "Our physiotherapists are highly experienced in managing back pain, joint conditions, mobility issues, and post-injury rehabilitation in a home setting.",
  },
  {
    title: "Personalised Treatment at Home",
    description: "Every treatment plan is tailored to your condition, lifestyle, and recovery goals, ensuring safe and effective rehabilitation in your own environment.",
  },
  {
    title: "Evidence-Based Physiotherapy Techniques",
    description: "We use proven methods including manual therapy, joint mobilisation, exercise rehabilitation, posture correction, and pain management techniques.",
  },
  {
    title: "Focused on Long-Term Recovery",
    description: "Our treatments address both symptoms and underlying causes to improve movement, reduce pain, and prevent recurrence.",
  },
];

export default function HomePhysioWestMidlands() {
  return (
    <Layout
      title="Home Physiotherapy in North-West London | Agility Physio"
      description="Expert home physiotherapy services across Harrow, Stanmore, Wembley, Edgware and North-West London. Professional physiotherapy delivered to your doorstep by HCPC registered practitioners."
    >
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-secondary" data-testid="section-west-midlands-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">Home Visit Physiotherapy</p>
            <h1
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              data-testid="text-west-midlands-title"
            >
              Physiotherapy Delivered to Your Doorstep
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Stay independent with our expert physiotherapy services across North-West London. Professional home physiotherapy providing advanced, evidence-based treatment in the comfort of your own home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="button-book-west-midlands">
                  Book Home Visit
                </Button>
              </Link>
              <a href="tel:02030929976">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-4 h-4 mr-2" />
                  0203 092 9976
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Home Physiotherapy Services in North-West London
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Are you struggling with chronic back pain, muscle stiffness, sciatica, or a slipped disc and finding it difficult to attend a clinic? Our expert physiotherapists deliver professional home physiotherapy services, providing advanced, evidence-based treatment in the comfort of your own home.
            </p>
          </div>

          <Card className="p-6 lg:p-8 bg-primary/5 border-primary/20 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Home Visits Across North-West London</h3>
                <p className="text-muted-foreground mb-4">
                  Our home physiotherapy service covers North-West London including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {coverageAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background text-sm text-foreground rounded-tl-lg rounded-br-lg"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Home Physiotherapy Services We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our home physiotherapy service provides a comprehensive range of treatments delivered by experienced physiotherapists in the comfort of your own home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((service, index) => (
              <Card key={index} className="p-6" data-testid={`card-home-service-${index}`}>
                <div className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Specialist Physiotherapy Treatments Delivered at Home
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on long-term recovery, ensuring you regain mobility and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatmentApproach.map((phase, index) => (
              <Card key={index} className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold text-foreground">{phase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground font-medium mb-6">
              Our goal is to help you return to a pain-free, active lifestyle as soon as possible!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How long does recovery take?</h3>
                <p className="text-muted-foreground">Most patients see improvement within 4-6 weeks of physiotherapy, though this varies depending on the condition and individual factors.</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do I need a referral?</h3>
                <p className="text-muted-foreground">No, you can book an appointment directly without a GP or consultant referral.</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Does insurance cover home visit physiotherapy?</h3>
                <p className="text-muted-foreground">Home visit services are typically not covered by insurance. Please contact us for current pricing information.</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What areas do you cover?</h3>
                <p className="text-muted-foreground">We provide home physiotherapy services across North-West London including Harrow, Stanmore, Wembley, Edgware, Pinner, Northwood, Ruislip, Uxbridge, and Watford.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Book Your Home Visit Today
          </h2>
          <p className="text-muted-foreground mb-8">
            Experience professional physiotherapy in the comfort of your own home. Our expert team is ready to help you on your recovery journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-book-home-visit-cta">
                Book Online
              </Button>
            </a>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline" data-testid="button-call-west-midlands">
                <Phone className="w-4 h-4 mr-2" />
                0203 092 9976
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Home visits delivered directly to your home — no clinic visit required
          </p>
        </div>
      </section>
    </Layout>
  );
}
