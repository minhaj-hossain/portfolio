"use client";

import GSAPReveal from "@/components/GSAPReveal";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";

const stacks = [
  {
    title: "Frontend Engineering",
    icon: "terminal",
    description: "Architecting high-performance, responsive interfaces with modern frameworks.",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript (ES6+)", "React.js", "Next.js"],
    glowColor: "rgba(0, 242, 255, 0.15)"
  },
  {
    title: "Backend Engineering",
    icon: "settings",
    description: "Building scalable server-side logic and robust API architectures.",
    tags: ["Node.js", "Express.js"],
    glowColor: "rgba(255, 74, 141, 0.15)"
  },
  {
    title: "Databases",
    icon: "database",
    description: "Designing efficient data schemas and managing complex datasets.",
    tags: ["MongoDB", "Oracle"],
    glowColor: "rgba(189, 236, 0, 0.15)"
  },
  {
    title: "Programming Foundations",
    icon: "code",
    description: "Strong understanding of low-level programming and algorithms.",
    tags: ["C", "C++"],
    glowColor: "rgba(255, 255, 255, 0.1)"
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-section-gap relative overflow-hidden">
      {/* Section background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/5 blur-[160px] rounded-full pointer-events-none"></div>

      <GSAPReveal start="top 90%">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 relative z-10 gap-4">
          <div>
            <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.4em] mb-4 font-bold block">Engineering Architecture</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-on-surface tracking-tighter uppercase italic">
              TECH_STACK
            </h2>
          </div>
          <p className="text-on-surface-variant font-mono text-[10px] md:text-xs uppercase tracking-widest max-w-md md:text-right">
            A comprehensive overview of my technical capabilities and development environment.
          </p>
        </div>
      </GSAPReveal>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stacks.map((stack, index) => (
          <GSAPReveal 
            key={stack.title} 
            delay={index * 0.15} 
            y={50}
            parallax={index % 2 === 0 ? 20 : -20}
          >
            <InteractiveGlassCard 
              glowColor={stack.glowColor}
              className="h-full"
            >
              <div className="p-8 flex flex-col h-full">
                {/* Visual Accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 blur-3xl rounded-full group-hover:bg-primary-container/10 transition-colors duration-700"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/10 group-hover:border-primary-container/30 transition-colors duration-500">
                    <span className="material-symbols-outlined text-primary-container text-2xl group-hover:scale-110 transition-transform duration-500">
                      {stack.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-on-surface leading-tight">{stack.title}</h3>
                </div>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                  {stack.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {stack.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-white/5 text-on-surface-variant font-mono text-[10px] px-3 py-1.5 rounded-full border border-white/5 hover:border-primary-container/30 hover:text-primary-container transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </InteractiveGlassCard>
          </GSAPReveal>
        ))}
      </div>
    </section>
  );
}
