'use client';

import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { PrototypeRoute, DeviceMode } from '../../types';
import {
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  Copy,
  Check,
  Code2,
  Layers,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const ClientDemoBar: React.FC = () => {
  const {
    currentRoute,
    deviceMode,
    isDemoBarOpen,
    navigateTo,
    setDeviceMode,
    setIsDemoBarOpen,
    openModal,
    showNotification
  } = useDemo();

  const [copied, setCopied] = useState(false);

  const routes: { id: PrototypeRoute; label: string; sub: string; badge: string; color: string }[] = [
    { id: 'hub', label: 'Demo Hub', sub: '/demo', badge: 'Overview', color: 'from-amber-500 to-indigo-600' },
    { id: 'salon', label: 'Salon', sub: '/demo/salon', badge: 'Barbercrop', color: 'from-red-600 to-neutral-900' },
    { id: 'restaurant', label: 'Restaurant', sub: '/demo/restaurant', badge: 'Crunch', color: 'from-orange-500 to-amber-600' },
    { id: 'clinic', label: 'Clinic', sub: '/demo/clinic', badge: 'Evermiles', color: 'from-emerald-700 to-teal-900' }
  ];

  const handleCopyLink = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aiportfolio-kappa.vercel.app';
    const fullUrl = `${origin}/demo${currentRoute === 'hub' ? '' : '/' + currentRoute}`;
    navigator.clipboard?.writeText(fullUrl).then(() => {
      setCopied(true);
      showNotification(`Copied: ${fullUrl}`);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      showNotification(`Link: ${fullUrl}`);
    });
  };

  if (!isDemoBarOpen) {
    return (
      <div className="fixed top-4 right-4 z-50 animate-fade-in">
        <button
          onClick={() => setIsDemoBarOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 text-xs font-medium rounded-full border border-neutral-700 shadow-xl backdrop-blur-md transition-all hover:scale-105"
          title="Expand Client Demo Controller"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">Client Demo Bar</span>
          <span className="text-neutral-400">·</span>
          <span className="uppercase text-[10px] tracking-wide text-amber-400">{currentRoute}</span>
          <ChevronDown className="w-3.5 h-3.5 text-neutral-400 ml-1" />
        </button>
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/95 border-b border-neutral-800 backdrop-blur-md shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-neutral-900 px-2.5 py-1.5 rounded-lg border border-neutral-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-white tracking-wide">3-in-1 Client Prototype Hub</span>
          </div>

          {/* Quick Route Switcher */}
          <nav className="flex items-center bg-neutral-900/80 p-0.5 rounded-lg border border-neutral-800" aria-label="Demo switcher">
            {routes.map(r => {
              const active = currentRoute === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => navigateTo(r.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                    active
                      ? 'bg-neutral-800 text-white shadow-sm ring-1 ring-neutral-700'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                  }`}
                >
                  <span>{r.label}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded font-mono ${
                    active ? 'bg-neutral-700 text-neutral-200' : 'text-neutral-500'
                  }`}>
                    {r.sub}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Device Previews, Repo Spec & Minimize */}
        <div className="flex items-center gap-2.5">
          {/* Device Frame Switcher */}
          {currentRoute !== 'hub' && (
            <div className="hidden sm:flex items-center bg-neutral-900 p-0.5 rounded-lg border border-neutral-800">
              <button
                onClick={() => setDeviceMode('fullscreen')}
                className={`p-1.5 rounded-md transition-all ${
                  deviceMode === 'fullscreen' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Full Native Screen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded-md transition-all ${
                  deviceMode === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Desktop View (1440px)"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`p-1.5 rounded-md transition-all ${
                  deviceMode === 'tablet' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded-md transition-all ${
                  deviceMode === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Mobile View (390px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Architecture & Specs button */}
          <button
            onClick={() => openModal('specs')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline font-medium">Repo Architecture & Specs</span>
            <span className="md:hidden font-medium">Specs</span>
          </button>

          {/* Copy Direct URL */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors"
            title="Copy client-ready URL"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
            <span className="hidden lg:inline">{copied ? 'Link Copied' : 'Share URL'}</span>
          </button>

          {/* Minimize Demo Bar */}
          <button
            onClick={() => setIsDemoBarOpen(false)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 border border-neutral-800 transition-colors"
            title="Minimize Bar (View clean client page)"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
