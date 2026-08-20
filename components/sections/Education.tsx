"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Code2,
  Database,
  Lightbulb,
  BadgeIcon as CertificateIcon,
  Clock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  EducationTimelineItem,
  CertificateCard,
  CourseCard,
  Particles,
} from "@/components/education";
import educationData from "@/data/education.json";

// Icon mapping for different education categories
const categoryIcons = {
  foundations: <BookOpen className="h-5 w-5 text-primary" />,
  algorithms: <Code2 className="h-5 w-5 text-secondary" />,
  ai_ml: <Brain className="h-5 w-5 text-green-500" />,
  systems: <Lightbulb className="h-5 w-5 text-blue-500" />,
  data: <Database className="h-5 w-5 text-yellow-500" />,
};

/**
 * EducationPage Component
 *
 * Displays the education journey with tabs for formal education, certifications, and courses.
 * Includes animations, expandable content, and a progress bar.
 */
export default function EducationPage() {
  // State for expanded education items
  const [expandedEducation, setExpandedEducation] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("formal"); // State for active tab
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container
  const { scrollYProgress } = useScroll(); // Scroll progress for animations
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 }); // Spring animation for progress bar

  // Toggle expanded state for education
  const toggleEducationExpand = (id: number) => {
    setExpandedEducation(expandedEducation === id ? null : id);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex-1 relative w-full">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
          style={{ scaleX }}
        />

        <main className="relative mx-auto min-h-screen w-full max-w-[1360px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            <p className="terminal-label mb-3">&gt; education</p>
            <h1 className="mb-3 text-2xl font-semibold text-foreground md:text-3xl">
              Education Journey
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              {educationData.sectionDescription}
            </p>
          </motion.div>

          {/* Education Tabs */}
          <Tabs
            defaultValue="formal"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-6"
          >
            <div className="mb-6 flex justify-start">
              <TabsList className="grid w-full max-w-sm grid-cols-3 border border-[var(--border-raw)] bg-[var(--surface)]">
                <TabsTrigger value="formal">Formal</TabsTrigger>
                <TabsTrigger value="certifications">Certificates</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
              </TabsList>
            </div>

            {/* Formal Education */}
            <TabsContent value="formal" className="space-y-0">
              <div className="relative" ref={containerRef}>
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--border-raw)] md:left-1/2 md:-translate-x-1/2"></div>

                {/* Education Items */}
                {educationData.formalEducation.map((education, index) => (
                  <EducationTimelineItem
                    key={education.id}
                    education={education}
                    index={index}
                    isExpanded={expandedEducation === education.id}
                    onToggle={() => toggleEducationExpand(education.id)}
                    isEven={index % 2 === 0}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Certifications */}
            <TabsContent value="certifications">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full"
              >
                {educationData.certifications.map((certificate) => (
                  <CertificateCard
                    key={certificate.id}
                    certificate={certificate}
                  />
                ))}
              </motion.div>
            </TabsContent>

            {/* Online Courses */}
            <TabsContent value="courses">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
                  {educationData.onlineCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
