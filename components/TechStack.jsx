"use client";

import GSAPReveal from "@/components/GSAPReveal";

const stacks = [
  // ... (stacks array remains the same)
];

import InteractiveGlassCard from "@/components/InteractiveGlassCard";

export default function TechStack() {
  return (
    <section className="py-section-gap relative overflow-hidden">
      {/* Section background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none"></div>

      <GSAPReveal start="top 90%">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-stack-lg relative z-10 gap-4">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface uppercase tracking-[0.2em] mb-2">CORE_STACK</h2>
            <p className="text-on-surface-variant font-mono text-[10px] md:text-xs uppercase tracking-widest">My primary engineering frameworks and tools.</p>
          </div>
          <div className="hidden md:block h-px flex-1 mx-12 bg-white/10 mb-4"></div>
        </div>
      </GSAPReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md relative z-10">
        {stacks.map((stack, index) => (
          <InteractiveGlassCard 
            key={stack.title}
            delay={index * 0.1}
          >
            <div className="p-6 md:p-8 h-full">
              <div className={`absolute top-0 right-0 w-24 h-24 ${stack.bgColor} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <span className={`material-symbols-outlined ${stack.color} mb-6 text-4xl group-hover:scale-110 transition-transform duration-500`}>
                {stack.icon}
              </span>
              <h3 className="font-display text-xl font-bold text-on-surface mb-4">{stack.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{stack.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {stack.tags.map(tag => (
                  <span key={tag} className={`${stack.bgColor} ${stack.color} font-mono text-[10px] px-2 py-1 rounded border border-white/5`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </InteractiveGlassCard>
        ))}
      </div>
    </section>
  );
}
