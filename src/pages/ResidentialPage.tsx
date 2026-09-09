import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Button } from '../components/ui/Button';
import { RESIDENTIAL_SERVICES, FAQ_ITEMS } from '../data/siteData';
import type { ServiceItem } from '../types';

interface ResidentialPageProps {
  onOpenBooking: (service?: ServiceItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ResidentialPage: React.FC<ResidentialPageProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-[840px]">
          <h1 className="font-display font-extrabold text-[36px] sm:text-[46px] lg:text-[52px] text-[#17212B] leading-[1.08] tracking-[-0.03em]">
            Residential Cleaning Services
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#64748B] leading-[1.6] mt-4">
            Hospital-grade hygiene for flats, villas, and family homes in East Godavari. Every appointment is founder-supervised using pet-safe, non-toxic bio-compounds.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[13.5px] text-[#17212B] font-medium">
            <div className="flex items-center gap-2 bg-[#ECFDF9] text-[#078F82] px-3.5 py-1.5 rounded-full border border-[#D6F8F2]">
              <Sparkles className="w-4 h-4 text-[#16C2B0]" />
              <span>Pet & Child Safe Formulations</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F1F5F4] text-[#17212B] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
              <ShieldCheck className="w-4 h-4 text-[#16C2B0]" />
              <span>Founder Direct Supervision</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F1F5F4] text-[#17212B] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
              <Heart className="w-4 h-4 text-[#16C2B0]" />
              <span>100% Free 24h Re-Clean Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Residential Service Cards Grid */}
      <section className="py-14 sm:py-18 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display font-extrabold text-[28px] sm:text-[34px] text-[#17212B] tracking-tight">
              Home Care Specializations
            </h2>
            <p className="font-sans text-[15px] text-[#64748B] mt-1">
              Select an individual room focus or book a complete apartment deep sanitization.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenBooking()}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book Home Cleaning
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RESIDENTIAL_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
              onBook={(srv) => onOpenBooking(srv)}
            />
          ))}
        </div>
      </section>

      {/* Room-by-Room Clinical Protocols */}
      <section className="py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="font-display font-extrabold text-[30px] sm:text-[36px] text-[#17212B] tracking-tight">
              Our Room-by-Room Protocol
            </h2>
            <p className="font-sans text-[15px] text-[#64748B] mt-2">
              We never guess or take shortcuts. Every technician follows strict color-coded microfiber routines and clinical steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Living & Bedrooms */}
            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center font-display font-bold text-[18px] mb-4">
                01
              </div>
              <h3 className="font-display font-bold text-[18px] text-[#17212B] mb-2">
                Living Areas & Bedrooms
              </h3>
              <p className="font-sans text-[13.5px] text-[#64748B] leading-[1.6] mb-4">
                Eliminating airborne allergens, dust mites, and accumulated grime from upholstery and floors.
              </p>
              <ul className="space-y-2 text-[13px] text-[#17212B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>HEPA vacuuming on mattresses & sofa creases</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Ceiling fan, AC louver & light fixture wiping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Behind & under beds and heavy wardrobe clearing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Anti-static polish for wooden frames & TV consoles</span>
                </li>
              </ul>
            </div>

            {/* Kitchen Hygiene */}
            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center font-display font-bold text-[18px] mb-4">
                02
              </div>
              <h3 className="font-display font-bold text-[18px] text-[#17212B] mb-2">
                Kitchen & Food Prep Zone
              </h3>
              <p className="font-sans text-[13.5px] text-[#64748B] leading-[1.6] mb-4">
                Targeting stubborn grease, oil films, and food-borne bacterial growth with safe enzyme degreasers.
              </p>
              <ul className="space-y-2 text-[13px] text-[#17212B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Chimney baffle filter & exterior degreasing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Gas stove burner, knob & backsplash scrub</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Microwave, fridge exterior & cabinet wipe-down</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Sink sanitization & non-toxic drain flushing</span>
                </li>
              </ul>
            </div>

            {/* Bathrooms & Tiles */}
            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center font-display font-bold text-[18px] mb-4">
                03
              </div>
              <h3 className="font-display font-bold text-[18px] text-[#17212B] mb-2">
                Bathrooms & Sanitations
              </h3>
              <p className="font-sans text-[13.5px] text-[#64748B] leading-[1.6] mb-4">
                Dissolving hard water deposits, soap scum, and tile mold without damaging expensive chrome fittings.
              </p>
              <ul className="space-y-2 text-[13px] text-[#17212B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Ceramic wall-to-floor acid-safe rotary descaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Glass shower enclosure hard-water buffing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Toilet bowl clinical sterilization & rim descaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>Towel rack, mirror & faucet chrome brightening</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Residential FAQs */}
      <section className="py-14 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-[28px] sm:text-[32px] text-[#17212B]">
            Residential Cleaning FAQs
          </h2>
          <p className="font-sans text-[15px] text-[#64748B] mt-1">
            Common questions from homeowners across Kakinada and Rajahmundry.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-[8px] bg-white border border-[#E2E8F0]"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#16C2B0] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-[16px] text-[#17212B]">
                    {item.q}
                  </h3>
                  <p className="font-sans text-[14px] text-[#64748B] mt-1.5 leading-[1.6]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-14 bg-[#17212B] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-[24px] sm:text-[28px] text-white">
              Ready to restore your home to showroom freshness?
            </h3>
            <p className="font-sans text-[14px] text-[#94A3B8] mt-1">
              Transparent pricing starts at just ₹699. Free rescheduling up to 2 hours before arrival.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenBooking()}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Calculate Your Price
          </Button>
        </div>
      </section>
    </div>
  );
};
