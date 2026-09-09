import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { AboutSection } from '../components/sections/AboutSection';
import { TealStorySection } from '../components/sections/TealStorySection';
import { HowItWorks } from '../components/sections/HowItWorks';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { FinalCta } from '../components/sections/FinalCta';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Button } from '../components/ui/Button';
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '../data/siteData';
import type { ServiceItem } from '../types';

interface HomePageProps {
  onOpenBooking: (service?: ServiceItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  const featuredResidential = RESIDENTIAL_SERVICES.slice(0, 3);
  const featuredCommercial = COMMERCIAL_SERVICES.slice(0, 3);

  return (
    <div>
      {/* 01 Hero Section */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* 02 Trust / Value Strip */}
      <TrustStrip />

      {/* 03 About Subra Story */}
      <AboutSection onOpenBooking={() => onOpenBooking()} />

      {/* 04 Featured Services Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[44px] text-[#17212B] leading-[1.08] tracking-[-0.02em]">
                Featured Cleaning Services
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#64748B] leading-[1.6] mt-3 max-w-[580px]">
                Hospital-grade sanitization and precision maintenance tailored for residences and corporate workspaces across East Godavari.
              </p>
            </div>

            <Link to="/services" className="shrink-0">
              <Button
                variant="outline-teal"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View All 12 Services
              </Button>
            </Link>
          </div>

          {/* 3 Residential + 3 Commercial Grid Preview */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#F1F5F4]">
                <h3 className="font-display font-bold text-[20px] text-[#17212B]">
                  For Homes & Apartments
                </h3>
                <Link
                  to="/residential"
                  className="text-[13px] font-semibold text-[#16C2B0] hover:text-[#078F82] flex items-center gap-1"
                >
                  <span>Explore Residential</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {featuredResidential.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onSelect={onSelectService}
                    onBook={(srv) => onOpenBooking(srv)}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#F1F5F4]">
                <h3 className="font-display font-bold text-[20px] text-[#17212B]">
                  For Offices & Workplaces
                </h3>
                <Link
                  to="/commercial"
                  className="text-[13px] font-semibold text-[#16C2B0] hover:text-[#078F82] flex items-center gap-1"
                >
                  <span>Explore Commercial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {featuredCommercial.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onSelect={onSelectService}
                    onBook={(srv) => onOpenBooking(srv)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Signature Teal Break */}
      <TealStorySection onOpenBooking={() => onOpenBooking()} />

      {/* 06 3-Step Process */}
      <HowItWorks onOpenBooking={() => onOpenBooking()} />

      {/* 07 Why Choose Us */}
      <WhyChooseUs />

      {/* 08 Testimonials */}
      <Testimonials />

      {/* 09 Final Dark CTA */}
      <FinalCta onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
