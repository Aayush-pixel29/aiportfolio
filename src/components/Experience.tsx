"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
          </div>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-primary shadow-sm" />
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm card-hover">
                <h3 className="text-xl font-bold">Sharad Institute of Technology</h3>
                <p className="text-primary font-medium text-sm mb-4">B.Tech in Electronics & Computer Engineering (2022 - 2026)</p>
                <p className="text-muted text-sm mb-4">
                  Graduated with a focus on blending embedded hardware with AI systems. Maintained a 6.73 GPA while dedicating significant time to practical engineering, hackathons, and systems building.
                </p>
                <ul className="list-disc list-inside text-sm text-muted space-y-1 ml-2">
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
