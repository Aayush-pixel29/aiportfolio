import type { Metadata } from 'next';
import { RestaurantApp } from '@/demohub/components/restaurant/RestaurantApp';

export const metadata: Metadata = {
  title: 'Crunch Fried Chicken & Burgers — Fast Casual Delivery (Demo Prototype)',
  description: 'Interactive high-conversion restaurant app demo with crispy chicken buckets, spicy crunch burgers, INR pricing (₹), live order tracking, and WhatsApp checkout.',
  openGraph: {
    title: 'Crunch Fried Chicken & Burgers — Fast Casual Delivery',
    description: 'Energetic charcoal & orange fast-casual digital restaurant with interactive cart drawer, 25% discount vouchers, and live delivery status.',
    type: 'website',
  },
};

export default function RestaurantDemoPage() {
  return <RestaurantApp />;
}
