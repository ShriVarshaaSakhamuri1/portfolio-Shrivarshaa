"use client";

import {
  Activity,
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  FileText,
  Wrench,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnologyTag } from "@/components/shared";
import type { SkillCategory } from "@/data/skills.d";

interface SkillCategoriesProps {
  categories: SkillCategory[];
}

const icons = {
  Activity,
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  FileText,
  Wrench,
};

export default function SkillCategories({ categories }: SkillCategoriesProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((category) => {
        const Icon = icons[category.icon as keyof typeof icons] ?? Code2;

        return (
          <Card
            key={category.title}
            className="h-full border-border/80 bg-card transition-colors duration-200 hover:border-primary/40 hover:shadow-md"
          >
            <CardHeader className="p-5 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg leading-tight">
                  {category.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechnologyTag key={skill}>{skill}</TechnologyTag>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
