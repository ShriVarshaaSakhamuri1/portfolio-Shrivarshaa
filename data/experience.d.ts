declare module "@/data/experience.json" {
  type JobType = "fulltime" | "internship";

  interface Job {
    title: string;
    company: string;
    location: string;
    period: string;
    type: JobType;
    description: string;
    technologies: string[];
    achievements: string[];
    projectLink?: string;
  }

  interface SectionInfo {
    title: string;
    description: string;
  }

  interface ExperienceData {
    sectionInfo: SectionInfo;
    jobs: Job[];
  }

  const data: ExperienceData;
  export default data;
}
