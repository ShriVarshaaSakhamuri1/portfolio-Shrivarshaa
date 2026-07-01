import type React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <main
      className={cn(
        "relative mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </main>
  );
}
