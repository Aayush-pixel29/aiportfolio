import React from 'react';
import type { Metadata } from 'next';
import { DemoLayoutClient } from '@/demohub/components/common/DemoLayoutClient';
import '@/demohub/index.css';

export const metadata: Metadata = {
  title: 'Client Demo Hub — 3 Production Web Prototypes',
  description: 'Interactive high-conversion web prototypes for Salon, Restaurant, and Clinic businesses with Indian pricing, local reviews, and WhatsApp booking/order dispatch.',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      />
      <DemoLayoutClient>{children}</DemoLayoutClient>
    </>
  );
}
