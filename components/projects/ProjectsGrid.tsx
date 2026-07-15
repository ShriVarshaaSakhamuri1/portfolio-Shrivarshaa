import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  Url: string;
  githubUrl: string;
  keyFeatures: string[];
  categories: string[];
  projectType?: string;
  dates?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}
