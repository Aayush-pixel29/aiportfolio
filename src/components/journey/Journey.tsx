"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';

const timeline = [
  {
    period: "2022 — 2026",
    title: "Electronics & Computer Engineering",
    description: "B.Tech at Sharad Institute of Technology College of Engineering.",
    areas: ["Embedded Systems", "Industrial Automation", "Data Structures", "Operating Systems", "Computer Networks", "DBMS"]
  },
  {
    period: "2024 — 2025",
    title: "Software + ML → complete products",
    description: "Progression into:",
    areas: ["Python", "ML", "Computer Vision", "AI assistants", "Web applications", "Automation", "Next.js"]
  },
  {
    period: "2025 — 2026",
    title: "Industrial engineering + AI engineering",
    description: "Industry experience at:",
    areas: ["SEDEMAC", "Cognifyz", "Rapid System"]
  },
  {
    period: "NOW",
    title: "Independent Freelancer / AI & Software Builder",
    description: "Current focus:",
    areas: ["AI applications", "Agentic systems", "Developer tools", "Full-stack products", "Automation", "Client systems"]
  }
];

export const Journey = () => {
  return (
    <section id="journey" className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <SectionLabel number="01" title="Journey" />
      
      <div className="mb-20 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          A hybrid engineer with a <span className="text-blue bg-blue/10 px-2 rounded-lg">software-first</span> direction.
        </h2>
      </div>

      <div className="relative pl-6 md:pl-10 border-l-2 border-ink space-y-24">
        {timeline.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline node */}
            <div className="absolute -left-[32px] md:-left-[48px] top-1 w-5 h-5 rounded-full bg-mint border-[3px] border-ink shadow-[2px_2px_0_var(--ink)]" />
            
            <div className="mb-2 text-blue font-mono text-[13px] font-bold tracking-widest uppercase">
              {item.period}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-ink mb-4">
              {item.title}
            </h3>
            
            <p className="text-ink/60 mb-6 text-lg font-medium">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {item.areas.map(area => (
                <span key={area} className="px-3 py-1.5 rounded-[8px] bg-paper border border-ink shadow-[2px_2px_0_var(--ink)] text-xs font-bold text-ink">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
