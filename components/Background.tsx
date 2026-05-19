"use client";

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Pure white base */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft indigo glow — top left */}
      <div
        className="absolute"
        style={{
          top: "-20%",
          left: "-10%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Soft cyan glow — bottom right */}
      <div
        className="absolute"
        style={{
          bottom: "-15%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
