"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const otherProjects = [
  {
    title: "AI Traffic Flow Detector",
    description: "Computer vision project using YOLOv8 for congestion analysis and anomaly detection in traffic flows.",
    link: "https://github.com/Aayush-pixel29/AI-Traffic-Flow-Analyzer",
    tags: ["YOLOv8", "Computer Vision"],
    image: "/images/traffic.png"
  },
  {
    title: "Real-Time Sign Language Detector",
    description: "Real-time system that detects sign language gestures and facial emotions from live video.",
    link: "https://github.com/Aayush-pixel29/Real-Time-AI-Sign-Language-Emotion-Detector",
    tags: ["Deep Learning", "HCI"],
    image: "/images/sign-language.png"
  },
  {
    title: "Cable Fault Detection & Monitoring",
    description: "An embedded and IoT system for underground cable faults, proving hardware integration capabilities.",
    link: "https://drive.google.com/drive/folders/1brQHI2ju_9VCsWMrJ1aiuH4VE-EFXqwR",
    tags: ["IoT", "Embedded C", "Sensors"],
    image: "/images/cable-fault.png"
  },
  {
    title: "SupportSense (Transcript Scorer)",
    description: "A full-stack AI microservice that evaluates support transcripts using LLMs, showcasing end-to-end product delivery.",
    link: "https://github.com/Aayush-pixel29/transcript-scorer",
    tags: ["Full-Stack AI", "Microservices"],
    image: "/images/sentiment.png"
  },
  {
    title: "Recon AI",
    description: "Intelligent surveillance and reconnaissance system with NextAuth MFA, Supabase, and an offline PWA layer.",
    link: "https://recon-ai-buildathon.vercel.app",
    tags: ["Next.js", "PWA", "Supabase"],
    image: "/images/recon-ai.png"
  },
  {
    title: "Aura App",
    description: "AI-backed logic and clean interface for an enhanced user experience.",
    link: "#",
    tags: ["UI/UX", "AI Logic"],
    image: "/images/aura-app.png"
  }
];

export default function OtherProjects() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">More Work & Experiments</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group sleek-card card-hover flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden border-b border-white/5 rounded-t-xl">
                {project.image ? (
                  <>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#170b0b] to-transparent opacity-60" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted bg-black/20">
                    No Image
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-white group-hover:text-primary transition-colors pr-4">{project.title}</h3>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-muted text-sm flex-1 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-white/5 text-muted border border-white/10 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
