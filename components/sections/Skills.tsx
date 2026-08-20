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
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <p className="terminal-label mb-3">&gt; skills --list</p>
          <h1 className="mb-3 text-2xl font-semibold text-foreground md:text-3xl">
            {data.sectionTitle}
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
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
