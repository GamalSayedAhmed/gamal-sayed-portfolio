import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-hairline py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {personal.name}. Built with Next.js &
          Tailwind.
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-blue-ice"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
