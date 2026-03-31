import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-cream font-bold tracking-widest uppercase text-sm mb-4">
              Space Wonji & Old Beat Yeongdo
            </h3>
            <p className="text-cream-muted text-sm leading-relaxed">
              부산 영도의 복합문화공간.
              <br />
              레스토랑, 갤러리, 공연, 워크숍이
              <br />
              하나로 어우러진 공간입니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cream font-semibold text-xs tracking-wider uppercase mb-4">
              바로가기
            </h4>
            <ul className="space-y-2">
              {[
                { label: "소개", href: "/about" },
                { label: "소식", href: "/news" },
                { label: "행사", href: "/events" },
                { label: "공간 안내", href: "/space" },
                { label: "예약·대관", href: "/reservation" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream-muted text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold text-xs tracking-wider uppercase mb-4">
              연락처
            </h4>
            <ul className="space-y-2 text-cream-muted text-sm">
              <li>부산광역시 영도구 대평로 27번길 8</li>
              <li>TEL. 051-000-0000</li>
              <li>EMAIL. hello@spacewonji.com</li>
              <li className="pt-2">
                영업시간: 화~일 11:00 - 22:00
                <br />
                <span className="text-cream-muted/60">월요일 휴무</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-cream-muted hover:text-accent transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-cream-muted hover:text-accent transition-colors text-sm"
                aria-label="Blog"
              >
                Blog
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/5 text-center">
          <p className="text-cream-muted/40 text-xs tracking-wider">
            © 2025 Space Wonji & Old Beat Yeongdo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
