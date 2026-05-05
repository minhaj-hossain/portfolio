"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPReveal({ 
  children, 
  delay = 0, 
  y = 40, 
  x = 0, 
  duration = 1, 
  stagger = 0,
  scrub = false,
  start = "top 85%",
  className = "",
  parallax = 0 
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    
    mm.add({
      // 1. Normal motion
      reduceMotion: "(prefers-reduced-motion: no-preference)",
      // 2. Reduced motion
      hasReducedMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { reduceMotion } = context.conditions;

      if (reduceMotion) {
        // Reveal Animation
        gsap.from(elementRef.current, {
          scrollTrigger: {
            trigger: elementRef.current,
            start: start,
            toggleActions: scrub ? "none" : "play none none none",
            scrub: scrub,
          },
          opacity: 0,
          y: y,
          x: x,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: scrub ? "none" : "power3.out",
          clearProps: scrub ? "" : "all",
        });

        // Optional Parallax Depth
        if (parallax !== 0) {
          gsap.to(elementRef.current, {
            scrollTrigger: {
              trigger: elementRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            y: parallax,
            ease: "none",
          });
        }
      } else {
        // Reduced motion: Just fade in quickly
        gsap.from(elementRef.current, {
          scrollTrigger: {
            trigger: elementRef.current,
            start: start,
            toggleActions: "play none none none",
          },
          opacity: 0,
          duration: 0.5,
          clearProps: "all",
        });
      }
    });

    return () => mm.revert();
  }, [delay, y, x, duration, stagger, scrub, start, parallax]);

  return (
    <div ref={elementRef} className={`will-change-motion ${className}`}>
      {children}
    </div>
  );
}
