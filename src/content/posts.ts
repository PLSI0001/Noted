export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  category: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "remembering-without-performing",
    title: "Remembering without performing",
    summary:
      "Private attention feels different from public proof. That difference matters.",
    date: "12 Aug 2026",
    readingTime: "4 min read",
    category: "Privacy",
    body: [
      "There is a kind of remembering that asks to be seen. A birthday post, a public tribute, a photograph arranged for everyone else. Those gestures can be generous, but they are not the only shape attention can take.",
      "Private attention is quieter. It is bringing the right book because someone mentioned it once. It is asking how the difficult meeting went without needing a reminder from a feed.",
      "A private notebook protects that quietness. The note exists to support the relationship, not to turn the relationship into content.",
      "That is why Noted has no public profiles or social activity. The useful outcome happens elsewhere, between you and the person you remembered.",
    ],
  },
  {
    slug: "the-small-detail-is-the-real-detail",
    title: "The small detail is the real detail",
    summary:
      "Care often arrives through the fragment that seemed too minor to save.",
    date: "06 Aug 2026",
    readingTime: "5 min read",
    category: "Attention",
    body: [
      "Most important details do not announce themselves. They arrive halfway through another story: the room is always cold, the old mug broke, the pottery class looks interesting.",
      "Because the detail is small, we trust ourselves to remember it. Then ordinary days move through us and the fragment disappears.",
      "Writing it down is not an attempt to catalogue a person. It is a way to admit that memory is fallible while attention still matters.",
      "The useful note stays close to the original words. It does not diagnose or summarize the person. It simply keeps a door open for the next conversation.",
    ],
  },
  {
    slug: "a-better-person-page",
    title: "What belongs on a person page?",
    summary:
      "A person is not a contact record. Their page should feel alive, partial, and kind.",
    date: "28 Jul 2026",
    readingTime: "6 min read",
    category: "Product",
    body: [
      "A contact record stores stable facts. A person page holds changing context: what someone is trying, what has been difficult, what made them laugh last month.",
      "The page should never pretend to be complete. It is a trail of moments from one relationship, written from one point of view.",
      "Dates matter because people change. Citations matter because suggestions should return you to what was actually said. Deletion matters because care includes knowing when not to keep something.",
      "A good person page helps you re-enter a conversation with warmth. It never claims to explain the person in front of you.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
