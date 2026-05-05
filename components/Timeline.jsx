"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GSAPReveal from "./GSAPReveal";
import InteractiveGlassCard from "./InteractiveGlassCard";

const timelineData = [
  {
    period: "2020 - 2024",
    institution: "University of Science",
    degree: "B.SC. IN COMPUTER SCIENCE",
    description: "Specialized in Software Engineering and Distributed Systems. Developed a high-performance real-time data processing engine for my final thesis.",
    side: "left"
  },
  {
    period: "2019 - 2020",
    institution: "Tech Academy Pro",
    degree: "FULL-STACK CERTIFICATION",
    description: "Intensive 12-month program focused on modern web architectures, MERN stack, and cloud deployment strategies.",
    side: "right"
  },
  {
    period: "2017 - 2019",
    institution: "High School Central",
    degree: "SCIENCE & MATHEMATICS",
    description: "Foundation in computational logic and mathematical modeling. Won several regional programming competitions.",
    side: "left"
  }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line drawing animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        }
      );

      // Dot activation animation
      dotsRef.current.forEach((dot) => {
        gsap.to(dot, {
          backgroundColor: "#00f2ff",
          scale: 1.2,
          scrollTrigger: {
            trigger: dot,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-section-gap relative overflow-visible">
      <GSAPReveal y={20}>
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.4em] mb-4 font-bold">Chronology</span>
          <h2 className="font-display text-4xl md:text-6xl font-black text-on-surface tracking-tighter uppercase italic">
            ACADEMIC_JOURNEY
          </h2>
        </div>
      </GSAPReveal>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Vertical Line */}
        <div 
          ref={lineRef}
          className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-container via-primary-fixed to-transparent origin-top will-change-transform"
        ></div>
        
        <div className="space-y-12 md:space-y-24 relative">
          {timelineData.map((item, index) => (
            <div key={item.institution} className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_100px_1fr] items-center group">
              
              {/* Left Side Content (Desktop: Card or Label) */}
              <div className="hidden md:block">
                {item.side === "left" ? (
                  <InteractiveGlassCard delay={index * 0.1} side="left">
                    <div className="p-6">
                      <span className="font-mono text-[10px] text-slate-500 mb-2 block uppercase tracking-widest">{item.period}</span>
                      <h3 className="font-display text-lg font-bold text-on-surface mb-1 uppercase tracking-tight">{item.institution}</h3>
                      <p className="font-mono text-[9px] text-primary-container uppercase mb-3 font-bold">{item.degree}</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </InteractiveGlassCard>
                ) : (
                  <div className="text-right pr-4">
                    <GSAPReveal x={-20} y={0}>
                      <h3 className="font-display text-lg font-black text-on-surface uppercase tracking-tight italic">{item.institution}</h3>
                      <p className="font-mono text-[10px] text-primary-container uppercase mt-1 font-bold">{item.degree}</p>
                    </GSAPReveal>
                  </div>
                )}
              </div>

              {/* Center Dot */}
              <div className="flex justify-start md:justify-center relative z-10">
                <div 
                  ref={(el) => (dotsRef.current[index] = el)}
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 border-primary-container shadow-[0_0_15px_#00f2ff] transition-all duration-300"
                ></div>
              </div>

              {/* Right Side Content (Desktop: Card or Label, Mobile: Always Card) */}
              <div className="pl-4 md:pl-0">
                {item.side === "right" ? (
                  <InteractiveGlassCard delay={index * 0.1} side="right">
                    <div className="p-6">
                      <span className="font-mono text-[10px] text-slate-500 mb-2 block uppercase tracking-widest">{item.period}</span>
                      <h3 className="font-display text-lg font-bold text-on-surface mb-1 uppercase tracking-tight">{item.institution}</h3>
                      <p className="font-mono text-[9px] text-primary-container uppercase mb-3 font-bold">{item.degree}</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </InteractiveGlassCard>
                ) : (
                  <>
                    <div className="hidden md:block text-left pl-4">
                      <GSAPReveal x={20} y={0}>
                        <h3 className="font-display text-lg font-black text-on-surface uppercase tracking-tight italic">{item.institution}</h3>
                        <p className="font-mono text-[10px] text-primary-container uppercase mt-1 font-bold">{item.degree}</p>
                      </GSAPReveal>
                    </div>
                    {/* Mobile Only Card for Left-Side Desktop Items */}
                    <div className="md:hidden">
                      <InteractiveGlassCard delay={index * 0.1} side="right">
                        <div className="p-6">
                          <span className="font-mono text-[10px] text-slate-500 mb-2 block uppercase tracking-widest">{item.period}</span>
                          <h3 className="font-display text-lg font-bold text-on-surface mb-1 uppercase tracking-tight">{item.institution}</h3>
                          <p className="font-mono text-[9px] text-primary-container uppercase mb-3 font-bold">{item.degree}</p>
                          <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </InteractiveGlassCard>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
