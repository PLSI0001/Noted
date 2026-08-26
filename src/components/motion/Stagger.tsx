"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { duration, ease, stagger as staggerVariants } from "@/lib/motion";

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
  nav: motion.nav,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

type Tag = keyof typeof tags;

/**
 * `inView`  — fires when the element scrolls into view (the default).
 * `mount`   — fires immediately; for anything above the fold.
 * `inherit` — takes its cue from the nearest motion parent, which is how
 *             nested sequences stay in one timeline instead of racing.
 */
export type Trigger = "inView" | "mount" | "inherit";

export function triggerProps(trigger: Trigger, amount: number) {
  if (trigger === "inherit") {
    return {};
  }
  if (trigger === "mount") {
    return { initial: "hidden" as const, animate: "visible" as const };
  }
  return {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount },
  };
}

type StaggerProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  /** Gap between consecutive children, in seconds. */
  each?: number;
  /** Delay before the first child starts. */
  delayChildren?: number;
  amount?: number;
  trigger?: Trigger;
};

/**
 * Orchestration container. It holds no visual state of its own — only
 * `staggerChildren` — so dropping it around an existing grid or list cannot
 * change how that grid paints or measures.
 */
export function Stagger({
  children,
  as = "div",
  className,
  each = 0.08,
  delayChildren = 0,
  amount = 0.2,
  trigger = "inView",
}: StaggerProps) {
  const Component = tags[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={staggerVariants(each, delayChildren)}
      {...triggerProps(trigger, amount)}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  seconds?: number;
};

/**
 * A child of `Stagger`. It sets no `initial`/`animate` of its own — it inherits
 * the variant label from the nearest motion parent, which is what keeps the
 * sequence in one place instead of spread across hand-tuned delays.
 *
 * One rule when adding gestures to a `Stagger` child: `whileHover`/`whileTap`
 * given as an *object* is safe, but given as a *string variant label* it makes
 * the component variant-controlling, and a controlling component no longer
 * inherits `initial`/`animate` from its parent — the item silently drops out
 * of the stagger and never animates in. Put label-driven gestures on an inner
 * element (see C1's nav links and C8's cards) and leave the outer element free
 * to inherit.
 */
export function StaggerItem({
  children,
  as = "div",
  className,
  y = 18,
  x = 0,
  scale = 1,
  seconds = duration.reveal,
}: StaggerItemProps) {
  const Component = tags[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y, x, scale },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: { duration: seconds, ease: ease.out },
        },
      }}
    >
      {children}
    </Component>
  );
}
