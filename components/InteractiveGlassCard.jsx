"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * InteractiveGlassCard Component
 * A premium glassmorphism card with 3D tilt and dynamic glow effects.
 */
export default function InteractiveGlassCard({ 
  children, 
  className = "", 
  glowColor = "rgba(0, 242, 255, 0.15)",
  delay = 0,
  animateIn = true,
  entranceType = "scale",
  side = "center"
}) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let mm = gsap.matchMedia();

    mm.add({
      reduceMotion: "(prefers-reduced-motion: no-preference)",
      hasReducedMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { reduceMotion } = context.conditions;

      if (reduceMotion) {
        // 1. Entrance Animation - Elegant & Controlled
        if (animateIn) {
          const config = {
            opacity: 0,
            duration: 1.5,
            delay: delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          };

          if (entranceType === "scale") {
            gsap.from(card, { ...config, scale: 0.95 });
          } else if (entranceType === "slide") {
            const x = side === "left" ? -30 : side === "right" ? 30 : 0;
            const y = side === "bottom" ? 30 : side === "top" ? -30 : 0;
            gsap.from(card, { ...config, x, y, rotateX: y ? -5 : 0, rotateY: x ? 5 : 0 });
          } else {
            gsap.from(card, { ...config });
          }
        }

        // 2. 3D Tilt Logic - Subtle & Fluid
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        const handleMouseMove = (e) => {
          if (isTouch) return; // Disable tilt on touch devices for better UX

          const { clientX, clientY } = e;
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = (clientX - left) / width - 0.5;
          const y = (clientY - top) / height - 0.5;

          gsap.to(card, {
            rotateY: x * 8, // Reduced for elegance
            rotateX: -y * 8, // Reduced for elegance
            transformPerspective: 1200,
            duration: 0.8,
            ease: "power3.out",
          });

          if (glowRef.current) {
            gsap.to(glowRef.current, {
              x: x * 60,
              y: y * 60,
              opacity: 0.6,
              duration: 0.8,
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 1.5,
            ease: "expo.out", // Removed elastic for a calmer feel
          });

          if (glowRef.current) {
            gsap.to(glowRef.current, {
              opacity: 0,
              duration: 1.2,
            });
          }
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
      } else {
        // Reduced Motion
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          duration: 0.8,
        });
      }
    });

    return () => mm.revert();
  }, [delay, animateIn, entranceType, side]);

  return (
    <div 
      ref={cardRef} 
      className={`glass-card group relative overflow-hidden will-change-transform ${className}`}
    >
      {/* Dynamic Glow Intensifier - More subtle tint */}
      <div 
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-0 z-0"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 75%)`,
          filter: "blur(50px)",
        }}
      ></div>
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
