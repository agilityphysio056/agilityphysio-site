import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { openCookieSettings } from "@/components/cookie-banner";

const LAST_UPDATED = "28 May 2026";

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy | Agility Physio"
      description="How Agility Physio Ltd collects, uses and protects personal data on its website and through its online booking system."
    >
      <section className="bg-slate-900 text-white py-10 lg:py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
            Legal
          </p>
          <h1
            className="text-3xl lg:text-4xl font-bold mb-2"
            data-testid="text-privacy-title"
          >
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-slate max-w-none">
          <p>
            This policy explains how <strong>Agility Physio Ltd</strong>{" "}
            ("we", "us", "our") collects, uses and protects personal data when
            you visit our website or use our online booking system. It applies
            to the public website at agilityphysio.net and the booking flow at{" "}
            <a href="/bookings">/bookings</a>. It does not cover the separate
            clinical records system you receive a privacy notice for at your
            first appointment.
          </p>

          <h2 id="who-we-are">1. Who We Are</h2>
          <p>
            <strong>Agility Physio Ltd</strong>
            <br />
            ICO Registration Number: ZB688837
            <br />
            Data protection contact:{" "}
            <a href="mailto:info@agilityphysio.net">
              info@agilityphysio.net
            </a>
            <br />
            General contact:{" "}
            <a href="mailto:info@agilityphysio.net">info@agilityphysio.net</a> ·
            0203 092 9976
          </p>

          <h2 id="what-we-collect">2. What Data We Collect</h2>

          <h3>a) Contact form</h3>
          <ul>
            <li>
              <strong>Data:</strong> name, email, phone, subject, message
            </li>
            <li>
              <strong>Lawful basis:</strong> Legitimate interests (responding to
              your enquiry)
            </li>
            <li>
              <strong>Retention:</strong> 12 months from receipt, then
              permanently deleted
            </li>
          </ul>

          <h3>b) Online booking enquiries</h3>
          <ul>
            <li>
              <strong>Data:</strong> name, date of birth, email, phone, reason
              for appointment, any notes you provide
            </li>
            <li>
              <strong>Lawful basis:</strong> Contract performance (to deliver
              the appointment you've requested) and Article 9(2)(h) UK GDPR
              (provision of health or social care). We also obtain your
              explicit consent on the booking form.
            </li>
            <li>
              <strong>Special category data:</strong> Your reason for
              appointment is health data. Explicit consent is obtained before
              submission.
            </li>
            <li>
              <strong>Retention:</strong> Transferred to our clinical records
              system on booking and retained for 8 years in line with NHS /
              healthcare record-keeping guidelines.
            </li>
          </ul>

          <h3>c) Website analytics (consent only)</h3>
          <ul>
            <li>
              <strong>Data:</strong> anonymised usage data — pages visited,
              session duration, approximate location, browser and device type
            </li>
            <li>
              <strong>Tools:</strong> Google Analytics 4, Microsoft Clarity
            </li>
            <li>
              <strong>Lawful basis:</strong> Consent (PECR)
            </li>
            <li>
              <strong>Retention:</strong> Google Analytics 4 — up to 26 months.
              Microsoft Clarity — 90 days.
            </li>
            <li>
              <strong>Sensitive pages:</strong> these tools are never loaded on
              the contact page or any booking page, even with consent.
            </li>
          </ul>

          <h3>d) Advertising / conversion tracking (consent only)</h3>
          <ul>
            <li>
              <strong>Data:</strong> booking conversion events only
            </li>
            <li>
              <strong>Tool:</strong> Google Ads
            </li>
            <li>
              <strong>Lawful basis:</strong> Consent (PECR)
            </li>
            <li>
              Loaded only on the booking confirmation page, not on any form
              page.
            </li>
          </ul>

          <h3>e) Server logs</h3>
          <ul>
            <li>
              <strong>Data:</strong> IP address, browser type, pages requested
            </li>
            <li>
              <strong>Purpose:</strong> security, abuse prevention, debugging
            </li>
            <li>
              <strong>Lawful basis:</strong> Legitimate interests
            </li>
            <li>
              <strong>Retention:</strong> 30 days
            </li>
          </ul>

          <h2 id="third-parties">3. Third Parties We Share Data With</h2>
          <ul>
            <li>
              <strong>Google LLC</strong> — Analytics 4, Google Ads, Google
              Fonts. Data may be transferred to the United States under the
              UK–US Data Bridge / Standard Contractual Clauses.
            </li>
            <li>
              <strong>Microsoft Corporation</strong> — Clarity session
              recording. Transfers covered by Standard Contractual Clauses.
            </li>
            <li>
              <strong>CartoDB / CARTO</strong> — Map tiles on the contact page
              (your IP address is sent so the map can render).
            </li>
            <li>
              <strong>Hostinger</strong> — Website hosting (EU servers).
            </li>
            <li>
              <strong>Our clinical management system</strong> — Booking data is
              transferred for appointment management.
            </li>
          </ul>

          <h2 id="your-rights">4. Your Rights</h2>
          <p>Under UK GDPR you have the following rights:</p>
          <ol>
            <li>Right of access (a copy of the data we hold about you)</li>
            <li>Right to rectification (correction of inaccurate data)</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to object</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent at any time</li>
          </ol>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:info@agilityphysio.net">
              info@agilityphysio.net
            </a>
            . We will respond within one calendar month.
          </p>

          <h2 id="cookies">5. Cookies</h2>
          <ul>
            <li>
              <strong>Essential:</strong> session management, security,
              preferences (no consent needed)
            </li>
            <li>
              <strong>Analytics:</strong> Google Analytics 4, Microsoft Clarity
              (consent required, off by default)
            </li>
            <li>
              <strong>Marketing:</strong> Google Ads (consent required, off by
              default)
            </li>
            <li>
              <strong>Third-party functional:</strong> Google Fonts, Leaflet /
              CartoDB maps — these are essential to render the site and
              inevitably send your IP address to the third party.
            </li>
          </ul>
          <div className="not-prose mt-4 mb-8">
            <Button
              variant="outline"
              onClick={openCookieSettings}
              data-testid="button-open-cookie-settings"
            >
              Cookie Settings
            </Button>
          </div>

          <h2 id="ico">6. ICO Complaints</h2>
          <p>
            If you're unhappy with how we handle your personal data, you can
            complain to the Information Commissioner's Office:
          </p>
          <ul>
            <li>
              Website:{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
            </li>
            <li>Helpline: 0303 123 1113</li>
          </ul>

          <h2 id="changes">7. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The "Last updated"
            date at the top of the page will always reflect the most recent
            revision. Significant changes will be highlighted on the website.
          </p>
        </div>
      </section>
    </Layout>
  );
}
