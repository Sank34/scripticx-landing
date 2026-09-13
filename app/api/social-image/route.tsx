import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const geistFont = readFile(
  join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"),
);
const logoFile = readFile(join(process.cwd(), "public/logoSCX.svg"), "utf8");
const logoTextFile = readFile(join(process.cwd(), "public/logo-text.png"));

function cleanText(value: string | null, fallback: string, maxLength: number) {
  const cleaned = (value || fallback)
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (cleaned.length <= maxLength) return cleaned;
  const shortened = cleaned.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return (lastSpace > maxLength * 0.65 ? shortened.slice(0, lastSpace) : shortened) + "…";
}

function cleanPath(value: string | null) {
  const path = cleanText(value, "/", 80).split(/[?#]/)[0];
  return path.startsWith("/") ? path : `/${path}`;
}

function getRouteTheme(path: string) {
  if (path.startsWith("/education")) {
    return { accent: "#15803d", tint: "#dcfce7", line: "#86efac" };
  }

  if (path.startsWith("/development")) {
    return { accent: "#6d28d9", tint: "#ede9fe", line: "#c4b5fd" };
  }

  if (path.startsWith("/platform")) {
    return { accent: "#0369a1", tint: "#e0f2fe", line: "#7dd3fc" };
  }

  if (
    path.startsWith("/knowledge") ||
    path.startsWith("/docs") ||
    path.startsWith("/legal") ||
    path.startsWith("/trust")
  ) {
    return { accent: "#a16207", tint: "#fef3c7", line: "#fcd34d" };
  }

  if (path.startsWith("/partners")) {
    return { accent: "#be123c", tint: "#ffe4e6", line: "#fda4af" };
  }

  if (path.startsWith("/members")) {
    return { accent: "#7e22ce", tint: "#f3e8ff", line: "#d8b4fe" };
  }

  if (path.startsWith("/verify")) {
    return { accent: "#0f766e", tint: "#ccfbf1", line: "#5eead4" };
  }

  return { accent: "#047857", tint: "#d1fae5", line: "#6ee7b7" };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = cleanText(
    searchParams.get("title"),
    "Education, development and programming.",
    82,
  );
  const description = cleanText(
    searchParams.get("description"),
    "Education, software development and a platform for learning, projects and collaboration.",
    158,
  );
  const section = cleanText(searchParams.get("section"), "ScripticX", 46);
  const pagePath = cleanPath(searchParams.get("path"));
  const displayPath = pagePath === "/" ? "scripticx.org" : `scripticx.org${pagePath}`;
  const titleSize = title.length > 68 ? 50 : title.length > 48 ? 58 : 68;
  const theme = getRouteTheme(pagePath);
  const [fontData, logoSvg, logoText] = await Promise.all([
    geistFont,
    logoFile,
    logoTextFile,
  ]);
  const logoDataUrl =
    "data:image/svg+xml;base64," + Buffer.from(logoSvg).toString("base64");
  const logoTextDataUrl =
    "data:image/png;base64," + Buffer.from(logoText).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#fafaf8",
          color: "#101112",
          fontFamily: "Geist",
          padding: "54px 62px 48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            display: "flex",
            border: "1px solid rgba(16,17,18,0.09)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 188,
            height: 4,
            display: "flex",
            backgroundColor: theme.accent,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 48,
          }}
          >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={logoTextDataUrl}
              width={143}
              height={33}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={logoDataUrl}
              width={44}
              height={31}
              style={{ marginLeft: 1 }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderLeft: `3px solid ${theme.accent}`,
              paddingLeft: 13,
              color: "rgba(16,17,18,0.52)",
              fontSize: 14,
              letterSpacing: "0.11em",
              textTransform: "uppercase",
            }}
          >
            {section}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "72%",
              display: "flex",
              flexDirection: "column",
              paddingRight: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                maxWidth: 790,
                fontSize: titleSize,
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: "-0.047em",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 735,
                marginTop: 24,
                color: "rgba(16,17,18,0.56)",
                fontSize: 21,
                lineHeight: 1.42,
                letterSpacing: "-0.012em",
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              width: 274,
              height: 286,
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 2,
                width: 218,
                height: 218,
                display: "flex",
                border: "1px solid rgba(16,17,18,0.12)",
                borderRadius: 28,
                transform: "rotate(7deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 7,
                bottom: 10,
                width: 218,
                height: 218,
                display: "flex",
                border: `1px solid ${theme.line}`,
                borderRadius: 28,
                backgroundColor: theme.tint,
                transform: "rotate(-5deg)",
              }}
            />
            <div
              style={{
                position: "relative",
                width: 206,
                height: 206,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(16,17,18,0.12)",
                borderRadius: 25,
                backgroundColor: "rgba(255,255,255,0.88)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={logoDataUrl} width={146} height={104} />
            </div>
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: 24,
                width: 74,
                height: 9,
                display: "flex",
                backgroundColor: theme.accent,
              }}
            />
          </div>
        </div>

        <div
          style={{
            position: "relative",
            height: 42,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(16,17,18,0.1)",
            paddingTop: 18,
            color: "rgba(16,17,18,0.43)",
            fontSize: 14,
          }}
        >
          <span style={{ letterSpacing: "0.02em" }}>Practice deliberately.</span>
          <span>{displayPath}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    },
  );
}
