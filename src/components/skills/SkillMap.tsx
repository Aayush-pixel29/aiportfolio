"use client";

import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { skills } from '../../data/skills';
import { motion } from 'framer-motion';

export const SkillMap = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto bg-paper rounded-[30px] border border-ink shadow-brutal my-20">
      <SectionLabel number="04" title="Skill Map" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
        {skills.map((group, index) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="font-display text-2xl font-medium text-ink mb-8 pb-4 border-b border-ink/20">
              {group.category}
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {group.items.map(item => (
                <span key={item} className="px-3 py-1.5 rounded-[8px] bg-paper border border-ink shadow-[2px_2px_0_var(--ink)] text-sm font-bold text-ink hover:-translate-y-1 hover:shadow-[3px_3px_0_var(--violet)] transition-all cursor-default">
                  {item}
                </span>
              ))}
            </div>
            
            <div className="mt-auto pt-6 bg-bg/50 rounded-2xl p-6 border border-ink/10">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-widest mb-3 block">Evidence</span>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {group.evidence.map(ev => (
                  <span key={ev} className="text-sm font-bold text-violet flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                    {ev}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
