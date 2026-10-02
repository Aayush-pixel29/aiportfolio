'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

interface DemoFooterProps {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}

export const DemoFooter: React.FC<DemoFooterProps> = ({
  businessName,
  tagline,
  phone,
  email,
  address,
  city,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#080808] text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white block">
              {businessName}
            </span>
            <p className="text-zinc-400 max-w-md">
              {tagline} • {address}, {city}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Aayush Shelar Portfolio</span>
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} {businessName}. Interactive Demo Prototype. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-zinc-400">
            <span>Crafted for high conversion local businesses by</span>
            <Link href="/" className="text-zinc-200 hover:underline font-semibold">
              Aayush Shelar
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
