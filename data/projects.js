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
    id: "mediqueue",
    title: "mediqueue",
    description:
      "A tutor booking platform where students can browse tutors, book learning sessions, and manage their scheduled classes easily. The system helps avoid scheduling conflicts and provides a smooth learning experience through digital booking management.",
    tech: ["NEXT.JS 15", "REACT 19", "MONGODB", "BETTER_AUTH", "JWT", "FRAMER_MOTION", "TAILWIND 4"],
    image: "/projects/mediqueue-banner.png",
    githubLink: "https://github.com/minhaj-hossain/mediqueue",
    liveLink: "https://mediqueue-vert.vercel.app",
    featured: true,
  },
  {
    id: "novalend",
    title: "Novalend",
    description:
      "A sophisticated book borrowing and lending platform designed for passionate readers. Features personalized book recommendations, interactive member reviews, dynamic category filtering, and an automated lending tracker.",
    tech: ["REACT", "TAILWIND", "MONGODB", "EXPRESS", "NODE.JS"],
    image: "/projects/novalend-banner.png",
    githubLink: "https://github.com/minhaj-hossain/Novalend",
    liveLink: null,
    featured: false,
  },
  {
    id: "book-vibe",
    title: "Book Vibe",
    description:
      "Interactive library management system featuring data visualization of reading habits. Integrates Chart.js for insightful analytics and a clean, responsive layout for personal collections.",
    tech: ["REACT", "TAILWIND", "CHART.JS", "VITE"],
    image: "/projects/book-vibe-banner.png",
    githubLink: "https://github.com/minhaj-hossain/book_vibe",
    liveLink: "http://www.book_vibe.surge.sh",
    featured: false,
  },
  {
    id: "digitools",
    title: "DigiTools",
    description:
      "An all-in-one productivity and software-as-a-service platform offering premium AI utilities, professional resume builders, secure cloud backups, and real-time team collaboration tools under a unified subscription pricing model.",
    tech: ["REACT", "TAILWIND", "MONGODB", "EXPRESS", "NODE.JS", "STRIPE"],
    image: "/projects/digitools-banner.png",
    githubLink: "https://github.com/minhaj-hossain/DigiTools_Platform",
    liveLink: null,
    featured: true,
  },
  {
    id: "pixgen",
    title: "Pixgen",
    description:
      "AI image generation dashboard featuring social authentication with Google and a sleek SaaS-like management interface. Delivers a premium creative workflow with real-time generation previews.",
    tech: ["NEXT.JS", "BETTER_AUTH", "FRAMER_MOTION", "TAILWIND"],
    image: "/projects/pixgen-banner.png",
    githubLink: "https://github.com/minhaj-hossain/pixgen",
    liveLink: "https://pixgen-sage.vercel.app",
    featured: false,
  },
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
  }
];

/** Projects shown on the Home page (featured hero section) */
export const featuredProjects = projects.filter((p) => p.featured);

/** All projects for the Work/archive page */
export const allProjects = projects;
