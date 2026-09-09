import React from 'react';
import { X, Check, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../../types';
import { Button } from '../ui/Button';


interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onBook,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17212B]/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-[8px] shadow-[0_24px_60px_rgba(23,33,43,0.2)] border border-[#E2E8F0] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Banner Image */}
        <div className="relative aspect-[16/9] w-full bg-[#F1F5F4] overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17212B]/75 via-transparent to-black/20" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-xs"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and tags over image */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold uppercase tracking-wider bg-[#16C2B0] text-white">
              {service.subtitle}
            </span>
            <h3 className="font-display text-[24px] sm:text-[28px] font-extrabold text-white mt-1 leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Details Body */}
        <div className="p-6">
          <p className="font-sans text-[15px] text-[#64748B] leading-relaxed">
            {service.description}
          </p>

          {/* Key Specs */}
          <div className="grid grid-cols-2 gap-3 my-5 p-3.5 bg-[#F8FAFC] rounded-[6px] border border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-[13px]">
              <Clock className="w-4 h-4 text-[#16C2B0]" />
              <span className="text-[#64748B]">Duration:</span>
              <span className="font-semibold text-[#17212B]">{service.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-[13px]">
              <ShieldCheck className="w-4 h-4 text-[#16C2B0]" />
              <span className="text-[#64748B]">Pricing:</span>
              <span className="font-bold text-[#078F82]">From {service.startingPrice}</span>
            </div>
          </div>

          {/* Detailed Inclusions Checklist */}
          <div>
            <h4 className="font-display font-bold text-[15px] text-[#17212B] uppercase tracking-wide mb-2.5">
              Protocol Inclusions:
            </h4>
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-[14px] text-[#17212B]">
                  <div className="w-4 h-4 rounded-full bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 mt-0.5 border border-[#D6F8F2]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="mt-7 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
            <Button
              variant="secondary"
              size="md"
              onClick={onClose}
            >
              Close
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={() => {
                onClose();
                onBook(service);
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book This Service ({service.startingPrice})
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
