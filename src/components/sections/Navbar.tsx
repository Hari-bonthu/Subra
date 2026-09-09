import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/siteData';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(23,33,43,0.05)] border-b border-[#E2E8F0]'
            : 'bg-white border-b border-[#E2E8F0]'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[74px] sm:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group select-none text-decoration-none"
            aria-label="Subra Homepage"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center p-1 transition-transform duration-200 group-hover:scale-105">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}logo-sm.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}logo-sm.png`}
                  alt="SUBRA House Service Logo"
                  width={40}
                  height={38}
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-[20px] sm:text-[22px] tracking-[-0.03em] text-[#003380] leading-none">
                SUBRA
              </span>
              <span className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#3C881B] mt-0.5">
                HOUSE SERVICE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-[14px] font-medium font-sans transition-colors duration-150 rounded-[4px] relative ${
                    isActive
                      ? 'text-[#16C2B0] font-semibold'
                      : 'text-[#17212B] hover:text-[#16C2B0]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#16C2B0] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918842345678"
              className="hidden xl:flex items-center gap-2 text-[13px] font-medium text-[#64748B] hover:text-[#17212B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#16C2B0]" />
              <span>+91 884 234 5678</span>
            </a>

            <Button
              variant="primary"
              size="md"
              onClick={onOpenBooking}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenBooking}
              className="text-[12px] h-8 px-3"
            >
              Get Quote
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[4px] text-[#17212B] hover:bg-[#F1F5F4] border border-[#E2E8F0] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#17212B]/50 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white p-6 shadow-2xl flex flex-col justify-between border-l border-[#E2E8F0]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0]">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-[6px] bg-white border border-[#E2E8F0] p-1 flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}logo-sm.webp`}
                      alt="SUBRA Logo"
                      width={32}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-extrabold text-[18px] text-[#003380] leading-none">
                      SUBRA
                    </span>
                    <span className="font-sans text-[9px] font-bold tracking-[0.12em] uppercase text-[#3C881B] mt-0.5">
                      HOUSE SERVICE
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-[4px] hover:bg-[#F1F5F4] text-[#64748B]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2.5 text-[15px] font-medium font-sans rounded-[4px] transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#ECFDF9] text-[#078F82] font-semibold'
                          : 'text-[#17212B] hover:bg-[#F8FAFC] hover:text-[#16C2B0]'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
              >
                Book a Cleaning
              </Button>
              <a
                href="tel:+918842345678"
                className="flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium text-[#64748B] hover:text-[#17212B]"
              >
                <Phone className="w-4 h-4 text-[#16C2B0]" />
                <span>+91 884 234 5678</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
