import type { Certification, ExperienceEntry, Project, Skill } from "@/types";

export const personal = {
  name: "Gamal Sayed",
  title: "Data Engineer",
  tagline: "Building scalable data pipelines and cloud-native data solutions.",
  location: "Cairo, Egypt",
  email: "gamal.sayed@example.com",
  github: "https://github.com/gamalsayed",
  linkedin: "https://linkedin.com/in/gamalsayed",
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary:
    "I design and operate data platforms that turn raw, high-volume events into trustworthy, query-ready tables. My work sits at the intersection of distributed systems and analytics: batch and streaming pipelines, warehouse modeling, and the orchestration layer that keeps it all reliable. I care most about data that people can actually trust — tested, documented, and observable in production.",
  education: [
    {
      degree: "B.Sc. in Computer Engineering",
      school: "Cairo University, Faculty of Engineering",
      period: "2017 — 2022",
      detail: "Graduation project: real-time anomaly detection on streaming sensor data.",
    },
  ],
  goals:
    "I'm working toward staff-level data engineering roles where I can shape platform architecture end-to-end — from ingestion contracts to the semantic layer analysts query — while mentoring engineers who are new to distributed data systems.",
};

export const skills: Skill[] = [
  { name: "Python", category: "Language", level: 95 },
  { name: "SQL", category: "Language", level: 96 },
  { name: "Apache Spark", category: "Processing", level: 90 },
  { name: "Apache Airflow", category: "Orchestration", level: 88 },
  { name: "Kafka", category: "Processing", level: 85 },
  { name: "Docker", category: "Tooling", level: 87 },
  { name: "Azure", category: "Platform", level: 84 },
  { name: "Databricks", category: "Platform", level: 89 },
  { name: "Snowflake", category: "Storage", level: 86 },
  { name: "Power BI", category: "Tooling", level: 80 },
  { name: "Git", category: "Tooling", level: 92 },
];

export const projects: Project[] = [
  {
    slug: "realtime-clickstream-lakehouse",
    title: "Real-Time Clickstream Lakehouse",
    description:
      "Streaming ingestion of e-commerce clickstream events into a Delta Lake lakehouse, with sub-minute freshness for product and marketing dashboards.",
    problem:
      "Marketing needed session-level attribution within minutes, not the next-day batch refresh the old warehouse job produced.",
    impact:
      "Cut data latency from ~18 hours to under 90 seconds and reduced compute cost 34% by replacing a nightly full-refresh job with incremental streaming merges.",
    tech: ["Kafka", "Spark Structured Streaming", "Databricks", "Delta Lake", "Azure", "Airflow"],
    githubUrl: "https://github.com/gamalsayed/realtime-clickstream-lakehouse",
    demoUrl: "https://gamalsayed.dev/demos/clickstream",
    pipeline: [
      { label: "Web/App Events" },
      { label: "Kafka" },
      { label: "Spark Streaming" },
      { label: "Delta Lake" },
      { label: "BI Dashboards" },
    ],
    featured: true,
  },
  {
    slug: "warehouse-modernization",
    title: "Snowflake Warehouse Modernization",
    description:
      "Migrated a legacy on-prem SQL Server warehouse to Snowflake with a modeled, tested dbt layer and automated CI for schema changes.",
    problem:
      "Finance reporting broke frequently after silent schema drift, and the on-prem warehouse couldn't scale with quarter-end load.",
    impact:
      "Eliminated 90% of schema-drift incidents with contract tests and cut quarter-end report runtime from 6 hours to 40 minutes.",
    tech: ["Snowflake", "SQL", "Airflow", "Docker", "Git", "Power BI"],
    githubUrl: "https://github.com/gamalsayed/warehouse-modernization",
    demoUrl: "https://gamalsayed.dev/demos/warehouse",
    pipeline: [
      { label: "SQL Server (Legacy)" },
      { label: "Extract Jobs" },
      { label: "Snowflake Staging" },
      { label: "dbt Models" },
      { label: "Power BI" },
    ],
    featured: true,
  },
  {
    slug: "orchestrated-ml-feature-pipeline",
    title: "Orchestrated ML Feature Pipeline",
    description:
      "Airflow-orchestrated feature pipeline that computes and backfills ML training features from raw transaction logs on a shared feature store.",
    problem:
      "Data scientists were hand-rolling feature SQL per experiment, causing training/serving skew and duplicated logic across teams.",
    impact:
      "Standardized 40+ features behind a versioned feature store, removing training/serving skew and saving roughly 10 engineering hours per week.",
    tech: ["Python", "Apache Airflow", "Spark", "Databricks", "Azure"],
    githubUrl: "https://github.com/gamalsayed/orchestrated-ml-feature-pipeline",
    pipeline: [
      { label: "Transaction Logs" },
      { label: "Airflow DAGs" },
      { label: "Spark Batch Jobs" },
      { label: "Feature Store" },
      { label: "ML Training" },
    ],
    featured: true,
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Data Engineer",
    company: "NileStack Technologies",
    location: "Cairo, Egypt · Hybrid",
    start: "2023",
    end: "Present",
    summary:
      "Own the ingestion and transformation layer for a multi-tenant analytics platform processing 200M+ events per day.",
    highlights: [
      "Built streaming pipelines with Kafka and Spark Structured Streaming, reducing data latency from hours to under two minutes.",
      "Designed the Airflow orchestration layer powering 60+ production DAGs with automated retries, alerting, and SLA tracking.",
      "Led the migration of the core warehouse to Snowflake, cutting monthly compute spend by 28%.",
    ],
  },
  {
    role: "Data Engineer I",
    company: "Delta Analytics Co.",
    location: "Cairo, Egypt",
    start: "2022",
    end: "2023",
    summary:
      "Built and maintained batch ETL pipelines feeding executive reporting and a customer-facing analytics product.",
    highlights: [
      "Developed Python/SQL ETL jobs on Azure Data Factory and Databricks, processing daily volumes exceeding 5M records.",
      "Introduced automated data-quality checks that caught 95% of upstream schema issues before they reached production tables.",
      "Partnered with the BI team to redesign Power BI semantic models, halving average dashboard load time.",
    ],
  },
  {
    role: "Data Engineering Intern",
    company: "Delta Analytics Co.",
    location: "Cairo, Egypt",
    start: "2021",
    end: "2022",
    summary:
      "Supported the data platform team while finishing my degree, focused on pipeline monitoring and documentation.",
    highlights: [
      "Built internal dashboards to monitor pipeline health and job runtimes across the Airflow environment.",
      "Wrote runbooks and onboarding docs that cut new-hire ramp-up time from three weeks to one.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    year: "2024",
    credentialUrl: "https://learn.microsoft.com/credentials/",
  },
  {
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    year: "2024",
    credentialUrl: "https://www.databricks.com/learn/certification",
  },
  {
    name: "SnowPro Core Certification",
    issuer: "Snowflake",
    year: "2023",
    credentialUrl: "https://www.snowflake.com/certifications/",
  },
  {
    name: "Apache Kafka for Data Engineers",
    issuer: "Confluent",
    year: "2023",
    credentialUrl: "https://www.confluent.io/certification/",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
