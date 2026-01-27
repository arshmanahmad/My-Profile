import React from "react";

const Background = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.4), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(99, 102, 241, 0.3), transparent)",
      }}
    />
  </div>
);

export { Background };
