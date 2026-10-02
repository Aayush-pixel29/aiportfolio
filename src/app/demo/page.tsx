import type { Metadata } from 'next';
import { HubApp } from '@/demohub/components/hub/HubApp';

export const metadata: Metadata = {
  title: 'Client Demo Hub — 3 Production Prototypes (Salon, Restaurant, Clinic)',
  description: 'Executive client demo hub featuring 3 production-grade website prototypes: Barbercrop Salon, Crunch Restaurant, and Evermiles Dental Clinic with Indian pricing and WhatsApp dispatch.',
  openGraph: {
    title: 'Client Demo Hub — 3 Production Prototypes',
    description: 'Bespoke web prototypes for local businesses with Indian names, INR pricing, and zero-friction WhatsApp booking and order workflows.',
    type: 'website',
  },
};

export default function DemoPage() {
  return <HubApp />;
}
