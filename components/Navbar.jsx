"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Logo from "@/components/Logo";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Academic", href: "/academic" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Shrink effect on scroll
  const padding = useTransform(scrollY, [0, 100], ["16px 24px", "8px 16px"]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 15, 0.4)", "rgba(10, 10, 15, 0.7)"]
  );
  const maxWidth = useTransform(scrollY, [0, 100], ["1000px", "800px"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ padding, backgroundColor, maxWidth }}
        className={cn(
          "w-full rounded-full border border-white/10 backdrop-blur-xl shadow-2xl pointer-events-auto flex items-center justify-between transition-all duration-500",
          isOpen ? "rounded-[2rem]" : "rounded-full overflow-hidden",
          isScrolled ? "border-primary-container/20 shadow-primary-container/5" : "border-white/10"
        )}
      >
        {/* Logo (Left) */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-4 group">
            <Logo className="w-8 h-8" />
          </Link>
        </div>

        {/* Desktop Nav Items (Center) */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300",
                  isActive ? "text-primary-container" : "text-on-surface-variant hover:text-white"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-container/10 rounded-full border border-primary-container/20 shadow-[0_0_15px_rgba(0,242,255,0.1)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button (Right) */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="bg-primary-container text-black font-mono text-[10px] font-bold px-6 py-2.5 rounded-full uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,242,255,0.2)]"
            >
              HIRE_ME
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 transition-all active:scale-90"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-primary-container rounded-full" 
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-primary-container/60 rounded-full" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-primary-container rounded-full" 
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-2xl border-t border-white/5 md:hidden flex flex-col p-6 gap-4 overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block font-display text-lg font-black uppercase tracking-widest transition-colors",
                      pathname === link.href ? "text-primary-container text-glow" : "text-on-surface-variant"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-px bg-white/5 my-2" />
              
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary-container/10 border border-primary-container/30 text-primary-container text-center py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.3em]"
              >
                Initialize_Project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
