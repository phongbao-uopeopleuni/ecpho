import React from 'react';
import { cn } from '../../utils/format';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'red' | 'amber' | 'green' | 'gray';
  className?: string;
  [key: string]: any;
}

export const Badge = ({ children, variant = 'gray', className, ...props }: BadgeProps) => {
  const variants = {
    red: 'bg-brand-red text-white',
    amber: 'bg-brand-gold text-white',
    green: 'bg-brand-green text-white',
    gray: 'bg-brand-dark/5 text-brand-dark/50 border border-brand-dark/10',
  };

  return (
    <span 
      className={cn('inline-flex items-center rounded-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest', variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
