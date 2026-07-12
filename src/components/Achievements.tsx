"use client";

import { motion } from "framer-motion";
import { Trophy, Target } from "lucide-react";

export default function Achievements() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Recognised for innovation</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Aquaquest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sleek-card flex flex-col items-center text-center p-8 card-hover"
          >
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_20px_rgba(199,56,56,0.2)]">
              <Trophy size={36} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Runner-up - Aquaquest</h3>
            <p className="text-sm text-primary-dark font-medium mb-4 uppercase tracking-wider">Electrovert International Level Mega Event</p>
            <span className="inline-block px-4 py-1.5 bg-white/5 text-muted text-xs font-semibold border border-white/10 rounded-full">November 2024</span>
          </motion.div>

          {/* DIPEX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sleek-card flex flex-col items-center text-center p-8 card-hover"
          >
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_20px_rgba(199,56,56,0.2)]">
              <Target size={36} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">DIPEX Participant</h3>
            <p className="text-sm text-primary-dark font-medium mb-4 uppercase tracking-wider">State Level Exhibition-cum-Competition of Working Models</p>
            <span className="inline-block px-4 py-1.5 bg-white/5 text-muted text-xs font-semibold border border-white/10 rounded-full">March 2025</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
