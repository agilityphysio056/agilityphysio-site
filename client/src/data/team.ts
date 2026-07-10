import abdulWahabImg from "@/assets/images/abdul-wahab.png";
import uzmaAnwarImg from "@/assets/images/uzma-anwar.png";
import drFayazHashamImg from "@/assets/images/dr-fayaz-hasham.png";
import muhammadUmarImg from "@/assets/images/muhammad-umar.png";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  photo: string;
  photoAlt: string;
  imageObjectFit: "cover" | "contain";
  qualifications: string[];
  intro: string;
  bio: string[];
  specialities: string[];
  placeholderContent?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "abdul-wahab",
    name: "Abdul Wahab",
    role: "Senior Physiotherapist",
    photo: abdulWahabImg,
    photoAlt: "Abdul Wahab, Senior Physiotherapist at Agility Physio",
    imageObjectFit: "cover",
    qualifications: [
      "BSc (Hons) Physiotherapy",
      "HCPC Registered",
      "Member of the Chartered Society of Physiotherapy (CSP)",
    ],
    intro:
      "Abdul is a senior physiotherapist with extensive experience in musculoskeletal assessment and rehabilitation. He takes a thorough, patient-centred approach — combining detailed clinical assessment with hands-on treatment and progressive exercise programmes.",
    bio: [
      "Abdul has worked across a range of clinical settings, developing particular expertise in back and neck pain, sports injuries, and post-operative rehabilitation. He holds an honours degree in Physiotherapy and is registered with the Health and Care Professions Council (HCPC).",
      "He takes time to understand each patient's goals and lifestyle before developing a personalised treatment plan. His sessions combine manual therapy with targeted exercise rehabilitation, with a focus on long-term recovery rather than short-term symptom relief.",
      "Abdul sees patients at our Stanmore clinic and also conducts home visits across North London.",
    ],
    specialities: [
      "Back & Neck Pain",
      "Sports Injury Rehabilitation",
      "Post-Operative Rehabilitation",
      "Joint & Muscle Pain",
      "Exercise-Based Rehabilitation",
    ],
  },
  {
    slug: "uzma-anwar",
    name: "Uzma Anwar",
    role: "Senior Physiotherapist",
    photo: uzmaAnwarImg,
    photoAlt: "Uzma Anwar, Senior Physiotherapist at Agility Physio",
    imageObjectFit: "cover",
    qualifications: [
      "BSc (Hons) Physiotherapy",
      "HCPC Registered",
      "Member of the Chartered Society of Physiotherapy (CSP)",
    ],
    intro:
      "Uzma is a highly regarded senior physiotherapist known for her thorough clinical approach and her ability to explain complex conditions clearly to patients. She has helped hundreds of patients across North London achieve lasting relief from musculoskeletal pain and injury.",
    bio: [
      "Uzma's reputation for clear communication and effective treatment has earned her consistently excellent feedback from patients. She specialises in musculoskeletal physiotherapy, with particular experience in shoulder pathologies, cervical spine conditions, and injury rehabilitation.",
      "Her treatment approach combines detailed assessment with evidence-based manual therapy and tailored exercise prescription. She places great emphasis on patient education — ensuring every patient understands their condition and knows how to manage it effectively between appointments.",
      "Uzma practises at our Stanmore clinic and is available for home visits across the surrounding areas.",
    ],
    specialities: [
      "Shoulder Pain & Rotator Cuff",
      "Neck Pain & Cervical Spine",
      "Musculoskeletal Assessment",
      "Post-Injury Rehabilitation",
      "Patient Education & Self-Management",
    ],
  },
  {
    slug: "dr-fayaz-hasham",
    name: "Dr Fayaz Hasham",
    role: "Director & Clinical Governance Lead",
    photo: drFayazHashamImg,
    photoAlt: "Dr Fayaz Hasham, Director and Clinical Governance Lead at Agility Physio",
    imageObjectFit: "cover",
    qualifications: [
      "MBBS",
      "Clinical Governance Lead",
      "Director, Agility Physio",
    ],
    intro:
      "Dr Fayaz Hasham is the Director and Clinical Governance Lead at Agility Physio, responsible for maintaining the clinical standards and professional frameworks that underpin every patient's care. His leadership ensures that the practice operates to the highest standards of safety, quality, and evidence-based medicine.",
    bio: [
      "Dr Hasham brings a medical leadership perspective to the clinic, overseeing clinical governance, quality assurance, and the ongoing professional development of the team. His role ensures that every physiotherapist at Agility Physio operates within a robust clinical framework — and that patient safety is always the first priority.",
      "With a background in medicine, Dr Hasham plays a key role in establishing protocols for complex and post-operative cases, and in maintaining the strong relationships Agility Physio holds with insurance providers including AXA and BUPA.",
      "His vision for Agility Physio is a practice that combines the clinical rigour of hospital-grade physiotherapy with the accessibility and personal attention of a specialist private clinic.",
    ],
    specialities: [
      "Clinical Governance & Quality Assurance",
      "Complex & Post-Operative Case Oversight",
      "Insurance & Insurer Relations",
      "Team Leadership & Development",
      "Patient Safety Frameworks",
    ],
  },
  {
    slug: "muhammad-umar",
    name: "Muhammad Umar",
    role: "Senior Physiotherapist",
    photo: muhammadUmarImg,
    photoAlt: "Muhammad Umar, Senior Physiotherapist at Agility Physio",
    imageObjectFit: "cover",
    qualifications: [],
    intro: "",
    bio: [],
    specialities: [],
    placeholderContent: true,
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
