"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translate3d(0, ${y * 0.4}px, 0) scale(1)`;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center -mt-[10vh]">
        <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-8 animate-fade-in [animation-delay:300ms]">
          Busan Yeongdo — Culture & Dining
        </p>

        <h1 className="text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter mb-8 animate-fade-up [animation-delay:500ms]">
          스페이스 원지
          <br />
          <span className="text-accent">&</span> 올드비트 영도
        </h1>

        <p className="text-cream-muted text-lg sm:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-bold animate-fade-up [animation-delay:800ms]">
          오래된 항구의 새로운 울림,
          <br />
          맛과 문화가 머무는 공간.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:1100ms]">
          <Button href="/space">공간 둘러보기</Button>
          <Button href="/reservation" variant="outline">
            예약하기
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in [animation-delay:2000ms]">
        <span className="text-cream-muted text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-16 bg-cream/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-accent animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
