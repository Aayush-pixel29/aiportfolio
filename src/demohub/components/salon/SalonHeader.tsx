'use client';

import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Scissors, Menu, X, Phone, Clock } from 'lucide-react';

export const SalonHeader: React.FC = () => {
  const { openModal } = useDemo();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'GALLERY', href: '#schedule' },
    { label: 'BLOG', href: '#blog' },
    { label: 'CONTACTS', href: '#contacts' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/95 border-b border-neutral-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white transform -rotate-12 group-hover:rotate-0 transition-transform">
            <Scissors className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-salon-display text-2xl font-bold tracking-widest text-white leading-none">
              BARBERCROP
            </span>
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono mt-0.5">
              Classic Barbershop
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-red-500 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openModal('salon-booking')}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-salon-display text-sm tracking-wider font-semibold rounded-none transition-all shadow-lg hover:shadow-red-600/30 active:scale-95"
          >
            BOOK NOW
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm font-semibold tracking-wider uppercase text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-500 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('salon-booking');
              }}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-salon-display text-base tracking-wider font-semibold transition-colors"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
