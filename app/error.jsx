"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import MagneticButton from "@/components/MagneticButton";

export default function Error({ error, reset }) {
  const glowRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    
    mm.add({
      reduceMotion: "(prefers-reduced-motion: no-preference)",
      hasReducedMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { reduceMotion } = context.conditions;

      if (reduceMotion) {
        // Ambient drift for the error background
        gsap.to(glowRef.current, {
          x: "10%",
          y: "10%",
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center relative p-6">
      {/* Background Ambient Glow */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full pointer-events-none"
      ></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "expo.out" }}
        className="glass-panel max-w-xl w-full rounded-3xl p-8 md:p-12 text-center relative z-10 border border-secondary/10 shadow-[0_0_50px_rgba(255,177,196,0.05)]"
      >
        <div className="mb-8">
          <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-secondary/20">
            <span className="material-symbols-outlined text-secondary text-3xl animate-pulse">warning</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-black text-on-surface tracking-tighter uppercase italic mb-4">
            SYSTEM_MALFUNCTION
          </h2>
          
          <div className="space-y-4">
            <p className="font-mono text-[10px] text-secondary uppercase tracking-[0.3em] font-bold">
              [ STATUS: EXCEPTION_DETECTED ]
            </p>
            <div className="bg-background/40 rounded-xl p-4 border border-white/5">
              <p className="font-mono text-[11px] text-on-surface-variant leading-relaxed break-all">
                {error?.message || "An unexpected architectural instability has occurred in the motion engine."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <MagneticButton 
            onClick={() => reset()}
            className="bg-secondary text-on-secondary px-10 py-5 shadow-[0_0_30px_rgba(255,177,196,0.2)]"
          >
            RETRY TRANSMISSION
          </MagneticButton>
          
          <button 
            onClick={() => window.location.reload()}
            className="font-mono text-[10px] text-on-surface-variant hover:text-white transition-colors uppercase tracking-widest font-bold px-6 py-4"
          >
            FORCE_RELOAD
          </button>
        </div>

        <div className="scanline"></div>
      </motion.div>
    </div>
  );
}
