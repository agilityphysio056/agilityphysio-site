import {
  Activity,
  Calendar,
  CreditCard,
  Hospital,
  type LucideIcon,
  ShieldCheck,
  Users,
} from "lucide-react";
import stanmoreClinicImage from "@assets/tuLjAm5XPGVuF4lEP2OYKEca7eUXVQNfJIxDOLqD_1768161733217.jpeg";
import stockwellClinicImage from "@assets/front_elevation_1768163052162.jpg";
import wirralClinicImage from "@/assets/images/wirral-clinic.png";

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  isBookingCta?: boolean;
}

export interface TransportItem {
  mode: string;
  detail: string;
}

export interface PricingConfig {
  initialPrice: string;
  initialDuration: string;
  followUpPrice: string;
  followUpDuration: string;
}

export interface ConditionItem {
  text: string;
  href?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ClinicConfig {
  slug: string;
  title: string;
  description: string;

  heroImage: string;
  heroImageAlt: string;
  heroOverlay: string;
  heroMinHeight: string;
  superheading: string;
  superheadingClasses: string;
  h1: string;
  h1Classes: string;
  heroSubtitle?: string;
  heroSubtitleClasses?: string;
  heroContentPadding: string;
  phone: string;
  phoneDisplay: string;
  urgencyText?: string;
  trustBadges?: string[];

  heroPrimaryCtaLabel?: string;
  heroPrimaryCtaHref?: string;

  reviewsText?: string;
  reviewsSubtext?: string;
  showTestimonials?: boolean;

  whyChooseUs?: WhyChooseItem[];
  whyChooseUsHeading?: string;

  aboutHeading: string;
  aboutParagraphs: string[];

  firstApptHeading: string;
  firstApptParagraphs: string[];

  conditionsHeading: string;
  conditionsIntro: string;
  conditionsList?: string[];
  conditionsWithLinks?: ConditionItem[];

  redFlagsHeading: string;
  redFlagsIntro: string;
  redFlagsList: string[];

  pricing?: PricingConfig;
  pricingMessage?: string;
  insuranceNote?: string;

  addressLines: string[];
  hours: string[];

  transport: TransportItem[];
  showParking?: boolean;
  parking?: string;
  showMap?: boolean;

  services: string[];

  areasServed?: { heading: string; text: string };

  faqs?: FaqItem[];

  structuredData?: object;

  ctaHeading: string;
  ctaSubtitle: string;
  ctaBookLabel: string;
  ctaBookTestId: string;
  ctaPrimaryHref?: string;
  showMobileStickyBar?: boolean;
}

export const stanmoreClinic: ClinicConfig = {
  slug: "stanmore",
  title: "Physiotherapy in Stanmore | Agility Physio",
  description:
    "Expert physiotherapy in Stanmore, North London. HCPC registered physiotherapists specialising in back pain, neck pain, sports injuries, and post-surgery rehabilitation. Book your appointment today.",

  heroImage: stanmoreClinicImage,
  heroImageAlt:
    "Stanmore Business and Innovation Centre - Agility Physio clinic location",
  heroOverlay: "bg-slate-900/80",
  heroMinHeight: "min-h-[70vh]",
  heroContentPadding: "py-20 lg:py-28 w-full",
  superheading: "Agility Physio · Stanmore",
  superheadingClasses:
    "text-sm font-medium text-primary mb-2 uppercase tracking-widest",
  h1: "Expert Physiotherapy in Stanmore",
  h1Classes: "text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight",
  heroSubtitle: "HCPC Registered Physiotherapists | Same Week Appointments Available",
  heroSubtitleClasses: "text-lg lg:text-xl text-white/90 leading-relaxed mb-8",
  phone: "02030929976",
  phoneDisplay: "0203 092 9976",
  urgencyText: "📅 Limited appointments available this week — book now to secure your slot",
  trustBadges: [
    "5-Star Rated",
    "HCPC Registered",
    "10+ Years Experience",
    "AXA & BUPA Recognised",
  ],

  reviewsText: "★★★★★ 250+ Google 5 Star Reviews",
  reviewsSubtext: "Rated 5 stars by our patients in Stanmore",
  showTestimonials: true,

  whyChooseUsHeading: "Why Choose Agility Physio Stanmore",
  whyChooseUs: [
    {
      icon: Calendar,
      title: "Same Week Appointments",
      description: "Get seen quickly — most patients book within days.",
      isBookingCta: true,
    },
    {
      icon: Hospital,
      title: "Private Treatment Rooms",
      description: "Comfortable, modern spaces for one-to-one care.",
    },
    {
      icon: ShieldCheck,
      title: "HCPC Registered Therapists",
      description: "Fully qualified, regulated professionals you can trust.",
    },
    {
      icon: CreditCard,
      title: "AXA & BUPA Recognised",
      description: "Direct billing accepted with major insurers.",
    },
  ],

  aboutHeading: "About Our Stanmore Clinic",
  aboutParagraphs: [
    "Located in the heart of Stanmore, our physiotherapy clinic offers comprehensive assessment and treatment for a wide range of musculoskeletal conditions. Whether you're experiencing back pain, recovering from surgery, or managing a sports injury, our HCPC registered physiotherapists are here to help.",
    "Our clinic is fully equipped with modern treatment facilities, including private treatment rooms for hands-on therapy and a dedicated rehabilitation area for exercise-based treatment. We provide a calm, professional environment where you can focus on your recovery.",
    "We work with patients of all ages and activity levels, from office workers with postural problems to athletes requiring sports-specific rehabilitation. Our approach combines thorough clinical assessment with evidence-based treatment techniques to achieve lasting results.",
  ],

  firstApptHeading: "What to Expect",
  firstApptParagraphs: [
    "Your first appointment will begin with a comprehensive assessment. Your physiotherapist will take a detailed history of your condition, discuss your symptoms and goals, and perform a thorough physical examination. This allows us to establish an accurate diagnosis and develop a personalised treatment plan.",
    "Treatment may include a combination of manual therapy techniques, exercise prescription, movement re-education, and advice on self-management. We believe in empowering our patients with the knowledge and tools to manage their condition effectively.",
    "Follow-up appointments are tailored to your needs, with treatment progressing as your condition improves. We'll provide you with a clear rehabilitation plan and keep you informed at every stage of your recovery.",
  ],

  conditionsHeading: "Conditions We Treat",
  conditionsIntro: "Our Stanmore physiotherapists have extensive experience treating:",
  conditionsList: [
    "Lower back pain and sciatica",
    "Neck pain and cervical problems",
    "Shoulder injuries including rotator cuff and frozen shoulder",
    "Knee pain, ligament injuries, and post-surgical rehabilitation",
    "Hip pain and arthritis management",
    "Tennis elbow, golfer's elbow, and other repetitive strain injuries",
    "Sports injuries and return-to-sport programmes",
    "Post-operative rehabilitation following orthopaedic surgery",
  ],

  redFlagsHeading: "Red Flags: When to Seek Urgent Help",
  redFlagsIntro:
    "While most musculoskeletal conditions can be safely managed with physiotherapy, some symptoms require urgent medical attention. Please seek immediate medical advice if you experience:",
  redFlagsList: [
    "Sudden severe weakness in your arms or legs",
    "Numbness in the saddle area (around the genitals or buttocks)",
    "Loss of bladder or bowel control",
    "Unexplained weight loss alongside your pain",
    "Pain that is worse at night and disturbs your sleep significantly",
  ],

  pricing: {
    initialPrice: "£50",
    initialDuration: "30 minutes",
    followUpPrice: "£45",
    followUpDuration: "30 minutes",
  },

  addressLines: [
    "Agility Physio LTD",
    "Stanmore Business and Innovation Centre",
    "Howard Road",
    "HA7 1GB",
  ],
  hours: ["Mon-Sat: 9am-7pm", "Sun: 12pm-8pm"],
  showParking: true,
  showMap: true,

  transport: [
    {
      mode: "By Train",
      detail: "Stanmore Station (Jubilee Line) - 5 minute walk",
    },
  ],
  parking: "Free on-street parking available. Pay & display car park nearby.",

  services: [
    "Musculoskeletal Assessment",
    "Back & Neck Pain Treatment",
    "Sports Injury Rehabilitation",
    "Post-Operative Rehabilitation",
    "Joint & Muscle Pain",
    "Sciatica Treatment",
  ],

  ctaHeading: "Ready to Book at Stanmore?",
  ctaSubtitle:
    "Take the first step towards recovery. Book your physiotherapy appointment at our Stanmore clinic today.",
  ctaBookLabel: "Book at Stanmore",
  ctaBookTestId: "button-cta-book-stanmore",
  showMobileStickyBar: true,
};

export const stockwellClinic: ClinicConfig = {
  slug: "stockwell",
  title: "Physiotherapy in Stockwell | Agility Physio",
  description:
    "Expert physiotherapy in Stockwell, South London. HCPC registered physiotherapists specialising in back pain, neck pain, sports injuries, and post-surgery rehabilitation. Book your appointment today.",

  heroImage: stockwellClinicImage,
  heroImageAlt:
    "Pulse Pharmacy, Clapham Road - Agility Physio Stockwell clinic location",
  heroOverlay: "bg-slate-900/60",
  heroMinHeight: "min-h-[60vh]",
  heroContentPadding: "py-16 lg:py-24",
  superheading: "Agility Physio",
  superheadingClasses: "text-sm font-medium text-primary mb-2",
  h1: "Physiotherapy in Stockwell",
  h1Classes: "text-3xl lg:text-4xl font-bold text-white mb-6",
  heroSubtitle:
    "Our Stockwell clinic provides expert musculoskeletal physiotherapy to residents of Stockwell, Brixton, Clapham, Vauxhall, and the surrounding areas of South London.",
  heroSubtitleClasses: "text-lg text-white/90 leading-relaxed mb-6",
  phone: "02030929976",
  phoneDisplay: "0203 092 9976",

  aboutHeading: "About Our Stockwell Clinic",
  aboutParagraphs: [
    "Situated in vibrant Stockwell, our South London physiotherapy clinic offers comprehensive musculoskeletal care to the local community. With excellent transport links and a central location, we're easily accessible from Brixton, Clapham, Vauxhall, and surrounding areas.",
    "The clinic features modern treatment facilities in a welcoming, professional environment. Our private treatment rooms provide a quiet space for assessment and hands-on therapy, while our rehabilitation area is equipped for exercise-based treatment programmes.",
    "Our team of HCPC registered physiotherapists brings a wealth of experience in treating musculoskeletal conditions. We take a patient-centred approach, ensuring that your treatment plan is tailored to your specific needs, goals, and lifestyle.",
  ],

  firstApptHeading: "Your First Appointment",
  firstApptParagraphs: [
    "When you visit our Stockwell clinic for the first time, you'll receive a thorough assessment of your condition. This includes a detailed discussion of your symptoms, medical history, and what you hope to achieve from treatment.",
    "Your physiotherapist will then perform a comprehensive physical examination to identify the underlying cause of your problem. Based on this assessment, we'll explain our findings in clear, understandable terms and develop a treatment plan with you.",
    "Treatment typically begins at your first appointment and may include manual therapy, specific exercises, and advice on managing your condition. We'll provide you with a home exercise programme and guidance on what you can do between sessions to support your recovery.",
  ],

  conditionsHeading: "Common Conditions We Treat",
  conditionsIntro: "Our Stockwell physiotherapists regularly treat:",
  conditionsList: [
    "Lower back pain, disc problems, and sciatica",
    "Neck pain, headaches, and cervical spine issues",
    "Shoulder conditions including impingement and rotator cuff injuries",
    "Knee pain, ACL injuries, and post-surgical rehabilitation",
    "Hip pain, bursitis, and osteoarthritis",
    "Elbow and wrist conditions including tennis elbow",
    "Running injuries and sports-related problems",
    "Recovery following joint replacement surgery",
  ],

  redFlagsHeading: "When to Seek Urgent Medical Attention",
  redFlagsIntro:
    "Most musculoskeletal problems respond well to physiotherapy. However, certain symptoms require immediate medical assessment. Please contact your GP or attend A&E if you experience:",
  redFlagsList: [
    "Sudden severe weakness in your limbs",
    "Numbness in the groin or saddle area",
    "Loss of bladder or bowel control",
    "Severe pain that doesn't respond to rest or pain relief",
    "Unexplained weight loss accompanied by back pain",
  ],

  addressLines: [
    "Agility Physio",
    "Pulse Pharmacy",
    "310 Clapham Road",
    "Stockwell",
    "SW9 9AE",
  ],
  hours: ["Mon-Fri: 8am-8pm", "Sat: 9am-2pm", "Sun: Closed"],
  showParking: true,
  showMap: true,

  transport: [
    {
      mode: "By Tube/Rail",
      detail: "Stockwell Station (Northern/Victoria Lines) - 3 minute walk",
    },
  ],
  parking: "Limited on-street parking. Pay & display available on side streets.",

  services: [
    "Musculoskeletal Assessment",
    "Back & Neck Pain Treatment",
    "Sports Injury Rehabilitation",
    "Post-Operative Rehabilitation",
    "Joint & Muscle Pain",
    "Sciatica Treatment",
  ],

  ctaHeading: "Ready to Book at Stockwell?",
  ctaSubtitle:
    "Take the first step towards recovery. Book your physiotherapy appointment at our Stockwell clinic today.",
  ctaBookLabel: "Book at Stockwell",
  ctaBookTestId: "button-cta-book-stockwell",
};

export const wirralClinic: ClinicConfig = {
  slug: "wirral",
  title: "Physiotherapy in Wirral | Agility Physio",
  description:
    "Expert physiotherapy in Wirral from HCPC registered physiotherapists. Treatment for back pain, neck pain, joint problems, sports injuries and post-operative rehabilitation. Book with Agility Physio.",

  heroImage: wirralClinicImage,
  heroImageAlt: "Modern physiotherapy treatment room — Agility Physio Wirral clinic",
  heroOverlay: "bg-slate-900/75",
  heroMinHeight: "min-h-[70vh]",
  heroContentPadding: "py-20 lg:py-28 w-full",
  superheading: "Agility Physio · Wirral",
  superheadingClasses:
    "text-sm font-medium text-primary mb-2 uppercase tracking-widest",
  h1: "Expert Physiotherapy in Wirral",
  h1Classes: "text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight",
  heroSubtitle: "HCPC Registered Physiotherapists | Personalised Treatment and Rehabilitation",
  heroSubtitleClasses: "text-lg lg:text-xl text-white/90 leading-relaxed mb-8",
  phone: "02030929976",
  phoneDisplay: "0203 092 9976",
  urgencyText: "Appointments are limited — book early to secure your preferred time.",
  trustBadges: [
    "5-Star Rated",
    "HCPC Registered",
    "Experienced Physiotherapists",
    "Self-Pay and Insured Patients",
  ],

  heroPrimaryCtaLabel: "Register Your Interest",
  heroPrimaryCtaHref: "tel:02030929976",

  reviewsText: "Patient Success Stories",
  reviewsSubtext: "Trusted by patients across Agility Physio",
  showTestimonials: true,

  whyChooseUsHeading: "Why Choose Agility Physio Wirral",
  whyChooseUs: [
    {
      icon: Calendar,
      title: "Convenient Appointments",
      description:
        "Appointments designed to fit around work, family and other commitments.",
    },
    {
      icon: Hospital,
      title: "Private Treatment Rooms",
      description: "Professional and confidential one-to-one physiotherapy appointments.",
    },
    {
      icon: ShieldCheck,
      title: "HCPC Registered Physiotherapists",
      description:
        "Assessment and treatment delivered by appropriately registered physiotherapists.",
    },
    {
      icon: Activity,
      title: "Personalised Rehabilitation",
      description:
        "Individual treatment plans based on your condition, goals and progress.",
    },
  ],

  aboutHeading: "About Our Wirral Clinic",
  aboutParagraphs: [
    "Situated in Bromborough on the Wirral peninsula, our physiotherapy clinic provides musculoskeletal assessment and treatment for patients across the local area. The clinic is run by HCPC registered physiotherapists who take an individualised approach to care — building a treatment plan around each patient's specific condition, goals and lifestyle.",
    "Our focus is on getting patients back to the things that matter most: returning to work after an injury, resuming sport and physical activity, or simply moving more freely in daily life. We assess the root cause of your problem, explain our findings clearly and agree a realistic rehabilitation pathway with you.",
    "We see patients with a wide range of musculoskeletal conditions, from acute sports injuries to longer-standing joint and soft tissue problems. Whether your pain has been present for weeks or years, our team will work with you to make meaningful, measurable progress.",
  ],

  firstApptHeading: "What to Expect at Your First Appointment",
  firstApptParagraphs: [
    "From the moment you arrive, the priority is understanding your situation fully. Your physiotherapist will take a thorough history of your symptoms — including how long they have been present, what makes them better or worse, and how they are affecting your daily life, work or sport.",
    "A comprehensive physical assessment follows, which may include movement testing, manual joint assessment and specific clinical tests relevant to your condition. This allows your physiotherapist to form an accurate diagnosis and explain the likely cause of your symptoms in straightforward terms.",
    "Your personalised treatment plan is developed with you, not just handed to you. Treatment typically begins at the first appointment and may include hands-on therapy, guided exercise prescription and practical self-management advice. Regular progress reviews keep the plan on track as your condition improves.",
  ],

  conditionsHeading: "Conditions We Treat",
  conditionsIntro: "Our Wirral physiotherapists assess and treat a wide range of musculoskeletal conditions, including:",
  conditionsWithLinks: [
    { text: "Lower back pain and sciatica", href: "/conditions/back-pain" },
    { text: "Neck pain and cervical problems", href: "/conditions/neck-pain" },
    { text: "Shoulder pain, frozen shoulder and rotator cuff problems", href: "/conditions/shoulder-pain" },
    { text: "Knee pain, ligament injuries and rehabilitation after surgery", href: "/conditions/knee-pain" },
    { text: "Hip pain and arthritis management", href: "/conditions/hip-pain" },
    { text: "Sports injuries", href: "/conditions/sports-injuries" },
    { text: "Muscle and tendon injuries" },
    { text: "Joint pain and stiffness" },
    { text: "Post-operative rehabilitation", href: "/conditions/post-op-rehab" },
    { text: "Return-to-work and return-to-sport rehabilitation" },
  ],

  redFlagsHeading: "Red Flags: When to Seek Urgent Help",
  redFlagsIntro:
    "While most musculoskeletal conditions can be safely managed with physiotherapy, some symptoms require urgent medical attention. Please seek immediate medical advice if you experience:",
  redFlagsList: [
    "Sudden severe weakness in your arms or legs",
    "Numbness in the saddle area (around the genitals or buttocks)",
    "Loss of bladder or bowel control",
    "Unexplained weight loss alongside your pain",
    "Pain that is worse at night and disturbs your sleep significantly",
  ],

  pricing: {
    initialPrice: "£50",
    initialDuration: "30 minutes",
    followUpPrice: "£45",
    followUpDuration: "30 minutes",
  },
  insuranceNote: "Self-paying and insured patients are welcome.",

  addressLines: [
    "Agility Physio Wirral",
    "Thursbury House",
    "1 Thursbury Road",
    "Bromborough",
    "CH62 3PW",
  ],
  hours: ["Opening Soon"],
  showParking: false,
  showMap: false,

  transport: [
    {
      mode: "By Rail",
      detail: "Bromborough Rail (Wirral Line) — please confirm walking distance before travelling.",
    },
  ],

  services: [
    "Musculoskeletal Physiotherapy Assessment",
    "Back and Neck Pain Treatment",
    "Sports Injury Rehabilitation",
    "Post-Operative Rehabilitation",
    "Joint and Muscle Pain Treatment",
    "Exercise Rehabilitation",
    "Return-to-Work Rehabilitation",
  ],

  areasServed: {
    heading: "Physiotherapy for Patients Across Wirral",
    text: "Our Wirral clinic in Bromborough is conveniently placed for patients travelling from Eastham, Bebington, Higher Bebington, Port Sunlight, Spital, Clatterbridge and surrounding areas.",
  },

  faqs: [
    {
      question: "Do I need a GP referral?",
      answer:
        "No. Self-paying patients can normally book directly with Agility Physio without a GP referral. Patients using health insurance should check the requirements of their individual policy.",
    },
    {
      question: "What happens at my first physiotherapy appointment?",
      answer:
        "Your physiotherapist will discuss your symptoms and medical history, complete an appropriate physical assessment and explain a personalised treatment and rehabilitation plan.",
    },
    {
      question: "What conditions do you treat?",
      answer:
        "Our physiotherapists assess and treat a range of musculoskeletal conditions, including back pain, neck pain, joint problems, sports injuries and rehabilitation following surgery.",
    },
    {
      question: "How much does physiotherapy cost in Wirral?",
      answer: "Please contact us for current pricing.",
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "Acceptance depends on your insurer, policy and clinic recognition. Please contact the clinic to confirm before booking.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can register your interest online or call us on 0203 092 9976.",
    },
  ],

  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        name: "Agility Physio Wirral",
        telephone: "+442030929976",
        url: "https://agilityphysio.net/clinics/wirral",
        medicalSpecialty: "Physiotherapy",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Thursbury House, 1 Thursbury Road",
          addressLocality: "Bromborough",
          addressRegion: "Merseyside",
          postalCode: "CH62 3PW",
          addressCountry: "GB",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Agility Physio Ltd",
          url: "https://agilityphysio.net",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://agilityphysio.net",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Clinics",
            item: "https://agilityphysio.net/clinics",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Wirral",
            item: "https://agilityphysio.net/clinics/wirral",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a GP referral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Self-paying patients can normally book directly with Agility Physio without a GP referral. Patients using health insurance should check the requirements of their individual policy.",
            },
          },
          {
            "@type": "Question",
            name: "What happens at my first physiotherapy appointment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your physiotherapist will discuss your symptoms and medical history, complete an appropriate physical assessment and explain a personalised treatment and rehabilitation plan.",
            },
          },
          {
            "@type": "Question",
            name: "What conditions do you treat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our physiotherapists assess and treat a range of musculoskeletal conditions, including back pain, neck pain, joint problems, sports injuries and rehabilitation following surgery.",
            },
          },
          {
            "@type": "Question",
            name: "How much does physiotherapy cost in Wirral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Please contact us for current pricing.",
            },
          },
          {
            "@type": "Question",
            name: "Do you accept health insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Acceptance depends on your insurer, policy and clinic recognition. Please contact the clinic to confirm before booking.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book an appointment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can register your interest online or call us on 0203 092 9976.",
            },
          },
        ],
      },
    ],
  },

  ctaHeading: "Wirral Clinic Opening Soon",
  ctaSubtitle:
    "Register your interest in physiotherapy at our new Wirral clinic in Bromborough and be the first to know when appointments open.",
  ctaBookLabel: "Register Your Interest",
  ctaBookTestId: "button-cta-book-wirral",
  ctaPrimaryHref: "tel:02030929976",
};
