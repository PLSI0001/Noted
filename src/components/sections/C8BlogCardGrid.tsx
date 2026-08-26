"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import { posts } from "@/content/posts";
import { ease, spring } from "@/lib/motion";

const stories = [
  {
    quote: "I stopped arriving at conversations with the vague feeling I had forgotten something. The note brings back the exact thread.",
    name: "Maya Chen",
    relation: "Keeps 14 people in Noted",
    image: "/assets/noted-testimonial-maya-v3.png",
    alt: "Maya reading on a park bench",
  },
  {
    quote: "The best part is that nobody knows I use it. They only know that I remembered the small thing they told me.",
    name: "Jon Bell",
    relation: "Friend, brother, chronic note-taker",
    image: "/assets/noted-testimonial-jon-v3.png",
    alt: "Jon cooking soup while talking with someone he cares about",
  },
  {
    quote: "It feels less like a contact manager and more like opening a drawer of moments I was careful enough to keep.",
    name: "Amara Singh",
    relation: "Noted early member",
    image: "/assets/noted-testimonial-amara-v3.png",
    alt: "Amara tending herbs on her balcony",
  },
];

const postImages = [
  "/assets/noted-handwritten-note-v2.png",
  "/assets/noted-golden-retriever-v2.png",
  "/assets/noted-coastal-traveler-v2.png",
];

export default function C8BlogCardGrid() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  function move(offset: number) {
    setActive((current) => (current + offset + stories.length) % stories.length);
  }

  return (
    <section id="journal" className="py-32 md:py-48">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-[10ch] text-display-2 text-portrait-ink lg:col-span-8">
            Remembering changes the <em className="rainbow-text font-medium">texture</em> of care.
          </h2>
          <p className="max-w-[38ch] text-body-lg text-graphite-body lg:col-span-4">
            A few words from people who wanted a quieter way to show up well.
          </p>
        </div>

        <div className="paper-card mt-16 overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.48, ease: ease.out }}
              className="grid lg:grid-cols-[.8fr_1.2fr]"
            >
              <div className="relative min-h-[390px] lg:min-h-[540px]">
                <Image src={story.image} alt={story.alt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
              </div>
              <div className="flex min-h-[470px] flex-col justify-between p-7 md:p-12 lg:p-16">
                <blockquote className="max-w-[19ch] text-[clamp(2rem,3.5vw,3.8rem)] font-medium leading-[1.04] tracking-[-0.05em] text-portrait-ink">
                  “{story.quote}”
                </blockquote>
                <div className="mt-12 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-semibold text-portrait-ink">{story.name}</p>
                    <p className="mt-1 text-small text-slate-helper">{story.relation}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.button type="button" onClick={() => move(-1)} whileTap={{ scale: 0.94 }} transition={spring.press} className="rounded-full border border-charcoal-outline/15 px-4 py-2 text-small font-medium text-portrait-ink hover:bg-sky-wash">Previous</motion.button>
                    <motion.button type="button" onClick={() => move(1)} whileTap={{ scale: 0.94 }} transition={spring.press} className="rounded-full border border-charcoal-outline/15 px-4 py-2 text-small font-medium text-portrait-ink hover:bg-sky-wash">Next</motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-32 flex flex-col gap-6 md:mt-48 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="w-fit rounded-full bg-peach-wash px-3 py-1.5 text-meta font-semibold uppercase tracking-[0.14em] text-nautical-teal">The journal</p>
            <h2 className="mt-5 text-h1 text-portrait-ink">Notes on paying attention.</h2>
          </div>
          <Link href="/blog" className="w-fit border-b border-portrait-ink/25 pb-1 text-body font-medium text-portrait-ink hover:border-portrait-ink">Read every note</Link>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-charcoal-outline/[0.09] lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.slug} className={`${index > 0 ? "border-t border-charcoal-outline/[0.09] lg:border-l lg:border-t-0" : ""} bg-white`}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={postImages[index]} alt="" fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-slate-helper">
                    <span>{post.category}</span><span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-5 text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.04em] text-portrait-ink">{post.title}</h3>
                  <p className="mt-4 text-small text-graphite-body">{post.summary}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
