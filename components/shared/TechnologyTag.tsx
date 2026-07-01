import type React from "react";
import { cn } from "@/lib/utils";

interface TechnologyTagProps {
  children: React.ReactNode;
  className?: string;
}

export function TechnologyTag({ children, className }: TechnologyTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium leading-none text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </span>
  );
}
