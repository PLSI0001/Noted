import { cn } from "@/lib/cn";

type NoteCardProps = {
  person?: string;
  date: string;
  text: string;
  className?: string;
};

export default function NoteCard({ person, date, text, className }: NoteCardProps) {
  return (
    <article className={cn("rounded-2xl border border-charcoal-outline/10 bg-white px-4 py-4", className)}>
      <div className="flex items-center justify-between gap-4 text-[0.69rem] font-medium uppercase tracking-[0.1em] text-slate-helper">
        <span>{person ?? "Private note"}</span>
        <time className="tabular-nums">{date}</time>
      </div>
      <p className="mt-3 text-body text-portrait-ink">{text}</p>
    </article>
  );
}
