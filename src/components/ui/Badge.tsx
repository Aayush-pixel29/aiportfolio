import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'electric' | 'coral' | 'mint' | 'violet' | 'cyan';
}

export const Badge = ({ className, variant = 'default', children, ...props }: BadgeProps) => {
  const variants = {
    default: "bg-ink/5 text-ink border border-ink/10",
    electric: "bg-electric/10 text-electric border border-electric/20",
    coral: "bg-coral/10 text-coral border border-coral/20",
    mint: "bg-mint/20 text-ink border border-mint/30",
    violet: "bg-violet/10 text-violet border border-violet/20",
    cyan: "bg-cyan/20 text-ink border border-cyan/30",
  };

  return (
    <div 
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono font-medium", variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
};
