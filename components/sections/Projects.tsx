"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionContainer } from "@/components/shared";
import projectsJson from "@/data/projects.json";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  Url: string;
  keyFeatures: string[];
  categories: string[];
  projectType?: string;
  dates?: string;
}

interface ProjectsData {
  sectionInfo: {
    title: string;
    description: string;
  };
  projects: Project[];
}

// Type assertion for the entire JSON structure
const projects = projectsJson as unknown as ProjectsData;

const categories = [
  "AI/ML",
  "Full Stack",
  "DevOps",
  "Security",
];

interface ProjectsSectionProps {
  description?: string;
}

export function ProjectsSection({ description }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState("AI/ML");

  const filteredProjects = projects.projects.filter((project) =>
    project.categories.includes(activeTab)
  );

  return (
    <section className="relative bg-background" id="projects">
      <SectionContainer>
        <div className="section-heading">
          <p className="terminal-label mb-3">&gt; selected_work</p>
          <h2 className="mb-3 text-2xl font-semibold text-foreground md:text-3xl">
            Personal Projects
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            {description ??
              "A showcase of my most significant projects, demonstrating my skills and expertise in computer science engineering."}
          </p>
        </div>

        {/* Project Categories Tabs */}
        <div className="mb-8 flex justify-start overflow-x-auto">
          <div className="inline-flex gap-1 rounded-lg border border-[var(--border-raw)] bg-[var(--surface)] p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`rounded-md px-4 py-2 font-mono text-xs transition-colors
                  ${
                    activeTab === category
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-[var(--surface-hover)] hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
