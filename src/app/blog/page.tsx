import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { posts } from "@/content/posts";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Journal",
  description: siteContent.blogIndex.body,
};

const postImages = [
  "/assets/noted-handwritten-note-v2.png",
  "/assets/noted-golden-retriever-v2.png",
  "/assets/noted-coastal-traveler-v2.png",
];

export default function BlogIndexPage() {
  const content = siteContent.blogIndex;

  return (
    <main id="main-content" className="min-h-[100dvh] overflow-x-hidden bg-white pb-24 text-portrait-ink">
      <Reveal as="header" trigger="mount" y={-12} seconds={0.7}>
        <Container className="pt-4">
          <div className="flex h-14 items-center justify-between rounded-[28px] border border-charcoal-outline/[0.08] bg-white px-5 shadow-float">
            <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-[-0.03em] text-portrait-ink">
              <span className="brand-swatch size-2.5 rounded-[3px]" aria-hidden="true" />
              Noted
            </Link>
            <Link href="/" className="text-small font-medium text-slate-helper transition-colors hover:text-portrait-ink">
              {content.backLabel}
            </Link>
          </div>
        </Container>
      </Reveal>

      <Container className="pt-28 md:pt-40">
        <Stagger trigger="mount" each={0.09} delayChildren={0.12} className="max-w-[860px]">
          <StaggerItem as="p" y={10} className="w-fit rounded-full bg-peach-wash px-3 py-1.5 text-meta font-semibold uppercase tracking-[0.14em] text-nautical-teal">
            The journal
          </StaggerItem>
          <StaggerItem y={22}>
            <h1 className="mt-6 max-w-[9ch] text-display-1 text-portrait-ink">Notes on paying <em className="rainbow-text font-medium">attention.</em></h1>
          </StaggerItem>
          <StaggerItem as="p" y={16} className="mt-7 max-w-[58ch] text-body-lg text-graphite-body">
            {content.body}
          </StaggerItem>
        </Stagger>

        <Stagger each={0.11} amount={0.12} className="mt-20 grid overflow-hidden rounded-3xl border border-charcoal-outline/[0.09] lg:grid-cols-3">
          {posts.map((post, index) => (
            <StaggerItem as="article" key={post.slug} y={24} className={`${index > 0 ? "border-t border-charcoal-outline/[0.09] lg:border-l lg:border-t-0" : ""} bg-white`}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={postImages[index]} alt="" fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="flex min-h-[330px] flex-col p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-slate-helper">
                    <span>{post.category}</span><time>{post.date}</time>
                  </div>
                  <h2 className="mt-7 text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.04em] text-portrait-ink">{post.title}</h2>
                  <p className="mt-5 text-body text-graphite-body">{post.summary}</p>
                  <p className="mt-auto pt-9 text-small font-medium text-portrait-ink">{content.readLabel} ↗</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </main>
  );
}
