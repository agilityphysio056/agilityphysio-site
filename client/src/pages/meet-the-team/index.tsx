import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { openBookingWidget } from "@/lib/booking";
import { ArrowRight, Phone } from "lucide-react";
import { director, clinicians, teamMembers } from "@/data/team";
import type { TeamMember } from "@/data/team";

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <div
      className="flex flex-col bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      data-testid={`card-team-${index}`}
    >
      <Link href={`/meet-the-team/${member.slug}`}>
        <div
          className="w-full cursor-pointer overflow-hidden"
          style={{ aspectRatio: "4 / 5", background: "#f8f8f8" }}
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
            data-testid={`img-team-${member.slug}`}
          />
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <Link href={`/meet-the-team/${member.slug}`}>
          <h2
            className="text-lg font-bold text-foreground mb-0.5 hover:text-primary transition-colors cursor-pointer"
            data-testid={`text-team-name-${index}`}
          >
            {member.name}
          </h2>
        </Link>
        <p className="text-sm text-secondary font-medium mb-4">{member.role}</p>

        {member.placeholderContent ? (
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            Profile coming soon.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
            {member.intro}
          </p>
        )}

        <Link href={`/meet-the-team/${member.slug}`}>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 w-full"
            data-testid={`button-view-profile-${member.slug}`}
          >
            View Profile
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function MeetTheTeam() {
  return (
    <Layout
      title="Meet the Team | Agility Physio"
      description="Meet the HCPC registered physiotherapists and clinical leadership team at Agility Physio. Expert physiotherapy care across Stanmore and Stockwell."
    >
      {/* HERO */}
      <section
        className="relative py-20 lg:py-28 flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #134e4a 100%)" }}
        data-testid="section-team-hero"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">
                Agility Physio
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" data-testid="text-team-title">
                Meet the Team
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                HCPC registered physiotherapists and clinical leadership — committed to evidence-based care and lasting patient outcomes.
              </p>
            </div>

            {/* Photo collage */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {teamMembers.slice(0, 4).map((member) => (
                <div
                  key={member.slug}
                  className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
                  style={{ aspectRatio: "3 / 4", background: "#1e293b" }}
                >
                  <img
                    src={member.photo}
                    alt={member.photoAlt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                      opacity: 0.92,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="py-16 lg:py-20 bg-background" data-testid="section-team-director">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs font-semibold text-secondary uppercase tracking-widest mb-8">
            Clinical Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <TeamCard member={director} index={0} />
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-border" />
      </div>

      {/* CLINICIANS */}
      <section className="py-16 lg:py-20 bg-background" data-testid="section-team-clinicians">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs font-semibold text-secondary uppercase tracking-widest mb-8">
            Our Physiotherapists
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {clinicians.map((member, i) => (
              <TeamCard key={member.slug} member={member} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 lg:py-20 bg-secondary/10" data-testid="section-team-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Book with Our Team?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our physiotherapists are here to help. Book an assessment online or call us to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={openBookingWidget} data-testid="button-team-book">
              Book an Appointment
            </Button>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline" data-testid="button-team-call">
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
