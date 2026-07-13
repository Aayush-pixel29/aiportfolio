"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "toolkit", "experience", "connect"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden xl:flex fixed left-0 top-0 h-screen w-24 flex-col items-center justify-center border-r border-border z-50 bg-background/50 backdrop-blur-sm">
      <div className="absolute top-12 cursor-pointer font-display font-medium text-xl text-white" onClick={() => scrollTo('top')}>
        AS
      </div>

      <div className="flex flex-col gap-12 relative w-full items-center">
        {/* Progress Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-border -z-10" />

        {["work", "toolkit", "experience", "connect"].map((section) => (
          <div 
            key={section}
            onClick={() => scrollTo(section)}
            className="relative cursor-pointer group flex items-center justify-center w-full"
          >
            {/* Dot */}
            <div className={`w-3 h-3 rounded-full transition-colors duration-300 z-10 ${activeSection === section ? 'bg-signal-amber' : 'bg-surface border border-border group-hover:bg-border'}`} />
            
            {/* Tooltip */}
            <div className="absolute left-12 px-3 py-1 bg-surface border border-border rounded text-xs font-mono text-text-dim opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none capitalize">
              {section}
            </div>
          </div>
        ))}
      </div>
      
      <a 
        href="/resume.pdf" 
        target="_blank"
        className="absolute bottom-12 rotate-[-90deg] font-mono text-xs text-text-dim hover:text-signal-cyan transition-colors uppercase tracking-widest whitespace-nowrap"
      >
        Download CV
      </a>
    </nav>
  );
}
