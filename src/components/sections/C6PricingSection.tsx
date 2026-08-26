import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { pricingTiers } from "@/content/pricing";

export default function C6PricingSection() {
  return (
    <section id="pricing" className="py-32 md:py-48">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-[10ch] text-display-2 text-portrait-ink lg:col-span-8">
            Start small. Keep your whole <em className="rainbow-text font-medium">circle.</em>
          </h2>
          <p className="max-w-[39ch] text-body-lg text-graphite-body lg:col-span-4">
            Five people are free forever. Pay only when your private archive needs more room.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-3xl border border-charcoal-outline/[0.09] lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`flex min-h-[520px] flex-col p-7 md:p-9 ${
                index > 0 ? "border-t border-charcoal-outline/[0.09] lg:border-l lg:border-t-0" : ""
              } ${tier.highlighted ? "bg-sky-wash/55" : "bg-white"}`}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[1.25rem] font-semibold tracking-[-0.03em] text-portrait-ink">{tier.name}</h3>
                  {tier.highlighted ? (
                    <span className="rounded-full bg-mint-wash px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-nautical-teal">Most loved</span>
                  ) : null}
                </div>
                <div className="mt-9 flex items-end gap-3">
                  <span className="text-[4.6rem] font-semibold leading-none tracking-[-0.06em] text-portrait-ink">{tier.price}</span>
                  <span className="pb-2 text-small text-slate-helper">{tier.cadence}</span>
                </div>
                <p className="mt-5 max-w-[34ch] text-body text-graphite-body">{tier.description}</p>
              </div>

              <ul className="mt-9 grid gap-3 border-t border-charcoal-outline/[0.09] pt-7">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-small text-graphite-body">
                    <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-portrait-ink" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <Button href={tier.href} variant={tier.highlighted ? "primary" : "ghost"} className={tier.highlighted ? "w-full" : "px-0"}>
                  {tier.highlighted ? tier.cta : `Choose ${tier.name.toLowerCase()} →`}
                </Button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-small text-slate-helper">Illustrative product pricing. Cancel or export your archive at any time.</p>
      </Container>
    </section>
  );
}
