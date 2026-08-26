"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { duration, stagger as staggerVariants, wordRise } from "@/lib/motion";
import { triggerProps, type Trigger } from "@/components/motion/Stagger";

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

type Tag = keyof typeof tags;

type RevealWordsProps = {
  text: string;
  as?: Tag;
  className?: string;
  /** Per-word travel in px. */
  y?: number;
  each?: number;
  delayChildren?: number;
  seconds?: number;
  amount?: number;
  trigger?: Trigger;
};

/**
 * Word-by-word display reveal.
 *
 * Two details matter here. First, the space between words is a real text node
 * *outside* the inline-block span — if it lived inside the span the browser
 * would lose every line-break opportunity and the headline would refuse to
 * wrap. Second, nothing is clipped by an `overflow: hidden` mask: at a
 * line-height of 0.95 a mask would shear the descenders off Fraunces, so the
 * words travel with opacity instead. Both choices keep the headline's measured
 * box identical to the static version at every frame.
 */
export default function RevealWords({
  text,
  as = "h2",
  className,
  y = 22,
  each = 0.05,
  delayChildren = 0,
  seconds = duration.reveal,
  amount = 0.35,
  trigger = "inView",
}: RevealWordsProps) {
  const Component = tags[as] as typeof motion.h2;
  const words = text.split(" ");
  const item = wordRise(y, seconds);

  return (
    <Component
      className={className}
      variants={staggerVariants(each, delayChildren)}
      {...triggerProps(trigger, amount)}
    >
      {words.map((word, index) => (
        <Fragment key={word + index}>
          <motion.span className="inline-block" variants={item}>
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Component>
  );
}
