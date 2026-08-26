"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import { faqs } from "@/content/faq";
import { ease } from "@/lib/motion";

export default function C7FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-32 md:py-48">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <h2 className="max-w-[8ch] text-display-2 text-portrait-ink">
            Questions, answered <em className="rainbow-text font-medium">plainly.</em>
          </h2>
          <p className="mt-7 max-w-[34ch] text-body-lg text-graphite-body">
            Noted is built around private attention, not public activity or generated guesswork.
          </p>
          <a href="mailto:hello@noted.example" className="mt-8 inline-block border-b border-portrait-ink/25 pb-1 text-body font-medium text-portrait-ink hover:border-portrait-ink">
            Ask us something else
          </a>
        </div>

        <div className="border-t border-charcoal-outline/[0.1] lg:col-span-7">
          {faqs.map((faq, index) => {
            const expanded = open === index;
            return (
              <article key={faq.question} className="border-b border-charcoal-outline/[0.1]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? -1 : index)}
                    className="flex w-full items-start justify-between gap-8 py-6 text-left"
                  >
                    <span className="text-[1.15rem] font-semibold tracking-[-0.025em] text-portrait-ink md:text-[1.3rem]">{faq.question}</span>
                    <span className="mt-0.5 text-[1.35rem] font-normal text-slate-helper" aria-hidden="true">{expanded ? "−" : "+"}</span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.34, ease: ease.out }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[58ch] pb-7 pr-10 text-body text-graphite-body">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
