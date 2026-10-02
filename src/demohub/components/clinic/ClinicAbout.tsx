'use client';

import React from 'react';
import { SafeImage } from '../common/SafeImage';

export const ClinicAbout: React.FC = () => {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '5K+', label: 'Happy Patients' },
    { value: '98%', label: 'Success Rate' },
    { value: '4.9★', label: 'Client Rating' }
  ];

  return (
    <section id="about" className="py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Consulting Patient Visual + Script Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-200 bg-[#E8EFEA] aspect-[4/3]">
              
              <SafeImage
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Evermiles Dentist Consulting Patient"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* "Your Smile Our Mission" Handwritten Badge from reference */}
              <div className="absolute top-6 left-6 z-20 transform -rotate-6">
                <div className="bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                  <div className="font-serif italic text-sm text-emerald-300 tracking-wide">
                    Your Smile
                  </div>
                  <div className="font-serif italic text-xs text-white tracking-widest pl-2">
                    Our Mission
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-800 font-mono font-bold">
              ABOUT EVERMILES
            </span>

            <h2 className="font-clinic-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-tight">
              More Than Just <br />
              <span className="text-neutral-500">A Dental Clinic</span>
            </h2>

            <p className="text-neutral-600 font-clinic-sans text-sm sm:text-base leading-relaxed font-light">
              We believe a healthy smile can change your life. That's why we go beyond treatments — we build long-term relationships based on trust, comfort and personalized care. Every patient journey begins with listening to your story.
            </p>

            {/* 4 Quantitative Stats in 4 columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-200">
              {stats.map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="font-clinic-serif text-3xl sm:text-4xl font-normal text-emerald-900 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs text-neutral-500 font-clinic-sans leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
