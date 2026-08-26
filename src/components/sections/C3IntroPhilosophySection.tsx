"use client";

import Image from "next/image";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { gsap, useGSAP } from "@/lib/gsap";

export default function C3IntroPhilosophySection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".memory-beat",
          { opacity: 0.22, y: 12 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.14,
            ease: "none",
            scrollTrigger: {
              trigger: ".memory-sentence",
              start: "top 84%",
              end: "bottom 52%",
              scrub: 0.75,
            },
          },
        );

        gsap.fromTo(
          ".memory-inline-image",
          { clipPath: "inset(0 50% 0 50% round 999px)" },
          {
            clipPath: "inset(0 0% 0 0% round 999px)",
            stagger: 0.18,
            ease: "none",
            scrollTrigger: {
              trigger: ".memory-sentence",
              start: "top 78%",
              end: "bottom 48%",
              scrub: 0.75,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="philosophy" ref={root} className="py-32 md:py-48">
      <Container>
        <Reveal className="mx-auto max-w-[960px] text-center">
          <h2 className="text-display-2 text-portrait-ink">
            A private place for the details that make someone <em className="rainbow-text font-medium">them.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-[55ch] text-body-lg text-graphite-body">
            Noted keeps fragments in their original voice, then brings them back when a conversation, visit, or birthday makes them useful.
          </p>
        </Reveal>
      </Container>

      <Container className="mt-20 md:mt-28">
        <div className="memory-sentence overflow-hidden rounded-3xl border border-charcoal-outline/[0.08] bg-sky-wash/35 px-6 py-10 md:px-10 md:py-14 lg:px-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="text-meta font-semibold uppercase tracking-[0.14em] text-nautical-teal">A week, remembered gently</p>
            <p className="max-w-[32ch] text-small text-slate-helper lg:text-right">A few details appear as you arrive. They stay still once they are here.</p>
          </div>
          <p className="mt-14 max-w-[20ch] text-[clamp(2.25rem,5.2vw,5.9rem)] font-medium leading-[0.98] tracking-[-0.052em] text-portrait-ink">
            <span className="memory-beat">Keep the </span>
            <span className="memory-inline-image relative mx-[0.08em] inline-block h-[0.72em] w-[1.28em] translate-y-[0.05em] overflow-hidden rounded-full align-baseline">
              <Image src="/assets/noted-family-recipe-v3.png" alt="A family recipe shared across generations" fill sizes="160px" className="object-cover" />
            </span>{" "}
            <span className="memory-beat">recipe, the </span>
            <span className="memory-inline-image relative mx-[0.08em] inline-block h-[0.72em] w-[1.28em] translate-y-[0.05em] overflow-hidden rounded-full align-baseline">
              <Image src="/assets/noted-bus-stop-v3.png" alt="A small note saved on a rainy evening" fill sizes="160px" className="object-cover" />
            </span>{" "}
            <span className="memory-beat">promise, and the </span>
            <span className="memory-inline-image relative mx-[0.08em] inline-block h-[0.72em] w-[1.28em] translate-y-[0.05em] overflow-hidden rounded-full align-baseline">
              <Image src="/assets/noted-map-planning-v3.png" alt="Friends planning a trip from a paper map" fill sizes="160px" className="object-cover" />
            </span>{" "}
            <span className="memory-beat">plan—without turning a friendship into a feed.</span>
          </p>
        </div>
      </Container>

      <Container className="mt-20 md:mt-28">
        <div className="grid overflow-hidden rounded-3xl border border-charcoal-outline/[0.08] lg:h-[650px] lg:grid-cols-12 lg:grid-rows-2 lg:gap-0">
          <article className="relative min-h-[520px] overflow-hidden border-b border-charcoal-outline/[0.08] lg:col-span-5 lg:row-span-2 lg:min-h-0 lg:border-b-0 lg:border-r">
            <Image src="/assets/noted-friends-dinner-v2.png" alt="Friends laughing over dinner" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 backdrop-blur-sm">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-slate-helper">Dinner with Amara</p>
              <p className="mt-1 text-body font-medium text-portrait-ink">Her laugh arrived before the story did.</p>
            </div>
          </article>

          <article className="grid min-h-[330px] grid-cols-[1.15fr_.85fr] overflow-hidden border-b border-charcoal-outline/[0.08] lg:col-span-4 lg:min-h-0 lg:border-r">
            <div className="relative">
              <Image src="/assets/noted-golden-retriever-v2.png" alt="Golden retriever in a meadow" fill sizes="(max-width: 1024px) 60vw, 260px" className="object-cover" />
            </div>
            <div className="flex flex-col justify-between bg-mint-wash p-5">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-nautical-teal">For Mateo</span>
              <p className="text-[1.1rem] font-medium leading-[1.15] tracking-[-0.03em] text-portrait-ink">Milo finally stopped being afraid of tall grass.</p>
            </div>
          </article>

          <article className="flex min-h-[270px] flex-col justify-between border-b border-charcoal-outline/[0.08] bg-sky-wash p-6 lg:col-span-3 lg:min-h-0">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-nautical-teal">Quiet recall</span>
            <blockquote className="text-[1.35rem] font-medium leading-[1.14] tracking-[-0.035em] text-portrait-ink">
              “Ask how the first week with the new team felt.”
            </blockquote>
            <p className="text-small text-slate-helper">Nudged for Friday</p>
          </article>

          <article className="grid min-h-[330px] grid-cols-[.9fr_1.1fr] overflow-hidden border-b border-charcoal-outline/[0.08] lg:col-span-4 lg:min-h-0 lg:border-b-0 lg:border-r">
            <div className="flex flex-col justify-between bg-peach-wash p-5">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-nautical-teal">Coast, 18 May</span>
              <p className="text-[1.1rem] font-medium leading-[1.15] tracking-[-0.03em] text-portrait-ink">The windy afternoon she still talks about.</p>
            </div>
            <div className="relative">
              <Image src="/assets/noted-coastal-traveler-v2.png" alt="A coastal walk remembered in Noted" fill sizes="(max-width: 1024px) 60vw, 280px" className="object-cover" />
            </div>
          </article>

          <article className="relative min-h-[330px] overflow-hidden lg:col-span-3 lg:min-h-0">
            <Image src="/assets/noted-kitchen-friends-v2.png" alt="Friends making smoothies together" fill sizes="(max-width: 1024px) 100vw, 300px" className="object-cover" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-3 backdrop-blur-sm">
              <p className="text-small font-medium text-portrait-ink">The green smoothie experiment</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
