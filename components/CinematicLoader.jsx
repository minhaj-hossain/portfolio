"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

/**
 * CinematicLoader Component
 * A premium, first-visit-only loader that simulates a system initialization.
 * Uses sessionStorage to ensure it only appears once per session.
 */
export default function CinematicLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing System");

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem("hasVisitedCinematic");
    
    if (!hasVisited) {
      setIsVisible(true);
      // Prevent scrolling while loading
      document.body.style.overflow = "hidden";
      
      // Fake progress animation
      const duration = 2500; // 2.5 seconds
      const interval = 20; // 20ms steps
      const steps = duration / interval;
      let currentStep = 0;

      const progressInterval = setInterval(() => {
        currentStep++;
        const newProgress = Math.min((currentStep / steps) * 100, 100);
        setProgress(newProgress);

        // Update status messages
        if (newProgress > 20 && newProgress < 45) setStatus("Calibrating Motion Core");
        if (newProgress > 45 && newProgress < 70) setStatus("Syncing Neural Interface");
        if (newProgress > 70 && newProgress < 90) setStatus("Deploying Architecture");
        if (newProgress >= 90) setStatus("System Ready");

        if (currentStep >= steps) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("hasVisitedCinematic", "true");
            document.body.style.overflow = "";
          }, 500);
        }
      }, interval);

      return () => {
        clearInterval(progressInterval);
        document.body.style.overflow = "";
      };
    }
  }, []);

  // Handle prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050508]/80 backdrop-blur-sm"
        >
          {/* Subtle scanning line effect */}
          <div className="scanline opacity-20"></div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="relative z-10 w-[90%] max-w-md p-8 glass-panel rounded-2xl flex flex-col items-center gap-8 shadow-2xl border-white/10"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary-container/5 blur-3xl -z-10 rounded-full"></div>

            {/* Logo Section */}
            <div className="relative group">
              <Logo className="w-16 h-16" />
              <motion.div 
                className="absolute inset-0 bg-primary-container/20 blur-xl rounded-full -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex flex-col items-center">
                <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-white/40 mb-1">
                  Nexus Framework
                </h2>
                <h1 className="text-xl font-display font-medium text-white text-glow">
                  {status}
                </h1>
              </div>

              {/* Advanced Progress Indicator */}
              <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-container/40 via-primary-container to-primary-fixed-dim"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
                {/* Glow following the tip of the progress */}
                <motion.div 
                  className="absolute top-0 bottom-0 w-20 bg-white/20 blur-md"
                  animate={{ left: `${progress}%` }}
                  style={{ transform: 'translateX(-100%)' }}
                />
              </div>

              <div className="flex justify-between w-full font-mono text-[10px] tracking-widest text-white/30 uppercase">
                <span>Core.v4.0.2</span>
                <span className="text-primary-container/60">{Math.round(progress)}%</span>
                <span>Uptime: 99.9%</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20"></div>
            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20"></div>
          </motion.div>

          {/* Visual depth elements behind the panel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-container/5 blur-[120px] -z-10 rounded-full animate-pulse"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
