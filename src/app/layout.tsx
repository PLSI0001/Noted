import type { Metadata, Viewport } from "next";
import MotionProvider from "@/components/motion/MotionProvider";
import { siteMeta } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noted.example"),
  title: {
    default: siteMeta.title,
    template: "%s | Noted",
  },
  description: siteMeta.description,
  applicationName: siteMeta.name,
  openGraph: {
    type: "website",
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: siteMeta.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-portrait-ink px-5 py-3 text-small font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
