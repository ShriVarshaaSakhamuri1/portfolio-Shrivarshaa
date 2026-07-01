import PortfolioPage from "@/components/PortfolioPage";
import experienceData from "@/data/experience.json";
import type { Overview } from "@/components/sections/About";

const shrivarshaaSOverview: Overview = {
  name: "Shrivarshaa Sakhamuri",
  title: "AI/ML Engineer",
  location: "Dallas, TX",
  description: [
    "I build production-oriented machine learning and generative AI systems that turn complex data into usable, measurable solutions. My work spans predictive modeling, deep learning, natural language processing, Retrieval-Augmented Generation, agentic workflows, and scalable AI services.",
    "I have worked with Python, SQL, PyTorch, TensorFlow, Scikit-learn, XGBoost, LangChain, LangGraph, Hugging Face, FastAPI, Spark, and cloud AI platforms. I am particularly interested in building systems that combine strong model performance with reliable data pipelines, evaluation, monitoring, and deployment.",
    "My experience includes fraud and anomaly detection, semantic search, document intelligence, model-serving APIs, distributed machine learning pipelines, vector databases, and multi-agent workflows. I focus on more than model development-I also consider latency, observability, retrieval quality, hallucination control, data drift, scalability, and maintainability.",
    "I completed my Master's degree in Computer Science at the University of Texas at Arlington, where I focused on artificial intelligence, machine learning, cloud computing, and distributed systems. I enjoy solving ambiguous engineering problems and converting experimental AI workflows into dependable applications.",
  ],
};

export default function ShrivarshaaSakhamuriPage() {
  return (
    <PortfolioPage
      experienceJobs={experienceData.jobs}
      aboutOverview={shrivarshaaSOverview}
      hideLinkedIn
    />
  );
}
