'use client';

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { X, Check, FolderTree, Terminal, Rocket, Globe, Layers } from 'lucide-react';

export const SpecsModal: React.FC = () => {
  const { activeModal, closeModal } = useDemo();

  if (activeModal !== 'specs') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Project Architecture & Folder Structure</h3>
              <p className="text-xs text-neutral-400">3-in-1 Multi-Prototype Codebase optimized for GitHub & Vercel</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-300">
          {/* Summary */}
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
              <Rocket className="w-3.5 h-3.5" /> Client Production Routes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-400">Demo Hub:</span>
                <span className="text-white font-semibold">/demo</span>
              </div>
              <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-400">Salon Prototype:</span>
                <span className="text-red-400 font-semibold">/demo/salon</span>
              </div>
              <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-400">Restaurant Prototype:</span>
                <span className="text-orange-400 font-semibold">/demo/restaurant</span>
              </div>
              <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex items-center justify-between">
                <span className="text-neutral-400">Clinic Prototype:</span>
                <span className="text-emerald-400 font-semibold">/demo/clinic</span>
              </div>
            </div>
          </div>

          {/* Clean Directory Structure */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
              <FolderTree className="w-3.5 h-3.5 text-neutral-500" /> Modular Folder Organization
            </h4>
            <pre className="bg-black/90 p-4 rounded-xl text-xs font-mono text-neutral-300 border border-neutral-800 overflow-x-auto leading-relaxed">
{`├── vercel.json                 # SPA rewrites config for instant /demo/* routing
├── index.html                  # Multi-brand font loaders & meta tags
├── package.json                # React 19, Tailwind CSS v4, Lucide
└── src/
    ├── App.tsx                 # Master router & device viewport manager
    ├── index.css               # Modular design tokens & typography rules
    ├── types/index.ts          # Centralized data contracts & models
    ├── context/DemoContext.tsx # Route sync, cart state & booking modals
    ├── data/prototypesData.ts  # Isolated data records for each prototype
    └── components/
        ├── common/             # Client demo bar, device frame & modals
        │   ├── ClientDemoBar.tsx
        │   ├── DeviceFrame.tsx
        │   └── SpecsModal.tsx
        ├── hub/                # Multi-client showcase portal (/demo)
        │   ├── HubHero.tsx
        │   ├── PrototypeCard.tsx
        │   ├── ComparisonMatrix.tsx
        │   └── DeploymentGuide.tsx
        ├── salon/              # Barbercrop website (/demo/salon)
        │   ├── SalonHeader.tsx
        │   ├── SalonHero.tsx
        │   ├── SalonServices.tsx
        │   ├── SalonSchedule.tsx
        │   ├── SalonBlog.tsx
        │   └── SalonBookingModal.tsx
        ├── restaurant/         # Crunch Fast Casual (/demo/restaurant)
        │   ├── RestaurantHeader.tsx
        │   ├── CategoryFilter.tsx
        │   ├── SignatureDishes.tsx
        │   ├── FamilyBundles.tsx
        │   ├── LiveTracker.tsx
        │   └── RestaurantCartDrawer.tsx
        └── clinic/             # Evermiles Dental Clinic (/demo/clinic)
            ├── ClinicHeader.tsx
            ├── ClinicHero.tsx
            ├── ClinicPillars.tsx
            ├── ClinicServices.tsx
            ├── ClinicAbout.tsx
            ├── ClinicTestimonials.tsx
            └── ClinicBookingModal.tsx`}
            </pre>
          </div>

          {/* Quick Deployment Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-neutral-500" /> GitHub & Vercel 1-Click Deployment
            </h4>
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2 text-xs font-mono">
              <div className="text-neutral-400"># 1. Initialize Git and commit project</div>
              <div className="text-emerald-400">git init && git add . && git commit -m "feat: 3-in-1 multi-client prototypes"</div>
              <div className="text-neutral-400 pt-1"># 2. Push to your GitHub repo</div>
              <div className="text-emerald-400">git remote add origin https://github.com/your-username/aiportfolio.git</div>
              <div className="text-emerald-400">git push -u origin main</div>
              <div className="text-neutral-400 pt-1"># 3. Deploy to Vercel (Auto-detected via vercel.json)</div>
              <div className="text-amber-400">vercel --prod</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs">
          <span className="text-neutral-500">All 3 prototypes fully interactive with stateful forms & drawers</span>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg transition-colors"
          >
            Close Specs
          </button>
        </div>
      </div>
    </div>
  );
};
