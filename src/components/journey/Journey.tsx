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
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-ink leading-tight">
          A hybrid engineer with a <span className="text-electric">software-first</span> direction.
        </h2>
      </div>

      <div className="relative pl-6 md:pl-10 border-l-2 border-electric/20 space-y-24">
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
            <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full bg-paper border-4 border-electric shadow-sm shadow-electric/20" />
            
            <div className="mb-2 text-electric font-mono text-sm font-medium tracking-wider">
              {item.period}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display font-medium text-ink mb-4">
              {item.title}
            </h3>
            
            <p className="text-ink/60 mb-6 text-lg">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {item.areas.map(area => (
                <span key={area} className="px-4 py-2 rounded-lg bg-ink/5 text-ink/70 text-sm font-medium border border-ink/5">
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
