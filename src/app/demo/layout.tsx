import React from 'react';
import type { Metadata } from 'next';
import { DemoBanner } from '@/demo-components/DemoBanner';

export const metadata: Metadata = {
  title: 'Client Demo Prototypes — Aayush Shelar',
  description: 'Interactive high-conversion web prototypes for local businesses (Salons, Restaurants, Clinics) built with instant WhatsApp booking flows.',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#B600A8]/30 selection:text-white relative">
      {/* Shared Persistent Demo Prototype Banner */}
      <DemoBanner />

      <main>{children}</main>
    </div>
  );
}
