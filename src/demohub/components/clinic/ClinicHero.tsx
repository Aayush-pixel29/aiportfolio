'use client';

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const ClinicHero: React.FC = () => {
  const { openModal, showNotification } = useDemo();

  return (
    <section id="home" className="relative min-h-[85vh] bg-[#0E2620] text-neutral-100 flex items-center overflow-hidden border-b border-emerald-950">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-emerald-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-300 font-mono font-medium">
                HEALTHY SMILES · BRIGHTER TOMORROWS
              </span>
            </div>

            {/* Headline matching image 1 */}
            <h1 className="font-clinic-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.12]">
              Modern Dental Care <br />
              for a <span className="italic font-normal text-emerald-200">Healthier You</span>
            </h1>

            {/* Subtext */}
            <p className="text-neutral-300 font-clinic-sans text-sm sm:text-base leading-relaxed max-w-xl font-light">
              At Evermiles Dental Clinic, we combine advanced digital technology with compassionate care to give you a confident, healthy smile — for life.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={() => openModal('clinic-booking')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1F4E40] hover:bg-[#276150] text-white font-clinic-sans text-sm font-semibold tracking-wide shadow-xl shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-95 group cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => showNotification('Playing 4K Virtual Clinic Tour (State-of-the-Art Suites)')}
                className="inline-flex items-center gap-3 text-neutral-300 hover:text-white font-clinic-sans text-sm font-medium transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-neutral-600 bg-neutral-900/60 flex items-center justify-center text-white group-hover:border-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Our Clinic Tour</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex items-center gap-6 text-xs text-neutral-400 font-clinic-sans">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Pain Philosophy</span>
              </div>
              <div>·</div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Same-Day Emergency Slots</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Reception Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-900/60 shadow-2xl bg-[#091713] aspect-[16/11]">
              <SafeImage
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Evermiles Dental Clinic Luxury Reception"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />

              {/* Gradient scrim & brand tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E19]/90 via-transparent to-black/30 pointer-events-none" />

              {/* Clinic Monogram & Title Banner */}
              <div className="absolute top-5 left-5 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M7 3C4 5 3 9 4 13C4.8 16 6 21 8 21C10 21 10.5 17 12 17C13.5 17 14 21 16 21C18 21 19.2 16 20 13C21 9 20 5 17 3C14 1 13 4 12 4C11 4 10 1 7 3Z" />
                  </svg>
                </div>
                <div>
                  <span className="font-clinic-serif text-xs font-bold tracking-wider text-white uppercase block leading-none">
                    EVERMILES
                  </span>
                  <span className="text-[7px] uppercase tracking-[0.2em] text-emerald-300 font-mono">
                    MAIN LOBBY SUITE
                  </span>
                </div>
              </div>

              {/* Floating Satisfaction Stamp */}
              <div className="absolute bottom-5 left-5 z-20 bg-[#0B1E19]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-emerald-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  4.9★
                </div>
                <div className="text-left font-clinic-sans">
                  <div className="text-xs font-semibold text-white">Top Rated Dental Clinic</div>
                  <div className="text-[10px] text-neutral-400">Over 5,000+ Verified Patient Smiles</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
