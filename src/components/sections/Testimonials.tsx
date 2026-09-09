import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';


export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[46px] text-[#17212B] leading-[1.08] tracking-[-0.02em]">
            Real feedback from verified clients.
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] text-[#64748B] leading-[1.6] mt-3">
            Direct impressions from homeowners and workspace managers across Kakinada and Rajahmundry.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-[8px] p-6 sm:p-7 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(23,33,43,0.04)] hover:shadow-[0_10px_30px_rgba(23,33,43,0.07)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#16C2B0] mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#16C2B0] text-[#16C2B0]" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-[14.5px] text-[#17212B] leading-[1.65] italic">
                  “{test.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-[#F1F5F4] flex items-center gap-3.5">
                <img
                  src={test.avatar}
                  alt={test.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#E2E8F0]"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                      {test.author}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16C2B0]" />
                  </div>
                  <div className="font-sans text-[12px] text-[#64748B]">
                    {test.role} • {test.location}
                  </div>
                  <div className="text-[11px] font-medium text-[#078F82] mt-0.5">
                    {test.serviceType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
