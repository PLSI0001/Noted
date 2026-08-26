"use client";

import { previewContent } from "@/content/features";
import NoteCard from "@/components/ui/NoteCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function PersonPagePreview() {
  const content = previewContent.person;

  return (
    <div className="grid h-full min-h-[420px] overflow-hidden rounded-xl border border-line bg-surface shadow-card lg:grid-cols-[0.72fr_1.28fr]">
      <Stagger
        each={0.07}
        delayChildren={0.1}
        amount={0.3}
        className="flex flex-col justify-between bg-secondary p-6 text-on-dark md:p-8 lg:p-10"
      >
        <div>
          <StaggerItem
            as="p"
            y={8}
            seconds={0.5}
            className="font-mono text-meta font-medium uppercase tracking-[0.14em] text-on-dark"
          >
            {content.appLabel}
          </StaggerItem>
          <StaggerItem as="h3" y={16} className="mt-8 text-h3 text-on-dark">
            {content.name}
          </StaggerItem>
          <StaggerItem
            y={12}
            seconds={0.6}
            className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-small text-on-dark"
          >
            <span>{content.relation}</span>
            <span className="tabular-nums">{content.countLabel}</span>
          </StaggerItem>
          <StaggerItem
            as="p"
            y={12}
            className="mt-8 max-w-[32ch] text-body text-on-dark"
          >
            {content.summary}
          </StaggerItem>
        </div>
        <StaggerItem
          as="p"
          y={8}
          seconds={0.5}
          className="mt-12 border-t border-white/15 pt-5 text-small text-on-dark"
        >
          {content.privacyLabel}
        </StaggerItem>
      </Stagger>

      <div className="bg-surface-sunk p-6 md:p-8 lg:p-10">
        <p className="font-mono text-meta font-medium uppercase tracking-[0.14em] text-ink-muted">
          {content.notesLabel}
        </p>
        {/*
          The note list is the point of this preview, so it gets the longest
          stagger in the component — each note lands as its own beat rather
          than the block appearing at once.
        */}
        <Stagger
          each={0.1}
          delayChildren={0.22}
          amount={0.25}
          className="mt-6 grid gap-4"
        >
          {content.notes.map((note) => (
            <StaggerItem key={note.date} y={14} seconds={0.75}>
              <NoteCard date={note.date} text={note.text} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
