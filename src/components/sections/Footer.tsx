import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1115] text-[#94A3B8] pt-16 pb-12 border-t border-[#27313C]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-white p-1 shadow-xs flex items-center justify-center">
                <picture>
                  <source srcSet={`${import.meta.env.BASE_URL}logo-sm.webp`} type="image/webp" />
                  <img
                    src={`${import.meta.env.BASE_URL}logo-sm.png`}
                    alt="SUBRA House Service"
                    width={40}
                    height={38}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div>
                <span className="font-display font-extrabold text-[22px] tracking-tight text-white leading-none">
                  SUBRA
                </span>
                <span className="block font-sans text-[10px] font-bold tracking-[0.14em] uppercase text-[#3C881B] mt-0.5">
                  HOUSE SERVICE
                </span>
                <span className="block font-sans text-[9px] font-medium tracking-[0.08em] uppercase text-[#94A3B8] mt-0.5">
                  Shift • Clean • Renovate • Maintain
                </span>
              </div>
            </Link>

            <p className="font-sans text-[14.5px] text-[#94A3B8] leading-[1.65] mt-4 max-w-[380px]">
              Shift. Clean. Renovate. Maintain. Clinical-grade hygiene standards and comprehensive house care across coastal Andhra Pradesh.
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-2.5 text-[13.5px]">
              <div className="flex items-center gap-2.5 text-white/90">
                <MapPin className="w-4 h-4 text-[#16C2B0] shrink-0" />
                <span>Kakinada, Rajahmundry & East Godavari District</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <Phone className="w-4 h-4 text-[#16C2B0] shrink-0" />
                <a href="tel:+918842345678" className="hover:text-[#16C2B0] transition-colors">
                  +91 884 234 5678 (Toll Free Dispatch)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <Mail className="w-4 h-4 text-[#16C2B0] shrink-0" />
                <a href="mailto:care@subra.in" className="hover:text-[#16C2B0] transition-colors">
                  care@subra.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-[15px] uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[14px] font-sans">
              <li>
                <Link to="/residential" className="hover:text-[#16C2B0] transition-colors">
                  Residential Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/residential" className="hover:text-[#16C2B0] transition-colors">
                  Bathroom & Tile Descaling
                </Link>
              </li>
              <li>
                <Link to="/residential" className="hover:text-[#16C2B0] transition-colors">
                  Kitchen Degreasing
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-[#16C2B0] transition-colors">
                  Commercial Office Contracts
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-[#16C2B0] transition-colors">
                  Clinical Pathogen Disinfection
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-[#16C2B0] transition-colors">
                  Floor Buffing & Crystallization
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[15px] uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px] font-sans">
              <li>
                <Link to="/about" className="hover:text-[#16C2B0] transition-colors">
                  About Subra
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#16C2B0] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#16C2B0] transition-colors">
                  Verified Cleaners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#16C2B0] transition-colors">
                  Contact Dispatch
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#16C2B0] transition-colors">
                  All 12 Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Standards (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[15px] uppercase tracking-wider text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-[14px] font-sans">
              <li>
                <Link to="/process" className="hover:text-[#16C2B0] transition-colors">
                  Help Center & Guarantee
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#16C2B0] transition-colors">
                  Insurance & Safety
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#16C2B0] transition-colors">
                  Coverage Zones
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#16C2B0] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#16C2B0] transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] font-sans">
          <div className="text-[#64748B]">
            © 2026 Subra House Service. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#64748B]">
              Hospital-Grade Hygiene for Andhra Pradesh
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-[4px] bg-white/10 hover:bg-[#16C2B0] hover:text-white transition-colors flex items-center justify-center text-white"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
