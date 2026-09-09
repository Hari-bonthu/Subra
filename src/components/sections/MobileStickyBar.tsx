import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick mobile booking actions"
      className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] p-3 shadow-[0_-8px_25px_rgba(23,33,43,0.08)] lg:hidden"
    >
      <div className="max-w-[480px] mx-auto flex items-center gap-2.5">
        <a
          href="tel:+918842345678"
          className="flex-1"
        >
          <Button
            variant="secondary"
            size="md"
            fullWidth
            icon={<Phone className="w-4 h-4 text-[#16C2B0]" />}
            iconPosition="left"
            className="text-[13px] h-11 border-[#CBD5E1]"
          >
            Call Dispatch
          </Button>
        </a>

        <div className="flex-1">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={onOpenBooking}
            icon={<CalendarCheck className="w-4 h-4" />}
            className="text-[13px] h-11 shadow-sm"
          >
            Book Now
          </Button>
        </div>
      </div>
    </aside>
  );
};
