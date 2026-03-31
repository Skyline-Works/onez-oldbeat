import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { getEventsByStatus, formatDate } from "@/lib/data";
import type { EventItem } from "@/types";

const statusBadge: Record<EventItem["status"], string> = {
  진행중: "bg-accent text-white",
  예정: "border border-cream/30 text-cream",
  종료: "bg-dark-lighter text-cream-muted",
};

export default function EventHighlight() {
  const activeEvents = getEventsByStatus("진행중");
  const upcomingEvents = getEventsByStatus("예정");
  const events = [...activeEvents, ...upcomingEvents].slice(0, 3);

  if (events.length === 0) return null;

  const featured = events[0];
  const rest = events.slice(1);

  return (
    <section className="py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-4">
                Events & Exhibitions
              </p>
              <h2 className="text-cream text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                행사 · 전시
              </h2>
            </div>
            <Button href="/events" variant="ghost" className="hidden sm:inline-flex">
              모두 보기 →
            </Button>
          </div>
        </AnimatedSection>

        {/* Featured event — large */}
        <AnimatedSection animation="reveal-scale">
          <Link href={`/events/${featured.slug}`} className="group block mb-8">
            <div className="relative aspect-[21/9] overflow-hidden bg-dark-lighter">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
                style={{ backgroundImage: `url(${featured.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 text-[10px] tracking-wider uppercase font-semibold ${statusBadge[featured.status]}`}>
                    {featured.status}
                  </span>
                  <span className="text-cream-muted text-xs">
                    {formatDate(featured.startDate)}
                    {featured.startDate !== featured.endDate && ` — ${formatDate(featured.endDate)}`}
                  </span>
                </div>
                <h3 className="text-cream text-2xl sm:text-4xl font-bold group-hover:text-accent transition-colors">
                  {featured.title}
                </h3>
                <p className="text-cream/60 text-sm sm:text-base mt-3 max-w-2xl">
                  {featured.description}
                </p>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Rest */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((event, i) => (
              <AnimatedSection key={event.slug} delay={i * 0.1}>
                <Link href={`/events/${event.slug}`} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-dark-lighter">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                      style={{ backgroundImage: `url(${event.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className={`inline-block px-2 py-0.5 text-[10px] tracking-wider uppercase font-semibold mb-2 ${statusBadge[event.status]}`}>
                        {event.status}
                      </span>
                      <h3 className="text-cream text-lg sm:text-xl font-bold group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-cream-muted text-xs mt-1">
                        {formatDate(event.startDate)} · {event.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
