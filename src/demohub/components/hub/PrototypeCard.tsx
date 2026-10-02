'use client';

import React from 'react';
import { PrototypeSpec } from '../../types';
import { useDemo } from '../../context/DemoContext';
import { ArrowRight, CheckCircle2, Monitor, Tablet, Smartphone, ExternalLink } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

interface PrototypeCardProps {
  spec: PrototypeSpec;
}

export const PrototypeCard: React.FC<PrototypeCardProps> = ({ spec }) => {
  const { navigateTo, setDeviceMode } = useDemo();

  const previewImages: Record<string, string> = {
    salon: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    restaurant: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    clinic: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  };

  const handleLaunch = (mode: 'fullscreen' | 'desktop' | 'tablet' | 'mobile') => {
    setDeviceMode(mode);
    navigateTo(spec.id);
  };

  return (
    <div className="bg-neutral-900/90 rounded-3xl border border-neutral-800/90 overflow-hidden hover:border-neutral-700 transition-all duration-300 shadow-xl flex flex-col justify-between group">
      
      {/* Top Banner / Preview Header with Real Photo Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950 border-b border-neutral-800">
        <SafeImage
          src={previewImages[spec.id]}
          alt={spec.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${spec.id === 'salon' ? 'filter grayscale contrast-125' : ''}`}
          containerClassName="w-full h-full"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-black/30 pointer-events-none" />

        {/* Badges on top */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-3">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold backdrop-blur-md ${spec.colorScheme.badge}`}>
            {spec.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-xs font-mono text-neutral-300 border border-white/10">
            {spec.livePath}
          </span>
        </div>

        {/* Title over photo */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
            {spec.name}
          </h3>
          <p className="text-xs text-neutral-300 font-light line-clamp-1 mt-0.5">
            {spec.tagline}
          </p>
        </div>
      </div>

      {/* Body: Specs, Features, Design Notes */}
      <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
        
        {/* Key Features */}
        <div className="space-y-2.5">
          <h4 className="text-xs uppercase font-mono font-semibold text-neutral-400 tracking-wider">
            Interactive Business Logic
          </h4>
          <ul className="space-y-1.5">
            {spec.keyFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <h4 className="text-xs uppercase font-mono font-semibold text-neutral-400 tracking-wider mb-2">
            Architecture Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {spec.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-neutral-800 text-[11px] font-mono text-neutral-300 border border-neutral-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Launch Actions */}
        <div className="pt-4 border-t border-neutral-800 space-y-2.5">
          <button
            onClick={() => handleLaunch('fullscreen')}
            className="w-full py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>Launch Full Prototype</span>
            <ArrowRight className="w-4 h-4 text-neutral-900" />
          </button>

          {/* Device Framed Previews */}
          <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
            <button
              onClick={() => handleLaunch('desktop')}
              className="py-1.5 px-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center gap-1 transition-colors cursor-pointer"
              title="Preview on Desktop (1440px)"
            >
              <Monitor className="w-3 h-3" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => handleLaunch('tablet')}
              className="py-1.5 px-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center gap-1 transition-colors cursor-pointer"
              title="Preview on Tablet (768px)"
            >
              <Tablet className="w-3 h-3" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => handleLaunch('mobile')}
              className="py-1.5 px-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center gap-1 transition-colors cursor-pointer"
              title="Preview on Mobile (390px)"
            >
              <Smartphone className="w-3 h-3" />
              <span>Mobile</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
