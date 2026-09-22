"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="flex-1 w-full flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint/20 border border-mint/40 text-ink font-mono text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available · Independent Freelancer
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-ink mb-6"
          >
            Software.<br />
            <span className="text-electric">AI.</span><br />
            Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-ink/70 max-w-2xl leading-relaxed mb-10"
          >
            I’m Aayush Shelar — a software and AI builder who turns ideas into working products. 
            My work spans AI agents, full-stack applications, developer tools, computer vision, 
            edge systems and hardware-connected software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="#work" variant="primary">
              Explore my work
            </Button>
            <Button href="https://github.com/Aayush-pixel29" external variant="outline">
              GitHub
            </Button>
            <Button href="https://www.linkedin.com/in/aayush-shelar-166b99249/" external variant="outline">
              LinkedIn
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Avatar Stage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full max-w-md lg:max-w-lg flex-shrink-0"
        >
          {/* Main Avatar Card */}
          <div className="relative z-10 w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#E2ECFF] to-[#F1EBFF] p-1 shadow-2xl shadow-electric/10 border border-white/50 backdrop-blur-sm overflow-hidden group">
            
            {/* Background elements */}
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)]" />
            
            <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-white/40 border border-white/60">
              
              {/* Metadata top */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                <Badge variant="default" className="bg-white/80 backdrop-blur-md">PROFILE / 01</Badge>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant="electric" className="bg-white/80 backdrop-blur-md">BUILD MODE</Badge>
                  <Badge variant="default" className="bg-white/80 backdrop-blur-md shadow-sm">AI BUILDER</Badge>
                  <Badge variant="default" className="bg-white/80 backdrop-blur-md shadow-sm">FREELANCER</Badge>
                </div>
              </div>

              {/* The Avatar Image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[85%] transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2 origin-bottom">
                <Image 
                  src="/images/avatar-main.png"
                  alt="Aayush Shelar"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Metadata bottom */}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-white/80 backdrop-blur-md border border-white p-3 rounded-xl shadow-lg">
                  <h3 className="font-display font-semibold text-ink text-lg">Aayush Shelar</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-ink/60 font-mono text-[10px] tracking-wider uppercase">
                    <MapPin size={12} />
                    Mumbai, India
                  </div>
                  <div className="mt-2 text-xs font-medium text-electric">
                    SOFTWARE × AI
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Avatar floating card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -right-6 -bottom-6 sm:-right-10 sm:bottom-10 z-20"
          >
            <div className="bg-paper p-2 pr-4 rounded-full shadow-xl shadow-ink/5 border border-ink/5 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F4F1FF] border border-ink/5 relative flex-shrink-0">
                <Image 
                  src="/images/avatar-working.png"
                  alt="Working mode"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-ink/50 uppercase tracking-widest">Status</span>
                <span className="text-sm font-medium text-ink">BUILD / SHIP / REPEAT ↗</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
