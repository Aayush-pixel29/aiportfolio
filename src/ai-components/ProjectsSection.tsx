"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ProjectDetail } from './ProjectModal';
import { PROJECTS_DATA } from '../data/projects';
import { Sparkles, ExternalLink, ArrowDownRight, Layers, ShieldCheck } from 'lucide-react';
import { Github } from './Icons';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectDetail) => void;
}

interface CardProps {
  project: ProjectDetail;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectDetail) => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Calculate stacking target scale
  const targetScale = Math.max(0.9, 1 - (totalCards - 1 - index) * 0.025);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[520px] sm:min-h-[600px] md:min-h-[640px] flex items-start justify-center sticky"
      style={{
        top: `calc(3.5rem + ${index * 14}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[28px] sm:rounded-[44px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-7 md:p-9 shadow-2xl transition-shadow flex flex-col justify-between"
      >
        {/* Top Row: Number, Category label, Status Badge, Project name, Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 md:pb-6 border-b border-white/10">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            {/* Number */}
            <span
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight font-mono"
            >
              {project.number}
            </span>

            {/* Category label, Status Badge & Project name */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
                  {project.category} · {project.year}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/15">
                  {project.statusBadge}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action buttons (3-Button Standard: GitHub, Live Demo, Case Study) */}
          <div className="flex items-center gap-2 self-start sm:self-center flex-wrap pt-1 sm:pt-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 sm:p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                title="View GitHub Repository"
                aria-label="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/25 transition-all hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                title="Open Live Deployed Demo"
                aria-label="Open Live Demo"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            )}
            <LiveProjectButton onClick={() => onSelectProject(project)} label="Case Study" />
          </div>
        </div>

        {/* Tagline / Challenge summary */}
        <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light mt-3 sm:mt-4 line-clamp-2">
          {project.tagline}
        </p>

        {/* Bottom Row: Image showcase & specs */}
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 h-full">
          {/* Left Column (40% width): Specs & Measurable Result preview */}
          <div className="w-full md:w-[40%] flex flex-col justify-between gap-3 sm:gap-4">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#BBCCD7] font-semibold">
                Technologies &amp; Architecture
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-white/90 font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem snapshot box / Measurable proof */}
            <div
              onClick={() => onSelectProject(project)}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 cursor-pointer hover:border-white/25 transition-colors"
            >
              <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                Engineering Proof:
              </span>
              <p className="text-xs text-[#D7E2EA]/85 line-clamp-3 font-light">
                {project.measurableResults?.[0] || project.impact || project.solution}
              </p>
            </div>
          </div>

          {/* Right Column (60% width): High-res Project Image */}
          <div
            className="w-full md:w-[60%] min-h-[200px] sm:min-h-[260px] md:min-h-[300px] rounded-[24px] sm:rounded-[40px] overflow-hidden bg-[#161616] cursor-pointer group relative border border-white/10"
            onClick={() => onSelectProject(project)}
          >
            <img
              src={project.images[0]}
              alt={`${project.title} showcase`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span className="text-xs uppercase tracking-wider text-white font-medium">
                Click to explore case study &amp; architectural decisions →
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'featured' | 'all' | string>('featured');

  const categories = [
    { id: 'featured', label: '⭐ Featured Flagships (4)' },
    { id: 'all', label: 'All Systems Archive (10)' },
    { id: 'AI Infrastructure', label: 'AI Infrastructure' },
    { id: 'AI Agents', label: 'AI Agents' },
    { id: 'Vision-Language / Edge AI', label: 'Edge AI & Vision' },
    { id: 'Developer Tools', label: 'Developer Tools' },
  ];

  const filteredProjects =
    activeTab === 'featured'
      ? PROJECTS_DATA.filter((p) => p.tier === 'featured' || p.featured)
      : activeTab === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
          (p) =>
            p.category.toLowerCase().includes(activeTab.toLowerCase()) ||
            (activeTab === 'Vision-Language / Edge AI' &&
              (p.category.includes('Edge') || p.category.includes('Vision')))
        );

  return (
    <section
      id="work"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-32 pb-28 sm:pb-36 md:pb-44 px-4 sm:px-6 md:px-10"
    >
      {/* Heading: Project */}
      <FadeIn delay={0} y={40} className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
          <span>Selected Work / 02</span>
        </div>
        <h2
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
        >
          Projects
        </h2>
        <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl mx-auto mt-4 font-light">
          Engineered AI systems spanning multi-agent autonomous swarms, offline edge models, developer security tooling, and full-stack platforms.
        </p>
      </FadeIn>

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto mb-12 flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === cat.id
                ? 'bg-white text-black shadow-lg scale-105'
                : 'bg-white/5 text-[#BBCCD7] border border-white/10 hover:border-white/20'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sticky Stacking Project Cards */}
      <div className="relative max-w-6xl mx-auto space-y-12 md:space-y-20">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={filteredProjects.length}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>

      {/* Bottom Switcher CTA if in Featured view */}
      {activeTab === 'featured' && (
        <div className="max-w-6xl mx-auto mt-16 text-center">
          <FadeIn delay={0.2} y={20}>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-semibold transition-all hover:scale-105 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Explore 6 More Specialized Systems in Archive →</span>
            </button>
          </FadeIn>
        </div>
      )}
    </section>
  );
};

