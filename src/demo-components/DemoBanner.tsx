'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowLeft, Send, ChevronUp, ChevronDown } from 'lucide-react';

interface DemoBannerProps {
  nicheTitle?: string;
}

export const DemoBanner: React.FC<DemoBannerProps> = ({ nicheTitle }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside
      aria-label="Demo Prototype Banner"
      className="sticky top-0 z-50 w-full bg-[#0a0a0d]/95 border-b border-white/10 backdrop-blur-xl transition-all"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 text-xs">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-tr from-[#3457ff] to-[#B600A8] flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>

          <div className="truncate flex items-center gap-2">
            <span className="font-semibold text-white tracking-wide text-xs">
              Live Prototype
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="hidden md:inline text-zinc-400 text-xs">
              Built by <strong className="text-zinc-200 font-medium">Aayush Shelar</strong>
            </span>
            {!isMinimized && nicheTitle && (
              <span className="hidden lg:inline text-zinc-500 text-[11px] truncate">
                • {nicheTitle} Demo
              </span>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {!isMinimized && (
            <>
              <Link
                href="/"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10 text-[11px] sm:text-xs font-medium"
              >
                <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Back to</span> Portfolio
              </Link>

              <a
                href="https://wa.me/919876543210?text=Hi%20Aayush%2C%20I%20saw%20your%20live%20client%20demo%20prototype%20and%20I%20want%20this%20for%20my%20business!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-[11px] sm:text-xs transition-all shadow-md shadow-emerald-500/20 active:scale-95"
              >
                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Request for My Business</span>
              </a>
            </>
          )}

          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            title={isMinimized ? 'Expand Banner' : 'Minimize Banner'}
            aria-label="Toggle banner"
          >
            {isMinimized ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </aside>
  );
};
