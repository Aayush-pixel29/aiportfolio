'use client';

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { SALON_HOURS } from '../../data/prototypesData';
import { Clock, Calendar, ShieldCheck, MapPin } from 'lucide-react';

export const SalonSchedule: React.FC = () => {
  const { openModal } = useDemo();

  return (
    <section id="schedule" className="relative py-24 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
      {/* Background Graphic representing Dark Barbershop Interior */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full object-cover" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1200" height="600" fill="#0C0C0E" />
          <path d="M100 0 L100 600 M300 0 L300 600 M500 0 L500 600 M700 0 L700 600 M900 0 L900 600 M1100 0 L1100 600" stroke="#1A1A1E" strokeWidth="1" />
          {/* Stylized vintage chair outlines */}
          <circle cx="300" cy="350" r="120" stroke="#333" strokeWidth="2" fill="#121214" />
          <circle cx="900" cy="350" r="120" stroke="#333" strokeWidth="2" fill="#121214" />
          <rect x="260" y="220" width="80" height="130" rx="10" stroke="#444" strokeWidth="2" fill="#18181C" />
          <rect x="860" y="220" width="80" height="130" rx="10" stroke="#444" strokeWidth="2" fill="#18181C" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Team Invitation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-red-600" />
              <span className="text-xs uppercase tracking-widest text-red-500 font-mono font-semibold">
                MASTER BARBERS
              </span>
            </div>

            <h2 className="font-salon-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              TEAM OF PROFESSIONALS <br />
              <span className="text-neutral-400">IS WAITING FOR YOU</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Our barbers are dedicated artists who treat haircutting and shaving as high craft. Relax in our hand-stitched leather vintage chairs with a complimentary bourbon while we craft your distinguished look.
            </p>

            <div className="pt-2">
              <button
                onClick={() => openModal('salon-booking')}
                className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-salon-display text-sm tracking-wider font-semibold transition-all shadow-xl hover:shadow-red-600/30 active:scale-95"
              >
                BOOK NOW
              </button>
            </div>
          </div>

          {/* Right Column: Special Opening Hours Table */}
          <div className="lg:col-span-6 bg-neutral-900/80 border border-neutral-800 p-8 sm:p-10 relative shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-red-500" />
              <h3 className="font-salon-display text-2xl font-bold text-white tracking-wider">
                SPECIAL OPENING HOURS
              </h3>
            </div>

            <div className="space-y-4 divide-y divide-neutral-800/80">
              {SALON_HOURS.map((row) => (
                <div key={row.day} className="pt-3 flex items-center justify-between text-xs sm:text-sm font-mono">
                  <span className="text-neutral-300 font-medium tracking-wide">
                    {row.day}
                  </span>
                  <span className={`font-semibold tracking-wider ${row.hours === 'CLOSED' ? 'text-red-500' : 'text-neutral-400'}`}>
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                3891 Ranchview Dr, Richardson
              </span>
              <span className="text-emerald-400 font-medium">Walk-ins Welcome</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
