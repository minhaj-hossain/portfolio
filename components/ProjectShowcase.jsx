"use client";

import GSAPReveal from "@/components/GSAPReveal";
import ProjectPreviewCard from "@/components/ProjectPreviewCard";

const showcaseProjects = [
  {
    id: "SHOW_01",
    title: "Wanderlust",
    description: "A premium full-stack vacation rental platform engineered with Next.js 15 and React 19. Features a robust property listing system, secure authentication with Better Auth, and a cinematic UI/UX designed for global scaling.",
    tech: ["NEXT.JS 15", "REACT 19", "MONGODB", "BETTER_AUTH", "TAILWIND 4"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    githubLink: "https://github.com/minhaj-hossain/wanderlust",
    liveLink: null,
    featured: true
  },
  {
    id: "SHOW_02",
    title: "AI Model Hub",
    description: "A futuristic marketplace for cutting-edge AI models. Implements complex shopping cart logic, responsive product grids, and a high-tech aesthetic using the latest React 19 features.",
    tech: ["REACT 19", "TAILWIND 4", "DAISYUI", "VITE"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    githubLink: "https://github.com/minhaj-hossain/ai_model_hub",
    liveLink: null,
    featured: false
  },
  {
    id: "SHOW_03",
    title: "Book Vibe",
    description: "Interactive library management system featuring data visualization of reading habits. Integrates Chart.js for insightful analytics and a clean, responsive layout for personal collections.",
    tech: ["REACT", "TAILWIND", "CHART.JS", "VITE"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop",
    githubLink: "https://github.com/minhaj-hossain/book_vibe",
    liveLink: "http://www.book_vibe.surge.sh",
    featured: false
  }
];

export default function ProjectShowcase() {
  const featuredProject = showcaseProjects.find(p => p.featured);
  const secondaryProjects = showcaseProjects.filter(p => !p.featured);

  return (
    <section id="work" className="py-section-gap relative overflow-hidden">
      {/* Background Section Identifier */}
      <div className="absolute -left-20 top-0 vertical-text opacity-5 select-none pointer-events-none">
        <span className="font-display text-[150px] font-black text-white tracking-widest uppercase">WORKS_</span>
      </div>

      <GSAPReveal start="top 90%">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative z-10 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.4em] mb-4 font-bold block">Selected Works</span>
            <h2 className="font-display text-4xl md:text-7xl font-black text-on-surface tracking-tighter uppercase italic leading-[0.9]">
              PROOFS_OF<br/><span className="text-glow">CONCEPT</span>
            </h2>
          </div>
          <p className="text-on-surface-variant font-mono text-[10px] md:text-xs uppercase tracking-widest max-w-xs md:text-right leading-relaxed">
            Engineering digital experiences where motion meets mathematical precision.
          </p>
        </div>
      </GSAPReveal>

      <div className="space-y-12 relative z-10">
        {/* Featured Project */}
        {featuredProject && (
          <GSAPReveal 
            y={60} 
            duration={1.2} 
            start="top 85%"
          >
            <ProjectPreviewCard 
              {...featuredProject} 
              isFeatured={true}
              index={0}
            />
          </GSAPReveal>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {secondaryProjects.map((project, index) => (
            <GSAPReveal 
              key={project.id}
              y={40} 
              x={index % 2 === 0 ? -20 : 20}
              delay={0.2 + (index * 0.1)} 
              duration={1}
              start="top 90%"
            >
              <ProjectPreviewCard 
                {...project} 
                isFeatured={false}
                index={index + 1}
              />
            </GSAPReveal>
          ))}
        </div>
      </div>

      {/* View All Work Link */}
      <GSAPReveal delay={0.5}>
        <div className="mt-20 flex justify-center">
          <a 
            href="/work" 
            className="group relative inline-flex items-center gap-4 py-4 px-10 overflow-hidden rounded-full border border-white/10 bg-surface-container-low transition-all duration-500 hover:border-primary-container/40"
          >
            <div className="absolute inset-0 bg-primary-container/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative font-mono text-xs font-bold uppercase tracking-[0.3em] text-on-surface group-hover:text-primary-container transition-colors">Explorer Archive</span>
            <span className="material-symbols-outlined relative text-primary-container group-hover:rotate-45 transition-transform duration-500">arrow_outward</span>
          </a>
        </div>
      </GSAPReveal>
    </section>
  );
}
