"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { duration, ease } from "@/lib/motion";

/**
 * One client boundary at the root of the tree. `reducedMotion="user"` makes
 * every Framer transform, layout and scroll animation on the page collapse to
 * an opacity change when the OS asks for reduced motion — the CSS block in
 * globals.css only covers CSS transitions, not JS-driven ones.
 *
 * `children` is passed through as a slot, so every server component below this
 * point stays a server component.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: duration.base, ease: ease.out }}
    >
      {children}
    </MotionConfig>
  );
}
