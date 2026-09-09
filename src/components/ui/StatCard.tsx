import React from 'react';
import { cn } from '../../utils/cn';

interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  sublabel,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-[8px] p-4 sm:p-5 border border-[#E2E8F0] shadow-[0_16px_50px_rgba(23,33,43,0.10)] transition-transform duration-300 hover:translate-y-[-2px] flex items-center gap-3.5 sm:gap-4',
        className
      )}
    >
      {icon && (
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] bg-[#ECFDF9] text-[#078F82] flex items-center justify-center shrink-0 border border-[#D6F8F2]">
          {icon}
        </div>
      )}
      <div>
        <div className="font-display text-[22px] sm:text-[26px] font-extrabold text-[#17212B] tracking-tight leading-none">
          {value}
        </div>
        <div className="font-sans text-[12px] sm:text-[13px] font-semibold text-[#17212B] mt-1">
          {label}
        </div>
        {sublabel && (
          <div className="font-sans text-[11px] sm:text-[12px] text-[#64748B] mt-0.5">
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
};
