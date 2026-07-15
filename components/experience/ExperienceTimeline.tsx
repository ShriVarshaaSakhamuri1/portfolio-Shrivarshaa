import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import type { ExperienceJob } from "@/types/experience";

interface ExperienceTimelineProps {
  jobs: ExperienceJob[];
}

export function ExperienceTimeline({ jobs }: ExperienceTimelineProps) {
  return (
    <div className="mx-auto mb-8 grid w-full max-w-[1100px] grid-cols-1 gap-6 min-[900px]:grid-cols-2">
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
