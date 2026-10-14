import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { shareImage } from "@/lib/seo";

export const runtime = "nodejs";

export async function GET() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/btg-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        background: "#263135",
        color: "#F1EDE2",
        padding: "72px 84px",
      }}
    >
      {/* The seal is transparent. Keep its native proportions. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} alt="" width={248} height={248} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 64,
          maxWidth: 720,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.045em",
          }}
        >
          Business Technologies Guelph
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 34,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: "#F1EDE2",
          }}
        >
          Where Business Meets Tech
        </div>
      </div>
    </div>,
    {
      width: shareImage.width,
      height: shareImage.height,
      headers: {
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    },
  );
}
