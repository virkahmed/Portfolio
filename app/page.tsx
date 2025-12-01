import Intro from "@/components/intro";
import Link from "next/link";
import React from "react";

export default function Home() {
  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Python",
    "Java",
    "Data Structures & Algorithms",
    "Machine Learning",
  ];

  const featuredProjects = [
    {
      title: "Fraud Detection Visualizer",
      description: "Interactive machine learning visualizer for credit card fraud detection.",
      tech: ["Next.js", "TypeScript", "Machine Learning"],
      href: "/projects",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      href: "/projects",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-3xl space-y-16">
        <Intro />
        
        <section>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a Computer Science student at Princeton University with a passion for building 
            innovative solutions and exploring the intersection of technology and creativity. 
            I enjoy working on web development, machine learning, and software engineering projects 
            that make a meaningful impact.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-background border rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
