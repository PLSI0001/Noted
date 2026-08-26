export type PreviewKey = "catch" | "person" | "nudge" | "sift";

export const featureTabs: Array<{
  id: PreviewKey;
  label: string;
  title: string;
  description: string;
}> = [
  {
    id: "catch",
    label: "The Catch",
    title: "Save it before it slips away.",
    description:
      "A single field opens fast, keeps the date, and gets out of your way.",
  },
  {
    id: "person",
    label: "Person pages",
    title: "See the whole person, not a list.",
    description:
      "Every note returns in reverse order, with topics and moments gathered naturally.",
  },
  {
    id: "nudge",
    label: "The Nudge",
    title: "Return at the useful moment.",
    description:
      "Gentle reminders bring old details back before a visit, call, or birthday.",
  },
  {
    id: "sift",
    label: "The Sift",
    title: "Find the thread in your own notes.",
    description:
      "Ask a question and receive a suggestion linked to the exact notes behind it.",
  },
];

export const detailFeatures: Array<{
  title: string;
  body: string;
  meta: string;
  preview: PreviewKey;
}> = [
  {
    title: "Private from the first line.",
    body:
      "Nothing is posted, shared, or turned into a public profile. Export everything, or delete one person cleanly.",
    meta: "Your archive stays yours",
    preview: "person",
  },
  {
    title: "Fast enough for a passing thought.",
    body:
      "Open The Catch, type the fragment, choose a person, and move on before the conversation changes.",
    meta: "Capture in one field",
    preview: "catch",
  },
  {
    title: "Useful before the moment arrives.",
    body:
      "The Nudge groups the things someone mentioned and brings them back when you can act with care.",
    meta: "Timely, never noisy",
    preview: "nudge",
  },
  {
    title: "Suggestions with their receipts.",
    body:
      "The Sift only works across your notes. Every answer points back to the lines that shaped it.",
    meta: "No internet guesswork",
    preview: "sift",
  },
];

export const previewContent = {
  catch: {
    appLabel: "The Catch",
    personLabel: "For",
    person: "Priya",
    fieldLabel: "What did you notice?",
    placeholder: "Type the small thing before it goes",
    initialText: "wants to try that pottery place near the station",
    saveLabel: "Save note",
    savingLabel: "Saving",
    savedLabel: "Saved privately",
    errorLabel: "Write a detail before saving.",
    recentLabel: "Recently caught",
    recentNotes: [
      {
        person: "Mateo",
        date: "Today, 9:42",
        text: "keeps saying his flat is freezing",
      },
      {
        person: "Noor",
        date: "Yesterday",
        text: "the blue mug from her grandmother finally cracked",
      },
    ],
  },
  person: {
    appLabel: "Person page",
    name: "Priya Menon",
    relation: "old friend",
    countLabel: "9 notes",
    summary:
      "Food, making things by hand, her new team, and a winter trip she keeps postponing.",
    notesLabel: "Latest notes",
    notes: [
      {
        date: "12 Aug",
        text: "wants to try that pottery place near the station",
      },
      {
        date: "29 Jul",
        text: "the new manager actually protects her lunch break",
      },
      {
        date: "03 Jun",
        text: "still thinking about a winter train through Hokkaido",
      },
    ],
    privacyLabel: "Visible only to you",
  },
  nudge: {
    appLabel: "The Nudge",
    title: "9 things Priya mentioned",
    body:
      "You are seeing her on Saturday. These may help you pick up the conversation.",
    items: [
      "Ask whether she booked the pottery class.",
      "Bring the novel you promised to lend her.",
      "Her brother starts the new job next week.",
    ],
    laterLabel: "Remind me later",
    doneLabel: "I remember",
    rememberedLabel: "Set aside for Saturday",
  },
  sift: {
    appLabel: "The Sift",
    promptLabel: "Ask your notes",
    prompt: "What could make Priya's birthday feel thoughtful?",
    actionLabel: "Sift notes",
    workingLabel: "Reading your notes",
    answer:
      "Book the Saturday pottery session, then bring the novel she wanted to borrow.",
    citationLabel: "Based on 2 of your notes",
    citations: [
      "12 Aug: wants to try that pottery place near the station",
      "18 May: asked to borrow The Employees",
    ],
    emptyLabel: "Your cited suggestion will appear here.",
  },
} as const;
