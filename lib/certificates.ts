import { createClient } from "@supabase/supabase-js";

type CertificateRow = {
  code: string;
  recipient_name: string;
  event_name: string;
  certificate_title: string;
  issued_at: string;
  status: "valid" | "revoked" | "expired";
};

export type PublicCertificate = {
  code: string;
  recipientName: string;
  eventName: string;
  certificateTitle: string;
  issuedAt: string;
  status: "valid" | "revoked" | "expired";
};

function normalizeSupabaseUrl(url: string) {
  return new URL(url).origin;
}

function getCertificatesSupabase() {
  const url = process.env.CERTIFICATES_SUPABASE_URL;
  const serviceRoleKey = process.env.CERTIFICATES_SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Missing certificates Supabase environment variables.");
  }

  return createClient(normalizeSupabaseUrl(url), serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function normalizeCertificateCode(code: string) {
  return code.trim().replace(/\s+/g, "");
}

export async function getCertificateByCode(code: string) {
  const normalizedCode = normalizeCertificateCode(code);

  if (!normalizedCode) {
    return null;
  }

  const { data, error } = await getCertificatesSupabase()
    .from("certificates")
    .select(
      "code, recipient_name, event_name, certificate_title, issued_at, status"
    )
    .eq("code", normalizedCode)
    .maybeSingle<CertificateRow>();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  return {
    code: data.code,
    recipientName: data.recipient_name,
    eventName: data.event_name,
    certificateTitle: data.certificate_title,
    issuedAt: data.issued_at,
    status: data.status,
  } satisfies PublicCertificate;
}
