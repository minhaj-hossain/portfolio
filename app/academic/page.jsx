"use client";

import Timeline from "@/components/Timeline";
import GSAPReveal from "@/components/GSAPReveal";

export default function AcademicPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-section-gap relative">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-container/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <GSAPReveal start="top 90%">
        <header className="mb-16 md:mb-24 text-center">
          <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.4em] mb-4 font-bold block">Academic Credentials</span>
          <h1 className="font-display text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
            SCHOLASTIC_<br/><span className="text-glow text-clamp-subheading">FOUNDATIONS</span>
          </h1>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto mt-8 leading-relaxed">
            The theoretical backbone of my engineering practice. A chronology of formal education and specialized certifications.
          </p>
        </header>
      </GSAPReveal>

      <Timeline />
    </main>
  );
}
