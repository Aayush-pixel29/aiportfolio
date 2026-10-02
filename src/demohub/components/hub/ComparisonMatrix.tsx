'use client';

import React from 'react';
import { Layers, Palette, Shield, Sparkles } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const rows = [
    {
      feature: 'Target Domain',
      salon: 'Gentleman Barbershop & Salon',
      restaurant: 'Fast Casual / Burger & Fried Chicken',
      clinic: 'Luxury Cosmetic Dental Practice'
    },
    {
      feature: 'Design Language',
      salon: 'Dark Noir & Crimson (#E50914), Oswald Display',
      restaurant: 'Energetic Charcoal & Sizzling Orange (#FF6400), Outfit Sans',
      clinic: 'Scandinavian Ivory & Forest Emerald (#0D2B24), Playfair Serif'
    },
    {
      feature: 'Key Interactive Workflow',
      salon: 'Master Barber & Grooming Service Booking',
      restaurant: 'Interactive Menu, Slide-Over Cart Drawer, Live Courier Tracker',
      clinic: 'Specialist Doctor Consultation Scheduling & Smile Analysis'
    },
    {
      feature: 'Commerce & Orders',
      salon: 'Service Menu with starting rates ($30+)',
      restaurant: 'Dynamic Cart Subtotal, 25% Promo Codes, Real-Time Delivery ETA',
      clinic: 'Treatment Packages & Free Smile Evaluation'
    },
    {
      feature: 'Responsive Layout',
      salon: 'High-contrast desktop editorial with touch drawer',
      restaurant: 'App-like bottom navigation with elevated order floating action',
      clinic: 'Airy luxury layout with sticky booking pill'
    }
  ];

  return (
    <section className="py-16 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
            <Layers className="w-4 h-4" />
            <span>Prototype Comparison Matrix</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Tailored UX Patterns per Industry
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl font-light">
            Each category was crafted from domain-first principles to demonstrate how the same clean React codebase adapts to drastically different client requirements.
          </p>
        </div>

        <div className="bg-neutral-900/90 rounded-2xl border border-neutral-800 overflow-x-auto shadow-xl">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="bg-neutral-950 border-b border-neutral-800 text-neutral-400">
                <th className="p-4 sm:p-5 font-semibold font-mono">Core Dimension</th>
                <th className="p-4 sm:p-5 font-bold text-red-400">Barbercrop Salon</th>
                <th className="p-4 sm:p-5 font-bold text-orange-400">Crunch Restaurant</th>
                <th className="p-4 sm:p-5 font-bold text-emerald-400">Evermiles Clinic</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {rows.map((row) => (
                <tr key={row.feature} className="hover:bg-neutral-800/40 transition-colors">
                  <td className="p-4 sm:p-5 font-mono text-neutral-300 font-semibold bg-neutral-950/40">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-neutral-200">
                    {row.salon}
                  </td>
                  <td className="p-4 sm:p-5 text-neutral-200">
                    {row.restaurant}
                  </td>
                  <td className="p-4 sm:p-5 text-neutral-200">
                    {row.clinic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
