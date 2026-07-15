"use client";

import { motion } from "framer-motion";
import { SkillCategories } from "@/components/skills";
import { SectionContainer } from "@/components/shared";
import skillsData from "@/data/skills.json";
import type { SkillsData } from "@/data/skills.d";

interface SkillsSectionProps {
  data?: SkillsData;
}

export default function SkillsSection({ data = skillsData }: SkillsSectionProps) {
  return (
    <div className="relative bg-background">
      <SectionContainer className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {data.sectionTitle}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            {data.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SkillCategories categories={data.categories} />
        </motion.div>
      </SectionContainer>
    </div>
  );
}
