import PortfolioPage from "@/components/PortfolioPage";
import experienceData from "@/data/experience.json";

const defaultCompanies = ["CitiGroup", "Amazon Web Services", "Virtusa"];

const filteredJobs = experienceData.jobs.filter((job) =>
  defaultCompanies.includes(job.company)
);

export default function ShrivarshaaPage() {
  return <PortfolioPage experienceJobs={filteredJobs} />;
}
