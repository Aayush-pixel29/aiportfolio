'use client';

import React, { useState } from 'react';
import { CLINIC_TESTIMONIALS } from '../../data/prototypesData';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const ClinicTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(c => (c === 0 ? CLINIC_TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex(c => (c === CLINIC_TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  return (
    <section className="py-24 bg-[#FAF8F5] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-800 font-mono font-bold">
              WHAT OUR PATIENTS SAY
            </span>
            <h2 className="font-clinic-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-tight">
              Real People. <br />
              <span className="italic text-emerald-800">Real Smiles.</span>
            </h2>
            <p className="text-neutral-600 font-clinic-sans text-sm sm:text-base leading-relaxed font-light">
              We're proud to be a part of so many healthy, confident smiles. Here's what our patients have to say about their experience.
            </p>
          </div>

          {/* Carousel Arrows matching image */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors shadow-sm cursor-pointer"
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CLINIC_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              {/* Patient Avatar & Name */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/20 shrink-0">
                  <SafeImage
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    fallbackSvg={
                      <div className="w-full h-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                        {t.name[0]}
                      </div>
                    }
                  />
                </div>
                <div>
                  <h4 className="font-clinic-sans font-bold text-sm text-neutral-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light">
                    {t.treatment}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-xs sm:text-sm text-neutral-600 font-clinic-sans leading-relaxed italic flex-1">
                "{t.review}"
              </blockquote>

              {/* 5 Stars Rating */}
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
