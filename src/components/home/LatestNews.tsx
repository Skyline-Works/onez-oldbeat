import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { getAllNews, formatDate } from "@/lib/data";

export default function LatestNews() {
  const news = getAllNews().slice(0, 4);
  if (news.length === 0) return null;

  return (
    <section className="py-32 sm:py-40 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-4">
                Latest News
              </p>
              <h2 className="text-cream text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                주요 소식
              </h2>
            </div>
            <Button href="/news" variant="ghost" className="hidden sm:inline-flex">
              모두 보기 →
            </Button>
          </div>
        </AnimatedSection>

        {/* Horizontal list — editorial style */}
        <div className="space-y-0 divide-y divide-cream/5">
          {news.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 0.08}>
              <Link
                href={`/news/${item.slug}`}
                className="group flex items-center gap-8 py-8 sm:py-10 hover:pl-4 transition-all duration-500"
              >
                <span className="hidden sm:block text-cream-muted/30 text-5xl font-bold tabular-nums min-w-[3ch]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent text-[10px] tracking-wider uppercase font-semibold">
                      {item.category}
                    </span>
                    <span className="text-cream-muted/40 text-xs">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className="text-cream text-xl sm:text-2xl font-bold group-hover:text-accent transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-cream-muted text-sm mt-1 line-clamp-1 max-w-2xl">
                    {item.summary}
                  </p>
                </div>
                <span className="text-cream-muted/20 group-hover:text-accent transition-colors text-2xl">
                  →
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Button href="/news" variant="outline">
            모든 소식 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
