import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { StatCard } from '../ui/StatCard';



interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Large Cleaning Photography with Overlapping Experience Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[8px] overflow-hidden border border-[#E2E8F0] shadow-[0_8px_30px_rgba(23,33,43,0.06)] bg-white aspect-[4/3] sm:aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Subra verified cleaner performing precision sanitization"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17212B]/40 via-transparent to-transparent opacity-70" />
            </div>

            {/* Overlapping Experience Stat Card */}
            <div className="absolute -bottom-6 right-2 sm:-bottom-8 sm:right-6 z-10 max-w-[260px]">
              <StatCard
                icon={<Award className="w-5 h-5 text-[#16C2B0]" />}
                value="100%"
                label="Founder Supervised"
                sublabel="Every checklist personally verified"
              />
            </div>

            {/* Subtle floating architectural tag */}
            <div className="hidden sm:block absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-[4px] border border-[#E2E8F0] text-[12px] font-semibold text-[#17212B]">
              Rigorous 42-Point Protocol
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center mt-6 lg:mt-0">
            <h2 className="font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[44px] text-[#17212B] leading-[1.08] tracking-[-0.02em]">
              Cleaning made simple. <br />
              <span className="text-[#078F82]">Quality you can trust.</span>
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#64748B] leading-[1.65] mt-4 max-w-[580px]">
              Subra was founded to bring clinical-level hygiene to coastal Andhra Pradesh. Unlike unorganized domestic maids or rigid agencies, we treat every single home and office with personal founder accountability, using hospital-grade, pet-safe eco compounds.
            </p>

            {/* Structured Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-[#E2E8F0]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 mt-0.5 border border-[#D6F8F2]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display text-[15px] font-bold text-[#17212B]">Verified Professionals</h4>
                  <p className="font-sans text-[13px] text-[#64748B] mt-0.5">Vetted, insured & supervisor-led teams</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 mt-0.5 border border-[#D6F8F2]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display text-[15px] font-bold text-[#17212B]">Upfront Custom Quotes</h4>
                  <p className="font-sans text-[13px] text-[#64748B] mt-0.5">Requirement-based rates with zero hidden surcharges</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 mt-0.5 border border-[#D6F8F2]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display text-[15px] font-bold text-[#17212B]">Flexible Scheduling</h4>
                  <p className="font-sans text-[13px] text-[#64748B] mt-0.5">Slot changes up to 2 hours prior</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 mt-0.5 border border-[#D6F8F2]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display text-[15px] font-bold text-[#17212B]">Residential & Commercial</h4>
                  <p className="font-sans text-[13px] text-[#64748B] mt-0.5">From studio apartments to IT tech parks</p>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="mt-8 flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenBooking}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book a Cleaning
              </Button>
              <Link
                to="/process"
                className="text-[14px] font-semibold text-[#17212B] hover:text-[#16C2B0] transition-colors flex items-center gap-1.5"
              >
                <span>View Our Standards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
