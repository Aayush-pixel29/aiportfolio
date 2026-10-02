'use client';

import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Phone, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const SalonHero: React.FC = () => {
  const { openModal } = useDemo();
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: 'WE WILL KEEP YOU AN IMPECCABLE LOOK',
      subtitle: 'Master craftsmanship, straight razor hot lathers, and timeless grooming tailored to your signature profile.',
      address: '331 Linking Road, Khar / Bandra West, Mumbai 400052',
      phone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'PRECISION BEARD SCULPTING & CLASSIC CUTS',
      subtitle: 'Every cut is executed with meticulous scissors mastery and tailored hot towel hydration therapy.',
      address: '331 Linking Road, Khar / Bandra West, Mumbai 400052',
      phone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const current = slides[slide];

  return (
    <section id="home" className="relative min-h-[85vh] bg-black flex items-center overflow-hidden border-b border-neutral-900">
      
      {/* Background Graphic & Styled Editorial Portrait matching image 3 */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none">
        <div className="relative w-full lg:w-3/5 h-full overflow-hidden">
          <SafeImage
            src={current.image}
            alt="Barbercrop Signature Grooming"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
            containerClassName="w-full h-full"
          />

          {/* Gradients to blend seamlessly into black canvas */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-black/60 to-transparent z-10" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl space-y-8">
          
          {/* Crimson accent line & sub-tag */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-red-600" />
            <span className="text-xs uppercase tracking-widest text-red-500 font-semibold font-mono">
              EST. 2015 · BANDRA WEST, MUMBAI
            </span>
          </div>

          {/* Headline matching image 3 */}
          <h1 className="font-salon-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            {current.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
            {current.subtitle}
          </p>

          {/* Contact & Location Strip */}
          <div className="pt-2 space-y-3 text-xs sm:text-sm text-neutral-300 font-mono">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>{current.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href="tel:+1234567890" className="hover:text-red-400 transition-colors font-semibold">
                {current.phone}
              </a>
            </div>
          </div>

          {/* CTA & Slider Navigation */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <button
              onClick={() => openModal('salon-booking')}
              className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-salon-display text-base tracking-wider font-semibold transition-all shadow-xl hover:shadow-red-600/40 active:scale-95 cursor-pointer"
            >
              BOOK APPOINTMENT
            </button>

            {/* Slider Arrows matching image 3 */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSlide(s => (s === 0 ? slides.length - 1 : s - 1))}
                className="p-3 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSlide(s => (s === slides.length - 1 ? 0 : s + 1))}
                className="p-3 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Crimson Bar matching image 3 */}
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-1.5 bg-red-600 z-20" />
    </section>
  );
};
