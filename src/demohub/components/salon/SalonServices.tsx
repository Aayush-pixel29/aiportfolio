'use client';

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { SALON_SERVICES } from '../../data/prototypesData';
import { Scissors, Sparkles, Feather, Layers, Shield, Paintbrush } from 'lucide-react';

export const SalonServices: React.FC = () => {
  const { openModal } = useDemo();

  const serviceIcons: Record<string, React.ReactNode> = {
    haircut: <Scissors className="w-6 h-6 text-red-500" />,
    moustache: <Feather className="w-6 h-6 text-red-500" />,
    shave: <Shield className="w-6 h-6 text-red-500" />,
    stacking: <Layers className="w-6 h-6 text-red-500" />,
    beardtrim: <Sparkles className="w-6 h-6 text-red-500" />,
    hairdyeing: <Paintbrush className="w-6 h-6 text-red-500" />
  };

  return (
    <section id="services" className="relative py-24 bg-black border-b border-neutral-900 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-12 right-12 select-none pointer-events-none opacity-[0.03] text-white font-salon-display text-8xl sm:text-[160px] font-black tracking-widest">
        SERVICES
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-0.5 bg-red-600" />
            <span className="text-xs uppercase tracking-widest text-red-500 font-mono font-semibold">
              PREMIUM CRAFTSMANSHIP
            </span>
            <span className="w-6 h-0.5 bg-red-600" />
          </div>

          <h2 className="font-salon-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            WHAT WE PROVIDE
          </h2>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Every service includes a dedicated consultation, hot botanical steam towels, and post-shave balm to soothe the skin.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SALON_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group bg-neutral-950/80 border border-neutral-900 hover:border-red-600/60 p-8 transition-all duration-300 relative flex flex-col justify-between hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1"
            >
              {/* Subtle Corner Accent */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-red-500 transition-colors" />

              <div className="space-y-5">
                {/* Icon & Duration */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-neutral-900 rounded-none border border-neutral-800 group-hover:border-red-600/40 group-hover:bg-red-950/20 transition-all">
                    {serviceIcons[srv.id] || <Scissors className="w-6 h-6 text-red-500" />}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 tracking-wider">
                    {srv.duration}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="font-salon-display text-2xl font-bold text-white tracking-wider group-hover:text-red-400 transition-colors">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {srv.description}
                </p>
              </div>

              {/* Price & Book Action */}
              <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between">
                <span className="font-salon-display text-base font-bold text-red-500 tracking-wider">
                  {srv.price}
                </span>

                <button
                  onClick={() => openModal('salon-booking')}
                  className="text-xs uppercase tracking-wider font-semibold text-neutral-300 hover:text-white flex items-center gap-1 group-hover:text-red-400 transition-colors"
                >
                  Book Slot →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
