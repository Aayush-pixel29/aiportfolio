"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Experience & Education</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent mx-auto mt-6 rounded-full" />
          </div>

          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
            {/* SEDEMAC */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-[#170b0b] group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(199,56,56,0.5)]" />
              <div className="sleek-card p-8">
                <h3 className="text-2xl font-bold text-white mb-1">SEDEMAC Mechatronics Ltd.</h3>
                <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wider">Product Support Engineer Intern</p>
                <p className="text-muted/60 text-xs font-medium mb-6">Chakan, India | Dec 2025 - May 2026</p>
                <ul className="list-disc list-outside text-muted text-sm space-y-3 ml-4 leading-relaxed">
                  <li>Assisted in hardware-in-the-loop validation and troubleshooting to preserve system reliability and ensure scalable product infrastructure.</li>
                  <li>Analyzed complex performance metrics and logged anomaly vectors with cross-functional quality teams to swiftly isolate and resolve logic faults.</li>
                </ul>
              </div>
            </motion.div>

            {/* Cognifyz */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-[#170b0b] group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(199,56,56,0.5)]" />
              <div className="sleek-card p-8">
                <h3 className="text-2xl font-bold text-white mb-1">Cognifyz Technologies</h3>
                <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wider">Machine Learning Intern</p>
                <p className="text-muted/60 text-xs font-medium mb-6">Remote | Oct 2025 - Nov 2025</p>
                <ul className="list-disc list-outside text-muted text-sm space-y-3 ml-4 leading-relaxed">
                  <li>Developed and optimized machine learning data pipelines using Python and Scikit-learn, rapidly iterating prototypes and validating analytical models against specific dataset requirements.</li>
                  <li>Focused on performance and efficiency while navigating underlying infrastructure constraints to deliver scalable insights and accelerate time-to-market.</li>
                </ul>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-[#170b0b] group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(199,56,56,0.5)]" />
              <div className="sleek-card p-8">
                <h3 className="text-2xl font-bold text-white mb-1">Sharad Institute of Technology</h3>
                <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wider">B.Tech in Electronics & Computer Engineering</p>
                <p className="text-muted/60 text-xs font-medium mb-6">2022 - 2026</p>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  Graduated with a focus on blending embedded hardware with AI systems. Maintained a 7.1 CGPA while dedicating significant time to practical engineering, hackathons, and systems building.
                </p>
                <ul className="list-disc list-outside text-muted text-sm space-y-3 ml-4 leading-relaxed">
                  <li>Delivered 5+ major projects bridging software, AI, and hardware.</li>
                  <li>Impacted over 1000 students through technical events and workshops.</li>
                  <li>Shifted focus to advanced applied AI engineering, including multi-agent RAG pipelines and autonomous LLM workflows.</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
