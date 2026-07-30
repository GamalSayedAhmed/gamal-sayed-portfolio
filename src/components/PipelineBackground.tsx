"use client";

const LANES = [
  { y: 90, delay: "0s", duration: "5.5s" },
  { y: 180, delay: "-1.2s", duration: "6.2s" },
  { y: 270, delay: "-2.4s", duration: "4.8s" },
  { y: 360, delay: "-0.6s", duration: "6.8s" },
];

const NODE_X = [60, 260, 460, 660, 860, 1060];

/**
 * Ambient, decorative ETL flow diagram used behind the hero.
 * Represents the shape of a real pipeline: source -> ingest -> process -> store -> serve,
 * rendered as multiple parallel lanes with data "packets" travelling left to right.
 */
export default function PipelineBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1120 440"
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-[0.35] sm:h-[120%] sm:w-[120%] sm:opacity-40"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="laneGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="15%" stopColor="var(--color-accent)" stopOpacity="0.55" />
            <stop offset="85%" stopColor="var(--color-accent-ice)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-accent-ice)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {LANES.map((lane, i) => (
          <g key={i}>
            <path
              d={`M -40 ${lane.y} C 200 ${lane.y - 30}, 400 ${lane.y + 30}, 600 ${lane.y} S 1000 ${lane.y - 20}, 1160 ${lane.y}`}
              fill="none"
              stroke="url(#laneGradient)"
              strokeWidth="1.5"
            />
            <path
              d={`M -40 ${lane.y} C 200 ${lane.y - 30}, 400 ${lane.y + 30}, 600 ${lane.y} S 1000 ${lane.y - 20}, 1160 ${lane.y}`}
              fill="none"
              stroke="var(--color-accent-ice)"
              strokeWidth="2"
              strokeDasharray="2 22"
              className="animate-flow-dash"
              style={{
                animationDuration: lane.duration,
                animationDelay: lane.delay,
              }}
            />
          </g>
        ))}

        {NODE_X.map((x, i) =>
          LANES.map((lane, j) => {
            if ((i + j) % 3 !== 0) return null;
            return (
              <circle
                key={`${i}-${j}`}
                cx={x}
                cy={lane.y}
                r={4}
                fill="var(--color-accent-ice)"
                className="animate-pulse-node"
                style={{ animationDelay: `${(i + j) * 0.4}s` }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
