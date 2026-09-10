import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { StatCard } from '../ui/StatCard';
import { trackConversion } from '../../utils/analytics';



interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-6 pb-12 sm:pb-16 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 12-column Asymmetric Layout (7 columns media + 5 columns content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Dominant Media Presentation (7 columns on desktop) */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative rounded-[8px] overflow-hidden bg-[#F1F5F4] border border-[#E2E8F0] shadow-[0_8px_30px_rgba(23,33,43,0.06)] aspect-[4/3] sm:aspect-[16/11] w-full">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Pristine, bright modern living room with natural sunlight after clinical cleaning"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Natural subtle daylight overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#17212B]/35 via-transparent to-white/10" />

              {/* Floating verified badge in top left */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/95 backdrop-blur-xs text-[#078F82] border border-white/60 shadow-[0_4px_20px_rgba(23,33,43,0.08)]">
                  <ShieldCheck className="w-4 h-4 text-[#16C2B0]" />
                  <span className="font-sans text-[12px] font-bold tracking-wide">
                    ISO-9001 HYGIENE STANDARD
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Stat Badge (Desktop / Tablet) */}
            <div className="absolute -bottom-6 right-2 sm:-bottom-7 sm:right-6 z-20 max-w-[270px]">
              <StatCard
                icon={<Star className="w-5 h-5 fill-[#16C2B0] text-[#16C2B0]" />}
                value="100%"
                label="Satisfaction Guaranteed"
                sublabel="Free 24h re-clean if not pristine"
                className="border-[#16C2B0]/30"
              />
            </div>

            {/* Second floating mini-card */}
            <div className="hidden sm:flex absolute -bottom-5 left-6 z-20 bg-white/95 backdrop-blur-xs rounded-[6px] px-3.5 py-2.5 border border-[#E2E8F0] shadow-[0_8px_30px_rgba(23,33,43,0.08)] items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="font-sans text-[12px] font-semibold text-[#17212B]">
                Founder-Supervised Service
              </span>
            </div>
          </div>

          {/* Right Content Panel (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[60px] text-[#17212B] leading-[1.02] tracking-[-0.03em]">
              A cleaner space. <br />
              <span className="text-[#078F82]">A better everyday.</span>
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-[16px] sm:text-[17px] text-[#64748B] leading-[1.65] mt-4 sm:mt-5 max-w-[540px]">
              Subra House Service delivers comprehensive home care across East Godavari — Shift, Clean, Renovate, and Maintain. Every visit is personally audited with hospital-grade eco care.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-2 gap-2.5 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#17212B]">
                <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#17212B]">
                <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                <span>Hospital-Grade Eco Care</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#17212B]">
                <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                <span>Police-Verified Cleaners</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#17212B]">
                <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                <span>Instant Slot Confirmation</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-7 sm:mt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  trackConversion('booking_modal_open', { source: 'hero_primary_cta' });
                  onOpenBooking();
                }}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Book a Cleaning
              </Button>
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Micro rating indicator */}
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[#F1F5F4]">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer"
                />
                <img
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer"
                />
                <img
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer"
                />
              </div>
              <div className="text-[12px] text-[#64748B] font-sans">
                <span className="font-bold text-[#17212B]">5.0 / 5.0 Cleanliness Score</span> from delighted local clients
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
