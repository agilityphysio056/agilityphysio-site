import { Layout } from "@/components/layout/layout";

const LAST_UPDATED = "28 May 2026";

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Use | Agility Physio"
      description="Terms governing use of the Agility Physio website and online booking system."
    >
      <section className="bg-slate-900 text-white py-10 lg:py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
            Legal
          </p>
          <h1
            className="text-3xl lg:text-4xl font-bold mb-2"
            data-testid="text-terms-title"
          >
            Terms of Use
          </h1>
          <p className="text-slate-300 text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-slate max-w-none">
          <p>
            These terms govern your use of the Agility Physio website. By using
            this website you accept these terms in full. If you don't accept
            them, please don't use the site.
          </p>

          <h2>1. Website Use</h2>
          <p>
            You agree to use this website lawfully, not to interfere with its
            operation, and not to attempt unauthorised access to any part of
            the site, the systems behind it, or other users' data.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website — text, images, logos, photographs,
            graphics — is owned by Agility Physio Ltd or used under licence.
            You may view and print pages for personal, non-commercial use. You
            may not reproduce, republish, distribute or commercially exploit
            any content without our prior written permission.
          </p>

          <h2>3. No Medical Advice</h2>
          <p>
            Website content is for general information only and{" "}
            <strong>does not constitute medical advice</strong>. It is not a
            substitute for assessment, diagnosis or treatment by a qualified
            physiotherapist or other healthcare professional. Always consult a
            qualified physiotherapist before acting on anything you read here,
            especially if you are in pain, recovering from injury or managing
            a long-term condition.
          </p>

          <h2>4. Online Booking</h2>
          <p>
            Submitting a booking request through this website is a request for
            an appointment — it does not in itself create a binding contract.
            We may need to contact you to confirm or amend the appointment.
            Cancellation terms shown during booking apply.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            The site may contain links to third-party websites. We are not
            responsible for the content or privacy practices of those sites.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Agility Physio Ltd is not
            liable for any loss or damage arising from your use of, or
            inability to use, this website, or from any reliance you place on
            information contained on it. Nothing in these terms excludes or
            limits our liability for death or personal injury caused by our
            negligence, or for any other liability that cannot lawfully be
            excluded.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms and any dispute arising from them are governed by the
            laws of England and Wales, and subject to the exclusive
            jurisdiction of the courts of England and Wales.
          </p>

          <h2>8. Contact</h2>
          <p>
            Questions about these terms? Contact us at{" "}
            <a href="mailto:info@agilityphysio.net">info@agilityphysio.net</a>{" "}
            or 0203 092 9976.
          </p>
        </div>
      </section>
    </Layout>
  );
}
