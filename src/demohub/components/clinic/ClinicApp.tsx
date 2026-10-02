'use client';

import React from 'react';
import { ClinicHeader } from './ClinicHeader';
import { ClinicHero } from './ClinicHero';
import { ClinicPillars } from './ClinicPillars';
import { ClinicServices } from './ClinicServices';
import { ClinicAbout } from './ClinicAbout';
import { ClinicTestimonials } from './ClinicTestimonials';
import { ClinicCtaBanner } from './ClinicCtaBanner';
import { ClinicFooter } from './ClinicFooter';
import { ClinicBookingModal } from './ClinicBookingModal';

export const ClinicApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-neutral-900 font-clinic-sans selection:bg-emerald-800/20 selection:text-emerald-900">
      <ClinicHeader />
      <main>
        <ClinicHero />
        <ClinicPillars />
        <ClinicServices />
        <ClinicAbout />
        <ClinicTestimonials />
        <ClinicCtaBanner />
      </main>
      <ClinicFooter />
      <ClinicBookingModal />
    </div>
  );
};
