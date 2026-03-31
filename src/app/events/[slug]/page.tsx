import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { getEventBySlug, getAllEvents, formatDate } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEvents().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "행사를 찾을 수 없습니다" };
  return {
    title: event.title,
    description: event.description,
  };
}

const statusLabels = {
  진행중: { text: "현재 진행중", color: "text-accent" },
  예정: { text: "곧 시작", color: "text-cream" },
  종료: { text: "종료된 행사", color: "text-cream-muted" },
};

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  const label = statusLabels[event.status];

  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <Link
            href="/events"
            className="text-cream-muted text-sm hover:text-accent transition-colors mb-8 inline-block"
          >
            ← 행사 목록으로
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-accent text-[10px] tracking-wider uppercase font-semibold">
              {event.category}
            </span>
            <span className={`text-[10px] tracking-wider uppercase font-semibold ${label.color}`}>
              · {label.text}
            </span>
          </div>

          <h1 className="text-cream text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-cream-muted text-sm mb-8">
            <span>
              📅 {formatDate(event.startDate)}
              {event.startDate !== event.endDate &&
                ` — ${formatDate(event.endDate)}`}
            </span>
            <span>📍 {event.location}</span>
          </div>

          {/* Thumbnail */}
          <div className="aspect-[16/9] bg-dark-lighter mb-10 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center opacity-70"
              style={{ backgroundImage: `url(${event.thumbnail})` }}
            />
          </div>

          {/* Content */}
          <div className="text-cream-muted leading-loose text-base whitespace-pre-line">
            {event.content}
          </div>

          {event.status !== "종료" && (
            <div className="mt-12 p-8 bg-dark-light border border-cream/10">
              <h3 className="text-cream font-bold text-lg mb-4">
                참여하시겠습니까?
              </h3>
              <p className="text-cream-muted text-sm mb-6">
                네이버 예약을 통해 사전 예약이 가능합니다.
              </p>
              <Button href="#" external>
                네이버 예약하기
              </Button>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-cream/10">
            <Button href="/events" variant="outline">
              ← 목록으로 돌아가기
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
