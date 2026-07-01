"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnologyTag } from "@/components/shared";
import type { ExperienceJob } from "@/types/experience";

interface ExperienceCardProps {
  job: ExperienceJob;
  index: number;
}

export function ExperienceCard({ job, index }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <Card className="h-full border-border/80 bg-card transition-colors duration-200 hover:border-primary/40 hover:shadow-md">
        <CardHeader className="space-y-4 p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Building2 className="h-4 w-4 text-primary" />
                {job.company}
              </p>
              <CardTitle className="mt-2 text-xl font-semibold leading-tight text-foreground">
                {job.title}
              </CardTitle>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground sm:text-right">
              <p className="flex items-center gap-2 sm:justify-end">
                <MapPin className="h-4 w-4 text-secondary" />
                {job.location}
              </p>
              <p className="flex items-center gap-2 sm:justify-end">
                <CalendarDays className="h-4 w-4 text-secondary" />
                {job.period}
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            {job.description}
          </p>
        </CardHeader>
        <CardContent className="space-y-5 px-5 pb-5 sm:px-6 sm:pb-6">
          <ul className="space-y-3">
            {job.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-3 text-sm leading-6">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((technology) => (
                <TechnologyTag key={technology}>{technology}</TechnologyTag>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
