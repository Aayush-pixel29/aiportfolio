import type { Metadata } from 'next';
import { SalonView } from './SalonView';

export const metadata: Metadata = {
  title: 'Velvet & Blade Luxe Studio — Hair & Skin Sanctuary (Demo Prototype)',
  description: 'Interactive high-converting salon and spa booking website demo with instant stylist selection, time slots, and pre-filled WhatsApp confirmation.',
  openGraph: {
    title: 'Velvet & Blade Luxe Studio — Hair & Skin Sanctuary (Demo Prototype)',
    description: 'Bespoke salon prototype featuring transparent service menus, stylist selection, and instant WhatsApp booking flow built by Aayush Shelar.',
    type: 'website',
  },
};

export default function SalonDemoPage() {
  return <SalonView />;
}
