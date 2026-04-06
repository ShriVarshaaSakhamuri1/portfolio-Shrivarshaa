import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

interface SocialLinksProps {
  hideLinkedIn?: boolean;
}

export function SocialLinks({ hideLinkedIn }: SocialLinksProps) {
  const links = [
    {
      id: "github",
      href: "https://github.com/ShriVarshaaSakhamuri1",
      icon: (
        <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      ),
      hoverColor: "group-hover:border-primary group-hover:bg-primary/10",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/shrivarshaa-sakhamuri/",
      icon: (
        <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 transition-colors duration-300" />
      ),
      hoverColor: "group-hover:border-blue-500 group-hover:bg-blue-500/10",
    },
  ];

  const visibleLinks = hideLinkedIn
    ? links.filter((link) => link.id !== "linkedin")
    : links;

  return (
    <div className="flex justify-center gap-6 mb-20">
      {visibleLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`w-10 h-10 rounded-full border border-muted flex items-center justify-center transition-all duration-300 ${link.hoverColor}`}
          >
            {link.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
