import { useState, FormEvent } from 'react';
import { AppointmentRequest } from '../types';
import { Sparkles, CheckCircle2, CalendarPlus } from 'lucide-react';

interface AppointmentFormProps {
  initialProcedure?: string;
  onSuccess?: () => void;
}

export function AppointmentForm({ initialProcedure = '', onSuccess }: AppointmentFormProps) {
  const [formData, setFormData] = useState<AppointmentRequest>({
    fullName: '',
    email: '',
    telephone: '',
    clinicType: 'Undecided',
    procedureOfInterest: initialProcedure,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const procedures = [
    'Clinical Acne & Scar revision (Laser/Peels)',
    'Aesthetic Anti-Aging & Face Contouring (HIFU/Fillers)',
    'Clinical Skin Allergies & Chronic Eczema',
    'Modern Hair Restoration & PRP Treatment',
    'Signature Refresh Glow Hydrafacial',
    'Pigmentary Disorders & Chemical Resurfacing',
    'Other Clinical/Aesthetic skincare'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F5] border border-[#C5A880]/30 p-8 md:p-12 text-center rounded-xs animate-fade-in" id="appointment-success">
        <div className="w-16 h-16 bg-[#C5A880]/15 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#C5A880]" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-3">
          Consultation Request Filed
        </h3>
        <p className="text-neutral-500 text-sm max-w-md mx-auto mb-8 font-sans leading-relaxed">
          Thank you, <span className="font-semibold text-neutral-800">{formData.fullName}</span>. Dr. Vaishnavi Sahu’s desk at Kidwai Nagar, Kanpur has received your draft request. A care coordinator will contact you via phone (<span className="text-neutral-800 font-medium">{formData.telephone}</span>) or email to lock in your clinical slot.
        </p>
        
        <div className="bg-white border border-neutral-100 p-6 rounded-xs max-w-lg mx-auto text-left shadow-xs mb-8">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880] mb-4 border-b pb-2">
            Details of Request
          </h4>
          <div className="space-y-2 text-xs text-neutral-600">
            <div><strong className="text-neutral-900">Name:</strong> {formData.fullName}</div>
            <div><strong className="text-neutral-900">Email:</strong> {formData.email}</div>
            <div><strong className="text-neutral-900">Telephone:</strong> {formData.telephone}</div>
            <div><strong className="text-neutral-900">Focus:</strong> {formData.clinicType} Care</div>
            <div><strong className="text-neutral-900">Interest:</strong> {formData.procedureOfInterest || 'General Dermatology Assessment'}</div>
            {formData.message && (
              <div><strong className="text-neutral-900">Note:</strong> "{formData.message}"</div>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              telephone: '',
              clinicType: 'Undecided',
              procedureOfInterest: '',
              message: ''
            });
          }}
          className="bg-neutral-900 hover:bg-[#C5A880] text-white text-[10px] font-semibold uppercase tracking-widest px-6 py-3 transition-colors rounded-xs"
        >
          Request Another Booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto" id="appointment-form-element">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Full Name */}
        <div className="md:col-span-2 border-b border-neutral-300 pb-2 focus-within:border-[#C5A880] transition-colors">
          <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
            FULL NAME *
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-transparent border-none text-neutral-900 placeholder-neutral-300 text-sm focus:outline-hidden py-1 px-0 font-sans"
          />
        </div>

        {/* Email */}
        <div className="border-b border-neutral-300 pb-2 focus-within:border-[#C5A880] transition-colors">
          <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
            EMAIL *
          </label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border-none text-neutral-900 placeholder-neutral-300 text-sm focus:outline-hidden py-1 px-0 font-sans"
          />
        </div>

        {/* Telephone */}
        <div className="border-b border-neutral-300 pb-2 focus-within:border-[#C5A880] transition-colors">
          <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
            TELEPHONE *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 99999 99999"
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            className="w-full bg-transparent border-none text-neutral-900 placeholder-neutral-300 text-sm focus:outline-hidden py-1 px-0 font-sans"
          />
        </div>

        {/* Clinic Focus */}
        <div className="border-b border-neutral-300 pb-2 focus-within:border-[#C5A880] transition-colors">
          <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
            CLINIC CLASSIFICATION
          </label>
          <select
            value={formData.clinicType}
            onChange={(e) => setFormData({ ...formData, clinicType: e.target.value as any })}
            className="w-full bg-transparent border-none text-neutral-800 text-sm focus:outline-hidden py-1 px-0 font-sans cursor-pointer focus:ring-0"
          >
            <option value="Undecided">Select Category...</option>
            <option value="Clinical">Clinical Dermatology (Allergy, Acne, Eczema)</option>
            <option value="Aesthetic">Aesthetic Excellence (Laser, Peels, Hydrafacials)</option>
          </select>
        </div>

        {/* Procedure of Interest */}
        <div className="border-b border-neutral-300 pb-2 focus-within:border-[#C5A880] transition-colors">
          <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
            PROCEDURE OF INTEREST
          </label>
          <select
            value={formData.procedureOfInterest}
            onChange={(e) => setFormData({ ...formData, procedureOfInterest: e.target.value })}
            className="w-full bg-transparent border-none text-neutral-800 text-sm focus:outline-hidden py-1 px-0 font-sans cursor-pointer focus:ring-0"
          >
            <option value="">Select treatment type...</option>
            {procedures.map((proc, idx) => (
              <option key={idx} value={proc}>{proc}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="md:col-span-2 border-b border-neutral-300 pb-2 focus-within:border-[#C5A880] transition-colors">
          <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
            CLINICAL NOTE / DISCUSSION GOALS
          </label>
          <textarea
            rows={3}
            placeholder="Tell us, in your own words, what skincare goals or challenges you would like Dr. Sahu to assess..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-transparent border-none text-neutral-900 placeholder-neutral-300 text-sm focus:outline-hidden py-1 px-0 font-sans resize-none"
          />
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-neutral-900 hover:bg-[#C5A880] text-white text-[11px] font-semibold uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center space-x-2 rounded-xs disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <span className="w-3 h-3 rounded-full border border-white border-t-transparent animate-spin inline-block mr-2" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <span>SUBMIT REQUEST</span>
              <span className="text-xs">→</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
