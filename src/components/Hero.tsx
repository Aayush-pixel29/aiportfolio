"use client";

import { ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative min-h-[85vh] flex flex-col justify-center border-b border-border z-10">
      
      <div className="w-full flex flex-col">
        
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-signal-cyan animate-pulse"></div>
          <span className="text-sm font-mono text-signal-cyan tracking-widest uppercase">
            AI Engineer — Mumbai
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-[88px] font-display font-medium tracking-tight mb-6 leading-[1.05] text-white max-w-4xl">
          AI Engineer who ships applied systems.
        </h1>
        
        {/* Subhead */}
        <p className="text-lg md:text-xl font-sans text-text-dim max-w-2xl leading-relaxed mb-12">
          RAG pipelines, multi-agent orchestration, and edge AI — deployed where connectivity fails.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollTo('work')}
            className="btn-primary flex items-center justify-center gap-2"
          >
            View the work <ArrowRight size={16} />
          </button>
          <button 
            onClick={() => scrollTo('connect')}
            className="btn-outline flex items-center justify-center gap-2"
          >
            Let&apos;s talk <MessageSquare size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
