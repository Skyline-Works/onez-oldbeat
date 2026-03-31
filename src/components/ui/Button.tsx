import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-accent text-dark hover:bg-accent-hover font-semibold",
  outline:
    "border border-cream/30 text-cream hover:border-accent hover:text-accent",
  ghost:
    "text-cream hover:text-accent",
};

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center px-6 py-3 text-sm tracking-wider uppercase transition-all duration-300 ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
