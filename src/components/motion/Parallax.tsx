"use client";

import { useRef, type ReactNode } from "react";
import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "motion/react";
import { spring } from "@/lib/motion";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Peak travel in px. Kept small — this is an editorial page, not a parade. */
  distance?: number;
  /**
   * `drift` moves through the whole crossing (both ends of the viewport).
   * `lift`  starts at rest and only moves as the element scrolls away, so an
   *         above-the-fold element is never offset at first paint.
   */
  mode?: "drift" | "lift";
};

/**
 * Scroll-linked translation. Transform only, driven by a MotionValue rather
 * than React state, so scrolling never triggers a re-render and the work stays
 * on the compositor.
 */
export default function Parallax({
  children,
  className,
  distance = 28,
  mode = "drift",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:
      mode === "lift" ? ["start start", "end start"] : ["start end", "end start"],
  });

  const raw = useTransform(
    scrollYProgress,
    [0, 1],
    mode === "lift" ? [0, -distance] : [distance, -distance],
  );
  const y = useSpring(raw, spring.scrub);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduceMotion ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}
