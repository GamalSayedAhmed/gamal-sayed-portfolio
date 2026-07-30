import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      <div
        className={`flex items-center gap-3 mb-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-blue-signal/60" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-ice">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
