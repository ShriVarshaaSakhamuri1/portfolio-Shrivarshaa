import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { LoadingProvider } from "@/components/providers/LoadingProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shrivarshaa Sakhamuri - AI/ML Engineer",
  description:
    "Portfolio website of Shrivarshaa Sakhamuri, an AI/ML Engineer building production-ready machine learning, generative AI, RAG, and agentic systems.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.className,
          "min-h-screen bg-background antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LoadingProvider>{children}</LoadingProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}


