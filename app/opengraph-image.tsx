import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630
};
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
          padding: 64,
          background:
            "radial-gradient(circle at top left, rgba(97,135,100,0.35), transparent 34%), linear-gradient(135deg, #07120f 0%, #0f1d18 55%, #1A312C 100%)",
          color: "#F7FAF8",
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 22,
              background: "#1A312C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, letterSpacing: "-0.02em", fontWeight: 700 }}>{siteConfig.name}</div>
            <div style={{ fontSize: 18, color: "#C8D8CA" }}>AI-powered personal finance dashboard</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "stretch" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 58, lineHeight: 1.05, fontWeight: 700, letterSpacing: "-0.04em", maxWidth: 780 }}>
              Take control of every rupee with AI-powered financial intelligence.
            </div>
            <div style={{ marginTop: 22, fontSize: 28, lineHeight: 1.4, color: "#DDE8DF", maxWidth: 700 }}>
              Track expenses, plan budgets, and grow savings with a premium fintech dashboard.
            </div>
          </div>

          <div
            style={{
              width: 340,
              borderRadius: 32,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ fontSize: 16, color: "#C8D8CA", textTransform: "uppercase", letterSpacing: "0.2em" }}>Monthly net worth</div>
              <div style={{ fontSize: 44, fontWeight: 700, marginTop: 12 }}>INR 3,84,200</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["INR 24,000 housing", "INR 15,300 food", "INR 18,500 savings"].map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.08)",
                    padding: "12px 16px",
                    fontSize: 18
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
