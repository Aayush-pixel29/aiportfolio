'use client';

import React, { useState } from 'react';
import { CheckCircle2, ChefHat, Bike, Home, Gift, Coins, ChevronRight, X, MapPin } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const LiveTracker: React.FC = () => {
  const { showNotification } = useDemo();
  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Card 1: Live Order Tracker */}
          <div className="bg-neutral-900/90 border border-neutral-800/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-crunch text-lg sm:text-xl font-bold text-white tracking-tight">
                  Live Order Tracker
                </h3>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs text-orange-400 font-medium">
                Your order is on the way!
              </p>
            </div>

            {/* Stepper with icons */}
            <div className="my-6 relative">
              <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 bg-neutral-800 z-0" />
              
              <div className="relative z-10 flex items-center justify-between">
                {/* Step 1: Confirmed */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center font-bold text-xs shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1.5">Confirmed</span>
                </div>

                {/* Step 2: Preparing (Active) */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-orange-600/40 ring-4 ring-orange-950">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-crunch font-bold text-orange-400 mt-1">Preparing</span>
                </div>

                {/* Step 3: On the way */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-500 flex items-center justify-center text-xs">
                    <Bike className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 mt-1.5">On the way</span>
                </div>

                {/* Step 4: Delivered */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-500 flex items-center justify-center text-xs">
                    <Home className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 mt-1.5">Delivered</span>
                </div>
              </div>
            </div>

            {/* Footer with ETA & Button */}
            <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-neutral-400">Estimated Arrival: </span>
                <span className="text-xs font-mono font-bold text-white">18–22 min</span>
              </div>

              <button
                onClick={() => setShowDetailModal(true)}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-xl font-crunch font-semibold text-xs transition-colors"
              >
                Track Order
              </button>
            </div>
          </div>

          {/* Card 2: Crunch Rewards */}
          <div className="bg-neutral-900/90 border border-neutral-800/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-crunch text-lg sm:text-xl font-bold text-white tracking-tight">
                  Crunch Rewards
                </h3>
                <Gift className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-xs text-neutral-400">
                Earn points. Get delicious rewards!
              </p>
            </div>

            {/* Points & Progress */}
            <div className="my-5 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] text-neutral-400">Your Points</div>
                  <div className="flex items-center gap-1.5 font-crunch text-2xl font-black text-amber-400">
                    <span>1,250</span>
                    <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-neutral-400">Next Reward</div>
                  <div className="font-crunch text-sm font-bold text-neutral-300">
                    2,000 pts · Free 6pc Wings
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500"
                  style={{ width: '62.5%' }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                <span>750 pts to unlock</span>
                <span>Tier: Gold Cruncher</span>
              </div>
            </div>

            {/* Footer with Button */}
            <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-medium">Earn +10 pts per ₹100 spent</span>
              <button
                onClick={() => showNotification('Crunch Rewards catalog: 1,500 pts = Free Loaded Fries, 2,000 pts = 6pc Wings')}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-xl font-crunch font-semibold text-xs transition-colors"
              >
                View Rewards
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Live Map Tracking Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-orange-500" />
                <h4 className="font-crunch font-bold text-sm text-white">Live Courier GPS #CR-8821</h4>
              </div>
              <button onClick={() => setShowDetailModal(false)} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Live Map */}
            <div className="relative h-48 bg-neutral-950 overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full object-cover" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="200" fill="#141419" />
                {/* Street grid */}
                <path d="M0 60 L400 60 M0 120 L400 120 M0 180 L400 180" stroke="#25252D" strokeWidth="6" />
                <path d="M80 0 L80 200 M180 0 L180 200 M280 0 L280 200" stroke="#25252D" strokeWidth="6" />
                {/* Route Path in glowing orange */}
                <path d="M80 60 L180 60 L180 120 L280 120" stroke="#FF6400" strokeWidth="4" strokeDasharray="6 4" />
                {/* Kitchen Origin */}
                <circle cx="80" cy="60" r="8" fill="#FF6400" />
                {/* Courier Bike */}
                <circle cx="210" cy="120" r="10" fill="#FFF" stroke="#FF6400" strokeWidth="3" />
                {/* Destination */}
                <circle cx="280" cy="120" r="8" fill="#4CAF50" />
              </svg>
              <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 border border-neutral-800">
                Courier: Sameer K. (EV Two-Wheeler)
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Order Items:</span>
                <span className="text-white font-medium">1x Crispy Bucket, 1x Spicy Burger</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Status:</span>
                <span className="text-orange-400 font-bold">Frying to perfection (3 min left)</span>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                className="w-full mt-2 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-crunch font-bold text-xs"
              >
                Close Tracking
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
