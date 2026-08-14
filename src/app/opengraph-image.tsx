import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}, ${profile.discipline}`;
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
          backgroundColor: "#0b0c0e",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 34, height: 3, backgroundColor: "#d69a5f" }} />
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a8acb3",
            }}
          >
            {profile.role} · {profile.discipline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              letterSpacing: -3,
              color: "#efeeea",
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#a8acb3",
              maxWidth: 880,
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #23262b",
            paddingTop: 30,
            fontSize: 21,
            color: "#8b8f96",
          }}
        >
          <div style={{ display: "flex" }}>MSc Business Analytics &amp; Consultancy</div>
          <div style={{ display: "flex" }}>{profile.location}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
