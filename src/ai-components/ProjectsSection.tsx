"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ProjectDetail } from './ProjectModal';
import { PROJECTS_DATA } from '../data/projects';
import { Sparkles, ExternalLink } from 'lucide-react';
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
      className="min-h-[580px] sm:min-h-[640px] flex items-start justify-center sticky"
      style={{
        top: `calc(4.5rem + ${index * 24}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-2xl transition-shadow flex flex-col justify-between"
      >
        {/* Top Row: Number, Category label, Project name, Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 md:pb-6 border-b border-white/10">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Number */}
            <span
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight font-mono"
            >
              {project.number}
            </span>

            {/* Category label & Project name */}
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
                {project.category} · {project.year}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 self-end sm:self-center flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                title="View GitHub Repository"
                aria-label="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/25 transition-all hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
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
          {/* Left Column (40% width): Specs & Secondary Visual */}
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

            {/* Problem snapshot box */}
            <div
              onClick={() => onSelectProject(project)}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 cursor-pointer hover:border-white/25 transition-colors"
            >
              <span className="text-[11px] uppercase tracking-wider text-[#BBCCD7] font-semibold block mb-1">
                The Challenge:
              </span>
              <p className="text-xs text-[#D7E2EA]/75 line-clamp-3 font-light">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Right Column (60% width): High-res Project Image */}
          <div
            className="w-full md:w-[60%] min-h-[220px] sm:min-h-[280px] md:min-h-[320px] rounded-[32px] sm:rounded-[44px] overflow-hidden bg-[#161616] cursor-pointer group relative border border-white/10"
            onClick={() => onSelectProject(project)}
          >
            <img
              src={project.images[0]}
              alt={`${project.title} showcase`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span className="text-xs uppercase tracking-wider text-white font-medium">
                Click to explore case study &amp; architecture →
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'AI Infrastructure',
    'AI Application',
    'Edge AI',
    'Developer Tools',
    'Computer Vision',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) =>
          p.category.toLowerCase().includes(activeFilter.toLowerCase())
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
        <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto mt-4 font-light">
          A collection of 10 flagship systems spanning multi-agent AI infrastructure, edge models, full-stack platforms, and developer tooling.
        </p>
      </FadeIn>

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto mb-12 flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              activeFilter === cat
                ? 'bg-white text-black shadow-lg scale-105'
                : 'bg-white/5 text-[#BBCCD7] border border-white/10 hover:border-white/20'
            }`}
          >
            {cat}
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
    </section>
  );
};
