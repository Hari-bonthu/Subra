import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMMERCIAL_SERVICES } from '../../data/siteData';
import { ServiceCard } from '../ui/ServiceCard';
import type { ServiceItem } from '../../types';
import { Button } from '../ui/Button';


interface CommercialServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const CommercialServices: React.FC<CommercialServicesProps> = ({
  onSelectService,
  onBookService,
  onOpenBooking,
}) => {
  return (
    <section id="commercial" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-[680px]">
            <h2 className="font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[46px] text-[#17212B] leading-[1.08] tracking-[-0.02em]">
              Professional cleaning for better workplaces.
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#64748B] leading-[1.6] mt-3.5">
              Ensure health, regulatory compliance, and a flawless first impression for your corporate offices, retail spaces, educational campuses, and industrial sites.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="dark"
              size="md"
              onClick={onOpenBooking}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Enterprise RFP & Consultation
            </Button>
          </div>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COMMERCIAL_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
              onBook={onBookService}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
