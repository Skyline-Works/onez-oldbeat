import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import EventCard from "@/components/events/EventCard";
import { getEventsByStatus } from "@/lib/data";

export default function EventHighlight() {
  const activeEvents = getEventsByStatus("진행중");
  const upcomingEvents = getEventsByStatus("예정");
  const events = [...activeEvents, ...upcomingEvents].slice(0, 3);

  if (events.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
                Events & Exhibitions
              </p>
              <h2 className="text-cream text-3xl sm:text-4xl font-bold">
                행사 · 전시
              </h2>
            </div>
            <Button href="/events" variant="ghost" className="hidden sm:inline-flex">
              모두 보기 →
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <AnimatedSection key={event.slug} delay={i * 0.1}>
              <EventCard event={event} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button href="/events" variant="outline">
            모든 행사 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
