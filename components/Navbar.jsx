"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/", icon: "home" },
  { name: "Work", href: "/work", icon: "architecture" },
  { name: "Services", href: "/services", icon: "layers" },
  { name: "Contact", href: "/contact", icon: "mail" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Top Nav (Desktop) */}
      <nav className="bg-[#0a0a0f]/80 backdrop-blur-xl top-0 sticky z-40 border-b border-white/10 hidden md:block">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-[#00f2ff] group-hover:rotate-12 transition-transform">terminal</span>
            <span className="font-display font-black tracking-tighter text-xl text-[#00f2ff] uppercase">MOTION_ARCHITECT</span>
          </Link>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-display font-medium text-slate-400 hover:text-[#00f2ff] transition-all relative py-1",
                  pathname === link.href && "text-[#00f2ff]"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f2ff] shadow-[0_0_8px_#00f2ff]" />
                )}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="bg-primary-container text-black/70 text-on-primary-fixed px-6 py-2 rounded-full font-mono text-sm font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)]"
          >
            HIRE_ME
          </Link>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden sticky top-0 z-40 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00f2ff] text-xl">terminal</span>
          <span className="font-display font-black tracking-tighter text-sm text-[#00f2ff] uppercase">MOTION_ARCHITECT</span>
        </Link>
        <Link
          href="/contact"
          className="bg-primary-container text-on-primary-fixed px-4 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest"
        >
          HIRE
        </Link>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-50 p-2 bg-[#14141e]/60 backdrop-blur-xl rounded-2xl border border-white/15 shadow-[0_0_20px_rgba(0,242,255,0.15)] flex justify-around items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-xl transition-all duration-300",
                isActive ? "text-[#00f2ff] bg-[#00f2ff]/10 shadow-[inset_0_0_10px_rgba(0,242,255,0.1)]" : "text-slate-500"
              )}
            >
              <span className={cn("material-symbols-outlined", isActive && "fill-1")}>{link.icon}</span>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
