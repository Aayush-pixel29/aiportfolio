"use client";

import { Star, Trophy, Activity } from "lucide-react";

export default function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      
      {/* Overview Card (Pink) */}
      <div className="phantom-card flex flex-col md:col-span-1 xl:col-span-1 border border-white/10 shadow-sm overflow-hidden">
        <div className="p-4 border-b-[3px] border-neo-black flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <Trophy size={20} className="fill-neo-black" />
            <span className="text-xl font-bold font-mono tracking-tight">2 / Major</span>
          </div>
          <button className="text-xs font-bold border border-white/10 px-2 py-1 shadow-sm">See details</button>
        </div>
        <div className="p-4 bg-neo-pink flex-1 flex flex-col justify-between">
          <div>
            <div className="text-2xl font-bold font-mono">10+</div>
            <div className="text-sm font-medium leading-tight mt-1">hackathons<br/>attended</div>
          </div>
          <div className="mt-4 flex justify-end">
            <Activity size={48} strokeWidth={1.5} className="text-white" />
          </div>
        </div>
      </div>

      {/* Review Card 1 (Aquaquest) */}
      <div className="phantom-card bg-white p-4 flex flex-col md:col-span-1 xl:col-span-1 border border-white/10 shadow-sm">
        <div className="flex justify-between items-center border-b-[2px] border-neo-black/20 pb-2 mb-3">
          <div>
            <h4 className="font-bold text-sm">Aquaquest</h4>
            <p className="text-[10px] uppercase font-bold text-white/60">Runner-up</p>
          </div>
          <div className="flex items-center gap-1 font-bold text-sm">
            <Star size={14} className="fill-neo-yellow text-neo-yellow" /> 4.9
          </div>
        </div>
        <p className="text-xs font-medium leading-relaxed">
          The progress made during this International Level Mega Event was immense! Competed among top teams and secured the Runner-up position by delivering a robust working model under tight constraints.
        </p>
      </div>

      {/* Review Card 2 (DIPEX) */}
      <div className="phantom-card bg-white p-4 flex flex-col md:col-span-1 xl:col-span-1 border border-white/10 shadow-sm">
        <div className="flex justify-between items-center border-b-[2px] border-neo-black/20 pb-2 mb-3">
          <div>
            <h4 className="font-bold text-sm">DIPEX</h4>
            <p className="text-[10px] uppercase font-bold text-white/60">State Level</p>
          </div>
          <div className="flex items-center gap-1 font-bold text-sm">
            <Star size={14} className="fill-neo-yellow text-neo-yellow" /> 4.8
          </div>
        </div>
        <p className="text-xs font-medium leading-relaxed">
          State Level Exhibition-cum-Competition of Working Models. Brilliant learning experience. Showcased advanced applied AI integration with embedded systems to a large audience.
        </p>
      </div>

      {/* Review Card 3 (Future) */}
      <div className="phantom-card bg-white p-4 flex flex-col md:col-span-1 xl:col-span-1 border border-white/10 shadow-sm hidden xl:flex">
        <div className="flex justify-between items-center border-b-[2px] border-neo-black/20 pb-2 mb-3">
          <div>
            <h4 className="font-bold text-sm">Next Gen AI</h4>
            <p className="text-[10px] uppercase font-bold text-white/60">Innovation</p>
          </div>
          <div className="flex items-center gap-1 font-bold text-sm">
            <Star size={14} className="fill-neo-yellow text-neo-yellow" /> 5.0
          </div>
        </div>
        <p className="text-xs font-medium leading-relaxed">
          Currently focusing on autonomous multi-agent RAG pipelines and scalable infrastructure. I love how practical implementation drives true technological breakthroughs.
        </p>
      </div>

    </div>
  );
}
