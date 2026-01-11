import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Car, Train, MapPin, Phone } from "lucide-react";

const services = [
  "Musculoskeletal Assessment",
  "Back & Neck Pain Treatment",
  "Sports Injury Rehabilitation",
  "Post-Operative Rehabilitation",
  "Joint & Muscle Pain",
  "Sciatica Treatment",
];

export default function StanmoreClinic() {
  return (
    <Layout
      title="Physiotherapy in Stanmore | Agility Physio"
      description="Expert physiotherapy in Stanmore, North London. HCPC registered physiotherapists specialising in back pain, neck pain, sports injuries, and post-surgery rehabilitation. Book your appointment today."
    >
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-clinic-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-secondary mb-2">Agility Physio</p>
            <h1
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-testid="text-clinic-title"
            >
              Physiotherapy in Stanmore
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our Stanmore clinic provides expert musculoskeletal physiotherapy to residents of Stanmore, Edgware, Harrow, and the surrounding areas of North London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="button-book-stanmore">
                  Book at Stanmore
                </Button>
              </Link>
              <a href="tel:02012345678">
                <Button size="lg" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  020 1234 5678
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
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
            </div>

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
                      <a href="tel:02012345678" className="text-sm text-muted-foreground hover:text-secondary">020 1234 5678</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Opening Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 8am-8pm<br />Sat: 9am-2pm<br />Sun: Closed</p>
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

      <section className="py-16 lg:py-20 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Book at Stanmore?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards recovery. Book your physiotherapy appointment at our Stanmore clinic today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-book-stanmore">
                Book at Stanmore
              </Button>
            </Link>
            <a href="tel:02012345678">
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                020 1234 5678
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
