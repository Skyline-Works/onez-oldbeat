"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder — replace with actual image */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter via-dark to-dark">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent text-xs tracking-[0.3em] uppercase mb-6"
        >
          Busan Yeongdo — Culture & Dining
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          스페이스원지
          <br />
          <span className="text-accent">&</span> 올드비트 영도
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream-muted text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          부산항 영도의 복합문화공간.
          <br />
          맛과 예술이 만나는 곳.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/space">공간 둘러보기</Button>
          <Button href="/reservation" variant="outline">
            예약하기
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-cream/30"
        />
      </motion.div>
    </section>
  );
}
