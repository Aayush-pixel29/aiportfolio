"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const FreelanceCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue rounded-[30px] border border-ink shadow-brutal p-10 md:p-20 text-white relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute -right-20 -top-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-[13px] font-bold text-white/80 tracking-widest uppercase block mb-8">
              06 — Currently Open
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              Need someone who can go from architecture to working software?
            </h2>
            <p className="text-lg text-white/90 max-w-md mb-10 leading-relaxed font-medium">
              I’m currently active as an independent freelancer, taking on selected AI, software, automation, developer-tool and product-engineering work.
            </p>
            <Button 
              href="#contact" 
              className="bg-white text-blue border border-ink shadow-[4px_4px_0_var(--ink)] hover:bg-white text-[15px] px-8 py-4"
            >
              Start a conversation ↗
            </Button>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10">
              <h3 className="font-mono text-sm font-medium text-white/60 uppercase tracking-widest mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                {[
                  "AI / agentic applications",
                  "Full-stack web products",
                  "Developer tools & extensions",
                  "Computer-vision systems",
                  "Windows / desktop workflows",
                  "Client-specific automation"
                ].map(service => (
                  <li key={service} className="flex items-center gap-4 text-lg font-medium">
                    <span className="text-cyan">→</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
