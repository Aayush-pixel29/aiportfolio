'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, Plus, Check, Sparkles, Flame } from 'lucide-react';

export interface DisplayItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  durationMinutes?: number;
  prepTime?: string;
  isVeg?: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  tag?: string;
  spiciness?: 'mild' | 'medium' | 'spicy';
  image?: string;
}

interface DemoServicesGridProps {
  title: string;
  subtitle: string;
  categories: { id: string; name: string }[];
  items: DisplayItem[];
  selectedItemIds?: string[];
  onSelectItem: (item: DisplayItem) => void;
  ctaButtonText?: string;
  isFoodMenu?: boolean;
  currencySymbol?: string;
  accentColor?: 'rose' | 'amber' | 'cyan' | 'emerald';
}

export const DemoServicesGrid: React.FC<DemoServicesGridProps> = ({
  title,
  subtitle,
  categories,
  items,
  selectedItemIds = [],
  onSelectItem,
  ctaButtonText = 'Select',
  isFoodMenu = false,
  currencySymbol = '₹',
  accentColor = 'rose',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  const getAccentClass = () => {
    switch (accentColor) {
      case 'amber':
        return {
          pillActive: 'bg-amber-500 text-black font-semibold shadow-amber-500/20',
          btnActive: 'bg-amber-500 hover:bg-amber-400 text-black',
          cardHover: 'hover:border-amber-500/40',
          tag: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        };
      case 'cyan':
        return {
          pillActive: 'bg-cyan-500 text-black font-semibold shadow-cyan-500/20',
          btnActive: 'bg-cyan-500 hover:bg-cyan-400 text-black',
          cardHover: 'hover:border-cyan-500/40',
          tag: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        };
      case 'emerald':
        return {
          pillActive: 'bg-emerald-500 text-black font-semibold shadow-emerald-500/20',
          btnActive: 'bg-emerald-500 hover:bg-emerald-400 text-black',
          cardHover: 'hover:border-emerald-500/40',
          tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        };
      case 'rose':
      default:
        return {
          pillActive: 'bg-rose-500 text-white font-semibold shadow-rose-500/20',
          btnActive: 'bg-rose-500 hover:bg-rose-400 text-white',
          cardHover: 'hover:border-rose-500/40',
          tag: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
        };
    }
  };

  const style = getAccentClass();

  return (
    <section id="services-grid" className="py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        {categories.length > 0 && (
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
                activeCategory === 'all'
                  ? style.pillActive
                  : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
              }`}
            >
              All Offerings ({items.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
                  activeCategory.toLowerCase() === cat.id.toLowerCase()
                    ? style.pillActive
                    : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isSelected = selectedItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`group flex flex-col justify-between rounded-3xl bg-[#121318] border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-2xl ${style.cardHover} ${
                  isSelected ? 'ring-2 ring-emerald-400/50 bg-[#161822]' : ''
                }`}
              >
                <div>
                  {/* Card Image Header (if item has an image) */}
                  {item.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent opacity-80" />

                      {/* Overlaid Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                        {isFoodMenu && typeof item.isVeg === 'boolean' && (
                          <span
                            className={`inline-flex items-center justify-center w-5 h-5 rounded-md bg-black/60 backdrop-blur-md border ${
                              item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                            }`}
                            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                          >
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${
                                item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                              }`}
                            />
                          </span>
                        )}

                        {item.tag && (
                          <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold backdrop-blur-md ${style.tag}`}>
                            {item.tag}
                          </span>
                        )}

                        {item.isChefSpecial && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-amber-500/30 bg-black/60 text-amber-300 font-bold backdrop-blur-md inline-flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" /> Chef Special
                          </span>
                        )}
                      </div>

                      {(item.durationMinutes || item.prepTime) && (
                        <div className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/15 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-400" />
                          {item.durationMinutes ? `${item.durationMinutes} mins` : item.prepTime}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-5 sm:p-6 space-y-3">
                    {/* Top Bar for cards without images */}
                    {!item.image && (
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          {isFoodMenu && typeof item.isVeg === 'boolean' && (
                            <span
                              className={`inline-flex items-center justify-center w-4 h-4 rounded-sm border ${
                                item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                              }`}
                              title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                                }`}
                              />
                            </span>
                          )}

                          {item.tag && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${style.tag}`}>
                              {item.tag}
                            </span>
                          )}

                          {item.isChefSpecial && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-medium inline-flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" /> Chef Special
                            </span>
                          )}

                          {item.spiciness && item.spiciness !== 'mild' && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 font-medium inline-flex items-center gap-1">
                              <Flame className="w-2.5 h-2.5" /> {item.spiciness}
                            </span>
                          )}
                        </div>

                        {(item.durationMinutes || item.prepTime) && (
                          <span className="text-[11px] text-zinc-400 flex items-center gap-1 shrink-0">
                            <Clock className="w-3 h-3 text-zinc-500" />
                            {item.durationMinutes ? `${item.durationMinutes} mins` : item.prepTime}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Name & Description */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-white">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Price & Select CTA */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 flex items-center justify-between gap-3 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
                      Price
                    </span>
                    <span className="text-lg font-extrabold text-white tracking-tight">
                      {currencySymbol}{item.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                      isSelected
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                        : `${style.btnActive} shadow-md`
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Selected</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>{ctaButtonText}</span>
                      </>
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
