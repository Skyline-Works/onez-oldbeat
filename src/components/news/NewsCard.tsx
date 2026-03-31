import Link from "next/link";
import type { NewsItem } from "@/types";
import { formatDate } from "@/lib/data";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link href={`/news/${news.slug}`} className="group block">
      <article className="bg-dark border border-cream/5 hover:border-accent/30 transition-all duration-500 overflow-hidden">
        {/* Thumbnail */}
        <div className="aspect-[16/10] bg-dark-lighter relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            style={{ backgroundImage: `url(${news.thumbnail})` }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-accent text-[10px] tracking-wider uppercase font-semibold">
              {news.category}
            </span>
            <span className="text-cream-muted/50 text-xs">
              {formatDate(news.date)}
            </span>
          </div>
          <h3 className="text-cream font-bold text-lg leading-snug mb-2 group-hover:text-accent transition-colors">
            {news.title}
          </h3>
          <p className="text-cream-muted text-sm leading-relaxed line-clamp-2">
            {news.summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
