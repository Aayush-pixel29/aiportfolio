'use client';

import React from 'react';
import { SalonHeader } from './SalonHeader';
import { SalonHero } from './SalonHero';
import { SalonAbout } from './SalonAbout';
import { SalonServices } from './SalonServices';
import { SalonSchedule } from './SalonSchedule';
import { SalonBlog } from './SalonBlog';
import { SalonFooter } from './SalonFooter';
import { SalonBookingModal } from './SalonBookingModal';

export const SalonApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600/30 selection:text-red-200">
      <SalonHeader />
      <main>
        <SalonHero />
        <SalonAbout />
        <SalonServices />
        <SalonSchedule />
        <SalonBlog />
      </main>
      <SalonFooter />
      <SalonBookingModal />
    </div>
  );
};
