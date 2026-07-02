import { NextResponse } from "next/server";

import {
  getCertificateByCode,
  normalizeCertificateCode,
} from "@/lib/certificates";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json", valid: false },
      { status: 400 }
    );
  }

  const code =
    typeof body === "object" &&
    body !== null &&
    "code" in body &&
    typeof body.code === "string"
      ? normalizeCertificateCode(body.code)
      : "";

  if (!code) {
    return NextResponse.json(
      { error: "missing_code", valid: false },
      { status: 400 }
    );
  }

  try {
    const certificate = await getCertificateByCode(code);

    if (!certificate || certificate.status !== "valid") {
      return NextResponse.json({
        valid: false,
        code,
        status: certificate?.status ?? "not_found",
      });
    }

    return NextResponse.json({
      valid: true,
      certificate,
    });
  } catch (error) {
    console.error("Certificate verification failed:", error);

    return NextResponse.json(
      { error: "verification_failed", valid: false },
      { status: 500 }
    );
  }
}
