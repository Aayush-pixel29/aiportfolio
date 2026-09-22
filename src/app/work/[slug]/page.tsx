import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import { SectionLabel } from '../../../components/ui/SectionLabel';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface CaseStudyProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg">
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
        <Button href="/" variant="ghost" className="mb-12 border border-ink hover:bg-paper">
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Button>

        <SectionLabel number={project.number} title="Case Study" />
        
        <header className="mb-16">
          <Badge variant="blue" className="mb-6">{project.category}</Badge>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 font-medium max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {project.image && (
          <div className="w-full aspect-video border-[2px] border-ink rounded-[20px] overflow-hidden mb-20 shadow-[8px_8px_0_var(--ink)] bg-paper relative">
            <Image 
              src={project.image} 
              alt={`${project.title} interface`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-20">
          <div className="md:col-span-8 space-y-16">
            {project.problem && (
              <section>
                <h2 className="font-display text-3xl font-bold text-ink mb-6">Problem</h2>
                <p className="text-lg text-ink/70 font-medium leading-relaxed bg-paper p-6 rounded-[15px] border border-ink shadow-[4px_4px_0_var(--ink)]">
                  {project.problem}
                </p>
              </section>
            )}

            {project.approach && (
              <section>
                <h2 className="font-display text-3xl font-bold text-ink mb-6">Approach</h2>
                <p className="text-lg text-ink/70 font-medium leading-relaxed bg-paper p-6 rounded-[15px] border border-ink shadow-[4px_4px_0_var(--ink)]">
                  {project.approach}
                </p>
              </section>
            )}

            {project.architecture && (
              <section>
                <h2 className="font-display text-3xl font-bold text-ink mb-6">Architecture & Solution</h2>
                <p className="text-lg text-ink/70 font-medium leading-relaxed bg-paper p-6 rounded-[15px] border border-ink shadow-[4px_4px_0_var(--ink)]">
                  {project.architecture}
                </p>
              </section>
            )}

            {project.engineeringDecisions && (
              <section>
                <h2 className="font-display text-3xl font-bold text-ink mb-6">Engineering Decisions</h2>
                <p className="text-lg text-ink/70 font-medium leading-relaxed bg-paper p-6 rounded-[15px] border border-ink shadow-[4px_4px_0_var(--ink)]">
                  {project.engineeringDecisions}
                </p>
              </section>
            )}

            {project.result && (
              <section>
                <h2 className="font-display text-3xl font-bold text-ink mb-6">Outcome</h2>
                <p className="text-lg text-ink/70 font-medium leading-relaxed bg-paper p-6 rounded-[15px] border border-ink shadow-[4px_4px_0_var(--ink)]">
                  {project.result}
                </p>
              </section>
            )}
          </div>

          <aside className="md:col-span-4">
            <div className="bg-paper border border-ink rounded-[20px] p-8 shadow-[6px_6px_0_var(--ink)] sticky top-32">
              <h3 className="font-mono text-[13px] font-bold tracking-widest uppercase text-ink/60 mb-6">
                Technology
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-[8px] bg-bg border border-ink text-xs font-mono font-bold text-ink shadow-[2px_2px_0_var(--ink)]">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="font-mono text-[13px] font-bold tracking-widest uppercase text-ink/60 mb-6">
                Links
              </h3>
              <div className="flex flex-col gap-4">
                {project.demo && (
                  <Button href={project.demo} external className="w-full justify-between group bg-blue hover:shadow-[4px_4px_0_var(--ink)]">
                    Live Demo
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                )}
                {project.github && (
                  <Button href={project.github} external variant="outline" className="w-full justify-between group bg-bg hover:bg-paper hover:shadow-[4px_4px_0_var(--ink)]">
                    Source Code
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
