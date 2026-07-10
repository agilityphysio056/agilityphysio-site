import abdulWahabImg from "@/assets/images/abdul-wahab.png";
import uzmaAnwarImg from "@/assets/images/uzma-anwar.png";
import drFayazHashamImg from "@/assets/images/dr-fayaz-hasham.png";
import muhammadUmarAshrafImg from "@/assets/images/muhammad-umar-ashraf.png";

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
  background?: string[];
  metaTitle?: string;
  metaDescription?: string;
  placeholderContent?: boolean;
}

export const director: TeamMember = {
  slug: "dr-fayaz-hasham",
  name: "Dr Fayaz Hasham",
  role: "Director & Clinical Governance Lead",
  photo: drFayazHashamImg,
  photoAlt: "Dr Fayaz Hasham, Director and Clinical Governance Lead at Agility Physio",
  imageObjectFit: "cover",
  qualifications: ["MBBS", "Clinical Governance Lead", "Director, Agility Physio"],
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
};

export const clinicians: TeamMember[] = [
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
    slug: "muhammad-umar-ashraf",
    name: "Muhammad Umar Ashraf",
    role: "MSK Physiotherapist",
    photo: muhammadUmarAshrafImg,
    photoAlt: "Muhammad Umar Ashraf, MSK Physiotherapist at Agility Physio",
    imageObjectFit: "cover",
    qualifications: ["HCPC", "MCSP"],
    intro:
      "Muhammad Umar Ashraf is an MSK Physiotherapist with experience across private practice, hospital-based physiotherapy and multidisciplinary rehabilitation. He provides evidence-based assessment, manual therapy, exercise rehabilitation and patient education for musculoskeletal and neurological conditions.",
    bio: [
      "Muhammad Umar Ashraf is an MSK Physiotherapist at Agility Physio, providing comprehensive assessment and rehabilitation for patients presenting with musculoskeletal and neurological conditions.",
      "He takes an evidence-based and patient-centred approach to care, developing individualised treatment plans based on each patient's presentation, functional limitations and recovery goals. His clinical approach includes manual therapy, therapeutic exercise, structured rehabilitation programmes, patient education and ongoing review of treatment outcomes.",
      "Muhammad has experience working autonomously with a range of patient presentations, including more complex physical conditions. He is committed to maintaining high professional and clinical standards while helping patients improve their mobility, independence and overall functional ability.",
      "His previous hospital-based experience includes providing physiotherapy across inpatient and outpatient services. He has undertaken musculoskeletal assessments, supported patients undergoing pre-operative and post-operative rehabilitation and contributed to the management of orthopaedic, neurological and cardiorespiratory conditions.",
      "His orthopaedic rehabilitation experience includes supporting patients following procedures such as ACL reconstruction and joint replacement surgery, with a focus on restoring movement, strength and functional independence.",
      "Muhammad's broader clinical training has included supervised experience across outpatient musculoskeletal physiotherapy, orthopaedics, paediatrics, general medicine, plastic surgery, burns rehabilitation, obstetrics and gynaecology, neurology and neurosurgery.",
      "He has also gained experience within cardiovascular, thoracic, pulmonary and critical-care environments, including early mobilisation, respiratory rehabilitation and chest physiotherapy.",
      "Muhammad works collaboratively with multidisciplinary healthcare teams and places strong emphasis on clear clinical documentation, patient education, exercise adherence and goal-focused rehabilitation.",
    ],
    specialities: [
      "Musculoskeletal assessment and rehabilitation",
      "Manual therapy",
      "Therapeutic exercise",
      "Spinal and joint conditions",
      "Neurological rehabilitation",
      "Post-operative orthopaedic rehabilitation",
      "Functional rehabilitation",
      "Cardiorespiratory physiotherapy",
      "Patient education and self-management",
      "Multidisciplinary patient care",
    ],
    background: [
      "MSK Physiotherapist, Agility Physio Ltd",
      "MSK Physiotherapist, private physiotherapy practice in Warwickshire",
      "Acute Intensive Care Unit Volunteer, Manchester University NHS Foundation Trust",
      "Physiotherapist Observer, private MSK clinic in Bradford",
      "Physiotherapist, Surgicare Hospital, Punjab",
      "Clinical physiotherapy placements, Mayo Hospital Lahore",
      "Physiotherapist Intern, General Outpatient and Teaching Physiotherapy Clinic",
    ],
    metaTitle: "Muhammad Umar Ashraf, MSK Physiotherapist | Agility Physio",
    metaDescription:
      "Learn about Muhammad Umar Ashraf, an MSK Physiotherapist at Agility Physio with experience in musculoskeletal assessment, manual therapy, exercise rehabilitation and hospital-based physiotherapy.",
  },
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
];

export const teamMembers: TeamMember[] = [director, ...clinicians];

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
