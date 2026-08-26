"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteContent } from "@/content/site";
import { X } from "@/lib/icons";
import { ease, spring } from "@/lib/motion";

export default function C1StickyNavigation() {
  const content = siteContent.navigation;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    const next = value > 24;
    setScrolled((current) => (current === next ? current : next));
  });

  return (
    <section id="navigation" className="pointer-events-none fixed inset-x-0 top-0 z-[80] pt-3 md:pt-4">
      <Container>
        <motion.nav
          aria-label={content.ariaLabel}
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: ease.out }}
          className={`pointer-events-auto relative mx-auto flex h-14 max-w-[1120px] items-center justify-between rounded-[28px] border border-charcoal-outline/[0.08] bg-white px-3 pl-5 transition-[box-shadow,transform] duration-500 md:px-4 md:pl-6 ${
            scrolled || menuOpen ? "shadow-float" : "shadow-[0_4px_24px_rgba(0,0,0,.025)]"
          }`}
        >
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2.5 text-[1.05rem] font-semibold tracking-[-0.035em] text-portrait-ink"
          >
            <span className="brand-swatch size-2.5 rounded-[3px] transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
            {content.brand}
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {content.links.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-3 text-small font-medium text-slate-helper transition-colors hover:text-portrait-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            <Button href="#journal" variant="ghost" className="min-h-10 px-4 py-2 text-small">
              Read the journal
            </Button>
            <Button href={content.cta.href} className="min-h-10 px-5 py-2 text-small">
              {content.cta.label}
            </Button>
          </div>

          <motion.button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? content.closeMenuLabel : content.openMenuLabel}
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.94 }}
            transition={spring.press}
            className="grid min-h-10 min-w-12 place-items-center rounded-full bg-sky-wash px-3 text-small font-medium text-portrait-ink lg:hidden"
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : "Menu"}
          </motion.button>
        </motion.nav>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: ease.out }}
              className="paper-card pointer-events-auto mx-auto mt-2 max-w-[1120px] overflow-hidden rounded-3xl bg-white p-3 lg:hidden"
            >
              <div className="grid">
                {content.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3.5 text-body font-medium text-slate-helper transition-colors hover:bg-sky-wash hover:text-portrait-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <Button href={content.cta.href} onClick={() => setMenuOpen(false)} className="mt-2 w-full">
                {content.cta.label}
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </section>
  );
}
