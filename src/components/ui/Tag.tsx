import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function Tag({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1.5 text-[0.69rem] font-semibold uppercase tracking-[0.11em]",
        inverse ? "bg-white/15 text-white" : "bg-mint-wash text-nautical-teal",
      )}
    >
      {children}
    </span>
  );
}
