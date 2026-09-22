"use client";

import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="w-[min(1160px,calc(100%-36px))] mx-auto min-h-[810px] grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-[50px] pt-[88px] pb-[70px]">
      {/* Left — Text */}
      <div>
        <span className="inline-flex items-center gap-2 border border-[#aaa5bd] bg-[#e8e3ff] rounded-full px-2.5 py-[7px] font-mono text-[10px] uppercase tracking-[0.06em]">
          <i className="w-[7px] h-[7px] rounded-full bg-[#40c86a] shadow-[0_0_0_5px_rgba(64,200,106,0.13)] block" />
          Available · Independent Freelancer
        </span>

        <h1 className="text-[clamp(64px,9vw,124px)] leading-[0.82] tracking-[-0.09em] my-6 font-bold">
          Software.<br />
          <span className="text-blue">AI.</span><br />
          <span className="text-coral">Systems.</span>
        </h1>

        <p className="text-lg leading-relaxed text-[#55576a] max-w-[700px]">
          I&apos;m <b>Aayush Shelar</b> — a software and AI builder who turns ideas into working products.
          My work spans AI agents, full-stack applications, developer tools, computer vision,
          edge systems and hardware-connected software.
        </p>

        <div className="flex gap-[9px] flex-wrap mt-7">
          <a href="#work" className="inline-flex items-center gap-[7px] px-[15px] py-3 border border-ink rounded-[10px] text-[13px] font-bold bg-ink text-white hover:-translate-y-[3px] hover:shadow-[4px_4px_0_var(--coral)] transition-all">
            Explore my work ↓
          </a>
          <a href="https://github.com/Aayush-pixel29" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[7px] px-[15px] py-3 border border-ink rounded-[10px] text-[13px] font-bold bg-white/30 hover:-translate-y-[3px] hover:shadow-[4px_4px_0_var(--coral)] transition-all">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/aayush-shelar-166b99249/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[7px] px-[15px] py-3 border border-ink rounded-[10px] text-[13px] font-bold bg-white/30 hover:-translate-y-[3px] hover:shadow-[4px_4px_0_var(--coral)] transition-all">
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Right — Avatar Card */}
      <div className="h-[550px] relative flex items-center justify-center">
        {/* Main avatar shell */}
        <div className="w-[390px] h-[485px] max-w-full border border-ink/80 rounded-[38px] bg-gradient-to-br from-[rgba(255,253,248,0.9)] to-[rgba(217,210,255,0.78)] shadow-brutal-blue relative overflow-hidden isolate">
          {/* Radial glow behind avatar */}
          <div className="absolute w-[380px] h-[380px] rounded-full left-[5px] top-[10px] bg-[radial-gradient(circle_at_50%_42%,#fff_0_8%,rgba(155,234,255,0.9)_18%,rgba(139,109,255,0.75)_48%,rgba(52,87,255,0.5)_68%,transparent_70%)] blur-[1px] -z-[1]" />
          {/* Inner border */}
          <div className="absolute inset-[22px] border border-ink/[0.16] rounded-[29px] pointer-events-none" />

          {/* Top labels */}
          <div className="absolute left-[22px] right-[22px] top-[18px] flex justify-between z-[4] font-mono text-[9px] text-muted">
            <span>PROFILE / 01</span>
            <span>BUILD MODE</span>
          </div>

          {/* Avatar image */}
          <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[85%] h-[85%] z-[2]">
            <Image
              src="/images/avatar-main.webp"
              alt="Aayush Shelar"
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Bottom label */}
          <div className="absolute left-5 right-5 bottom-[18px] z-[5] p-[11px_13px] border border-ink/20 rounded-[14px] bg-paper/[0.83] backdrop-blur-[10px] flex justify-between items-end">
            <div>
              <strong className="text-[15px]">Aayush Shelar</strong><br />
              <span className="font-mono text-[8px] text-muted">MUMBAI, INDIA · SOFTWARE × AI</span>
            </div>
            <span className="font-mono text-[9px] text-muted">01</span>
          </div>
        </div>

        {/* Floating badges */}
        <span className="absolute z-[8] top-[62px] right-0 lg:right-0 border border-ink rounded-[11px] px-2.5 py-2 font-mono text-[10px] bg-mint shadow-[3px_3px_0_var(--ink)] rotate-[5deg]">
          AI BUILDER
        </span>
        <span className="absolute z-[8] bottom-[72px] left-0 lg:left-0 border border-ink rounded-[11px] px-2.5 py-2 font-mono text-[10px] bg-coral shadow-[3px_3px_0_var(--ink)] -rotate-[6deg]">
          FREELANCER
        </span>

        {/* Small work card */}
        <div className="absolute right-[-15px] bottom-[24px] w-[150px] h-[118px] border border-ink rounded-[17px] bg-paper shadow-[5px_5px_0_var(--ink)] z-10 overflow-hidden rotate-[4deg]">
          <Image src="/images/avatar-working.webp" alt="Working" width={150} height={82} className="w-full h-[82px] object-cover object-center" />
          <div className="font-mono text-[8px] p-2 bg-paper">STATUS: BUILDING ↗</div>
        </div>
      </div>
    </section>
  );
};
