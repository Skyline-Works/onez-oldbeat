import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { getAllSpaces } from "@/lib/data";

export const metadata: Metadata = {
  title: "공간 안내",
  description:
    "스페이스 원지 레스토랑, 올드비트 갤러리, 루프탑, 워크숍룸 — 각 공간을 소개합니다.",
};

export default function SpacePage() {
  const spaces = getAllSpaces();

  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Our Spaces
          </p>
          <h1 className="text-cream text-4xl sm:text-5xl font-bold mb-4">
            공간 안내
          </h1>
          <p className="text-cream-muted text-lg mb-16">
            각 공간의 특성과 가능한 활용 방법을 소개합니다.
          </p>
        </AnimatedSection>

        <div className="space-y-24">
          {spaces.map((space, i) => (
            <AnimatedSection key={space.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image Grid */}
                <div className={`grid grid-cols-2 gap-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  {space.images.map((img, j) => (
                    <div
                      key={j}
                      className={`bg-dark-lighter overflow-hidden ${
                        j === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                      }`}
                    >
                      <div
                        className="w-full h-full bg-cover bg-center opacity-50 hover:opacity-70 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} lg:px-8`}>
                  <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-3">
                    Space {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-cream text-2xl sm:text-3xl font-bold mb-4">
                    {space.name}
                  </h2>
                  <p className="text-cream-muted leading-relaxed mb-8">
                    {space.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-cream text-sm font-semibold mb-3">
                      주요 특징
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {space.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 border border-cream/10 text-cream-muted text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-cream-muted text-sm mb-6">
                    수용 인원: 최대 <span className="text-cream">{space.capacity}명</span>
                  </p>

                  <Button href="/reservation" variant="outline">
                    대관 문의
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
