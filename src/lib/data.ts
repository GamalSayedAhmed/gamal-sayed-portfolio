import type { Certification, ExperienceEntry, Project, Skill } from "@/types";

export const personal = {
  name: "Gamal Sayed",
  title: "Data Engineer",
  tagline: "Building reliable ETL pipelines and cloud-based data solutions.",
  location: "Cairo, Egypt",
  email: "gamal.sayedahmedmuhammed@gmail.com",
  phone: "+20 1144651667",
  github: "https://github.com/gamalsayed", // TODO: confirm your actual GitHub username
  linkedin: "https://www.linkedin.com/in/1gamal-sayed/",
  portfolio: "https://gamal-sayed-portfolio.vercel.app/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary:
    "Data Engineer with hands-on experience designing ETL pipelines, data warehouses, and cloud-based data solutions using SQL Server, SSIS, Azure, and Power BI. I build scalable data workflows, optimize databases, and transform raw data into business insights. My foundation in SQL, Python, cloud technologies, and machine learning comes from DEPI training, academic projects, and real-world experience. I care about building reliable, efficient, and data-driven solutions.",
  education: [
    {
      degree: "B.Sc. in Computer Science",
      school: "Helwan University, Faculty of Computers and AI",
      period: "2021 — 2025",
      detail: "GPA: 3.39",
    },
  ],
  goals:
    "I'm looking to grow into Data Engineer and Data Analyst roles where I can design and operate end-to-end data platforms — from ETL pipelines and warehouse modeling to the dashboards decision-makers rely on — while continuing to build on my DEPI and Microsoft data engineering foundation.",
};

export const skills: Skill[] = [
  { name: "SQL", category: "Language", level: 90 },
  { name: "Python", category: "Language", level: 85 },
  { name: "C#", category: "Language", level: 75 },
  { name: "Java", category: "Language", level: 70 },
  { name: "SQL Server", category: "Storage", level: 88 },
  { name: "PostgreSQL", category: "Storage", level: 80 },
  { name: "SSIS", category: "Processing", level: 85 },
  { name: "Azure", category: "Platform", level: 82 },
  { name: "AWS", category: "Platform", level: 65 },
  { name: "Power BI", category: "Tooling", level: 88 },
  { name: "Pentaho", category: "Tooling", level: 75 },
  { name: "Machine Learning", category: "AI", level: 78 },
  { name: "NLP", category: "AI", level: 70 },
  { name: "Computer Vision", category: "AI", level: 70 },
  { name: "Figma", category: "Tooling", level: 65 },
  { name: "Visual Studio", category: "Tooling", level: 85 },
];

export const projects: Project[] = [
  {
    slug: "traffic-monitoring-analytics",
    title: "Traffic Monitoring Analytics",
    description:
      "An ETL and analytics pipeline for traffic data, combining Azure and SSIS ingestion with a forecasting model and live Power BI dashboards.",
    problem:
      "Traffic data needed to be consolidated from raw sources and turned into a forecasting model and dashboards that stakeholders could actually use for decisions.",
    impact:
      "Built ETL pipelines and an ML forecasting model achieving 95% accuracy, with real-time Power BI dashboards delivering actionable insights.",
    tech: ["Azure", "SSIS", "Power BI", "Python", "Machine Learning"],
    githubUrl: "https://github.com/gamalsayed/traffic-monitoring-analytics",
    pipeline: [
      { label: "Raw Traffic Data" },
      { label: "SSIS / Azure ETL" },
      { label: "ML Forecasting Model" },
      { label: "Power BI Dashboards" },
    ],
    featured: true,
  },
  {
    slug: "careview",
    title: "CareView — AI Healthcare Platform",
    description:
      "A full-featured healthcare platform combining an NLP chatbot, pose-estimation for patient monitoring, and scheduling, payments, and inventory modules.",
    problem:
      "Healthcare providers needed a single platform that combined patient-facing AI tools with the operational modules (scheduling, payments, inventory) to run a clinic.",
    impact:
      "Delivered an NLP chatbot and computer-vision pose-estimation system alongside a full set of operational modules for a working healthcare platform.",
    tech: ["Python", "NLP", "Computer Vision"],
    githubUrl: "https://github.com/gamalsayed/careview",
    pipeline: [
      { label: "Patient Interaction" },
      { label: "NLP Chatbot" },
      { label: "Pose Estimation (CV)" },
      { label: "Scheduling / Payments / Inventory" },
    ],
    featured: true,
  },
  {
    slug: "ai-iot-anomaly-detection",
    title: "AI/IoT Anomaly Detection System",
    description:
      "An end-to-end anomaly detection pipeline built during an internship at NTI, processing sensor data streams in real time.",
    problem:
      "Sensor data streams across multiple sensor types needed real-time monitoring to flag irregular patterns as they happened, not after the fact.",
    impact:
      "Delivered a fully functional AI/IoT solution within a one-month timeline, tuning models across multiple sensor types and earning a final evaluation score of 90/100.",
    tech: ["Python", "Machine Learning", "IoT"],
    githubUrl: "https://github.com/gamalsayed/ai-iot-anomaly-detection",
    pipeline: [
      { label: "Sensor Data Streams" },
      { label: "Feature Engineering" },
      { label: "ML Model" },
      { label: "Real-Time Anomaly Alerts" },
    ],
    featured: false,
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Instructor — DEMI & DECI Programs",
    company: "iSchool",
    location: "Cairo, Egypt",
    start: "Jul. 2026",
    end: "Present",
    summary:
      "Deliver technology and coding curriculum across grade levels for the Digital Egypt Marvels Initiative (DEMI) and Digital Egypt Cubs Initiative (DECI).",
    highlights: [
      "Facilitate hands-on sessions covering Python/mBlock, VEXcode VR robotics, MIT App Inventor, cybersecurity fundamentals, and AI/ML concepts, adapting content for different age groups.",
      "Design fully scripted facilitation materials and classroom exercises to ensure consistent, high-quality delivery across multiple student cohorts.",
    ],
  },
  {
    role: "Microsoft Data Engineer Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Cairo, Egypt",
    start: "Apr. 2024",
    end: "Oct. 2024",
    summary:
      "Trained on the Microsoft data engineering track, building ETL pipelines, warehouses, and BI dashboards.",
    highlights: [
      "Built ETL pipelines using SQL Server, SSIS, and Azure, consolidating multiple reporting workflows into a single automated pipeline and reducing manual data processing time.",
      "Designed star-schema data warehouses serving 3+ business domains, enabling faster query performance and consistent metrics across analytical dashboards.",
      "Developed Power BI dashboards and automated cloud workflows, cutting reporting turnaround from days to near real-time for stakeholder decision-making.",
    ],
  },
  {
    role: "AI Trainee",
    company: "National Telecommunication Institute (NTI)",
    location: "Cairo, Egypt",
    start: "Jul. 2023",
    end: "Aug. 2023",
    summary:
      "AI & IoT internship focused on real-time anomaly detection over streaming sensor data.",
    highlights: [
      "Completed an AI & IoT internship developing end-to-end anomaly detection pipelines that processed sensor data streams and flagged irregular patterns in real time.",
      "Implemented and tuned machine learning models for IoT anomaly detection across multiple sensor types, iterating on feature engineering to improve prediction reliability.",
      "Delivered a fully functional AI/IoT solution within a one-month timeline, earning a final evaluation score of 90/100 and recognition for technical depth and code quality.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Data Engineer Track",
    issuer: "DataCamp",
    year: "2025",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    year: "2023",
  },
  {
    name: "Excellence Award, Best Team Leader, Soft Skills",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    year: "2024",
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
