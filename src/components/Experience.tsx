"use client";

import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
      
      {/* SEDEMAC */}
      <div className="phantom-card p-5 flex gap-4 items-start hover:bg-[#0A0A0E] transition-colors">
        <div className="border border-white/10 p-2 bg-white shadow-sm shrink-0 mt-1">
          <Briefcase size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight">Product Support Engineer Intern</h3>
          <p className="text-sm font-medium mt-1">SEDEMAC Mechatronics Ltd.</p>
          <p className="text-xs text-white mt-1">Dec 2025 - May 2026</p>
        </div>
      </div>

      {/* Cognifyz */}
      <div className="phantom-card p-5 flex gap-4 items-start hover:bg-[#0A0A0E] transition-colors">
        <div className="border border-white/10 p-2 bg-white shadow-sm shrink-0 mt-1">
          <Briefcase size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight">Machine Learning Intern</h3>
          <p className="text-sm font-medium mt-1">Cognifyz Technologies</p>
          <p className="text-xs text-white mt-1">Oct 2025 - Nov 2025</p>
        </div>
      </div>

      {/* Education */}
      <div className="phantom-card p-5 flex gap-4 items-start hover:bg-[#0A0A0E] transition-colors">
        <div className="border border-white/10 p-2 bg-white shadow-sm shrink-0 mt-1">
          <GraduationCap size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight">B.Tech in ECE</h3>
          <p className="text-sm font-medium mt-1">Sharad Institute of Technology</p>
          <p className="text-xs text-white mt-1">2022 - 2026</p>
        </div>
      </div>

    </div>
  );
}
