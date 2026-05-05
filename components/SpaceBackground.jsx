"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * SpaceBackground Component
 * A high-performance, cinematic space background with:
 * 1. Deep radial gradient base
 * 2. Optimized Canvas star field (twinkling & drifting)
 * 3. Drifting nebula blobs (GSAP animated)
 * 4. Noise texture overlay
 * 5. ScrollTrigger parallax depth
 */
export default function SpaceBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const blobsRef = useRef([]);

  useEffect(() => {
    // 1. Setup Canvas Stars
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 4000); // Responsive density
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        // Subtle drift
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;

        // Twinkle effect
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed *= -1;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(drawStars);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawStars();

    // 2. GSAP Animations
    const ctx_gsap = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReducedMotion) {
        // Nebula Blobs Drifting
        blobsRef.current.forEach((blob, i) => {
          if (!blob) return;
          gsap.to(blob, {
            x: "random(-100, 100)",
            y: "random(-100, 100)",
            duration: "random(20, 40)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * -5,
          });
        });

        // Parallax Effect on Scroll
        gsap.to(containerRef.current, {
          y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.1, // Subtle 10% parallax
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      ctx_gsap.revert(); // GSAP cleanup
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#050508]">
      {/* 1. Radial Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(10,10,20,1)_0%,_rgba(0,0,0,1)_100%)]"></div>

      {/* 2. Parallax Container */}
      <div ref={containerRef} className="absolute inset-0 will-change-transform">
        
        {/* 3. Star Field */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-40 mix-blend-screen"
        />

        {/* 4. Nebula Blobs */}
        <div 
          ref={(el) => (blobsRef.current[0] = el)}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-[#00f2ff]/5 blur-[160px] rounded-full will-change-transform"
        ></div>
        
        <div 
          ref={(el) => (blobsRef.current[1] = el)}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-[#ff4a8d]/5 blur-[140px] rounded-full will-change-transform"
        ></div>

        <div 
          ref={(el) => (blobsRef.current[2] = el)}
          className="absolute -bottom-[10%] left-[20%] w-[55%] h-[55%] bg-[#006a71]/10 blur-[120px] rounded-full will-change-transform"
        ></div>

        <div 
          ref={(el) => (blobsRef.current[3] = el)}
          className="absolute top-[40%] left-[40%] w-[50%] h-[50%] bg-[#bdec00]/5 blur-[150px] rounded-full will-change-transform"
        ></div>
      </div>

      {/* 5. Noise Overlay (from globals.css) */}
      <div className="noise-overlay opacity-[0.03]"></div>

      {/* 6. Vignette / Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
    </div>
  );
}
