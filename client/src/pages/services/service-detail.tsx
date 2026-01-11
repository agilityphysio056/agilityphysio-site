import { Link, useParams } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone } from "lucide-react";

const servicesData: Record<string, {
  title: string;
  description: string;
  metaDescription: string;
  fullDescription: string;
  benefits: string[];
  whatToExpect: string[];
  suitableFor: string[];
  pricing: { service: string; price: string }[];
}> = {
  "clinic-physiotherapy": {
    title: "Clinic Physiotherapy",
    description: "Face-to-face assessment and treatment at our fully equipped clinics.",
    metaDescription: "Clinic-based physiotherapy at our London locations. HCPC registered physiotherapists providing hands-on assessment and treatment for musculoskeletal conditions.",
    fullDescription: "Our clinic-based physiotherapy service provides comprehensive assessment and treatment in a professional clinical environment. Our clinics are fully equipped with private treatment rooms and rehabilitation facilities, allowing us to deliver the full range of physiotherapy interventions.",
    benefits: [
      "Access to full clinical equipment and treatment facilities",
      "Private treatment rooms for hands-on therapy",
      "Dedicated rehabilitation area for exercise-based treatment",
      "Immediate access to additional equipment if needed",
      "Professional clinical environment",
    ],
    whatToExpect: [
      "60-minute initial assessment to understand your condition",
      "Comprehensive physical examination and diagnosis",
      "Hands-on treatment during your first session",
      "Personalised treatment plan explained in clear terms",
      "Home exercise programme to support your recovery",
    ],
    suitableFor: [
      "Most musculoskeletal conditions",
      "Those who can travel to our clinic locations",
      "Patients requiring hands-on treatment or equipment",
      "Complex conditions requiring detailed assessment",
      "Post-operative rehabilitation",
    ],
    pricing: [
      { service: "Initial Assessment (60 mins)", price: "£85" },
      { service: "Follow-up (45 mins)", price: "£65" },
      { service: "Follow-up (30 mins)", price: "£50" },
    ],
  },
  "home-visit-physiotherapy": {
    title: "Home Visit Physiotherapy",
    description: "Professional physiotherapy treatment in the comfort of your own home.",
    metaDescription: "Home visit physiotherapy across London. HCPC registered physiotherapists providing assessment and treatment at your home. Ideal for those with mobility issues.",
    fullDescription: "Our home visit service brings expert physiotherapy directly to you. Whether you have mobility limitations, a busy schedule, or simply prefer treatment at home, our experienced physiotherapists will travel to your location with all necessary portable equipment.",
    benefits: [
      "Treatment in familiar, comfortable surroundings",
      "No need to travel when in pain",
      "Allows assessment of your home environment",
      "Practical advice on daily activities at home",
      "Convenient for those with busy schedules",
    ],
    whatToExpect: [
      "Physiotherapist arrives at your home at the scheduled time",
      "Thorough assessment of your condition",
      "Hands-on treatment using portable equipment",
      "Exercises demonstrated in your own space",
      "Advice on home modifications if appropriate",
    ],
    suitableFor: [
      "Those with mobility limitations",
      "Post-operative patients who can't travel easily",
      "Elderly patients preferring home treatment",
      "Busy professionals with limited time",
      "Anyone who prefers treatment at home",
    ],
    pricing: [
      { service: "Initial Assessment (60 mins)", price: "£120" },
      { service: "Follow-up (45 mins)", price: "£95" },
      { service: "Follow-up (30 mins)", price: "£75" },
    ],
  },
  "virtual-physiotherapy": {
    title: "Virtual Physiotherapy",
    description: "Video consultations for assessment, exercise prescription, and ongoing support.",
    metaDescription: "Online physiotherapy consultations via video call. HCPC registered physiotherapists providing assessment, exercise prescription, and rehabilitation support remotely.",
    fullDescription: "Our virtual physiotherapy service provides professional assessment and treatment via secure video consultation. This convenient option allows you to receive expert physiotherapy care from anywhere, whether you're at home, at work, or travelling.",
    benefits: [
      "Access expert physiotherapy from anywhere",
      "No travel time or costs",
      "Convenient for busy schedules",
      "Easy follow-up appointments",
      "Ideal for exercise-based rehabilitation",
    ],
    whatToExpect: [
      "Secure video call at your scheduled time",
      "Detailed discussion of your symptoms and history",
      "Guided self-assessment with your physiotherapist",
      "Exercise prescription demonstrated on screen",
      "Written summary and exercise videos sent after the session",
    ],
    suitableFor: [
      "Those who cannot easily travel to clinic",
      "Follow-up appointments and progress reviews",
      "Exercise-based rehabilitation programmes",
      "Initial assessment before clinic treatment",
      "Patients located outside our home visit area",
    ],
    pricing: [
      { service: "Initial Consultation (45 mins)", price: "£60" },
      { service: "Follow-up Consultation (30 mins)", price: "£45" },
    ],
  },
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const service = servicesData[slug];

  if (!service) {
    return (
      <Layout title="Service Not Found | Agility Physio">
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Link href="/services">
              <Button>View All Services</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${service.title} | Agility Physio`}
      description={service.metaDescription}
    >
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-service-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-secondary mb-2">Our Services</p>
            <h1
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-testid="text-service-title"
            >
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="button-book-service">
                  Book Now
                </Button>
              </Link>
              <a href="tel:02030929976">
                <Button size="lg" variant="outline">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About This Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Benefits
                </h2>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What to Expect
                </h2>
                <ul className="space-y-2">
                  {service.whatToExpect.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Suitable For
                </h2>
                <ul className="space-y-2">
                  {service.suitableFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Pricing</h3>
                <div className="space-y-3">
                  {service.pricing.map((item, index) => (
                    <div key={index} className="flex justify-between items-start gap-2">
                      <span className="text-sm text-muted-foreground">{item.service}</span>
                      <span className="text-sm font-semibold text-foreground whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
                <Link href="/fees" className="block mt-4">
                  <Button variant="outline" className="w-full">View All Fees</Button>
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Book Now</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to get started? Book your appointment today.
                </p>
                <Link href="/contact" className="block">
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is happy to help with any questions about this service.
                </p>
                <a href="tel:02030929976" className="flex items-center gap-2 text-sm text-foreground hover:text-secondary">
                  <Phone className="w-4 h-4" />
                  0203 092 9976
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Book {service.title}?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards recovery with our expert physiotherapy team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Book Now</Button>
            </Link>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline">
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
