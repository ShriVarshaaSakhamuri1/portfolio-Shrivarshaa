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
        "relative mx-auto min-h-screen w-full max-w-[1360px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24",
        className
      )}
    >
      {children}
    </main>
  );
}
