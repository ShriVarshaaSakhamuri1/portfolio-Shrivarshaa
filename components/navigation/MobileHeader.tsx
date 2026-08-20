"use client";

import Link from "next/link";
import { Github, Linkedin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SECTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileHeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  showLinkedIn?: boolean;
}

export function MobileHeader({
  activeSection,
  scrollToSection,
  showLinkedIn = true,
}: MobileHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-14 items-center border-b border-[var(--border-raw)] bg-background/95 px-4 backdrop-blur lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="mr-3 border-[var(--border-raw)] bg-[var(--surface)] text-primary hover:bg-primary/10"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-72 border-[var(--border-raw)] bg-[var(--surface)] p-0"
        >
          <div className="flex h-16 items-center border-b border-[var(--border-raw)] px-4">
            <Link
              href="#home"
              className="flex items-center gap-3 font-semibold"
              onClick={() => scrollToSection("home")}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/20 bg-primary/10 font-mono text-sm font-bold text-primary">
                SS
              </div>
              <div>
                <span className="block text-sm">Shrivarshaa</span>
                <span className="block font-mono text-[11px] font-normal text-muted-foreground">
                  portfolio.sh
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
          <div className="flex items-center justify-between border-t border-[var(--border-raw)] p-4">
            <div className="flex gap-4">
              <Link
                href="https://github.com/ShriVarshaaSakhamuri1"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github size={20} />
              </Link>
              {showLinkedIn && (
                <Link
                href="https://www.linkedin.com/in/shrivarshaa-sakhamuri/"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin size={20} />
                </Link>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex flex-1 justify-center">
        <div className="flex items-center gap-2 font-mono text-sm text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
          SS
          </div>
          <span>Shrivarshaa</span>
        </div>
      </div>
    </header>
  );
}
