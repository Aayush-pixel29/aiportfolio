'use client';

import React, { useState } from 'react';
import { Terminal, Rocket, Check, Copy, FileText, ArrowRight } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const DeploymentGuide: React.FC = () => {
  const { showNotification } = useDemo();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const steps = [
    {
      title: '1. Push Code to your GitHub Repository',
      desc: 'Stage all files including modular components and SPA rewrite rules.',
      cmd: 'git init\ngit add .\ngit commit -m "feat: 3-in-1 multi-client prototypes (salon, restaurant, clinic)"\ngit branch -M main\ngit remote add origin https://github.com/your-username/aiportfolio.git\ngit push -u origin main'
    },
    {
      title: '2. Deploy to Vercel (Auto-Configured)',
      desc: 'Import your GitHub repo into Vercel. The included vercel.json guarantees clean client-side routing.',
      cmd: 'npm install -g vercel\nvercel --prod'
    },
    {
      title: '3. Verify Production Live URLs',
      desc: 'Your deployment is immediately accessible at the requested client endpoints.',
      cmd: '# Client Demo Hub:      https://aiportfolio-kappa.vercel.app/demo\n# Salon Prototype:      https://aiportfolio-kappa.vercel.app/demo/salon\n# Restaurant Prototype: https://aiportfolio-kappa.vercel.app/demo/restaurant\n# Clinic Prototype:     https://aiportfolio-kappa.vercel.app/demo/clinic'
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(index);
    showNotification('Commands copied to clipboard!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-16 bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <Rocket className="w-4 h-4" />
            <span>GitHub & Vercel Quick Deployment Guide</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            How to Deploy All 3 Prototypes
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl font-light">
            Follow these commands to deploy the entire multi-prototype system to your GitHub repo and Vercel in less than 2 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-neutral-950 rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between shadow-xl space-y-4"
            >
              <div className="space-y-2">
                <h3 className="font-bold text-sm text-white flex items-center justify-between">
                  <span>{step.title}</span>
                  <button
                    onClick={() => handleCopy(step.cmd, idx)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                    title="Copy command"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-800/80 font-mono text-[11px] text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
                {step.cmd}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
