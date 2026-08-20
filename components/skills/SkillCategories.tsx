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
            className="interactive-card h-full"
          >
            <CardHeader className="p-5 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-primary/15 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base leading-tight text-foreground">
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
