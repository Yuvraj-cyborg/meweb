import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGlobe, FaDatabase, FaGamepad, FaGraduationCap, FaYoutube, FaMicrochip } from 'react-icons/fa';
import { GiDragonHead } from 'react-icons/gi';

interface Project {
  title: string;
  repoUrl?: string;
  liveUrl?: string;
  description: string;
  details: string[];
  image?: string;
  logo: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Voting Platform – Odisha Television Network",
    liveUrl: "https://www.otvinsight.com",
    description: "Developed and deployed a production-grade voting platform for a high-traffic social media event.",
    image: "/projects/otv-voting-preview.png",
    logo: <FaGlobe className="text-blue-600" />,
    details: [
      "Handled 50K+ users per hour via Vercel, stress-tested for peak concurrency.",
      "Managed over 356,000 Supabase storage requests per day during April 2025.",
      "Built with React, Express.js, PostgreSQL, Prisma, Docker, and Supabase.",
      "Designed for reliability and zero downtime during heavy user voting spikes."
    ]
  },
  {
    title: "Lexy - OS",
    repoUrl: "https://github.com/Yuvraj-cyborg/lexy",
    description: "An operating system in rust",
    image: "/projects/lexy-os-preview.png",
    logo: <GiDragonHead className="text-orange-600" />,
    details: [
      "Isolates the BIOS from current OS and runs in independently",
      "Currently supports writing strings",
      "compiles binaries for the custom OS and succefully displays it",
      "Will update it soon.."
    ]
  },
  {
    title: "QuikBase - Database API Service",
    repoUrl: "https://github.com/Yuvraj-cyborg/quikbase",
    description: "A Go-based web application providing robust RESTful API services with PostgreSQL integration",
    image: "/projects/quikbase-preview.png",
    logo: <FaDatabase className="text-green-600" />,
    details: [
      "Developed using Go and Gin web framework for high-performance API endpoints",
      "Implemented secure user management system with encrypted password handling",
      "Integrated PostgreSQL for reliable data persistence and complex queries",
      "Containerized the application using Docker for consistent deployment",
    ]
  },
  {
    title: "Maze Wizard - AI-Powered Dungeon Chase",
    description: "A Rust-based 2D dungeon chase game featuring an evolving AI enemy using reinforcement learning",
    repoUrl: "https://github.com/Yuvraj-cyborg/Maze-Wizard",
    image: "/projects/maze-wizard-preview.png",
    logo: <FaGamepad className="text-purple-600" />,
    details: [
      "Built with Bevy game engine in Rust, implementing both traditional pathfinding and AI-based enemy behavior",
      "Integrated A* pathfinding algorithm for initial enemy movement patterns",
      "Developed a custom reinforcement learning system using Q-Learning from scratch in Rust",
      "Implemented a reward-penalty mechanism for the AI to learn and adapt from previous gameplay rounds",
      "Created an evolving difficulty system where the enemy becomes more challenging as it learns from player interactions"
    ]
  },
  {
    title: "Gradsy – Web-based Quiz and Learning Management System",
    repoUrl: "https://github.com/Yuvraj-cyborg/Gradsy",
    description: "Web application for managing quizzes, learning materials, and user roles",
    image: "/projects/gradsy-preview.jpeg",
    logo: <FaGraduationCap className="text-indigo-600" />,
    details: [
      "Developed using Java (Spring Boot) with a Vaadin-based frontend for a seamless UI experience.",
      "Implemented role-based access for teachers and students, allowing content creation and quiz attempts.",
      "Used H2 file-based database for local development and rapid testing."
    ]
  },
  {
    title: "Full Stack Youtube Clone",
    liveUrl: "https://youtube-clone-nuxt.vercel.app",
    description: "A functional clone of YouTube featuring video playback and search",
    image: "/projects/youtube-clone-preview.png",
    logo: <FaYoutube className="text-red-600" />,
    details: [
      "Used Nuxt.js and Tailwind CSS for responsive, accessible design.",
      "Integrated YouTube API for video search and playback.",
      "Applied server-side rendering (SSR) and optimized state management."
    ]
  },
];

const techIcons: { [key: string]: string } = {
  "React": "/tech-icons/react.svg",
  "Java": "/tech-icons/java.svg",
  "Go": "/tech-icons/go.svg",
  "Rust": "/tech-icons/rust.svg",
  "PostgreSQL": "/tech-icons/postgresql.svg",
  "Docker": "/tech-icons/docker.svg",
  "Nuxt.js": "/tech-icons/nuxt.svg",
};

export default function WorkPage() {
  return (
    <div className="space-y-10 py-4">
      <h1 className="text-3xl mb-6">Projects</h1>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-lg flex items-center gap-3">
              <span className="text-xl">{project.logo}</span>
              {project.title}
            </h2>
            
            <div className="flex gap-4">
              {project.repoUrl && (
                <Link 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  GitHub repo
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Live Site
                </Link>
              )}
            </div>

            {project.image && (
              <div className="w-full rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={450}
                  quality={75}
                  priority={index < 2}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                  className="w-full h-auto"
                />
              </div>
            )}
            
            <p className="text-lg">{project.description}</p>
            
            <ul className="list-disc pl-6 space-y-2 text-sm">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}