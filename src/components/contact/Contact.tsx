"use client";

import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-12 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <SectionLabel number="07" title="Contact" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
        <div>
          <h2 className="font-display text-6xl md:text-8xl font-medium text-ink leading-[0.9]">
            Let&apos;s make<br />
            <span className="text-electric">something real.</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-8 md:gap-12 text-lg md:text-xl font-medium text-ink">
          <a href="mailto:shelaraayush535@gmail.com" className="group flex items-center justify-between border-b border-ink/10 pb-6 hover:border-electric transition-colors">
            <span>shelaraayush535@gmail.com</span>
            <ArrowUpRight className="text-ink/30 group-hover:text-electric transition-colors" />
          </a>
          <a href="tel:+919175227454" className="group flex items-center justify-between border-b border-ink/10 pb-6 hover:border-electric transition-colors">
            <span>+91 91752 27454</span>
            <ArrowUpRight className="text-ink/30 group-hover:text-electric transition-colors" />
          </a>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-4">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-sm text-ink/40 uppercase tracking-widest">Social</span>
              <a href="https://github.com/Aayush-pixel29" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/aayush-shelar-166b99249/" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
                LinkedIn ↗
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-sm text-ink/40 uppercase tracking-widest">Location</span>
              <span className="text-ink/80">Mumbai, Maharashtra</span>
              <span className="text-ink/80">India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono text-xs text-ink/50 uppercase tracking-widest">
          © {new Date().getFullYear()} Aayush Shelar
        </p>
        <div className="flex items-center gap-4 text-xs font-mono text-ink/40 uppercase tracking-widest">
          <span>Software</span>
          <span>·</span>
          <span>AI</span>
          <span>·</span>
          <span>Systems</span>
          <span>·</span>
          <span>Building</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <a href="https://github.com/Aayush-pixel29" target="_blank" rel="noopener noreferrer" className="text-ink/50 hover:text-electric transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aayush-shelar-166b99249/" target="_blank" rel="noopener noreferrer" className="text-ink/50 hover:text-electric transition-colors">LinkedIn</a>
          <a href="mailto:shelaraayush535@gmail.com" className="text-ink/50 hover:text-electric transition-colors">Email</a>
        </div>
      </footer>
    </section>
  );
};
