"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type OnlineCourse } from "@/data/education.d";

interface CourseCardProps {
  course: OnlineCourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div whileHover={{ y: -3 }} className="h-full cursor-pointer">
      <Card className="interactive-card h-full overflow-hidden">
        <div className="h-px w-full bg-[var(--border-raw)]"></div>
        <CardHeader className="pb-1">
          <div className="flex flex-col items-start">
            <CardTitle className="mb-1 text-base text-foreground">
              {course.name}
            </CardTitle>
            <CardDescription className="text-xs mb-2">
              {course.platform}
            </CardDescription>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1 font-mono">
                <Calendar className="h-3 w-3 text-primary" />
                <span>
                  {new Date(course.completionDate).toLocaleString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1 font-mono">
                <Clock className="h-3 w-3 text-primary" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
