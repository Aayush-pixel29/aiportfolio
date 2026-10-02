'use client';

import React from 'react';
import { FAMILY_BUNDLES } from '../../data/prototypesData';
import { Users, ArrowRight, ChevronRight } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { SafeImage } from '../common/SafeImage';

export const FamilyBundles: React.FC = () => {
  const { addToCart, showNotification } = useDemo();

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-500" />
            <h2 className="font-crunch text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Family Bundles
            </h2>
            <span className="hidden sm:inline text-xs font-semibold text-amber-400 italic">
              Perfect for sharing!
            </span>
          </div>

          <button
            onClick={() => showNotification('Viewing all combo bundles')}
            className="flex items-center gap-0.5 text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors cursor-pointer"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2 Bundle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {FAMILY_BUNDLES.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-neutral-900/90 border border-neutral-800/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-orange-600/10"
            >
              {/* Bundle Info */}
              <div className="space-y-3 flex-1 w-full sm:w-auto">
                <span className="inline-block px-2.5 py-0.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 font-crunch font-bold text-[10px] uppercase rounded-md tracking-wider">
                  {bundle.badge}
                </span>

                <div>
                  <h3 className="font-crunch text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {bundle.name}
                  </h3>
                  <p className="text-xs text-neutral-300 font-medium mt-1">
                    {bundle.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-crunch text-2xl font-black text-white">
                    ₹{bundle.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    · {bundle.serves}
                  </span>
                </div>
              </div>

              {/* Graphic Representation + Add Circle Action */}
              <div className="relative w-full sm:w-36 h-28 sm:h-32 rounded-xl bg-neutral-950 flex items-center justify-center overflow-hidden shrink-0 border border-neutral-800">
                <SafeImage
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  containerClassName="w-full h-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Direct Action Circle button matching image 2 */}
                <button
                  onClick={() => addToCart({ id: bundle.id, name: bundle.name, price: bundle.price, options: bundle.description, image: bundle.image })}
                  className="absolute bottom-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-white hover:bg-orange-500 hover:text-white text-neutral-900 flex items-center justify-center shadow-lg transition-colors group-hover:scale-105 cursor-pointer"
                  title={`Add ${bundle.name} to cart`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
