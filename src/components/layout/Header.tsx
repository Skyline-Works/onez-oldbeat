"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "소개", href: "/about" },
  { label: "소식", href: "/news" },
  { label: "행사", href: "/events" },
  { label: "공간", href: "/space" },
  { label: "예약·대관", href: "/reservation" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-cream text-sm font-bold tracking-widest uppercase">
            Space Wonji
          </span>
          <span className="text-cream-muted text-[10px] tracking-wider">
            & Old Beat Yeongdo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-cream/70 text-sm tracking-wider hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="메뉴"
        >
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-b border-cream/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-cream/70 text-lg tracking-wider hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
