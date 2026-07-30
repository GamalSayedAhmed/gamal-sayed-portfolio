export interface Skill {
  name: string;
  category: "Language" | "Processing" | "Orchestration" | "Platform" | "Storage" | "Tooling";
  level: number; // 0-100, used for the fill/glow intensity
}

export interface PipelineStage {
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  problem: string;
  impact: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  pipeline: PipelineStage[];
  featured?: boolean;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}
