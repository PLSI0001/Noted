export const siteMeta = {
  name: "Noted",
  title: "Noted | Remember them in the details",
  description:
    "A private notebook for the small things people mention, so care never has to rely on memory.",
};

export const siteContent = {
  navigation: {
    brand: "Noted",
    ariaLabel: "Primary navigation",
    openMenuLabel: "Menu",
    closeMenuLabel: "Close menu",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Privacy", href: "#privacy" },
      { label: "Pricing", href: "#pricing" },
      { label: "Journal", href: "#journal" },
    ],
    cta: { label: "Start free", href: "#pricing" },
  },
  hero: {
    eyebrow: "",
    title: "Remember them. In the details.",
    body:
      "A private notebook for the small things people mention, so you can return to the right detail at the moment it matters.",
    primaryCta: { label: "Start free", href: "#pricing" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
  },
  philosophy: {
    title: "Attention is a form of care.",
    body:
      "Noted keeps the details you would otherwise lose: the book they meant to read, the hard week they mentioned, the birthday idea you had too early. Everything stays private, exportable, and yours.",
  },
  featureShowcase: {
    eyebrow: "A gentler memory",
    title: "Four quiet ways to remember.",
    link: { label: "Read about privacy", href: "#privacy" },
  },
  pricing: {
    eyebrow: "Simple pricing",
    title: "Keep five people free. Remember everyone when you are ready.",
    body:
      "You pay for the size of your private archive, not for generated suggestions.",
    note:
      "All prices shown are illustrative for this static product concept. Cancel or export at any time.",
  },
  faq: {
    title: "Questions, answered plainly.",
    body:
      "Noted is built around private attention, not public activity.",
    contact: { label: "Still curious?", href: "mailto:hello@noted.example" },
  },
  journal: {
    eyebrow: "The journal",
    title: "Notes on paying attention.",
    link: { label: "View journal", href: "/blog" },
  },
  bottomCta: {
    title: "Keep the things worth remembering.",
    body:
      "Start with five people for free. Your notes stay private from the first line.",
    primaryCta: { label: "Start remembering", href: "#pricing" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
  },
  footer: {
    brand: "Noted",
    statement:
      "A private notebook for the people you care about. No social feed, no affiliate links, no public profile.",
    assurances: ["Private by default", "Export anytime", "Delete by person"],
    columns: [
      {
        title: "Product",
        links: [
          { label: "How it works", href: "#how-it-works" },
          { label: "Privacy", href: "#privacy" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Read",
        links: [
          { label: "Journal", href: "/blog" },
          { label: "Questions", href: "#faq" },
          { label: "Email us", href: "mailto:hello@noted.example" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy policy", href: "#privacy" },
          {
            label: "Terms",
            href: "mailto:hello@noted.example?subject=Noted%20terms",
          },
          { label: "Data export", href: "#privacy" },
        ],
      },
    ],
    copyright: "© 2026 Noted. Built for private attention.",
  },
  notFound: {
    eyebrow: "Page not found",
    title: "This note is not here.",
    body: "Return to the notebook and keep looking after what matters.",
    cta: { label: "Back to Noted", href: "/" },
  },
  blogIndex: {
    eyebrow: "The journal",
    title: "Notes on paying attention.",
    body:
      "Practical essays about memory, care, privacy, and the small details that hold relationships together.",
    backLabel: "Back to Noted",
    readLabel: "Read article",
  },
  blogPost: {
    backLabel: "Back to the journal",
    relatedLabel: "Keep reading",
    homeLabel: "Noted",
  },
} as const;
