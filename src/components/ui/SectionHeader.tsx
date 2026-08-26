import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealWords from "@/components/motion/RevealWords";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  body?: string;
  link?: { label: string; href: string };
  className?: string;
};

export default function SectionHeader({ title, eyebrow, body, link, className }: SectionHeaderProps) {
  return (
    <Stagger
      each={0.09}
      amount={0.3}
      className={cn("flex flex-col gap-8 md:flex-row md:items-end md:justify-between", className)}
    >
      <div className="max-w-[760px]">
        {eyebrow ? (
          <StaggerItem y={10} seconds={0.55}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </StaggerItem>
        ) : null}
        <RevealWords
          as="h2"
          text={title}
          trigger="inherit"
          each={0.042}
          y={20}
          className={cn("text-h1 text-portrait-ink", eyebrow && "mt-5")}
        />
        {body ? (
          <StaggerItem as="p" y={16} className="mt-6 max-w-[58ch] text-body-lg text-graphite-body">
            {body}
          </StaggerItem>
        ) : null}
      </div>
      {link ? (
        <StaggerItem y={12} className="w-fit shrink-0">
          <Link
            href={link.href}
            className="border-b border-portrait-ink/25 pb-1 text-body font-medium text-portrait-ink transition-colors hover:border-portrait-ink"
          >
            {link.label}
          </Link>
        </StaggerItem>
      ) : null}
    </Stagger>
  );
}
