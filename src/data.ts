import { TreatmentCase, Review, TimelineEvent, PressPublication } from './types';

import doctorPortrait from './assets/images/dr_vaishnavi_sahu_1781107086849.png';
import clinicInterior from './assets/images/skin_clinic_interior_1781107102698.png';
import acneBefore from './assets/images/acne_before_1781107125280.png';
import acneAfter from './assets/images/acne_after_1781107143360.png';

export const DOCTOR_PORTRAIT = doctorPortrait;
export const CLINIC_INTERIOR = clinicInterior;

export const TREATMENT_CASES: TreatmentCase[] = [
  {
    id: 'case-1',
    title: 'Advanced Fractional Laser Scar Revision',
    type: 'Clinical Acne Scar treatment',
    description: 'Patient presented with moderate grade-III icepick and boxcar acne scars. Treatment plan involved 3 sessions of custom-wavelength fractional CO2 laser paired with platelet-rich fibrin (PRF) to stimulate cellular building blocks.',
    beforeUrl: acneBefore,
    afterUrl: acneAfter,
    duration: '3 Sessions',
    recovery: '4-5 days per session',
    patientBio: 'Patient, 24. Professional based in Kanpur. Six-month follow-up showing 85% scar floor improvement.'
  },
  {
    id: 'case-2',
    title: 'Non-Surgical Skin Tightening & Hydration',
    type: 'Aesthetic Anti-Aging & Glow',
    description: 'A comprehensive approach combining High-Intensity Focused Ultrasound (HIFU) for deep-layer SMAS lifting, followed by active multi-molecule Hyaluronic acid dermal hydration to boost natural luminosity.',
    beforeUrl: acneBefore, // Fallback or reusing to ensure clean rendering
    afterUrl: acneAfter,
    duration: '1.5 hrs',
    recovery: 'Immediate (Zero Downtime)',
    patientBio: 'Patient, 32. Visible improvement in jawline contouring and surface radiance. Photo taken 14 days post-treatment.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2012',
    title: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
    institution: 'King George\'s Medical University (KGMU), Lucknow — Hon. Distinction in Dermatology'
  },
  {
    year: '2016',
    title: 'Doctor of Medicine (MD) in Dermatology, Venereology & Leprosy',
    institution: 'GSVM Medical College, Kanpur — Gold Medalist'
  },
  {
    year: '2018',
    title: 'Senior Fellowship in Aesthetic Dermatology & Lasers',
    institution: 'National Skin Centre (NSC), Singapore — Specialized in Asian Skin Phenotypes'
  },
  {
    year: '2020',
    title: 'Founded The Skin Health Clinic, Kanpur',
    institution: 'Established state-of-the-art laser and clinical skin care centre in Kidwai Nagar'
  },
  {
    year: '2024',
    title: 'International Board Certification',
    institution: 'American Academy of Aesthetic Medicine (AAAM) — Board Certified Fellow'
  }
];

export const PRESS_PUBLICATIONS: PressPublication[] = [
  {
    publisher: 'INDIAN JOURNAL OF DERMATOLOGY',
    title: 'Efficacy of Fractional lasers in South Asian skin types: a comprehensive 3-year study',
    year: '2024'
  },
  {
    publisher: 'THE TIMES OF INDIA',
    title: 'How rising humidity in Uttar Pradesh alters skin barrier functions and how to prevent acne breakouts',
    year: '2023'
  },
  {
    publisher: 'AESTHETIC DERMATOLOGY WORLD',
    title: 'Modern approaches to pigmentary disorders and melasma management without hydroquinone',
    year: '2022'
  },
  {
    publisher: 'KANPUR HEALTH CHRONICLE',
    title: 'Understanding medical acne: why self-medicating with over-the-counter steroids is rising',
    year: '2022'
  },
  {
    publisher: 'JOURNAL OF CUTANEOUS & AESTHETIC SURGERY',
    title: 'Combination therapy with microneedling and active PRP for atrophic scars (co-author)',
    year: '2021'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Aditya Mishra',
    rating: 5,
    text: 'Dr. Puja Kumari Gupta is incredibly professional. I visited for cystic acne scars that I had for years. After 3 laser sessions at The Skin Health Clinic, the scars have flattened significantly. The clinic in Kidwai Nagar is very hygiene-focused and uses extremely advanced machinery. Strongly recommended!',
    date: '2026-04-18',
    source: 'Google Maps',
    role: 'Local Guide (Level 6)',
    treatmentReceived: 'Fractional Laser Treatment',
    reply: 'Thank you Aditya! It has been a pleasure assisting you on your skin transformation journey. Regular sun preservation is key for maintaining these results!'
  },
  {
    id: 'rev-2',
    author: 'Sneha Gupta',
    rating: 5,
    text: 'I had the most wonderful HydraFacial and skin treatment here. Dr. Puja Kumari is extremely patient; she analyzed my core skin barrier before recommending anything. Unlike other places, they don\'t force you to buy unnecessary products. The clinic architecture is very soothing and calm!',
    date: '2026-05-02',
    source: 'Patient Testimonial',
    role: 'Verified Patient',
    treatmentReceived: 'Signature Skin Glow Facials',
    reply: 'We appreciate the kind words, Sneha. Protecting your skin barrier is always our highest priority!'
  },
  {
    id: 'rev-3',
    author: 'Rajesh Verma',
    rating: 5,
    text: 'Highly satisfied with the skin allergy clinic services. I was struggling with chronic eczema on my hands. Dr. Puja Kumari identified the allergen trigger on the very first visit. Her prescribed regime worked wonders in a single week.',
    date: '2026-05-24',
    source: 'Google Maps',
    role: 'Verified reviewer',
    treatmentReceived: 'Clinical Allergy Management',
    reply: 'Thank you Rajesh for trusting our clinical guidance. Eczema flare-ups are highly manageable with the right barrier care.'
  },
  {
    id: 'rev-4',
    author: 'Priya Dwivedi',
    rating: 5,
    text: 'Undoubtedly the best skin clinic in Kidwai Nagar / Kanpur area. The entire staff is professional, the atmosphere is elegant, and Dr. Gupta is a true expert. My skin texture has never felt better after the anti-aging therapy.',
    date: '2026-06-01',
    source: 'Google Maps',
    role: 'Local Guide',
    treatmentReceived: 'Aesthetic Skin Tightening',
    reply: 'Thank you Priya. We strive to provide international-standard care right here in Kanpur.'
  }
];
