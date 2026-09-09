import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  variant?: 'verified' | 'neutral' | 'dark' | 'tag';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  children,
  className,
  icon,
}) => {

  const badgeStyles = {
    verified: 'bg-[#ECFDF9] text-[#078F82] border border-[#D6F8F2]',
    neutral: 'bg-[#F1F5F4] text-[#17212B] border border-[#E2E8F0]',
    dark: 'bg-[#17212B] text-white border border-[#27313C]',
    tag: 'bg-white text-[#17212B] border border-[#E2E8F0] shadow-xs',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] text-[12px] font-medium font-sans select-none',
        badgeStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
