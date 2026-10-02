'use client';

import React from 'react';
import { DemoProvider, useDemo } from '../../context/DemoContext';
import { ClientDemoBar } from './ClientDemoBar';
import { DeviceFrame } from './DeviceFrame';
import { SpecsModal } from './SpecsModal';
import { CheckCircle2 } from 'lucide-react';

const DemoLayoutShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { notification } = useDemo();

  return (
    <div className="relative min-h-screen bg-neutral-950 flex flex-col font-sans text-neutral-100">
      {/* Top Client Demo Controller Bar */}
      <ClientDemoBar />

      {/* Main View wrapped in Responsive Device Frame */}
      <div className="flex-1">
        <DeviceFrame>
          {children}
        </DeviceFrame>
      </div>

      {/* Global Architectural Specs & Deployment Modal */}
      <SpecsModal />

      {/* Toast Notifications */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in pointer-events-none">
          <div className="flex items-center gap-2.5 px-4 py-3 bg-neutral-900/95 text-white text-xs font-medium rounded-xl border border-neutral-700 shadow-2xl backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{notification}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const DemoLayoutClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DemoProvider>
      <DemoLayoutShell>{children}</DemoLayoutShell>
    </DemoProvider>
  );
};
