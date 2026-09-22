import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Journey } from "@/components/journey/Journey";
import { Proof } from "@/components/journey/Proof";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SkillMap } from "@/components/skills/SkillMap";
import { Experience } from "@/components/experience/Experience";
import { Now } from "@/components/now/Now";
import { FreelanceCTA } from "@/components/freelance/FreelanceCTA";
import { Contact } from "@/components/contact/Contact";

import { Ticker } from "@/components/ui/Ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full relative bg-bg">
        <Hero />
        <Ticker />
        <Journey />
        <ProjectGrid />
        <Proof />
        <SkillMap />
        <Experience />
        <Now />
        <FreelanceCTA />
        <Contact />
      </div>
    </>
  );
}
