"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, Cpu, ShieldCheck, Layers, Gauge } from 'lucide-react';
import { Github } from './Icons';

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  problem: string;
  solution: string;
  impact?: string;
  tools: string[];
  deliverables: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  tier?: 'featured' | 'specialized';
  statusBadge: string;
  architecturalDecisions?: { decision: string; rationale: string }[];
  measurableResults?: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl rounded-[32px] sm:rounded-[48px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-8 md:p-10 shadow-2xl z-10 my-6 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2.5 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-2 flex-wrap">
                  <span className="text-xl sm:text-2xl font-black text-white">{project.number}</span>
                  <span>/</span>
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[11px] border border-white/15">
                    {project.statusBadge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-[#D7E2EA]/80 mt-1 max-w-2xl font-light">
                  {project.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-semibold uppercase tracking-widest hover:bg-emerald-500/30 transition-transform hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenContact(project.title);
                  }}
                  className="px-5 sm:px-6 py-2.5 rounded-full uppercase tracking-widest text-xs font-semibold text-white transition-transform hover:scale-105 cursor-pointer"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                >
                  Discuss Project
                </button>
              </div>
            </div>

            {/* Showcase Visual Container */}
            <div className="mt-6 space-y-4">
              <div className="relative w-full h-[260px] sm:h-[380px] md:h-[460px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/15 bg-[#141414]">
                <img
                  src={project.images[selectedImage] || project.images[0]}
                  alt={`${project.title} showcase visual`}
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Multi-image thumb strip if available */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(idx)}
                      className={`relative h-20 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImage === idx
                          ? 'border-white scale-[1.02]'
                          : 'border-white/20 opacity-60 hover:opacity-90'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Deep Technical Case Study Breakdown */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="md:col-span-2 space-y-6">
                {/* 1. Problem */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                    The Problem &amp; Operational Friction
                  </h4>
                  <p className="text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* 2. Solution & Architecture */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#7621B0]" />
                    Engineered Solution &amp; System Architecture
                  </h4>
                  <p className="text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* 3. Architectural Decisions (Why this tech stack?) */}
                {project.architecturalDecisions && project.architecturalDecisions.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Key Architectural Decisions &amp; Rationale
                    </h4>
                    <div className="space-y-2.5">
                      {project.architecturalDecisions.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10"
                        >
                          <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                            {item.decision}
                          </div>
                          <p className="text-xs text-[#D7E2EA]/75 font-light leading-relaxed">
                            {item.rationale}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Measurable Engineering Proof / Results */}
                {project.measurableResults && project.measurableResults.length > 0 ? (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-2 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                      Quantifiable Engineering Proof &amp; Results
                    </h4>
                    <div className="space-y-1.5">
                      {project.measurableResults.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-300/90 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : project.impact ? (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Key Result &amp; Impact
                    </h4>
                    <p className="text-sm text-emerald-300/90 font-light leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                ) : null}

                {/* 5. Deliverables */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-2">
                    Key Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-4 bg-white/5 rounded-3xl p-5 border border-white/10">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-light">System Classification</div>
                  <div className="text-xs font-semibold text-white px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 inline-block mt-1 font-mono">
                    {project.statusBadge}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-light">Domain Category</div>
                  <div className="text-sm font-semibold text-white">{project.category}</div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-light">Technologies &amp; Protocols</div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-white/10 text-white font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-light">Lead Engineer</div>
                  <div className="text-sm font-medium text-white/90 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Aayush Shelar</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2.5 border-t border-white/10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-semibold uppercase tracking-wider"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Launch Live Application →</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#BBCCD7] hover:text-white underline underline-offset-4"
                    >
                      <span>Explore Repository on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
