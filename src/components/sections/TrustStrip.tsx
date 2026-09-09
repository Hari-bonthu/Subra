import React from 'react';
import { ShieldCheck, Sparkles, Clock, Check } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../../data/siteData';

export const TrustStrip: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
      default:
        return <Check className="w-5 h-5 text-[#16C2B0] stroke-[2]" />;
    }
  };

  return (
    <section className="bg-white border-y border-[#E2E8F0] py-8 sm:py-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 ${
                idx > 0 ? 'pt-6 md:pt-0 md:pl-8 lg:pl-10' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-[6px] bg-[#ECFDF9] border border-[#D6F8F2] flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="font-display text-[17px] sm:text-[18px] font-bold text-[#17212B] tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[13.5px] text-[#64748B] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
