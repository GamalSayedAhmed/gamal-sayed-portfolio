"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";
import PipelineBackground from "./PipelineBackground";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const socials = [
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <PipelineBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-content flex-col px-5 sm:px-8"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-hairline px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-ice"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-ice opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-ice" />
          </span>
          Open to Data Engineering roles
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[13vw] leading-[0.95] font-medium tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 font-mono text-lg text-blue-ice sm:text-xl"
        >
          <span className="text-ink-faint">{"// "}</span>
          {personal.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {personal.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-blue-signal px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            View Projects
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-blue-signal/50 hover:text-blue-ice"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-full px-6 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex items-center gap-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-muted transition-all hover:-translate-y-0.5 hover:border-blue-signal/50 hover:text-blue-ice"
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink-faint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
