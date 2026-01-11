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

export default function StockwellClinic() {
  return (
    <Layout
      title="Physiotherapy in Stockwell | Agility Physio"
      description="Expert physiotherapy in Stockwell, South London. HCPC registered physiotherapists specialising in back pain, neck pain, sports injuries, and post-surgery rehabilitation. Book your appointment today."
    >
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-clinic-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-secondary mb-2">Agility Physio</p>
            <h1
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-testid="text-clinic-title"
            >
              Physiotherapy in Stockwell
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our Stockwell clinic provides expert musculoskeletal physiotherapy to residents of Stockwell, Brixton, Clapham, Vauxhall, and the surrounding areas of South London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="button-book-stockwell">
                  Book at Stockwell
                </Button>
              </Link>
              <a href="tel:02012345679">
                <Button size="lg" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  020 1234 5679
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
                  About Our Stockwell Clinic
                </h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    Situated in vibrant Stockwell, our South London physiotherapy clinic offers comprehensive musculoskeletal care to the local community. With excellent transport links and a central location, we're easily accessible from Brixton, Clapham, Vauxhall, and surrounding areas.
                  </p>
                  <p>
                    The clinic features modern treatment facilities in a welcoming, professional environment. Our private treatment rooms provide a quiet space for assessment and hands-on therapy, while our rehabilitation area is equipped for exercise-based treatment programmes.
                  </p>
                  <p>
                    Our team of HCPC registered physiotherapists brings a wealth of experience in treating musculoskeletal conditions. We take a patient-centred approach, ensuring that your treatment plan is tailored to your specific needs, goals, and lifestyle.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Your First Appointment
                </h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    When you visit our Stockwell clinic for the first time, you'll receive a thorough assessment of your condition. This includes a detailed discussion of your symptoms, medical history, and what you hope to achieve from treatment.
                  </p>
                  <p>
                    Your physiotherapist will then perform a comprehensive physical examination to identify the underlying cause of your problem. Based on this assessment, we'll explain our findings in clear, understandable terms and develop a treatment plan with you.
                  </p>
                  <p>
                    Treatment typically begins at your first appointment and may include manual therapy, specific exercises, and advice on managing your condition. We'll provide you with a home exercise programme and guidance on what you can do between sessions to support your recovery.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Common Conditions We Treat
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our Stockwell physiotherapists regularly treat:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Lower back pain, disc problems, and sciatica</li>
                  <li>Neck pain, headaches, and cervical spine issues</li>
                  <li>Shoulder conditions including impingement and rotator cuff injuries</li>
                  <li>Knee pain, ACL injuries, and post-surgical rehabilitation</li>
                  <li>Hip pain, bursitis, and osteoarthritis</li>
                  <li>Elbow and wrist conditions including tennis elbow</li>
                  <li>Running injuries and sports-related problems</li>
                  <li>Recovery following joint replacement surgery</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  When to Seek Urgent Medical Attention
                </h2>
                <p className="text-muted-foreground mb-4">
                  Most musculoskeletal problems respond well to physiotherapy. However, certain symptoms require immediate medical assessment. Please contact your GP or attend A&E if you experience:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Sudden severe weakness in your limbs</li>
                  <li>Numbness in the groin or saddle area</li>
                  <li>Loss of bladder or bowel control</li>
                  <li>Severe pain that doesn't respond to rest or pain relief</li>
                  <li>Unexplained weight loss accompanied by back pain</li>
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
                      <p className="text-sm text-muted-foreground">45 Clapham Road<br />Stockwell<br />SW9 0HP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:02012345679" className="text-sm text-muted-foreground hover:text-secondary">020 1234 5679</a>
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
                      <p className="text-sm font-medium text-foreground">By Tube/Rail</p>
                      <p className="text-sm text-muted-foreground">Stockwell Station (Northern/Victoria Lines) - 3 minute walk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Parking</p>
                      <p className="text-sm text-muted-foreground">Limited on-street parking. Pay & display available on side streets.</p>
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
            Ready to Book at Stockwell?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards recovery. Book your physiotherapy appointment at our Stockwell clinic today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-book-stockwell">
                Book at Stockwell
              </Button>
            </Link>
            <a href="tel:02012345679">
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                020 1234 5679
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
