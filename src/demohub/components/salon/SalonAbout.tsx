'use client';

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Award, Users, CheckCircle2 } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const SalonAbout: React.FC = () => {
  const { openModal } = useDemo();

  return (
    <section id="about" className="relative py-24 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-white font-salon-display text-8xl sm:text-[180px] font-black tracking-widest whitespace-nowrap">
        BARBERCROP
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Title Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-red-600" />
              <span className="text-xs uppercase tracking-widest text-red-500 font-mono font-semibold">
                EXCLUSIVE GROOMING
              </span>
            </div>

            <h2 className="font-salon-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">
              PROFESSIONAL BARBERSHOP <br />
              <span className="text-neutral-400">FOR MEN ONLY</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Founded on the values of authentic heritage barbering, Barbercrop blends traditional European craftsmanship with sharp, contemporary urban styling. Every client receives tailored consultation to accentuate their bone structure and hair grain.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Single-Use Sanitized Blades</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Complimentary Espresso & Whiskey</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interior Photo & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[16/9] overflow-hidden border border-neutral-800">
              <SafeImage
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80"
                alt="Barbercrop Vintage Interior"
                className="w-full h-full object-cover filter grayscale contrast-125"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-black/80 backdrop-blur-md text-[11px] font-mono text-neutral-300 border border-neutral-800">
                Heritage Studio · Richardson, CA
              </div>
            </div>

            {/* Metrics Box */}
            <div className="bg-neutral-900/40 p-6 sm:p-8 border border-neutral-800/80 rounded-none relative">
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600" />

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="font-salon-display text-3xl sm:text-4xl font-bold text-white tracking-wide">
                    SINCE 2015
                  </div>
                  <div className="text-xs text-neutral-400 font-light">
                    A decade of unmatched gentleman grooming excellence.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-salon-display text-3xl sm:text-4xl font-bold text-red-500 tracking-wide">
                    1000+ CLIENTS
                  </div>
                  <div className="text-xs text-neutral-400 font-light">
                    Loyal returning clientele trusting our razor precision weekly.
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-neutral-800">
                <button
                  onClick={() => openModal('salon-booking')}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-salon-display text-xs tracking-widest font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  LEARN MORE & BOOK
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
