'use client';

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ClinicCtaBanner: React.FC = () => {
  const { openModal } = useDemo();

  return (
    <section className="py-16 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0B1E19] text-white rounded-3xl p-8 sm:p-14 border border-emerald-950 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Subtle Ambient Radial */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-emerald-800/20 to-transparent pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 space-y-3 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-mono font-bold">
              BOOK YOUR APPOINTMENT
            </span>
            <h3 className="font-clinic-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Your Best Smile <br className="hidden sm:inline" />
              Is Just a <span className="italic font-normal text-emerald-200">Click Away</span>
            </h3>
            <p className="text-neutral-300 font-clinic-sans text-xs sm:text-sm font-light leading-relaxed max-w-lg">
              Take the first step towards a healthier, brighter smile. Schedule your appointment today and let our specialists take care of you.
            </p>
          </div>

          {/* Right White Pill Button */}
          <div className="relative z-10 shrink-0">
            <button
              onClick={() => openModal('clinic-booking')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-[#0B1E19] font-clinic-sans text-sm font-bold tracking-wide shadow-xl transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 text-emerald-800 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
