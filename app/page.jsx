import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectShowcase from "@/components/ProjectShowcase";
import Timeline from "@/components/Timeline";
import QuoteSection from "@/components/QuoteSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Hero />
      <TechStack />
      <ProjectShowcase />
      <Timeline />
      <QuoteSection />

    </main>
  );
}
