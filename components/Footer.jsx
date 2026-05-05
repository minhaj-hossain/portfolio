import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] w-full pt-20 pb-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[#00f2ff] font-bold font-mono tracking-wider mb-1">MOTION_ARCHITECT</span>
          <p className="font-display text-xs text-slate-600 uppercase tracking-widest">© 2025 MINHAJ // ENGINEERED ENERGY</p>
        </div>
        <div className="flex gap-8">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-display text-xs font-medium text-slate-600 hover:text-[#00f2ff] underline-offset-4 hover:underline transition-all"
          >
            GITHUB
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-display text-xs font-medium text-slate-600 hover:text-[#00f2ff] underline-offset-4 hover:underline transition-all"
          >
            LINKEDIN
          </a>
          <a 
            href="#" 
            className="font-display text-xs font-medium text-slate-600 hover:text-[#00f2ff] underline-offset-4 hover:underline transition-all"
          >
            SOURCE_CODE
          </a>
        </div>
      </div>
    </footer>
  );
}
