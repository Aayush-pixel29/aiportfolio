"use client";

import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { experiences } from '../../data/experience';
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <SectionLabel number="05" title="Experience" />
      
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
          >
            <div className="md:col-span-3 pt-1">
              <span className="font-mono text-sm font-medium text-ink/50 group-hover:text-electric transition-colors">
                {exp.period}
              </span>
            </div>
            
            <div className="md:col-span-9 flex flex-col">
              <h3 className="font-display text-2xl font-medium text-ink mb-2">
                {exp.title}
              </h3>
              <div className="text-lg text-ink/60 mb-6">
                {exp.organization}
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink/70">
                    <span className="text-electric font-bold mt-0.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
