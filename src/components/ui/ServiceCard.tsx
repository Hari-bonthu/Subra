import React from 'react';
import { ArrowRight, Clock, Check } from 'lucide-react';
import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  onBook: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  onBook,
}) => {

  return (
    <div
      className="group relative flex flex-col rounded-[8px] bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(23,33,43,0.04)] hover:shadow-[0_12px_36px_rgba(23,33,43,0.09)] transition-all duration-300 hover:translate-y-[-4px] overflow-hidden cursor-pointer"
      onClick={() => onSelect(service)}
    >
      {/* Upper Photography Block (4:3 aspect ratio) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F1F5F4]">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {/* Subtle daylight gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17212B]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Top Floating Tag */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-[4px] text-[11px] font-semibold font-sans tracking-wide uppercase bg-white/95 text-[#078F82] shadow-sm backdrop-blur-xs border border-white/40">
            {service.tag}
          </span>
        </div>

        {/* Price Pill */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-[4px] text-[12px] font-bold font-display bg-[#17212B]/85 text-white backdrop-blur-xs border border-white/10">
            {service.startingPrice}
          </span>
        </div>
      </div>

      {/* Overlapping White Information Panel */}
      <div className="relative -mt-6 mx-3.5 mb-3.5 rounded-[6px] bg-white p-5 border border-[#E2E8F0] shadow-[0_8px_30px_rgba(23,33,43,0.06)] transition-transform duration-300 group-hover:translate-y-[-2px] flex-1 flex flex-col justify-between">
        <div>
          {/* Heading */}
          <h3 className="font-display text-[20px] sm:text-[22px] font-bold text-[#17212B] tracking-tight group-hover:text-[#078F82] transition-colors duration-200">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#64748B] leading-relaxed mt-2 line-clamp-2">
            {service.description}
          </p>

          {/* Micro Features */}
          <div className="mt-3.5 pt-3 border-t border-[#F1F5F4] space-y-1.5">
            {service.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center text-[12px] text-[#64748B] font-sans">
                <Check className="w-3.5 h-3.5 text-[#16C2B0] mr-2 shrink-0 stroke-[2.5]" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-4 pt-3 border-t border-[#F1F5F4] flex items-center justify-between">
          <div className="flex items-center text-[12px] text-[#94A3B8]">
            <Clock className="w-3.5 h-3.5 mr-1 text-[#64748B]" />
            <span>{service.duration}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#16C2B0] group-hover:text-[#078F82] transition-colors duration-200 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(service);
              }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              className="px-2.5 py-1 text-[12px] font-semibold rounded-[4px] bg-[#ECFDF9] text-[#078F82] hover:bg-[#16C2B0] hover:text-white transition-colors duration-150 cursor-pointer border border-[#D6F8F2]"
              onClick={(e) => {
                e.stopPropagation();
                onBook(service);
              }}
            >
              Book
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
