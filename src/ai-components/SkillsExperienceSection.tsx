"use client";
import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { PROFILE } from '../data/profile';
import { Cpu, Layers, Terminal, Server, Briefcase, CheckCircle } from 'lucide-react';

interface SkillsExperienceSectionProps {
  onOpenContact?: (topic?: string) => void;
  onNavigate?: (sectionId: string) => void;
}

export const SkillsExperienceSection: React.FC<SkillsExperienceSectionProps> = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<number>(0);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu className="w-4 h-4 text-[#B600A8]" />;
      case 1:
        return <Layers className="w-4 h-4 text-[#7621B0]" />;
      case 2:
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 3:
      default:
        return <Terminal className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 sm:py-32 relative z-10 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center gap-1.5 mb-1">
                <Cpu className="w-4 h-4 text-[#B600A8]" />
                <span>Technical Architecture / 04</span>
              </span>
              <h2
                style={{ fontSize: 'clamp(2.5rem, 8vw, 96px)' }}
                className="hero-heading font-black uppercase tracking-tight leading-none"
              >
                Skill Map
              </h2>
            </div>
            <p className="text-sm text-[#D7E2EA]/70 max-w-sm font-light">
              Verified competencies backed by concrete production repositories and deployed architectures.
            </p>
          </div>
        </FadeIn>

        {/* Skill Map Tabs & Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Selectors */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {PROFILE.skillMap.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSkillCategory(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border shrink-0 flex items-center justify-between w-auto lg:w-full min-w-[190px] lg:min-w-0 ${
                  activeSkillCategory === idx
                    ? 'bg-white/10 border-white text-white font-semibold shadow-lg'
                    : 'bg-white/[0.02] border-white/10 text-[#BBCCD7] hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {getCategoryIcon(idx)}
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm uppercase tracking-wider">{cat.title}</span>
                    {cat.verificationBadge && (
                      <span className="text-[10px] text-cyan-400/80 font-mono hidden sm:inline-block">
                        {cat.verificationBadge}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-mono opacity-60">0{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Active Skills Display */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-[32px] bg-white/[0.03] border border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                  {getCategoryIcon(activeSkillCategory)}
                  {PROFILE.skillMap[activeSkillCategory].title}
                </h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-300 font-mono self-start sm:self-auto border border-white/15">
                {PROFILE.skillMap[activeSkillCategory].verificationBadge ||
                  `${PROFILE.skillMap[activeSkillCategory].skills.length} Capabilities`}
              </span>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {PROFILE.skillMap[activeSkillCategory].skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs sm:text-sm font-mono transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Evidence Projects */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Verified Production Proof:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {PROFILE.skillMap[activeSkillCategory].evidence.map((ev, eIdx) => (
                  <span
                    key={eIdx}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white font-mono border border-white/10"
                  >
                    {ev}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="mt-28 sm:mt-36">
          <FadeIn delay={0} y={30}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center gap-1.5 mb-1">
                  <Briefcase className="w-4 h-4 text-[#7621B0]" />
                  <span>Work History / 05</span>
                </span>
                <h2
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 96px)' }}
                  className="hero-heading font-black uppercase tracking-tight leading-none"
                >
                  Experience
                </h2>
              </div>
              <p className="text-sm text-[#D7E2EA]/70 max-w-sm font-light">
                Industrial hardware-in-the-loop validation, machine learning research, and full-stack software delivery.
              </p>
            </div>
          </FadeIn>

          {/* Timeline of roles */}
          <div className="space-y-6">
            {PROFILE.experience.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} y={20}>
                <div className="p-6 sm:p-8 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left Column: Role & Company */}
                  <div className="md:w-1/3">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#BBCCD7] block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-[#D7E2EA]/80 font-medium mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Right Column: Highlights & Evidence */}
                  <div className="md:w-2/3 space-y-3">
                    <ul className="space-y-2 text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-[#B600A8] font-bold">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Evidence badges */}
                    {exp.evidence && (
                      <div className="flex items-center gap-2 pt-2 flex-wrap">
                        {exp.evidence.map((ev, eIdx) => (
                          <span
                            key={eIdx}
                            className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#BBCCD7]"
                          >
                            {ev}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
