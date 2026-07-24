"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GSAPReveal from "@/components/GSAPReveal";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";
import { projects as staticProjects } from "@/data/projects";
import { ArrowLeft, Code, Rocket, CheckCircle2, Lightbulb, ShieldAlert, Cpu } from "lucide-react";

export default function ProjectDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { id } = params;

  // Start with static data (may be empty if static array is cleared)
  const [project, setProject] = useState(() => staticProjects.find((p) => p.id === id) || null);
  // apiLoaded tracks whether we've finished the API fetch — we only 404 after this is true
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const res = await fetch(`https://portfolio-server-five-rose.vercel.app/projects`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const found = data.find((p) => p.id === id || p._id === id);
            if (found) setProject(found);
          }
        }
      } catch (err) {
        console.error("API error, falling back to static project data:", err);
      } finally {
        setApiLoaded(true);
      }
    };
    fetchProjectDetails();
  }, [id]);

  // Only call notFound() AFTER the API fetch has completed and project is still missing
  if (apiLoaded && !project) {
    notFound();
  }

  // While waiting for the API, show a skeleton loader
  if (!project) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-section-gap relative min-h-screen">
        <div className="animate-pulse space-y-8">
          <div className="h-4 w-32 bg-white/10 rounded" />
          <div className="h-12 w-2/3 bg-white/10 rounded" />
          <div className="aspect-video w-full bg-white/5 rounded-2xl" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="h-40 bg-white/5 rounded-2xl" />
              <div className="h-40 bg-white/5 rounded-2xl" />
            </div>
            <div className="lg:col-span-4">
              <div className="h-64 bg-white/5 rounded-2xl" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  const p = project;

  return (
    <main className="max-w-7xl mx-auto px-6 py-section-gap relative min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary-container/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Back Link */}
      <GSAPReveal y={-10} duration={0.6}>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant hover:text-primary-container uppercase tracking-widest transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </Link>
      </GSAPReveal>

      {/* Header Section */}
      <GSAPReveal start="top 90%">
        <div className="mb-12 border-l-4 border-primary-container pl-6 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.3em] font-bold px-3 py-1 bg-primary-container/10 rounded-full border border-primary-container/20">
              PROJECT_SPECIFICATION // {p.id.toUpperCase()}
            </span>
            {p.featured && (
              <span className="font-mono text-[10px] text-tertiary-fixed-dim uppercase tracking-[0.2em] font-bold px-3 py-1 bg-tertiary-container/10 rounded-full border border-tertiary-fixed-dim/20">
                FEATURED WORK
              </span>
            )}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            {p.title}
          </h1>
          <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            {p.description}
          </p>
        </div>
      </GSAPReveal>

      {/* Banner / Hero Image Card */}
      <GSAPReveal y={30} duration={0.8}>
        <InteractiveGlassCard className="rounded-2xl p-4 md:p-6 mb-16 overflow-hidden">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-surface-container border border-white/10">
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-50"></div>
          </div>
        </InteractiveGlassCard>
      </GSAPReveal>

      {/* Grid: Specifications & External Links */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-16">
        {/* Left Column: Tech Stack & Overview */}
        <div className="lg:col-span-8 space-y-12">
          {/* Tech Stack */}
          <GSAPReveal y={20}>
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
              <h2 className="font-mono text-xs text-[#00f2ff] uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                TECH_STACK & ARCHITECTURE
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3.5 py-2 bg-white/5 text-slate-300 rounded-lg border border-white/10 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </GSAPReveal>

          {/* Key Challenges */}
          {p.challenges && p.challenges.length > 0 && (
            <GSAPReveal y={20} delay={0.1}>
              <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
                <h2 className="font-mono text-xs text-amber-400 uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  KEY_CHALLENGES & SOLUTIONS
                </h2>
                <ul className="space-y-4">
                  {p.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-sans text-on-surface-variant leading-relaxed text-sm md:text-base">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GSAPReveal>
          )}

          {/* Future Plans */}
          {p.futurePlans && p.futurePlans.length > 0 && (
            <GSAPReveal y={20} delay={0.2}>
              <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
                <h2 className="font-mono text-xs text-tertiary-fixed-dim uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  FUTURE_ROADMAP & IMPROVEMENTS
                </h2>
                <ul className="space-y-4">
                  {p.futurePlans.map((plan, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tertiary-fixed-dim shrink-0 mt-0.5" />
                      <span className="font-sans text-on-surface-variant leading-relaxed text-sm md:text-base">
                        {plan}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GSAPReveal>
          )}
        </div>

        {/* Right Column: Actions Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <GSAPReveal x={20}>
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6 sticky top-28">
              <h3 className="font-mono text-xs text-white uppercase tracking-[0.3em] font-bold pb-4 border-b border-white/10">
                PROJECT_LINKS
              </h3>

              <div className="space-y-4">
                {p.liveLink ? (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded-xl border border-primary-container/40 bg-primary-container/15 text-primary-container hover:bg-primary-container/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.15)]"
                  >
                    <Rocket className="w-4 h-4" />
                    Launch Live Demo
                  </a>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded-xl border border-white/5 bg-white/5 text-slate-500 cursor-not-allowed">
                    Demo Unavailable
                  </div>
                )}

                {p.githubLink && (
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
                  >
                    <Code className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-[11px] text-slate-400">
                <div className="flex justify-between">
                  <span>DEPLOYMENT:</span>
                  <span className="text-white">{p.liveLink ? "VERCEL / SURGE" : "LOCAL REPO"}</span>
                </div>
                <div className="flex justify-between">
                  <span>ARCHITECTURE:</span>
                  <span className="text-white">FULL-STACK</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-[#00f2ff]">PRODUCTION</span>
                </div>
              </div>
            </div>
          </GSAPReveal>
        </div>
      </div>
    </main>
  );
}
