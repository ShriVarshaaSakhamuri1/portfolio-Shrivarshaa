"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/constants";

interface DesktopSidebarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  showLinkedIn?: boolean;
}

export function DesktopSidebar({
  activeSection,
  scrollToSection,
  showLinkedIn = true,
}: DesktopSidebarProps) {
  return (
    <aside className="fixed inset-y-0 z-30 hidden w-[220px] flex-col border-r border-[var(--border-raw)] bg-[var(--surface)] lg:flex">
      <div className="flex h-20 items-center border-b border-[var(--border-raw)] px-4">
        <Link
          href="#home"
          className="group flex min-w-0 items-center gap-3 font-semibold text-foreground"
          onClick={() => scrollToSection("home")}
        >
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 font-mono text-sm font-bold text-primary">
            SS
          </div>
          <div className="min-w-0">
            <span className="block truncate text-sm">Shrivarshaa</span>
            <span className="block truncate font-mono text-[11px] font-normal text-muted-foreground">
              ml_engineer
            </span>
          </div>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-5">
        {SECTIONS.map((section) => {
          const targetId = section.targetId ?? section.id;
          const isActive =
            activeSection === section.id ||
            (section.id === "personal" && activeSection === "about");

          return (
          <Link
            key={section.id}
            href={`#${targetId}`}
            className={cn(
              "flex items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors",
              isActive
                ? "border-primary/10 bg-primary/10 text-primary"
                : "border-transparent text-muted-foreground hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] hover:text-foreground"
            )}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(targetId);
            }}
          >
            {section.icon}
            <span>{section.label}</span>
          </Link>
          );
        })}
      </nav>
      <div className="border-t border-[var(--border-raw)] p-4">
        <p className="mb-3 font-mono text-[11px] text-muted-foreground">
          // connect
        </p>
        <div className="flex items-center">
          <div className="flex gap-2">
          <Link
            href="https://github.com/ShriVarshaaSakhamuri1"
            aria-label="GitHub"
            className="rounded-md border border-[var(--border-raw)] p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <Github size={16} />
          </Link>
          {showLinkedIn && (
            <Link
              href="https://www.linkedin.com/in/shrivarshaa-sakhamuri/"
              aria-label="LinkedIn"
              className="rounded-md border border-[var(--border-raw)] p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              <Linkedin size={16} />
            </Link>
          )}
          <button
            type="button"
            aria-label="Email"
            onClick={() => scrollToSection("contact")}
            className="rounded-md border border-[var(--border-raw)] p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <Mail size={16} />
          </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
