import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';


interface TealStorySectionProps {
  onOpenBooking: () => void;
}

export const TealStorySection: React.FC<TealStorySectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#16C2B0] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#078F82]/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Media: Large Room/Cleaning Image (~45-50% width) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-[8px] overflow-hidden shadow-[0_20px_60px_rgba(7,143,130,0.35)] border border-white/20 aspect-[4/3] sm:aspect-[16/11] bg-white/10">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1100&q=85"
                alt="Subra specialist polishing glass and architectural details"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#078F82]/60 via-transparent to-transparent" />
              
              {/* Floating inner badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md rounded-[6px] p-4 text-[#17212B] border border-white/40 shadow-lg flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[4px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 border border-[#D6F8F2]">
                  <Sparkles className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="font-display font-bold text-[15px] leading-tight">
                    Microfiber & HEPA Extraction
                  </div>
                  <div className="font-sans text-[12px] text-[#64748B] mt-0.5">
                    Zero cross-contamination protocol
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative: Why Subra */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <h2 className="font-display font-extrabold text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.03em] text-white">
              We make your space shine.
            </h2>

            <p className="font-sans text-[16px] sm:text-[17px] text-white/90 leading-[1.65] mt-4 max-w-[520px]">
              Every cleaning is an architectural reset. We don’t just wipe away surface dust — we restore the natural vitality of stone, wood, glass, and upholstery with clinical precision.
            </p>

            {/* Checklist with pure white checks */}
            <div className="mt-6 pt-6 border-t border-white/20 space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white text-[#16C2B0] flex items-center justify-center shrink-0 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-sans text-[15px] sm:text-[16px] font-medium text-white">
                  Trusted, background-verified professionals
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white text-[#16C2B0] flex items-center justify-center shrink-0 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-sans text-[15px] sm:text-[16px] font-medium text-white">
                  Hospital-grade, eco-certified bio sanitizers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white text-[#16C2B0] flex items-center justify-center shrink-0 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-sans text-[15px] sm:text-[16px] font-medium text-white">
                  Flexible on-demand scheduling & instant WhatsApp support
                </span>
              </div>
            </div>

            {/* Action CTA with high contrast */}
            <div className="mt-8 pt-2">
              <Button
                variant="dark"
                size="lg"
                onClick={onOpenBooking}
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-[#17212B] hover:bg-[#0B1115] text-white shadow-xl px-8"
              >
                Get a Free Quote
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
