import PortfolioPage from "@/components/PortfolioPage";
import experienceData from "@/data/experience.json";

export default function ShrivarshaaPage() {
  return <PortfolioPage experienceJobs={experienceData.jobs} />;
}
