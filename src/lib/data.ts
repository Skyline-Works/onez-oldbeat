import type { NewsItem, EventItem, SpaceArea } from "@/types";
import newsData from "@/data/news.json";
import eventsData from "@/data/events.json";
import spacesData from "@/data/spaces.json";

export function getAllNews(): NewsItem[] {
  return (newsData as NewsItem[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return (newsData as NewsItem[]).find((item) => item.slug === slug);
}

export function getAllEvents(): EventItem[] {
  return (eventsData as EventItem[]).sort(
    (a, b) =>
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getEventsByStatus(
  status: EventItem["status"]
): EventItem[] {
  return getAllEvents().filter((event) => event.status === status);
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return (eventsData as EventItem[]).find((item) => item.slug === slug);
}

export function getAllSpaces(): SpaceArea[] {
  return spacesData as SpaceArea[];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
