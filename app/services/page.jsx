"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import GSAPReveal from "@/components/GSAPReveal";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";

const services = [
  {
    title: "MERN ARCHITECTURE",
    description: "Scalable, high-performance web applications built on the MongoDB-Express-React-Node ecosystem. From database design to polished frontend — I handle the entire stack.",
    icon: "database",
    category: "Full-Stack",
    color: "text-primary-container",
    bgColor: "bg-primary-container/10",
    features: [
      "Server-side rendering with Next.js 15",
      "Robust REST API Design with Express",
      "Real-time features with Socket.io"
    ],
    span: "lg:col-span-7"
  },
  {
    title: "UI ENGINEERING",
    description: "Pixel-perfect, system-based UI where aesthetics meet engineering precision. I design in Figma and build with Tailwind — clean, scalable, accessible.",
    icon: "design_services",
    category: "Design",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    tags: ["Design Systems", "Tailwind Expert", "Accessibility"],
    span: "lg:col-span-5"
  },
  {
    title: "KINETIC MOTION",
    description: "Interfaces that don't just sit there — they respond, flow, and guide users. I build animations that feel purposeful, not decorative.",
    icon: "animation",
    category: "Animation",
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
    span: "lg:col-span-12",
    isWide: true
  }
];

export default function ServicesPage() {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Background Blob Movement
      gsap.to(blob1Ref.current, {
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
        y: 400,
        x: 100,
        rotate: 45,
        ease: "none",
      });

      gsap.to(blob2Ref.current, {
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
        y: -300,
        x: -150,
        rotate: -45,
        ease: "none",
      });

      // 2. Kinetic Motion Section - Horizontal Parallax
      gsap.to(".kinetic-content", {
        scrollTrigger: {
          trigger: ".kinetic-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        x: 80,
        ease: "none",
      });

      gsap.to(".kinetic-demo", {
        scrollTrigger: {
          trigger: ".kinetic-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        x: -80,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 pb-section-gap relative overflow-visible">
      {/* Dynamic Background Blobs */}
      <div 
        ref={blob1Ref}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-container/10 blur-[160px] rounded-full pointer-events-none -z-10"
      ></div>
      <div 
        ref={blob2Ref}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none -z-10"
      ></div>

      {/* Hero */}
      <section className="py-stack-lg mt-stack-lg flex flex-col items-center text-center">
        <GSAPReveal y={20} duration={0.8}>
          <span className="font-mono text-primary-fixed uppercase tracking-[0.4em] mb-4 text-[10px] font-bold">
            What I Do
          </span>
        </GSAPReveal>
        <GSAPReveal delay={0.1} y={30} duration={1}>
          <h2 className="font-display text-4xl md:text-7xl font-extrabold text-on-surface mb-stack-sm max-w-4xl tracking-tighter leading-tight">
            Engineered Performance. <br/> Fluid Design.
          </h2>
        </GSAPReveal>
        <GSAPReveal delay={0.2} y={30} duration={1}>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl mb-stack-lg leading-relaxed">
            I translate complex requirements into seamless digital products. Full-stack development, UI engineering, and motion design — all under one roof.
          </p>
        </GSAPReveal>
      </section>

      {/* Services Grid */}
      <section className="mb-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
        {services.map((service, index) => {
          const side = index === 0 ? "left" : index === 1 ? "right" : "bottom";
          
          return (
            <div key={service.title} className={`${service.span} ${service.isWide ? 'kinetic-section' : ''}`}>
              <InteractiveGlassCard 
                delay={index * 0.15}
                glowColor={service.bgColor.replace('/10', '/30')}
                className="h-full"
                side={side}
              >
                <div className="p-stack-lg h-full flex flex-col gap-stack-md relative overflow-hidden">
                  <div className={`absolute -top-24 -right-24 w-64 h-64 ${service.bgColor} rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-all duration-700`}></div>
                  
                  {service.isWide ? (
                    <div className="flex flex-col lg:flex-row gap-stack-lg relative z-10">
                      <div className="lg:w-1/2 flex flex-col justify-center kinetic-content">
                        <div className={`${service.bgColor} p-4 rounded-xl self-start mb-stack-md border border-white/5`}>
                          <span className={`material-symbols-outlined ${service.color} text-4xl`}>{service.icon}</span>
                        </div>
                        <h3 className="font-display text-3xl md:text-5xl font-black text-on-surface mb-4 tracking-tighter uppercase">{service.title}</h3>
                        <p className="font-sans text-lg text-on-surface-variant mb-stack-md max-w-lg leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex gap-stack-md">
                          <div className="flex flex-col">
                            <span className={`font-display text-2xl font-black ${service.color}`}>60fps</span>
                            <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">OPTIMIZED</span>
                          </div>
                          <div className="flex flex-col">
                            <span className={`font-display text-2xl font-black ${service.color}`}>GSAP</span>
                            <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">POWERED</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/2 relative min-h-[300px] bg-surface-container rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden kinetic-demo">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40"></div>
                        <div className="text-center relative z-10">
                          <span className={`material-symbols-outlined text-7xl ${service.color} opacity-20 animate-pulse`}>animation</span>
                          <p className="font-mono text-[10px] text-on-surface-variant mt-4 uppercase tracking-[0.2em]">[ MOTION DEMO ]</p>
                        </div>
                        <div className="scanline"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`${service.bgColor} p-4 rounded-xl border border-white/5`}>
                          <span className={`material-symbols-outlined ${service.color} text-4xl`}>{service.icon}</span>
                        </div>
                        <span className={`font-mono text-[10px] ${service.color} px-3 py-1 ${service.bgColor} rounded border border-white/10 uppercase tracking-widest font-bold`}>{service.category}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-on-surface mb-3 tracking-tight uppercase">{service.title}</h3>
                      <p className="font-sans text-sm text-on-surface-variant mb-stack-md leading-relaxed">
                        {service.description}
                      </p>
                      
                      {service.features && (
                        <ul className="space-y-3">
                          {service.features.map(feature => (
                            <li key={feature} className="flex items-center gap-3 text-on-surface/80">
                              <span className={`material-symbols-outlined ${service.color} text-lg`}>check_circle</span>
                              <span className="font-mono text-[11px] uppercase tracking-wide">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {service.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {service.tags.map(tag => (
                            <span key={tag} className={`px-3 py-1 ${service.bgColor} ${service.color} font-mono text-[9px] rounded-full border border-white/5 uppercase tracking-widest font-bold`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </InteractiveGlassCard>
            </div>
          );
        })}
      </section>

      {/* Tech Stack Scroll */}
      <section className="mb-section-gap overflow-hidden">
        <GSAPReveal y={20} start="top 95%">
          <h4 className="font-mono text-[10px] text-on-surface-variant uppercase mb-stack-md opacity-50 tracking-[0.3em] font-bold">Core Engineering Stack</h4>
        </GSAPReveal>
        <div className="flex gap-gutter overflow-x-auto pb-8 snap-x scrollbar-none">
          {["TypeScript", "MongoDB", "Tailwind CSS", "Figma", "Node.js", "Express"].map((tech, idx) => (
            <div key={tech} className="snap-start min-w-[280px]">
              <InteractiveGlassCard delay={idx * 0.05} side="right">
                <div className="p-6 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary-container/10 transition-colors">
                     <span className="material-symbols-outlined text-primary-container">code</span>
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">{tech}</div>
                    <div className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">ACTIVE_MODULE</div>
                  </div>
                </div>
              </InteractiveGlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-section-gap">
        <div className="grid md:grid-cols-3 gap-stack-lg">
          {[
            { id: "01", title: "LOGIC_PHASE", desc: "Requirements get broken down into clean architectural decisions before a single line of code is written.", color: "text-secondary" },
            { id: "02", title: "BUILD_PHASE", desc: "Iterative development with regular check-ins and demos. Every commit moves us closer to stability.", color: "text-primary-container" },
            { id: "03", title: "POLISH_PHASE", desc: "Micro-interactions, performance audits, and final QA. I don't ship until it feels as good as it performs.", color: "text-tertiary" }
          ].map((item, index) => (
            <GSAPReveal 
              key={item.id} 
              delay={index * 0.2}
              y={40}
              parallax={index % 2 === 0 ? -10 : 10}
            >
              <div className="flex flex-col gap-4 group">
                <div className={`font-display text-8xl ${item.color} opacity-10 group-hover:opacity-20 transition-opacity font-black`}>{item.id}</div>
                <h5 className="font-display text-xl font-bold tracking-tight uppercase -mt-12 ml-4">{item.title}</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed ml-4">{item.desc}</p>
              </div>
            </GSAPReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
