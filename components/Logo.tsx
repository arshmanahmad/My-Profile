"use client";

import { useId } from "react";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  linked?: boolean;
}

export function LogoMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const gradId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="6"
          y1="4"
          x2="26"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3.5L27.5 27H22.8L20.4 21.5H11.6L9.2 27H4.5L16 3.5ZM12.8 17.5H19.2L16 10.2L12.8 17.5Z"
      />
      <path
        d="M10 27.5H22"
        stroke={`url(#${gradId})`}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
    </svg>
  );
}

export default function Logo({
  size = 32,
  showWordmark = true,
  className = "",
  onClick,
  href = "#home",
  linked = true,
}: LogoProps) {
  const content = (
    <>
      <LogoMark
        size={size}
        className="shrink-0 transition-transform group-hover:scale-105"
      />
      {showWordmark && (
        <span className="font-sans text-lg font-bold tracking-tight text-[#F9FAFB]">
          Arshman<span className="text-primary-light"> Ahmad</span>
        </span>
      )}
    </>
  );

  const sharedClass = `flex items-center gap-2.5 group ${className}`;

  if (linked) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={sharedClass}
        aria-label="Arshman Ahmad — Home"
      >
        {content}
      </a>
    );
  }

  return <div className={sharedClass}>{content}</div>;
}
