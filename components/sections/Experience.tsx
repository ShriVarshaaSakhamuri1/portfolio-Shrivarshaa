"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceTimeline } from "@/components/experience";
import { SectionContainer } from "@/components/shared";
import experienceData from "@/data/experience.json";
import type { ExperienceJob } from "@/types/experience";

interface ExperienceSectionProps {
  jobs?: ExperienceJob[];
  description?: string;
}

export default function ExperienceSection({
  jobs,
  description,
}: ExperienceSectionProps) {
  const jobList = jobs ?? experienceData.jobs;
  const sectionDescription =
    description ?? experienceData.sectionInfo.description;
  return (
    <div className="relative flex min-h-screen bg-background">
      <div className="flex-1 relative w-full">
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            <p className="terminal-label mb-3">&gt; experience</p>
            <h1 className="mb-3 text-2xl font-semibold text-foreground md:text-3xl">
              Professional Experience
            </h1>
            {sectionDescription ? (
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                {sectionDescription}
              </p>
            ) : null}
          </motion.div>

          <ExperienceTimeline jobs={jobList} />
        </SectionContainer>
      </div>
    </div>
  );
}
