import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { getNewsBySlug, getAllNews, formatDate } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  if (!news) return { title: "소식을 찾을 수 없습니다" };
  return {
    title: news.title,
    description: news.summary,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);

  if (!news) notFound();

  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <Link
            href="/news"
            className="text-cream-muted text-sm hover:text-accent transition-colors mb-8 inline-block"
          >
            ← 소식 목록으로
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-[10px] tracking-wider uppercase font-semibold">
              {news.category}
            </span>
            <span className="text-cream-muted/50 text-xs">
              {formatDate(news.date)}
            </span>
          </div>

          <h1 className="text-cream text-3xl sm:text-4xl font-bold mb-8 leading-tight">
            {news.title}
          </h1>

          {/* Thumbnail */}
          <div className="aspect-[16/9] bg-dark-lighter mb-10 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center opacity-70"
              style={{ backgroundImage: `url(${news.thumbnail})` }}
            />
          </div>

          {/* Content */}
          <div className="text-cream-muted leading-loose text-base whitespace-pre-line">
            {news.content}
          </div>

          <div className="mt-16 pt-8 border-t border-cream/10">
            <Button href="/news" variant="outline">
              ← 목록으로 돌아가기
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
