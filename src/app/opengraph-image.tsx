import { ImageResponse } from "next/og";

export const alt = "Anthony Gonzalez — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f1edf7",
          background:
            "radial-gradient(circle at 75% 35%, #4822ad 0%, #181126 28%, #09080f 64%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 22, fontWeight: 800 }}>ANTHONDEV</span>
          <span style={{ fontSize: 18, color: "#b8adc9" }}>
            PORTFOLIO / 2026
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "serif",
              fontSize: 112,
              lineHeight: 0.9,
              letterSpacing: "-6px",
            }}
          >
            AI Engineer
          </span>
          <span style={{ marginTop: 30, fontSize: 28, color: "#c9bedc" }}>
            Intelligent products · thoughtful engineering · creative direction
          </span>
        </div>
      </div>
    ),
    size,
  );
}
