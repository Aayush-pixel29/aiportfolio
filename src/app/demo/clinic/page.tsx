import type { Metadata } from 'next';
import { ClinicView } from './ClinicView';

export const metadata: Metadata = {
  title: 'Apex Dental & Aesthetic Wellness — Doctor Consultation (Demo Prototype)',
  description: 'Interactive high-conversion dental and aesthetic clinic demo prototype with doctor credential showcase, treatment menus, and direct WhatsApp appointment requests.',
  openGraph: {
    title: 'Apex Dental & Aesthetic Wellness — Doctor Consultation (Demo Prototype)',
    description: 'Specialized healthcare clinic prototype featuring doctor profile, transparent procedure fees, and WhatsApp appointment confirmations designed by Aayush Shelar.',
    type: 'website',
  },
};

export default function ClinicDemoPage() {
  return <ClinicView />;
}
