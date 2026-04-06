import PortfolioPage from "@/components/PortfolioPage";
import experienceData from "@/data/experience.json";
import type { Overview } from "@/components/sections/About";

const variantCompanies = [
  "University of Texas at Arlington",
  "Amazon Web Services",
  "Virtusa",
];

const shrivarshaaSOverview: Overview = {
  name: "Shrivarshaa Sakhamuri",
  title: "Graduate Teaching Assistant & Cloud Engineer",
  location: "Arlington, TX",
  description: [
    "Software Engineer focused on building scalable backend systems and cloud-native applications. I’ve worked with Java, Python, and AWS to design microservices that handle high-throughput workloads, improve system reliability, and reduce deployment time through CI/CD automation.", 

" I like building systems that don’t break under pressure. Whether it’s a backend service handling thousands of requests or a real-time app, I focus on making things fast, reliable, and clean.With hands-on experience in distributed systems, DevOps pipelines, and real-time applications, I bring both engineering depth and execution speed. ",
"My work has improved system performance by up to 40% and reduced latency in real-time systems to sub-100ms.I’m particularly interested in solving production-level problems at scale, where performance, reliability, and clean architecture actually matter."
  ],
};

const filteredJobs = experienceData.jobs.filter((job) =>
  variantCompanies.includes(job.company)
);

export default function ShrivarshaaSakhamuriPage() {
  return (
    <PortfolioPage
      experienceJobs={filteredJobs}
      aboutOverview={shrivarshaaSOverview}
      hideLinkedIn
    />
  );
}
