'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ClinicFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0B1E19] text-neutral-300 border-t border-emerald-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-emerald-900/60">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-emerald-500/30 bg-emerald-900/40 flex items-center justify-center text-emerald-300">
              <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
                <path d="M7 3C4 5 3 9 4 13C4.8 16 6 21 8 21C10 21 10.5 17 12 17C13.5 17 14 21 16 21C18 21 19.2 16 20 13C21 9 20 5 17 3C14 1 13 4 12 4C11 4 10 1 7 3Z" />
              </svg>
            </div>
            <div>
              <span className="font-clinic-serif text-xl font-bold tracking-wider text-white uppercase block leading-none">
                EVERMILES
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-emerald-400 font-mono">
                DENTAL CLINIC · MUMBAI
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-clinic-sans text-neutral-300">
            <a href="#home" className="hover:text-emerald-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-300 transition-colors">About</a>
            <a href="#services" className="hover:text-emerald-300 transition-colors">Services</a>
            <a href="#team" className="hover:text-emerald-300 transition-colors">Our Team</a>
            <a href="#gallery" className="hover:text-emerald-300 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-emerald-300 transition-colors">Contact</a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="#contact" aria-label="Instagram" className="w-9 h-9 rounded-full border border-emerald-800/80 bg-emerald-950/40 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#contact" aria-label="Facebook" className="w-9 h-9 rounded-full border border-emerald-800/80 bg-emerald-950/40 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.2 22 12z"/></svg>
            </a>
            <a href="#contact" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-emerald-800/80 bg-emerald-950/40 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="#contact" aria-label="YouTube" className="w-9 h-9 rounded-full border border-emerald-800/80 bg-emerald-950/40 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

        </div>

        {/* Bottom Details & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-clinic-sans text-neutral-500">
          <div>
            © 2026 Evermiles Dental Clinic. Suite 402, MediPark Towers, Linking Rd, Khar / Bandra W, Mumbai.
          </div>
          <div className="flex items-center gap-6">
            <span>Modern Precision Dental Architecture</span>
            <span>·</span>
            <span>Direct Clinic Desk: +91 98765 43210</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
