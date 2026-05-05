import MagneticButton from "@/components/MagneticButton";

export default function ContactForm() {
  return (
    <div className="glass-panel rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-white text-6xl">sdk</span>
      </div>
      
      <div className="mb-stack-md relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-4 uppercase italic">TRANSMIT_DATA</h2>
        <p className="font-sans text-base text-on-surface-variant max-w-md leading-relaxed">
          Got a project in mind? Describe it below and I'll get back to you within 12 hours. No fluff, just results.
        </p>
      </div>

      <form className="space-y-stack-md relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <div className="space-y-2">
            <label className="font-mono text-primary-fixed-dim text-[10px] block font-bold tracking-widest uppercase">YOUR NAME</label>
            <input 
              className="w-full bg-transparent border-white/10 border-b border-t-0 border-l-0 border-r-0 focus:border-[#00f2ff] focus:ring-0 text-on-surface font-mono text-sm transition-all placeholder:text-white/10 px-0 py-4" 
              placeholder="ID: ANONYMOUS" 
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-primary-fixed-dim text-[10px] block font-bold tracking-widest uppercase">YOUR EMAIL</label>
            <input 
              className="w-full bg-transparent border-white/10 border-b border-t-0 border-l-0 border-r-0 focus:border-[#00f2ff] focus:ring-0 text-on-surface font-mono text-sm transition-all placeholder:text-white/10 px-0 py-4" 
              placeholder="YOU@EMAIL.COM" 
              type="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-mono text-primary-fixed-dim text-[10px] block font-bold tracking-widest uppercase">PROJECT BLUEPRINT</label>
          <textarea 
            className="w-full bg-white/5 border-white/10 border rounded-2xl focus:border-[#00f2ff] focus:ring-0 text-on-surface font-sans text-sm transition-all placeholder:text-white/10 p-6 resize-none h-48" 
            placeholder="DESCRIBE YOUR PROJECT — SCOPE, TIMELINE, BUDGET..."
          ></textarea>
        </div>
        
        <div className="flex items-center justify-between pt-stack-sm">
          <div className="hidden md:flex items-center gap-4 text-white/20">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold">DATA_SECURE_ENCRYPTED</span>
          </div>
          
          <MagneticButton 
            className="bg-[#00f2ff] text-[#00363a] px-10 py-5 rounded-sm shadow-[0_0_30px_rgba(0,242,255,0.4)]"
            type="button"
          >
            TRANSMIT_SIGNAL
          </MagneticButton>
        </div>
      </form>

      <div className="scanline"></div>
    </div>
  );
}
