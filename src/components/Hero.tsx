"use client";

import Image from "next/image";
import { Terminal, Code, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full relative rounded-[32px] overflow-hidden flex flex-col items-center justify-center min-h-[500px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full p-8 md:p-16 flex flex-col items-center text-center">
        
        {/* Profile Image with Glowing Border */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 overflow-hidden relative shadow-[0_0_30px_rgba(171,159,242,0.4)] mb-8 ring-4 ring-white/5">
          <Image 
            src="/images/my-photo.png" 
            alt="Aayush Shelar" 
            fill
            className="object-cover"
          />
        </div>

        {/* Tech Badge */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 text-sm font-mono text-white/70">
          <Cpu size={14} className="text-[#AB9FF2]" />
          <span>System Online • Edge AI Active</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          Architecting <span className="phantom-glow-text">Intelligence.</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-white/60 mb-10 max-w-2xl leading-relaxed">
          I'm Aayush Shelar, an AI Engineer specializing in RAG, multi-agent orchestration, and edge AI deployed where connectivity fails. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="phantom-btn-primary flex items-center justify-center gap-2">
            <Terminal size={18} /> Initialize Connect
          </button>
          <button className="phantom-btn-outline flex items-center justify-center gap-2">
            <Code size={18} /> View Source
          </button>
        </div>

      </div>
    </div>
  );
}
