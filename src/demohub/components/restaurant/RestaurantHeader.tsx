'use client';

import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Menu, ChevronDown, Bell, ShoppingBag, MapPin, ChefHat } from 'lucide-react';

export const RestaurantHeader: React.FC = () => {
  const { cartCount, openModal, showNotification } = useDemo();
  const [selectedAddress, setSelectedAddress] = useState('Home · Bandra West, Mumbai');
  const [showAddressDropdown, setShowAddressDropdown] = useState(false);

  const addresses = [
    'Home · Bandra West, Mumbai',
    'Office · BKC Trade Centre, Mumbai',
    'Apartment · Indiranagar, Bengaluru'
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F0F12]/95 border-b border-neutral-800/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Left: Location delivery selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => showNotification('Navigation menu opened')}
            className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-xl transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowAddressDropdown(!showAddressDropdown)}
              className="text-left flex flex-col group cursor-pointer"
            >
              <span className="text-[11px] text-neutral-400 font-medium">Deliver to</span>
              <div className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                <span className="truncate max-w-[150px] sm:max-w-[200px]">
                  {selectedAddress.split('·')[0]}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-orange-500" />
              </div>
            </button>

            {/* Address dropdown */}
            {showAddressDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl py-2 z-50 animate-fade-in">
                <div className="px-3 py-1.5 text-[10px] uppercase font-mono text-neutral-400 tracking-wider">
                  Saved Delivery Addresses
                </div>
                {addresses.map(addr => (
                  <button
                    key={addr}
                    onClick={() => {
                      setSelectedAddress(addr);
                      setShowAddressDropdown(false);
                      showNotification(`Delivery address updated to ${addr}`);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800 flex items-center gap-2 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="truncate">{addr}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center: Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <div className="w-9 h-9 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-500 shadow-lg shadow-orange-600/10">
            <ChefHat className="w-5 h-5" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-crunch text-xl font-extrabold tracking-tight text-white leading-none">
              CRUNCH<span className="text-orange-500">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono">
              Fast Casual
            </span>
          </div>
        </div>

        {/* Right: Notifications & Cart */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button
            onClick={() => showNotification('3 active offers: 25% off bucket combo, Free Drink on orders > $20, 2x Crunch Points')}
            className="relative p-2 text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-xl transition-colors"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => openModal('restaurant-cart')}
            className="relative flex items-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-crunch font-semibold text-xs transition-all shadow-lg shadow-orange-600/20 active:scale-95"
            title="Open Order Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-bold">{cartCount}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
