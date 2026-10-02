'use client';

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Layers, ArrowRight, ExternalLink, ShieldCheck, Sparkles, CheckCircle2, GitBranch, Globe, Play } from 'lucide-react';
import { PrototypeRoute } from '../../types';

export const HubHero: React.FC = () => {
  const { navigateTo, openModal } = useDemo();

  return (
    <section className="relative pt-16 pb-14 overflow-hidden border-b border-neutral-800 bg-neutral-950">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/10 via-amber-500/5 to-transparent pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Kicker Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>EXECUTIVE CLIENT DEMO PORTFOLIO</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <GitBranch className="w-3.5 h-3.5" />
            <span>1 GitHub Repo · 3 Full Website Demos</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>High-Res Photography & Ready-To-Use</span>
          </div>
        </div>

        {/* Big Display Headline */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            3 Production Website Prototypes. <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              One Single Modular Repository.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed font-light">
            Engineered specifically for client presentations across Salon, Restaurant, and Clinic industries. Each prototype features realistic photography, tailored modular styling, and interactive business workflows.
          </p>

          {/* Quick action buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#live-stage"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Test Interactive Demos Below</span>
            </a>

            <button
              onClick={() => openModal('specs')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              <span>View Folder Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Live URL & Status Table */}
        <div className="mt-12 bg-neutral-900/90 rounded-2xl border border-neutral-800 p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-800 gap-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Production Routes & Deployment Status</span>
              </h3>
              <p className="text-xs text-neutral-400">Live URL mapping with direct routes for clients</p>
            </div>

            <button
              onClick={() => openModal('specs')}
              className="text-xs font-mono text-amber-400 hover:text-amber-300 underline font-medium self-start sm:self-auto cursor-pointer"
            >
              View GitHub & Vercel Config →
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="text-neutral-500 border-b border-neutral-800/80 pb-2">
                  <th className="pb-2 font-medium">Prototype / Route</th>
                  <th className="pb-2 font-medium">Production Live URL</th>
                  <th className="pb-2 font-medium">Industry Focus</th>
                  <th className="pb-2 font-medium text-center">Status</th>
                  <th className="pb-2 font-medium text-right">Demo Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/50">
                
                {/* Hub */}
                <tr className="hover:bg-neutral-800/30 transition-colors">
                  <td className="py-3.5 font-bold text-white">Demo Hub</td>
                  <td className="py-3.5 text-neutral-400">aiportfolio-kappa.vercel.app/demo</td>
                  <td className="py-3.5 text-neutral-400 font-sans">Multi-Client Portal</td>
                  <td className="py-3.5 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <span className="text-neutral-500 font-sans font-medium">Current Page</span>
                  </td>
                </tr>

                {/* Salon */}
                <tr className="hover:bg-neutral-800/30 transition-colors">
                  <td className="py-3.5 font-bold text-red-400">Salon Prototype</td>
                  <td className="py-3.5 text-neutral-300">aiportfolio-kappa.vercel.app/demo/salon</td>
                  <td className="py-3.5 text-neutral-400 font-sans">Barbercrop Luxury Salon</td>
                  <td className="py-3.5 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => navigateTo('salon')}
                      className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-sans text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Open Salon →
                    </button>
                  </td>
                </tr>

                {/* Restaurant */}
                <tr className="hover:bg-neutral-800/30 transition-colors">
                  <td className="py-3.5 font-bold text-orange-400">Restaurant Prototype</td>
                  <td className="py-3.5 text-neutral-300">aiportfolio-kappa.vercel.app/demo/restaurant</td>
                  <td className="py-3.5 text-neutral-400 font-sans">Crunch Fast Casual</td>
                  <td className="py-3.5 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => navigateTo('restaurant')}
                      className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-sans text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Open Restaurant →
                    </button>
                  </td>
                </tr>

                {/* Clinic */}
                <tr className="hover:bg-neutral-800/30 transition-colors">
                  <td className="py-3.5 font-bold text-emerald-400">Clinic Prototype</td>
                  <td className="py-3.5 text-neutral-300">aiportfolio-kappa.vercel.app/demo/clinic</td>
                  <td className="py-3.5 text-neutral-400 font-sans">Evermiles Dental Clinic</td>
                  <td className="py-3.5 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => navigateTo('clinic')}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Open Clinic →
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
