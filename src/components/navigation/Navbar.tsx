"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-[14px] z-50 w-[min(1120px,calc(100%-28px))] mx-auto mt-[14px] px-3 py-2.5 pl-4 border border-[#c4bfd7] rounded-[17px] bg-[rgba(244,241,255,0.84)] backdrop-blur-[18px] flex justify-between items-center transition-all ${scrolled ? 'shadow-sm' : ''}`}>
      <Link href="/" className="font-bold tracking-[-0.045em] flex items-center gap-0">
        <span className="bg-coral rounded-[7px] px-[7px] py-1 mr-[7px] text-white">AS</span>
        Aayush Shelar
      </Link>
      <div className="flex gap-1">
        <Link href="#journey" className="text-xs font-semibold px-2.5 py-2 rounded-[9px] hover:bg-mint transition-colors hidden md:block">Journey</Link>
        <Link href="#work" className="text-xs font-semibold px-2.5 py-2 rounded-[9px] hover:bg-mint transition-colors hidden md:block">Work</Link>
        <Link href="#skills" className="text-xs font-semibold px-2.5 py-2 rounded-[9px] hover:bg-mint transition-colors hidden md:block">Skills</Link>
        <Link href="#experience" className="text-xs font-semibold px-2.5 py-2 rounded-[9px] hover:bg-mint transition-colors hidden md:block">Experience</Link>
        <Link href="#contact" className="text-xs font-semibold px-2.5 py-2 rounded-[9px] bg-ink text-white">Let&apos;s talk ↗</Link>
      </div>
    </nav>
  );
};
