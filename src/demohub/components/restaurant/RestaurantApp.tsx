'use client';

import React, { useState } from 'react';
import { RestaurantHeader } from './RestaurantHeader';
import { RestaurantHero } from './RestaurantHero';
import { CategoryFilter } from './CategoryFilter';
import { SignatureDishes } from './SignatureDishes';
import { FamilyBundles } from './FamilyBundles';
import { ChefSpecials } from './ChefSpecials';
import { LiveTracker } from './LiveTracker';
import { BottomNav } from './BottomNav';
import { RestaurantCartDrawer } from './RestaurantCartDrawer';

export const RestaurantApp: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('chicken');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#0F0F12] text-white font-crunch selection:bg-orange-600/30 selection:text-orange-200 flex flex-col justify-between">
      <RestaurantHeader />
      <main className="flex-1 pb-12">
        <RestaurantHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryFilter activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
        <SignatureDishes filterCategory={activeCategory} searchQuery={searchQuery} />
        <FamilyBundles />
        <ChefSpecials />
        <LiveTracker />
      </main>
      <BottomNav />
      <RestaurantCartDrawer />
    </div>
  );
};
