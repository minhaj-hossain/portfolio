"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Loading() {
  const containerRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    
    mm.add({
      reduceMotion: "(prefers-reduced-motion: no-preference)",
      hasReducedMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { reduceMotion } = context.conditions;

      if (reduceMotion) {
        // 1. Infinite Ring Rotation
        gsap.to(ring1Ref.current, {
          rotate: 360,
          duration: 3,
          repeat: -1,
          ease: "none",
        });

        gsap.to(ring2Ref.current, {
          rotate: -360,
          duration: 4.5,
          repeat: -1,
          ease: "none",
        });

        gsap.to(ring3Ref.current, {
          rotate: 360,
          duration: 2,
          repeat: -1,
          ease: "none",
        });

        // 2. Pulse Animation
        gsap.to(".loading-ring", {
          scale: 1.02,
          opacity: 0.8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          stagger: 0.3,
          ease: "sine.inOut",
        });

        // 3. Background Ambient Drift
        gsap.to(glowRef.current, {
          x: "5%",
          y: "5%",
          scale: 1.1,
          duration: 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 4. Text Fade Pulse - Always active but slower for reduced motion
      gsap.to(".loading-text", {
        opacity: 0.3,
        duration: reduceMotion ? 1.5 : 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background Glow */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"
      ></div>

      {/* Futuristic Ring Loader */}
      <div className="relative w-32 h-32 mb-12">
        {/* Outer Ring */}
        <div 
          ref={ring1Ref}
          className="loading-ring absolute inset-0 border-2 border-t-primary-container border-r-transparent border-b-primary-container/20 border-l-transparent rounded-full shadow-[0_0_20px_rgba(0,242,255,0.1)]"
        ></div>
        
        {/* Middle Ring */}
        <div 
          ref={ring2Ref}
          className="loading-ring absolute inset-4 border-2 border-t-transparent border-r-secondary border-b-transparent border-l-secondary/20 rounded-full"
        ></div>
        
        {/* Inner Ring */}
        <div 
          ref={ring3Ref}
          className="loading-ring absolute inset-8 border-2 border-t-primary-fixed border-r-primary-fixed/20 border-b-transparent border-l-transparent rounded-full shadow-[0_0_15px_rgba(116,245,255,0.1)]"
        ></div>

        {/* Center Dot */}
        <div className="absolute inset-[48%] bg-primary-container rounded-full animate-pulse shadow-[0_0_15px_#00f2ff]"></div>
      </div>

      {/* Loading Information */}
      <div className="text-center space-y-3 relative z-10">
        <h3 className="loading-text font-mono text-[10px] text-primary-container uppercase tracking-[0.6em] font-bold">
          INITIALIZING_EXPERIENCE
        </h3>
        <div className="flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-8 h-[2px] bg-white/5 overflow-hidden"
            >
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "linear"
                }}
                className="w-full h-full bg-primary-container/40"
              />
            </div>
          ))}
        </div>
        <p className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest opacity-40">
          [ DECRYPTING BLUEPRINTS... ]
        </p>
      </div>

      <div className="scanline"></div>
    </div>
  );
}
