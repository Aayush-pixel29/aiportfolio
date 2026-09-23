"use client";
import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32 relative z-0"
    >
      {/* Heading: Services */}
      <FadeIn delay={0} y={40}>
        <div className="text-center mb-10 sm:mb-20 md:mb-28">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#0C0C0C]/60 font-semibold mb-2 block">
            What I Deliver / 05 Areas
          </span>
          <h2
            style={{ fontSize: 'clamp(2.6rem, 11vw, 160px)' }}
            className="font-black uppercase text-center text-[#0C0C0C] leading-none"
          >
            Services
          </h2>
        </div>
      </FadeIn>

      {/* 5 Service items in vertical list */}
      <div className="max-w-5xl mx-auto divide-y divide-[#0C0C0C]/15 border-y border-[#0C0C0C]/15">
        {PROFILE.services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              onClick={() => onSelectService(service.name)}
              className="group py-6 sm:py-10 md:py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-8 md:gap-14 cursor-pointer transition-colors duration-300 hover:bg-black/[0.03] active:bg-black/[0.05] px-2 sm:px-6 rounded-2xl"
            >
              {/* Left Number */}
              <div
                style={{ fontSize: 'clamp(2.5rem, 8vw, 140px)' }}
                className="font-black text-[#0C0C0C] leading-none select-none tracking-tighter shrink-0 w-20 sm:w-36 md:w-48"
              >
                {service.number}
              </div>

              {/* Right: Name + Description */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between gap-4">
                  <h3
                    style={{ fontSize: 'clamp(1.1rem, 2.3vw, 2.2rem)' }}
                    className="font-bold uppercase text-[#0C0C0C] tracking-tight group-hover:text-[#7621B0] transition-colors leading-snug"
                  >
                    {service.name}
                  </h3>
                  <div className="opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 sm:-translate-x-2 sm:group-hover:translate-x-0 shrink-0">
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#7621B0]">
                      Inquire <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </div>
                </div>

                <p
                  style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)' }}
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-75 mt-1 sm:mt-2"
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
