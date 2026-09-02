const stars = [
  { x: 7, y: 78, radius: 1.4, delay: "-1.2s" },
  { x: 13, y: 58, radius: 0.9, delay: "-3.8s" },
  { x: 19, y: 87, radius: 1.1, delay: "-2.4s" },
  { x: 25, y: 69, radius: 1.7, delay: "-5.1s" },
  { x: 31, y: 43, radius: 0.8, delay: "-4.3s" },
  { x: 36, y: 80, radius: 1.2, delay: "-0.7s" },
  { x: 42, y: 61, radius: 0.8, delay: "-2.9s" },
  { x: 48, y: 91, radius: 1.5, delay: "-4.8s" },
  { x: 53, y: 72, radius: 1, delay: "-1.9s" },
  { x: 59, y: 49, radius: 1.3, delay: "-5.6s" },
  { x: 64, y: 84, radius: 0.8, delay: "-3.2s" },
  { x: 70, y: 64, radius: 1.6, delay: "-0.4s" },
  { x: 76, y: 90, radius: 1, delay: "-4.1s" },
  { x: 82, y: 55, radius: 0.9, delay: "-2.1s" },
  { x: 87, y: 76, radius: 1.4, delay: "-5.4s" },
  { x: 93, y: 45, radius: 0.8, delay: "-3.5s" },
  { x: 97, y: 88, radius: 1.1, delay: "-1.5s" },
] as const;

const constellations = [
  "M7 78 L13 58 L25 69 L36 80 L48 91",
  "M31 43 L42 61 L53 72 L59 49 L70 64",
  "M64 84 L70 64 L82 55 L87 76 L97 88",
  "M19 87 L25 69 L42 61",
  "M48 91 L64 84 L76 90 L87 76",
] as const;

const compactY = (value: number) => Number(((value - 40) * 0.45).toFixed(2));

function compactPath(path: string) {
  return path.replace(/(\d+)\s+(\d+)/g, (_match, x: string, y: string) => `${x} ${compactY(Number(y))}`);
}

export function ConstellationField({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "pointer-events-none absolute inset-0 overflow-hidden opacity-80" : "sx-constellation-field pointer-events-none absolute inset-0 overflow-hidden"}
      aria-hidden="true"
    >
      <div className={`absolute inset-x-[8%] rounded-[50%] bg-[radial-gradient(circle,rgba(79,209,178,0.11),rgba(72,118,255,0.055)_40%,transparent_72%)] blur-3xl ${compact ? "-bottom-48 h-96" : "bottom-[-18rem] h-[34rem]"}`} />
      <div className="sx-constellation-dust absolute inset-0" />
      <svg
        viewBox={compact ? "0 0 100 24" : "0 0 100 100"}
        preserveAspectRatio={compact ? "xMidYMid slice" : "none"}
        className={`sx-constellation-plane absolute ${compact ? "inset-0 size-full" : "-inset-x-[3%] bottom-[-4%] h-[92%] w-[106%]"}`}
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.095" className="text-sky-200/22">
          {constellations.map((path) => (
            <path key={path} d={compact ? compactPath(path) : path} className="sx-constellation-line" vectorEffect="non-scaling-stroke" />
          ))}
        </g>
        <g className="text-white/70">
          {stars.map((star) => (
            <circle
              key={`${star.x}-${star.y}`}
              cx={star.x}
              cy={compact ? compactY(star.y) : star.y}
              r={star.radius * 0.095}
              fill="currentColor"
              className="sx-constellation-star"
              style={{ animationDelay: star.delay }}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
        <g fill="currentColor" className="text-emerald-200/80">
          <circle cx="25" cy={compact ? compactY(69) : 69} r="0.22" className="sx-constellation-star" style={{ animationDelay: "-2.8s" }} />
          <circle cx="59" cy={compact ? compactY(49) : 49} r="0.18" className="sx-constellation-star" style={{ animationDelay: "-4.6s" }} />
          <circle cx="87" cy={compact ? compactY(76) : 76} r="0.2" className="sx-constellation-star" style={{ animationDelay: "-1.7s" }} />
        </g>
      </svg>
    </div>
  );
}
