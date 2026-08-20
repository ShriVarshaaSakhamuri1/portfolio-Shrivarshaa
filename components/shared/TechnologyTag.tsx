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
        "inline-flex items-center rounded-md border border-[var(--border-raw)] bg-[var(--surface-elevated)] px-2.5 py-1 font-mono text-[11px] font-medium leading-none text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </span>
  );
}
