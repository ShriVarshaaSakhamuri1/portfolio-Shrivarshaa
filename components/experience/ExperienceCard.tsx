"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TechnologyTag } from "@/components/shared";
import type { ExperienceJob } from "@/types/experience";

interface ExperienceCardProps {
  job: ExperienceJob;
  index: number;
}

export function ExperienceCard({ job, index }: ExperienceCardProps) {
  const previewAchievements = job.achievements.slice(0, 3);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-80px" }}
      className="h-full"
    >
      <Dialog>
        <DialogTrigger asChild>
          <button className="group h-full w-full rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Card className="interactive-card flex h-full min-h-[420px] flex-col overflow-hidden group-focus-visible:border-primary/40">
              <CardHeader className="space-y-4 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <Building2 className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="truncate">{job.company}</span>
                    </p>
                    <CardTitle className="mt-2 line-clamp-2 text-xl font-semibold leading-tight text-foreground">
                      {job.title}
                    </CardTitle>
                  </div>
                  <div className="shrink-0 space-y-1 font-mono text-xs text-muted-foreground sm:text-right">
                    <p className="flex items-center gap-2 sm:justify-end">
                      <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{job.location}</span>
                    </p>
                    <p className="flex items-center gap-2 sm:justify-end">
                      <CalendarDays className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{job.period}</span>
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between space-y-5 px-5 pb-5">
                {job.description ? (
                  <p className="text-sm leading-7 text-muted-foreground">
                    {job.description}
                  </p>
                ) : null}
                <ul className="space-y-3">
                  {previewAchievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm leading-6"
                    >
                      <span className="mt-0.5 font-mono text-primary">•</span>
                      <span className="line-clamp-3 text-muted-foreground">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.slice(0, 6).map((technology) => (
                    <TechnologyTag key={technology}>{technology}</TechnologyTag>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-mono text-xs font-medium text-primary">
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </button>
        </DialogTrigger>
        <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl leading-tight">
              {job.title}
            </DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  {job.company}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {job.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {job.period}
                  </p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          {job.description ? (
            <p className="text-sm leading-7 text-muted-foreground">
              {job.description}
            </p>
          ) : null}

          <ul className="space-y-3">
            {job.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-3 text-sm leading-6">
                <span className="mt-0.5 font-mono text-primary">•</span>
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
        </DialogContent>
      </Dialog>
    </motion.article>
  );
}
