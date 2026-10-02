'use client';

import React from 'react';
import { CLINIC_SERVICES } from '../../data/prototypesData';
import { ArrowRight } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { SafeImage } from '../common/SafeImage';

export const ClinicServices: React.FC = () => {
  const { openModal } = useDemo();

  return (
    <section id="services" className="py-24 bg-[#F5F3EF] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-800 font-mono font-bold">
              OUR SERVICES
            </span>

            <h2 className="font-clinic-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-tight">
              Comprehensive Dental Care <br />
              for <span className="italic font-normal text-emerald-800">Every Smile</span>
            </h2>

            <p className="text-neutral-600 font-clinic-sans text-sm sm:text-base leading-relaxed max-w-xl font-light">
              From routine check-ups to advanced treatments, we offer a full range of dental services to keep your smile healthy and beautiful.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={() => openModal('clinic-booking')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#132A22] hover:bg-[#1C3E32] text-white font-clinic-sans text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md group cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 6 Services Grid (3x2 layout matching image 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLINIC_SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => openModal('clinic-booking')}
              className="group cursor-pointer bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-700/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Graphic Thumbnail with Real Dental Photography */}
              <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                <SafeImage
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  containerClassName="w-full h-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Service Category Icon Badge matching design */}
                <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-emerald-800">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M7 3C4 5 3 9 4 13C4.8 16 6 21 8 21C10 21 10.5 17 12 17C13.5 17 14 21 16 21C18 21 19.2 16 20 13C21 9 20 5 17 3C14 1 13 4 12 4C11 4 10 1 7 3Z" />
                  </svg>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-clinic-sans font-bold text-base text-neutral-900 group-hover:text-emerald-800 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light mt-0.5 line-clamp-1">
                    {srv.description}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-emerald-800 group-hover:text-white text-neutral-600 flex items-center justify-center transition-colors shrink-0 ml-3">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
