'use client';

import React from 'react';
import { Sparkles, Heart, Plus, Flame, ArrowRight } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { SafeImage } from '../common/SafeImage';

export const ChefSpecials: React.FC = () => {
  const { addToCart, showNotification } = useDemo();

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Left: Chef Specials Card */}
          <div className="bg-neutral-900/90 border border-neutral-800/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium mb-1">
                  <span>Made with</span>
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  <span>by our master chefs</span>
                </div>
                <h3 className="font-crunch text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Chef Specials
                </h3>
              </div>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-crunch text-base sm:text-lg font-bold text-white">
                  Hot Honey Chicken
                </h4>
                <p className="text-xs text-neutral-400 max-w-xs">
                  Crispy whole chicken pieces drizzled with habanero wildflower hot honey glaze.
                </p>
                <div className="pt-2 font-crunch text-xl font-extrabold text-white">
                  ₹349
                </div>
              </div>

              {/* Dish Visual & Add button */}
              <div className="relative w-24 h-24 rounded-xl bg-neutral-950 overflow-hidden shrink-0 border border-neutral-800">
                <SafeImage
                  src="https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=400&q=80"
                  alt="Hot Honey Chicken"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <button
                  onClick={() => addToCart({ id: 'hot-honey-chicken', name: 'Hot Honey Chicken', price: 349, image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=400&q=80' })}
                  className="absolute bottom-1.5 right-1.5 w-7 h-7 bg-orange-600 hover:bg-orange-500 text-white rounded-lg flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer"
                  title="Add Hot Honey Chicken"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Weekend Crunch Fest Banner with Real Sizzling Food Photo Scrim */}
          <div className="relative rounded-2xl p-6 sm:p-8 text-neutral-950 flex flex-col justify-between shadow-xl overflow-hidden group min-h-[180px]">
            <SafeImage
              src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
              alt="Weekend Crunch Fest Chicken Platter"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              containerClassName="absolute inset-0 w-full h-full"
            />
            {/* Vibrant orange gradient scrim matching image 2 */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/95 via-orange-600/90 to-amber-600/70 pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <span className="inline-block px-2.5 py-0.5 bg-black/25 text-white text-[10px] font-crunch font-extrabold uppercase rounded tracking-wider">
                Limited Time Offer
              </span>
              <h3 className="font-crunch text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-tight">
                WEEKEND <br />
                CRUNCH FEST
              </h3>
              <p className="text-white/95 font-bold text-sm">
                Up to 25% OFF on selected items
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <button
                onClick={() => showNotification('Promo code CRUNCH25 applied! 25% discount active on cart.')}
                className="px-6 py-2.5 bg-neutral-950 hover:bg-neutral-900 text-white rounded-xl font-crunch font-bold text-xs tracking-wider transition-all shadow-lg group-hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
