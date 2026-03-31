export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  thumbnail: string;
  summary: string;
  content: string;
  category: "공지" | "소식" | "미디어";
}

export interface EventItem {
  slug: string;
  title: string;
  startDate: string;
  endDate: string;
  status: "진행중" | "예정" | "종료";
  thumbnail: string;
  description: string;
  content: string;
  location: string;
  category: "전시" | "공연" | "워크숍" | "팝업" | "기타";
}

export interface SpaceArea {
  id: string;
  name: string;
  description: string;
  images: string[];
  capacity: number;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
