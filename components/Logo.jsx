"use client";

import { motion } from "framer-motion";

/**
 * Logo Component
 * A minimal, tech-themed geometric logo with a cyan glow accent.
 */
export default function Logo({ className = "" }) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Outer Hexagon Shape (Engineering Vibe) */}
        <path 
          d="M16 2L28.1244 9V23L16 30L3.87564 23V9L16 2Z" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="text-white/20"
        />
        
        {/* Stylized 'M' / Architecture Lines */}
        <path 
          d="M9 20V12L16 19L23 12V20" 
          stroke="#00f2ff" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
        />
        
        {/* Central Core Dot */}
        <circle cx="16" cy="12" r="1.5" fill="#00f2ff" />
      </svg>

      {/* Background Glow Accent */}
      <div className="absolute inset-0 bg-primary-container/20 blur-xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
}
