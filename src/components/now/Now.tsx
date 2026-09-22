"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';

export const Now = () => {
  return (
    <section className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto border-t border-ink/10">
      <SectionLabel number="06" title="NOW" />
      
      <div className="mb-16 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          What I&apos;m building right now.
        </h2>
      </div>

      <div className="mb-16">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-mint/20 border border-mint text-ink font-bold text-[13px] tracking-widest uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-mint shadow-[0_0_8px_var(--mint)] animate-pulse" />
          AVAILABLE FOR SELECTED PROJECTS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-ink/50 mb-8 pb-4 border-b border-ink/10">
            Currently Building
          </h3>
          <ul className="space-y-6">
            {["AI systems", "Agentic applications", "Developer tools", "Full-stack products", "Client automation"].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-xl font-bold text-ink">
                <span className="text-blue mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-ink/50 mb-8 pb-4 border-b border-ink/10">
            Currently Open To
          </h3>
          <ul className="space-y-6">
            {["AI Engineering", "Software Engineering", "Freelance Projects", "Product Engineering", "Interesting technical problems"].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-xl font-bold text-ink">
                <span className="text-coral mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
