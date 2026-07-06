"use client";

import Image from "next/image";
import { brandAssets } from "@/lib/data";

interface LogoProps {
  height?: number;
  showWordmark?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  linked?: boolean;
}

export function LogoMark({
  height = 48,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={brandAssets.logo}
      alt="ARSHMANDEV logo"
      width={620}
      height={614}
      className={`shrink-0 w-auto object-contain object-left ${className}`}
      style={{ height }}
      priority
    />
  );
}

export default function Logo({
  height = 48,
  showWordmark = true,
  className = "",
  onClick,
  href = "#home",
  linked = true,
}: LogoProps) {
  const content = (
    <>
      <LogoMark
        height={height}
        className="transition-transform duration-400 ease-premium group-hover:scale-[1.03]"
      />
      {showWordmark && (
        <span className="font-sans text-lg font-semibold tracking-tight text-foreground">
          <span className="text-foreground">ARSHMAN</span>
          <span className="gradient-text">DEV</span>
        </span>
      )}
    </>
  );

  const sharedClass = `inline-flex items-center gap-2.5 group ${className}`;

  if (linked) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={sharedClass}
        aria-label="ARSHMANDEV — Home"
      >
        {content}
      </a>
    );
  }

  return <div className={sharedClass}>{content}</div>;
}
