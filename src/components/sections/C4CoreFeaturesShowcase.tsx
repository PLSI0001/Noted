"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import { featureTabs, type PreviewKey } from "@/content/features";
import { ease, spring } from "@/lib/motion";

const imageByFeature: Record<PreviewKey, { src: string; alt: string }> = {
  catch: {
    src: "/assets/noted-bus-stop-v3.png",
    alt: "A private note being saved at a rainy bus stop",
  },
  person: {
    src: "/assets/noted-record-shop-v3.png",
    alt: "Two friends browsing records together",
  },
  nudge: {
    src: "/assets/noted-flower-stall-v3.png",
    alt: "A man remembering to choose sunflowers at a market",
  },
  sift: {
    src: "/assets/noted-map-planning-v3.png",
    alt: "Friends planning a journey together from a paper map",
  },
};

function FeaturePreview({ id }: { id: PreviewKey }) {
  const image = imageByFeature[id];

  return (
    <div className="grid h-full overflow-hidden rounded-3xl border border-charcoal-outline/[0.08] bg-white md:grid-cols-[1.05fr_.95fr]">
      <div className="relative min-h-[240px] md:min-h-0">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 390px" className="object-cover" />
      </div>
      <div className="flex flex-col justify-between p-5 md:p-6">
        {id === "catch" ? (
          <>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-slate-helper">For Priya</p>
              <p className="mt-3 text-[1.15rem] font-medium leading-6 text-portrait-ink">Wants to try the pottery place near the station.</p>
            </div>
            <span className="mt-8 w-fit rounded-full bg-mint-wash px-3 py-1.5 text-small font-medium text-nautical-teal">Saved privately</span>
          </>
        ) : null}
        {id === "person" ? (
          <>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-slate-helper">Priya Menon</p>
              <p className="mt-3 text-[1.15rem] font-medium leading-6 text-portrait-ink">Nine fragments, kept in the order life happened.</p>
            </div>
            <div className="mt-8 grid gap-2 text-small text-slate-helper">
              <p className="border-t border-charcoal-outline/10 pt-2">Pottery place near the station</p>
              <p className="border-t border-charcoal-outline/10 pt-2">Winter train through Hokkaido</p>
            </div>
          </>
        ) : null}
        {id === "nudge" ? (
          <>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-slate-helper">Before Saturday</p>
              <p className="mt-3 text-[1.15rem] font-medium leading-6 text-portrait-ink">Ask Mateo whether Milo still dives into the tall grass.</p>
            </div>
            <span className="mt-8 w-fit rounded-full bg-peach-wash px-3 py-1.5 text-small font-medium text-nautical-teal">Useful, not noisy</span>
          </>
        ) : null}
        {id === "sift" ? (
          <>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-slate-helper">Your notes say</p>
              <p className="mt-3 text-[1.15rem] font-medium leading-6 text-portrait-ink">Bring the book she wanted, then plan the coastal walk again.</p>
            </div>
            <p className="mt-8 text-small text-slate-helper">Based on two dated notes, with both sources attached.</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default function C4CoreFeaturesShowcase() {
  const [active, setActive] = useState<PreviewKey>(featureTabs[0].id);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + offset + featureTabs.length) % featureTabs.length;
    setActive(featureTabs[next].id);
    document.getElementById(`feature-${featureTabs[next].id}`)?.focus();
  }

  return (
    <section id="how-it-works" className="py-32 md:py-48">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-[9ch] text-display-2 text-portrait-ink lg:col-span-8">
            Four quiet ways to <em className="rainbow-text font-medium">notice</em> more.
          </h2>
          <p className="max-w-[40ch] text-body-lg text-graphite-body lg:col-span-4">
            Open a panel to see how each tool helps without turning a relationship into a dashboard.
          </p>
        </div>

        <div className="mt-16 hidden h-[570px] gap-3 lg:flex" role="tablist" aria-label="Noted features">
          {featureTabs.map((feature, index) => {
            const selected = feature.id === active;
            return (
              <motion.article
                key={feature.id}
                layout
                transition={spring.drawer}
                className={`paper-card relative overflow-hidden rounded-3xl ${selected ? "flex-[5.2]" : "flex-[1.05]"}`}
                onMouseEnter={() => setActive(feature.id)}
              >
                <button
                  id={`feature-${feature.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`feature-panel-${feature.id}`}
                  onClick={() => setActive(feature.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className="absolute inset-0 z-20 text-left"
                >
                  <span className="sr-only">Show {feature.label}</span>
                </button>

                <div className="relative z-10 flex h-full min-w-0">
                  <div className={`flex w-32 shrink-0 flex-col p-5 ${selected ? "bg-white" : index % 2 === 0 ? "bg-sky-wash" : "bg-peach-wash"}`}>
                    <span className="text-meta font-semibold tracking-[0.12em] text-slate-helper">0{index + 1}</span>
                    <span className="mt-8 whitespace-nowrap text-small font-semibold text-portrait-ink">{feature.label}</span>
                    <span className="mt-auto text-lg text-nautical-teal" aria-hidden="true">↗</span>
                  </div>
                  <AnimatePresence initial={false} mode="wait">
                    {selected ? (
                      <motion.div
                        id={`feature-panel-${feature.id}`}
                        key={feature.id}
                        role="tabpanel"
                        aria-labelledby={`feature-${feature.id}`}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.38, ease: ease.out }}
                        className="grid min-w-0 flex-1 grid-rows-[auto_1fr] gap-6 p-6"
                      >
                        <div>
                          <h3 className="text-h3 text-portrait-ink">{feature.title}</h3>
                          <p className="mt-3 max-w-[50ch] text-body text-graphite-body">{feature.description}</p>
                        </div>
                        <FeaturePreview id={feature.id} />
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-3 lg:hidden">
          {featureTabs.map((feature) => {
            const selected = feature.id === active;
            return (
              <article key={feature.id} className="paper-card overflow-hidden rounded-3xl">
                <button
                  type="button"
                  aria-expanded={selected}
                  onClick={() => setActive(feature.id)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
                >
                  <span className="text-[1.05rem] font-semibold text-portrait-ink">{feature.label}</span>
                  <span className="text-slate-helper" aria-hidden="true">{selected ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {selected ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: ease.out }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <h3 className="text-h3 text-portrait-ink">{feature.title}</h3>
                        <p className="mt-3 text-body text-graphite-body">{feature.description}</p>
                        <div className="mt-6"><FeaturePreview id={feature.id} /></div>
                      </div>
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
