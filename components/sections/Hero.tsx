import { ArrowRight, ChevronDown, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/ui/typing-effect";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  hideLinkedIn?: boolean;
  roleTexts?: string[];
  subtitle?: string;
}

export function Hero({
  scrollToSection,
  hideLinkedIn: _hideLinkedIn,
  roleTexts,
  subtitle = "Building production-ready machine learning, generative AI, RAG, and agentic systems.",
}: HeroProps) {
  const displaySubtitle =
    subtitle ||
    "Building production-ready machine learning, GenAI, RAG, and data systems from experimentation to deployment.";

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1360px] items-center px-5 pb-16 pt-24 sm:px-8 lg:px-10 lg:pt-16">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="max-w-3xl text-left">
          <p className="terminal-label mb-5">&gt; Hi, my name is</p>
          <h1 className="mb-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Shrivarshaa Sakhamuri.
          </h1>
          <TypingEffect
            textArray={
              roleTexts ?? [
                "ML Engineer",
                "Data Scientist",
                "AI Engineer",
              ]
            }
            staticText="ML Engineer / Data Scientist"
            className="mb-6 font-mono text-lg text-primary sm:text-xl"
          />
          <p className="mb-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {displaySubtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              className="group rounded-md border border-primary/20 bg-primary/10 px-5 text-primary hover:bg-primary/15"
              onClick={() => scrollToSection("projects")}
            >
              <Code className="mr-2 h-4 w-4" />
              <span>View my work</span>
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="rounded-md border-[var(--border-raw)] bg-[var(--surface)] px-5 text-muted-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>

        <div className="terminal-panel overflow-hidden">
          <div className="flex items-center border-b border-[var(--border-raw)] bg-[var(--surface-elevated)] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--red-accent)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--yellow-accent)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>
            <div className="ml-auto font-mono text-xs text-muted-foreground">
              system_info.sh
            </div>
          </div>
          <div className="space-y-4 p-5 font-mono text-sm">
            {[
              ["name", "Shrivarshaa Sakhamuri"],
              ["role", "ML Engineer / Data Scientist"],
              ["focus", "ML - GenAI - Data"],
              ["availability", "Open to Opportunities"],
              ["relocation", "Open to Relocate"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[112px_1fr] gap-3 text-sm"
              >
                <span className="text-muted-foreground">{label}:</span>
                <span className="text-foreground">{value}</span>
              </div>
            ))}
            <div className="border-t border-[var(--border-raw)] pt-5 text-primary">
              &gt; ready to build something impactful
              <span className="animate-blink">_</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary"
        >
          <ChevronDown className="h-5 w-5" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </div>
  );
}
