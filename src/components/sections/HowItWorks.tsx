import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/siteData';
import { Button } from '../ui/Button';


interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-[#ECFDF9] border-t border-[#D6F8F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[46px] text-[#17212B] leading-[1.08] tracking-[-0.02em]">
            Our 3-Step Cleaning Process
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] text-[#64748B] leading-[1.6] mt-3">
            Book in less than 60 seconds. We arrive prepared with industrial machinery and handle every detail from start to finish.
          </p>
        </div>

        {/* 3-Step Process Layout with Thin Connector Lines */}
        <div className="relative">
          {/* Horizontal connecting hairline rule on desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-[#CBD5E1] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-[8px] p-6 sm:p-7 border border-[#D6F8F2] shadow-[0_4px_20px_rgba(23,33,43,0.04)] hover:shadow-[0_8px_30px_rgba(23,33,43,0.08)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Step Pill with signature Teal Dot */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-extrabold text-[32px] sm:text-[36px] text-[#16C2B0] tracking-tight leading-none">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#ECFDF9] text-[#078F82] border border-[#D6F8F2] flex items-center justify-center font-bold text-[12px]">
                      {idx === 0 ? '1' : idx === 1 ? '2' : '3'}
                    </div>
                  </div>

                  <h3 className="font-display text-[20px] sm:text-[22px] font-bold text-[#17212B] tracking-tight">
                    {step.title}
                  </h3>

                  <p className="font-sans text-[14px] text-[#64748B] leading-[1.65] mt-2.5">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F1F5F4] text-[12.5px] text-[#078F82] font-sans font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16C2B0] shrink-0" />
                  <span>{step.details}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenBooking}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Your Booking Now
          </Button>
        </div>

      </div>
    </section>
  );
};
