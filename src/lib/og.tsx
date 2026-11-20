import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Shared Open Graph card: warm paper background, eyebrow, big title, name.
export function ogCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #fafaf7 55%, #e9ecf8 100%)",
          color: "#16161a",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#2b3a8c" }}>{eyebrow}</div>
        <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30, color: "#55555f" }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "#2b3a8c", color: "#fafaf7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>
            A
          </div>
          {footer}
        </div>
      </div>
    ),
    ogSize,
  );
}
