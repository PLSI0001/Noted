"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { duration, ease, viewport as viewportDefault } from "@/lib/motion";
import { triggerProps, type Trigger } from "@/components/motion/Stagger";

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
  p: motion.p,
  li: motion.li,
  span: motion.span,
} as const;

export type RevealTag = keyof typeof tags;

type RevealProps = {
  children: ReactNode;
  as?: RevealTag;
  className?: string;
  /** Vertical travel in px. Transform only — never affects layout. */
  y?: number;
  /** Horizontal travel in px. Used by the alternating grid. */
  x?: number;
  /** Entry scale. Kept above 0.95 so text never renders visibly soft. */
  scale?: number;
  delay?: number;
  seconds?: number;
  /** Fraction of the element that must be visible before it fires. */
  amount?: number;
  trigger?: Trigger;
};

/**
 * A single-element reveal. Deliberately thin: it exists so server components
 * can opt into motion without themselves becoming client components.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  y = 20,
  x = 0,
  scale = 1,
  delay = 0,
  seconds = duration.reveal,
  amount = viewportDefault.amount,
  trigger = "inView",
}: RevealProps) {
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
          transition: { duration: seconds, ease: ease.out, delay },
        },
      }}
      {...triggerProps(trigger, amount)}
    >
      {children}
    </Component>
  );
}
