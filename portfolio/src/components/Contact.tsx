"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personal } from "@/lib/data";
import PipelineBackground from "./PipelineBackground";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { icon: Github, href: personal.github, label: "GitHub", value: "@gamalsayed" },
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn", value: "/in/gamalsayed" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email", value: personal.email },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <PipelineBackground />
      </div>

      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-signal/60" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-ice">
              06 · Contact
            </span>
            <span className="h-px w-8 bg-blue-signal/60" />
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            Let&rsquo;s ship something that scales.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            I&rsquo;m currently open to new Data Engineering roles and
            interesting freelance pipelines. The fastest way to reach me is
            email — I usually reply within a day.
          </p>

          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.03 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-signal px-7 py-3.5 text-sm font-medium text-white shadow-glow"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            Say hello
          </motion.a>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16">
          <div className="grid gap-3 sm:grid-cols-3">
            {socials.map(({ icon: Icon, href, label, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="glass group flex items-center gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline text-blue-ice">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                    {label}
                  </p>
                  <p className="truncate text-sm text-ink group-hover:text-blue-ice">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-faint">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
            {personal.location}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
