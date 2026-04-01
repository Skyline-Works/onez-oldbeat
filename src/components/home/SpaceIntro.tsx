"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const spaces = [
  {
    name: "스페이스 원지",
    sub: "SPACE ONE.Z",
    description:
      "영도 바다가 내려다보이는 모던 양식 레스토랑. 부산 로컬 식재료로 만든 시즌별 코스 다이닝과 함께 특별한 미식 경험을 제공합니다.",
    image: "/images/space-wonji-intro.jpg",
    href: "/space",
  },
  {
    name: "올드비트 영도",
    sub: "OLD BEAT YEONGDO",
    description:
      "영도의 역사를 품은 복합문화공간. 갤러리, 공연장, 루프탑을 갖추고 전시, 공연, 워크숍 등 다양한 문화 프로그램을 운영합니다.",
    image: "/images/oldbeat-intro.jpg",
    href: "/space",
  },
];

function ParallaxImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const y = (progress - 0.5) * -60;
      ref.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={ref}
        className="absolute inset-[-10%] bg-cover bg-center parallax-img"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-dark/40" />
    </div>
  );
}

export default function SpaceIntro() {
  return (
    <section>
      {/* Section title */}
      <div className="py-32 sm:py-40 text-center">
        <AnimatedSection>
          <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-6">
            Our Spaces
          </p>
          <h2 className="text-cream text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
            두 개의 공간,
            <br />
            하나의 이야기
          </h2>
        </AnimatedSection>
      </div>

      {/* Space sections — full-bleed cinematic */}
      {spaces.map((space, i) => (
        <div key={space.name} className="relative h-screen flex items-center overflow-hidden">
          <ParallaxImage src={space.image} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className={`max-w-lg ${i % 2 === 1 ? "ml-auto text-right" : ""}`}>
              <AnimatedSection animation={i % 2 === 0 ? "reveal-left" : "reveal-right"}>
                <p className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4">
                  {space.sub}
                </p>
                <h3 className="text-cream text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                  {space.name}
                </h3>
                <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 font-light">
                  {space.description}
                </p>
                <Button href={space.href} variant="outline">
                  자세히 보기
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
