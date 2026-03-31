import Hero from "@/components/home/Hero";
import SpaceIntro from "@/components/home/SpaceIntro";
import LatestNews from "@/components/home/LatestNews";
import EventHighlight from "@/components/home/EventHighlight";

export default function Home() {
  return (
    <>
      <Hero />
      <SpaceIntro />
      <EventHighlight />
      <LatestNews />
    </>
  );
}
