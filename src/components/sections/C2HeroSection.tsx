"use client";

import Image from "next/image";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { siteContent } from "@/content/site";
import { gsap, useGSAP } from "@/lib/gsap";

export default function C2HeroSection() {
  const content = siteContent.hero;
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-memory",
          { scale: 1, opacity: 1 },
          {
            scale: 0.91,
            opacity: 0.48,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );

        gsap.to(".hero-float-a", {
          yPercent: -16,
          rotate: -1.5,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.9 },
        });

        gsap.to(".hero-float-b", {
          yPercent: -26,
          rotate: 2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.9 },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="hero" ref={root} className="relative isolate min-h-[100svh] pt-28 md:pt-32">
      <div aria-hidden="true" className="soft-hero-halo absolute right-[-12rem] top-12 -z-10 size-[46rem] rounded-full" />

      <Container className="grid min-h-[calc(100svh-8rem)] items-center gap-16 pb-24 pt-8 lg:grid-cols-12 lg:gap-10 lg:pb-32">
        <Stagger
          trigger="mount"
          each={0.1}
          delayChildren={0.15}
          className="relative z-10 lg:col-span-6"
        >
          <StaggerItem y={28} seconds={0.95}>
            <h1 className="max-w-[10.5ch] text-display-1 text-portrait-ink">
              <span className="block md:whitespace-nowrap">Remember them.</span>
              <span className="block md:whitespace-nowrap">In the <em className="rainbow-text font-medium">details.</em></span>
            </h1>
          </StaggerItem>
          <StaggerItem as="p" y={18} className="mt-7 max-w-[47ch] text-body-lg text-graphite-body md:text-[1.22rem]">
            {content.body}
          </StaggerItem>
          <Stagger trigger="inherit" each={0.08} className="mt-9 flex flex-wrap items-center gap-3">
            <StaggerItem y={12} seconds={0.65}>
              <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
            </StaggerItem>
            <StaggerItem y={12} seconds={0.65}>
              <Button href={content.secondaryCta.href} variant="ghost">
                {content.secondaryCta.label} <span aria-hidden="true">↘</span>
              </Button>
            </StaggerItem>
          </Stagger>
        </Stagger>

        <div className="hero-memory relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[620px] lg:col-span-6 lg:h-[660px]">
          <Reveal trigger="mount" y={36} scale={0.97} seconds={1.1} delay={0.38} className="absolute left-[10%] top-[4%] h-[73%] w-[66%] rotate-[-3.5deg]">
            <div className="image-hairline relative size-full overflow-hidden rounded-3xl bg-white p-1.5">
              <div className="relative size-full overflow-hidden rounded-[19px]">
                <Image
                  src="/assets/noted-friends-dinner-v2.png"
                  alt="Two close friends laughing together over dinner"
                  fill
                  priority
                  sizes="(max-width: 1024px) 70vw, 390px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal trigger="mount" y={28} scale={0.94} seconds={0.9} delay={0.58} className="hero-float-a absolute right-[1%] top-[0%] h-[28%] w-[31%] rotate-[5deg]">
            <div className="image-hairline relative size-full overflow-hidden rounded-3xl bg-white p-1.5">
              <div className="relative size-full overflow-hidden rounded-[19px]">
                <Image src="/assets/noted-golden-retriever-v2.png" alt="Golden retriever running through wildflowers" fill sizes="180px" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal trigger="mount" y={28} scale={0.94} seconds={0.9} delay={0.72} className="hero-float-b absolute bottom-[3%] right-[4%] h-[34%] w-[36%] rotate-[4deg]">
            <div className="image-hairline relative size-full overflow-hidden rounded-3xl bg-white p-1.5">
              <div className="relative size-full overflow-hidden rounded-[19px]">
                <Image src="/assets/noted-coastal-traveler-v2.png" alt="A friend turning back on a coastal walk" fill sizes="200px" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal trigger="mount" y={22} scale={0.95} seconds={0.9} delay={0.84} className="absolute bottom-[7%] left-[0%] w-[47%] rotate-[-4deg]">
            <div className="image-hairline rounded-3xl bg-white p-4 sm:p-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-slate-helper">Saved for Priya</p>
              <p className="mt-2 text-[0.9rem] leading-5 text-portrait-ink sm:text-body">Wants to try the pottery place near the station.</p>
              <p className="mt-3 text-[0.7rem] text-slate-helper">Today, 9:42</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
