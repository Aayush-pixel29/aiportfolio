'use client';

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { DeviceMode } from '../../types';

export const DeviceFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { deviceMode, currentRoute, setDeviceMode } = useDemo();

  if (deviceMode === 'fullscreen' || currentRoute === 'hub') {
    return <div className="w-full min-h-screen">{children}</div>;
  }

  const widths: Record<Exclude<DeviceMode, 'fullscreen'>, string> = {
    desktop: 'max-w-[1440px]',
    tablet: 'max-w-[768px]',
    mobile: 'max-w-[390px]'
  };

  return (
    <div className="min-h-[calc(100vh-50px)] bg-neutral-950 py-8 px-4 flex flex-col items-center justify-start overflow-x-hidden">
      {/* Device Header Bar */}
      <div className="mb-4 flex items-center justify-between w-full max-w-4xl text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="font-mono text-neutral-300 uppercase font-semibold">
            {deviceMode} Preview Mode
          </span>
          <span>·</span>
          <span>{deviceMode === 'desktop' ? '1440 × 900' : deviceMode === 'tablet' ? '768 × 1024' : '390 × 844'}</span>
        </div>
        <button
          onClick={() => setDeviceMode('fullscreen')}
          className="text-amber-400 hover:text-amber-300 underline font-medium"
        >
          Exit to Fullscreen
        </button>
      </div>

      {/* Frame Shell */}
      <div
        className={`w-full ${widths[deviceMode]} bg-black rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden transition-all duration-300 flex flex-col`}
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Mock Browser/Device Header */}
        <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          <div className="px-3 py-1 bg-neutral-950/80 rounded-md border border-neutral-800 text-[11px] font-mono text-neutral-400 max-w-md truncate">
            https://aiportfolio-kappa.vercel.app/demo/{currentRoute}
          </div>

          <div className="text-[10px] text-neutral-500 font-mono">
            {deviceMode.toUpperCase()}
          </div>
        </div>

        {/* Scaled Content Container */}
        <div className="w-full bg-neutral-950 overflow-y-auto max-h-[85vh]">
          {children}
        </div>
      </div>
    </div>
  );
};
