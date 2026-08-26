import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function C9BottomCTA() {
  return (
    <section id="start" className="pb-32 pt-32 md:pb-48 md:pt-48">
      <Container>
        <div className="paper-card relative overflow-hidden rounded-3xl p-6 md:p-10 lg:p-16">
          <div aria-hidden="true" className="soft-hero-halo absolute -right-36 -top-52 size-[38rem] rounded-full" />
          <div className="relative z-10 grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="max-w-[9ch] text-display-2 text-portrait-ink">
                Keep what is worth <em className="rainbow-text font-medium">remembering.</em>
              </h2>
              <p className="mt-7 max-w-[43ch] text-body-lg text-graphite-body">
                Start with five people for free. Your notes stay private from the first line, and your archive is always yours to take with you.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#pricing">Start remembering</Button>
                <Button href="#how-it-works" variant="ghost">See how it works ↗</Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rotate-[2deg] rounded-3xl border border-charcoal-outline/[0.08] bg-white p-3 shadow-paper">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[19px]">
                  <Image src="/assets/noted-handwritten-note-v2.png" alt="A small handwritten note being passed between two people" fill sizes="(max-width: 1024px) 100vw, 430px" className="object-cover" />
                </div>
                <div className="flex items-center justify-between gap-5 p-4 pb-2 pt-5">
                  <div>
                    <p className="font-semibold text-portrait-ink">Your private memory shelf</p>
                    <p className="mt-1 text-small text-slate-helper">Five people, free forever</p>
                  </div>
                  <span className="brand-swatch size-3 shrink-0 rounded-[3px]" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
