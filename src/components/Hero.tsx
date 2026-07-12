"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        
        {/* Mobile Layout (Stacks normally) */}
        <div className="flex flex-col lg:hidden items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2 text-white leading-tight">
              Aayush
              <br />
              Shelar
            </h1>
            <p className="text-lg text-muted mt-4 max-w-md mx-auto">
              Shipping Applied AI systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="relative w-full max-w-[400px] h-[400px]"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0" />
            <Image 
              src="/images/download.jpg" 
              alt="3D Boy Coding" 
              fill
              priority
              className="object-contain relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">
              AI Engineer
            </h1>
            <p className="text-lg text-muted mt-4 max-w-md mx-auto mb-8">
              Specializing in RAG, multi-agent orchestration, and edge AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#work" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 btn-glow px-8 py-3 font-medium">
                View Work
              </a>
              <a href="#toolkit" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 btn-outline px-8 py-3 font-medium">
                See Toolkit
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout (3-Column Grid) */}
        <div className="hidden lg:grid grid-cols-[1fr_1.2fr_1fr] xl:grid-cols-[1fr_1.5fr_1fr] items-center gap-4 relative w-full min-h-[650px]">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-20 flex flex-col justify-center h-full"
          >
            <h1 className="text-6xl xl:text-7xl font-bold tracking-tight mb-4 text-white leading-[1.1]">
              Aayush
              <br />
              Shelar
            </h1>
            <p className="text-xl text-muted mt-4 max-w-[320px] leading-relaxed mb-8">
              Shipping robust Applied AI systems where connectivity fails and intelligence matters.
            </p>
            <div>
              <a href="#work" className="inline-flex justify-center items-center gap-2 btn-glow px-8 py-3.5 font-semibold text-lg">
                View Work
              </a>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, type: "spring", bounce: 0.3 }}
            className="relative w-full h-[600px] xl:h-[750px] flex justify-center items-end self-end pointer-events-none"
          >
            {/* Soft Glow Behind Character */}
            <div className="absolute inset-10 bg-primary/20 blur-[120px] rounded-full z-0" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/30 blur-[100px] rounded-full z-0" />
            
            <Image 
              src="/images/boy-coding.png" 
              alt="3D Boy Coding" 
              fill
              priority
              className="object-contain object-bottom relative z-10 scale-110"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="z-20 text-right flex flex-col justify-center items-end h-full"
          >
            <h1 className="text-5xl xl:text-6xl font-bold tracking-tight mb-4 text-white leading-[1.1]">
              AI
              <br />
              Engineer
            </h1>
            <p className="text-xl text-muted mt-4 max-w-[320px] leading-relaxed mb-8">
              Specializing in RAG, multi-agent orchestration, and embedded edge deployments.
            </p>
            <div>
              <a href="#toolkit" className="inline-flex justify-center items-center gap-2 btn-outline px-8 py-3.5 font-semibold text-lg">
                See Toolkit
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
