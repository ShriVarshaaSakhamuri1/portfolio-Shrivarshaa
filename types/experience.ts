export type JobType = "all" | "fulltime" | "internship";

export interface ExperienceJob {
  title: string;
  company: string;
  location: string;
  period: string;
  type: Exclude<JobType, "all">;
  description: string;
  technologies: string[];
  achievements: string[];
  projectLink?: string;
}

export interface ExperienceSectionInfo {
  title: string;
  description: string;
}
