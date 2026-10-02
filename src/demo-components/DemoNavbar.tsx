'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

interface DemoNavbarProps {
  businessName: string;
  tagline?: string;
  phone: string;
  displayPhone: string;
  navItems: NavItem[];
  primaryCtaLabel: string;
  onPrimaryCtaClick: () => void;
  accentColor?: 'rose' | 'amber' | 'cyan' | 'emerald';
  badgeText?: string;
}

export const DemoNavbar: React.FC<DemoNavbarProps> = ({
  businessName,
  tagline = 'Local Business Prototype',
  phone,
  displayPhone,
  navItems,
  primaryCtaLabel,
  onPrimaryCtaClick,
  accentColor = 'rose',
  badgeText = 'Client Demo Prototype',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getAccentStyles = () => {
    switch (accentColor) {
      case 'amber':
        return {
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          cta: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-amber-500/20',
          activeDot: 'bg-amber-400',
        };
      case 'cyan':
        return {
          badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
          cta: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black shadow-cyan-500/20',
          activeDot: 'bg-cyan-400',
        };
      case 'emerald':
        return {
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          cta: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black shadow-emerald-500/20',
          activeDot: 'bg-emerald-400',
        };
      case 'rose':
      default:
        return {
          badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
          cta: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white shadow-rose-500/20',
          activeDot: 'bg-rose-400',
        };
    }
  };

  const accents = getAccentStyles();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Name & Tagline */}
          <div className="flex items-center gap-3">
            <Link href="#" className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
                {businessName}
              </span>
              <span className="text-[11px] text-zinc-400 hidden sm:block">
                {tagline}
              </span>
            </Link>

            <span className={`hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${accents.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${accents.activeDot}`} />
              {badgeText}
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors py-1 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>{displayPhone}</span>
            </a>

            <button
              onClick={onPrimaryCtaClick}
              className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 ${accents.cta}`}
            >
              <Calendar className="w-4 h-4" />
              <span>{primaryCtaLabel}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white lg:hidden border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#121318] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="pb-2 border-b border-white/10 flex items-center justify-between">
            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${accents.badge}`}>
              {badgeText}
            </span>
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs text-zinc-300 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              {displayPhone}
            </a>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-zinc-200 hover:bg-white/5 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onPrimaryCtaClick();
            }}
            className={`w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 ${accents.cta}`}
          >
            <Calendar className="w-4 h-4" />
            <span>{primaryCtaLabel}</span>
          </button>
        </div>
      )}
    </header>
  );
};
