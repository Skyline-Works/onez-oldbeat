"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const spaces = [
  {
    name: "스페이스원지",
    sub: "SPACE ONE.Z",
    description:
      "영도 바다가 내려다보이는 모던 한식 레스토랑. 부산 로컬 식재료로 만든 시즌별 코스 다이닝과 함께 특별한 미식 경험을 제공합니다.",
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

export default function SpaceIntro() {
  return (
    <section className="py-24 sm:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Our Spaces
          </p>
          <h2 className="text-cream text-3xl sm:text-5xl font-bold mb-16">
            두 개의 공간,
            <br />
            하나의 이야기
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spaces.map((space, i) => (
            <AnimatedSection key={space.name} delay={i * 0.15}>
              <div className="group relative overflow-hidden bg-dark-light border border-cream/5 hover:border-accent/30 transition-all duration-500">
                {/* Image */}
                <div className="aspect-[4/3] bg-dark-lighter relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    style={{ backgroundImage: `url(${space.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-light via-transparent to-transparent" />
                </div>

                {/* Text */}
                <div className="p-8">
                  <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-2">
                    {space.sub}
                  </p>
                  <h3 className="text-cream text-2xl font-bold mb-4">
                    {space.name}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed mb-6">
                    {space.description}
                  </p>
                  <Button href={space.href} variant="ghost" className="px-0">
                    자세히 보기 →
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
