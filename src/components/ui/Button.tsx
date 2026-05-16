import React from 'react';
import { cn } from '../../utils/format';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: any;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as: Component = 'button', ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-green text-white hover:bg-brand-dark transition-all active:scale-95 shadow-sm',
      secondary: 'bg-brand-red text-white hover:bg-brand-dark transition-all active:scale-95 shadow-sm',
      outline: 'border border-brand-dark/20 text-brand-dark hover:border-brand-green hover:text-brand-green transition-all',
      ghost: 'text-brand-dark/50 hover:text-brand-dark transition-colors',
    };

    const sizes = {
      sm: 'px-4 py-2 text-[10px] font-bold uppercase tracking-widest',
      md: 'px-8 py-3 text-xs font-bold uppercase tracking-[0.2em]',
      lg: 'px-10 py-4 text-sm font-bold uppercase tracking-[0.3em]',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-green disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
