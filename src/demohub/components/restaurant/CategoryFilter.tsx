'use client';

import React from 'react';
import { RESTAURANT_CATEGORIES } from '../../data/prototypesData';

interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="py-4 overflow-x-auto no-scrollbar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-3 min-w-max">
        {RESTAURANT_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center justify-center w-20 sm:w-24 h-22 sm:h-24 rounded-2xl p-2.5 transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105'
                  : 'bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800/80'
              }`}
            >
              <span className="text-2xl mb-1 select-none">{cat.icon}</span>
              <span className="text-xs font-crunch font-semibold tracking-tight text-center leading-tight">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
