"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MotionProvider({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  // Initialize Lenis
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smoothHover: true,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      lenisRef.current = null;
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    if (lenisRef.current) {
      // Sync scroll reset with page transition fade-out
      const timer = setTimeout(() => {
        lenisRef.current.scrollTo(0, { immediate: true });
        ScrollTrigger.refresh();
      }, 500); // Matches PageTransition duration
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}
