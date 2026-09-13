import Image from "next/image";

import { cn } from "@/lib/utils";

type MascotPeekProps = {
  className?: string;
  delay?: number;
  mascot?: "mouse" | "robot";
};

const mascots = {
  mouse: {
    src: "/brand/mascota-soricel.png",
    width: 402,
    height: 677,
  },
  robot: {
    src: "/brand/mascota-robotel.png",
    width: 1355,
    height: 1212,
  },
} as const;

export function MascotPeek({ className, delay = 0, mascot = "mouse" }: MascotPeekProps) {
  const asset = mascots[mascot];

  return (
    <Image
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={cn("sx-mascot-float pointer-events-none select-none", className)}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}
