"use client";

import React from 'react';
import { Project } from '../../data/projects';
import { Badge } from '../ui/Badge';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export const ProjectCard = ({ project, index, className }: ProjectCardProps) => {
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative bg-white border border-ink/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-electric/5 transition-all duration-500 flex flex-col h-full",
        className
      )}
    >
      <div className="flex-1 p-8 md:p-10 flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <span className="font-mono text-sm text-ink/30 font-medium">/{number}</span>
          <Badge variant="electric" className="bg-electric/5">{project.category}</Badge>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-medium text-ink mb-4 group-hover:text-electric transition-colors">
          {project.title}
        </h3>
        
        <p className="text-ink/60 leading-relaxed mb-10 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {project.stack.map(tech => (
            <span key={tech} className="px-3 py-1 rounded-full bg-paper border border-ink/5 text-xs font-mono text-ink/60 group-hover:border-electric/20 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-ink/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ink/50 hover:text-ink transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="hidden sm:inline">Source</span>
              </a>
            )}
          </div>
          <Link 
            href={`/work/${project.slug}`} 
            className="flex items-center gap-2 text-electric font-medium text-sm hover:underline"
          >
            Case Study
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
