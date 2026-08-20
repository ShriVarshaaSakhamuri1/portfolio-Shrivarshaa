"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { DesktopSidebar } from "@/components/navigation/DesktopSidebar";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { Hero } from "@/components/sections/Hero";
import AboutSection, { Overview } from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import EducationSection from "@/components/sections/Education";
import SkillsSection from "@/components/sections/Skills";
import { ContactSection } from "@/components/sections/Contact";
import type { ExperienceJob } from "@/types/experience";
import type { SkillsData } from "@/data/skills.d";

interface PortfolioPageProps {
  experienceJobs?: ExperienceJob[];
  experienceDescription?: string;
  aboutOverview?: Overview;
  aboutSubtitle?: string;
  heroRoleTexts?: string[];
  heroSubtitle?: string;
  projectsDescription?: string;
  skillsData?: SkillsData;
  hideLinkedIn?: boolean;
}

export default function PortfolioPage({
  experienceJobs,
  experienceDescription,
  aboutOverview,
  aboutSubtitle,
  heroRoleTexts,
  heroSubtitle,
  projectsDescription,
  skillsData,
  hideLinkedIn = false,
}: PortfolioPageProps) {
  const [activeSection, setActiveSection] = useState("home");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "-10% 0px -10% 0px",
  };

  const [homeRef, homeInView] = useInView(observerOptions);
  const [aboutRef, aboutInView] = useInView(observerOptions);
  const [experienceRef, experienceInView] = useInView(observerOptions);
  const [projectsRef, projectsInView] = useInView(observerOptions);
  const [educationRef, educationInView] = useInView(observerOptions);
  const [skillsRef, skillsInView] = useInView(observerOptions);
  const [contactRef, contactInView] = useInView(observerOptions);

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (experienceInView) setActiveSection("experience");
    else if (projectsInView) setActiveSection("projects");
    else if (educationInView) setActiveSection("education");
    else if (skillsInView) setActiveSection("skills");
    else if (contactInView) setActiveSection("contact");
  }, [
    homeInView,
    aboutInView,
    experienceInView,
    projectsInView,
    educationInView,
    skillsInView,
    contactInView,
  ]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DesktopSidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        showLinkedIn={!hideLinkedIn}
      />
      <MobileHeader
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        showLinkedIn={!hideLinkedIn}
      />

      <main className="flex-1 lg:ml-[220px]">
        <section ref={homeRef} id="home" className="scroll-mt-16">
          <Hero
            scrollToSection={scrollToSection}
            hideLinkedIn={hideLinkedIn}
            roleTexts={heroRoleTexts}
            subtitle={heroSubtitle}
          />
        </section>
        <section ref={aboutRef} id="about" className="scroll-mt-16">
          <AboutSection overview={aboutOverview} subtitle={aboutSubtitle} />
        </section>
        <section ref={experienceRef} id="experience" className="scroll-mt-16">
          <ExperienceSection
            jobs={experienceJobs}
            description={experienceDescription}
          />
        </section>
        <section ref={projectsRef} id="projects" className="scroll-mt-16">
          <ProjectsSection description={projectsDescription} />
        </section>
        <section ref={skillsRef} id="skills" className="scroll-mt-16">
          <SkillsSection data={skillsData} />
        </section>
        <section ref={educationRef} id="education" className="scroll-mt-16">
          <EducationSection />
        </section>
        <section ref={contactRef} id="contact" className="scroll-mt-16">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
