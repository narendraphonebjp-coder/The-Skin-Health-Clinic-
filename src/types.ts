export interface TreatmentCase {
  id: string;
  title: string;
  type: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
  duration: string;
  recovery: string;
  patientBio?: string;
}

export interface Review {
  id: string;
  author: string;
  avatarUrl?: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google Maps' | 'Patient Testimonial';
  role?: string; // (e.g. "Verified Patient", "Local Guide")
  treatmentReceived?: string;
  reply?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
}

export interface PressPublication {
  publisher: string;
  title: string;
  year: string;
}

export interface AppointmentRequest {
  fullName: string;
  email: string;
  telephone: string;
  clinicType: 'Aesthetic' | 'Clinical' | 'Undecided';
  procedureOfInterest: string;
  message: string;
}
