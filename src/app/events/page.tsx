import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventCard from "@/components/events/EventCard";
import { getAllEvents } from "@/lib/data";
import type { EventItem } from "@/types";

export const metadata: Metadata = {
  title: "행사 · 전시",
  description:
    "스페이스 원지와 올드비트 영도에서 열리는 전시, 공연, 워크숍 프로그램을 확인하세요.",
};

function groupByStatus(events: EventItem[]) {
  const active = events.filter((e) => e.status === "진행중");
  const upcoming = events.filter((e) => e.status === "예정");
  const ended = events.filter((e) => e.status === "종료");
  return { active, upcoming, ended };
}

export default function EventsPage() {
  const events = getAllEvents();
  const { active, upcoming, ended } = groupByStatus(events);

  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Events & Exhibitions
          </p>
          <h1 className="text-cream text-4xl sm:text-5xl font-bold mb-4">
            행사 · 전시
          </h1>
          <p className="text-cream-muted text-lg mb-16">
            스페이스 원지와 올드비트 영도에서 열리는 다양한 문화 프로그램입니다.
          </p>
        </AnimatedSection>

        {/* 진행중 */}
        {active.length > 0 && (
          <section className="mb-16">
            <AnimatedSection>
              <h2 className="text-cream text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                진행중
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {active.map((event, i) => (
                <AnimatedSection key={event.slug} delay={i * 0.05}>
                  <EventCard event={event} />
                </AnimatedSection>
              ))}
            </div>
          </section>
        )}

        {/* 예정 */}
        {upcoming.length > 0 && (
          <section className="mb-16">
            <AnimatedSection>
              <h2 className="text-cream text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 border border-cream/40 rounded-full" />
                예정
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((event, i) => (
                <AnimatedSection key={event.slug} delay={i * 0.05}>
                  <EventCard event={event} />
                </AnimatedSection>
              ))}
            </div>
          </section>
        )}

        {/* 종료 */}
        {ended.length > 0 && (
          <section>
            <AnimatedSection>
              <h2 className="text-cream text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-dark-lighter rounded-full" />
                지난 행사
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60">
              {ended.map((event, i) => (
                <AnimatedSection key={event.slug} delay={i * 0.05}>
                  <EventCard event={event} />
                </AnimatedSection>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
