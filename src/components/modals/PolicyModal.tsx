import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Clock, FileText, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';

export type PolicyTab = 'terms' | 'cancellation' | 'guarantee';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: PolicyTab;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms',
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0B1115]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div
        className="relative w-full max-w-[720px] bg-white rounded-[12px] shadow-[0_16px_50px_rgba(23,33,43,0.15)] border border-[#E2E8F0] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 border-b border-[#E2E8F0] bg-white shrink-0">
          <div>
            <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#078F82] block">
              Subra Standards & Policies
            </span>
            <h2 id="policy-modal-title" className="font-display font-bold text-[20px] sm:text-[22px] text-[#17212B] mt-0.5">
              Customer Protection & Service Terms
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#64748B] hover:text-[#17212B] hover:bg-[#F1F5F4] transition-colors -mr-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 sm:px-6 overflow-x-auto no-scrollbar shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`py-3.5 px-3 sm:px-4 text-[13.5px] sm:text-[14px] font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'border-[#078F82] text-[#078F82] font-semibold bg-white'
                : 'border-transparent text-[#64748B] hover:text-[#17212B]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cancellation')}
            className={`py-3.5 px-3 sm:px-4 text-[13.5px] sm:text-[14px] font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'cancellation'
                ? 'border-[#078F82] text-[#078F82] font-semibold bg-white'
                : 'border-transparent text-[#64748B] hover:text-[#17212B]'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Cancellation Policy</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('guarantee')}
            className={`py-3.5 px-3 sm:px-4 text-[13.5px] sm:text-[14px] font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'guarantee'
                ? 'border-[#078F82] text-[#078F82] font-semibold bg-white'
                : 'border-transparent text-[#64748B] hover:text-[#17212B]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>24h Re-Clean Guarantee</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto font-sans space-y-6 text-[14px] text-[#64748B] leading-[1.65]">
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="bg-[#ECFDF9] border border-[#D6F8F2] rounded-[8px] p-4 text-[#17212B]">
                <h3 className="font-display font-bold text-[15px] text-[#078F82] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#078F82]" />
                  Transparent, Requirement-Based Quotes
                </h3>
                <p className="text-[13px] text-[#078F82] mt-1">
                  Because every house and facility has unique needs, we calculate prices based on your actual floor plan and requirements. All quotes are confirmed upfront on WhatsApp before dispatch — zero hidden surcharges on arrival.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  1. Scope of Service & Coverage
                </h4>
                <p>
                  Subra House Service provides clinical-grade deep cleaning, moving turnover cleaning, floor restoration buffing, and maintenance services across Rajahmundry, East Godavari, and Kakinada districts. Our teams arrive fully equipped with professional equipment and eco-safe bio-compounds.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  2. Utility & Site Prerequisites
                </h4>
                <p>
                  Clients are required to ensure continuous access to running water and standard electrical connections (for high-power vacuum extractors and rotary floor scrubbers) during the booked service window.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  3. Safe Chemistry & Surface Care
                </h4>
                <p>
                  We use certified biodegradable, non-acidic formulations that are 100% safe for children, pets, and senior residents. If your property contains specialized unsealed materials (e.g. Italian raw marble or antique teakwood), please notify our supervisor prior to service.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  4. Valuables & Personal Property
                </h4>
                <p>
                  While our cleaning squads are background-verified and directly supervised, we require clients to lock away cash, jewelry, and delicate high-value heirlooms before crew arrival.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'cancellation' && (
            <div className="space-y-4">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-4 text-[#17212B]">
                <h3 className="font-display font-bold text-[15px] text-[#17212B] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#078F82]" />
                  Zero Penalty Cancellation
                </h3>
                <p className="text-[13px] text-[#64748B] mt-1">
                  We understand family schedules change. You can cancel or reschedule your cleaning appointment with zero fee by giving at least 3 hours notice.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  1. How to Cancel or Reschedule
                </h4>
                <p>
                  Simply message our dispatch desk on WhatsApp (+91 93924 30205) or call our hotline (+91 97043 80535). Mention your name and scheduled date.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  2. Rescheduling Flexibility
                </h4>
                <p>
                  You may move your booking to any available morning or afternoon slot within 14 calendar days without forfeiting your confirmed quotation.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  3. Weather & Delta Monsoon Disruptions
                </h4>
                <p>
                  During unexpected heavy Godavari rains, localized road flooding, or power disruptions, we will contact you directly to adjust arrival timings or coordinate safe same-week rescheduling.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'guarantee' && (
            <div className="space-y-4">
              <div className="bg-[#ECFDF9] border border-[#D6F8F2] rounded-[8px] p-4 text-[#17212B]">
                <h3 className="font-display font-bold text-[15px] text-[#078F82] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#078F82]" />
                  100% Free 24-Hour Re-Clean Guarantee
                </h3>
                <p className="text-[13px] text-[#078F82] mt-1">
                  If any area in your contracted checklist is not spotless to your complete satisfaction, notify us within 24 hours of completion. We will return and re-clean that area free of charge.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  1. Hands-On Founder Oversight
                </h4>
                <p>
                  As an authentic local startup in East Godavari, our founding partners personally audit completed checklists and client sign-offs. We don't consider a job done until you walk through and approve it.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-[15px] text-[#17212B]">
                  2. Prompt Resolution
                </h4>
                <p>
                  Upon receiving your re-clean request on WhatsApp with quick photo context, our dispatch team schedules a supervisor revisit within 24 hours.
                </p>
              </div>
            </div>
          )}

          {/* Quick Direct Desk Contact */}
          <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#F8FAFC] p-4 rounded-[8px]">
            <div className="text-[13px] text-[#17212B]">
              <span className="font-semibold block">Need policy clarification or custom terms?</span>
              <span className="text-[#64748B]">Speak directly with our founding team in Rajahmundry.</span>
            </div>
            <a
              href="https://wa.me/919392430205?text=Hello%20Subra%20team,%20I%20have%20a%20question%20regarding%20your%20service%20terms."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-[#25D366] text-white text-[13px] font-medium hover:bg-[#20bd5a] transition-colors shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-7 border-t border-[#E2E8F0] bg-white flex items-center justify-end shrink-0">
          <Button variant="secondary" size="md" onClick={onClose}>
            Close & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
