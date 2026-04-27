import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/testimonials-section";
import { openBookingWidget } from "@/lib/booking";
import {
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  CreditCard,
  Hospital,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Train,
} from "lucide-react";
import stanmoreClinicImage from "@assets/tuLjAm5XPGVuF4lEP2OYKEca7eUXVQNfJIxDOLqD_1768161733217.jpeg";

const services = [
  "Musculoskeletal Assessment",
  "Back & Neck Pain Treatment",
  "Sports Injury Rehabilitation",
  "Post-Operative Rehabilitation",
  "Joint & Muscle Pain",
  "Sciatica Treatment",
];

const trustBadges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: CheckCircle2, label: "HCPC Registered" },
  { icon: CheckCircle2, label: "10+ Years Experience" },
  { icon: CheckCircle2, label: "AXA & BUPA Recognised" },
];

const whyChooseUs = [
  { icon: Calendar, title: "Same Week Appointments", description: "Get seen quickly — most patients book within days." },
  { icon: Hospital, title: "Private Treatment Rooms", description: "Comfortable, modern spaces for one-to-one care." },
  { icon: ShieldCheck, title: "HCPC Registered Therapists", description: "Fully qualified, regulated professionals you can trust." },
  { icon: CreditCard, title: "AXA & BUPA Recognised", description: "Direct billing accepted with major insurers." },
];

export default function StanmoreClinic() {
  return (
    <Layout
      title="Physiotherapy in Stanmore | Agility Physio"
      description="Expert physiotherapy in Stanmore, North London. HCPC registered physiotherapists specialising in back pain, neck pain, sports injuries, and post-surgery rehabilitation. Book your appointment today."
    >
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden" data-testid="section-clinic-hero">
        <img
          src={stanmoreClinicImage}
          alt="Stanmore Business and Innovation Centre - Agility Physio clinic location"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Agility Physio · Stanmore</p>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              data-testid="text-clinic-title"
            >
              Expert Physiotherapy in Stanmore
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              HCPC Registered Physiotherapists | Same Week Appointments Available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                size="lg"
                onClick={openBookingWidget}
                className="text-base px-8 shadow-lg"
                data-testid="button-hero-book"
              >
                Book Appointment
              </Button>
              <a href="tel:02030929976" data-testid="link-hero-call">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0203 092 9976
                </Button>
              </a>
            </div>

            {/* Urgency line */}
            <p className="text-sm text-primary font-medium mb-6" data-testid="text-urgency">
              📅 Limited appointments available this week — book now to secure your slot
            </p>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-2" data-testid="trust-bar">
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Icon className={`w-4 h-4 ${badge.icon === Star ? "text-primary fill-primary" : "text-primary"}`} />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — reused from homepage */}
      <div className="bg-slate-900 pt-12 lg:pt-16" data-testid="section-reviews-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary text-lg font-semibold mb-2">★★★★★ 200+ Google 5 Star Reviews</p>
          <p className="text-white/90 text-sm md:text-base">
            Rated 5 stars by our patients in Stanmore
          </p>
        </div>
      </div>
      <TestimonialsSection />

      {/* MAIN CONTENT */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About Our Stanmore Clinic
                </h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    Located in the heart of Stanmore, our physiotherapy clinic offers comprehensive assessment and treatment for a wide range of musculoskeletal conditions. Whether you're experiencing back pain, recovering from surgery, or managing a sports injury, our HCPC registered physiotherapists are here to help.
                  </p>
                  <p>
                    Our clinic is fully equipped with modern treatment facilities, including private treatment rooms for hands-on therapy and a dedicated rehabilitation area for exercise-based treatment. We provide a calm, professional environment where you can focus on your recovery.
                  </p>
                  <p>
                    We work with patients of all ages and activity levels, from office workers with postural problems to athletes requiring sports-specific rehabilitation. Our approach combines thorough clinical assessment with evidence-based treatment techniques to achieve lasting results.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What to Expect
                </h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    Your first appointment will begin with a comprehensive assessment. Your physiotherapist will take a detailed history of your condition, discuss your symptoms and goals, and perform a thorough physical examination. This allows us to establish an accurate diagnosis and develop a personalised treatment plan.
                  </p>
                  <p>
                    Treatment may include a combination of manual therapy techniques, exercise prescription, movement re-education, and advice on self-management. We believe in empowering our patients with the knowledge and tools to manage their condition effectively.
                  </p>
                  <p>
                    Follow-up appointments are tailored to your needs, with treatment progressing as your condition improves. We'll provide you with a clear rehabilitation plan and keep you informed at every stage of your recovery.
                  </p>
                </div>
              </div>

              {/* WHY CHOOSE US */}
              <div data-testid="section-why-choose-us">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose Agility Physio Stanmore
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="bg-white p-5 rounded-2xl shadow-sm border border-border hover-elevate"
                        data-testid={`card-why-${i}`}
                      >
                        <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Conditions We Treat
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our Stanmore physiotherapists have extensive experience treating:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Lower back pain and sciatica</li>
                  <li>Neck pain and cervical problems</li>
                  <li>Shoulder injuries including rotator cuff and frozen shoulder</li>
                  <li>Knee pain, ligament injuries, and post-surgical rehabilitation</li>
                  <li>Hip pain and arthritis management</li>
                  <li>Tennis elbow, golfer's elbow, and other repetitive strain injuries</li>
                  <li>Sports injuries and return-to-sport programmes</li>
                  <li>Post-operative rehabilitation following orthopaedic surgery</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Red Flags: When to Seek Urgent Help
                </h2>
                <p className="text-muted-foreground mb-4">
                  While most musculoskeletal conditions can be safely managed with physiotherapy, some symptoms require urgent medical attention. Please seek immediate medical advice if you experience:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Sudden severe weakness in your arms or legs</li>
                  <li>Numbness in the saddle area (around the genitals or buttocks)</li>
                  <li>Loss of bladder or bowel control</li>
                  <li>Unexplained weight loss alongside your pain</li>
                  <li>Pain that is worse at night and disturbs your sleep significantly</li>
                </ul>
              </div>

              {/* PRICING */}
              <div
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-md border border-border"
                data-testid="section-pricing"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">Pricing</h2>
                <p className="text-sm text-muted-foreground mb-6">Transparent fees, no hidden costs.</p>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-background border border-border" data-testid="row-price-initial">
                    <div>
                      <p className="font-semibold text-foreground">Initial Assessment</p>
                      <p className="text-xs text-muted-foreground">45 minutes</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">£50</p>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-background border border-border" data-testid="row-price-followup">
                    <div>
                      <p className="font-semibold text-foreground">Follow-up Treatment</p>
                      <p className="text-xs text-muted-foreground">30 minutes</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">£45</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  AXA and BUPA insurance accepted
                </p>

                <Button
                  size="lg"
                  onClick={openBookingWidget}
                  className="w-full sm:w-auto shadow-md"
                  data-testid="button-pricing-book"
                >
                  Book Your Initial Assessment
                </Button>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                <h3 className="text-lg font-semibold text-foreground mb-4">Clinic Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">Agility Physio LTD<br />Stanmore Business and Innovation Centre<br />Howard Road<br />HA7 1GB</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:02030929976" className="text-sm text-muted-foreground hover:text-secondary">0203 092 9976</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Opening Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat: 9am-7pm<br />Sun: 12pm-8pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                <h3 className="text-lg font-semibold text-foreground mb-4">Getting Here</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">By Train</p>
                      <p className="text-sm text-muted-foreground">Stanmore Station (Jubilee Line) - 5 minute walk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Parking</p>
                      <p className="text-sm text-muted-foreground">Free on-street parking available. Pay & display car park nearby.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 aspect-video bg-muted rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Map placeholder</p>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                <h3 className="text-lg font-semibold text-foreground mb-4">Services at This Clinic</h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-sm text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-16 lg:py-20 bg-secondary/10 pb-32 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Book at Stanmore?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards recovery. Book your physiotherapy appointment at our Stanmore clinic today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={openBookingWidget}
              data-testid="button-cta-book-stanmore"
            >
              Book at Stanmore
            </Button>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                0203 092 9976
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOOK BAR */}
      <div
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.08)] p-3 pr-20"
        data-testid="mobile-sticky-bar"
      >
        <Button
          size="lg"
          onClick={openBookingWidget}
          className="w-full shadow-md"
          data-testid="button-sticky-book"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment
        </Button>
      </div>
    </Layout>
  );
}
