'use client';

import React from 'react';
import { Search, SlidersHorizontal, Flame, Sparkles } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { SafeImage } from '../common/SafeImage';

interface RestaurantHeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const RestaurantHero: React.FC<RestaurantHeroProps> = ({ searchQuery, setSearchQuery }) => {
  const { showNotification } = useDemo();

  return (
    <section className="relative pt-6 pb-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Banner Card */}
        <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800/80 p-6 sm:p-10 overflow-hidden shadow-2xl min-h-[360px] flex items-center">
          
          {/* Background Chef & Food Photo */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <SafeImage
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
              alt="Crunch Master Chef Seasoning Crispy Chicken"
              className="w-full h-full object-cover object-right sm:object-center"
              containerClassName="w-full h-full"
            />
            {/* Dramatic scrim matching image 2 */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* Foreground Text & Headlines */}
          <div className="relative z-10 max-w-xl space-y-4">
            
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-full text-orange-400 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 fill-orange-500" />
              <span>FRESH FROM THE FRYER · 100% CANOLA OIL</span>
            </div>

            {/* Big Headline styled after image 2 */}
            <h1 className="font-crunch text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Crispy Flavor, <br />
              Delivered{' '}
              <span className="text-orange-500 italic font-serif">
                Fast
              </span>
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base font-medium max-w-md">
              Hot, crunchy & made fresh for you. Triple-dusted with secret blend of 14 southern spices.
            </p>

            {/* Quick Metrics */}
            <div className="pt-2 flex items-center gap-6 text-xs font-mono text-neutral-400">
              <div>
                <span className="text-white font-bold">18–25 min</span> avg delivery
              </div>
              <div>·</div>
              <div>
                <span className="text-amber-400 font-bold">4.9 ★</span> (12K+ reviews)
              </div>
            </div>

          </div>
        </div>

        {/* Floating Search Bar */}
        <div className="mt-6 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for meals, combos, drinks..."
              className="w-full pl-11 pr-4 py-3 bg-neutral-900/90 border border-neutral-800 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner"
            />
          </div>

          <button
            onClick={() => showNotification('Dietary filters: Spicy, Non-Spicy, Halal, Gluten-Free')}
            className="p-3 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl transition-colors shadow-lg shadow-orange-600/20 active:scale-95 shrink-0 cursor-pointer"
            title="Filter preferences"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
