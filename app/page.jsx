import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Hero />
      <TechStack />
      <Timeline />

      {/* Quote Section */}
      <section className="py-section-gap text-center relative overflow-hidden">
        <div className="absolute inset-0 kinetic-gradient opacity-30 -skew-y-3"></div>
        <div className="relative z-10 px-6">
          <span className="material-symbols-outlined text-secondary text-5xl mb-stack-sm animate-bounce">format_quote</span>
          <blockquote className="font-display text-4xl md:text-6xl text-on-surface max-w-5xl mx-auto italic font-black leading-tight tracking-tighter">
            "Design is not just what it looks like; <br/> it's how it <span className="text-[#00f2ff] text-glow">moves through time</span>"
          </blockquote>
          <p className="mt-stack-md font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.3em] font-bold">— MINHAJ // PRINCIPAL ARCHITECT</p>
        </div>
      </section>
    </main>
  );
}
