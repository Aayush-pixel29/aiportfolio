'use client';

import React, { useState } from 'react';
import { PrototypeRoute, DeviceMode } from '../../types';
import { useDemo } from '../../context/DemoContext';
import { SalonApp } from '../salon/SalonApp';
import { RestaurantApp } from '../restaurant/RestaurantApp';
import { ClinicApp } from '../clinic/ClinicApp';
import {
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Scissors,
  ChefHat,
  HeartPulse,
  Eye
} from 'lucide-react';

export const HubLivePreview: React.FC = () => {
  const { navigateTo, showNotification } = useDemo();
  const [selectedTab, setSelectedTab] = useState<Exclude<PrototypeRoute, 'hub'>>('salon');
  const [previewViewport, setPreviewViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  const tabs: {
    id: Exclude<PrototypeRoute, 'hub'>;
    name: string;
    client: string;
    path: string;
    color: string;
    icon: React.ReactNode;
    tagline: string;
  }[] = [
    {
      id: 'salon',
      name: 'Barbercrop Salon',
      client: 'Luxury Barbershop Atelier',
      path: '/demo/salon',
      color: 'border-red-500/40 text-red-400 bg-red-950/20',
      icon: <Scissors className="w-4 h-4 text-red-500" />,
      tagline: 'Precision Barbering & Men Grooming'
    },
    {
      id: 'restaurant',
      name: 'Crunch Restaurant',
      client: 'Fast Casual Ordering App',
      path: '/demo/restaurant',
      color: 'border-orange-500/40 text-orange-400 bg-orange-950/20',
      icon: <ChefHat className="w-4 h-4 text-orange-500" />,
      tagline: 'Crispy Flavor, Delivered Fast with Live Tracker'
    },
    {
      id: 'clinic',
      name: 'Evermiles Dental',
      client: 'Cosmetic & Clinical Care',
      path: '/demo/clinic',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20',
      icon: <HeartPulse className="w-4 h-4 text-emerald-500" />,
      tagline: 'Modern Dental Care for a Healthier You'
    }
  ];

  const currentTabInfo = tabs.find(t => t.id === selectedTab)!;

  const handleCopyLink = () => {
    const fullUrl = `https://aiportfolio-kappa.vercel.app${currentTabInfo.path}`;
    navigator.clipboard?.writeText(fullUrl).then(() => {
      setCopied(true);
      showNotification(`Copied: ${fullUrl}`);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const viewportWidths = {
    desktop: 'w-full max-w-[1280px]',
    tablet: 'w-full max-w-[768px]',
    mobile: 'w-full max-w-[390px]'
  };

  return (
    <section className="py-16 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400">
              <Eye className="w-3.5 h-3.5" />
              <span>LIVE CLIENT SANDBOX · TEST INLINE BEFORE LAUNCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Website Demo Stage
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl font-light">
              Experience any of the 3 client prototypes directly inside this viewport. Add items to cart, book salon appointments, or schedule dental consultations in real time.
            </p>
          </div>

          {/* Prototype Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-900 rounded-2xl border border-neutral-800">
            {tabs.map((tab) => {
              const active = selectedTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-neutral-800 text-white shadow-md ring-1 ring-neutral-700'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Device Stage Container */}
        <div className="bg-neutral-900/90 rounded-3xl border border-neutral-800 p-4 sm:p-6 shadow-2xl flex flex-col items-center">
          
          {/* Stage Controller Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-neutral-800 text-xs">
            {/* Left: Current Active Site Info */}
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 ${currentTabInfo.color}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {currentTabInfo.name}
              </span>
              <span className="hidden sm:inline text-neutral-400 text-xs">
                {currentTabInfo.tagline}
              </span>
            </div>

            {/* Center: Device Viewport Switcher */}
            <div className="flex items-center bg-neutral-950 p-1 rounded-xl border border-neutral-800">
              <button
                onClick={() => setPreviewViewport('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  previewViewport === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Desktop View (1280px)"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Desktop</span>
              </button>
              <button
                onClick={() => setPreviewViewport('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  previewViewport === 'tablet' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Tablet</span>
              </button>
              <button
                onClick={() => setPreviewViewport('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  previewViewport === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Mobile View (390px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Mobile</span>
              </button>
            </div>

            {/* Right: Copy Route & Launch Full Prototype */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors font-mono cursor-pointer"
                title="Copy client route URL"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{currentTabInfo.path}</span>
              </button>

              <button
                onClick={() => navigateTo(selectedTab)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Open Full Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Screen Bezel & Embedded Prototype Canvas */}
          <div
            className={`${viewportWidths[previewViewport]} bg-black rounded-2xl border border-neutral-800/80 shadow-2xl overflow-hidden transition-all duration-300 flex flex-col`}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)'
            }}
          >
            {/* Browser Address Bar Simulation */}
            <div className="bg-neutral-950 border-b border-neutral-800/80 px-4 py-2.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              <div className="px-3 py-0.5 bg-neutral-900 rounded-md border border-neutral-800 text-[11px] font-mono text-neutral-300 max-w-sm truncate">
                https://aiportfolio-kappa.vercel.app{currentTabInfo.path}
              </div>

              <div className="text-[10px] font-mono text-neutral-500 uppercase">
                {previewViewport}
              </div>
            </div>

            {/* Scrollable Live Prototype Interactive View */}
            <div className="h-[750px] overflow-y-auto overscroll-contain">
              {selectedTab === 'salon' && <SalonApp />}
              {selectedTab === 'restaurant' && <RestaurantApp />}
              {selectedTab === 'clinic' && <ClinicApp />}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
