"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="05 · Proof" title="Certifications." />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="glass group flex items-start gap-4 rounded-2xl p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline text-blue-ice">
                <Award className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="font-display text-base font-medium leading-snug text-ink">
                  {cert.name}
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
              <ExternalLink
                className="mt-1 h-4 w-4 shrink-0 text-ink-faint transition-colors group-hover:text-blue-ice"
                strokeWidth={1.5}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
