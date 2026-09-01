import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="ScripticX home"
      className={cn(
        "inline-flex items-center gap-0 font-semibold text-foreground",
        className,
      )}
    >
      {!compact && <span>Scriptic</span>}
      <Image
        src="/logoSCX.svg"
        alt=""
        width={28}
        height={28}
        className="size-[1.45em]"
        priority
      />
    </Link>
  );
}
