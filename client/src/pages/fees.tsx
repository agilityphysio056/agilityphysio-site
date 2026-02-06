import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone } from "lucide-react";

const clinicPrices = [
  { service: "Initial Assessment (30 minutes)", price: "£50" },
  { service: "Follow-up Appointment (30 minutes)", price: "£45" },
];

const homeVisitPrices = [
  { service: "Initial Assessment (45 minutes)", price: "£70" },
  { service: "Follow-up Appointment (45 minutes)", price: "£65" },
];

const virtualPrices = [
  { service: "Initial Consultation (30 minutes)", price: "£40" },
  { service: "Follow-up Consultation (30 minutes)", price: "£35" },
];

const insurers = [
  "Bupa",
  "AXA Health",
  "Aviva",
  "Vitality",
  "Cigna",
  "WPA",
  "Nuffield Health",
  "Simply Health",
];

export default function Fees() {
  return (
    <Layout
      title="Fees & Insurance | Agility Physio"
      description="Transparent physiotherapy pricing. Self-pay rates for clinic, home visit, and virtual appointments. We work with major health insurers including Bupa, AXA, and Aviva."
    >
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-fees-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-testid="text-fees-page-title"
            >
              Fees & Insurance
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in transparent pricing. Below you'll find our self-pay rates and information about using your health insurance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6 flex flex-col" data-testid="card-clinic-prices">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Clinic Appointments
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Face-to-face treatment at our clinics
              </p>
              <div className="space-y-4">
                {clinicPrices.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <span className="text-sm text-foreground">{item.service}</span>
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block mt-auto pt-6">
                <Button className="w-full">Book Clinic Appointment</Button>
              </Link>
            </Card>

            <Card className="p-6 flex flex-col" data-testid="card-home-visit-prices">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Home Visits
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Treatment in the comfort of your home
              </p>
              <div className="space-y-4">
                {homeVisitPrices.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <span className="text-sm text-foreground">{item.service}</span>
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block mt-auto pt-6">
                <Button className="w-full">Book Home Visit</Button>
              </Link>
            </Card>

            <Card className="p-6 flex flex-col" data-testid="card-virtual-prices">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Virtual Appointments
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Video consultations from anywhere
              </p>
              <div className="space-y-4">
                {virtualPrices.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <span className="text-sm text-foreground">{item.service}</span>
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block mt-auto pt-6">
                <Button className="w-full">Book Virtual Appointment</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Health Insurance
              </h2>
              <p className="text-muted-foreground mb-6">
                We are registered with all major health insurers. If you have private health insurance, you may be able to claim for your physiotherapy treatment, subject to the terms of your policy.
              </p>
              <p className="text-muted-foreground mb-6">
                Before your first appointment, please check with your insurer whether:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground">Your policy covers physiotherapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground">You need a GP referral (some policies require this)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground">There is an excess or session limit on your policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground">You need pre-authorisation before treatment</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                Please bring your policy number and claim authorisation code to your first appointment.
              </p>
            </div>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Insurers We Work With
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {insurers.map((insurer, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-sm text-foreground">{insurer}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Don't see your insurer listed? Contact us as we work with most major providers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Payment Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Payment Methods</h3>
              <p className="text-sm text-muted-foreground">
                We accept card payments, bank transfer, and cash. Payment is due at the time of your appointment.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Cancellation Policy</h3>
              <p className="text-sm text-muted-foreground">
                Please give at least 24 hours notice if you need to cancel or reschedule. Late cancellations may incur a charge.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Receipts</h3>
              <p className="text-sm text-muted-foreground">
                Detailed receipts are provided for all appointments, which can be submitted to your insurer or used for tax purposes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Questions About Fees?
          </h2>
          <p className="text-muted-foreground mb-8">
            If you have any questions about our fees or using your health insurance, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
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
