"use client";

import GSAPReveal from "@/components/GSAPReveal";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";
import { Terminal, Cpu, Layers, Sparkles, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-section-gap relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-container/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <GSAPReveal start="top 90%">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative z-10 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container font-mono text-[10px] uppercase tracking-[0.25em] font-bold mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>BIOGRAPHY // PERSPECTIVE</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-on-surface tracking-tighter uppercase italic leading-[0.9]">
              ENGINEERING<br />
              <span className="text-glow text-transparent bg-clip-text bg-linear-to-r from-primary-container to-secondary">
                WITH PURPOSE
              </span>
            </h2>
          </div>
          <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest max-w-xs md:text-right leading-relaxed">
            Bridging complex backend logic with fluid, human-centric frontend experiences.
          </p>
        </div>
      </GSAPReveal>

      {/* Main Grid: Clean & Spacious */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10">
        {/* Left: Bio & Academic Snapshot (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <GSAPReveal y={30} duration={1}>
            <InteractiveGlassCard className="p-8 md:p-10 rounded-3xl border border-white/10 bg-surface-container-low/40">
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
                The Journey & Vision
              </h3>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed mb-6">
                My passion for programming began during my <strong className="text-white">Diploma in Computer Science & Technology</strong> at Chapainawabganj Polytechnic Institute. What started with writing algorithms in C/C++ evolved into building full-stack web platforms.
              </p>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed">
                Currently completing my <strong className="text-white">B.Sc. in Computer Science & Engineering</strong> at Northern University Bangladesh, I specialize in Next.js 15, React 19, and the MERN stack—focusing on performance optimization, clean architectures, and elegant motion design.
              </p>
            </InteractiveGlassCard>
          </GSAPReveal>

          {/* Quick Academic & Core Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GSAPReveal y={20} delay={0.1}>
              <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary-container/10 text-primary-container border border-primary-container/20 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block">EDUCATION</span>
                  <h4 className="font-display text-sm font-bold text-white uppercase">B.Sc. CSE & Diploma CST</h4>
                </div>
              </div>
            </GSAPReveal>

            <GSAPReveal y={20} delay={0.2}>
              <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary-container/10 text-primary-container border border-primary-container/20 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block">SPECIALIZATION</span>
                  <h4 className="font-display text-sm font-bold text-white uppercase">Full-Stack MERN & Next.js</h4>
                </div>
              </div>
            </GSAPReveal>
          </div>
        </div>

        {/* Right: Core Engineering Pillars (5 Cols) */}
        <div className="lg:col-span-5">
          <GSAPReveal y={30} delay={0.2} duration={1}>
            <InteractiveGlassCard className="p-8 md:p-10 rounded-3xl border border-white/10 bg-surface-container-low/40 h-full flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.3em] font-bold block mb-2">
                  CORE_VALUES
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-6">
                  Engineering Pillars
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-primary-container shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                        Modular Architecture
                      </h4>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                        Writing clean, maintainable, and type-safe code that scales effortlessly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-primary-container shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                        Fluid Motion & Micro-UX
                      </h4>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                        Creating responsive, high-framerate interactions with GSAP and Framer Motion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-primary-container shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                        Performance First
                      </h4>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                        Optimizing database queries, bundle sizes, and server loading times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveGlassCard>
          </GSAPReveal>
        </div>
      </div>
    </section>
  );
}
