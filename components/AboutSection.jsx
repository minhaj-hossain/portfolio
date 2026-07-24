"use client";

import GSAPReveal from "@/components/GSAPReveal";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";
import {
  Terminal,
  Code2,
  HeartHandshake,
  Gamepad2,
  Palette,
  Trophy,
  Sparkles,
  BookOpen,
  Compass,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-section-gap relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00f2ff]/5 blur-[140px] rounded-full pointer-events-none" />

      <GSAPReveal y={20}>
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-[#00f2ff] text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>BIOGRAPHY & PASSIONS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase italic">
            ABOUT <span className="text-[#00f2ff] text-glow">MINHAJ</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3 font-sans leading-relaxed">
            Full-Stack Software Engineer with a passion for modern web
            technologies, thoughtful UI engineering, and continuous learning.
          </p>
        </div>
      </GSAPReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Programming Journey & Work Preferences (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <InteractiveGlassCard className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-surface-container-lowest/60 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#00f2ff] uppercase tracking-widest block">
                  CHAPTER_01
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  My Programming Journey
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans">
              My coding journey started during my{" "}
              <strong className="text-white">
                Diploma in Computer Science & Technology
              </strong>{" "}
              at Chapainawabganj Polytechnic Institute, where I first built
              static websites and wrote C/C++ algorithms. That initial spark
              grew into a deep fascination for full-stack web architecture.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Currently pursuing my{" "}
              <strong className="text-white">
                B.Sc. in Computer Science & Engineering
              </strong>{" "}
              at Northern University Bangladesh, I have specialized in the{" "}
              <strong className="text-[#00f2ff]">
                MERN Stack & Next.js 15
              </strong>
              . I have spent thousands of hours building end-to-end
              applications, optimizing database queries, and refining
              pixel-perfect user interactions.
            </p>
          </InteractiveGlassCard>

          <InteractiveGlassCard className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-surface-container-lowest/60 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-[#ff4a8d]/10 text-[#ff4a8d] border border-[#ff4a8d]/20">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#ff4a8d] uppercase tracking-widest block">
                  ENGINEERING PHILOSOPHY
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  The Type of Work I Enjoy
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans mb-3">
              I thrive on building products that solve real problems with
              tangible value. I especially enjoy:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] shrink-0 mt-2" />
                <span>
                  Crafting fluid, accessible frontend interfaces with subtle
                  micro-interactions and high frame rates.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] shrink-0 mt-2" />
                <span>
                  Designing clean RESTful API pipelines and database schemas
                  that scale gracefully under load.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] shrink-0 mt-2" />
                <span>
                  Refactoring complex legacy codebases into clean, type-safe,
                  and modular architectures.
                </span>
              </li>
            </ul>
          </InteractiveGlassCard>
        </div>

        {/* Right Column: Hobbies, Interests & Personality (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <InteractiveGlassCard className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-surface-container-lowest/60 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest block">
                  BEYOND THE CODE
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  Hobbies & Interests
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              When I&apos;m not writing code or debugging servers, I stay
              inspired and refreshed through diverse creative and physical
              activities:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                <Trophy className="w-5 h-5 text-[#00f2ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display uppercase">
                    Sports & Fitness
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Playing Cricket and Badminton keeps my reflexes sharp and
                    teaches me team dynamics under pressure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                <Palette className="w-5 h-5 text-[#ff4a8d] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display uppercase">
                    Digital Art & Sketching
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Exploring visual aesthetics, vector art, and UI wireframes
                    enhances my spatial design intuition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display uppercase">
                    Reading & Exploration
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Reading technology blogs, system design books, and exploring
                    nature during outdoor trips.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                <Gamepad2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display uppercase">
                    Tech Tinkering & Gaming
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Experimenting with Linux customization, open-source
                    utilities, and strategic video games.
                  </p>
                </div>
              </div>
            </div>
          </InteractiveGlassCard>
        </div>
      </div>
    </section>
  );
}
