"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { previewContent } from "@/content/features";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import RevealWords from "@/components/motion/RevealWords";
import { duration, ease, spring } from "@/lib/motion";

export default function NudgePreview() {
  const content = previewContent.nudge;
  const [remembered, setRemembered] = useState(false);

  return (
    <div className="flex h-full min-h-[420px] items-center justify-center rounded-xl border border-line bg-surface-sunk p-5 shadow-card md:p-8">
      <Stagger
        each={0.08}
        amount={0.25}
        className="w-full max-w-[640px] rounded-lg border border-line bg-surface p-6 shadow-card md:p-10"
      >
        <StaggerItem
          as="p"
          y={8}
          seconds={0.5}
          className="font-mono text-meta font-medium uppercase tracking-[0.14em] text-ink-muted"
        >
          {content.appLabel}
        </StaggerItem>

        <RevealWords
          as="h3"
          trigger="inherit"
          text={content.title}
          y={16}
          each={0.045}
          className="mt-6 text-[1.875rem] leading-[1.15] tracking-[-0.018em] text-ink md:text-h3"
        />

        <StaggerItem
          as="p"
          y={12}
          className="mt-4 max-w-[48ch] text-body text-ink-muted"
        >
          {content.body}
        </StaggerItem>

        {/*
          Rows arrive from a short horizontal offset rather than vertically —
          it reads as a list being dealt out, which suits a reminder.
        */}
        <Stagger
          as="ol"
          trigger="inherit"
          each={0.075}
          className="mt-8 grid gap-3"
        >
          {content.items.map((item, index) => (
            <StaggerItem
              as="li"
              key={item}
              x={-10}
              y={6}
              seconds={0.6}
              className="grid grid-cols-[32px_1fr] items-start gap-3 rounded-md bg-surface-sunk px-4 py-3 text-body text-ink"
            >
              <span className="font-mono text-small tabular-nums text-ink-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </StaggerItem>
          ))}
        </Stagger>

        <StaggerItem y={12} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <motion.button
            type="button"
            onClick={() => setRemembered(true)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={spring.press}
            className="inline-flex min-h-12 min-w-[12rem] items-center justify-center overflow-hidden rounded-full bg-accent px-5 py-3 text-small font-semibold text-ink-deep transition-colors duration-150 hover:bg-accent-hover"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={remembered ? "remembered" : "done"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: duration.micro, ease: ease.out }}
              >
                {remembered ? content.rememberedLabel : content.doneLabel}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setRemembered(false)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={spring.press}
            className="min-h-12 rounded-md border border-line px-5 py-3 text-small font-medium text-ink transition-colors duration-150 hover:bg-surface-sunk"
          >
            {content.laterLabel}
          </motion.button>
        </StaggerItem>

        <span className="sr-only" aria-live="polite">
          {remembered ? content.rememberedLabel : ""}
        </span>
      </Stagger>
    </div>
  );
}
