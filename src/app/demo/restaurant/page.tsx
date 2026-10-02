import type { Metadata } from 'next';
import { RestaurantView } from './RestaurantView';

export const metadata: Metadata = {
  title: 'Oakhaven Hearth & Kitchen — Woodfired Bistro & Plates (Demo Prototype)',
  description: 'Interactive high-conversion restaurant website demo featuring dynamic menu categories, veg/non-veg indicators, live cart, and direct WhatsApp order dispatch.',
  openGraph: {
    title: 'Oakhaven Hearth & Kitchen — Woodfired Bistro & Plates (Demo Prototype)',
    description: 'Modern restaurant website prototype with real-time cart calculations and instant WhatsApp ordering created by Aayush Shelar.',
    type: 'website',
  },
};

export default function RestaurantDemoPage() {
  return <RestaurantView />;
}
