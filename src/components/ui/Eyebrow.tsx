import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "w-fit rounded-full bg-sky-wash px-3 py-1.5 text-meta font-semibold uppercase tracking-[0.14em] text-nautical-teal",
        className,
      )}
    >
      {children}
    </p>
  );
}
