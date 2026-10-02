'use client';

import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Menu, X, ArrowRight, Phone, Calendar } from 'lucide-react';

export const ClinicHeader: React.FC = () => {
  const { openModal } = useDemo();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B1E19]/95 border-b border-emerald-950/80 backdrop-blur-md text-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Tooth Monogram */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-900/40 flex items-center justify-center text-emerald-300 shadow-sm group-hover:border-emerald-400/60 transition-colors">
            {/* Tooth SVG Icon */}
            <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 3C4 5 3 9 4 13C4.8 16 6 21 8 21C10 21 10.5 17 12 17C13.5 17 14 21 16 21C18 21 19.2 16 20 13C21 9 20 5 17 3C14 1 13 4 12 4C11 4 10 1 7 3Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-clinic-serif text-xl sm:text-2xl font-bold tracking-wider text-neutral-100 uppercase leading-none">
              EVERMILES
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-400 font-mono mt-0.5">
              DENTAL CLINIC
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-clinic-sans font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-300 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openModal('clinic-booking')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-100 border border-neutral-700 font-clinic-sans text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95 group"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D241E] border-b border-emerald-950 px-6 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-300 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-emerald-900/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('clinic-booking');
              }}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-clinic-sans text-sm font-semibold tracking-wide transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
