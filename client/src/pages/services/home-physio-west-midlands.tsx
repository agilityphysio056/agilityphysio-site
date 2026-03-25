import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBannerImg from "@/assets/images/hero-home-visit-nw-london.jpg";
import {
  CheckCircle2,
  Phone,
  MapPin,
  Users,
  Activity,
  Heart,
  Brain,
  Footprints,
  Shield,
  Dumbbell,
  PersonStanding,
  Clock,
  Star,
  CalendarCheck,
  Home,
  Stethoscope,
  BadgeCheck,
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

const whoIsItFor = [
  {
    icon: PersonStanding,
    title: "Elderly Patients",
    description: "Ideal for older adults who find travelling to a clinic difficult or need rehabilitation in a familiar environment.",
  },
  {
    icon: Heart,
    title: "Post-Surgery Recovery",
    description: "Structured, evidence-based rehabilitation following orthopaedic or spinal surgery delivered safely at home.",
  },
  {
    icon: Activity,
    title: "Back, Neck & Joint Pain",
    description: "Expert treatment for musculoskeletal pain conditions that make travel uncomfortable or impractical.",
  },
  {
    icon: Footprints,
    title: "Mobility & Balance Problems",
    description: "Targeted programmes to improve walking ability, balance, and independence for those with limited mobility.",
  },
  {
    icon: Users,
    title: "Busy Professionals",
    description: "Convenient home appointments that fit around your schedule — no waiting rooms, no travel time.",
  },
  {
    icon: Home,
    title: "Home Rehabilitation",
    description: "For anyone who benefits from being assessed and treated within their own home environment.",
  },
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

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Experienced HCPC Registered Physiotherapists",
    description: "All our physiotherapists are fully qualified, HCPC registered, and experienced in treating a wide range of musculoskeletal and neurological conditions.",
  },
  {
    icon: Home,
    title: "Treatment in the Comfort of Your Own Home",
    description: "No need to travel or sit in waiting rooms. We come to you, providing professional physiotherapy in a familiar and comfortable environment.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Day or Next-Day Appointments",
    description: "We aim to offer appointments within 24–48 hours where possible, so you can start your recovery without delay.",
  },
  {
    icon: Stethoscope,
    title: "Personalised Rehabilitation Plans",
    description: "Every treatment plan is tailored to your specific condition, lifestyle, and recovery goals — never a one-size-fits-all approach.",
  },
  {
    icon: Activity,
    title: "Evidence-Based Hands-On Treatment",
    description: "We use proven physiotherapy techniques including manual therapy, joint mobilisation, and exercise rehabilitation.",
  },
  {
    icon: Users,
    title: "Friendly, Patient-Centred Care",
    description: "Our team delivers professional, compassionate care that puts your wellbeing and recovery at the centre of every appointment.",
  },
];

const testimonials = [
  {
    quote: "Professional, knowledgeable, and incredibly convenient. Having physio at home made a huge difference to my recovery after knee surgery.",
    author: "Patient, Stanmore",
  },
  {
    quote: "Excellent service from start to finish. Clear advice, effective hands-on treatment, and very easy to arrange. Highly recommended.",
    author: "Patient, Harrow",
  },
  {
    quote: "A great option for anyone who struggles to travel. The physiotherapist was thorough, professional, and put me at ease straight away.",
    author: "Patient, Edgware",
  },
];

const faqs = [
  {
    q: "Do I need a GP referral?",
    a: "No, you can book directly with us without a GP or consultant referral. Simply contact us to arrange your appointment.",
  },
  {
    q: "What areas do you cover?",
    a: "We provide home physiotherapy across North-West London, including Stanmore, Harrow, Edgware, Wembley, Pinner, Northwood, Ruislip, Uxbridge, and surrounding areas.",
  },
  {
    q: "How quickly can I book a home visit?",
    a: "We aim to offer appointments within 24–48 hours where possible, depending on location and availability. Contact us to check current availability.",
  },
  {
    q: "What conditions do you treat?",
    a: "We treat a wide range of conditions including back pain, neck pain, joint pain, mobility problems, post-surgical rehabilitation, balance issues, and musculoskeletal injuries.",
  },
  {
    q: "Is home physiotherapy suitable for elderly patients?",
    a: "Yes. Home physiotherapy is ideal for elderly patients who find travelling difficult or who would benefit from rehabilitation in their own environment.",
  },
  {
    q: "Do you offer follow-up treatment at home?",
    a: "Yes. We provide both initial assessments and ongoing follow-up treatment sessions at home, allowing for continuity of care throughout your recovery.",
  },
  {
    q: "How long does recovery take?",
    a: "Recovery varies depending on the condition and individual factors. Most patients see meaningful improvement within 4–6 weeks of consistent physiotherapy.",
  },
  {
    q: "Is home visit physiotherapy covered by insurance?",
    a: "Home visit services may not always be covered by insurance. Please contact your provider and speak with us to discuss your options.",
  },
];

export default function HomePhysioWestMidlands() {
  return (
    <Layout
      title="Home Physiotherapy in North-West London | Agility Physio"
      description="Expert home physiotherapy services across Harrow, Stanmore, Wembley, Edgware and North-West London. HCPC registered physiotherapists delivering evidence-based treatment to your doorstep within 24–48 hours."
    >
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden" data-testid="section-west-midlands-hero">
        <img
          src={heroBannerImg}
          alt="Physiotherapy home visit treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-slate-900/70 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Home Visit Physiotherapy · North-West London</p>
            <h1
              className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-5"
              data-testid="text-west-midlands-title"
            >
              Physiotherapy Delivered to Your Doorstep Across North-West London
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
              No need to travel. Get expert home physiotherapy for pain, mobility issues, post-surgery recovery, and rehabilitation — delivered in the comfort of your own home within 24–48 hours where possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8 w-full sm:w-auto" data-testid="button-book-west-midlands">
                  Book Your Home Visit Now
                </Button>
              </a>
              <a href="tel:02030929976">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-base px-8 w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0203 092 9976
                </Button>
              </a>
            </div>
            <p className="text-sm text-white/70">
              HCPC registered physiotherapists &nbsp;•&nbsp; Evidence-based treatment &nbsp;•&nbsp; Home visits across North-West London
            </p>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-16 lg:py-20 bg-background" data-testid="section-who-is-it-for">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Who Is Home Physiotherapy For?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our home physiotherapy service is designed for anyone who would benefit from professional treatment without the need to visit a clinic.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoIsItFor.map((item, index) => (
              <Card key={index} className="p-6" data-testid={`card-who-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE AREA */}
      <section className="py-10 bg-muted" data-testid="section-coverage">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Card className="p-6 lg:p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Home Visits Across North-West London</h3>
                <p className="text-muted-foreground mb-4">
                  We cover a wide area across North-West London including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {coverageAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background text-sm font-medium text-foreground rounded-tl-lg rounded-br-lg border border-border"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Not sure if we cover your area? <a href="tel:02030929976" className="text-primary font-medium hover:underline">Call us to check availability.</a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 lg:py-20 bg-muted" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why Choose Agility Physio for Home Visits?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver professional, patient-centred physiotherapy directly to your home — with the same clinical standards as our clinic appointments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6" data-testid={`card-why-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-book-why">
                Book Your Home Visit
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 lg:py-20 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Home Physiotherapy Treatments We Provide
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced physiotherapists deliver a full range of clinical treatments in your home, tailored to your condition and recovery goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((service, index) => (
              <Card key={index} className="p-6" data-testid={`card-home-service-${index}`}>
                <div className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 lg:py-20 bg-[#1F2A44]" data-testid="section-pricing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Home Visit Physiotherapy Pricing
          </h2>
          <p className="text-white/70 mb-10">
            Transparent, competitive pricing for professional home physiotherapy across North-West London.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 bg-white/5 border-white/10 text-left" data-testid="card-pricing-initial">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Initial Assessment</p>
              <p className="text-4xl font-bold text-white mb-1">from £50</p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                Comprehensive assessment, diagnosis, and first treatment session delivered in your home.
              </p>
            </Card>
            <Card className="p-8 bg-white/5 border-white/10 text-left" data-testid="card-pricing-followup">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Follow-Up Session</p>
              <p className="text-4xl font-bold text-white mb-1">from £45</p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                Ongoing treatment and rehabilitation sessions to support your continued recovery.
              </p>
            </Card>
          </div>
          <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto">
            Final pricing may vary depending on location, complexity, and treatment requirements. Please contact us to confirm availability and pricing for your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-book-pricing">
                Book Your Home Visit
              </Button>
            </a>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Phone className="w-4 h-4 mr-2" />
                Call 0203 092 9976
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 lg:py-20 bg-muted" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">5-Star Rated Physiotherapy Service</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Trusted by Patients Across London
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hear from patients who have benefited from our home physiotherapy service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t, index) => (
              <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  "{t.quote}"
                </blockquote>
                <p className="text-sm font-semibold text-foreground">{t.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-background" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6" data-testid={`card-faq-${index}`}>
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Still have questions? We're happy to help.</p>
            <a href="tel:02030929976">
              <Button variant="outline" data-testid="button-enquire-faq">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-20 pb-36 md:pb-20 bg-secondary/10" data-testid="section-final-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Book Your Home Visit Today
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Get expert physiotherapy delivered directly to your home by our experienced team. Whether you are recovering from injury, struggling with mobility, or looking for convenient treatment at home — we are here to help.
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
                Call 0203 092 9976
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Home visits delivered directly to your home — no clinic visit required
          </p>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg px-4 py-3 flex gap-3"
        data-testid="sticky-mobile-cta"
      >
        <a
          href="https://new-ob.rushcliff.com/holding-page/445519"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full" size="sm" data-testid="sticky-button-book">
            Book Home Visit
          </Button>
        </a>
        <a href="tel:02030929976" className="flex-1">
          <Button variant="outline" className="w-full" size="sm" data-testid="sticky-button-call">
            <Phone className="w-4 h-4 mr-1.5" />
            Call Us
          </Button>
        </a>
      </div>
    </Layout>
  );
}
