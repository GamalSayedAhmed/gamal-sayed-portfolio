"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 · Stack"
          title="Tools I reach for daily."
          description="A working stack spanning ingestion, distributed processing, orchestration, and the cloud platforms that run it all in production."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-medium text-ink sm:text-base">
                  {skill.name}
                </span>
                <span className="font-mono text-[10px] text-ink-faint">
                  {skill.category}
                </span>
              </div>

              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-elevated">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (i % 5) * 0.06, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-deep to-blue-ice"
                />
              </div>

              <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-blue-signal/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
