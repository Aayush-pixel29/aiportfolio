"use client";

import React, { useState } from 'react';
import { HeroSection } from '@/ai-components/HeroSection';
import { MarqueeSection } from '@/ai-components/MarqueeSection';
import { AboutSection } from '@/ai-components/AboutSection';
import { ServicesSection } from '@/ai-components/ServicesSection';
import { ProjectsSection } from '@/ai-components/ProjectsSection';
import { SkillsExperienceSection } from '@/ai-components/SkillsExperienceSection';
import { Footer } from '@/ai-components/Footer';
import { ContactModal } from '@/ai-components/ContactModal';
import { ProjectModal, ProjectDetail } from '@/ai-components/ProjectModal';


export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('AI & Agentic Systems');
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleSelectProject = (project: ProjectDetail) => {
    setActiveProject(project);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
      />

      <MarqueeSection />

      <AboutSection
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
      />

      <ServicesSection
        onSelectService={(serviceName) => handleOpenContact(serviceName)}
      />

      <ProjectsSection onSelectProject={handleSelectProject} />

      <SkillsExperienceSection
        onOpenContact={(topic) => handleOpenContact(topic)}
        onNavigate={handleNavigate}
      />

      <Footer
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialService={selectedService}
      />

      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={handleCloseProject}
        onOpenContact={(projectName) =>
          handleOpenContact(`Discussion regarding project: ${projectName}`)
        }
      />

      
    </div>
  );
}
