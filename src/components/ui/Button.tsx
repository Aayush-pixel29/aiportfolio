import React from 'react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', href, external, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-[10px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue disabled:pointer-events-none disabled:opacity-50 text-[13px] px-[15px] py-3";
    
    const variants = {
      primary: "bg-ink text-white border border-ink hover:-translate-y-[3px] hover:shadow-[4px_4px_0_var(--blue)]",
      outline: "bg-white/30 text-ink border border-ink hover:-translate-y-[3px] hover:shadow-[4px_4px_0_var(--coral)]",
      ghost: "hover:bg-ink/5 text-ink",
    };

    const classes = cn(baseStyles, variants[variant], className);

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
