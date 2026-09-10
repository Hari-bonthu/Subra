import React, { useState } from 'react';
import { ArrowRight, Search, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Button } from '../components/ui/Button';
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '../data/siteData';
import { usePageMeta } from '../hooks/usePageMeta';
import type { ServiceItem } from '../types';

interface ServicesPageProps {
  onOpenBooking: (service?: ServiceItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  usePageMeta({
    title: 'Professional House & Commercial Cleaning Services | SUBRA Rajahmundry',
    description:
      'Browse all 12 professional cleaning services offered by Subra across Rajahmundry, East Godavari & Kakinada. Standard, deep clean, shifting turnover, and office care.',
  });

  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allServices = [...RESIDENTIAL_SERVICES, ...COMMERCIAL_SERVICES];

  const filteredServices = allServices.filter((service) => {
    const matchesCategory = filter === 'all' || service.category === filter;
    const matchesQuery =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-extrabold text-[36px] sm:text-[46px] lg:text-[52px] text-[#17212B] leading-[1.08] tracking-[-0.03em]">
            Our Cleaning Services
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#64748B] leading-[1.6] mt-4">
            Transparent, clinical-standard cleaning tailored for homes and businesses in East Godavari. Every job is founder-supervised with brand-new hospital-grade machinery.
          </p>

          {/* Filter & Search Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[620px] mx-auto">
            {/* Category Tabs */}
            <div className="inline-flex p-1 bg-[#F1F5F4] rounded-[6px] border border-[#E2E8F0] w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`flex-1 sm:flex-none px-4 py-2 text-[13.5px] font-semibold rounded-[4px] transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-white text-[#17212B] shadow-[0_2px_8px_rgba(23,33,43,0.06)]'
                    : 'text-[#64748B] hover:text-[#17212B]'
                }`}
              >
                All Services ({allServices.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('residential')}
                className={`flex-1 sm:flex-none px-4 py-2 text-[13.5px] font-semibold rounded-[4px] transition-all cursor-pointer ${
                  filter === 'residential'
                    ? 'bg-white text-[#17212B] shadow-[0_2px_8px_rgba(23,33,43,0.06)]'
                    : 'text-[#64748B] hover:text-[#17212B]'
                }`}
              >
                Residential ({RESIDENTIAL_SERVICES.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('commercial')}
                className={`flex-1 sm:flex-none px-4 py-2 text-[13.5px] font-semibold rounded-[4px] transition-all cursor-pointer ${
                  filter === 'commercial'
                    ? 'bg-white text-[#17212B] shadow-[0_2px_8px_rgba(23,33,43,0.06)]'
                    : 'text-[#64748B] hover:text-[#17212B]'
                }`}
              >
                Commercial ({COMMERCIAL_SERVICES.length})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-[220px]">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search service..."
                className="w-full pl-9 pr-3 py-2 text-[13.5px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] text-[#17212B] placeholder-[#94A3B8] focus:outline-none focus:border-[#16C2B0] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-18 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-[8px] border border-[#E2E8F0]">
            <Filter className="w-10 h-10 text-[#94A3B8] mx-auto mb-3" />
            <p className="font-display font-bold text-[18px] text-[#17212B]">No services found</p>
            <p className="font-sans text-[14px] text-[#64748B] mt-1">Try changing your search term or filter category.</p>
            <Button
              variant="outline-teal"
              size="sm"
              onClick={() => { setFilter('all'); setSearchQuery(''); }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={onSelectService}
                onBook={(srv) => onOpenBooking(srv)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Service Standards Matrix */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[700px] mb-10">
            <h2 className="font-display font-extrabold text-[28px] sm:text-[34px] text-[#17212B] tracking-tight">
              Standard vs Deep Cleaning Comparison
            </h2>
            <p className="font-sans text-[15px] text-[#64748B] mt-2">
              Unsure which tier matches your current property state? Here is our transparent scope checklist.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden text-[14px]">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#17212B]">
                  <th className="py-4 px-6 font-display font-bold">Cleaning Scope Area</th>
                  <th className="py-4 px-6 font-display font-bold text-center">Standard Upkeep</th>
                  <th className="py-4 px-6 font-display font-bold text-center text-[#16C2B0]">Clinical Deep Clean</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#17212B]">Surface sweeping & microfiber wet mopping</td>
                  <td className="py-3.5 px-6 text-center text-[#16C2B0]"><CheckCircle2 className="w-4 h-4 mx-auto" /></td>
                  <td className="py-3.5 px-6 text-center text-[#16C2B0]"><CheckCircle2 className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#17212B]">HEPA vacuum allergen extraction (rugs & corners)</td>
                  <td className="py-3.5 px-6 text-center text-[#94A3B8]">—</td>
                  <td className="py-3.5 px-6 text-center text-[#16C2B0]"><CheckCircle2 className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#17212B]">Bathroom ceramic tile acid-free descaling</td>
                  <td className="py-3.5 px-6 text-center text-[#94A3B8]">Surface Wipe</td>
                  <td className="py-3.5 px-6 text-center text-[#16C2B0] font-semibold">Intensive Rotary Scrub</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#17212B]">Kitchen chimney exterior & oil degreasing</td>
                  <td className="py-3.5 px-6 text-center text-[#94A3B8]">Dusting Only</td>
                  <td className="py-3.5 px-6 text-center text-[#16C2B0] font-semibold">Bio-Degreasing Scrub</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#17212B]">Behind & under heavy furniture detailing</td>
                  <td className="py-3.5 px-6 text-center text-[#94A3B8]">—</td>
                  <td className="py-3.5 px-6 text-center text-[#16C2B0]"><CheckCircle2 className="w-4 h-4 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#17212B]">Founder supervisor post-clean inspection audit</td>
                  <td className="py-3.5 px-6 text-center text-[#16C2B0]"><CheckCircle2 className="w-4 h-4 mx-auto" /></td>
                  <td className="py-3.5 px-6 text-center text-[#16C2B0]"><CheckCircle2 className="w-4 h-4 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-[#17212B] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#16C2B0] mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-[13px] font-semibold">Personalized Startup Care</span>
            </div>
            <h3 className="font-display font-bold text-[24px] sm:text-[28px] text-white">
              Need a custom scope or specific room focus?
            </h3>
            <p className="font-sans text-[14px] text-[#94A3B8] mt-1">
              Contact our founder-led team directly. We customize packages to your exact floor plan.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenBooking()}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
