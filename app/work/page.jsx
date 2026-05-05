import ProjectCard from "@/components/ProjectCard";
import GSAPReveal from "@/components/GSAPReveal";

const projects = [
  {
    id: "PROJ_01",
    title: "EcoSphere Dashboard",
    description: "A high-performance environmental monitoring dashboard built with Next.js and Tailwind. Real-time data visualization with fluid animations and MERN backend.",
    tags: ["REACT", "NODE.JS", "MONGODB", "D3.JS"],
    featured: true
  },
  {
    id: "PROJ_02",
    title: "NeuroLink UI",
    description: "Experimental glassmorphism design system for a neural interface application. Focused on accessibility and micro-interactions.",
    tags: ["TYPESCRIPT", "NEXT.JS", "FRAMER_MOTION"],
    featured: false
  },
  {
    id: "PROJ_03",
    title: "StreamFlow API",
    description: "Scalable video streaming backend with edge caching and real-time transcoding. Optimized for high concurrency.",
    tags: ["EXPRESS", "REDIS", "AWS", "FFMPEG"],
    featured: false
  },
  {
    id: "PROJ_04",
    title: "Architect CRM",
    description: "Custom enterprise CRM for architectural firms. Features complex project management, client portals, and automated billing workflows.",
    tags: ["NEXT.JS", "TAILWIND", "MONGODB", "STRIPE"],
    featured: true
  }
];

export default function WorkPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-section-gap relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <GSAPReveal start="top 90%">
        <header className="mb-stack-lg border-l-4 border-primary-container pl-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.3em] font-bold">Archive_v2.5</span>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">BLUEPRINTS_</h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              A curated selection of projects I've built — from full-stack web apps to UI experiments. Each one engineered with intention and kinetic energy.
            </p>
          </div>
        </header>
      </GSAPReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
