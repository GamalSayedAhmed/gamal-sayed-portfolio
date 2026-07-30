import { GraduationCap, Target } from "lucide-react";
import { about } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 · About"
          title="Data engineering, end to end."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-ink-muted sm:text-xl">
              {about.summary}
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <div className="glass rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-2 text-blue-ice">
                  <GraduationCap className="h-4 w-4" strokeWidth={1.75} />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    Education
                  </span>
                </div>
                {about.education.map((edu) => (
                  <div key={edu.degree}>
                    <p className="font-display text-lg text-ink">
                      {edu.degree}
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">{edu.school}</p>
                    <p className="mt-1 font-mono text-xs text-ink-faint">
                      {edu.period}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-2 text-blue-ice">
                  <Target className="h-4 w-4" strokeWidth={1.75} />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    Career Goals
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {about.goals}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
