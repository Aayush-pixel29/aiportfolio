"use client";
import React, { useRef, useState, useEffect } from 'react';

interface MarqueeItem {
  title: string;
  category: string;
  src: string;
}

const ROW_1_ITEMS: MarqueeItem[] = [
  { title: 'SRE & FinOps Triage Swarm', category: 'Multi-Agent Swarm', src: '/images/sre-autonomous.jpg' },
  { title: 'SearchOps', category: 'Search & Hybrid IR', src: '/images/searchops.jpg' },
  { title: 'SENTINEL-X', category: 'Agent Control Plane', src: '/images/sentinel-x.jpg' },
  { title: 'SkillFoundry', category: 'Agent Learning', src: '/images/skillfoundry.jpg' },
  { title: 'Doc-Gen Agent API', category: 'AI Application', src: '/images/doc-gen-agent.jpg' },
  { title: 'Recon AI', category: 'Disaster Response', src: '/images/recon-ai.webp' },
];

const ROW_2_ITEMS: MarqueeItem[] = [
  { title: 'Passion Protocol', category: 'Vector Matching', src: '/images/passion-protocol.jpg' },
  { title: 'AI Traffic Flow Analyzer', category: 'Computer Vision', src: '/images/traffic.webp' },
  { title: 'IndicDoc-VQA', category: 'Edge VLM', src: '/images/indicdoc-vqa.jpg' },
  { title: 'Edge Chest X-Ray', category: 'Edge AI / Medical', src: '/images/xray-triage.webp' },
  { title: 'Interview Agent', category: 'AI Agents', src: '/images/interview-agent.jpg' },
];

// Tripled lists for seamless scrolling
const TRIPLED_ROW_1 = [...ROW_1_ITEMS, ...ROW_1_ITEMS, ...ROW_1_ITEMS];
const TRIPLED_ROW_2 = [...ROW_2_ITEMS, ...ROW_2_ITEMS, ...ROW_2_ITEMS];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.28;
      setOffset(currentOffset);
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="Project Preview Carousel"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-36 pb-12 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3.5">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3.5 will-change-transform"
          style={{
            transform: `translateX(${offset - 200}px)`,
          }}
        >
          {TRIPLED_ROW_1.map((item, index) => {
            const isClone = index >= ROW_1_ITEMS.length;
            return (
              <div
                key={`row1-${index}`}
                aria-hidden={isClone ? 'true' : undefined}
                className="relative group w-[260px] xs:w-[300px] sm:w-[380px] md:w-[440px] h-[170px] xs:h-[190px] sm:h-[240px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-lg"
              >
                <img
                  src={item.src}
                  alt={isClone ? '' : item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-3.5 sm:p-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#BBCCD7] font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3.5 will-change-transform"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
          }}
        >
          {TRIPLED_ROW_2.map((item, index) => {
            const isClone = index >= ROW_2_ITEMS.length;
            return (
              <div
                key={`row2-${index}`}
                aria-hidden={isClone ? 'true' : undefined}
                className="relative group w-[260px] xs:w-[300px] sm:w-[380px] md:w-[440px] h-[170px] xs:h-[190px] sm:h-[240px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-lg"
              >
                <img
                  src={item.src}
                  alt={isClone ? '' : item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-3.5 sm:p-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#BBCCD7] font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
