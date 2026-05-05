"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import GSAPReveal from "@/components/GSAPReveal";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";

const timelineData = [
  {
    institution: "University of Science",
    degree: "B.Sc. in Computer Science",
    period: "2020 - 2024",
    description: "Specialized in Software Engineering and Distributed Systems. Developed a high-performance real-time data processing engine for my final thesis.",
    side: "left"
  },
  {
    institution: "Tech Academy Pro",
    degree: "Full-Stack Certification",
    period: "2019 - 2020",
    description: "Intensive 12-month program focused on modern web architectures, MERN stack, and cloud deployment strategies.",
    side: "right"
  },
  {
    institution: "High School Central",
    degree: "Science & Mathematics",
    period: "2017 - 2019",
    description: "Foundation in computational logic and mathematical modeling. Won several regional programming competitions.",
    side: "left"
  }
];

export default function Timeline() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Line Drawing Animation
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          }
        }
      );

      // 2. Dot Pulsing Animation
      dotsRef.current.forEach((dot) => {
        if (!dot) return;
        
        gsap.to(dot, {
          scale: 1.5,
          backgroundColor: "#74f5ff",
          boxShadow: "0 0 20px #00f2ff",
          duration: 0.5,
          scrollTrigger: {
            trigger: dot,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-section-gap relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <GSAPReveal start="top 90%">
        <h2 className="font-display text-2xl font-bold text-on-surface uppercase tracking-[0.2em] mb-stack-lg text-center relative z-10">ACADEMIC_JOURNEY</h2>
      </GSAPReveal>
      
      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* Center Line */}
        <div 
          ref={lineRef}
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-container via-primary-fixed to-transparent origin-top will-change-transform"
        ></div>
        
        <div className="space-y-stack-lg relative">
          {timelineData.map((item, index) => (
            <div key={item.institution} className="relative flex items-center justify-between group">
              {/* Desktop Side Labels */}
              <div className={`w-[45%] hidden md:block ${item.side === 'left' ? 'text-right pr-stack-md' : 'order-last pl-stack-md'}`}>
                <GSAPReveal
                  x={item.side === 'left' ? -30 : 30}
                  y={0}
                >
                  <h3 className="font-display text-lg font-bold text-on-surface">{item.institution}</h3>
                  <p className="font-mono text-xs text-primary-container uppercase mt-2">{item.degree}</p>
                </GSAPReveal>
              </div>

              {/* Dot */}
              <div 
                ref={(el) => (dotsRef.current[index] = el)}
                className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-background border-2 border-primary-container shadow-[0_0_15px_#00f2ff] transition-colors duration-300"
              ></div>

              {/* Card */}
              <div className={`w-[85%] md:w-[45%] ${item.side === 'left' ? 'ml-auto md:ml-0' : 'mr-auto md:mr-0'}`}>
                <InteractiveGlassCard 
                  delay={0.1}
                  side={item.side}
                >
                  <div className="p-6">
                    <span className="font-mono text-[10px] text-slate-500 mb-2 block uppercase tracking-widest">{item.period}</span>
                    <h3 className="font-display text-lg font-bold text-on-surface md:hidden mb-1">{item.institution}</h3>
                    <p className="font-mono text-[10px] text-primary-container uppercase mb-3 md:hidden">{item.degree}</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                  </div>
                </InteractiveGlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
