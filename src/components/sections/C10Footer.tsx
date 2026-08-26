import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/content/site";

export default function C10Footer() {
  const content = siteContent.footer;
  const footerLinks = content.columns.reduce<Array<{ label: string; href: string }>>(
    (all, column) => [...all, ...column.links],
    [],
  );

  return (
    <footer id="footer" className="border-t border-charcoal-outline/[0.08] py-8">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="#hero" className="flex items-center gap-2.5 font-semibold tracking-[-0.03em] text-portrait-ink">
          <span className="brand-swatch size-2.5 rounded-[3px]" aria-hidden="true" />
          {content.brand}
        </Link>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.slice(0, 5).map((link) => (
            <Link key={`${link.label}-${link.href}`} href={link.href} className="text-small text-slate-helper transition-colors hover:text-portrait-ink">{link.label}</Link>
          ))}
        </nav>
        <p className="text-small text-slate-helper">© 2026 Noted</p>
      </Container>
    </footer>
  );
}
