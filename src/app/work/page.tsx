import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  repoUrl?: string;
  liveUrl?: string;
  description: string;
  details: string[];
}

const projects: Project[] = [
  {
    title: "Gradsy – Web-based Quiz and Learning Management System",
    repoUrl: "https://github.com/Yuvraj-cyborg/Gradsy",
    description: "Web application for managing quizzes, learning materials, and user roles",
    details: [
      "Developed using Java (Spring Boot) with a Vaadin-based frontend for a seamless UI experience.",
      "Implemented role-based access for teachers and students, allowing content creation and quiz attempts.",
      "Used H2 file-based database for local development and rapid testing."
    ]
  },
  {
    title: "Voting Platform – Odisha Television Network",
    liveUrl: "https://www.otvinsight.com",
    description: "Developed and deployed a production-grade voting platform for a high-traffic social media event.",
    details: [
      "Handled 50K+ users per hour via Vercel, stress-tested for peak concurrency.",
      "Managed over 356,000 Supabase storage requests per day during April 2025.",
      "Built with React, Express.js, PostgreSQL, Prisma, Docker, and Supabase.",
      "Designed for reliability and zero downtime during heavy user voting spikes."
    ]
  },
  {
    title: "Rust CLI",
    repoUrl: "https://github.com/Yuvraj-cyborg/RUST",
    description: "Command-line application managing tasks",
    details: [
      "Supported CRUD operations via simple command-line inputs.",
      "Used MongoDB for persistent task storage and multi-user support.",
      "Prioritized speed, minimalism, and offline functionality."
    ]
  },
  {
    title: "Full Stack Youtube Clone",
    repoUrl: "https://github.com/Yuvraj-cyborg/youtube-clone-nuxt",
    description: "A functional clone of YouTube featuring video playback and search",
    details: [
      "Used Nuxt.js and Tailwind CSS for responsive, accessible design.",
      "Integrated YouTube API for video search and playback.",
      "Applied server-side rendering (SSR) and optimized state management."
    ]
  },
  {
    title: "AI-content generator",
    description: "A service for automated content creation",
    details: [
      "Leveraged Next.js, MongoDB, and Clerk for seamless auth and user sessions.",
      "Integrated Gemini API and Stable Diffusion for high-quality media generation."
    ]
  }
];

export default function WorkPage() {
  return (
    <div className="space-y-10 py-4">
      <h1 className="text-xl font-bold mb-8">Projects</h1>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-md font-semibold">
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