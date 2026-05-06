"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ProjectPreviewCard Component
 * A reusable cinematic project card for showcasing work.
 */
export default function ProjectPreviewCard({ 
  image, 
  title, 
  description, 
  tech, 
  link, 
  isFeatured = false,
  index = 0
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hover Interaction: Image Zoom + Glow Intensification
      const tl = gsap.timeline({ paused: true });
      tl.to(imageRef.current, { scale: 1.05, duration: 0.6, ease: "power2.out" })
        .to(glowRef.current, { opacity: 0.8, scale: 1.1, duration: 0.6, ease: "power2.out" }, 0);

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      containerRef.current?.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

      // Subtle Parallax
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: isFeatured ? -20 : -10,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isFeatured]);

  return (
    <div ref={containerRef} className="h-full">
      <InteractiveGlassCard 
        delay={index * 0.1}
        entranceType={isFeatured ? "scale" : "slide"}
        side={isFeatured ? "center" : (index % 2 === 0 ? "left" : "right")}
        className="h-full flex flex-col group"
      >
        <div className={`relative overflow-hidden w-full ${isFeatured ? 'aspect-[21/9] md:aspect-[2.4/1]' : 'aspect-video'}`}>
          {/* Image Overlay for Cinematic Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>
          <div className="absolute inset-0 bg-background/20 z-0"></div>
          
          <div ref={imageRef} className="relative w-full h-full will-change-transform">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover"
              sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            />
          </div>

          {/* Interactive Glow Element */}
          <div 
            ref={glowRef}
            className="absolute top-0 right-0 w-48 h-48 bg-primary-container/20 blur-[60px] rounded-full pointer-events-none opacity-0 z-20"
          ></div>
        </div>

        <div className={`p-8 flex flex-col flex-grow relative z-20 ${isFeatured ? 'md:p-12' : 'p-8'}`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.3em] font-bold block mb-2">Project_{index + 1}</span>
              <h3 className={`font-display font-black text-white uppercase tracking-tighter group-hover:text-glow transition-all duration-500 ${isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl'}`}>
                {title}
              </h3>
            </div>
            {isFeatured && (
               <Link 
               href={link}
               className="hidden md:flex items-center gap-2 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest hover:text-primary-container transition-colors group/link"
             >
               Case Study 
               <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
             </Link>
            )}
          </div>

          <p className={`text-on-surface-variant leading-relaxed mb-8 max-w-2xl ${isFeatured ? 'text-lg' : 'text-sm'}`}>
            {description}
          </p>

          <div className="mt-auto flex flex-wrap justify-between items-end gap-6">
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span 
                  key={t} 
                  className="font-mono text-[9px] px-2.5 py-1.5 bg-white/5 text-slate-400 rounded-full border border-white/10 group-hover:border-primary-container/30 group-hover:text-primary-container transition-all duration-500"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link 
              href={link}
              className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] font-bold py-3 px-6 rounded-full border border-white/10 bg-white/5 hover:bg-primary-container/10 hover:border-primary-container/40 transition-all duration-500 ${isFeatured ? 'md:hidden' : 'w-full justify-center md:w-auto'}`}
            >
              View Case Study
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>
        </div>
      </InteractiveGlassCard>
    </div>
  );
}
