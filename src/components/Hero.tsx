"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark font-medium text-sm mb-6 border border-primary/20">
                <Terminal size={14} />
                AI Engineer
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-4 text-balance text-foreground">
                Hi, I&apos;m Aayush.
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 text-balance leading-tight text-muted-foreground">
                Shipping <span className="text-primary">Applied AI</span> systems where it matters most.
              </h2>
              <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto lg:mx-0 text-balance">
                Specializing in RAG, multi-agent orchestration, and edge AI deployed where connectivity fails. I merge AI models with robust system designs to craft intelligent products.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#work" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors">
                  View My Work <ArrowRight size={18} />
                </a>
                <a href="#toolkit" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-background border-2 border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-foreground transition-colors">
                  See My Toolkit
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-12 lg:mt-16 flex justify-center lg:justify-start gap-3 flex-wrap text-sm text-muted font-medium"
            >
              <div className="px-4 py-2 rounded-full border border-border bg-white shadow-sm">Graduated 2026</div>
              <div className="px-4 py-2 rounded-full border border-border bg-white shadow-sm">Multi-Agent Systems</div>
              <div className="px-4 py-2 rounded-full border border-border bg-white shadow-sm">Edge Deployment</div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="relative w-full max-w-[500px] mx-auto lg:max-w-none lg:w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Glow effect behind the image to match the neon vibe */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0" />
              <div className="absolute inset-10 bg-purple-500/20 blur-[60px] rounded-full z-0" />
              
              <Image 
                src="/images/boy-coding.png" 
                alt="3D Boy Coding" 
                fill
                priority
                className="object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
