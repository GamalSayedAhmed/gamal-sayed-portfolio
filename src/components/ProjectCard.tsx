"use client";

import { motion } from "framer-motion";
import { Database, ExternalLink, Github, Network, Workflow } from "lucide-react";
import type { Project } from "@/types";
import ArchitectureDiagram from "./ArchitectureDiagram";

const coverIcons = [Database, Workflow, Network];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const accentByIndex = [
  "from-blue-deep/40 via-transparent to-transparent",
  "from-blue-signal/25 via-transparent to-transparent",
  "from-blue-ice/20 via-transparent to-transparent",
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-hairline bg-surface/60"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          accentByIndex[index % accentByIndex.length]
        } opacity-60`}
        aria-hidden="true"
      />

      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-hairline bg-elevated/50 sm:h-48">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, var(--color-accent) 0%, transparent 45%), radial-gradient(circle at 80% 70%, var(--color-accent-ice) 0%, transparent 45%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--color-hairline) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        {(() => {
          const Icon = coverIcons[index % coverIcons.length];
          return (
            <Icon
              className="relative h-12 w-12 text-blue-ice/70 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.25}
            />
          );
        })()}
      </div>

      <div className="relative z-10 flex flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-blue-ice">
              Project {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium text-ink sm:text-[1.7rem]">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-hairline bg-elevated/60 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              Problem
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              {project.problem}
            </p>
          </div>
          <div className="rounded-xl border border-hairline bg-elevated/60 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              Impact
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              {project.impact}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
            Architecture
          </p>
          <div className="rounded-xl border border-hairline bg-void/40 p-2 sm:p-3">
            <ArchitectureDiagram stages={project.pipeline} />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-hairline px-3 py-1 font-mono text-[11px] text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-blue-signal/50 hover:text-blue-ice"
          >
            <Github className="h-3.5 w-3.5" strokeWidth={1.75} />
            View Code
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-signal px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-[1.03]"
            >
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
