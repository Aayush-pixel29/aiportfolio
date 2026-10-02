import type { Metadata } from 'next';
import { SalonApp } from '@/demohub/components/salon/SalonApp';

export const metadata: Metadata = {
  title: 'Barbercrop Men — Luxury Barbershop & Grooming Atelier (Demo Prototype)',
  description: 'Interactive high-converting barbershop website demo with master barber selection, transparent Indian grooming rates (₹), and pre-filled WhatsApp reservation.',
  openGraph: {
    title: 'Barbercrop Men — Luxury Barbershop & Grooming Atelier',
    description: 'High-contrast noir barbershop prototype inspired by international luxury grooming studios, featuring master barber booking and WhatsApp dispatch.',
    type: 'website',
  },
};

export default function SalonDemoPage() {
  return <SalonApp />;
}
