import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Receipt,
  CheckCircle2,
  CalendarSync,
  Users,
  Check,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../../data/siteData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      case 'Receipt':
        return <Receipt className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      case 'CalendarSync':
        return <CalendarSync className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      default:
        return <Check className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[700px] mb-14">
          <h2 className="font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[46px] text-[#17212B] leading-[1.08] tracking-[-0.02em]">
            Why leading homes & businesses choose Subra.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#64748B] leading-[1.6] mt-3">
            Built on transparency, certified training, and rigorous accountability. No shortcuts, no compromises.
          </p>
        </div>

        {/* Minimal 6-item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-[#ECFDF9] border border-[#D6F8F2] flex items-center justify-center shrink-0 mt-0.5">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="font-display text-[17px] sm:text-[18px] font-bold text-[#17212B] tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[14px] text-[#64748B] leading-[1.6] mt-1.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner Bar */}
        <div className="mt-14 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] border border-[#D6F8F2] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-display text-[17px] font-bold text-[#17212B]">
                Covered by Comprehensive Insurance
              </h4>
              <p className="font-sans text-[13.5px] text-[#64748B] mt-0.5">
                Up to ₹5,00,000 protection against accidental property damage during any service.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#078F82] bg-[#ECFDF9] px-3.5 py-1.5 rounded-[4px] border border-[#D6F8F2]">
              100% Insured Operations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
