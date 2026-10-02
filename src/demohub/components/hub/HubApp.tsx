'use client';

import React from 'react';
import { HubHero } from './HubHero';
import { HubLivePreview } from './HubLivePreview';
import { PrototypeCard } from './PrototypeCard';
import { ComparisonMatrix } from './ComparisonMatrix';
import { DeploymentGuide } from './DeploymentGuide';
import { PROTOTYPE_SPECS } from '../../data/prototypesData';
import { Sparkles, Layers } from 'lucide-react';

export const HubApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Executive Hero */}
      <HubHero />

      {/* Embedded Interactive Live Website Demo Sandbox */}
      <div id="live-stage">
        <HubLivePreview />
      </div>

      {/* 3 Prototype Showcase Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Curated Prototype Index</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Specifications & Architecture
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl font-light">
            Each application includes independent stateful business logic: cart calculation with discount vouchers, barber seat reservations, and dental specialty consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PrototypeCard spec={PROTOTYPE_SPECS.salon} />
          <PrototypeCard spec={PROTOTYPE_SPECS.restaurant} />
          <PrototypeCard spec={PROTOTYPE_SPECS.clinic} />
        </div>
      </section>

      {/* Cross-Industry Comparison Matrix */}
      <ComparisonMatrix />

      {/* GitHub & Vercel 1-Click Deployment Guide */}
      <DeploymentGuide />

      {/* Global Demo Hub Footer */}
      <footer className="py-12 bg-neutral-950 text-neutral-500 text-xs border-t border-neutral-900 font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>3-in-1 Multi-Prototype Codebase · Ready for GitHub & Vercel</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="/demo/salon" className="hover:text-white transition-colors">Salon (/demo/salon)</a>
            <span>·</span>
            <a href="/demo/restaurant" className="hover:text-white transition-colors">Restaurant (/demo/restaurant)</a>
            <span>·</span>
            <a href="/demo/clinic" className="hover:text-white transition-colors">Clinic (/demo/clinic)</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
