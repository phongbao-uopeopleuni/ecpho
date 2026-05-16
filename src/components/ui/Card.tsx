import React from 'react';
import { cn } from '../../utils/format';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cn('overflow-hidden rounded-2xl bg-white shadow-md', className)} {...props}>
      {children}
    </div>
  );
};
