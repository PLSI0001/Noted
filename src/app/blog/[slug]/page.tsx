import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getPost, posts } from "@/content/posts";
import { siteContent } from "@/content/site";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

const imageBySlug: Record<string, string> = {
  "remembering-without-performing": "/assets/noted-handwritten-note-v2.png",
  "the-small-detail-is-the-real-detail": "/assets/noted-golden-retriever-v2.png",
  "a-better-person-page": "/assets/noted-coastal-traveler-v2.png",
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const content = siteContent.blogPost;
  const currentIndex = posts.findIndex((entry) => entry.slug === slug);
  const relatedPost = posts[(currentIndex + 1) % posts.length];

  return (
    <main id="main-content" className="min-h-[100dvh] overflow-x-hidden bg-white pb-24 text-portrait-ink">
      <Container className="pt-4">
        <header className="flex h-14 items-center justify-between rounded-[28px] border border-charcoal-outline/[0.08] bg-white px-5 shadow-float">
          <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-[-0.03em] text-portrait-ink">
            <span className="brand-swatch size-2.5 rounded-[3px]" aria-hidden="true" />
            {content.homeLabel}
          </Link>
          <Link href="/blog" className="text-small font-medium text-slate-helper hover:text-portrait-ink">{content.backLabel}</Link>
        </header>
      </Container>

      <article>
        <Container className="pt-24 md:pt-36">
          <div className="mx-auto max-w-[900px]">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.69rem] font-semibold uppercase tracking-[0.1em] text-slate-helper">
              <span>{post.category}</span><time>{post.date}</time><span>{post.readingTime}</span>
            </div>
            <h1 className="mt-7 max-w-[12ch] text-display-1 text-portrait-ink">{post.title}</h1>
            <p className="mt-8 max-w-[58ch] text-body-lg text-graphite-body">{post.summary}</p>
          </div>

          <div className="relative mx-auto mt-14 aspect-[16/9] max-w-[1120px] overflow-hidden rounded-3xl">
            <Image src={imageBySlug[slug]} alt="" fill priority sizes="(max-width: 1200px) 100vw, 1120px" className="object-cover" />
          </div>

          <div className="mx-auto mt-16 max-w-[720px] md:mt-24">
            <div className="grid gap-8">
              {post.body.map((paragraph, index) => (
                <p key={paragraph} className={`${index === 0 ? "text-[1.35rem] leading-[1.5] tracking-[-0.02em]" : "text-body-lg"} text-graphite-body`}>{paragraph}</p>
              ))}
            </div>

            <aside className="mt-20 rounded-3xl border border-charcoal-outline/[0.08] bg-sky-wash/55 p-7 md:p-10">
              <p className="text-[0.69rem] font-semibold uppercase tracking-[0.11em] text-slate-helper">{content.relatedLabel}</p>
              <h2 className="mt-5 text-h3 text-portrait-ink">{relatedPost.title}</h2>
              <p className="mt-4 text-body text-graphite-body">{relatedPost.summary}</p>
              <Link href={`/blog/${relatedPost.slug}`} className="mt-7 inline-block border-b border-portrait-ink/25 pb-1 text-body font-medium text-portrait-ink hover:border-portrait-ink">Read the note ↗</Link>
            </aside>
          </div>
        </Container>
      </article>
    </main>
  );
}
