import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline-teal' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium font-sans transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-[4px]';

  const sizeStyles = {
    sm: 'h-9 px-3.5 text-[13px] gap-1.5',
    md: 'h-11 px-5 text-[14px] font-semibold gap-2',
    lg: 'h-12 px-7 text-[15px] font-semibold gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-[#16C2B0] hover:bg-[#0FAF9F] active:bg-[#078F82] text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078F82]',
    secondary: 'bg-white hover:bg-[#F8FAFC] active:bg-[#F1F5F4] text-[#17212B] border border-[#CBD5E1] hover:border-[#17212B] focus-visible:outline-2 focus-visible:outline-[#17212B]',
    dark: 'bg-[#17212B] hover:bg-[#0B1115] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17212B]',
    'outline-teal': 'bg-transparent text-[#078F82] border border-[#16C2B0] hover:bg-[#ECFDF9] focus-visible:outline-2 focus-visible:outline-[#16C2B0]',
    ghost: 'bg-transparent hover:bg-[#F1F5F4] text-[#17212B]',
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
