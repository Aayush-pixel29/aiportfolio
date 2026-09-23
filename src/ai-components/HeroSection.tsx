"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { MapPin, FileText, Menu, X, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PROFILE } from '../data/profile';

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const avatarSrc = '/images/avatar-3d-new.png';

  const handleMobileNav = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      onNavigate(sectionId);
    }, 200);
  };

  const handleMobileContact = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      onOpenContact();
    }, 200);
  };

  return (
    <section className="relative w-full overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-b from-[#7621B0]/20 via-[#B600A8]/10 to-transparent blur-[120px] sm:blur-[140px] pointer-events-none rounded-full" />

      {/* ========================================================================= */}
      {/* 1. NAVBAR (DESKTOP & MOBILE HEADER) */}
      {/* ========================================================================= */}
      <FadeIn delay={0} y={-20} className="w-full z-30 relative">
        <header className="px-5 sm:px-8 md:px-12 pt-5 sm:pt-6 md:pt-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex items-center gap-2.5 z-40"
          >
            <span className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-black tracking-tighter text-white group-hover:scale-105 transition-transform shadow-md">
              AS
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA] font-semibold leading-tight">
                Aayush Shelar
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#BBCCD7]/60 font-mono hidden xs:inline-block leading-tight">
                AI &amp; Software Builder
              </span>
            </div>
          </div>

          {/* Desktop Nav links (Hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-[1.05rem] font-medium uppercase tracking-wider text-[#D7E2EA]">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('journey')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Journey
            </button>
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Work
            </button>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => onNavigate('skills')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Skills
            </button>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 transition-all text-white flex items-center gap-1.5 cursor-pointer text-xs font-semibold tracking-wider hover:scale-105"
              title="View & Download Resume PDF"
            >
              <FileText className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>Resume</span>
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Right Controls (Visible on mobile only) */}
          <div className="flex md:hidden items-center gap-2.5 z-40">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-white flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider"
              title="Resume PDF"
            >
              <FileText className="w-3 h-3 text-[#B600A8]" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-all focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>
      </FadeIn>

      {/* ========================================================================= */}
      {/* FULLSCREEN MOBILE NAVIGATION DRAWER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between px-6 pt-6 pb-8 md:hidden overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-black text-white">
                  AS
                </span>
                <span className="text-xs uppercase tracking-widest text-white font-semibold">
                  Aayush Shelar
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 py-8">
              {[
                { id: 'about', label: 'About', num: '01' },
                { id: 'journey', label: 'Journey', num: '02' },
                { id: 'work', label: 'Work & Projects', num: '03' },
                { id: 'services', label: 'Services', num: '04' },
                { id: 'skills', label: 'Skill Map', num: '05' },
                { id: 'experience', label: 'Experience', num: '06' },
              ].map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleMobileNav(item.id)}
                  className="flex items-center justify-between text-left py-2 border-b border-white/5 text-xl font-bold uppercase tracking-tight text-[#D7E2EA] hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#BBCCD7]/50">{item.num}</span>
                </motion.button>
              ))}
            </div>

            {/* Actions & Socials at bottom of menu */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-full border border-white/20 bg-white/5 text-white text-xs uppercase font-semibold tracking-wider"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B600A8]" />
                  <span>Resume (PDF)</span>
                </a>
                <button
                  type="button"
                  onClick={handleMobileContact}
                  className="py-3 rounded-full uppercase tracking-wider text-xs font-semibold text-white shadow-lg"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                >
                  Let&apos;s Talk
                </button>
              </div>

              {/* Direct Info */}
              <div className="flex flex-col gap-2 text-xs text-[#BBCCD7] pt-2">
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-white">
                  <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
                  <span>{PROFILE.email}</span>
                </a>
                <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="w-3.5 h-3.5 text-[#7621B0]" />
                  <span>{PROFILE.phone}</span>
                </a>
                <div className="flex items-center justify-between pt-2">
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>Mumbai, India</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 text-white"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 text-white"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. DESKTOP HERO VIEW (md:flex) */}
      {/* ========================================================================= */}
      <div className="hidden md:flex flex-col justify-between h-[calc(100vh-80px)] min-h-[620px] relative">
        {/* Hero Heading behind avatar */}
        <div className="w-full text-center overflow-hidden z-0 mt-4 px-2">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center whitespace-nowrap text-[10vw] lg:text-[11vw] xl:text-[12vw]">
              Hi, i&apos;m Aayush
            </h1>
          </FadeIn>
        </div>

        {/* 3D Avatar Portrait (Bottom-centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-auto">
          <FadeIn delay={0.4} y={30}>
            <div className="relative group">
              {/* Status pill badge above avatar */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-medium uppercase tracking-wider text-white shadow-xl whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available · Independent Freelancer</span>
              </div>

              <Magnet
                padding={150}
                strength={3}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
                className="flex justify-center items-end"
              >
                <div className="relative w-[400px] md:w-[480px] lg:w-[560px]">
                  <img
                    src={avatarSrc}
                    alt="Aayush Shelar 3D Animated Character Avatar"
                    className="w-full h-auto max-h-[72vh] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] select-none transition-all duration-300"
                    draggable={false}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/avatar-main.webp';
                    }}
                  />
                </div>
              </Magnet>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar: Left bio & Right CTA */}
        <div className="w-full px-8 md:px-12 pb-8 md:pb-10 flex items-end justify-between z-20">
          {/* Left: Bio Statement & Location */}
          <FadeIn delay={0.35} y={20}>
            <div className="flex flex-col gap-3">
              <div className="space-y-1 max-w-[320px] md:max-w-[380px]">
                <p className="text-white font-semibold uppercase tracking-wider text-xs md:text-sm leading-snug">
                  AI Engineer building production-ready AI systems, agents &amp; intelligent products.
                </p>
                <p className="text-[#BBCCD7]/70 font-light text-xs leading-relaxed">
                  Agentic workflows, computer-vision pipelines, developer tools &amp; full-stack systems — from architecture to deployment.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#BBCCD7]">
                <span className="flex items-center gap-1 text-[11px] font-medium tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
                  Mumbai, India
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                    aria-label="GitHub profile"
                    title="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Resume & Contact Buttons */}
          <FadeIn delay={0.5} y={20}>
            <div className="flex flex-col items-end gap-2.5">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onNavigate('work')}
                  className="px-4 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-medium uppercase tracking-wider text-xs transition-all hover:scale-105 cursor-pointer"
                >
                  View Work
                </button>
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 text-white font-medium uppercase tracking-wider text-xs transition-all hover:scale-105"
                  title="Download Resume PDF"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume</span>
                </a>
                <ContactButton onClick={onOpenContact} label="Let's Talk" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#BBCCD7]/60">
                Available for AI/ML &amp; Software Roles
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE HERO VIEW (Dedicated mobile flow for < md) */}
      {/* ========================================================================= */}
      <div className="flex md:hidden flex-col items-center justify-between min-h-[calc(100svh-70px)] px-4 xs:px-5 pt-2 pb-6 relative z-10 text-center">
        {/* Top: Availability Badge */}
        <FadeIn delay={0.1} y={15}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 text-[10px] xs:text-[11px] font-medium uppercase tracking-wider text-white shadow-lg my-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>Available · AI/ML &amp; Software Roles</span>
          </div>
        </FadeIn>

        {/* Hero Title */}
        <FadeIn delay={0.15} y={20}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center text-[13vw] xs:text-[12vw] sm:text-6xl my-1">
            Hi, i&apos;m Aayush
          </h1>
        </FadeIn>

        {/* Centered 3D Avatar (Optimized for all phone heights) */}
        <FadeIn delay={0.25} y={20} className="w-full flex justify-center my-1">
          <div className="relative w-[180px] xs:w-[220px] sm:w-[260px] max-h-[38vh] flex items-center justify-center">
            <img
              src={avatarSrc}
              alt="Aayush Shelar 3D Animated Character Avatar"
              className="w-full h-auto max-h-[36vh] object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] select-none"
              draggable={false}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/avatar-main.webp';
              }}
            />
          </div>
        </FadeIn>

        {/* Bio statement & Location */}
        <FadeIn delay={0.35} y={20} className="w-full max-w-sm space-y-2">
          <p className="text-xs xs:text-sm text-white font-semibold uppercase tracking-wide leading-snug px-1">
            AI Engineer building production-ready AI systems, agents &amp; intelligent products.
          </p>
          <p className="text-[11px] xs:text-xs text-[#D7E2EA]/70 font-light leading-relaxed px-1">
            Agentic workflows, vision pipelines, developer tools &amp; full-stack systems.
          </p>

          <div className="flex items-center justify-center gap-3 text-xs text-[#BBCCD7] pt-0.5">
            <span className="flex items-center gap-1 text-[10px] xs:text-[11px] font-medium tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
              Mumbai, India
            </span>

            <span className="text-white/20">|</span>

            <div className="flex items-center gap-2">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Bottom CTAs */}
        <FadeIn delay={0.45} y={20} className="w-full max-w-sm pt-2">
          <div className="grid grid-cols-3 gap-2 w-full">
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="py-2.5 px-2 rounded-full border border-white/20 bg-white/5 active:bg-white/15 text-white font-semibold uppercase tracking-wider text-[11px] xs:text-xs transition-all active:scale-95 flex items-center justify-center"
            >
              Work
            </button>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 py-2.5 px-2 rounded-full border border-white/20 bg-white/5 active:bg-white/15 text-white font-semibold uppercase tracking-wider text-[11px] xs:text-xs transition-all active:scale-95"
              title="Download Resume PDF"
            >
              <FileText className="w-3 h-3 text-cyan-400" />
              <span>Resume</span>
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="py-2.5 px-2 rounded-full font-bold uppercase tracking-wider text-[11px] xs:text-xs text-white shadow-lg active:scale-95 transition-transform"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              }}
            >
              Contact
            </button>
          </div>
          <span className="text-[9px] xs:text-[10px] uppercase tracking-widest text-[#BBCCD7]/60 block mt-2 font-mono">
            Available for AI/ML &amp; Software Roles
          </span>
        </FadeIn>
      </div>
    </section>
  );
};
