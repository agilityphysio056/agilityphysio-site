import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/testimonials-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { openBookingWidget } from "@/lib/booking";
import {
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Train,
} from "lucide-react";
import type { ClinicConfig } from "@/data/clinics";

interface ClinicPageProps {
  config: ClinicConfig;
}

export function ClinicPage({ config }: ClinicPageProps) {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
      };
      const t = setTimeout(tryScroll, 200);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!config.structuredData) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(config.structuredData);
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, [config.structuredData]);

  const showParking = config.showParking !== false;
  const showMap = config.showMap !== false;

  return (
    <Layout title={config.title} description={config.description}>
      {/* HERO */}
      <section
        className={`relative ${config.heroMinHeight} flex items-center overflow-hidden`}
        data-testid="section-clinic-hero"
      >
        <img
          src={config.heroImage}
          alt={config.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${config.heroOverlay}`} />
        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 ${config.heroContentPadding}`}
        >
          <div className="max-w-3xl">
            <p className={config.superheadingClasses}>{config.superheading}</p>
            <h1 className={config.h1Classes} data-testid="text-clinic-title">
              {config.h1}
            </h1>
            {config.heroSubtitle && (
              <p
                className={
                  config.heroSubtitleClasses ??
                  "text-lg text-white/90 leading-relaxed mb-6"
                }
              >
                {config.heroSubtitle}
              </p>
            )}

            {config.trustBadges && (
              <div
                className="flex flex-wrap gap-x-6 gap-y-3 mt-2 mb-4"
                data-testid="trust-bar"
              >
                {config.trustBadges.map((label, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/90 text-sm font-medium"
                  >
                    {i === 0 ? (
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    )}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-sm sm:max-w-none">
              {config.heroPrimaryCtaHref ? (
                <a
                  href={config.heroPrimaryCtaHref}
                  className="w-full sm:w-auto"
                  data-testid="button-hero-book"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base px-8 shadow-lg"
                  >
                    {config.heroPrimaryCtaLabel ?? "Book Appointment"}
                  </Button>
                </a>
              ) : (
                <Button
                  size="lg"
                  onClick={openBookingWidget}
                  className="w-full sm:w-auto text-base px-8 shadow-lg"
                  data-testid="button-hero-book"
                >
                  {config.heroPrimaryCtaLabel ?? "Book Appointment"}
                </Button>
              )}
              <a
                href={`tel:${config.phone}`}
                className="w-full sm:w-auto"
                data-testid="link-hero-call"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base px-8 bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call {config.phoneDisplay}
                </Button>
              </a>
            </div>

            {config.urgencyText && (
              <p
                className="text-sm text-primary font-medium mb-6"
                data-testid="text-urgency"
              >
                {config.urgencyText}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      {(config.reviewsText || config.showTestimonials) && (
        <>
          <div
            id="reviews"
            className="bg-slate-900 pt-12 lg:pt-16"
            data-testid="section-reviews-heading"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              {config.reviewsText && (
                <p className="text-primary text-lg font-semibold mb-2">
                  {config.reviewsText}
                </p>
              )}
              {config.reviewsSubtext && (
                <p className="text-white/90 text-sm md:text-base">
                  {config.reviewsSubtext}
                </p>
              )}
            </div>
          </div>
          {config.showTestimonials && <TestimonialsSection />}
        </>
      )}

      {/* MAIN CONTENT */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {config.aboutHeading}
                </h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  {config.aboutParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* First appointment / What to expect */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {config.firstApptHeading}
                </h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  {config.firstApptParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              {config.whyChooseUs && (
                <div id="why-choose-us" data-testid="section-why-choose-us">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {config.whyChooseUsHeading ??
                      `Why Choose Agility Physio ${config.slug.charAt(0).toUpperCase()}${config.slug.slice(1)}`}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {config.whyChooseUs.map((item, i) => {
                      const Icon = item.icon;
                      const cardClassName =
                        "bg-white p-5 rounded-2xl shadow-sm border border-border hover-elevate";
                      const cardContent = (
                        <>
                          <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </>
                      );
                      if (item.isBookingCta) {
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={openBookingWidget}
                            className={`${cardClassName} text-left w-full cursor-pointer`}
                            data-testid={`card-why-${i}`}
                            aria-label="Book an appointment"
                          >
                            {cardContent}
                          </button>
                        );
                      }
                      return (
                        <div
                          key={i}
                          className={cardClassName}
                          data-testid={`card-why-${i}`}
                        >
                          {cardContent}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Conditions */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {config.conditionsHeading}
                </h2>
                <p className="text-muted-foreground mb-4">{config.conditionsIntro}</p>
                <ul className="text-muted-foreground space-y-2">
                  {config.conditionsWithLinks
                    ? config.conditionsWithLinks.map((c, i) =>
                        c.href ? (
                          <li key={i}>
                            <Link
                              href={c.href}
                              className="hover:text-secondary hover:underline underline-offset-2 transition-colors"
                            >
                              {c.text}
                            </Link>
                          </li>
                        ) : (
                          <li key={i}>{c.text}</li>
                        )
                      )
                    : (config.conditionsList ?? []).map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                </ul>
              </div>

              {/* Red flags */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {config.redFlagsHeading}
                </h2>
                <p className="text-muted-foreground mb-4">{config.redFlagsIntro}</p>
                <ul className="text-muted-foreground space-y-2">
                  {config.redFlagsList.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Pricing block OR pricing message */}
              {config.pricing ? (
                <div
                  id="pricing"
                  className="bg-white p-6 lg:p-8 rounded-2xl shadow-md border border-border scroll-mt-24"
                  data-testid="section-pricing"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-2">Pricing</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Transparent fees, no hidden costs.
                  </p>
                  <div className="space-y-3 mb-5">
                    <div
                      className="flex items-center justify-between p-4 rounded-xl bg-background border border-border"
                      data-testid="row-price-initial"
                    >
                      <div>
                        <p className="font-semibold text-foreground">Initial Assessment</p>
                        <p className="text-xs text-muted-foreground">
                          {config.pricing.initialDuration}
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        {config.pricing.initialPrice}
                      </p>
                    </div>
                    <div
                      className="flex items-center justify-between p-4 rounded-xl bg-background border border-border"
                      data-testid="row-price-followup"
                    >
                      <div>
                        <p className="font-semibold text-foreground">Follow-up Treatment</p>
                        <p className="text-xs text-muted-foreground">
                          {config.pricing.followUpDuration}
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        {config.pricing.followUpPrice}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    {config.insuranceNote ?? "AXA and BUPA insurance accepted"}
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
              ) : config.pricingMessage ? (
                <div
                  id="pricing"
                  className="bg-white p-6 lg:p-8 rounded-2xl shadow-md border border-border scroll-mt-24"
                  data-testid="section-pricing"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Pricing &amp; Insurance
                  </h2>
                  <p className="text-muted-foreground mb-3">{config.pricingMessage}</p>
                  {config.insuranceNote && (
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                      {config.insuranceNote}
                    </p>
                  )}
                </div>
              ) : null}
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              {/* Clinic details */}
              <div className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Clinic Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        {config.addressLines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < config.addressLines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a
                        href={`tel:${config.phone}`}
                        className="text-sm text-muted-foreground hover:text-secondary"
                      >
                        {config.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Opening Hours</p>
                      <p className="text-sm text-muted-foreground">
                        {config.hours.map((h, i) => (
                          <span key={i}>
                            {h}
                            {i < config.hours.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Getting here */}
              <div className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                <h3 className="text-lg font-semibold text-foreground mb-4">Getting Here</h3>
                <div className="space-y-4">
                  {config.transport.map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Train className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{t.mode}</p>
                        <p className="text-sm text-muted-foreground">{t.detail}</p>
                      </div>
                    </div>
                  ))}
                  {showParking && config.parking && (
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Parking</p>
                        <p className="text-sm text-muted-foreground">{config.parking}</p>
                      </div>
                    </div>
                  )}
                </div>
                {showMap && (
                  <div className="mt-4 aspect-video bg-muted rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Map placeholder</p>
                  </div>
                )}
              </div>

              {/* Services */}
              <div className="p-6 bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Services at This Clinic
                </h3>
                <div className="space-y-2">
                  {config.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
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

      {/* AREAS SERVED */}
      {config.areasServed && (
        <section className="py-12 lg:py-16 bg-muted/40 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {config.areasServed.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl">{config.areasServed.text}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      {config.faqs && config.faqs.length > 0 && (
        <section className="py-12 lg:py-16 bg-background border-t border-border" data-testid="section-faq">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {config.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CLOSING CTA */}
      <section
        className={`py-16 lg:py-20 bg-secondary/10${config.showMobileStickyBar ? " pb-32 md:pb-20" : ""}`}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">{config.ctaHeading}</h2>
          <p className="text-muted-foreground mb-8">{config.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {config.ctaPrimaryHref ? (
              <a href={config.ctaPrimaryHref}>
                <Button size="lg" data-testid={config.ctaBookTestId}>
                  {config.ctaBookLabel}
                </Button>
              </a>
            ) : (
              <Button
                size="lg"
                onClick={openBookingWidget}
                data-testid={config.ctaBookTestId}
              >
                {config.ctaBookLabel}
              </Button>
            )}
            <a href={`tel:${config.phone}`}>
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                {config.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      {config.showMobileStickyBar && (
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
      )}
    </Layout>
  );
}
