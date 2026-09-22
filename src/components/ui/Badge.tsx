import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'blue' | 'coral' | 'mint' | 'violet' | 'cyan';
}

export const Badge = ({ className, variant = 'default', children, ...props }: BadgeProps) => {
  const variants = {
    default: "bg-paper text-ink border border-ink shadow-[2px_2px_0_var(--ink)]",
    blue: "bg-blue text-white border border-ink shadow-[2px_2px_0_var(--ink)]",
    coral: "bg-coral text-ink border border-ink shadow-[2px_2px_0_var(--ink)]",
    mint: "bg-mint text-ink border border-ink shadow-[2px_2px_0_var(--ink)]",
    violet: "bg-violet text-white border border-ink shadow-[2px_2px_0_var(--ink)]",
    cyan: "bg-cyan text-ink border border-ink shadow-[2px_2px_0_var(--ink)]",
  };

  return (
    <div 
      className={cn("inline-flex items-center rounded-[8px] px-2.5 py-1 text-[10px] uppercase font-mono font-bold tracking-widest", variants[variant as keyof typeof variants] || variants.default, className)}
      {...props}
    >
      {children}
    </div>
  );
};
