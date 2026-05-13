/**
 * projects.js — Single Source of Truth
 * 
 * All project data lives here. Both the Home page (ProjectShowcase)
 * and the Work page import from this file to guarantee consistency.
 * 
 * Schema:
 *   id          — unique slug identifier
 *   title       — display name
 *   description — project summary
 *   tech        — array of tech stack tags (UPPERCASE)
 *   image       — path to project preview image in /public/projects/
 *   githubLink  — GitHub repo URL
 *   liveLink    — live demo URL (null if not deployed)
 *   featured    — if true, shown on Home page hero section
 */

export const projects = [
  {
    id: "wanderlust",
    title: "Wanderlust",
    description:
      "A premium full-stack vacation rental platform engineered with Next.js 15 and React 19. Features a robust property listing system, secure authentication with Better Auth, and a cinematic UI/UX designed for global scaling.",
    tech: ["NEXT.JS 15", "REACT 19", "MONGODB", "BETTER_AUTH", "TAILWIND 4"],
    image: "/projects/proj-01.png",
    githubLink: "https://github.com/minhaj-hossain/wanderlust",
    liveLink: null,
    featured: true,
  },
  {
    id: "ai-model-hub",
    title: "AI Model Hub",
    description:
      "A futuristic marketplace for cutting-edge AI models. Implements complex shopping cart logic, responsive product grids, and a high-tech aesthetic using the latest React 19 features.",
    tech: ["REACT 19", "TAILWIND 4", "DAISYUI", "VITE"],
    image: "/projects/proj-02.png",
    githubLink: "https://github.com/minhaj-hossain/ai_model_hub",
    liveLink: null,
    featured: false,
  },
  {
    id: "book-vibe",
    title: "Book Vibe",
    description:
      "Interactive library management system featuring data visualization of reading habits. Integrates Chart.js for insightful analytics and a clean, responsive layout for personal collections.",
    tech: ["REACT", "TAILWIND", "CHART.JS", "VITE"],
    image: "/projects/proj-03.png",
    githubLink: "https://github.com/minhaj-hossain/book_vibe",
    liveLink: "http://www.book_vibe.surge.sh",
    featured: false,
  },
  {
    id: "dragon-news",
    title: "Dragon News",
    description:
      "High-performance news portal with dynamic routing, category-based filtering, and optimized content layout. Built with Next.js for server-side rendering and blazing-fast page transitions.",
    tech: ["NEXT.JS", "REACT", "TAILWIND"],
    image: "/projects/proj-04.png",
    githubLink: "https://github.com/minhaj-hossain/dragon_news",
    liveLink: null,
    featured: true,
  },
  {
    id: "pixgen",
    title: "Pixgen",
    description:
      "AI image generation dashboard featuring social authentication with Google and a sleek SaaS-like management interface. Delivers a premium creative workflow with real-time generation previews.",
    tech: ["NEXT.JS", "GOOGLE_AUTH", "FRAMER_MOTION", "TAILWIND"],
    image: "/projects/proj-05.png",
    githubLink: "https://github.com/minhaj-hossain/pixgen",
    liveLink: "https://pixgen-sage.vercel.app",
    featured: false,
  },
  {
    id: "bpl-dream",
    title: "BPL Dream",
    description:
      "Fantasy sports management platform for the BPL, implementing complex team-building logic, real-time state management, and an interactive player selection interface.",
    tech: ["REACT", "TAILWIND", "CONTEXT_API", "VITE"],
    image: "/projects/proj-06.png",
    githubLink: "https://github.com/minhaj-hossain/bpl-dream",
    liveLink: null,
    featured: false,
  },
];

/** Projects shown on the Home page (featured hero section) */
export const featuredProjects = projects.filter((p) => p.featured);

/** All projects for the Work/archive page */
export const allProjects = projects;
