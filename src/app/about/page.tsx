import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "소개",
  description:
    "스페이스원지와 올드비트 영도의 이야기. 부산 영도의 역사와 문화를 잇는 복합문화공간입니다.",
};

export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <AnimatedSection>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            About Us
          </p>
          <h1 className="text-cream text-4xl sm:text-6xl font-bold mb-8 leading-tight">
            영도의 기억 위에
            <br />
            새로운 이야기를 쓰다
          </h1>
        </AnimatedSection>

        {/* Intro image placeholder */}
        <AnimatedSection>
          <div className="aspect-[21/9] bg-dark-lighter mb-20 overflow-hidden">
            <div className="w-full h-full bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-50" />
          </div>
        </AnimatedSection>

        {/* Story */}
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="mb-20">
              <h2 className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
                Our Story
              </h2>
              <p className="text-cream text-xl sm:text-2xl leading-relaxed mb-8">
                부산항 영도. 한때 대한민국 조선업의 심장이었던 이곳에
                스페이스원지와 올드비트 영도가 자리 잡았습니다.
              </p>
              <p className="text-cream-muted leading-loose">
                영도의 역사적 건물을 리노베이션하여 탄생한 이 공간은,
                과거의 흔적을 보존하면서도 현대적인 문화와 미식의 경험을
                제공합니다. 거친 콘크리트 벽과 높은 철골 천장 아래에서
                예술가의 작품을 감상하고, 영도 바다를 바라보며 셰프의
                정성이 담긴 요리를 즐길 수 있습니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-20">
              <h2 className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
                Philosophy
              </h2>
              <p className="text-cream text-xl sm:text-2xl leading-relaxed mb-8">
                맛과 예술, 그리고 사람이 만나는 곳.
              </p>
              <p className="text-cream-muted leading-loose">
                스페이스원지는 &quot;하나의 공간에서 다양한 경험을&quot;이라는
                철학으로 운영됩니다. 레스토랑에서의 미식, 갤러리에서의
                예술, 루프탑에서의 공연, 워크숍에서의 창작까지 — 방문할
                때마다 새로운 경험이 기다립니다.
              </p>
              <p className="text-cream-muted leading-loose mt-6">
                올드비트 영도는 &quot;오래된 것의 새로운 울림&quot;을 의미합니다.
                영도의 산업 유산이 가진 거친 아름다움에 현대 문화의
                에너지를 더해, 이곳만의 독특한 분위기를 만들어갑니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
              {[
                { number: "2025", label: "오픈 연도" },
                { number: "4", label: "문화 공간" },
                { number: "365", label: "일의 이야기" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-8 border border-cream/10">
                  <p className="text-accent text-3xl sm:text-4xl font-bold mb-2">
                    {stat.number}
                  </p>
                  <p className="text-cream-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center">
              <p className="text-cream text-xl mb-8">
                직접 방문하여 영도의 새로운 이야기를 경험해보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/space">공간 안내</Button>
                <Button href="/reservation" variant="outline">
                  예약하기
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
