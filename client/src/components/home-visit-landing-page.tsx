import { useEffect } from "react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { openBookingWidget } from "@/lib/booking";
import {
  Calendar,
  CheckCircle2,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  UserCheck,
} from "lucide-react";
import type { HomeVisitAreaConfig } from "@/data/home-visit-areas";

const faqs = [
  {
    q: "Is there a travel or callout fee, or is it included in the price?",
    a: "There is no separate callout or travel fee for home visits within our standard service areas. The price you see is the price you pay — no hidden extras. If your postcode falls just outside our usual coverage zone, we'll let you know before confirming your booking.",
  },
  {
    q: "Do you cover my exact postcode?",
    a: "We cover Stanmore and the surrounding areas including Edgware, Harrow, Kenton, Pinner, and Wealdstone. If you're unsure whether your postcode is covered, just call us on 0203 092 9976 and we'll confirm straight away.",
  },
  {
    q: "Can I claim a home visit on my private health insurance?",
    a: "Most private health insurers (including AXA and BUPA) do not routinely cover home visit physiotherapy — they typically require treatment to take place at a recognised clinic. We recommend checking directly with your insurer before booking. We can provide a receipt for self-funded claims if your policy does allow it.",
  },
  {
    q: "How soon can someone visit me?",
    a: "We aim to arrange home visits within 24–48 hours of your enquiry for most areas. Availability does vary, so the sooner you get in touch the better. Call us or book online and we'll confirm a time that works for you.",
  },
  {
    q: "What conditions or treatments aren't suitable for a home visit?",
    a: "Home visits work well for most musculoskeletal conditions — back and neck pain, joint problems, post-operative rehab, and mobility issues. Treatments that require specialist equipment (such as hydrotherapy, certain electrotherapy machines, or advanced gym-based rehab) are better suited to a clinic setting. Your physiotherapist will discuss this with you during assessment and advise if a clinic visit would be more appropriate.",
  },
  {
    q: "Are your therapists DBS-checked?",
    a: "Yes. Every Agility Physio therapist who carries out home visits holds a current enhanced DBS (Disclosure and Barring Service) check. All of our physiotherapists are also registered with the HCPC (Health and Care Professions Council), which requires ongoing professional standards and continuing development.",
  },
  {
    q: "What should I prepare before the appointment?",
    a: "Very little is needed on your part. Clear a space in your main room large enough for a treatment couch (roughly 2m × 1m), wear or have available comfortable, loose clothing that allows access to the area being treated, and if possible note down your main symptoms and any relevant medical history. Your physiotherapist will bring everything else — including a portable treatment couch, assessment tools, and any therapy equipment needed.",
  },
];

interface Props {
  config: HomeVisitAreaConfig;
}

export function HomeVisitLandingPage({ config }: Props) {
  const { area, nearbyAreas, postcodes, phone, responseTime, pricing, testimonials, googleReviewCount, googleRating } = config;

  const phoneFormatted = phone.replace(/\s/g, "");
  const phoneTel = `tel:${phoneFormatted.replace(/\s/g, "")}`;

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Home Visit Physiotherapy in ${area}`,
      "description": `HCPC registered physiotherapists providing home visit physiotherapy in ${area} and surrounding areas including ${nearbyAreas.slice(0, 3).join(", ")}.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Agility Physio",
        "telephone": phone,
        "url": "https://agilityphysio.net",
        "areaServed": [area, ...nearbyAreas].map((a) => ({ "@type": "City", "name": a })),
      },
      "serviceType": "Physiotherapy Home Visit",
      "areaServed": { "@type": "AdministrativeArea", "name": area },
      "offers": [
        {
          "@type": "Offer",
          "name": "Initial Assessment",
          "price": pricing.initial.price.replace("£", ""),
          "priceCurrency": "GBP",
        },
        {
          "@type": "Offer",
          "name": "Follow-up Treatment (45 min)",
          "price": pricing.followUp45.price.replace("£", ""),
          "priceCurrency": "GBP",
        },
      ],
    };

    const existingScript = document.getElementById("home-visit-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "home-visit-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("home-visit-schema");
      if (s) s.remove();
    };
  }, [area, nearbyAreas, phone, pricing]);

  const whyChoose = [
    {
      icon: Home,
      title: "No Travel Needed",
      description: "Receive expert physiotherapy treatment in the comfort and convenience of your own home.",
    },
    {
      icon: UserCheck,
      title: "DBS-Checked Therapists",
      description: "Every home visit physiotherapist holds a current enhanced DBS check for your peace of mind.",
    },
    {
      icon: Calendar,
      title: "Same-Day / Next-Day Availability",
      description: `We aim to arrange your home visit ${responseTime} — fast access when you need it most.`,
    },
    {
      icon: ShieldCheck,
      title: "HCPC Registered",
      description: "Fully qualified, regulated professionals delivering evidence-based care to your door.",
    },
  ];

  return (
    <Layout
      title={`Home Visit Physiotherapy in ${area} | Agility Physio`}
      description={`HCPC registered physiotherapists providing home visit physiotherapy in ${area}. Same week appointments available across ${nearbyAreas.slice(0, 3).join(", ")} and surrounding areas. Book today.`}
    >
      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        data-testid="section-hero"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #134e4a 100%)" }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">
              Agility Physio · Home Visits
            </p>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              data-testid="text-page-title"
            >
              Home Visit Physiotherapy in {area}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              HCPC Registered Physiotherapists | Treatment in the Comfort of Your Home
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8" data-testid="trust-bar">
              {[
                { icon: Star, label: `${googleRating}-Star Rated`, fill: true },
                { icon: CheckCircle2, label: "HCPC Registered" },
                { icon: CheckCircle2, label: "DBS-Checked Therapists" },
                { icon: CheckCircle2, label: "10+ Years Experience" },
              ].map(({ icon: Icon, label, fill }, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <Icon className={`w-4 h-4 text-primary${fill ? " fill-primary" : ""}`} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-sm sm:max-w-none">
              <Button
                size="lg"
                onClick={openBookingWidget}
                className="w-full sm:w-auto text-base px-8 shadow-lg"
                data-testid="button-hero-book"
              >
                Book a Home Visit
              </Button>
              <a href={`tel:${phoneFormatted.replace(/\s/g, "")}`} className="w-full sm:w-auto" data-testid="link-hero-call">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base px-8 bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call {phone}
                </Button>
              </a>
            </div>

            <p className="text-sm text-primary font-medium" data-testid="text-urgency">
              📅 Limited home visit slots this week — book now to secure your slot
            </p>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS BANNER */}
      <div className="bg-slate-900 py-10" data-testid="section-reviews-banner">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary text-lg font-semibold mb-2">
            {"★".repeat(googleRating)} {googleReviewCount}+ Google 5 Star Reviews
          </p>
          <p className="text-white/90 text-sm md:text-base">
            Rated {googleRating} stars by our patients across {area} and surrounding areas
          </p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-slate-900 pb-12" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
                data-testid={`card-testimonial-${i}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400 font-bold text-sm">G</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-white/50 text-xs font-medium">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-10">

              {/* ABOUT */}
              <div data-testid="section-about">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About Our {area} Home Visit Service
                </h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    Our {area} home visit physiotherapy service brings expert, HCPC registered care directly to your door. Whether you're recovering from surgery, managing a long-term condition, or simply find it difficult to travel, our therapists come fully equipped to provide the same high standard of assessment and treatment you'd expect in our clinic.
                  </p>
                  <p>
                    Each visit is carried out by a qualified physiotherapist who brings a portable treatment couch, all necessary assessment tools, and therapy equipment. You don't need to prepare anything special — just a clear space in your living room and comfortable clothing.
                  </p>
                  <p>
                    We cover {area} and the surrounding areas including {nearbyAreas.join(", ")}, serving postcodes {postcodes.join(", ")}. Our {area} home visit team is experienced in treating a wide range of musculoskeletal, neurological, and post-operative conditions across all age groups.
                  </p>
                </div>
              </div>

              {/* WHAT TO EXPECT */}
              <div data-testid="section-what-to-expect">
                <h2 className="text-2xl font-bold text-foreground mb-4">What to Expect</h2>
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Arrival", desc: "Your physiotherapist arrives at the agreed time, introduces themselves, and sets up a portable treatment couch in your chosen room." },
                    { step: "2", title: "Assessment", desc: "A thorough assessment of your condition — covering your history, symptoms, movement, and any relevant tests — to reach an accurate diagnosis." },
                    { step: "3", title: "Treatment", desc: "Hands-on treatment tailored to your needs: manual therapy, soft tissue work, joint mobilisation, or other evidence-based techniques." },
                    { step: "4", title: "Exercise Demonstration", desc: "Personalised exercises shown and explained so you can continue your rehabilitation safely between appointments." },
                    { step: "5", title: "Advice & Next Steps", desc: "Clear guidance on self-management, activity modification, and a plan for follow-up if needed — so you know exactly where you're heading." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-primary">{step}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHY CHOOSE */}
              <div data-testid="section-why-choose">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose Agility Physio Home Visits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChoose.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="bg-white p-5 rounded-2xl shadow-sm border border-border"
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

              {/* CONDITIONS */}
              <div data-testid="section-conditions">
                <h2 className="text-2xl font-bold text-foreground mb-4">Conditions We Treat at Home</h2>
                <p className="text-muted-foreground mb-4">
                  Our {area} home visit physiotherapists have experience treating a broad range of conditions, including:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  {[
                    "Back pain, neck pain, and sciatica",
                    "Shoulder, knee, and hip pain",
                    "Post-operative rehabilitation (hip replacements, knee replacements, spinal surgery)",
                    "Mobility-limited patients who cannot travel to a clinic",
                    "Elderly patients requiring specialist physiotherapy at home",
                    "Neurological conditions affecting movement and balance",
                    "Sports injury maintenance and home exercise programmes",
                    "General musculoskeletal pain across all age groups",
                  ].map((cond, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SUITABLE FOR */}
              <div data-testid="section-suitable-for">
                <h2 className="text-2xl font-bold text-foreground mb-4">Who Is This Service Suitable For?</h2>
                <ul className="text-muted-foreground space-y-2">
                  {[
                    "Those with mobility limitations who cannot easily leave home",
                    "Post-operative patients who are not yet cleared to travel",
                    "Elderly patients who prefer treatment in a familiar environment",
                    "Busy professionals who find clinic hours difficult to manage",
                    "Carers or parents who cannot leave the house for long periods",
                    "Anyone who simply prefers the privacy and comfort of home treatment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RED FLAGS */}
              <div data-testid="section-red-flags">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Red Flags: When to Seek Urgent Help
                </h2>
                <p className="text-muted-foreground mb-4">
                  While physiotherapy is safe and effective for most conditions, some symptoms require urgent medical attention. Please call 999 or go to A&E if you experience:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  {[
                    "Sudden severe weakness in your arms or legs",
                    "Numbness in the saddle area (around the genitals or buttocks)",
                    "Loss of bladder or bowel control",
                    "Unexplained weight loss alongside your pain",
                    "Pain that is significantly worse at night and disturbs your sleep",
                  ].map((flag, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 shrink-0 mt-0.5">⚠</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">

              {/* Service Area */}
              <div
                className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                data-testid="sidebar-service-area"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  We Cover {area}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Home visits available across {area} and surrounding areas:
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {nearbyAreas.map((a) => (
                    <span key={a} className="text-xs bg-secondary/10 text-secondary font-medium px-2.5 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Postcodes: {postcodes.join(", ")}
                </p>
              </div>

              {/* Pricing */}
              <div
                className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                data-testid="sidebar-pricing"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Pricing</h3>
                <p className="text-xs text-muted-foreground mb-4">Transparent fees, no hidden costs.</p>
                <div className="space-y-3 mb-5">
                  {[
                    { label: "Initial Assessment", ...pricing.initial },
                    { label: "Follow-up Treatment", ...pricing.followUp45 },
                    { label: "Follow-up (shorter)", ...pricing.followUp30 },
                  ].map(({ label, duration, price }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-3 rounded-xl bg-background border border-border"
                    >
                      <div>
                        <p className="text-sm font-semibold text-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground">{duration}</p>
                      </div>
                      <p className="text-xl font-bold text-primary">{price}</p>
                    </div>
                  ))}
                </div>
                <Button
                  size="sm"
                  onClick={openBookingWidget}
                  className="w-full"
                  data-testid="button-sidebar-book"
                >
                  Book Your Home Visit
                </Button>
              </div>

              {/* Book Now */}
              <div
                className="p-6 bg-primary/5 border border-primary/20 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                data-testid="sidebar-book-now"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Book?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Appointments available {responseTime}. Secure your slot today.
                </p>
                <Button
                  onClick={openBookingWidget}
                  className="w-full shadow-md"
                  data-testid="button-sidebar-book-now"
                >
                  Book a Home Visit
                </Button>
              </div>

              {/* Questions */}
              <div
                className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                data-testid="sidebar-questions"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">Have a Question?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is happy to help. Call us to discuss your needs before booking.
                </p>
                <a href={phoneTel} data-testid="link-sidebar-phone">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    {phone}
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-muted/40" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Everything you need to know about home visit physiotherapy in {area}.
          </p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-border rounded-xl px-5 shadow-sm"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left font-medium text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 lg:py-20 bg-secondary/10 pb-32 md:pb-20" data-testid="section-bottom-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Book Home Visit Physiotherapy in {area}?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards recovery — expert treatment in the comfort of your own home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={openBookingWidget}
              data-testid="button-cta-book"
            >
              Book a Home Visit
            </Button>
            <a href={phoneTel}>
              <Button size="lg" variant="outline" data-testid="button-cta-call">
                <Phone className="w-4 h-4 mr-2" />
                {phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
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
          Book Home Visit
        </Button>
      </div>
    </Layout>
  );
}
