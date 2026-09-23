"use client";
import React from 'react';

import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PROFILE } from '../data/profile';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0C0C] pt-24 pb-12 px-4 sm:px-6 md:px-12 text-[#D7E2EA] font-['Kanit',sans-serif]">
      {/* CTA CARD */}
      <div className="max-w-6xl mx-auto mb-20 bg-[#111111] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle glow background */}
        <div className="absolute top-0 right-0 w-full lg:w-[600px] h-[600px] bg-gradient-to-br from-[#7621B0]/10 to-[#B600A8]/10 blur-3xl pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />

        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
              Available For Selected Projects
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] mb-5 max-w-3xl">
            Need someone who can go from architecture to working software?
          </h2>
          
          <p className="text-sm md:text-base font-light text-[#D7E2EA]/70 max-w-2xl leading-relaxed">
            I&apos;m currently active as an independent freelancer, taking on selected AI, software, automation, developer-tool, and product-engineering work.
          </p>
        </div>

        <div className="relative z-10 shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
          <button
            onClick={onOpenContact}
            className="group relative px-8 py-4 w-full lg:w-auto rounded-full font-bold uppercase tracking-widest text-sm text-white overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7621B0] to-[#B600A8] opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-full border border-white/30" />
            <span className="relative z-10 drop-shadow-md">Start a conversation</span>
          </button>
        </div>
      </div>

      {/* FOOTER BOTTOM INFO */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            AAYUSH SHELAR <span className="text-white/40">—</span> AI BUILDER
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#BBCCD7]">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>{PROFILE.email}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7621B0]" />
              <span>{PROFILE.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PROFILE.location}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#D7E2EA]/60">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
          <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer">About</button>
          <button onClick={() => onNavigate('journey')} className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer">Journey</button>
          <button onClick={() => onNavigate('work')} className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer">Work</button>
          <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer">Services</button>
          <button onClick={() => onNavigate('skills')} className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer">Skills</button>
          <button onClick={() => onNavigate('experience')} className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer">Experience</button>
          <button onClick={onOpenContact} className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer">Contact</button>
        </div>

        <div className="flex items-center gap-6">
          <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()} Aayush Shelar</span>
        </div>
      </div>
    </footer>
  );
};
