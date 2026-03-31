import Link from "next/link";
import type { EventItem } from "@/types";
import { formatDate } from "@/lib/data";

interface EventCardProps {
  event: EventItem;
}

const statusColors: Record<EventItem["status"], string> = {
  진행중: "bg-accent text-dark",
  예정: "border border-cream/30 text-cream",
  종료: "bg-dark-lighter text-cream-muted",
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`} className="group block">
      <article className="bg-dark border border-cream/5 hover:border-accent/30 transition-all duration-500 overflow-hidden">
        {/* Thumbnail */}
        <div className="aspect-[16/10] bg-dark-lighter relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            style={{ backgroundImage: `url(${event.thumbnail})` }}
          />
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-block px-3 py-1 text-[10px] tracking-wider uppercase font-semibold ${statusColors[event.status]}`}
            >
              {event.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-accent text-[10px] tracking-wider uppercase font-semibold">
              {event.category}
            </span>
            <span className="text-cream-muted/50 text-xs">
              {formatDate(event.startDate)}
              {event.startDate !== event.endDate &&
                ` — ${formatDate(event.endDate)}`}
            </span>
          </div>
          <h3 className="text-cream font-bold text-lg leading-snug mb-2 group-hover:text-accent transition-colors">
            {event.title}
          </h3>
          <p className="text-cream-muted text-sm leading-relaxed line-clamp-2">
            {event.description}
          </p>
          <p className="text-cream-muted/50 text-xs mt-3">
            📍 {event.location}
          </p>
        </div>
      </article>
    </Link>
  );
}
