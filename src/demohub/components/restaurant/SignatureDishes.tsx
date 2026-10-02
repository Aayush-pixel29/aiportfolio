'use client';

import React from 'react';
import { SIGNATURE_DISHES } from '../../data/prototypesData';
import { Plus, Star, ChevronRight } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { SafeImage } from '../common/SafeImage';

interface SignatureDishesProps {
  filterCategory?: string;
  searchQuery?: string;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ filterCategory, searchQuery }) => {
  const { addToCart, cart, showNotification } = useDemo();

  const filtered = SIGNATURE_DISHES.filter(dish => {
    if (searchQuery && !dish.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filterCategory && filterCategory !== 'all' && filterCategory !== 'chicken' && dish.category !== filterCategory) {
      return true;
    }
    return true;
  });

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-crunch text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Signature Dishes
            </h2>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          </div>

          <button
            onClick={() => showNotification('Viewing all 24 signature dishes')}
            className="flex items-center gap-0.5 text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors cursor-pointer"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Dish Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((item) => {
            const inCart = cart.find(c => c.id === item.id);

            return (
              <div
                key={item.id}
                className="group bg-neutral-900/90 border border-neutral-800/90 rounded-2xl p-3 sm:p-4 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/10"
              >
                {/* Visual Representation with Delicious Real Food Photo */}
                <div className="relative aspect-square w-full rounded-xl bg-neutral-950 overflow-hidden mb-3">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    containerClassName="w-full h-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Bestseller Badge */}
                  <span className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 bg-yellow-400/90 text-neutral-950 font-crunch font-extrabold text-[10px] tracking-wider rounded-md uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Info & Price */}
                <div className="space-y-1">
                  <h3 className="font-crunch text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 line-clamp-1">
                    {item.description}
                  </p>
                </div>

                {/* Price & Add to Cart button */}
                <div className="pt-3 mt-2 flex items-center justify-between">
                  <span className="font-crunch text-sm sm:text-base font-extrabold text-white">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>

                  <button
                    onClick={() => addToCart({ id: item.id, name: item.title, price: item.price, image: item.image })}
                    className="p-2 bg-orange-600 hover:bg-orange-500 active:scale-90 text-white rounded-xl transition-all shadow-md shadow-orange-600/20 cursor-pointer"
                    title={`Add ${item.title} to cart`}
                  >
                    {inCart ? (
                      <span className="text-xs font-bold font-mono px-1">+{inCart.quantity}</span>
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
