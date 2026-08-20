"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Certificate } from "@/data/education.d";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const certificateUrl = certificate.url?.trim();
  const hasCertificateUrl =
    Boolean(certificateUrl) && certificateUrl !== "#";

  return (
    <motion.div whileHover={{ y: -2 }} className="h-full">
      <Card className="interactive-card group flex h-full flex-col overflow-hidden">
        <div className="h-px w-full bg-[var(--border-raw)]"></div>
        <CardHeader className="pb-1">
          <div className="flex items-start justify-left">
            <div className="flex flex-col items-start">
              <CardTitle className="mb-1 text-base text-foreground">
                {certificate.name}
              </CardTitle>
              <CardDescription className="mb-2 text-xs">
                {certificate.issuer}
              </CardDescription>
              <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1 font-mono">
                  <Calendar className="h-3 w-3 text-primary" />
                  <span>
                    {new Date(certificate.date).toLocaleString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono">
                  <Clock className="h-3 w-3 text-primary" />
                  <span>{certificate.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <div className="mb-4 flex flex-wrap gap-1">
            {certificate.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="rounded-md border-[var(--border-raw)] bg-[var(--surface-elevated)] font-mono text-[10px] text-muted-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {hasCertificateUrl ? (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-colors group-hover:text-[var(--terminal-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ArrowRight className="h-3.5 w-3.5" />
              <span>View Certificate</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}
