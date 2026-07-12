"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "TriageMesh",
    subtitle: "Integrated Disaster-Response System",
    description: "Architected a real-time system combining AI and systems design for disaster response. Demonstrates production-level system design and real-time architecture deployed efficiently under pressure.",
    github: "https://github.com/Aayush-pixel29/TriageMesh",
    tags: ["Systems Design", "Real-Time AI", "Edge"],
    image: "/images/triagemesh.jpg",
  },
  {
    title: "CiteSynth (SRE-Autonomous)",
    subtitle: "Multi-Agent RAG Pipeline",
    description: "Built a sophisticated RAG pipeline with planner, retrieval, synthesis, and critic agents. Showcases advanced LLM orchestration, hybrid retrieval, and autonomous AI agents.",
    github: "https://github.com/Aayush-pixel29/SRE-Autonomous",
    tags: ["RAG", "Multi-Agent", "Vector DB"],
    image: "/images/citesynth.jpg",
  },
  {
    title: "MAITRI",
    subtitle: "Multimodal AI for Astronaut Support",
    description: "Developed an offline therapeutic companion for an ISRO SIH problem statement. Focuses on privacy-first human interaction using offline edge AI.",
    github: "https://github.com/Aayush-pixel29/MAITRI",
    tags: ["Offline AI", "Multimodal", "ISRO SIH"],
    image: "/images/maitri.png",
  },
  {
    title: "X-Ray Triage Edge",
    subtitle: "Applied Computer Vision for Qure.ai",
    description: "Targeted deployment on edge devices (MobileNetV2 + TFLite) for tuberculosis detection on low-power hardware.",
    github: "https://github.com/Aayush-pixel29/edge-tb-triage",
    tags: ["TFLite", "Edge CV", "Healthcare"],
    image: "/images/xray-triage.jpg",
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Featured Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Where AI meets system design</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group sleek-card card-hover flex flex-col h-full overflow-hidden"
            >
              <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#170b0b] to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col flex-1 relative z-10">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm font-medium text-primary-dark mb-4 uppercase tracking-wider">{project.subtitle}</p>
                
                <p className="text-muted text-sm mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-outline px-5 py-2 text-sm font-semibold">
                    <Code size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
