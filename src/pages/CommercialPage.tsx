import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Building2, FileCheck, CheckCircle2, PhoneCall, MessageSquare, Phone } from 'lucide-react';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Button } from '../components/ui/Button';
import { COMMERCIAL_SERVICES } from '../data/siteData';
import { usePageMeta } from '../hooks/usePageMeta';
import type { ServiceItem } from '../types';
import { isValidIndianPhone, formatIndianPhone } from '../utils/validation';
import { trackConversion } from '../utils/analytics';

interface CommercialPageProps {
  onOpenBooking: (service?: ServiceItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  usePageMeta({
    title: 'Commercial & Office Cleaning Services in Rajahmundry & Kakinada | SUBRA',
    description:
      'Corporate janitorial contracts, commercial floor buffing, retail sanitization, and scheduled maintenance across Rajahmundry, Kakinada, and East Godavari.',
  });

  const [rfpSubmitted, setRfpSubmitted] = useState(false);
  const [rfpWhatsappUrl, setRfpWhatsappUrl] = useState('');
  const [rfpPhoneError, setRfpPhoneError] = useState('');
  const [rfpForm, setRfpForm] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    sqft: '1000-3000',
    frequency: 'daily',
    notes: '',
  });

  const getSqftLabel = (val: string) => {
    switch (val) {
      case 'under-1000':
        return 'Under 1,000 sq ft';
      case '1000-3000':
        return '1,000 - 3,000 sq ft';
      case '3000-8000':
        return '3,000 - 8,000 sq ft';
      case '8000+':
        return '8,000+ sq ft (Enterprise)';
      default:
        return val;
    }
  };

  const handleRfpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidIndianPhone(rfpForm.phone)) {
      setRfpPhoneError('Please enter a valid 10-digit mobile number (e.g. 98765 43210)');
      return;
    }
    setRfpPhoneError('');

    const text = `*New Commercial Cleaning RFP / Inspection Request*
*Company / Organization:* ${rfpForm.companyName.trim()}
*Contact Person:* ${rfpForm.contactPerson.trim()}
*Phone:* ${formatIndianPhone(rfpForm.phone.trim())}
*Estimated Floor Area:* ${getSqftLabel(rfpForm.sqft)}
*Requirements / Schedule:* ${rfpForm.notes.trim() || 'Workplace walk-through & scope inspection requested'}`;

    const url = `https://wa.me/919392430205?text=${encodeURIComponent(text)}`;
    setRfpWhatsappUrl(url);
    setRfpSubmitted(true);

    trackConversion('commercial_inquiry_submit', {
      source: 'commercial_page_rfp',
      company: rfpForm.companyName,
      sqft: rfpForm.sqft,
      frequency: rfpForm.frequency,
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-extrabold text-[36px] sm:text-[46px] lg:text-[52px] text-[#17212B] leading-[1.08] tracking-[-0.03em]">
            Commercial & Facility Cleaning
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#64748B] leading-[1.6] mt-4">
            Clinical hygiene standards engineered for modern offices, clinics, educational institutions, and retail venues across Rajahmundry, East Godavari, and Kakinada Districts.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[13.5px] text-[#17212B] font-medium">
            <div className="flex items-center gap-2 bg-[#ECFDF9] text-[#078F82] px-3.5 py-1.5 rounded-full border border-[#D6F8F2]">
              <ShieldCheck className="w-4 h-4 text-[#16C2B0]" />
              <span>Dedicated On-Site Supervisor</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F1F5F4] text-[#17212B] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
              <FileCheck className="w-4 h-4 text-[#16C2B0]" />
              <span>Full SLA & Liability Protection</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F1F5F4] text-[#17212B] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
              <Building2 className="w-4 h-4 text-[#16C2B0]" />
              <span>Electronics & Server Safe Bio-Misting</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Commercial Services Grid */}
      <section className="py-14 sm:py-18 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display font-extrabold text-[28px] sm:text-[34px] text-[#17212B] tracking-tight">
              Enterprise Service Solutions
            </h2>
            <p className="font-sans text-[15px] text-[#64748B] mt-1">
              Scalable single-visit restorations or managed recurring janitorial contracts.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenBooking()}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request Workplace Proposal
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COMMERCIAL_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
              onBook={(srv) => onOpenBooking(srv)}
            />
          ))}
        </div>
      </section>

      {/* Commercial Compliance & Guarantee */}
      <section className="py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-extrabold text-[30px] sm:text-[36px] text-[#17212B] tracking-tight leading-[1.15]">
                Commercial Cleaning Built On Total Reliability
              </h2>
              <p className="font-sans text-[15px] text-[#64748B] mt-4 leading-[1.65]">
                As a fast-growing local startup, every commercial account represents our reputation. We don't sub-contract to untrained third parties. Our full-time staff operates under direct supervisor oversight with documented quality checklists.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[16px] text-[#17212B]">Verified Staff & Identity Badges</h4>
                    <p className="font-sans text-[13.5px] text-[#64748B] mt-0.5">All janitorial personnel carry police verification files and formal company ID badges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[16px] text-[#17212B]">Off-Peak & Night Shift Flexibility</h4>
                    <p className="font-sans text-[13.5px] text-[#64748B] mt-0.5">We work after business hours (evenings, early mornings, or weekends) with zero daytime employee disruption.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[16px] text-[#17212B]">MSDS-Approved Green Bio-Formulas</h4>
                    <p className="font-sans text-[13.5px] text-[#64748B] mt-0.5">Non-corrosive sterilizers certified safe around server racks, LED displays, and expensive finishes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RFP / Custom Quote Box */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 rounded-[8px]">
              <h3 className="font-display font-bold text-[22px] text-[#17212B]">
                Request Workplace Inspection & Quote
              </h3>
              <p className="font-sans text-[13.5px] text-[#64748B] mt-1 mb-6">
                Receive a customized scope audit and transparent proposal within 24 hours.
              </p>

              {rfpSubmitted ? (
                <div className="p-6 sm:p-8 bg-[#ECFDF9] border border-[#16C2B0]/30 rounded-[8px] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#16C2B0] text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-[20px] text-[#17212B]">
                    Proposal Request Prepared for WhatsApp!
                  </h4>
                  <p className="font-sans text-[13.5px] text-[#64748B] max-w-[420px] mx-auto leading-relaxed">
                    Thank you <strong className="text-[#17212B]">{rfpForm.contactPerson}</strong>. If WhatsApp did not open automatically, click below to forward your specifications directly to our commercial manager at <span className="font-medium text-[#17212B]">+91 93924 30205</span>:
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={rfpWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1"
                    >
                      <Button
                        variant="primary"
                        size="md"
                        fullWidth
                        icon={<MessageSquare className="w-4 h-4" />}
                        className="bg-[#25D366] hover:bg-[#1EBE5D] border-transparent shadow-sm text-[13px]"
                      >
                        Continue on WhatsApp
                      </Button>
                    </a>

                    <a href="tel:+919704380535" className="w-full sm:w-auto flex-1">
                      <Button
                        variant="secondary"
                        size="md"
                        fullWidth
                        icon={<Phone className="w-4 h-4 text-[#16C2B0]" />}
                        className="text-[13px]"
                      >
                        Call Dispatch
                      </Button>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setRfpSubmitted(false);
                        setRfpWhatsappUrl('');
                        setRfpPhoneError('');
                        setRfpForm({
                          companyName: '',
                          contactPerson: '',
                          phone: '',
                          email: '',
                          sqft: '1000-3000',
                          frequency: 'daily',
                          notes: '',
                        });
                      }}
                      className="text-[12.5px] text-[#64748B] hover:text-[#17212B] underline cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRfpSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#17212B] mb-1">Company / Organization</label>
                      <input
                        type="text"
                        required
                        value={rfpForm.companyName}
                        onChange={(e) => setRfpForm({ ...rfpForm, companyName: e.target.value })}
                        placeholder="e.g. Apex Tech Hub"
                        className="w-full px-3 py-2 text-[13px] bg-white border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#17212B] mb-1">Contact Person</label>
                      <input
                        type="text"
                        required
                        value={rfpForm.contactPerson}
                        onChange={(e) => setRfpForm({ ...rfpForm, contactPerson: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 text-[13px] bg-white border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#17212B] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={rfpForm.phone}
                        onChange={(e) => {
                          setRfpForm({ ...rfpForm, phone: e.target.value });
                          if (rfpPhoneError) setRfpPhoneError('');
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3 py-2 text-[13px] bg-white border rounded-[6px] text-[#17212B] outline-none transition-colors ${
                          rfpPhoneError
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#E2E8F0] focus:border-[#16C2B0]'
                        }`}
                      />
                      {rfpPhoneError && (
                        <p className="font-sans text-[11.5px] text-red-600 mt-1 font-medium">
                          {rfpPhoneError}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#17212B] mb-1">Estimated Floor Area</label>
                      <select
                        value={rfpForm.sqft}
                        onChange={(e) => setRfpForm({ ...rfpForm, sqft: e.target.value })}
                        className="w-full px-3 py-2 text-[13px] bg-white border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:outline-none"
                      >
                        <option value="under-1000">Under 1,000 sq ft</option>
                        <option value="1000-3000">1,000 - 3,000 sq ft</option>
                        <option value="3000-8000">3,000 - 8,000 sq ft</option>
                        <option value="8000+">8,000+ sq ft (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#17212B] mb-1">Specific Requirements or Schedule</label>
                    <textarea
                      rows={3}
                      value={rfpForm.notes}
                      onChange={(e) => setRfpForm({ ...rfpForm, notes: e.target.value })}
                      placeholder="e.g. Daily night clean for 40 desks, bi-weekly tile scrubbing..."
                      className="w-full px-3 py-2 text-[13px] bg-white border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:outline-none"
                    />
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Workplace Walk-through
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency / Toll Free Dispatch bar */}
      <section className="py-10 bg-[#17212B] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[6px] bg-[#16C2B0]/20 text-[#16C2B0] flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-[17px] text-white">Need an urgent post-event or handover clean?</h4>
              <p className="font-sans text-[13.5px] text-[#94A3B8]">Our rapid-response squad dispatches across Rajahmundry, East Godavari & Kakinada within hours.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="tel:+919704380535"
              onClick={() => trackConversion('call_dispatch', { source: 'commercial_page_emergency_bar', phone: '+91 97043 80535' })}
              className="px-4 py-2.5 bg-[#16C2B0] hover:bg-[#078F82] text-white font-display font-bold text-[13.5px] rounded-[6px] transition-colors"
            >
              Call: +91 97043 80535
            </a>
            <a
              href="tel:+919392430205"
              onClick={() => trackConversion('call_dispatch', { source: 'commercial_page_emergency_bar', phone: '+91 93924 30205' })}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-display font-bold text-[13.5px] rounded-[6px] border border-white/20 transition-colors"
            >
              +91 93924 30205
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
