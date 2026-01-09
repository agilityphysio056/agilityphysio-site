import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const conditionCategories = [
  {
    title: "Back & Spine",
    conditions: [
      {
        name: "Lower Back Pain",
        description: "Assessment and treatment for acute and chronic lower back pain, including disc problems and muscle strains.",
      },
      {
        name: "Sciatica",
        description: "Treatment for radiating leg pain caused by nerve compression, including manual therapy and targeted exercises.",
      },
      {
        name: "Neck Pain",
        description: "Relief for cervical pain and stiffness, including treatment for whiplash and postural-related issues.",
      },
      {
        name: "Disc Herniation",
        description: "Conservative management of disc bulges and herniations with evidence-based rehabilitation protocols.",
      },
    ],
  },
  {
    title: "Upper Limb",
    conditions: [
      {
        name: "Shoulder Pain",
        description: "Treatment for rotator cuff injuries, impingement, and shoulder instability.",
      },
      {
        name: "Frozen Shoulder",
        description: "Specialised rehabilitation for adhesive capsulitis to restore range of motion and reduce pain.",
      },
      {
        name: "Tennis Elbow",
        description: "Effective treatment for lateral epicondylitis including manual therapy and progressive loading.",
      },
      {
        name: "Golfer's Elbow",
        description: "Treatment for medial epicondylitis with targeted rehabilitation exercises.",
      },
    ],
  },
  {
    title: "Lower Limb",
    conditions: [
      {
        name: "Knee Pain",
        description: "Assessment and treatment for patellofemoral pain, meniscal injuries, and osteoarthritis.",
      },
      {
        name: "ACL Injuries",
        description: "Pre and post-operative rehabilitation for anterior cruciate ligament injuries.",
      },
      {
        name: "Hip Pain",
        description: "Treatment for hip impingement, bursitis, and osteoarthritis.",
      },
      {
        name: "Achilles Tendinopathy",
        description: "Evidence-based treatment for Achilles pain including eccentric loading programmes.",
      },
      {
        name: "Plantar Fasciitis",
        description: "Effective treatment for heel pain with manual therapy and targeted exercises.",
      },
      {
        name: "Ankle Sprains",
        description: "Acute management and rehabilitation for ankle ligament injuries.",
      },
    ],
  },
  {
    title: "Other Conditions",
    conditions: [
      {
        name: "Muscle Strains",
        description: "Treatment for acute and chronic muscle injuries with graded rehabilitation.",
      },
      {
        name: "Post-Surgical Recovery",
        description: "Comprehensive rehabilitation following orthopaedic surgery.",
      },
      {
        name: "Postural Problems",
        description: "Assessment and treatment for work-related postural issues and muscle imbalances.",
      },
      {
        name: "Repetitive Strain Injury",
        description: "Management of occupational overuse injuries with ergonomic advice.",
      },
    ],
  },
];

export default function Conditions() {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-conditions-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
              data-testid="text-conditions-page-title"
            >
              Conditions We Treat
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our experienced physiotherapists treat a wide range of
              musculoskeletal conditions. If you're unsure whether we can help
              with your condition, please get in touch for a consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {conditionCategories.map((category, catIndex) => (
              <div key={catIndex} data-testid={`section-category-${catIndex}`}>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.conditions.map((condition, condIndex) => (
                    <Card
                      key={condIndex}
                      className="p-6 hover-elevate"
                      data-testid={`card-condition-${catIndex}-${condIndex}`}
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {condition.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {condition.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/10" data-testid="section-conditions-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Don't See Your Condition Listed?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We treat many other musculoskeletal conditions not listed here.
            Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button data-testid="button-conditions-contact">Contact Us</Button>
            <Button variant="outline" data-testid="button-conditions-book">
              Book Assessment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
