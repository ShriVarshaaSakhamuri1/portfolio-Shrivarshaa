"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BookOpen,
  Clapperboard,
  Gamepad,
  MapPin,
  Utensils,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionContainer } from "@/components/shared";
import aboutData from "@/data/about.json";

export interface Overview {
  name: string;
  title: string;
  location: string;
  description: string[];
}

interface AboutSectionProps {
  overview?: Overview;
  subtitle?: string;
}

const IconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Activity,
  BookOpen,
  Clapperboard,
  Gamepad,
  Utensils,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
};

function renderInlineEmphasis(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

export default function AboutPage({
  overview,
  subtitle = "Building production-ready machine learning, generative AI, RAG, and agentic systems.",
}: AboutSectionProps = {}) {
  const [activeTab, setActiveTab] = useState("overview");
  const overviewData = overview ?? aboutData.overview;

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 h-36 w-36 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        </div>

        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center"
          >
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">
              <span className="text-primary">About</span>{" "}
              <span className="text-secondary">Me</span>
            </h1>
            <div className="mx-auto h-0.5 w-12 bg-gradient-to-r from-primary to-secondary" />
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {subtitle}
            </p>
          </motion.div>

          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-6"
          >
            <div className="mb-5 flex justify-center">
              <TabsList className="grid w-full max-w-xs grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto w-full max-w-[900px]"
              >
                <motion.div variants={itemVariants}>
                  <Card className="interactive-card bg-card">
                    <CardHeader className="items-center px-5 pb-4 pt-6 text-center sm:px-8">
                      <div className="mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-card">
                          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">
                            SS
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl">
                        {overviewData.name}
                      </CardTitle>
                      <p className="text-sm font-medium text-primary">
                        {overviewData.title}
                      </p>
                      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {overviewData.location}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4 px-5 pb-6 text-left sm:px-8">
                      {overviewData.description.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-muted-foreground"
                        >
                          {renderInlineEmphasis(paragraph)}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="personal">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={itemVariants}
                  className="mx-auto mb-8 w-full max-w-[860px]"
                >
                  <Card className="interactive-card bg-card">
                    <CardHeader className="px-5 pt-6 text-center sm:px-8">
                      <CardTitle className="text-xl">Outside Work</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 px-5 pb-6 sm:px-8">
                      {aboutData.personal.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
                  <h3 className="mb-4 text-center text-lg font-semibold">
                    Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                    {aboutData.hobbies.map((hobby) => {
                      const IconComponent = IconMap[hobby.icon];
                      if (!IconComponent) return null;

                      return (
                        <div
                          key={hobby.label}
                          className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-border bg-card p-4 text-center transition-colors hover:border-primary/40 hover:bg-muted/40"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {hobby.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </SectionContainer>
      </div>
    </div>
  );
}
