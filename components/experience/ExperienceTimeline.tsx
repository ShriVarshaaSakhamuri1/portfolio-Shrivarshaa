import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import type { ExperienceJob } from "@/types/experience";

interface ExperienceTimelineProps {
  jobs: ExperienceJob[];
}

export function ExperienceTimeline({ jobs }: ExperienceTimelineProps) {
  return (
    <div className="mx-auto mb-8 grid max-w-4xl gap-5">
      {jobs.map((job, index) => (
        <ExperienceCard
          key={`${job.company}-${job.period}`}
          job={job}
          index={index}
        />
      ))}
    </div>
  );
}
