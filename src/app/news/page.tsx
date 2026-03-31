import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NewsCard from "@/components/news/NewsCard";
import { getAllNews } from "@/lib/data";

export const metadata: Metadata = {
  title: "소식",
  description: "스페이스원지와 올드비트 영도의 주요 소식을 확인하세요.",
};

export default function NewsPage() {
  const news = getAllNews();

  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            News
          </p>
          <h1 className="text-cream text-4xl sm:text-5xl font-bold mb-4">
            소식
          </h1>
          <p className="text-cream-muted text-lg mb-16">
            스페이스원지와 올드비트 영도의 새로운 소식을 전합니다.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 0.05}>
              <NewsCard news={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
