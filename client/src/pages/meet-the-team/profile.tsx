import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { openBookingWidget } from "@/lib/booking";
import { ArrowLeft, CheckCircle2, Phone, Briefcase } from "lucide-react";
import { getTeamMember } from "@/data/team";
import NotFound from "@/pages/not-found";

export default function TeamProfile() {
  const { slug } = useParams<{ slug: string }>();
  const member = getTeamMember(slug);

  if (!member) return <NotFound />;

  const metaTitle = member.metaTitle ?? `${member.name} – ${member.role} | Agility Physio`;
  const metaDescription =
    member.metaDescription ??
    `${member.name} is a ${member.role} at Agility Physio. ${
      member.intro ? member.intro.slice(0, 120) + "…" : "HCPC registered physiotherapist providing expert care in Stanmore and surrounding areas."
    }`;

  return (
    <Layout title={metaTitle} description={metaDescription}>
      {/* BACK LINK */}
      <div className="bg-muted/40 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/meet-the-team">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-back-to-team">
              <ArrowLeft className="w-4 h-4" />
              Back to Meet the Team
            </span>
          </Link>
        </div>
      </div>

      {/* PROFILE HEADER */}
      <section className="py-12 lg:py-16 bg-background" data-testid="section-profile-header">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

            {/* Photo */}
            <div className="lg:col-span-1">
              <div
                className="rounded-2xl overflow-hidden shadow-md border border-border"
                style={{ aspectRatio: "4 / 5", background: "#f8f8f8", maxWidth: "360px" }}
              >
                <img
                  src={member.photo}
                  alt={member.photoAlt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: member.imageObjectFit,
                    objectPosition: "center top",
                    display: "block",
                  }}
                  data-testid="img-profile-photo"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-1">
                  Agility Physio
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-1" data-testid="text-profile-name">
                  {member.name}
                </h1>
                <p className="text-lg text-secondary font-semibold mb-4">{member.role}</p>

                {/* Qualifications */}
                {member.qualifications.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.qualifications.map((q) => (
                      <span
                        key={q}
                        className="text-xs bg-muted border border-border rounded-full px-3 py-1 font-medium text-foreground"
                        data-testid={`badge-qualification-${q.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                )}

                {member.placeholderContent ? (
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Full profile details — including qualifications, clinical specialities, and biography — will be published here shortly.
                    </p>
                    <p className="text-sm italic">Profile content coming soon.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-base text-muted-foreground leading-relaxed font-medium mb-4" data-testid="text-profile-intro">
                      {member.intro}
                    </p>
                    <div className="space-y-4">
                      {member.bio.map((para, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-profile-bio-${i}`}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Specialities */}
              {!member.placeholderContent && member.specialities.length > 0 && (
                <div data-testid="section-specialities">
                  <h2 className="text-lg font-semibold text-foreground mb-3">Areas of Expertise</h2>
                  <ul className="space-y-2">
                    {member.specialities.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Professional Background */}
              {!member.placeholderContent && member.background && member.background.length > 0 && (
                <div data-testid="section-background">
                  <h2 className="text-lg font-semibold text-foreground mb-3">Professional Background</h2>
                  <ul className="space-y-3">
                    {member.background.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button onClick={openBookingWidget} size="lg" data-testid="button-profile-book">
                  Book an Appointment
                </Button>
                <a href="tel:02030929976">
                  <Button size="lg" variant="outline" data-testid="button-profile-call">
                    <Phone className="w-4 h-4 mr-2" />
                    0203 092 9976
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM FOOTER */}
      <section className="py-12 bg-muted/40 border-t border-border" data-testid="section-profile-footer">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            Want to meet the rest of the Agility Physio team?
          </p>
          <Link href="/meet-the-team">
            <Button variant="outline" data-testid="button-view-all-team">
              View All Team Members
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
