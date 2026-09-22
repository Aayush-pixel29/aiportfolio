"use client";

import React from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionLabel } from '../ui/SectionLabel';

export const ProjectGrid = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <SectionLabel number="02" title="The 10 Projects" />
      
      <div className="mb-16 max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-6">
          Selected Work
        </h2>
        <p className="text-xl text-ink/60">
          A collection of exactly 10 flagship projects spanning AI infrastructure, edge models, full-stack systems, and developer tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {projects.map((project, index) => {
          // Editorial grid layout logic
          // Make 1st and 6th projects take full width on large screens
          const isLarge = index === 0 || index === 5;
          const colSpan = isLarge ? "lg:col-span-12" : "lg:col-span-6";

          return (
            <ProjectCard 
              key={project.slug}
              project={project}
              index={index}
              className={colSpan}
            />
          );
        })}
      </div>
    </section>
  );
};
