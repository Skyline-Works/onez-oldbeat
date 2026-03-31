import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Interlude() {
  return (
    <section className="py-40 sm:py-52 text-center relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-[0.06]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <AnimatedSection animation="reveal-scale">
          <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-8">
            Our Philosophy
          </p>
          <blockquote className="text-cream text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
            오래된 것의
            <br />
            새로운 울림
          </blockquote>
          <p className="text-cream-muted text-base sm:text-lg mt-8 max-w-xl mx-auto leading-relaxed font-light">
            영도의 산업 유산 위에 현대 문화의 에너지를 더해,
            <br className="hidden sm:block" />
            이곳만의 독특한 분위기를 만들어갑니다.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
