'use client';

import React from 'react';
import { Cpu, ShieldCheck, HeartHandshake, Smile } from 'lucide-react';

export const ClinicPillars: React.FC = () => {
  const pillars = [
    {
      title: 'Advanced Technology',
      subtitle: 'For precise & comfortable care',
      icon: <Cpu className="w-6 h-6 text-emerald-700" />
    },
    {
      title: 'Experienced Team',
      subtitle: 'Skilled & caring professionals',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />
    },
    {
      title: 'Personalized Treatment',
      subtitle: 'Designed for your unique needs',
      icon: <HeartHandshake className="w-6 h-6 text-emerald-700" />
    },
    {
      title: 'Comfortable Environment',
      subtitle: "Relax. We'll take care of you.",
      icon: <Smile className="w-6 h-6 text-emerald-700" />
    }
  ];

  return (
    <div className="bg-[#FAF8F5] border-b border-neutral-200/80 text-neutral-800 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-neutral-200/80">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 ${idx !== 0 ? 'lg:pl-8' : ''} pt-6 sm:pt-0`}
            >
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-clinic-sans font-bold text-sm sm:text-base text-neutral-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
