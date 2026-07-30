import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 · Work"
          title="Featured projects."
          description="A selection of pipelines and platforms I've designed and shipped — each with the problem it solved, the measurable impact, and how data actually moves through it."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <div key={project.slug} className={i === 0 ? "lg:col-span-2" : ""}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
