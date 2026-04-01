"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const eventTypes = [
  "전시",
  "공연/콘서트",
  "워크숍/클래스",
  "기업 행사",
  "프라이빗 파티",
  "촬영",
  "기타",
];

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, send to API route or email service
    setSubmitted(true);
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Reservation & Rental
          </p>
          <h1 className="text-cream text-4xl sm:text-5xl font-bold mb-4">
            예약 · 대관
          </h1>
          <p className="text-cream-muted text-lg mb-16">
            레스토랑 예약은 네이버 예약을 통해, 공간 대관은 아래 문의 폼을
            이용해주세요.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Naver Reservation */}
          <AnimatedSection>
            <div className="bg-dark-light border border-cream/10 p-8 sm:p-10">
              <h2 className="text-cream text-2xl font-bold mb-2">
                레스토랑 예약
              </h2>
              <p className="text-cream-muted text-sm mb-8 leading-relaxed">
                스페이스 원지 레스토랑은 네이버 예약을 통해 예약하실 수 있습니다.
                런치 코스와 디너 코스 중 선택해주세요.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 border border-cream/5 flex justify-between items-center">
                  <div>
                    <p className="text-cream font-semibold">런치 코스</p>
                    <p className="text-cream-muted text-sm">화~일 11:30 - 14:00</p>
                  </div>
                  <p className="text-accent font-bold">50,000원</p>
                </div>
                <div className="p-4 border border-cream/5 flex justify-between items-center">
                  <div>
                    <p className="text-cream font-semibold">디너 코스</p>
                    <p className="text-cream-muted text-sm">화~일 18:00 - 21:00</p>
                  </div>
                  <p className="text-accent font-bold">80,000원</p>
                </div>
              </div>

              <Button href="#" external className="w-full">
                네이버 예약하기
              </Button>

              <p className="text-cream-muted/50 text-xs mt-4 text-center">
                네이버 예약 페이지로 이동합니다
              </p>
            </div>

            {/* Venue quick info */}
            <div className="mt-6 bg-dark-light border border-cream/10 p-8 sm:p-10">
              <h3 className="text-cream font-bold mb-4">행사 예약</h3>
              <p className="text-cream-muted text-sm mb-4 leading-relaxed">
                재즈 나이트, 워크숍 등 행사 예약도 네이버 예약을 통해 가능합니다.
              </p>
              <Button href="/events" variant="outline" className="w-full">
                행사 일정 확인하기
              </Button>
            </div>
          </AnimatedSection>

          {/* Right: Venue Rental Form */}
          <AnimatedSection delay={0.1}>
            <div className="bg-dark-light border border-cream/10 p-8 sm:p-10">
              <h2 className="text-cream text-2xl font-bold mb-2">
                공간 대관 문의
              </h2>
              <p className="text-cream-muted text-sm mb-8 leading-relaxed">
                갤러리, 루프탑, 워크숍룸 등 공간 대관을 원하시면 아래 양식을
                작성해주세요. 담당자가 확인 후 연락드립니다.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-accent text-4xl mb-4">✓</p>
                  <p className="text-cream text-xl font-bold mb-2">
                    문의가 접수되었습니다
                  </p>
                  <p className="text-cream-muted text-sm">
                    영업일 기준 2일 이내에 답변드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-cream text-xs tracking-wider uppercase mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-dark border border-cream/10 px-4 py-3 text-cream text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-cream text-xs tracking-wider uppercase mb-2">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full bg-dark border border-cream/10 px-4 py-3 text-cream text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cream text-xs tracking-wider uppercase mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-dark border border-cream/10 px-4 py-3 text-cream text-sm focus:border-accent focus:outline-none transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-cream text-xs tracking-wider uppercase mb-2">
                        희망 일자 *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        className="w-full bg-dark border border-cream/10 px-4 py-3 text-cream text-sm focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-cream text-xs tracking-wider uppercase mb-2">
                        예상 인원
                      </label>
                      <input
                        type="number"
                        name="guests"
                        min={1}
                        className="w-full bg-dark border border-cream/10 px-4 py-3 text-cream text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cream text-xs tracking-wider uppercase mb-2">
                      행사 유형 *
                    </label>
                    <select
                      name="eventType"
                      required
                      className="w-full bg-dark border border-cream/10 px-4 py-3 text-cream text-sm focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">선택해주세요</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-cream text-xs tracking-wider uppercase mb-2">
                      상세 내용
                    </label>
                    <textarea
                      name="details"
                      rows={5}
                      className="w-full bg-dark border border-cream/10 px-4 py-3 text-cream text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="행사 내용, 필요한 장비, 기타 요청사항 등을 자유롭게 적어주세요."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    문의하기
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
