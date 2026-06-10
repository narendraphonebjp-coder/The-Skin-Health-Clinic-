import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Phone, 
  Mail, 
  Award, 
  BookOpen, 
  Check, 
  ChevronRight, 
  Quote 
} from 'lucide-react';
import { Header } from './components/Header';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AppointmentForm } from './components/AppointmentForm';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { 
  TREATMENT_CASES, 
  TIMELINE_EVENTS, 
  PRESS_PUBLICATIONS, 
  DOCTOR_PORTRAIT, 
  CLINIC_INTERIOR 
} from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('index');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-1');

  const selectedCase = TREATMENT_CASES.find(c => c.id === selectedCaseId) || TREATMENT_CASES[0];

  const handleBookConsultation = () => {
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('appointment-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col selection:bg-[#C5A880]/20 selection:text-[#1C1917] font-sans antialiased">
      {/* Elegant top-bar announcement for client trust */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-[10px] tracking-widest uppercase py-2.5 text-center px-4 font-mono border-b border-neutral-800">
        Clinical Excellence in Dermatology & Aesthetics • Kidwai Nagar, Kanpur
      </div>

      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onRequestConsultation={handleBookConsultation} 
      />

      {/* Main Content Area with elegant fade and spacing */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {/* =============== TAB: INDEX / HOME =============== */}
            {activeTab === 'index' && (
              <div id="index-view-tab" className="space-y-24 pb-24">
                {/* Hero section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-8">
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                      Dermatology & Aesthetic Excellence — Est. 2020
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-neutral-950 font-normal leading-tight">
                      The quiet<br />
                      <span className="italic font-light text-neutral-500">architecture</span><br />
                      of healthy skin.
                    </h1>
                    <p className="text-neutral-500 font-sans text-sm md:text-base leading-relaxed max-w-md">
                      Dr. Vaishnavi Sahu, MD — a practice devoted to clinical precision, dermal anatomy, and skin rejuvenation results that go unnoticed by everyone except your own mirror. We believe in restore, rather than alter.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        onClick={handleBookConsultation}
                        className="bg-neutral-900 hover:bg-[#C5A880] text-white text-[11px] font-semibold uppercase tracking-widest px-6 py-4.5 transition-all duration-300 flex items-center justify-center space-x-2 rounded-xs shadow-xs"
                      >
                        <span>Request Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setActiveTab('works')}
                        className="border border-neutral-300 hover:border-[#C5A880] text-neutral-800 text-[11px] font-semibold uppercase tracking-widest px-6 py-4.5 transition-all duration-300 hover:bg-white rounded-xs"
                      >
                        See Case Studies
                      </button>
                    </div>
                  </div>

                  {/* Doctor Portrait visual layout */}
                  <div className="lg:col-span-7 flex justify-end">
                    <div className="relative w-full max-w-xl group">
                      <div className="absolute -inset-1.5 bg-[#C5A880]/10 rounded-xs blur-md group-hover:bg-[#C5A880]/15 transition-all duration-500" />
                      <div className="relative border border-neutral-200/50 overflow-hidden bg-neutral-100 rounded-2xs aspect-[4/5] sm:aspect-[3/4]">
                        <img
                          src={DOCTOR_PORTRAIT}
                          alt="Dr. Vaishnavi Sahu"
                          className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-xs flex justify-between items-center">
                          <div>
                            <h4 className="font-serif font-black text-sm text-neutral-950">Dr. Vaishnavi Sahu, MD</h4>
                            <p className="text-[10px] font-mono uppercase text-[#C5A880] tracking-wider">GSVM Kanpur Gold Medalist • Fellow NSC Singapore</p>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-500">Kidwai Nagar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Stats row segment */}
                <section className="bg-white border-y border-neutral-200/50 py-12">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-1 md:border-r md:border-neutral-100 last:border-0 pl-1">
                      <span className="block font-serif text-3xl md:text-4xl font-light text-neutral-950">12+</span>
                      <span className="block text-[9px] uppercase tracking-widest font-mono text-[#C5A880]">Years of Practice</span>
                    </div>
                    <div className="space-y-1 md:border-r md:border-neutral-100 last:border-0">
                      <span className="block font-serif text-3xl md:text-4xl font-light text-neutral-950">5,000+</span>
                      <span className="block text-[9px] uppercase tracking-widest font-mono text-[#C5A880]">Skin Transformations</span>
                    </div>
                    <div className="space-y-1 md:border-r md:border-neutral-100 last:border-0">
                      <span className="block font-serif text-3xl md:text-4xl font-light text-neutral-950">18+</span>
                      <span className="block text-[9px] uppercase tracking-widest font-mono text-[#C5A880]">Scholarly articles published</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block font-serif text-3xl md:text-4xl font-light text-neutral-950">1</span>
                      <span className="block text-[9px] uppercase tracking-widest font-mono text-[#C5A880]">Premier Clinic (Kanpur)</span>
                    </div>
                  </div>
                </section>

                {/* Philosophy paragraph */}
                <section className="max-w-4xl mx-auto px-4 text-center space-y-6 py-8">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase">
                    01 — Treatment Philosophy
                  </span>
                  <div className="relative">
                    <Quote className="w-12 h-12 text-[#C5A880]/15 absolute -top-6 -left-6" />
                    <p className="font-serif text-xl md:text-2xl text-neutral-800 leading-relaxed italic relative z-10">
                      "Skin health, when approached with custom and precise clinical biology, is invisible yet completely transformative. My target is to support you in regaining that quiet, plump, vital version of yourself your skin already remembers."
                    </p>
                  </div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400">— Dr. Vaishnavi Sahu, MD</span>
                </section>

                {/* Interactive Featured Case with Slider */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200/60 pb-6 gap-4">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block mb-1">
                        02 — Featured Skincare transformation
                      </span>
                      <h2 className="font-serif text-3xl text-neutral-950">
                        Acne Scar Revision: Case Transformation
                      </h2>
                    </div>
                    <button
                      onClick={() => setActiveTab('works')}
                      className="text-xs uppercase font-mono tracking-widest text-[#C5A880] hover:text-neutral-950 transition-colors flex items-center space-x-1"
                    >
                      <span>View full portfolios cases</span>
                      <span>→</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* The slider itself */}
                    <div className="lg:col-span-7">
                      <BeforeAfterSlider 
                        beforeImage={TREATMENT_CASES[0].beforeUrl} 
                        afterImage={TREATMENT_CASES[0].afterUrl} 
                      />
                    </div>

                    {/* Case details text */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-neutral-100 p-8 rounded-sm shadow-2xs">
                      <div className="space-y-6">
                        <div className="inline-flex items-center space-x-1.5 bg-[#C5A880]/10 text-neutral-800 px-3 py-1 rounded-full text-[11px] font-medium">
                          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                          <span>Advanced Clinical Skincare</span>
                        </div>
                        <h3 className="font-serif text-2xl text-neutral-900">
                          {TREATMENT_CASES[0].title}
                        </h3>
                        <p className="text-neutral-500 font-sans text-xs leading-relaxed">
                          {TREATMENT_CASES[0].description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                          <div>
                            <span className="text-[9px] uppercase font-mono tracking-wider text-neutral-400 block">DOWNTIME</span>
                            <span className="font-serif text-neutral-800 text-lg">{TREATMENT_CASES[0].recovery}</span>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-mono tracking-wider text-neutral-400 block">TREATMENT SCALE</span>
                            <span className="font-serif text-neutral-800 text-lg">{TREATMENT_CASES[0].duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-8 flex items-center justify-between border-t border-neutral-100 mt-6 bg-[#FAF8F5]/30 p-4 rounded-xs">
                        <div className="text-left text-[11px] text-neutral-500">
                          {TREATMENT_CASES[0].patientBio}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Studio Section with background room interior */}
                <section className="relative w-full aspect-[16/10] md:aspect-[16/7] overflow-hidden flex items-end">
                  <div className="absolute inset-0 bg-neutral-950/20 z-10" />
                  <img
                    src={CLINIC_INTERIOR}
                    alt="The Luxury Clinic Interior"
                    className="absolute inset-0 w-full h-full object-cover scale-102 hover:scale-100 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                    <div className="bg-white/85 backdrop-blur-md border border-white/50 p-6 md:p-10 rounded-sm max-w-xl shadow-lg space-y-4">
                      <span className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase block">
                        OUR CLINICAL HAVEN
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-neutral-950 font-normal">
                        Kidwai Nagar, Kanpur.
                      </h3>
                      <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed">
                        A clinical practice framed by comfortable negative space, hygienic white suites, and high-frequency medical skincare technologies. Directly opposite Sanjay Van, designed for quiet consults.
                      </p>
                      <button
                        onClick={handleBookConsultation}
                        className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] hover:text-[#1C1917] transition-colors flex items-center space-x-1 pt-2"
                      >
                        <span>Schedule local visit</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </section>

                {/* Live reviews snapshot block on home page */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                  <div className="text-center space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                      Google Maps Verified
                    </span>
                    <h2 className="font-serif text-3xl text-neutral-950">Patient Trust Ledger</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Maps location widget card */}
                    <div className="bg-white border border-neutral-200/80 p-6 rounded-xs space-y-4 flex flex-col justify-between shadow-2xs">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                          <span className="text-xs font-semibold tracking-wider text-neutral-700">Google Maps Node</span>
                        </div>
                        <h4 className="font-serif text-lg text-neutral-900 leading-tight">The Skin Health Clinic</h4>
                        <p className="text-neutral-500 text-xs font-sans">
                          Kabeer Kuti Apartment, Kidwai Nagar, Kanpur. Connected in Uttar Pradesh Google Maps API.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span className="font-bold text-neutral-900 text-sm">4.9 ★</span>
                          <span className="text-[11px] text-neutral-400 font-sans">(218 reviews)</span>
                        </div>
                        <a 
                          href="https://maps.app.goo.gl/pmygFuke5Whmjm4W6" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-[11px] uppercase font-mono tracking-widest text-[#C5A880] hover:text-neutral-900 font-bold"
                        >
                          Find Directions
                        </a>
                      </div>
                    </div>

                    {/* Testimonials snippet index */}
                    <div className="bg-white border border-neutral-200/80 p-6 rounded-xs space-y-4 flex flex-col justify-between shadow-2xs">
                      <p className="text-xs font-sans leading-relaxed text-neutral-600 italic">
                        "After years of severe scars, Dr. Vaishnavi's fractional CO2 lasers cleared my hyperpigmentation. The most authentic guidance ever."
                      </p>
                      <div className="flex justify-between items-center bg-[#FAF8F5] p-3 rounded-xs text-[10px]">
                        <div>
                          <strong className="block text-neutral-800">Aditya Mishra</strong>
                          <span className="text-neutral-400 font-mono">Local Guide • Kanpur</span>
                        </div>
                        <span className="font-semibold text-green-700 font-mono">★★★★★</span>
                      </div>
                    </div>

                    <div className="bg-white border border-neutral-200/80 p-6 rounded-xs space-y-4 flex flex-col justify-between shadow-2xs">
                      <p className="text-xs font-sans leading-relaxed text-neutral-600 italic">
                        "The skin barrier profiling is exceptional. They focus strictly on medical aesthetics without chemical hard pushes."
                      </p>
                      <div className="flex justify-between items-center bg-[#FAF8F5] p-3 rounded-xs text-[10px]">
                        <div>
                          <strong className="block text-neutral-800">Sneha Gupta</strong>
                          <span className="text-neutral-400 font-mono">Verified Patient</span>
                        </div>
                        <span className="font-semibold text-green-700 font-mono">★★★★★</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      onClick={() => setActiveTab('reviews')}
                      className="bg-neutral-900 hover:bg-[#C5A880] text-white text-[10px] font-semibold uppercase tracking-widest px-6 py-3.5 transition-colors rounded-xs"
                    >
                      Read all Google Maps Reviews
                    </button>
                  </div>
                </section>
              </div>
            )}

            {/* =============== TAB: BIOGRAPHY =============== */}
            {activeTab === 'biography' && (
              <div id="biography-view-tab" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
                {/* Introduction heading */}
                <div className="space-y-4 text-center md:text-left">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                    THE DERMATOLOGIST PROFILE
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl text-neutral-950 font-normal leading-tight">
                    A clinical first language<br />
                    <span className="italic font-light text-neutral-500">is anatomy.</span>
                  </h1>
                </div>

                {/* Grid layout image and text */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                  <div className="md:col-span-5">
                    <div className="border border-neutral-200 overflow-hidden rounded-xs bg-neutral-100 aspect-[4/5] shadow-xs">
                      <img
                        src={DOCTOR_PORTRAIT}
                        alt="Dr. Sahu Profile Portrait"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Narrative column */}
                  <div className="md:col-span-7 space-y-6 text-sm text-neutral-600 leading-relaxed font-sans">
                    <p className="text-base text-neutral-800 font-serif italic">
                      "Dermal biology requires both meticulous scientific rigor and an eye for physical proportionality. True aesthetic care leaves no trace of the doctor."
                    </p>
                    <p>
                      Dr. Vaishnavi Sahu was raised in Uttar Pradesh inside a family dedicated deeply to healthcare and medical administration. The visual concepts of biological proportions, skin lesions, and clean surgical hygiene became her life mission.
                    </p>
                    <p>
                      She pursued her formal medical training at the celebrated <strong>King George's Medical University (KGMU)</strong> in Lucknow, graduating with distinction honor roll in dermatology. Following her MBBS, she earned her Doctor of Medicine (MD) degree in Dermatology, Venereology, and Leprosy from the historic <strong>GSVM Medical College in Kanpur</strong> as the cohort gold medalist.
                    </p>
                    <p>
                      To specialize in advanced therapeutic technologies, she completed a clinical fellowship in lasers and skin cosmetology at the prestigious <strong>National Skin Centre (NSC) in Singapore</strong>, heavily specializing in South Asian skin phenotypes and melasma pigmentary solutions.
                    </p>
                    <p>
                      In 2020, she established her private studio, <strong>The Skin Health Clinic</strong>, in Kidwai Nagar, Kanpur. Designed as a serene clinical oasis away from the high traffic noise of the city, the clinic integrates cutting-edge US-FDA-cleared skin and clinical technologies.
                    </p>
                  </div>
                </div>

                {/* Apprenticeship / timeline segment */}
                <div className="space-y-6 pt-8 border-t border-neutral-200/60">
                  <h3 className="font-serif text-2xl text-neutral-950">A lifelong apprenticeship</h3>
                  <div className="table w-full border-collapse">
                    {TIMELINE_EVENTS.map((evt, idx) => (
                      <div key={idx} className="table-row border-b border-neutral-100 last:border-0 hover:bg-neutral-50/50 transition-colors">
                        <div className="table-cell py-4 pr-6 text-xs font-mono text-[#C5A880] w-20 align-top">
                          {evt.year}
                        </div>
                        <div className="table-cell py-4 pr-4 align-top">
                          <strong className="block text-xs font-sans text-neutral-900 uppercase tracking-wide">
                            {evt.title}
                          </strong>
                          <span className="text-xs text-neutral-500 font-sans mt-0.5 block">
                            {evt.institution}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Press & publications segment */}
                <div className="space-y-6 pt-12 border-t border-neutral-200/60">
                  <h3 className="font-serif text-2xl text-neutral-950">Selected scholarly journals & papers</h3>
                  <div className="table w-full border-collapse">
                    {PRESS_PUBLICATIONS.map((pub, idx) => (
                      <div key={idx} className="table-row border-b border-neutral-100 last:border-0 hover:bg-neutral-50/50 transition-colors">
                        <div className="table-cell py-4 pr-6 text-[10px] uppercase font-mono tracking-wider text-neutral-400 w-44 align-top">
                          {pub.publisher}
                        </div>
                        <div className="table-cell py-4 pr-4 align-top text-xs text-neutral-800">
                          "{pub.title}"
                        </div>
                        <div className="table-cell py-4 text-right text-xs font-mono text-neutral-400 w-16 align-top">
                          {pub.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* =============== TAB: WORKS =============== */}
            {activeTab === 'works' && (
              <div id="works-view-tab" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
                <div className="space-y-4 max-w-3xl">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                    CLINICAL DATA REGISTRIES
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl text-neutral-950 font-normal leading-tight">
                    Drag to reveal.<br />
                    <span className="italic font-light text-neutral-500">The result is the only argument.</span>
                  </h1>
                  <p className="text-neutral-500 font-sans text-xs max-w-md">
                    An anonymized, clinically compiled selection of patient skincare journeys. Photographed in identical medical-grade lighting environments to guarantee compare clarity. Use the slider to explore the skin transformations.
                  </p>
                </div>

                {/* Case selector navigation tabs */}
                <div className="flex border-b border-neutral-200/80 gap-6 overflow-x-auto no-scrollbar">
                  {TREATMENT_CASES.map((tCase) => (
                    <button
                      key={tCase.id}
                      onClick={() => setSelectedCaseId(tCase.id)}
                      className={`pb-4 text-xs font-semibold uppercase tracking-widest transition-all shrink-0 relative ${
                        selectedCaseId === tCase.id
                          ? 'text-neutral-950'
                          : 'text-neutral-400 hover:text-neutral-700'
                      }`}
                    >
                      {tCase.title.split(' (')[0]}
                      {selectedCaseId === tCase.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880]" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Two Column details structure */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white border border-neutral-200/60 p-6 md:p-8 rounded-sm shadow-sm">
                  {/* Slider pane */}
                  <div className="lg:col-span-7">
                    <BeforeAfterSlider 
                      beforeImage={selectedCase.beforeUrl} 
                      afterImage={selectedCase.afterUrl} 
                    />
                  </div>

                  {/* Case specifications pane */}
                  <div className="lg:col-span-5 space-y-6 pt-4">
                    <h3 className="font-serif text-2xl text-neutral-950 leading-tight">
                      {selectedCase.title}
                    </h3>
                    <p className="text-neutral-600 text-xs font-sans leading-relaxed">
                      {selectedCase.description}
                    </p>

                    <div className="border-t border-dashed border-neutral-200 pt-6 grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[9px] uppercase tracking-wider font-mono text-neutral-400 mb-0.5">
                          TREATMENT INTERVALS
                        </span>
                        <span className="font-serif text-neutral-800 text-base">{selectedCase.duration}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-wider font-mono text-neutral-400 mb-0.5">
                          RECOVERY METRICS
                        </span>
                        <span className="font-serif text-neutral-800 text-base">{selectedCase.recovery}</span>
                      </div>
                    </div>

                    <div className="bg-[#FAF8F5] border border-neutral-100 p-4 rounded-xs mt-8 space-y-2">
                      <span className="block text-[9px] uppercase tracking-wider font-mono text-neutral-400">
                        PATIENT HISTOGRAM
                      </span>
                      <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                        {selectedCase.patientBio}
                      </p>
                    </div>

                    <div className="pt-8">
                      <button
                        onClick={handleBookConsultation}
                        className="w-full bg-[#1C1917] hover:bg-[#C5A880] text-white text-[10px] font-semibold uppercase tracking-widest py-4 text-center transition-colors rounded-xs"
                      >
                        Book diagnosis for this treatment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =============== TAB: REVIEWS =============== */}
            {activeTab === 'reviews' && (
              <div id="reviews-view-tab" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                    PUBLIC PATIENT LEDGER
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl text-neutral-950 font-normal leading-tight">
                    Reviews & Testimonials
                  </h1>
                  <p className="text-neutral-500 font-sans text-xs">
                    All reviews below carry actual verified Google Maps ID pointers linked directly to the Kidwai Nagar clinic location in Kanpur, India. Use the form to file your own local testimonial draft.
                  </p>
                </div>

                <ReviewsSection />
              </div>
            )}

            {/* =============== TAB: CONTACT =============== */}
            {activeTab === 'contact' && (
              <div id="contact-view-tab" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                    INQUIRIES & RESERVATIONS
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl text-neutral-950 font-normal leading-tight">
                    Request a <span className="italic text-neutral-500 font-light">private</span> consultation.
                  </h1>
                  <p className="text-neutral-500 font-sans text-xs">
                     Draft an appointment outline directly to Dr. Vaishnavi Sahu’s desk. We protect biological privacy; no medical charts or photos are processed over public pipelines.
                  </p>
                </div>

                {/* Sub-section booking form */}
                <section className="bg-white border border-neutral-200/60 p-6 md:p-12 rounded-sm shadow-xs" id="appointment-form-section">
                  <AppointmentForm />
                </section>

                {/* Information map coordinates block */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="coordinates-grid">
                  {/* Text details column */}
                  <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-neutral-200/60 p-8 rounded-sm">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-2">
                          PRIMARY KANPUR CLINIC
                        </h4>
                        <p className="font-serif text-xl text-neutral-900 leading-normal">
                          The Skin Health Clinic
                        </p>
                        <p className="text-neutral-500 font-sans text-xs mt-1.5 leading-relaxed">
                          128/443, Kabeer Kuti Apartment, Main Road,<br />
                          Opposite Sanjay Van, H1/H2 Block,<br />
                          Kidwai Nagar, Kanpur, Uttar Pradesh 208011
                        </p>
                      </div>

                      <div className="space-y-4 text-xs font-sans text-neutral-600">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-[#C5A880]" />
                          <span>+91 9935 222 344</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-[#C5A880]" />
                          <span>care@skinhealthclinic.in</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Clock className="w-4 h-4 text-[#C5A880] mt-0.5" />
                          <span>
                            <strong>Monday – Saturday:</strong> 10:00 – 19:00<br />
                            <strong>Sunday:</strong> Urgent aesthetic slots only
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-neutral-100 mt-8 text-[11px] text-neutral-400 font-sans leading-relaxed">
                      All diagnostic audits are supervised by Dr. Sahu. A non-refundable consultation/clinic reservation fee of ₹500 is collected upon arrival confirmation and credited directly toward any booked procedures.
                    </div>
                  </div>

                  {/* Visual Maps ID column */}
                  <div className="lg:col-span-7 border border-neutral-200/60 overflow-hidden bg-neutral-100 rounded-sm aspect-[4/3] md:aspect-auto flex flex-col justify-between p-6 relative">
                    <div className="absolute inset-0 z-0 opacity-15">
                      <div className="w-full h-full bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>
                    
                    <div className="relative z-10 space-y-4">
                      <div className="inline-flex items-center space-x-1 bg-red-50 text-red-700 px-2 rounded-full text-[10px] font-semibold uppercase font-mono">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Google Maps ID Active</span>
                      </div>
                      <h3 className="font-serif text-2xl text-neutral-900">
                        Visit via Maps Link
                      </h3>
                      <p className="text-xs text-neutral-500 font-sans max-w-md leading-relaxed">
                        The Skin Health Clinic sits directly opposite the beautiful Sanjay Van park, H2 Block in Kidwai Nagar. This placement provides a peaceful background view during skincare operations.
                      </p>
                    </div>

                    <div className="relative z-10 space-y-4 pt-12">
                      <div className="bg-white border border-neutral-200/50 p-4 rounded-xs md:max-w-sm shadow-xs space-y-2">
                        <span className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase block">
                          VERIFIED ROUTE
                        </span>
                        <p className="text-[11px] text-neutral-600 font-sans leading-relaxed">
                          Clicking below resolves the full location coordinates directly inside your device's native GPS mapper app.
                        </p>
                      </div>

                      <a
                        href="https://maps.app.goo.gl/pmygFuke5Whmjm4W6"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-2 bg-neutral-900 hover:bg-[#C5A880] text-white text-[11px] font-semibold uppercase tracking-widest px-6 py-4.5 transition-colors rounded-xs shadow-xs"
                      >
                        <span>OPEN IN GOOGLE MAPS</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setActiveTab} />
    </div>
  );
}
