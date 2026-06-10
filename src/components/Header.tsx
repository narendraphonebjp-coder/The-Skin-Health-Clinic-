import { Sparkles, Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestConsultation: () => void;
}

export function Header({ activeTab, setActiveTab, onRequestConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'index', label: 'Index / Home' },
    { id: 'biography', label: 'Biography' },
    { id: 'works', label: 'Works' },
    { id: 'reviews', label: 'Reviews & Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-neutral-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div 
          className="flex items-center space-x-2 cursor-pointer group" 
          onClick={() => setActiveTab('index')}
          id="header-brand-logo"
        >
          <div className="w-8 h-8 rounded-full bg-[#C5A880]/10 flex items-center justify-center group-hover:bg-[#C5A880]/20 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-[#C5A880]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-lg tracking-tight text-neutral-900">
              The Skin Health Clinic
            </span>
            <span className="text-[9px] tracking-widest uppercase font-mono text-[#C5A880] -mt-1">
              Dr. Vaishnavi Sahu
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[11px] font-medium uppercase tracking-widest transition-all duration-300 relative py-2 ${
                activeTab === tab.id
                  ? 'text-neutral-900 font-semibold'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              {tab.label.split(' / ')[0]} {/* clean labels for navigation */}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onRequestConsultation}
            className="border border-[#C5A880] hover:bg-[#C5A880] text-[#C5A880] hover:text-white text-[11px] font-semibold uppercase tracking-widest px-5 py-2.5 transition-all duration-300 flex items-center space-x-2 rounded-xs"
            id="desktop-consultation-btn"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-600 hover:text-[#C5A880] p-1"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-neutral-200/60 animate-fade-in py-4 px-4 space-y-3" id="mobile-navigation-drawer">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 text-[12px] font-medium uppercase tracking-widest rounded-sm ${
                activeTab === tab.id
                  ? 'bg-[#C5A880]/10 text-neutral-900 border-l-2 border-[#C5A880]'
                  : 'text-neutral-500 hover:bg-neutral-100 text-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="pt-2 px-4">
            <button
              onClick={() => {
                onRequestConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#1C1917] hover:bg-[#C5A880] text-white text-[11px] font-semibold uppercase tracking-widest py-3 text-center transition-all duration-300 flex items-center justify-center space-x-2 rounded-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
