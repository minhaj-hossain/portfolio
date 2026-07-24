/**
 * projects.js — Static Fallback Data
 *
 * The live project data is fetched from the backend API:
 *   https://portfolio-server-five-rose.vercel.app/projects
 *
 * The static entries below are commented out because all projects
 * are now managed via the API. They are kept here for reference only.
 * Restore them as a fallback if the API becomes unavailable.
 */

export const projects = [
  // ── commented out: all data is now served by the backend API ──

  // {
  //   id: "mediqueue",
  //   title: "MediQueue",
  //   description:
  //     "A full-stack medical appointment and queue management platform where patients can browse doctors, schedule appointments, and track real-time clinic queues to eliminate long waiting times.",
  //   tech: ["NEXT.JS 15", "REACT 19", "MONGODB", "BETTER_AUTH", "JWT", "FRAMER_MOTION", "TAILWIND 4"],
  //   image: "/projects/mediqueue-banner.png",
  //   githubLink: "https://github.com/minhaj-hossain/mediqueue",
  //   liveLink: "https://mediqueue-vert.vercel.app",
  //   featured: true,
  //   challenges: [
  //     "Handling real-time token state synchronization across multiple patient dashboards during peak clinic hours.",
  //     "Implementing secure multi-role authorization (Patient, Doctor, Admin) using Better Auth and JWT."
  //   ],
  //   futurePlans: [
  //     "Integrate WebSockets for instant push notifications on queue number updates.",
  //     "Add automated SMS & Email reminder integrations for upcoming appointments."
  //   ]
  // },
  // {
  //   id: "elevatex",
  //   title: "ElevateX",
  //   description:
  //     "An enterprise-grade, full-stack fitness ecology system designed for gym enthusiasts, certified coaches, and operations managers with Stripe payment integration.",
  //   tech: ["NEXT.JS 15", "REACT 19", "STRIPE", "MONGODB", "EXPRESS", "NODE.JS", "TAILWIND"],
  //   image: "/projects/elevatex-banner.png",
  //   githubLink: "https://github.com/minhaj-hossain/ElevateX-client",
  //   liveLink: "https://elevatex-client.vercel.app",
  //   featured: true,
  //   challenges: [
  //     "Architecting complex multi-tier membership access controls and secure Stripe webhook verification.",
  //     "Designing real-time workout schedule tracking with dynamic timezone handling."
  //   ],
  //   futurePlans: [
  //     "Integrate wearable device synchronization (Apple Health / Google Fit).",
  //     "Add AI-powered personalized workout plan generators."
  //   ]
  // },
  // {
  //   id: "aivora",
  //   title: "Aivora",
  //   description:
  //     "An advanced AI assistant and prompt engineering workspace featuring streaming completion previews, intelligent context routing, and persistent chat sessions.",
  //   tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "OPENAI_API", "FRAMER_MOTION"],
  //   image: "/projects/aivora-banner.png",
  //   githubLink: "https://github.com/minhaj-hossain/aivora",
  //   liveLink: "https://aivora-tan-three.vercel.app",
  //   featured: true,
  //   challenges: [
  //     "Managing streaming SSE tokens without causing layout jitter during high-throughput completions.",
  //     "Optimizing client-side state caching for multi-session AI chats."
  //   ],
  //   futurePlans: [
  //     "Add multi-model routing support (Claude 3.5, GPT-4o, Llama 3).",
  //     "Implement team workspace prompt sharing and template libraries."
  //   ]
  // },
  // {
  //   id: "pixgen",
  //   title: "Pixgen",
  //   description:
  //     "AI image generation dashboard featuring social authentication with Google, prompt history management, and high-DPI creative workflow previews.",
  //   tech: ["NEXT.JS", "BETTER_AUTH", "FRAMER_MOTION", "TAILWIND"],
  //   image: "/projects/pixgen-banner.png",
  //   githubLink: "https://github.com/minhaj-hossain/pixgen",
  //   liveLink: "https://pixgen-sage.vercel.app",
  //   featured: false,
  //   challenges: [
  //     "Handling long-running asynchronous image generation jobs without blocking UI render cycles.",
  //     "Designing fluid, high-DPI image grid masonry with progressive skeleton loaders."
  //   ],
  //   futurePlans: [
  //     "Add AI image upscaling and canvas inpainting tools.",
  //     "Build a public community prompt remix library."
  //   ]
  // },
  // {
  //   id: "novalend",
  //   title: "Novalend",
  //   description:
  //     "A modern digital library and book borrowing platform featuring category filtering, interactive member reviews, lending history tracking, and personalized recommendations.",
  //   tech: ["REACT", "TAILWIND", "MONGODB", "EXPRESS", "NODE.JS"],
  //   image: "/projects/novalend-banner.png",
  //   githubLink: "https://github.com/minhaj-hossain/Novalend",
  //   liveLink: "https://novalend-nine.vercel.app",
  //   featured: false,
  //   challenges: [
  //     "Preventing concurrent book borrowing race conditions.",
  //     "Building an optimistic UI update mechanism for book ratings and reviews."
  //   ],
  //   futurePlans: [
  //     "Implement P2P reader chat exchanges.",
  //     "Add AI-based book recommendation engine based on reading habits."
  //   ]
  // },
  // {
  //   id: "typescript-adventure",
  //   title: "TypeScript Adventure",
  //   description:
  //     "A gamified interactive learning platform designed to teach type-weaving, generic constraints, and advanced TypeScript declarations through step-by-step challenges.",
  //   tech: ["TYPESCRIPT", "NEXT.JS", "TAILWIND", "FRAMER_MOTION"],
  //   image: "/projects/typescript-adventure-banner.png",
  //   githubLink: "https://github.com/minhaj-hossain/typescript-adventure",
  //   liveLink: "https://typescript-adventure.vercel.app",
  //   featured: false,
  //   challenges: [
  //     "Building a sandboxed in-browser TypeScript AST type-checker for instant user code evaluation.",
  //     "Designing adaptive difficulty scaling across interactive lesson levels."
  //   ],
  //   futurePlans: [
  //     "Add multiplayer code duel challenges.",
  //     "Create downloadable TypeScript cheat-sheets and certification badges."
  //   ]
  // },
  // {
  //   id: "wanderlust",
  //   title: "Wanderlust",
  //   description:
  //     "A premium full-stack vacation rental platform engineered with Next.js 15 and React 19. Features property listing management, Better Auth security, and dynamic booking flows.",
  //   tech: ["NEXT.JS 15", "REACT 19", "MONGODB", "BETTER_AUTH", "TAILWIND 4"],
  //   image: "/projects/proj-01.png",
  //   githubLink: "https://github.com/minhaj-hossain/wanderlust",
  //   liveLink: null,
  //   featured: false,
  //   challenges: [
  //     "Managing dynamic availability calendar filters across international timezones.",
  //     "Combining Next.js 15 server component streaming with client animations."
  //   ],
  //   futurePlans: [
  //     "Integrate Mapbox interactive listing discovery map.",
  //     "Add host payout analytics and multi-currency pricing."
  //   ]
  // },
  // {
  //   id: "sql-lab",
  //   title: "SQL Lab",
  //   description:
  //     "An interactive SQL practice environment where developers can write, execute, and debug SQL queries against live database schemas directly in the browser — no local setup required.",
  //   tech: ["REACT", "NODE.JS", "EXPRESS", "MYSQL", "TAILWIND"],
  //   image: "/projects/proj-01.png",
  //   githubLink: "https://github.com/minhaj-hossain/sql_lab",
  //   liveLink: null,
  //   featured: false,
  //   challenges: [
  //     "Sandboxing live SQL query execution to prevent destructive operations on shared database state.",
  //     "Designing a responsive, split-pane editor and result viewer that works smoothly on all screen sizes."
  //   ],
  //   futurePlans: [
  //     "Add multi-database support (PostgreSQL, SQLite) with schema auto-detection.",
  //     "Integrate AI-powered query suggestions and query explain plan visualization."
  //   ]
  // },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
