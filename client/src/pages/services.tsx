import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Home, Monitor, Phone, ArrowRight, MapPin } from "lucide-react";
import heroServicesImage from "../assets/images/hero-services.jpg";

const services = [
  {
    icon: Building2,
    title: "Clinic Physiotherapy",
    slug: "clinic-physiotherapy",
    description: "Face-to-face assessment and treatment at our fully equipped clinics. Full access to clinical equipment and hands-on therapy in a professional environment.",
    features: ["Private treatment rooms", "Full clinical equipment", "Rehabilitation area"],
  },
  {
    icon: Home,
    title: "Home Visit Physiotherapy",
    slug: "home-visit-physiotherapy",
    description: "Professional physiotherapy in the comfort of your home. Ideal for those with mobility limitations, post-operative patients, or busy schedules.",
    features: ["Treatment at your home", "No travel required", "Practical home advice"],
  },
  {
    icon: Monitor,
    title: "Virtual Physiotherapy",
    slug: "virtual-physiotherapy",
    description: "Video consultations for assessment, exercise prescription, and ongoing rehabilitation support. Access expert care from anywhere.",
    features: ["Convenient video calls", "Exercise programmes", "Follow-up support"],
  },
];

export default function Services() {
  return (
    <Layout
      title="Our Services | Agility Physio"
      description="Flexible physiotherapy services including clinic appointments, home visits, and virtual consultations. HCPC registered physiotherapists."
    >
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" data-testid="section-services-hero">
        <img
          src={heroServicesImage}
          alt="Professional physiotherapy treatment room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              data-testid="text-services-page-title"
            >
              Our Physiotherapy Services
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              We offer flexible treatment options to suit your needs and circumstances. Whether you prefer to visit our clinic, have us come to you, or consult online, we provide the same high standard of care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.slug} className="p-6 lg:p-8 flex flex-col" data-testid={`card-service-${index}`}>
                <div className="w-14 h-14 rounded-md bg-secondary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="block mt-auto">
                  <Button className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Card className="p-8 lg:p-12 border-secondary/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium text-secondary">West Midlands Coverage</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Home Physiotherapy in the West Midlands
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We deliver professional home physiotherapy services across Birmingham, Solihull, West Bromwich, Smethwick, Halesowen, Dudley, Redditch, Bromsgrove, and Oldbury.
                </p>
                <Link href="/services/home-physio-west-midlands">
                  <Button>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="bg-muted p-6 rounded-tl-2xl rounded-br-2xl">
                <h3 className="font-semibold text-foreground mb-4">Coverage Areas Include:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Birmingham", "Solihull", "West Bromwich", "Smethwick", "Halesowen", "Dudley", "Redditch", "Bromsgrove"].map((area) => (
                    <div key={area} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                What We Treat
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our physiotherapists are experienced in treating a wide range of musculoskeletal conditions. Common presentations include:
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Back pain",
                  "Neck pain",
                  "Shoulder injuries",
                  "Knee problems",
                  "Hip pain",
                  "Sciatica",
                  "Sports injuries",
                  "Post-surgery rehab",
                ].map((condition, index) => (
                  <li key={index} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {condition}
                  </li>
                ))}
              </ul>
              <Link href="/conditions">
                <Button variant="outline">
                  View All Conditions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div>
              <Card className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Our Approach
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Thorough clinical examination to identify the root cause of your symptoms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Treatment</h4>
                    <p className="text-sm text-muted-foreground">
                      Evidence-based hands-on therapy and techniques tailored to your condition.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Rehabilitation</h4>
                    <p className="text-sm text-muted-foreground">
                      Personalised exercise programme for long-term recovery and prevention.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Book?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards recovery. Our team is here to help you get back to doing what you love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Book Appointment</Button>
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
