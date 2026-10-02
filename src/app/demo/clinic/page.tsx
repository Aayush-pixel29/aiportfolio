import type { Metadata } from 'next';
import { ClinicApp } from '@/demohub/components/clinic/ClinicApp';

export const metadata: Metadata = {
  title: 'Evermiles Dental Clinic — Modern Dental Care for a Healthier You (Demo Prototype)',
  description: 'Interactive high-conversion dental clinic website demo with cosmetic dentistry, root canal treatments, AIIMS specialist team, and WhatsApp consultation booking.',
  openGraph: {
    title: 'Evermiles Dental Clinic — Modern Dental Care for a Healthier You',
    description: 'Scandinavian ivory & forest emerald dental practice prototype with transparent consultation fees in INR (₹) and direct WhatsApp triage.',
    type: 'website',
  },
};

export default function ClinicDemoPage() {
  return <ClinicApp />;
}
