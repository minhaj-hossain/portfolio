"use client";

import Link from "next/link";
import { 
  Mail, 
  FileText, 
  ArrowUpRight, 
  ArrowUp, 
  MapPin, 
  Code2, 
  Sparkles 
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0f] text-[#e4e1e9] border-t border-white/10 overflow-hidden pt-16 pb-12">
      {/* Subtle Cyan Backdrop Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#00f2ff]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Interactive Call To Action */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-12 border border-white/10 backdrop-blur-xl bg-surface-container-lowest/60 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-[#00f2ff] text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for New Projects</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
                Let&apos;s build something <span className="text-[#00f2ff] text-glow">extraordinary</span> together.
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-sans max-w-xl leading-relaxed">
                Passionate about crafting high-performance web applications, intuitive user interfaces, and robust modern software architectures.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00f2ff] text-[#00363a] font-semibold text-sm hover:bg-[#74f5ff] transition-all shadow-[0_0_20px_rgba(0,242,255,0.25)] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] group"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              
              <a
                href="/Md_Minhaj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f2ff]/40 text-white font-medium text-sm transition-all hover:bg-white/10 group"
              >
                <FileText className="w-4 h-4 text-[#00f2ff]" />
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Social & Connect Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a
            href="https://github.com/minhaj-hossain"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 rounded-xl border border-white/5 hover:border-[#00f2ff]/30 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-white/5 text-[#00f2ff] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">GitHub</h4>
                <p className="text-xs text-slate-400 font-mono">@minhaj-hossain</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00f2ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://www.linkedin.com/in/hossain-minhaj"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 rounded-xl border border-white/5 hover:border-[#00f2ff]/30 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-white/5 text-[#00f2ff] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">LinkedIn</h4>
                <p className="text-xs text-slate-400 font-mono">hossain-minhaj</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00f2ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="mailto:minhaj00102@gmail.com"
            className="glass-card p-5 rounded-xl border border-white/5 hover:border-[#00f2ff]/30 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-white/5 text-[#00f2ff] group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Email</h4>
                <p className="text-xs text-slate-400 font-mono">Direct Contact</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00f2ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://github.com/minhaj-hossain/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 rounded-xl border border-white/5 hover:border-[#00f2ff]/30 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-white/5 text-[#00f2ff] group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Source Code</h4>
                <p className="text-xs text-slate-400 font-mono">Portfolio Repo</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00f2ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span>© {new Date().getFullYear()} Md. Minhaj Hossain</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#00f2ff]" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00f2ff]/40 text-xs font-mono text-slate-300 hover:text-white transition-all hover:bg-white/10 group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00f2ff] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
