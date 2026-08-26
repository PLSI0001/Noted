"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { previewContent } from "@/content/features";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { duration, ease, spring } from "@/lib/motion";

type SiftState = "idle" | "loading" | "ready";

const swap = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

/**
 * Skeleton bars breathe out of phase with each other. A single shared
 * `animate-pulse` makes four bars blink as one object, which reads as a
 * loading GIF; staggered phases read as work happening.
 */
const skeletonBars = [
  { key: "line-1", className: "h-6 w-2/3 rounded-sm bg-line", delay: 0 },
  { key: "line-2", className: "h-5 w-full rounded-sm bg-line", delay: 0.12 },
  { key: "line-3", className: "h-5 w-5/6 rounded-sm bg-line", delay: 0.24 },
  { key: "block", className: "mt-4 h-24 w-full rounded-md bg-line", delay: 0.36 },
];

export default function SiftPreview() {
  const content = previewContent.sift;
  const fieldId = useId() + "-sift-prompt";
  const [state, setState] = useState<SiftState>("idle");

  async function runSift() {
    setState("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 520));
    setState("ready");
  }

  return (
    <div className="grid h-full min-h-[420px] overflow-hidden rounded-xl border border-line bg-surface shadow-card lg:grid-cols-2">
      <div className="bg-surface p-6 md:p-8 lg:p-10">
        <p className="font-mono text-meta font-medium uppercase tracking-[0.14em] text-ink-muted">
          {content.appLabel}
        </p>
        <label
          htmlFor={fieldId}
          className="mt-8 block text-small font-medium text-ink"
        >
          {content.promptLabel}
        </label>
        <textarea
          id={fieldId}
          defaultValue={content.prompt}
          className="mt-2 min-h-32 w-full resize-none rounded-md border border-line bg-surface-sunk p-4 text-body text-ink transition-colors duration-150 focus:border-accent"
        />
        <motion.button
          type="button"
          onClick={runSift}
          disabled={state === "loading"}
          whileHover={state === "loading" ? undefined : { y: -1 }}
          whileTap={state === "loading" ? undefined : { scale: 0.97 }}
          transition={spring.press}
          className="mt-4 inline-flex min-h-12 min-w-[11.5rem] items-center justify-center overflow-hidden rounded-full bg-accent px-5 py-3 text-small font-semibold text-ink-deep transition-colors duration-150 hover:bg-accent-hover disabled:cursor-wait disabled:opacity-70"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={state === "loading" ? "working" : "action"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: duration.micro, ease: ease.out }}
            >
              {state === "loading" ? content.workingLabel : content.actionLabel}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <div className="border-t border-line bg-surface-sunk p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
        {/*
          A floor height on the swap area keeps the three states from
          collapsing the panel between exit and enter.
        */}
        <div className="min-h-64">
          <AnimatePresence mode="wait" initial={false}>
            {state === "idle" ? (
              <motion.div
                key="idle"
                {...swap}
                transition={{ duration: duration.base, ease: ease.out }}
                className="flex h-full min-h-64 items-center justify-center rounded-md border border-dashed border-line bg-surface/60 p-8 text-center"
              >
                <p className="max-w-[28ch] text-body text-ink-muted">
                  {content.emptyLabel}
                </p>
              </motion.div>
            ) : null}

            {state === "loading" ? (
              <motion.div
                key="loading"
                {...swap}
                transition={{ duration: duration.fast, ease: ease.out }}
                className="grid gap-4"
                role="status"
                aria-label={content.workingLabel}
              >
                {skeletonBars.map((bar) => (
                  <motion.div
                    key={bar.key}
                    className={bar.className}
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{
                      duration: 1.4,
                      ease: ease.inOut,
                      repeat: Infinity,
                      delay: bar.delay,
                    }}
                  />
                ))}
              </motion.div>
            ) : null}

            {state === "ready" ? (
              <motion.div
                key="ready"
                {...swap}
                transition={{ duration: duration.fast, ease: ease.out }}
                aria-live="polite"
              >
                <Stagger trigger="mount" each={0.08} delayChildren={0.05} className="grid">
                <StaggerItem
                  as="p"
                  y={12}
                  className="text-h4 font-semibold text-ink"
                >
                  {content.answer}
                </StaggerItem>
                <StaggerItem
                  as="p"
                  y={10}
                  seconds={0.5}
                  className="mt-6 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-accent"
                >
                  {content.citationLabel}
                </StaggerItem>
                <Stagger
                  trigger="inherit"
                  each={0.09}
                  className="mt-4 grid gap-3"
                >
                  {content.citations.map((citation) => (
                    <StaggerItem
                      as="p"
                      key={citation}
                      y={12}
                      seconds={0.6}
                      className="rounded-md border border-line bg-surface p-4 text-small text-ink-muted"
                    >
                      {citation}
                    </StaggerItem>
                  ))}
                </Stagger>
                </Stagger>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
