import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

const clinics = [
  {
    name: "Stanmore",
    slug: "stanmore",
    address: "Stanmore Business and Innovation Centre, Howard Road, HA7 1GB",
    phone: "0203 092 9976",
    description: "Our flagship clinic in North London with full facilities and easy parking.",
    hours: "Mon-Fri 8am-8pm, Sat 9am-2pm",
  },
  {
    name: "Stockwell",
    slug: "stockwell",
    address: "Pulse Pharmacy, 310 Clapham Road, Stockwell, SW9 9AE",
    phone: "0203 092 9976",
    description: "Modern clinic in South London with excellent transport links.",
    hours: "Mon-Fri 8am-8pm, Sat 9am-2pm",
  },
];

export default function Clinics() {
  return (
    <Layout
      title="Our Clinics | Agility Physio"
      description="Find your nearest Agility Physio clinic. Locations in Stanmore and Stockwell, London. Book your physiotherapy appointment today."
    >
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-clinics-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-testid="text-clinics-page-title"
            >
              Our Clinic Locations
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Agility Physio operates from convenient locations across London. All clinics are fully equipped for comprehensive musculoskeletal assessment and treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinics.map((clinic, index) => (
              <Card key={clinic.slug} className="p-6 lg:p-8" data-testid={`card-clinic-${index}`}>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Physiotherapy in {clinic.name}
                </h2>
                <p className="text-muted-foreground mb-6">{clinic.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="text-sm text-foreground hover:text-secondary">
                      {clinic.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm text-foreground">{clinic.hours}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link href={`/clinics/${clinic.slug}`}>
                    <Button variant="outline" data-testid={`button-view-${clinic.slug}`}>
                      View Clinic
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button data-testid={`button-book-${clinic.slug}`}>
                      Book Here
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Home Visits & Virtual Appointments
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't make it to a clinic? We also offer home visit physiotherapy across London and virtual consultations nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/home-visit-physiotherapy">
                <Button variant="outline">Home Visits</Button>
              </Link>
              <Link href="/services/virtual-physiotherapy">
                <Button variant="outline">Virtual Appointments</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
