"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="04 · Path"
          title="Where I've built."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-signal via-hairline to-transparent sm:left-[13px]"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${job.start}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative pl-9 sm:pl-12"
              >
                <span className="absolute left-0 top-1.5 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 border-blue-signal bg-void sm:h-[27px] sm:w-[27px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-ice sm:h-2 sm:w-2" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                    {job.role}{" "}
                    <span className="text-ink-muted">— {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-ice">
                    {job.start} — {job.end}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-faint">{job.location}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                  {job.summary}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-signal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
