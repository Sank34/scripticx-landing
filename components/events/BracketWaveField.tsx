"use client";

import { useEffect, useRef } from "react";

type BracketGlyph = "{" | "[" | "(" | "<" | ">" | ")" | "]" | "}";

const glyphs: Record<BracketGlyph, readonly string[]> = {
  "{": ["00110", "01000", "01000", "10000", "01000", "01000", "00110"],
  "[": ["11100", "10000", "10000", "10000", "10000", "10000", "11100"],
  "(": ["00110", "01000", "10000", "10000", "10000", "01000", "00110"],
  "<": ["00010", "00100", "01000", "10000", "01000", "00100", "00010"],
  ">": ["01000", "00100", "00010", "00001", "00010", "00100", "01000"],
  ")": ["01100", "00010", "00001", "00001", "00001", "00010", "01100"],
  "]": ["00111", "00001", "00001", "00001", "00001", "00001", "00111"],
  "}": ["01100", "00010", "00010", "00001", "00010", "00010", "01100"],
};

const motif: readonly BracketGlyph[] = [
  "{", "{", "[", "[", "(", "(", "<", "<", ">", ">", ")", ")", "]", "]", "}", "}",
];

function modulo(value: number, divisor: number) {
  return ((value % divisor) + divisor) % divisor;
}

function drawGlyph(
  context: CanvasRenderingContext2D,
  glyph: BracketGlyph,
  x: number,
  y: number,
  pixelSize: number,
  color: string,
  reveal: number,
) {
  const activePixels = glyphs[glyph].flatMap((row, rowIndex) =>
    [...row].flatMap((pixel, columnIndex) => pixel === "1" ? [[columnIndex, rowIndex] as const] : []),
  );
  const visiblePixels = Math.ceil(activePixels.length * reveal);

  context.fillStyle = color;
  for (let index = 0; index < visiblePixels; index += 1) {
    const [column, row] = activePixels[index];
    context.fillRect(
      Math.round(x + column * pixelSize),
      Math.round(y + row * pixelSize),
      Math.ceil(pixelSize),
      Math.ceil(pixelSize),
    );
  }
}

export function BracketWaveField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastFrame = 0;
    const startedAt = performance.now();

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.imageSmoothingEnabled = false;
    };

    const draw = (timestamp: number) => {
      context.clearRect(0, 0, width, height);

      const elapsed = reduceMotion ? 2.4 : (timestamp - startedAt) / 1000;
      const pixelSize = width < 480 ? 4 : width < 760 ? 5 : 6;
      const cellWidth = pixelSize * 7;
      const cellHeight = pixelSize * 9;
      const columns = Math.ceil(width / cellWidth) + 3;
      const rows = Math.ceil(height / cellHeight) + 3;
      const cycle = Math.max(6.4, columns * 0.13 + 4.2);

      for (let row = -1; row < rows; row += 1) {
        const reverse = row % 2 !== 0;
        const rowOffset = Math.round(Math.sin(elapsed * 0.82 + row * 0.72) * pixelSize * 1.4);

        for (let column = -1; column < columns; column += 1) {
          const flowColumn = reverse ? columns - column : column;
          const rawPhase = elapsed - flowColumn * 0.1 - row * 0.075;
          const phase = modulo(rawPhase, cycle);
          const pass = Math.floor(rawPhase / cycle);
          const glyph = motif[modulo(column + row * 2 + pass, motif.length)];
          const reveal = phase < 0.52 ? Math.max(0.08, phase / 0.52) : 1;
          const highlight = phase < 0.52
            ? 0.95
            : phase < 2.25
              ? 0.95 - ((phase - 0.52) / 1.73) * 0.68
              : 0.16;
          const greenMix = Math.max(0, 1 - phase / 2.4);
          const red = Math.round(214 - greenMix * 92);
          const green = Math.round(229 + greenMix * 8);
          const blue = Math.round(222 - greenMix * 26);
          const alpha = Math.min(0.82, highlight * (0.62 + (modulo(row, 3)) * 0.07));

          drawGlyph(
            context,
            glyph,
            column * cellWidth + rowOffset - cellWidth,
            row * cellHeight - cellHeight,
            pixelSize,
            `rgba(${red}, ${green}, ${blue}, ${alpha})`,
            reveal,
          );
        }
      }
    };

    const animate = (timestamp: number) => {
      if (timestamp - lastFrame >= 72) {
        draw(timestamp);
        lastFrame = timestamp;
      }
      frame = window.requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });

    observer.observe(canvas);
    resize();
    draw(performance.now());
    if (!reduceMotion) frame = window.requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full opacity-80"
        style={{ imageRendering: "pixelated" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_36%,rgba(110,231,183,0.08),transparent_48%)]" />
    </div>
  );
}
