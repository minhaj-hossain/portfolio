"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";

export default function ProjectCard({ project, index }) {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hover Animation
      const tl = gsap.timeline({ paused: true });
      tl.to(imageRef.current, { scale: 1.1, duration: 0.6, ease: "power2.out" })
        .to(overlayRef.current, { opacity: 0.2, duration: 0.6, ease: "power2.out" }, 0);

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      containerRef.current?.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

      // 2. Parallax Effect
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: -30,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Determine entrance side: alternating for smaller cards
  const side = project.featured ? "bottom" : (index % 2 === 0 ? "left" : "right");

  return (
    <div 
      ref={containerRef}
      className={`${project.featured ? 'md:col-span-8' : 'md:col-span-4'} group`}
    >
      <InteractiveGlassCard 
        delay={index * 0.1}
        entranceType={project.featured ? "scale" : "slide"}
        side={side}
        className="h-full flex flex-col"
      >
        <div className={`relative overflow-hidden bg-surface-container flex items-center justify-center ${project.featured ? 'aspect-video' : 'h-64'}`}>
          <div ref={imageRef} className="absolute inset-0 flex items-center justify-center">
             <div className="text-center p-8">
               <span className="material-symbols-outlined text-5xl text-primary-container/30">image</span>
               <p className="font-mono text-[10px] text-on-surface-variant mt-2 uppercase tracking-widest">[ {project.id}_SCREENSHOT ]</p>
             </div>
          </div>
          <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60 transition-opacity"></div>
        </div>
        
        <div className="p-stack-md flex flex-col flex-grow bg-surface-container-low/50 border-t border-white/5 relative z-10">
          <div className="flex justify-between items-start mb-stack-sm">
            <h2 className="font-display text-xl font-bold text-white group-hover:text-primary-container transition-colors uppercase tracking-tight">{project.title}</h2>
          </div>
          <p className="font-sans text-sm text-on-surface-variant mb-stack-md leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono text-[9px] px-2 py-1 bg-white/5 text-slate-400 rounded border border-white/10 group-hover:border-primary-container/20 group-hover:text-primary-container transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-3">
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-widest font-bold py-2.5 px-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                Code
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-widest font-bold py-2.5 px-4 rounded-lg border border-primary-container/20 bg-primary-container/5 text-primary-container hover:bg-primary-container/10 transition-all duration-500"
              >
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                Demo
              </a>
            )}
          </div>
        </div>
      </InteractiveGlassCard>
    </div>
  );
}
