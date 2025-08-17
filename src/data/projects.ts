// Types
// Types
export interface ProjectTech {
  name: string;
}

export interface ProjectItem {
  name: string;
  desc: string;
  repo: string;
  icon: string;
  tech: ProjectTech[];
  link?: string;
}

export const projectsData: Record<string, ProjectItem[]> = {
  Projects: [
    {
      name: "Voting Platform – OTV",
      desc: "Production-grade voting platform handling 50K+ users/hour with zero downtime during peak traffic.",
      link: "https://www.otvinsight.com",
      repo: "Yuvraj-cyborg/otv-voting",
      icon: "vote",
      tech: [{ name: "React" }, { name: "PostgreSQL" }, { name: "JavaScript" }],
    },
    {
      name: "Lexy - Custom OS",
      desc: "A custom operating system written in Rust with BIOS isolation and binary compilation.",
      repo: "Yuvraj-cyborg/lexy",
      icon: "dragon",
      tech: [{ name: "Rust" }],
    },
    {
      name: "YouTube Clone",
      desc: "Full-stack YouTube clone with video playback, search functionality, and responsive design.",
      link: "https://youtube-clone-nuxt.vercel.app",
      repo: "Yuvraj-cyborg/youtube-clone",
      icon: "youtube",
      tech: [{ name: "Nuxt.js" }, { name: "TypeScript" }],
    },
    {
      name: "QuikBase API",
      desc: "High-performance RESTful API service built with Go, featuring PostgreSQL integration.",
      repo: "Yuvraj-cyborg/quikbase",
      icon: "database",
      tech: [{ name: "Go" }, { name: "PostgreSQL" }],
    },
    {
      name: "Verdyce",
      desc: "Time-decay voting consensus engine for decentralized governance systems.",
      repo: "Yuvraj-cyborg/verdyce",
      icon: "vote",
      tech: [{ name: "Rust" }],
    },
    {
      name: "Neurox",
      desc: "Neural network library with GPU acceleration and automatic differentiation.",
      repo: "Yuvraj-cyborg/neurox",
      icon: "brain",
      tech: [{ name: "Rust" }],
    },
    {
      name: "Deduck",
      desc: "Lightning-fast file deduplication tool with multiple hashing algorithms.",
      repo: "Yuvraj-cyborg/deduck",
      icon: "lightning",
      tech: [{ name: "Rust" }],
    },
    {
      name: "Gradsy LMS",
      desc: "Learning management system with quiz functionality and role-based access control.",
      repo: "Yuvraj-cyborg/Gradsy",
      icon: "graduation",
      tech: [{ name: "Java" }],
    },
    {
      name: "Maze Wizard",
      desc: "AI-powered 2D game with reinforcement learning enemy behavior using Bevy engine.",
      repo: "Yuvraj-cyborg/Maze-Wizard",
      icon: "gamepad",
      tech: [{ name: "Rust" }],
    },
  ],
  Packages: [
    {
      name: "verdyce",
      desc: "Rust crate for time-decay voting consensus mechanisms.",
      link: "https://crates.io/crates/verdyce",
      repo: "Yuvraj-cyborg/verdyce",
      icon: "cube",
      tech: [{ name: "Rust" }],
    },
    {
      name: "neurox",
      desc: "High-performance neural network library for Rust with GPU support.",
      link: "https://crates.io/crates/neurox",
      repo: "Yuvraj-cyborg/neurox",
      icon: "cube",
      tech: [{ name: "Rust" }],
    },
    {
      name: "anwaler",
      desc: "Fast and lightweight package manager utilities for Bun and Node.js projects.",
      link: "https://www.npmjs.com/package/anwaler",
      repo: "Yuvraj-cyborg/anwaler",
      icon: "rocket",
      tech: [{ name: "Bun" }, { name: "TypeScript" }],
    },
  ],
};
