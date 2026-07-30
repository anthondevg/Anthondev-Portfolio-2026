import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHero } from "@/components/home/HomeHero";
import {
  AboutSection,
  CapabilitiesSection,
  ContactSection,
  ExperienceSection,
  FocusMarquee,
  WorkSection,
} from "@/components/home/HomeSections";
import { Navigation } from "@/components/Navigation";
import { NeuralCodeSection } from "@/components/home/NeuralCodeSection";
import { getAllWork } from "@/lib/work";

export default function Home() {
  const projects = getAllWork();

  return (
    <>
      <a
        className="fixed top-4 left-4 z-[100] -translate-y-[200%] bg-paper px-4 py-3 text-ink transition-transform focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>

      <Navigation />

      <main id="main">
        <HomeHero />
        <FocusMarquee />
        <WorkSection projects={projects} />
        <CapabilitiesSection />
        <ExperienceSection />
        <AboutSection />
        <NeuralCodeSection />
        <ContactSection />
      </main>

      <HomeFooter />
    </>
  );
}
