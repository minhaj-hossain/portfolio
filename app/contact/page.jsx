"use client";

import { motion } from "framer-motion";
import GSAPReveal from "@/components/GSAPReveal";
import ContactForm from "@/components/ContactForm";

const socials = [
  { name: "GITHUB", href: "https://github.com/minhaj-hossain", color: "text-white" },
  { name: "LINKEDIN", href: "www.linkedin.com/in/hossain-minhaj", color: "text-white" },
  { name: "X", href: "#", color: "text-white" },
  { name: "FACEBOOK", href: "https://www.facebook.com/minhaj124568", color: "text-white" }
];

export default function ContactPage() {
  return (
    <main className="min-h-[80vh] relative pt-30 pb-section-gap overflow-hidden">
      {/* BG decoratives */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Status bar */}
        <GSAPReveal y={10} duration={0.8}>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-stack-lg">
            <div className="flex items-center gap-2 px-3 py-1 bg-tertiary-container/10 border border-tertiary-fixed-dim/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim shadow-[0_0_8px_#abd600] animate-pulse"></span>
              <span className="font-mono text-tertiary-fixed-dim text-[9px] font-bold uppercase tracking-widest">SYSTEM STATUS: OPEN FOR WORK</span>
            </div>
            <div className="font-mono text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
              Currently available for freelance & full-time roles
            </div>
          </div>
        </GSAPReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left sidebar */}
          <div className="lg:col-span-4 space-y-gutter">
            <GSAPReveal x={-30} y={0} parallax={10}>
              <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
                <div className="scanline"></div>
                <h3 className="font-mono text-[10px] text-[#00f2ff] mb-6 flex items-center gap-2 font-bold tracking-[0.2em]">
                  <span className="material-symbols-outlined text-sm">settings_input_component</span>
                  CORE_IDENTIFIERS
                </h3>
                <div className="space-y-5 opacity-80">
                  <div className="flex justify-between border-b border-white/5 pb-3 group/item">
                    <span className="font-mono text-[11px] text-slate-500">LOCATION</span>
                    <span className="font-mono text-[11px] text-on-surface group-hover:text-[#00f2ff] transition-colors">BANGLADESH // REMOTE</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3 group/item">
                    <span className="font-mono text-[11px] text-slate-500">AVAILABILITY</span>
                    <span className="font-mono text-[11px] text-on-surface group-hover:text-[#00f2ff] transition-colors">OPEN NOW</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3 group/item">
                    <span className="font-mono text-[11px] text-slate-500">RESPONSE_TIME</span>
                    <span className="font-mono text-[11px] text-[#00f2ff]">&lt; 12 HOURS</span>
                  </div>
                </div>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={0.1} x={-30} y={0} parallax={20}>
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="font-mono text-[10px] text-secondary mb-6 flex items-center gap-2 font-bold tracking-[0.2em]">
                  <span className="material-symbols-outlined text-sm">hub</span>
                  NEURAL_NETWORKS
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map(social => (
                    <a
                      key={social.name}
                      className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-secondary/30 transition-all group"
                      href={social.href}
                    >
                      <span className="font-mono text-[10px] text-slate-400 group-hover:text-secondary font-bold tracking-widest">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </GSAPReveal>

            {/* Async stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "RESPONSE", value: "< 12HR" },
                { label: "TIMEZONE", value: "UTC+6" },
                { label: "ENCRYPTION", value: "SECURE" },
                { label: "STATUS", value: "AVAILABLE", color: "text-tertiary-fixed-dim" }
              ].map((stat, idx) => (
                <GSAPReveal
                  key={stat.label}
                  delay={0.2 + idx * 0.05}
                  y={20}
                  className="glass-panel p-4 rounded-xl flex flex-col gap-1 border border-white/5"
                >
                  <span className="font-mono text-[9px] text-on-surface-variant font-bold opacity-50 uppercase">{stat.label}</span>
                  <span className={`font-display text-sm font-bold ${stat.color || 'text-on-surface'}`}>{stat.value}</span>
                </GSAPReveal>
              ))}
            </div>
          </div>

          {/* Main contact form */}
          <GSAPReveal delay={0.3} y={30} className="lg:col-span-8" parallax={-30}>
            <ContactForm />
          </GSAPReveal>
        </div>
      </div>
    </main>
  );
}
