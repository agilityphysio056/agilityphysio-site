import { Link, useParams } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, AlertTriangle } from "lucide-react";

const conditionsData: Record<string, {
  title: string;
  description: string;
  heroDescription?: string;
  seoNote?: string;
  metaDescription: string;
  whatIsIt: string;
  symptoms: string[];
  howPhysioHelps: string;
  whatToExpect: string[];
  redFlags: string[];
  faqs: { question: string; answer: string }[];
}> = {
  "back-pain": {
    title: "Back Pain",
    description: "Back pain is one of the most common musculoskeletal conditions, affecting up to 80% of people at some point in their lives.",
    heroDescription: "Back pain is one of the most common causes of reduced mobility and discomfort. At our Stanmore and Stockwell clinics, we provide evidence-based physiotherapy treatment to reduce pain, restore movement and prevent recurrence.",
    seoNote: "Patients across Stanmore and Stockwell trust our clinic for professional back pain physiotherapy and rehabilitation.",
    metaDescription: "Expert physiotherapy treatment for back pain. HCPC registered physiotherapists providing assessment, diagnosis, and rehabilitation for acute and chronic back conditions.",
    whatIsIt: "Back pain can range from a dull, constant ache to a sudden, sharp pain. It may be caused by muscle strain, disc problems, joint dysfunction, or postural issues. While most back pain resolves within a few weeks, some cases become chronic and require specialist treatment.",
    symptoms: [
      "Localised pain in the lower, middle, or upper back",
      "Stiffness and reduced range of movement",
      "Muscle spasms or tension",
      "Pain that radiates to the buttocks or legs",
      "Difficulty standing, sitting, or walking for long periods",
      "Pain that worsens with certain movements or positions",
    ],
    howPhysioHelps: "Physiotherapy is highly effective for treating both acute and chronic back pain. Our physiotherapists carry out a detailed assessment to identify the root cause of your symptoms. Treatment may include manual therapy, targeted strengthening exercises, posture correction and personalised rehabilitation to support long-term recovery.",
    whatToExpect: [
      "Comprehensive assessment to identify the cause of your pain",
      "Hands-on treatment including joint mobilisation and soft tissue work",
      "Personalised exercise programme for strengthening and flexibility",
      "Education on posture, lifting techniques, and self-management",
      "Progressive rehabilitation to restore full function",
    ],
    redFlags: [
      "Numbness in the saddle area (around genitals or buttocks)",
      "Loss of bladder or bowel control",
      "Severe weakness in both legs",
      "Unexplained weight loss with back pain",
      "History of cancer with new onset back pain",
    ],
    faqs: [
      { question: "How long does back pain take to recover?", answer: "Recovery time varies depending on the cause and severity of your back pain. Most acute episodes improve within 4-6 weeks with appropriate treatment. Chronic conditions may require longer-term management." },
      { question: "Should I rest or stay active with back pain?", answer: "Gentle activity is generally better than bed rest for most types of back pain. Your physiotherapist will advise you on appropriate activity levels and exercises." },
      { question: "Will I need an MRI for back pain?", answer: "In most cases, imaging is not necessary for back pain. Your physiotherapist can often diagnose and treat your condition based on clinical assessment. If imaging is needed, we can refer you appropriately." },
    ],
  },
  "neck-pain": {
    title: "Neck Pain",
    description: "Neck pain is a common condition that can significantly impact daily activities, work, and sleep quality.",
    heroDescription: "Neck pain can affect your ability to work, sleep and carry out daily activities comfortably. At our Stanmore and Stockwell clinics, we provide evidence-based neck pain physiotherapy to reduce pain, restore movement and prevent recurrence.",
    seoNote: "Patients across Stanmore and Stockwell trust our physiotherapists for professional neck pain treatment and rehabilitation.",
    metaDescription: "Specialist physiotherapy for neck pain and stiffness. HCPC registered physiotherapists treating cervical spine conditions, whiplash, and associated headaches.",
    whatIsIt: "Neck pain can arise from various causes including muscle strain, poor posture, degenerative conditions, or injury such as whiplash. The neck (cervical spine) is highly mobile and supports the head, making it vulnerable to strain and dysfunction.",
    symptoms: [
      "Pain and stiffness in the neck",
      "Reduced range of movement when turning or tilting",
      "Headaches, particularly at the base of the skull",
      "Pain that radiates to the shoulders or arms",
      "Muscle tension and trigger points",
      "Pins and needles or numbness in the arms or hands",
    ],
    howPhysioHelps: "Physiotherapy is highly effective for treating both acute and chronic neck pain. Our physiotherapists carry out a detailed assessment to identify contributing factors such as posture, muscle imbalance and joint restriction. Treatment may include manual therapy, targeted exercises, mobility work and ergonomic advice to support long-term recovery.",
    whatToExpect: [
      "Detailed assessment of your neck, posture, and contributing factors",
      "Manual therapy including mobilisation and soft tissue techniques",
      "Specific exercises for strength and mobility",
      "Advice on workstation setup and sleeping positions",
      "Strategies for managing and preventing recurrence",
    ],
    redFlags: [
      "Severe weakness in both arms",
      "Loss of coordination or balance",
      "Difficulty swallowing or breathing",
      "Neck pain following significant trauma",
      "Constant severe pain that doesn't change with position",
    ],
    faqs: [
      { question: "Is neck pain related to my posture?", answer: "Poor posture, particularly prolonged forward head positions when using computers or phones, is a common contributor to neck pain. Your physiotherapist can assess your posture and provide specific advice." },
      { question: "How can I prevent neck pain at work?", answer: "Regular breaks, proper workstation setup, and maintaining good posture are key. Your physiotherapist can provide specific guidance on ergonomics and exercises to do at your desk." },
      { question: "Should I use a special pillow?", answer: "The right pillow can help. Generally, a pillow that keeps your neck in a neutral position is best. Your physiotherapist can advise on sleeping positions and pillow choices." },
    ],
  },
  "shoulder-pain": {
    title: "Shoulder Pain",
    description: "The shoulder is the most mobile joint in the body, making it susceptible to a range of conditions that can cause pain and limit function.",
    heroDescription: "Shoulder pain can affect your ability to lift, reach and carry out daily activities comfortably. At our Stanmore and Stockwell clinics, we provide evidence-based shoulder pain physiotherapy to reduce pain, restore mobility and support long-term recovery.",
    seoNote: "Patients across Stanmore and Stockwell trust our physiotherapists for professional shoulder pain treatment and rehabilitation.",
    metaDescription: "Expert physiotherapy for shoulder pain including frozen shoulder, rotator cuff injuries, and impingement. HCPC registered physiotherapists in London.",
    whatIsIt: "Shoulder pain can result from various conditions including rotator cuff injuries, frozen shoulder (adhesive capsulitis), impingement syndrome, or arthritis. The complex structure of the shoulder allows for wide range of movement but also makes it prone to injury.",
    symptoms: [
      "Pain with overhead movements or reaching behind",
      "Night pain that disrupts sleep",
      "Weakness when lifting or rotating the arm",
      "Stiffness and reduced range of movement",
      "Clicking or catching sensations",
      "Pain that radiates down the arm",
    ],
    howPhysioHelps: "Physiotherapy is highly effective for treating conditions such as rotator cuff injuries, frozen shoulder and shoulder impingement. Our physiotherapists carry out a detailed assessment to identify the underlying cause of your symptoms. Treatment may include manual therapy, mobility exercises, progressive strengthening and personalised rehabilitation to restore full shoulder function.",
    whatToExpect: [
      "Comprehensive shoulder assessment and diagnosis",
      "Manual therapy to improve joint mobility and reduce pain",
      "Progressive strengthening exercises for the rotator cuff",
      "Advice on activity modification during recovery",
      "Return to normal activities and sport-specific rehabilitation",
    ],
    redFlags: [
      "Sudden severe pain following trauma",
      "Visible deformity of the shoulder",
      "Complete inability to move the arm",
      "Significant swelling or bruising",
      "Fever with shoulder pain and swelling",
    ],
    faqs: [
      { question: "How long does frozen shoulder last?", answer: "Frozen shoulder typically goes through three phases over 12-24 months. Physiotherapy can help manage symptoms and may speed recovery at each stage." },
      { question: "Will I need surgery?", answer: "Most shoulder conditions respond well to physiotherapy. Surgery is typically only considered when conservative treatment has not been effective after an adequate trial period." },
      { question: "Can I still exercise with shoulder pain?", answer: "Often yes, with modifications. Your physiotherapist will advise which activities to continue, modify, or avoid during your recovery." },
    ],
  },
  "knee-pain": {
    title: "Knee Pain",
    description: "Knee pain affects people of all ages and activity levels, from sports injuries to age-related wear and tear.",
    heroDescription: "Knee pain can affect your ability to walk, climb stairs and stay active. At our Stanmore and Stockwell clinics, we provide evidence-based knee pain physiotherapy to reduce pain, improve strength and restore function safely.",
    seoNote: "Patients in Stanmore and Stockwell trust us for expert knee pain physiotherapy and rehabilitation.",
    metaDescription: "Specialist physiotherapy for knee pain and injuries. Treatment for ligament injuries, osteoarthritis, and post-surgical rehabilitation. HCPC registered physiotherapists.",
    whatIsIt: "The knee is a complex joint that bears significant load during daily activities. Knee pain can result from ligament injuries, meniscal tears, patellofemoral problems, tendinopathies, or osteoarthritis. Understanding the specific cause is essential for effective treatment.",
    symptoms: [
      "Pain with walking, stairs, or kneeling",
      "Swelling around the knee joint",
      "Stiffness, particularly after rest",
      "Instability or feeling of the knee giving way",
      "Locking or catching sensations",
      "Difficulty straightening or fully bending the knee",
    ],
    howPhysioHelps: "Physiotherapy is highly effective for treating knee conditions such as ligament injuries, meniscal tears, patellofemoral pain and osteoarthritis. Our physiotherapists carry out a detailed assessment to identify the underlying cause of your symptoms. Treatment may include manual therapy, targeted strengthening, load management strategies and progressive rehabilitation to support long-term recovery.",
    whatToExpect: [
      "Thorough assessment of the knee and contributing factors",
      "Treatment to reduce pain and swelling",
      "Progressive strengthening of quadriceps and hip muscles",
      "Balance and proprioception training",
      "Gradual return to activity with appropriate load management",
    ],
    redFlags: [
      "Significant trauma with immediate severe swelling",
      "Locked knee that cannot be straightened",
      "Severe pain with inability to weight bear",
      "Signs of infection (red, hot, very swollen)",
      "Unexplained weight loss with knee symptoms",
    ],
    faqs: [
      { question: "Should I stop running with knee pain?", answer: "Not necessarily. Often a period of modified activity, combined with targeted exercises, allows runners to continue while their condition improves. Your physiotherapist will advise based on your specific diagnosis." },
      { question: "Do I need an MRI?", answer: "Not always. Many knee conditions can be diagnosed clinically. If imaging is needed to guide treatment, your physiotherapist can arrange a referral." },
      { question: "Will I need knee replacement surgery?", answer: "Most knee problems can be managed without surgery. Even for osteoarthritis, exercise-based physiotherapy is recommended as the first-line treatment and can often delay or prevent the need for surgery." },
    ],
  },
  "hip-pain": {
    title: "Hip Pain",
    description: "Hip pain can significantly impact mobility and quality of life, affecting activities from walking to sitting.",
    heroDescription: "Hip pain can affect your ability to walk, sit comfortably and stay active. At our Stanmore and Stockwell clinics, we provide evidence-based hip pain physiotherapy to reduce pain, improve mobility and support long-term recovery.",
    seoNote: "Patients in Stanmore and Stockwell trust us for expert hip pain physiotherapy and rehabilitation.",
    metaDescription: "Expert physiotherapy for hip pain including arthritis, bursitis, and muscle strains. HCPC registered physiotherapists providing assessment and treatment.",
    whatIsIt: "Hip pain can originate from the joint itself, surrounding muscles and tendons, or be referred from the lower back. Common causes include osteoarthritis, trochanteric bursitis, labral tears, muscle strains, and hip impingement. Accurate diagnosis is key to effective treatment.",
    symptoms: [
      "Pain in the groin, outer hip, or buttock",
      "Stiffness, particularly in the morning",
      "Difficulty with activities like walking, stairs, or getting in/out of cars",
      "Pain when lying on the affected side",
      "Reduced range of movement",
      "Clicking or catching sensations",
    ],
    howPhysioHelps: "Physiotherapy is highly effective for treating hip conditions such as osteoarthritis, bursitis, labral irritation and muscle strains. Our physiotherapists carry out a detailed assessment to identify the underlying cause of your symptoms. Treatment may include manual therapy, targeted strengthening of the hip and core muscles, mobility work and progressive rehabilitation to restore function safely.",
    whatToExpect: [
      "Comprehensive assessment including movement analysis",
      "Manual therapy to reduce pain and improve mobility",
      "Specific strengthening exercises for hip and core",
      "Activity modification advice during recovery",
      "Education on long-term management strategies",
    ],
    redFlags: [
      "Sudden severe hip pain following a fall (especially in older adults)",
      "Inability to weight bear",
      "Severe night pain with sweating",
      "Unexplained weight loss",
      "Signs of infection (fever, severe pain, red and hot joint)",
    ],
    faqs: [
      { question: "Is my hip pain actually coming from my hip?", answer: "Not always. Hip pain can be referred from the lower back or arise from surrounding soft tissues. Your physiotherapist will assess thoroughly to identify the true source of your symptoms." },
      { question: "Will exercise make my arthritis worse?", answer: "No, appropriate exercise is beneficial for hip arthritis. Research shows that strengthening exercises can reduce pain and improve function, even in moderate to severe arthritis." },
      { question: "When should I consider hip replacement?", answer: "Joint replacement is typically considered when conservative treatments no longer control symptoms adequately. Many people with hip arthritis do well with physiotherapy and may never need surgery." },
    ],
  },
  "sciatica": {
    title: "Sciatica",
    description: "Sciatica refers to pain that radiates along the path of the sciatic nerve, typically affecting one side of the body.",
    heroDescription: "Sciatica can cause sharp, radiating pain from the lower back into the leg, affecting mobility and daily activities. At our Stanmore and Stockwell clinics, we provide evidence-based sciatica physiotherapy to reduce nerve irritation, relieve pain and support long-term recovery.",
    seoNote: "Patients in Stanmore and Stockwell trust us for expert sciatica treatment and rehabilitation.",
    metaDescription: "Specialist physiotherapy for sciatica and sciatic nerve pain. Evidence-based treatment for leg pain, numbness, and tingling. HCPC registered physiotherapists.",
    whatIsIt: "Sciatica describes pain that travels from the lower back down through the buttock and into the leg, following the path of the sciatic nerve. It's often caused by a herniated disc, spinal stenosis, or piriformis syndrome. The symptoms can range from mild discomfort to severe, debilitating pain.",
    symptoms: [
      "Pain radiating from the lower back through the buttock and down the leg",
      "Numbness or tingling in the leg or foot",
      "Weakness in the affected leg",
      "Pain that worsens with sitting",
      "Sharp, shooting pain when standing or walking",
      "Burning or electric shock sensations",
    ],
    howPhysioHelps: "Physiotherapy is highly effective for managing sciatica and reducing pressure on the sciatic nerve. Our physiotherapists carry out a detailed assessment to identify whether your symptoms are caused by disc irritation, spinal stiffness or muscular tension. Treatment may include manual therapy, nerve mobilisation techniques, targeted exercises and progressive rehabilitation to improve mobility and reduce recurrence.",
    whatToExpect: [
      "Assessment to determine the cause of nerve irritation",
      "Manual therapy to reduce muscle tension and improve spinal mobility",
      "Nerve mobilisation techniques",
      "Specific exercises to reduce pressure on the nerve",
      "Postural advice and guidance on positions of comfort",
    ],
    redFlags: [
      "Numbness in the saddle area",
      "Loss of bladder or bowel control",
      "Severe weakness in both legs",
      "Rapidly worsening symptoms",
      "Difficulty walking or standing",
    ],
    faqs: [
      { question: "How long does sciatica last?", answer: "Many cases of sciatica improve within 4-6 weeks with appropriate treatment. Some cases take longer, particularly if caused by disc herniation. Your physiotherapist will give you a realistic timeline based on your specific situation." },
      { question: "Should I stay in bed?", answer: "No, prolonged bed rest is not recommended. Gentle movement and walking are usually better for recovery than complete rest. Your physiotherapist will advise on appropriate activity levels." },
      { question: "Will I need surgery?", answer: "The majority of sciatica cases resolve with conservative treatment. Surgery is typically only considered if symptoms don't improve after several months of appropriate care, or if there are concerning neurological signs." },
    ],
  },
  "sports-injuries": {
    title: "Sports Injuries",
    description: "Sports injuries range from acute trauma to overuse conditions, and proper rehabilitation is essential for safe return to activity.",
    heroDescription: "Sports injuries can affect performance, mobility and your ability to train or compete. At our Stanmore and Stockwell clinics, we provide evidence-based sports injury physiotherapy to reduce pain, restore strength and support a safe return to activity.",
    seoNote: "Athletes and active individuals in Stanmore and Stockwell trust us for expert sports injury physiotherapy and rehabilitation.",
    metaDescription: "Expert sports physiotherapy for all activity levels. Treatment for muscle strains, ligament injuries, and return-to-sport rehabilitation. HCPC registered physiotherapists.",
    whatIsIt: "Sports injuries can affect muscles, tendons, ligaments, or joints. They may result from acute trauma (such as a sprain or strain) or from repetitive overuse. Common sports injuries include hamstring strains, ACL injuries, tennis elbow, and Achilles tendinopathy.",
    symptoms: [
      "Pain during or after activity",
      "Swelling around the injured area",
      "Bruising following acute injuries",
      "Reduced strength or power",
      "Instability or joint giving way",
      "Stiffness and reduced range of movement",
    ],
    howPhysioHelps: "Physiotherapy plays a key role in the effective management of sports injuries. Our physiotherapists carry out a detailed assessment to identify the injured tissue and contributing factors such as muscle imbalance, poor biomechanics or training errors. Treatment may include manual therapy, progressive strengthening, sport-specific rehabilitation and structured return-to-play programmes.",
    whatToExpect: [
      "Accurate diagnosis of your injury",
      "Immediate management to reduce pain and swelling",
      "Progressive rehabilitation programme",
      "Sport-specific strengthening and conditioning",
      "Gradual return to training with clear milestones",
    ],
    redFlags: [
      "Significant joint deformity",
      "Severe swelling within hours of injury",
      "Inability to weight bear",
      "Numbness or tingling following injury",
      "Significant bruising with severe pain",
    ],
    faqs: [
      { question: "When can I return to sport?", answer: "This depends on the injury type and severity. Your physiotherapist will guide you through a progressive return, ensuring you meet specific criteria before increasing intensity." },
      { question: "Should I use ice or heat?", answer: "In the first 48-72 hours after an acute injury, ice can help reduce swelling. After this period, heat may be more beneficial. Your physiotherapist will advise on the best approach for your injury." },
      { question: "How can I prevent re-injury?", answer: "Proper rehabilitation, addressing underlying weaknesses, and appropriate training load management are key. Your physiotherapist will provide exercises and advice to reduce your risk of recurrence." },
    ],
  },
  "post-op-rehab": {
    title: "Post-Operative Rehabilitation",
    description: "Structured physiotherapy following surgery is essential for optimal recovery and return to normal function.",
    heroDescription: "Post-operative rehabilitation is essential for a safe and effective recovery after surgery. At our Stanmore and Stockwell clinics, we provide structured post-operative physiotherapy to reduce pain, restore strength and help you return to normal activities confidently.",
    metaDescription: "Specialist post-surgical physiotherapy following joint replacement, ACL reconstruction, and orthopaedic procedures. HCPC registered physiotherapists.",
    whatIsIt: "Post-operative rehabilitation refers to the structured physiotherapy programme that follows surgical procedures. This may include joint replacements (hip, knee, shoulder), ligament reconstructions (ACL), spinal surgery, or other orthopaedic operations. Proper rehabilitation is crucial for achieving the best possible outcome from surgery.",
    symptoms: [
      "Pain and swelling following surgery",
      "Reduced range of movement",
      "Muscle weakness from disuse",
      "Difficulty with daily activities",
      "Changes in walking pattern",
      "Scar tissue restrictions",
    ],
    howPhysioHelps: "Post-operative physiotherapy follows protocols designed to optimize healing while progressively restoring function. Your physiotherapist works alongside your surgeon to ensure your rehabilitation progresses appropriately. We guide you through each stage of recovery, from early mobilisation to return to normal activities.",
    whatToExpect: [
      "Early focus on pain management and reducing swelling",
      "Progressive range of movement exercises",
      "Strengthening programme following surgical protocols",
      "Gait retraining and functional exercises",
      "Return to normal activities and sport if appropriate",
    ],
    redFlags: [
      "Signs of infection (increasing redness, warmth, discharge)",
      "Fever following surgery",
      "Severe pain not controlled by medication",
      "Significant increase in swelling",
      "Calf pain or swelling (possible blood clot)",
    ],
    faqs: [
      { question: "When should I start physiotherapy after surgery?", answer: "This depends on the procedure. Many surgeries benefit from physiotherapy within the first few days, while others require a period of rest first. Your surgeon will advise, and we'll coordinate with their team." },
      { question: "How long will rehabilitation take?", answer: "Recovery timelines vary by procedure. Joint replacements typically take 3-6 months for good function, while ACL reconstruction may take 9-12 months for return to sport. Your physiotherapist will give you realistic expectations for your specific surgery." },
      { question: "Will I need to do exercises at home?", answer: "Yes, home exercises are an essential part of post-operative rehabilitation. We'll provide you with a clear programme and progress this as your recovery advances." },
    ],
  },
};

export default function ConditionDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const condition = conditionsData[slug];

  if (!condition) {
    return (
      <Layout title="Condition Not Found | Agility Physio">
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Condition Not Found</h1>
            <p className="text-muted-foreground mb-8">The condition you're looking for doesn't exist.</p>
            <Link href="/conditions">
              <Button>View All Conditions</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${condition.title} Treatment | Agility Physio`}
      description={condition.metaDescription}
    >
      <section className="py-16 lg:py-24 bg-muted" data-testid="section-condition-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-secondary mb-2">Conditions We Treat</p>
            <h1
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-testid="text-condition-title"
            >
              {condition.title} Treatment in Stanmore & Stockwell
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {condition.heroDescription || condition.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="button-book-condition">
                  Book Assessment
                </Button>
              </Link>
              <a href="tel:02030929976">
                <Button size="lg" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  0203 092 9976
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
                  What is {condition.title}?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {condition.whatIsIt}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Common Symptoms
                </h2>
                <ul className="space-y-2">
                  {condition.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {condition.seoNote && (
                <p className="text-muted-foreground leading-relaxed">
                  {condition.seoNote}
                </p>
              )}

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Physiotherapy Helps
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {condition.howPhysioHelps}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What to Expect from Treatment
                </h2>
                <ul className="space-y-2">
                  {condition.whatToExpect.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">When to Seek Urgent Help</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Most cases respond well to physiotherapy, but seek immediate medical advice if you experience:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {condition.redFlags.map((flag, index) => (
                        <li key={index}>• {flag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {condition.faqs.map((faq, index) => (
                    <Card key={index} className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Get Treatment</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book an assessment with one of our experienced physiotherapists.
                </p>
                <Link href="/contact" className="block">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Our Clinics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get treatment at one of our convenient London locations.
                </p>
                <div className="space-y-3">
                  <Link href="/clinics/stanmore" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      Stanmore, North London
                    </Button>
                  </Link>
                  <Link href="/clinics/stockwell" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      Stockwell, South London
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Questions? Our team is here to help.
                </p>
                <a href="tel:02030929976" className="flex items-center gap-2 text-sm text-foreground hover:text-secondary">
                  <Phone className="w-4 h-4" />
                  0203 092 9976
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Treatment for Your {condition.title}?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book an assessment with our experienced physiotherapists and take the first step towards recovery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Book Assessment</Button>
            </Link>
            <a href="tel:02030929976">
              <Button size="lg" variant="outline">
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
