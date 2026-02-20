import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020d0b",
          borderRadius: "24px",
          border: "2px solid rgba(16, 217, 160, 0.4)",
        }}
      >
        <span
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#10d9a0",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
