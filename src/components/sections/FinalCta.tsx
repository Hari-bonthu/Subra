import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';


interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#17212B] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t border-[#27313C]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#16C2B0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#078F82]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[780px] mx-auto text-center">
          
          {/* Headline */}
          <h2 className="font-display font-extrabold text-[36px] sm:text-[48px] lg:text-[54px] text-white leading-[1.04] tracking-[-0.03em]">
            Ready for a cleaner space?
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-[16px] sm:text-[18px] text-[#94A3B8] leading-[1.65] mt-4 max-w-[580px] mx-auto">
            Book a trusted, police-verified professional in just a few clicks or schedule an on-site facility consultation for your enterprise.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBooking}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto px-8"
            >
              Book a Cleaning
            </Button>

            <a
              href="tel:+918842345678"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                icon={<Phone className="w-4 h-4 text-[#16C2B0]" />}
                iconPosition="left"
                className="w-full sm:w-auto bg-transparent border-white/25 text-white hover:bg-white/10 hover:border-white"
              >
                Call +91 884 234 5678
              </Button>
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10 text-[13px] text-[#94A3B8]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16C2B0]" />
              <span>Available 7 Days a Week</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16C2B0]" />
              <span>Fixed Transparent Rates</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16C2B0]" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
