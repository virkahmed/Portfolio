import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Fraud Detection Visualizer",
    description:
      "Interactive machine learning visualizer for credit card fraud detection. Implements clustering (MST-based), decision stumps, and AdaBoost boosting algorithm with real-time training visualization.",
    tech: ["Next.js", "TypeScript", "Machine Learning", "Canvas API"],
    demo: "https://fraud-detector-nu.vercel.app/",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, MDX support, and optimized performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/virkahmed",
    demo: "#",
    featured: true,
  },
  {
    title: "BreathWatch",
    description:
      "A health monitoring application focused on respiratory tracking and analysis.",
    tech: ["React", "TypeScript", "Health APIs"],
    github: "https://github.com/virkahmed",
    demo: "#",
    featured: true,
  },
  {
    title: "Seam Carver",
    description:
      "Content-aware image resizing algorithm implementation that preserves important image features while resizing. Uses dual-gradient energy function and dynamic programming to find and remove minimum energy seams. Includes interactive web visualizer.",
    tech: ["Java", "TypeScript", "Next.js", "Image Processing", "Algorithms"],
    demo: "https://seam-carver-visualizer-i1jw.vercel.app/",
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground mb-8">
          A collection of projects I've worked on, ranging from web development to machine learning.
        </p>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                {project.featured && (
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target={project.demo.startsWith('http') ? '_blank' : undefined}
                    rel={project.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

