import { MapPin, Phone, Mail, Clock, ShieldAlert, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-neutral-300 font-sans border-t border-neutral-800" id="applet-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand description column */}
          <div className="md:col-span-1.5 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Sparkles className="w-5 h-5 text-[#C5A880]" />
              <span className="font-serif font-semibold text-lg tracking-tight">The Skin Health Clinic</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-sm">
              An international-standard dermatology and aesthetic medicine studio dedicated to clinical accuracy, clean architecture, and healthy skin transformations. Under the supervision of Dr. Puja Kumari Gupta, MD.
            </p>
            <div className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase flex items-center space-x-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Board Certified Dermatologist</span>
            </div>
          </div>

          {/* Location details */}
          <div className="space-y-3 col-span-1">
            <h5 className="text-white text-xs font-semibold uppercase tracking-wider">The Clinic Location</h5>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/pmygFuke5Whmjm4W6" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  128/443, Kabeer Kuti Apartment,<br />
                  Main Road, Opposite Sanjay Van,<br />
                  H2 Block, Kidwai Nagar, Kanpur,<br />
                  Uttar Pradesh 208011
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 col-span-1">
            <h5 className="text-white text-xs font-semibold uppercase tracking-wider">Inquiries & Desk</h5>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="hover:text-white transition-colors">+91 9935 222 344</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="hover:text-white transition-colors">care@skinhealthclinic.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  Monday – Saturday<br />
                  10:00 AM – 7:00 PM <br />
                  <span className="text-[10px] text-neutral-500">Sunday by appointment only</span>
                </span>
              </div>
            </div>
          </div>

          {/* Secondary links */}
          <div className="space-y-3 col-span-1">
            <h5 className="text-white text-xs font-semibold uppercase tracking-wider">Quick Indexes</h5>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => onNavigate('index')} className="hover:text-white transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('biography')} className="hover:text-white transition-colors">
                  Academic Timeline
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('works')} className="hover:text-white transition-colors">
                  Before-After Cases Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-white transition-colors">
                  Google Maps Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Request Clinical Booking
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Line */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500">
          <p>© {currentYear} The Skin Health Clinic. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a 
              href="https://maps.app.goo.gl/pmygFuke5Whmjm4W6" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#C5A880] transition-colors"
            >
              Verify on Google Maps
            </a>
            <span className="text-neutral-700">|</span>
            <span>MCI Registered Practitioner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
