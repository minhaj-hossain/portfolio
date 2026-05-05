"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  const glowRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    
    mm.add({
      reduceMotion: "(prefers-reduced-motion: no-preference)",
      hasReducedMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { reduceMotion } = context.conditions;

      if (reduceMotion) {
        // Very slow ambient drift for the 404 glow
        gsap.to(glowRef.current, {
          x: "15%",
          y: "8%",
          duration: 25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(glowRef.current, {
          scale: 1.1,
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
    <main ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Dynamic Background Glow */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 blur-[160px] rounded-full pointer-events-none"
      ></div>

      <div className="relative z-10 text-center px-6">
        {/* Animated 404 Text */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h1 className="font-display text-[12rem] md:text-[20rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-primary-container via-primary-fixed to-background opacity-20 italic select-none">
              404
            </h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h2 className="font-display text-4xl md:text-6xl font-black text-on-surface tracking-tighter uppercase italic drop-shadow-[0_0_30px_rgba(0,242,255,0.3)]">
                ERROR_LOST
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "expo.out" }}
            className="mt-8 space-y-4"
          >
            <p className="font-mono text-xs md:text-sm text-primary-container uppercase tracking-[0.4em] font-bold">
              [ MESSAGE: LOST IN THE ARCHITECTURE ]
            </p>
            <p className="font-sans text-on-surface-variant max-w-md mx-auto text-sm leading-relaxed opacity-60">
              The blueprint for this coordinate is missing or has been re-architected. Return to secure territory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-12"
          >
            <Link href="/" passHref>
              <MagneticButton className="bg-primary-container text-on-primary-fixed shadow-[0_0_40px_rgba(0,242,255,0.2)]">
                RETURN TO BASE
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 242, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* Scanline Effect */}
      <div className="scanline"></div>
    </main>
  );
}
