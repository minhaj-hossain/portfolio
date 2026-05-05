"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function MagneticButton({ 
  children, 
  className = "", 
  strength = 0.2, // Reduced for subtle elegance
  textStrength = 0.08,
  ...props 
}) {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const text = textRef.current;
    const glow = glowRef.current;
    let mm = gsap.matchMedia();

    mm.add({
      reduceMotion: "(prefers-reduced-motion: no-preference)",
      hasReducedMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { reduceMotion } = context.conditions;

      if (reduceMotion) {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = btn.getBoundingClientRect();
          const centerX = left + width / 2;
          const centerY = top + height / 2;
          const distanceX = clientX - centerX;
          const distanceY = clientY - centerY;

          // Precision pull
          gsap.to(btn, {
            x: distanceX * strength,
            y: distanceY * strength,
            duration: 0.6,
            ease: "power4.out",
          });

          gsap.to(text, {
            x: distanceX * textStrength,
            y: distanceY * textStrength,
            duration: 0.6,
            ease: "power4.out",
          });

          if (glow) {
            gsap.to(glow, {
              x: distanceX * strength * 1.2,
              y: distanceY * strength * 1.2,
              opacity: 1,
              duration: 0.6,
              ease: "power4.out",
            });
          }
        };

        const handleMouseLeave = () => {
          // Elegant reset
          gsap.to([btn, text], {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
          });

          if (glow) {
            gsap.to(glow, {
              opacity: 0,
              duration: 1,
            });
          }
        };

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => mm.revert();
  }, [strength, textStrength]);

  return (
    <motion.button
      ref={buttonRef}
      whileTap={{ scale: 0.97 }}
      className={`relative group px-10 py-5 rounded-sm font-mono text-[10px] font-bold transition-colors overflow-hidden tracking-[0.2em] uppercase ${className}`}
      {...props}
    >
      {/* Precision Glow Layer */}
      <div 
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-0 bg-primary-container/10 blur-3xl rounded-full -z-10"
      ></div>
      
      <span ref={textRef} className="relative z-10 block pointer-events-none">
        {children}
      </span>

      {/* Structured Border */}
      <div className="absolute inset-0 border border-white/10 group-hover:border-primary-container/20 rounded-sm transition-colors duration-700"></div>
    </motion.button>
  );
}
