"use client";

import React from 'react';
import { Project } from '../../data/projects';
import { Badge } from '../ui/Badge';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export const ProjectCard = ({ project, index, className }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative bg-paper border border-ink rounded-[20px] overflow-hidden hover:-translate-y-[4px] hover:shadow-[6px_6px_0_var(--ink)] transition-all duration-300 flex flex-col h-full",
        className
      )}
    >
      {/* Project Image */}
      {project.image && (
        <div className="w-full h-48 sm:h-56 md:h-64 border-b border-ink relative overflow-hidden bg-bg">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex-1 p-8 md:p-10 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <span className="font-mono text-[13px] font-bold text-ink/40 tracking-widest uppercase">
            /{project.number}
          </span>
          <Badge variant="blue">{project.category}</Badge>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4 group-hover:text-blue transition-colors">
          {project.title}
        </h3>
        
        <p className="text-ink/70 leading-relaxed font-medium mb-8 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1.5 rounded-[8px] bg-bg border border-ink/20 text-xs font-mono font-bold text-ink group-hover:border-ink/50 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-ink flex flex-wrap items-center gap-3">
          {project.demo && (
            <Button href={project.demo} external className="bg-blue text-white border-ink hover:shadow-[4px_4px_0_var(--ink)]">
              Live Demo <ArrowUpRight size={16} className="ml-2" />
            </Button>
          )}
          
          {project.caseStudy && (
            <Button href={project.caseStudy} variant="outline" className="border-ink text-ink bg-transparent hover:bg-paper hover:shadow-[4px_4px_0_var(--ink)]">
              Case Study
            </Button>
          )}

          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-auto text-ink/60 hover:text-ink transition-colors flex items-center gap-2 text-sm font-bold p-2"
              aria-label="GitHub Repository"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
