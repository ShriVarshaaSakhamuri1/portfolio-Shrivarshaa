import PortfolioPage from "@/components/PortfolioPage";
import type { Overview } from "@/components/sections/About";
import type { SkillsData } from "@/data/skills.d";
import type { ExperienceJob } from "@/types/experience";

const softwareEngineerSubtitle =
  "Building reliable software systems across backend development, cloud infrastructure, automation, data workflows, and AI-assisted applications.";

const shrivarshaaSOverview: Overview = {
  name: "Shrivarshaa Sakhamuri",
  title: "Software Engineer",
  location: "United States \u00b7 Open to Relocation",
  description: [
    "I am a Software Engineer with experience across backend development, cloud infrastructure, automation, data workflows, and AI-assisted applications. I enjoy building practical systems that are reliable, maintainable, and useful beyond a classroom or demo environment.",
    "My experience includes developing evaluation workflows for LLM-powered conversational AI, analyzing large conversation-log datasets, building SQL and Power BI reporting dashboards, supporting numerical methods coursework with Python and MATLAB, and developing cloud-based applications using AWS services.",
    "I have worked with Python, Java, SQL, Pandas, Power BI, MATLAB, Pega, AWS, Linux, CloudFormation, API Gateway, Lambda, DynamoDB, and Git-based development workflows. I focus on clean implementation, debugging, performance improvement, documentation, and turning ambiguous requirements into structured technical solutions.",
    "I completed my Master's degree in Computer Science at the University of Texas at Arlington, where I focused on intelligent systems, cloud computing, machine learning, data analysis, and software engineering. I am currently focused on growing as a backend/full-stack software engineer who can also contribute to AI, cloud, and data-driven systems.",
  ],
};

const shrivarshaaSExperience: ExperienceJob[] = [
  {
    title: "Software Development Engineer Intern",
    company: "Amoha Tech-IT Solutions Inc.",
    location: "Remote",
    period: "October 2025 - May 2026",
    type: "internship",
    description:
      "LLM evaluation, conversation-log analysis, and reporting workflows for conversational AI quality improvement.",
    technologies: [
      "Python",
      "Pandas",
      "SQL",
      "Excel",
      "Power BI",
      "LLM Evaluation",
      "Conversational AI",
      "Data Cleaning",
      "Error Analysis",
    ],
    achievements: [
      "Developed and maintained an evaluation workflow for an LLM-powered conversational AI application, creating 120+ test scenarios and reviewing 1,200+ model responses for factual accuracy, relevance, reasoning, consistency, and instruction adherence.",
      "Used Python, Pandas, SQL, and Excel to collect, clean, transform, and analyze 15,000+ conversation-log and evaluation records for model testing, error analysis, and performance reporting.",
      "Conducted 8+ iterative evaluation cycles and identified recurring response-quality issues, including hallucinations, incomplete answers, irrelevant responses, inconsistent reasoning, and instruction-following failures.",
      "Documented findings and collaborated with the development team on prompt and configuration refinements to improve response quality.",
      "Built and maintained a Power BI dashboard connected to SQL-based evaluation data to monitor test results, response-quality scores, failure categories, and trends, reducing recurring manual reporting effort by approximately 1-2 hours per week.",
    ],
  },
  {
    title: "Graduate Teaching Assistant, Numerical Methods",
    company: "University of Texas at Arlington",
    location: "Arlington, TX, USA",
    period: "January 2025 - May 2025",
    type: "internship",
    description:
      "Teaching support, code review, and tutoring for numerical methods coursework using Python and MATLAB.",
    technologies: [
      "Python",
      "MATLAB",
      "Numerical Methods",
      "Algorithms",
      "Debugging",
      "Code Review",
      "Teaching Support",
    ],
    achievements: [
      "Mentored and guided 30+ students in applying numerical algorithms to engineering problems using Python and MATLAB.",
      "Reviewed and improved student code by reinforcing algorithm efficiency, debugging techniques, code readability, and structured problem-solving.",
      "Supported coursework involving numerical methods, matrix operations, iterative methods, and computational problem-solving.",
      "Delivered personalized tutoring and helped update course content while serving as a liaison between students and faculty.",
    ],
  },
  {
    title: "Intern",
    company: "Virtusa",
    location: "Remote",
    period: "January 2023 - April 2023",
    type: "internship",
    description:
      "Low-code application development and workflow automation for a service-booking platform.",
    technologies: [
      "Pega",
      "Java",
      "Low-Code Development",
      "Case Management",
      "Workflow Automation",
      "UI Logic",
      "Business Rules",
    ],
    achievements: [
      "Built a Pega low-code service-booking application for local services, enabling users to schedule appointments through guided workflows.",
      "Automated business workflows using declarative rules, data pages, case types, rule-based routing, and event-driven backend triggers.",
      "Improved booking flow efficiency through UI/UX enhancements, dynamic form logic, reusable sections, and conditional layouts.",
      "Optimized application performance by refactoring case-processing stages and eliminating redundant rule executions.",
    ],
  },
  {
    title: "AWS Cloud Virtual Internship",
    company: "Virtual Internship Program",
    location: "Remote",
    period: "November 2022 - January 2023",
    type: "internship",
    description:
      "Cloud architecture, serverless application development, observability, security, and automation practice on AWS.",
    technologies: [
      "AWS",
      "EC2",
      "Lambda",
      "ECS",
      "S3",
      "API Gateway",
      "IAM",
      "DynamoDB",
      "CloudFormation",
      "CloudWatch",
      "Linux",
      "Python",
      "Bash",
    ],
    achievements: [
      "Engineered high-availability cloud architecture patterns on Linux-based AWS environments using EC2, Lambda, ECS, S3, and related services.",
      "Created serverless applications using API Gateway, IAM, DynamoDB, and AWS CloudFormation templates.",
      "Configured CloudWatch alarms, logs, and filters to improve observability for distributed workloads.",
      "Applied security practices such as IAM access controls, server-side encryption, HTTPS, and proactive issue detection.",
      "Wrote Python and Bash scripts to automate build, deployment, and security-validation tasks.",
    ],
  },
];

const shrivarshaaSSkills: SkillsData = {
  sectionTitle: "Technical Skills",
  sectionDescription:
    "Software engineering skills across backend systems, cloud infrastructure, automation, data workflows, and AI-assisted applications.",
  categories: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        "Python",
        "Java",
        "SQL",
        "JavaScript",
        "TypeScript",
        "Scala",
        "Bash",
        "MATLAB",
      ],
    },
    {
      title: "Backend & Software Engineering",
      icon: "Wrench",
      skills: [
        "REST APIs",
        "Microservices",
        "Java",
        "Spring Boot",
        "FastAPI",
        "Pega",
        "Case Management",
        "Workflow Automation",
        "API Integration",
        "Debugging",
        "Code Review",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        "AWS",
        "EC2",
        "Lambda",
        "ECS",
        "S3",
        "IAM",
        "API Gateway",
        "DynamoDB",
        "CloudFormation",
        "CloudWatch",
        "Linux",
        "Docker",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    {
      title: "Data & Analytics",
      icon: "Activity",
      skills: [
        "SQL",
        "Pandas",
        "Excel",
        "Power BI",
        "Data Cleaning",
        "Data Transformation",
        "Reporting Dashboards",
        "Evaluation Metrics",
        "Error Analysis",
      ],
    },
    {
      title: "AI & LLM Evaluation",
      icon: "Bot",
      skills: [
        "Conversational AI",
        "LLM Evaluation",
        "Prompt Testing",
        "Response Quality Review",
        "Hallucination Analysis",
        "Instruction Adherence",
        "NLP Basics",
        "Test Scenario Design",
      ],
    },
    {
      title: "Databases",
      icon: "Database",
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB", "Redis"],
    },
    {
      title: "Tools",
      icon: "Wrench",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
        "Jira",
        "Power BI",
        "Excel",
      ],
    },
    {
      title: "Education & Academic Strengths",
      icon: "FileText",
      skills: [
        "Numerical Methods",
        "Algorithms",
        "Machine Learning",
        "Cloud Computing",
        "Data Mining",
        "Web Data Management",
        "Software Engineering",
      ],
    },
  ],
};

export default function ShrivarshaaSakhamuriPage() {
  return (
    <PortfolioPage
      heroRoleTexts={["Software Engineer"]}
      heroSubtitle=""
      aboutOverview={shrivarshaaSOverview}
      aboutSubtitle=""
      experienceJobs={shrivarshaaSExperience}
      experienceDescription=""
      projectsDescription="A showcase of software engineering, cloud, data, and AI-assisted projects built across my computer science work."
      skillsData={shrivarshaaSSkills}
      hideLinkedIn
    />
  );
}
