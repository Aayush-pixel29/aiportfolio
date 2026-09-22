import MeshVisual from "@/components/MeshVisual";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Toolkit from "@/components/Toolkit";
import Experience from "@/components/Experience";
import Connect from "@/components/Connect";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex w-full relative">
      <MeshVisual />
      <Nav />
      
      {/* Main Content Area - padded on left for Nav on desktop */}
      <div className="flex-1 xl:ml-24 px-6 md:px-16 lg:px-32 relative">
        <Reveal><Hero /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Work /></Reveal>
        <Reveal><Toolkit /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Connect /></Reveal>
        
        {/* Footer */}
        <footer className="w-full py-8 border-t border-border flex justify-between items-center z-10 relative">
          <p className="text-xs font-mono text-text-dim">© {new Date().getFullYear()} Aayush Shelar.</p>
          <a href="#top" className="text-xs font-mono text-signal-cyan hover:text-white transition-colors uppercase">
            {"//"} Back to Top
          </a>
        </footer>
      </div>
    </div>
  );
}
