"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";
import { Code, Rocket, Eye, ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hover Animation: Image Zoom + Glow Intensification
      const tl = gsap.timeline({ paused: true });
      tl.to(imageRef.current, { scale: 1.1, duration: 0.6, ease: "power2.out" })
        .to(overlayRef.current, { opacity: 0.2, duration: 0.6, ease: "power2.out" }, 0)
        .to(glowRef.current, { opacity: 0.8, scale: 1.1, duration: 0.6, ease: "power2.out" }, 0);

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
        <div className={`relative overflow-hidden bg-surface-container ${project.featured ? 'aspect-video' : 'h-64'}`}>
          {/* Project Image with Hover Zoom */}
          <div ref={imageRef} className="absolute inset-0 will-change-transform">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            />
          </div>

          {/* Cinematic Gradient Overlay */}
          <div ref={overlayRef} className="absolute inset-0 bg-linear-to-t from-[#0a0a0f] to-transparent opacity-60 transition-opacity z-10"></div>
          
          {/* Interactive Glow Element */}
          <div
            ref={glowRef}
            className="absolute top-0 right-0 w-48 h-48 bg-primary-container/20 blur-[60px] rounded-full pointer-events-none opacity-0 z-20"
          ></div>
        </div>
        
        <div className="p-stack-md flex flex-col grow bg-surface-container-low/50 border-t border-white/5 relative z-10">
          <div className="flex justify-between items-start mb-stack-sm">
            <Link href={`/work/${project.id}`} className="group/title">
              <h2 className="font-display text-xl font-bold text-white group-hover/title:text-primary-container transition-colors uppercase tracking-tight flex items-center gap-2">
                {project.title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-primary-container" />
              </h2>
            </Link>
          </div>
          <p className="font-sans text-sm text-on-surface-variant mb-stack-md leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(tag => (
              <span key={tag} className="font-mono text-[9px] px-2 py-1 bg-white/5 text-slate-400 rounded border border-white/10 group-hover:border-primary-container/20 group-hover:text-primary-container transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto grid grid-cols-3 gap-2">
            <Link
              href={`/work/${project.id}`}
              className="flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-wider font-semibold py-2 px-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <Eye className="w-3 h-3 text-slate-400" />
              Details
            </Link>
            {project.githubLink ? (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-wider font-semibold py-2 px-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <Code className="w-3 h-3" />
                Code
              </a>
            ) : (
              <div />
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-wider font-semibold py-2 px-2.5 rounded-lg border border-white/10 bg-white/5 text-primary-container hover:bg-primary-container/10 transition-all duration-300"
              >
                <Rocket className="w-3 h-3" />
                Demo
              </a>
            )}
          </div>
        </div>
      </InteractiveGlassCard>
    </div>
  );
}
