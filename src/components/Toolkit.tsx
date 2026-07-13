"use client";

import { motion } from "framer-motion";
import KnowledgeGraph from "./KnowledgeGraph";
import { BrainCircuit, Cpu, Database, LayoutTemplate } from "lucide-react";

const skillCategories = [
  {
    title: "AI Engineering",
    icon: <BrainCircuit className="text-primary mb-4" size={32} />,
    skills: ["LangChain", "LlamaIndex", "RAG Pipelines", "Vector DBs (Qdrant)", "Multi-Agent Orchestration", "Claude API", "Google Gemini"],
  },
  {
    title: "ML & Computer Vision",
    icon: <LayoutTemplate className="text-primary mb-4" size={32} />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "YOLOv8", "Librosa", "NLP"],
  },
  {
    title: "Systems & Cloud",
    icon: <Database className="text-primary mb-4" size={32} />,
    skills: ["Docker", "Next.js", "AWS", "GCP", "PostgreSQL", "MySQL", "Git"],
  },
  {
    title: "Hardware & Edge",
    icon: <Cpu className="text-primary mb-4" size={32} />,
    skills: ["Python", "C++", "Embedded C", "Arduino", "Raspberry Pi", "ESP8266"],
  }
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Toolkit</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">The AI Engineering Stack</h2>
        </div>

        <KnowledgeGraph />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="phantom-card p-5 neo-hover"
            >
              <div className="text-white bg-neo-green w-14 h-14 border border-white/10 shadow-sm flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="font-bold text-lg font-mono mb-3 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map(skill => (
                  <span key={skill} className="px-2 py-0.5 text-xs font-bold bg-white text-white border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
