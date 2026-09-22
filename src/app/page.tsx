import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Toolkit from "@/components/Toolkit";
import Experience from "@/components/Experience";
import OtherProjects from "@/components/OtherProjects";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Toolkit />
      <OtherProjects />
      <Experience />
      <Chatbot />
    </>
  );
}
