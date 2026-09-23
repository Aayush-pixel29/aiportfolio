"use client";
import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { PROFILE } from '../data/profile';
import { Award, Compass, Sparkles, GraduationCap, FileText, Download, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden bg-[#0C0C0C]"
    >
      {/* 4 Decorative 3D Images in Corners (Subtle/Hidden on Mobile to avoid text clutter) */}

      {/* Top-left: Moon icon */}
      <div className="absolute top-[2%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none opacity-30 sm:opacity-80 hidden xs:block">
        <FadeIn delay={0.1} duration={0.9} x={-80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon element"
            className="w-[70px] sm:w-[140px] md:w-[200px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[4%] left-[2%] sm:left-[5%] md:left-[8%] z-0 pointer-events-none opacity-30 sm:opacity-80 hidden xs:block">
        <FadeIn delay={0.25} duration={0.9} x={-80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object element"
            className="w-[60px] sm:w-[120px] md:w-[170px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[2%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none opacity-30 sm:opacity-80 hidden xs:block">
        <FadeIn delay={0.15} duration={0.9} x={80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego element"
            className="w-[70px] sm:w-[140px] md:w-[200px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[4%] right-[2%] sm:right-[5%] md:right-[8%] z-0 pointer-events-none opacity-30 sm:opacity-80 hidden xs:block">
        <FadeIn delay={0.3} duration={0.9} x={80} y={0}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group element"
            className="w-[80px] sm:w-[150px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center">
        {/* Sub-label */}
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Profile / 01 · Build Mode</span>
          </div>
        </FadeIn>

        {/* Heading: About me */}
        <FadeIn delay={0.05} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing gap */}
        <div className="h-8 sm:h-12 md:h-14" />

        {/* Animated paragraph without text duplication */}
        <AnimatedText
          text={PROFILE.bioLong}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[680px] mx-auto text-[clamp(1rem,2vw,1.4rem)]"
        />

        {/* Quick Resume CTA Banner */}
        <FadeIn delay={0.1} y={20}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-widest font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <FileText className="w-4 h-4 text-[#B600A8]" />
              <span>View Resume (PDF)</span>
              <Download className="w-3.5 h-3.5 opacity-70 ml-1" />
            </a>
          </div>
        </FadeIn>

        {/* Proof Signals Grid */}
        <div className="w-full mt-14 sm:mt-18 pt-12 border-t border-white/10">
          <div className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Signals Beyond a Skills List</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {PROFILE.metrics.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} y={20}>
                <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1 font-mono">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#BBCCD7]">
                    {item.label}
                  </div>
                  <div className="text-xs text-[#D7E2EA]/60 font-light mt-1">
                    {item.subtext}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education & Academic Credentials Card */}
        <div className="w-full mt-12 text-left">
          <FadeIn delay={0.15} y={20}>
            <div className="p-6 sm:p-8 rounded-[32px] bg-white/[0.03] border border-white/10 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#7621B0]/20 border border-[#7621B0]/40 text-[#B600A8]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-mono">
                      Education &amp; Qualifications
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                      {PROFILE.education.degree}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-semibold">
                    CGPA: {PROFILE.education.cgpa}
                  </span>
                  <span className="text-xs font-mono text-[#BBCCD7]/70">
                    {PROFILE.education.period}
                  </span>
                </div>
              </div>

              <div className="text-sm text-[#D7E2EA]/85 font-light mb-4">
                <span className="text-white font-medium">{PROFILE.education.institution}</span>
              </div>

              {/* Achievements & IP */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                {PROFILE.education.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D7E2EA]/80 font-light">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Dedicated Engineering Proof & Stack Verification Block */}
        <div className="w-full mt-10 text-left">
          <FadeIn delay={0.2} y={20}>
            <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/15">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-mono block mb-1">
                    Production Stack
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    Engineering Proof &amp; Systems Verification
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono">
                  Verified Deployments
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                    AI &amp; Agent Core
                  </div>
                  <p className="text-xs text-[#D7E2EA]/80 font-light leading-relaxed">
                    LangChain, Qdrant Vector DB, BM25 Hybrid Search, Gemini API, Ollama Local Models, PyTorch
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B600A8] font-mono">
                    Vision &amp; Edge AI
                  </div>
                  <p className="text-xs text-[#D7E2EA]/80 font-light leading-relaxed">
                    YOLOv8, BoT-SORT, OpenCV, TensorFlow Lite INT8, Qwen2.5-VL, Grad-CAM Saliency Maps
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                    Backend &amp; APIs
                  </div>
                  <p className="text-xs text-[#D7E2EA]/80 font-light leading-relaxed">
                    FastAPI Async Workers, Python, PostgreSQL, REST Architecture, Atomic File Persistence
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7621B0] font-mono">
                    Frontend &amp; DevTools
                  </div>
                  <p className="text-xs text-[#D7E2EA]/80 font-light leading-relaxed">
                    Next.js 14/15, TypeScript, React, Semgrep AST Security, VS Code Extension APIs, Docker
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Journey Section anchor */}
        <div id="journey" className="w-full mt-24 sm:mt-32 text-left">
          <FadeIn delay={0.1} y={30}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center gap-1.5 mb-1">
                  <Compass className="w-4 h-4 text-[#7621B0]" />
                  <span>Timeline</span>
                </span>
                <h3 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  Journey
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 max-w-sm font-light">
                A hybrid engineer with a software-first direction: hardware fundamentals → AI systems.
              </p>
            </div>
          </FadeIn>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {PROFILE.journey.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} y={20}>
                <div className="p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-widest text-[#BBCCD7] font-mono mb-1">
                        {step.period}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed max-w-3xl">
                        {step.description}
                      </p>

                      {/* Evidence projects */}
                      {step.evidence && (
                        <div className="mt-4 flex items-center gap-2 flex-wrap">
                          <span className="text-xs uppercase tracking-wider text-[#BBCCD7]/60 font-medium">
                            Evidence:
                          </span>
                          {step.evidence.map((ev, eIdx) => (
                            <span
                              key={eIdx}
                              className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono"
                            >
                              {ev}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap md:flex-col md:items-end gap-1.5 shrink-0">
                      {step.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#BBCCD7]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA Spacing & Button */}
        <div className="mt-16 sm:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton onClick={onOpenContact} label="Work With Aayush" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
