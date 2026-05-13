"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import InteractiveGlassCard from "@/components/InteractiveGlassCard";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const headingRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State
      gsap.set(".hero-badge, .hero-desc, .hero-btns-wrapper", { opacity: 0, y: 15 });
      gsap.set(".heading-line", { opacity: 0, y: 30 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(imageContainerRef.current, { x: 50, opacity: 0, rotateY: -10 });

      // 2. Cinematic Entrance Timeline - Calm & Elegant
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to(glowRef.current, { opacity: 0.1, scale: 1, duration: 3, ease: "power2.out" })
        .to(".hero-badge", { opacity: 1, y: 0, duration: 1.2 }, "-=2.5")
        .to(".heading-line", {
          opacity: 1,
          y: 0,
          duration: 1.8,
          stagger: 0.15,
          ease: "power4.out"
        }, "-=2")
        .to(".hero-desc", { opacity: 1, y: 0, duration: 1.2 }, "-=1.2")
        .to(imageContainerRef.current, {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 2.5,
          ease: "expo.out"
        }, "-=1.8")
        .to(".hero-btns-wrapper", {
          opacity: 1,
          y: 0,
          duration: 1.2
        }, "-=1.5");

      // 3. Floating Motion for Card - Very Slow & Subtle
      gsap.to(imageContainerRef.current, {
        y: "+=10",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 4. Parallax Depth on Scroll
      gsap.to(imageContainerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // Added smoothing
        },
        y: 60,
        rotateZ: 2,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[auto] lg:min-h-[707px] grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-gutter pt-30  py-16 lg:py-section-gap relative overflow-hidden">
      {/* Background Glow - Scaled for mobile */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-primary-container blur-[80px] md:blur-[160px] rounded-full pointer-events-none z-0"
      ></div>

      <div className="lg:col-span-7 space-y-stack-md z-10">
        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/20 bg-primary-container/5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00f2ff]"></span>
          <span className="font-mono text-[9px] text-primary-container uppercase tracking-widest font-bold">CORE_SYSTEM_ACTIVE</span>
        </div>

        <h1 ref={headingRef} className="font-display text-4xl sm:text-6xl lg:text-[clamp(3.5rem,7.5vw,7.5rem)] font-black text-on-surface leading-[0.95] tracking-tighter uppercase italic max-w-[12ch]">
          <span className="heading-line block">CRAFTING</span>
          <span className="heading-line block text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary-fixed to-secondary">EXPERIENCES</span>
          <span className="heading-line block">THAT MOVE</span>
        </h1>

        <p className="hero-desc font-sans text-lg text-on-surface-variant max-w-lg leading-relaxed">
          Full-stack MERN engineer from Bangladesh. Architecting high-performance systems where clean logic meets fluid, human-centric motion.
        </p>

        <div className="hero-btns-wrapper flex flex-wrap gap-4 pt-4">
          <Link href="/contact">
            <MagneticButton
              className="bg-primary-container text-black/70 text-on-primary-fixed shadow-[0_0_40px_rgba(0,242,255,0.15)]"
            >
              INITIATE PROJECT
            </MagneticButton>
          </Link>
          <Link href="/Md_Minhaj_Resume.pdf" download='minhaj_hossain_resume.pdf'>
            <MagneticButton
              className="border border-white/10 hover:border-primary-container text-on-surface"
            >
              DOWNLOAD RESUME
            </MagneticButton>
          </Link>
        </div>
      </div>

      <div
        ref={imageContainerRef}
        className="lg:col-span-5 relative w-full aspect-square lg:aspect-auto z-10"
      >
        <InteractiveGlassCard
          animateIn={false}
          className="rounded-3xl p-4"
        >
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[540px] rounded-2xl bg-surface-container flex items-center justify-center border border-white/5 overflow-hidden relative group">
            <Image
              src="/minhaj.png"
              alt="Minhaj Hossain"
              fill
              priority
              className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay"></div>

            {/* <p className="absolute bottom-6 left-6 font-mono text-[9px] text-on-surface-variant opacity-50 uppercase tracking-[0.4em] z-10 group-hover:text-primary-container group-hover:opacity-100 transition-all duration-500">
              [ SUBJECT_01 // ENGINEER ]
            </p> */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[1px] border-white/5 z-20"></div>
          </div>
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-background/60 backdrop-blur-xl p-4 md:p-5 rounded-xl border border-white/10 z-30">
            <p className="font-mono text-[8px] md:text-[9px] text-primary-container mb-1 opacity-70">OS_V0.0.1</p>
            <p className="font-display text-[10px] md:text-xs text-white font-black tracking-widest uppercase italic">MINHAJ</p>
          </div>
        </InteractiveGlassCard>
      </div>
    </section>
  );
}
