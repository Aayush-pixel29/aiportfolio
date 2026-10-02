'use client';

import React, { useState } from 'react';
import { Home, UtensilsCrossed, ShoppingBag, Tag, User } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const BottomNav: React.FC = () => {
  const { openModal, cartCount, showNotification } = useDemo();
  const [activeTab, setActiveTab] = useState<'home' | 'menu' | 'deals' | 'profile'>('home');

  return (
    <div className="sticky bottom-0 z-40 bg-[#0C0C0F]/95 border-t border-neutral-800/80 backdrop-blur-lg px-6 py-2">
      <div className="max-w-md mx-auto flex items-center justify-between relative">
        
        {/* Home */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 text-[11px] font-crunch transition-colors ${
            activeTab === 'home' ? 'text-orange-500 font-bold' : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        {/* Menu */}
        <button
          onClick={() => {
            setActiveTab('menu');
            showNotification('Browse full menu categories');
          }}
          className={`flex flex-col items-center gap-1 text-[11px] font-crunch transition-colors ${
            activeTab === 'menu' ? 'text-orange-500 font-bold' : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          <UtensilsCrossed className="w-5 h-5" />
          <span>Menu</span>
        </button>

        {/* Elevated Floating Order Action Button */}
        <div className="-mt-7">
          <button
            onClick={() => openModal('restaurant-cart')}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white flex flex-col items-center justify-center shadow-xl shadow-orange-600/40 ring-4 ring-[#0C0C0F] transition-all hover:scale-105 active:scale-95"
            title="Open Order"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="text-[9px] font-crunch font-extrabold uppercase mt-0.5">
              Order
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-neutral-950 text-orange-400 text-[10px] font-bold rounded-full border-2 border-orange-500 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Deals */}
        <button
          onClick={() => {
            setActiveTab('deals');
            showNotification('Active: Weekend Crunch Fest 25% OFF');
          }}
          className={`flex flex-col items-center gap-1 text-[11px] font-crunch transition-colors ${
            activeTab === 'deals' ? 'text-orange-500 font-bold' : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          <Tag className="w-5 h-5" />
          <span>Deals</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => {
            setActiveTab('profile');
            showNotification('Logged in as Guest · 1,250 Crunch Points');
          }}
          className={`flex flex-col items-center gap-1 text-[11px] font-crunch transition-colors ${
            activeTab === 'profile' ? 'text-orange-500 font-bold' : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </button>

      </div>
    </div>
  );
};
