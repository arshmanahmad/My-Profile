import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "6px",
          border: "1px solid rgba(16, 217, 160, 0.35)",
        }}
      >
        <span
          style={{
            fontSize: 18,
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
