import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteContent } from "@/content/site";

export default function NotFound() {
  const content = siteContent.notFound;

  return (
    <main id="main-content" className="flex min-h-[100dvh] items-center bg-white py-24 text-portrait-ink">
      <Container>
        <div className="max-w-[780px]">
          <p className="w-fit rounded-full bg-peach-wash px-3 py-1.5 text-meta font-semibold uppercase tracking-[0.14em] text-nautical-teal">{content.eyebrow}</p>
          <h1 className="mt-6 text-display-1 text-portrait-ink">This note is not <em className="rainbow-text font-medium">here.</em></h1>
          <p className="mt-7 max-w-[48ch] text-body-lg text-graphite-body">{content.body}</p>
          <Button href={content.cta.href} className="mt-9">{content.cta.label}</Button>
        </div>
      </Container>
    </main>
  );
}
