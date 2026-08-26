"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { previewContent } from "@/content/features";
import NoteCard from "@/components/ui/NoteCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { duration, ease, spring } from "@/lib/motion";

type SaveState = "idle" | "saving" | "saved" | "error";

export default function CatchPreview() {
  const content = previewContent.catch;
  // This preview appears up to three times on the home page, so the field id
  // has to be per-instance or the label associations collide.
  const fieldId = useId() + "-catch-note";
  const [value, setValue] = useState<string>(content.initialText);
  const [saveState, setSaveState] = useState<SaveState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!value.trim()) {
      setSaveState("error");
      return;
    }

    setSaveState("saving");
    await new Promise((resolve) => window.setTimeout(resolve, 420));
    setSaveState("saved");
  }

  const buttonLabel =
    saveState === "saving"
      ? content.savingLabel
      : saveState === "saved"
        ? content.savedLabel
        : content.saveLabel;

  return (
    <div className="grid h-full min-h-[420px] overflow-hidden rounded-xl border border-line bg-surface shadow-card lg:grid-cols-[1.05fr_0.95fr]">
      <div className="flex flex-col justify-between bg-surface p-6 md:p-8 lg:p-10">
        <div>
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-meta font-medium uppercase tracking-[0.14em] text-ink-muted">
              {content.appLabel}
            </p>
            <p className="text-small text-ink-muted">
              {content.personLabel}{" "}
              <span className="font-medium text-ink">{content.person}</span>
            </p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit} noValidate>
            <label
              htmlFor={fieldId}
              className="block text-small font-medium text-ink"
            >
              {content.fieldLabel}
            </label>
            <motion.textarea
              id={fieldId}
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                if (saveState !== "idle") {
                  setSaveState("idle");
                }
              }}
              placeholder={content.placeholder}
              aria-describedby={
                saveState === "error" ? fieldId + "-error" : undefined
              }
              aria-invalid={saveState === "error"}
              // A sprung nudge on the error state rather than a shake: this is
              // a quiet product, and the border colour already carries the
              // message.
              animate={saveState === "error" ? { x: [0, -4, 3, 0] } : { x: 0 }}
              transition={{ duration: 0.32, ease: ease.out }}
              className="mt-2 min-h-36 w-full resize-none rounded-md border border-line bg-surface-sunk p-4 text-body text-ink transition-colors duration-150 placeholder:text-ink-muted focus:border-accent"
            />

            <AnimatePresence initial={false}>
              {saveState === "error" ? (
                <motion.div
                  key="error"
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: spring.drawer,
                    opacity: { duration: duration.micro, ease: ease.out },
                  }}
                >
                  <p id={fieldId + "-error"} className="mt-2 text-small text-accent">
                    {content.errorLabel}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/*
              The button is width-locked so the three labels can cross-fade in
              place. Without it, "Saving" → "Saved privately" would resize the
              control mid-transition and shove the layout around.
            */}
            <motion.button
              type="submit"
              disabled={saveState === "saving"}
              whileHover={saveState === "saving" ? undefined : { y: -1 }}
              whileTap={saveState === "saving" ? undefined : { scale: 0.97 }}
              transition={spring.press}
              className="mt-4 inline-flex min-h-12 min-w-[10.5rem] items-center justify-center overflow-hidden rounded-full bg-accent px-5 py-3 text-small font-semibold text-ink-deep transition-colors duration-150 hover:bg-accent-hover disabled:cursor-wait disabled:opacity-70"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={buttonLabel}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: duration.micro, ease: ease.out }}
                >
                  {buttonLabel}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <span className="sr-only" aria-live="polite">
              {saveState === "saved" ? content.savedLabel : ""}
            </span>
          </form>
        </div>
      </div>

      <div className="border-t border-line bg-surface-sunk p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
        <p className="font-mono text-meta font-medium uppercase tracking-[0.14em] text-ink-muted">
          {content.recentLabel}
        </p>
        <Stagger each={0.09} delayChildren={0.12} amount={0.3} className="mt-6 grid gap-4">
          {content.recentNotes.map((note) => (
            <StaggerItem key={note.person + note.date} y={14} seconds={0.7}>
              <NoteCard
                person={note.person}
                date={note.date}
                text={note.text}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
