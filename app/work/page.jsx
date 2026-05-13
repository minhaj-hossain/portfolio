"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import GSAPReveal from "@/components/GSAPReveal";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const allTags = useMemo(() => {
    const tags = new Set(["ALL"]);
    projects.forEach((p) => p.tech.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;
    return projects.filter((p) => p.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-section-gap relative min-h-screen">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <GSAPReveal start="top 90%">
        <header className="mb-stack-lg border-l-4 border-primary-container pl-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.3em] font-bold">Archive_v2.6</span>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">BLUEPRINTS_</h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              Deep-analyzed codebases from my GitHub ecosystem. Every project here represents a solution to a real-world problem, engineered with modern patterns.
            </p>
          </div>
        </header>
      </GSAPReveal>

      {/* Filter System */}
      <GSAPReveal delay={0.2}>
        <div className="flex flex-wrap gap-3 mb-16">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`font-mono text-[10px] px-5 py-2 rounded-full border transition-all duration-300 uppercase tracking-widest ${
                activeFilter === tag 
                ? "bg-primary-container text-on-primary-container border-primary-container shadow-[0_0_20px_rgba(0,242,255,0.3)]" 
                : "bg-white/5 text-white/40 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </GSAPReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`${project.featured ? 'md:col-span-8' : 'md:col-span-4'}`}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
