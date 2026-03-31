import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import NewsCard from "@/components/news/NewsCard";
import { getAllNews } from "@/lib/data";

export default function LatestNews() {
  const news = getAllNews().slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
                Latest News
              </p>
              <h2 className="text-cream text-3xl sm:text-4xl font-bold">
                주요 소식
              </h2>
            </div>
            <Button href="/news" variant="ghost" className="hidden sm:inline-flex">
              모두 보기 →
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 0.1}>
              <NewsCard news={item} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button href="/news" variant="outline">
            모든 소식 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
