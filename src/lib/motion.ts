import type { Transition, Variants } from "motion/react";

type Bezier = [number, number, number, number];

/**
 * The house curves. Nothing on this page uses a linear or symmetric ease:
 * everything leaves fast and settles slowly, the way a hand-set page turns.
 *
 * - `out`      expo-out. The primary reveal curve for every entrance.
 * - `outSoft`  quint-out. Quieter sibling for secondary copy and small chrome.
 * - `outQuart` shortest tail. Used where a reveal has to finish under 300ms.
 * - `in`       accelerating. Exits only — never an entrance.
 */
export const ease = {
  out: [0.16, 1, 0.3, 1] as Bezier,
  outSoft: [0.22, 1, 0.36, 1] as Bezier,
  outQuart: [0.25, 1, 0.5, 1] as Bezier,
  in: [0.55, 0, 1, 0.45] as Bezier,
  inOut: [0.65, 0, 0.35, 1] as Bezier,
};

export const duration = {
  micro: 0.18,
  fast: 0.28,
  base: 0.46,
  reveal: 0.78,
  slow: 1.05,
};

/**
 * Spring physics for anything the user drives directly — presses, hovers,
 * tab pills, disclosure carets. Mass is kept under 1 so nothing feels sluggish;
 * damping is kept high enough that nothing visibly oscillates on a warm paper
 * surface, which would read as cheap.
 */
export const spring: Record<
  "press" | "hover" | "pill" | "drawer" | "settle" | "scrub",
  Transition
> = {
  press: { type: "spring", stiffness: 520, damping: 30, mass: 0.6 },
  hover: { type: "spring", stiffness: 320, damping: 26, mass: 0.9 },
  pill: { type: "spring", stiffness: 360, damping: 34, mass: 0.9 },
  drawer: { type: "spring", stiffness: 240, damping: 30, mass: 0.9 },
  settle: { type: "spring", stiffness: 170, damping: 22, mass: 1 },
  scrub: { type: "spring", stiffness: 120, damping: 30, mass: 0.6 },
};

/** Scroll-reveal defaults. `once` keeps the IntersectionObservers short-lived. */
export const viewport = { once: true, amount: 0.2 } as const;
export const viewportEarly = { once: true, amount: 0.05 } as const;

/**
 * Every variant below animates `opacity` and `transform` only. No height,
 * width, margin or padding is ever animated on an entrance, so a reveal can
 * never move a neighbouring element or contribute to CLS.
 */

export function fadeUp(
  distance = 18,
  seconds = duration.reveal,
  delay = 0,
): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: seconds, ease: ease.out, delay },
    },
  };
}

export function fadeSide(
  distance = 24,
  seconds = duration.reveal,
  delay = 0,
): Variants {
  return {
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: seconds, ease: ease.out, delay },
    },
  };
}

export function riseScale(
  distance = 32,
  from = 0.97,
  seconds = duration.slow,
  delay = 0,
): Variants {
  return {
    hidden: { opacity: 0, y: distance, scale: from },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: seconds, ease: ease.out, delay },
    },
  };
}

export function fadeOnly(seconds = duration.base, delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: seconds, ease: ease.out, delay } },
  };
}

/**
 * Orchestration-only parent. Holds no visual state of its own, so wrapping a
 * layout node in it cannot change how that node paints.
 */
export function stagger(children = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: children, delayChildren } },
  };
}

/**
 * Word-level entrance used by the display headlines. Travel is expressed in px
 * rather than em so the interpolation stays unit-free, and it is deliberately
 * short — a display face at 81px only needs a few pixels to read as "arriving".
 */
export function wordRise(distance = 22, seconds = duration.reveal): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: seconds, ease: ease.out },
    },
  };
}
