declare module "@/data/projects.json" {
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

  interface SectionInfo {
    title: string;
    description: string;
  }

  interface ProjectsData {
    sectionInfo: SectionInfo;
    projects: Project[];
  }

  const data: ProjectsData;
  export default data;
}
