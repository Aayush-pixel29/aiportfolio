"use client";

import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { motion } from 'framer-motion';

export const Proof = () => {
  const proofs = [
    {
      stat: "1,500+",
      label: "students impacted",
      description: "through technical training and events."
    },
    {
      stat: "10",
      label: "flagship projects",
      description: "selected for the portfolio."
    },
    {
      stat: "2026",
      label: "current chapter",
      description: "independent freelance work + deeper AI/software engineering."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <SectionLabel number="03" title="Proof" />
      
      <div className="mb-20 max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-6">
          Signals beyond a skills list.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {proofs.map((proof, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <div className="font-display text-6xl md:text-7xl font-medium text-electric mb-6">
              {proof.stat}
            </div>
            <h3 className="font-mono text-sm uppercase tracking-widest font-medium text-ink mb-2">
              {proof.label}
            </h3>
            <p className="text-ink/60 text-lg">
              {proof.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
