import Hero from "@/components/home/Hero";
import SpaceIntro from "@/components/home/SpaceIntro";
import Interlude from "@/components/home/Interlude";
import EventHighlight from "@/components/home/EventHighlight";
import LatestNews from "@/components/home/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <SpaceIntro />
      <Interlude />
      <EventHighlight />
      <LatestNews />
    </>
  );
}
