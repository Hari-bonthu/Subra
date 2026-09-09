import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Clock,
  ClipboardCheck,
  Layers,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PROCESS_STEPS } from '../data/siteData';

interface ProcessPageProps {
  onOpenBooking: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-[840px]">
          <h1 className="font-display font-extrabold text-[36px] sm:text-[46px] lg:text-[52px] text-[#17212B] leading-[1.08] tracking-[-0.03em]">
            Our Clinical Cleaning Process
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#64748B] leading-[1.6] mt-4">
            A transparent, 3-step scientific workflow backed by a 42-point supervisor checklist and hospital-grade eco sanitization.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[13.5px] text-[#17212B] font-medium">
            <div className="flex items-center gap-2 bg-[#ECFDF9] text-[#078F82] px-3.5 py-1.5 rounded-full border border-[#D6F8F2]">
              <Sparkles className="w-4 h-4 text-[#16C2B0]" />
              <span>Hospital-Grade Eco Sanitizers</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F1F5F4] text-[#17212B] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
              <ClipboardCheck className="w-4 h-4 text-[#16C2B0]" />
              <span>42-Point Supervisor Sign-Off</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F1F5F4] text-[#17212B] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
              <ShieldCheck className="w-4 h-4 text-[#16C2B0]" />
              <span>100% Free 24h Re-Clean Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Sequence Walkthrough */}
      <section className="py-16 sm:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <h2 className="font-display font-extrabold text-[30px] sm:text-[36px] text-[#17212B] tracking-tight">
            From Booking to Showroom Sparkle
          </h2>
          <p className="font-sans text-[15px] text-[#64748B] mt-2">
            No confusion, no unexpected arrival surcharges. Here is how your appointment unfolds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-8 rounded-[8px] bg-white border border-[#E2E8F0] relative hover:shadow-[0_8px_30px_rgba(23,33,43,0.06)] transition-all"
            >
              <div className="w-12 h-12 rounded-[8px] bg-[#16C2B0] text-white flex items-center justify-center font-display font-extrabold text-[20px] mb-6">
                {step.step}
              </div>

              <h3 className="font-display font-bold text-[20px] text-[#17212B] mb-2">
                {step.title}
              </h3>

              <p className="font-sans text-[14px] text-[#64748B] leading-[1.65] mb-4">
                {step.description}
              </p>

              <div className="pt-4 border-t border-[#F1F5F4] text-[13px] text-[#17212B] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16C2B0] shrink-0" />
                <span>{step.details}</span>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#ECFDF9] text-[#16C2B0] border border-[#D6F8F2] flex items-center justify-center shadow-xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* The 42-Point Supervisor Checklist */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[740px] mb-12">
            <h2 className="font-display font-extrabold text-[30px] sm:text-[36px] text-[#17212B] tracking-tight leading-[1.15]">
              The 42-Point Supervisor Quality Checklist
            </h2>
            <p className="font-sans text-[15px] text-[#64748B] mt-3 leading-[1.6]">
              Before our crew packs up equipment, our on-site lead supervisor walks every zone with a digital checklist to verify clinical hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phase 1 */}
            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-[#16C2B0] font-bold text-[13px] uppercase mb-2">
                <Layers className="w-4 h-4" />
                <span>Phase 1</span>
              </div>
              <h4 className="font-display font-bold text-[17px] text-[#17212B] mb-3">Pre-Clean Audit</h4>
              <ul className="space-y-2 text-[13px] text-[#64748B]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Floor & furniture condition inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Tile spot-testing for safe chemical pH</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Shoe cover and protective gear deployment</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-[#16C2B0] font-bold text-[13px] uppercase mb-2">
                <Layers className="w-4 h-4" />
                <span>Phase 2</span>
              </div>
              <h4 className="font-display font-bold text-[17px] text-[#17212B] mb-3">High-Level Detailing</h4>
              <ul className="space-y-2 text-[13px] text-[#64748B]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Ceiling corners cobweb extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Ceiling fans, chandeliers & light fixtures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>AC filters, exterior vents & window tracks</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-[#16C2B0] font-bold text-[13px] uppercase mb-2">
                <Layers className="w-4 h-4" />
                <span>Phase 3</span>
              </div>
              <h4 className="font-display font-bold text-[17px] text-[#17212B] mb-3">Intensive Scrubbing</h4>
              <ul className="space-y-2 text-[13px] text-[#64748B]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Ceramic tile acid-safe limescale descaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Kitchen chimney exterior & stove degrease</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>High-pressure steam sanitization in drains</span>
                </li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-[#16C2B0] font-bold text-[13px] uppercase mb-2">
                <Layers className="w-4 h-4" />
                <span>Phase 4</span>
              </div>
              <h4 className="font-display font-bold text-[17px] text-[#17212B] mb-3">Joint Sign-Off</h4>
              <ul className="space-y-2 text-[13px] text-[#64748B]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Marble & vitrified tile damp microfiber polish</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Mirror buffing with zero chemical haze</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0] shrink-0 mt-1" />
                  <span>Joint walkthrough & 24h guarantee stamp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="py-14 bg-[#17212B] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#16C2B0] mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-[13px] font-semibold">24-Hour Peace of Mind</span>
            </div>
            <h3 className="font-display font-bold text-[24px] sm:text-[28px] text-white">
              Every appointment is covered by our 100% Free Re-Clean Promise.
            </h3>
            <p className="font-sans text-[14px] text-[#94A3B8] mt-1">
              If any agreed item doesn't meet clinical standard, we return within 24 hours at zero cost.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={onOpenBooking}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book With Guarantee
          </Button>
        </div>
      </section>
    </div>
  );
};
