"use client";

import type { PipelineStage } from "@/types";

interface ArchitectureDiagramProps {
  stages: PipelineStage[];
}

export default function ArchitectureDiagram({
  stages,
}: ArchitectureDiagramProps) {
  const width = 560;
  const height = 150;
  const padding = 60;
  const step =
    stages.length > 1 ? (width - padding * 2) / (stages.length - 1) : 0;
  const y = height / 2;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[480px] h-[110px] sm:h-[130px]"
        role="img"
        aria-label={`Architecture flow: ${stages.map((s) => s.label).join(" to ")}`}
      >
        <line
          x1={padding}
          y1={y}
          x2={width - padding}
          y2={y}
          stroke="var(--color-hairline)"
          strokeWidth="1.5"
        />
        <line
          x1={padding}
          y1={y}
          x2={width - padding}
          y2={y}
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray="1.5 10"
          className="animate-flow-dash"
        />

        {stages.map((stage, i) => {
          const x = padding + step * i;
          return (
            <g key={stage.label}>
              <circle
                cx={x}
                cy={y}
                r="5"
                fill="var(--color-bg)"
                stroke="var(--color-accent-ice)"
                strokeWidth="2"
              />
              <rect
                x={x - 46}
                y={y - 38}
                width="92"
                height="22"
                rx="11"
                fill="var(--color-elevated)"
                stroke="var(--color-hairline)"
              />
              <text
                x={x}
                y={y - 23}
                textAnchor="middle"
                className="font-mono"
                fontSize="9"
                fill="var(--color-ink-muted)"
              >
                {stage.label.length > 16
                  ? `${stage.label.slice(0, 15)}…`
                  : stage.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
