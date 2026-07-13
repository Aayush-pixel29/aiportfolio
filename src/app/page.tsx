import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
import OtherProjects from "@/components/OtherProjects";
import Toolkit from "@/components/Toolkit";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto pb-32 px-4 relative z-10">
      
      {/* Hero Section */}
      <section id="home" className="w-full pt-12 mb-32">
        <Hero />
      </section>

      <div className="w-full flex flex-col gap-32">
        
        {/* Experience Section */}
        <section id="experience" className="w-full flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono">
              <span className="text-[#AB9FF2]">01.</span> Experience
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          <div className="w-full pl-0 md:pl-12">
            <Experience />
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="w-full flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono">
              <span className="text-[#AB9FF2]">02.</span> Featured Work
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          <div className="w-full pl-0 md:pl-12">
            <FeaturedWork />
            <div className="mt-8">
              <OtherProjects />
            </div>
          </div>
        </section>

        {/* Toolkit Section */}
        <section id="toolkit" className="w-full flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono">
              <span className="text-[#AB9FF2]">03.</span> Toolkit
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          <div className="w-full pl-0 md:pl-12">
            <Toolkit />
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="w-full flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono">
              <span className="text-[#AB9FF2]">04.</span> Achievements
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          <div className="w-full pl-0 md:pl-12">
            <Achievements />
          </div>
        </section>

      </div>
    </div>
  );
}
