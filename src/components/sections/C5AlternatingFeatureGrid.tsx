"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, spring } from "@/lib/motion";

function CaptureStep() {
  const [note, setNote] = useState("She wants her grandmother’s lentil recipe written down.");
  const [saved, setSaved] = useState(false);

  return (
    <article className="workflow-step relative grid min-h-[520px] overflow-hidden border-b border-charcoal-outline/[0.09] bg-white lg:col-span-12 lg:h-[310px] lg:min-h-0 lg:grid-cols-12">
      <div className="relative min-h-[260px] lg:col-span-7 lg:min-h-0">
        <Image
          src="/assets/noted-train-note-v3.png"
          alt="A private note captured during a train journey"
          fill
          sizes="(max-width: 1024px) 100vw, 700px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-5 lg:p-7">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-meta font-semibold uppercase tracking-[0.14em] text-nautical-teal">Step 1 · Catch</p>
            <h3 className="mt-3 text-h3 text-portrait-ink">Save the fragment.</h3>
          </div>
          <span className="workflow-number text-[clamp(4.75rem,7vw,6.25rem)] font-medium leading-[0.72] tracking-[-0.08em] text-sky-wash" aria-hidden="true">1</span>
        </div>
        <div className="mt-4">
          <label htmlFor="workflow-note" className="text-small font-medium text-portrait-ink">What did you notice?</label>
          <textarea
            id="workflow-note"
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
              setSaved(false);
            }}
            className="mt-2 min-h-16 w-full resize-none rounded-2xl border border-charcoal-outline/10 bg-sky-wash/50 p-3 text-small text-portrait-ink"
          />
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <motion.button
              type="button"
              onClick={() => setSaved(Boolean(note.trim()))}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={spring.press}
              className="rainbow-outline min-h-10 rounded-[28px] px-4 text-small font-medium text-portrait-ink"
            >
              Save privately
            </motion.button>
            <AnimatePresence initial={false}>
              {saved ? (
                <motion.span initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-full bg-mint-wash px-3 py-2 text-small font-medium text-nautical-teal">
                  Saved
                </motion.span>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </article>
  );
}

function PersonStep() {
  return (
    <article className="workflow-step relative grid min-h-[520px] overflow-hidden border-b border-charcoal-outline/[0.09] bg-peach-wash/35 lg:col-span-6 lg:h-[310px] lg:min-h-0 lg:grid-cols-[.82fr_1.18fr] lg:border-b-0 lg:border-r">
      <div className="relative min-h-[260px] lg:min-h-0">
        <Image
          src="/assets/noted-family-recipe-v3.png"
          alt="A grandmother and granddaughter preserving a family recipe"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-6 md:p-8 lg:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-meta font-semibold uppercase tracking-[0.14em] text-nautical-teal">Step 2 · Return</p>
            <h3 className="mt-3 text-[clamp(1.75rem,2.6vw,2.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-portrait-ink">Return to the person.</h3>
          </div>
          <span className="workflow-number text-[clamp(4.5rem,6vw,5.75rem)] font-medium leading-[0.72] tracking-[-0.08em] text-[#f6cfaa]" aria-hidden="true">2</span>
        </div>
        <div className="mt-5 border-t border-charcoal-outline/10 pt-4">
          <p className="text-small font-medium text-portrait-ink">For Lila · 18 Aug</p>
          <p className="mt-2 text-small text-graphite-body">“Grandma measures the cumin with the blue spoon, never the silver one.”</p>
        </div>
      </div>
    </article>
  );
}

function ContextStep() {
  const [revealed, setRevealed] = useState(false);

  return (
    <article className="workflow-step relative grid min-h-[540px] overflow-hidden bg-mint-wash/35 lg:col-span-6 lg:h-[310px] lg:min-h-0 lg:grid-cols-[.82fr_1.18fr]">
      <div className="relative min-h-[260px] lg:min-h-0">
        <Image
          src="/assets/noted-used-book-v3.png"
          alt="A friend arriving with the used book someone wanted"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-6 md:p-8 lg:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-meta font-semibold uppercase tracking-[0.14em] text-nautical-teal">Step 3 · Act</p>
            <h3 className="mt-3 text-[clamp(1.75rem,2.6vw,2.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-portrait-ink">Bring back the context.</h3>
          </div>
          <span className="workflow-number text-[clamp(4.5rem,6vw,5.75rem)] font-medium leading-[0.72] tracking-[-0.08em] text-[#bfe9cb]" aria-hidden="true">3</span>
        </div>
        <div className="mt-7">
          <AnimatePresence mode="wait" initial={false}>
            {revealed ? (
              <motion.p key="answer" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: ease.out }} className="text-small font-medium text-portrait-ink">
                Bring the used copy she mentioned, with the train ticket tucked inside.
              </motion.p>
            ) : (
              <motion.p key="prompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-small text-graphite-body">
                Ask your own notes what could make the next moment thoughtful.
              </motion.p>
            )}
          </AnimatePresence>
          <motion.button
            type="button"
            onClick={() => setRevealed((current) => !current)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={spring.press}
            className="mt-4 min-h-10 rounded-[28px] border border-portrait-ink/15 bg-white px-4 text-small font-medium text-portrait-ink"
          >
            {revealed ? "Hide suggestion" : "Reveal suggestion"}
          </motion.button>
        </div>
      </div>
    </article>
  );
}

export default function C5AlternatingFeatureGrid() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const frame = root.current?.querySelector<HTMLElement>(".workflow-frame");
        const steps = gsap.utils.toArray<HTMLElement>(".workflow-step");
        const numbers = gsap.utils.toArray<HTMLElement>(".workflow-number");
        if (!frame || steps.length !== 3 || numbers.length !== 3) return;

        gsap.set(steps, { opacity: 0.52 });
        gsap.set(steps[0], { opacity: 1 });
        gsap.set(numbers, { scale: 0.93, transformOrigin: "100% 0%" });
        gsap.set(numbers[0], { scale: 1 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: frame,
            start: "top 72px",
            end: "+=980",
            pin: true,
            pinSpacing: true,
            scrub: 0.75,
            anticipatePin: 1,
          },
        });

        timeline
          .to(steps[0], { opacity: 0.58, ease: "none" }, 0.22)
          .to(numbers[0], { scale: 0.93, ease: "none" }, 0.22)
          .to(steps[1], { opacity: 1, ease: "none" }, 0.22)
          .to(numbers[1], { scale: 1, ease: "none" }, 0.22)
          .to(steps[1], { opacity: 0.58, ease: "none" }, 0.62)
          .to(numbers[1], { scale: 0.93, ease: "none" }, 0.62)
          .to(steps[2], { opacity: 1, ease: "none" }, 0.62)
          .to(numbers[2], { scale: 1, ease: "none" }, 0.62);

        return () => timeline.kill();
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="privacy" ref={root} className="py-32 md:py-48">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-[10ch] text-display-2 text-portrait-ink lg:col-span-8">
            Care, in <em className="rainbow-text font-medium">three</em> small moves.
          </h2>
          <div className="lg:col-span-4">
            <p className="max-w-[40ch] text-body-lg text-graphite-body">
              Catch the detail, return it to the person, then bring it back when it can become an act of care.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                ["Private by default", "bg-mint-wash"],
                ["Export anytime", "bg-sky-wash"],
                ["Delete by person", "bg-peach-wash"],
              ].map(([item, color]) => (
                <span key={item} className={`rounded-full px-3 py-2 text-small font-medium text-nautical-teal ${color}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="workflow-frame paper-card mt-16 grid overflow-hidden rounded-3xl lg:grid-cols-12 lg:grid-flow-dense">
          <CaptureStep />
          <PersonStep />
          <ContextStep />
        </div>
      </Container>
    </section>
  );
}
