"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  Hash,
  LockKeyhole,
  LoaderCircle,
  Search,
  ShieldCheck,
  Trophy,
  UserRound,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type VerificationState =
  | { status: "idle" }
  | { status: "valid"; certificate: CertificateDetails }
  | { status: "invalid"; code: string }
  | { status: "error" };

type CertificateDetails = {
  code: string;
  recipientName: string;
  eventName: string;
  certificateTitle: string;
  issuedAt: string;
};

type VerifyCertificateResponse =
  | {
      valid: true;
      certificate: CertificateDetails & {
        status: "valid" | "revoked" | "expired";
      };
    }
  | {
      valid: false;
      code?: string;
      status?: "not_found" | "revoked" | "expired";
      error?: string;
    };

const DEMO_CODE = "0001";

const trustItems = [
  { id: "official", icon: FileCheck2, number: "01" },
  { id: "public", icon: Search, number: "02" },
  { id: "private", icon: LockKeyhole, number: "03" },
] as const;

function normalizeCode(value: string) {
  return value.trim().replace(/\s+/g, "").toUpperCase();
}

export default function CertificateVerification() {
  const t = useTranslations("VerifyCertificate");
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<VerificationState>({ status: "idle" });
  const normalizedCode = useMemo(() => normalizeCode(code), [code]);

  async function verifyCode(codeToVerify: string) {
    const normalized = normalizeCode(codeToVerify);

    if (!normalized) {
      setResult({ status: "idle" });
      return;
    }

    setIsSubmitting(true);
    setResult({ status: "idle" });

    try {
      const response = await fetch("/api/verify-certificate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: normalized }),
      });

      if (!response.ok) {
        setResult({ status: "error" });
        return;
      }

      const payload = (await response.json()) as VerifyCertificateResponse;

      if (payload.valid) {
        setResult({
          status: "valid",
          certificate: payload.certificate,
        });
        return;
      }

      setResult({ status: "invalid", code: payload.code ?? normalized });
    } catch {
      setResult({ status: "error" });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void verifyCode(normalizedCode);
  }

  const displayedCertificate =
    result.status === "valid" ? result.certificate : null;
  const details = [
    {
      icon: UserRound,
      label: t("result.valid.fields.recipient"),
      value:
        displayedCertificate?.recipientName ??
        t("result.valid.demo.recipient"),
    },
    {
      icon: Trophy,
      label: t("result.valid.fields.award"),
      value:
        displayedCertificate?.certificateTitle ??
        t("result.valid.demo.award"),
    },
    {
      icon: FileCheck2,
      label: t("result.valid.fields.event"),
      value:
        displayedCertificate?.eventName ?? t("result.valid.demo.event"),
    },
    {
      icon: CalendarDays,
      label: t("result.valid.fields.issuedAt"),
      value:
        displayedCertificate?.issuedAt ?? t("result.valid.demo.issuedAt"),
    },
    {
      icon: Hash,
      label: t("result.valid.fields.code"),
      value: displayedCertificate?.code ?? DEMO_CODE,
    },
  ];

  return (
    <main className="overflow-hidden pt-16">
      <section className="relative isolate border-b">
        <div className="sx-hero-aura pointer-events-none absolute inset-0 -z-20 opacity-75" />
        <div className="sx-grid-fade pointer-events-none absolute inset-0 -z-10 opacity-70" />

        <div className="grid min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(28rem,.92fr)] lg:grid-rows-[minmax(0,1fr)_auto]">
          <div className="order-1 flex items-center px-5 py-14 sm:px-8 sm:py-16 lg:col-start-1 lg:row-start-1 lg:px-12 lg:py-20 xl:px-16 2xl:px-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ScripticX / {t("badge")}
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
                {t("title")}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {t("description")}
              </p>
            </div>
          </div>

          <div className="order-2 flex items-center border-t bg-muted/20 p-5 sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:border-l lg:border-t-0 lg:p-10 xl:p-14">
            <div className="w-full border bg-background">
              <div className="border-b p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {t("badge")} / 01
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      {t("form.title")}
                    </h2>
                  </div>
                  <div className="flex size-10 shrink-0 items-center justify-center border bg-muted/30">
                    <FileCheck2 className="size-4" />
                  </div>
                </div>
                <p
                  id="certificate-code-hint"
                  className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground"
                >
                  {t("form.description")}
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="certificate-code"
                    className="text-sm font-medium"
                  >
                    {t("form.label")}
                  </label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
                    <Input
                      id="certificate-code"
                      value={code}
                      onChange={(event) => {
                        setCode(event.target.value);
                        setResult({ status: "idle" });
                      }}
                      placeholder={t("form.placeholder")}
                      className="h-12 rounded-[var(--sx-radius-control)] bg-background px-4 font-mono tracking-[0.18em] uppercase shadow-none"
                      autoComplete="off"
                      aria-describedby="certificate-code-hint"
                      aria-invalid={result.status === "invalid"}
                    />
                    <Button
                      type="submit"
                      className="h-12 px-6"
                      disabled={!normalizedCode || isSubmitting}
                    >
                      {isSubmitting ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        <Search />
                      )}
                      {isSubmitting ? t("form.checking") : t("form.submit")}
                    </Button>
                  </div>
                </form>

                <div className="mt-6" aria-live="polite">
                  <VerificationResult
                    result={result}
                    details={details}
                    isSubmitting={isSubmitting}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-3 px-5 pb-14 sm:px-8 sm:pb-16 lg:col-start-1 lg:row-start-2 lg:px-12 lg:pb-20 xl:px-16 2xl:px-24">
            <div className="grid border-l border-t sm:grid-cols-3">
              {trustItems.map(({ id, icon: Icon, number }) => (
                <article
                  key={id}
                  className="min-h-44 border-b border-r bg-background/55 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-4" />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {number}
                    </span>
                  </div>
                  <h2 className="mt-8 text-sm font-semibold">
                    {t("trust." + id + ".title")}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {t("trust." + id + ".description")}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function VerificationResult({
  result,
  details,
  isSubmitting,
}: {
  result: VerificationState;
  details: Array<{
    icon: LucideIcon;
    label: string;
    value: string;
  }>;
  isSubmitting: boolean;
}) {
  const t = useTranslations("VerifyCertificate");

  if (isSubmitting) {
    return (
      <ResultShell resultKey="loading">
        <div className="border bg-muted/30 p-5">
          <div className="flex items-center gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center border bg-background">
              <LoaderCircle className="size-4 animate-spin" />
            </div>
            <div>
              <h3 className="font-semibold">{t("result.loading.title")}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {t("result.loading.description")}
              </p>
            </div>
          </div>
        </div>
      </ResultShell>
    );
  }

  if (result.status === "idle") {
    return (
      <ResultShell resultKey="idle">
        <Alert className="rounded-[var(--sx-radius-card)] bg-muted/30 p-4 shadow-none">
          <ShieldCheck className="size-4" />
          <AlertTitle>{t("result.idle.title")}</AlertTitle>
          <AlertDescription>{t("result.idle.description")}</AlertDescription>
        </Alert>
      </ResultShell>
    );
  }

  if (result.status === "invalid") {
    return (
      <ResultShell resultKey="invalid">
        <Alert className="rounded-[var(--sx-radius-card)] border-red-200 bg-red-50 p-4 text-red-950 shadow-none">
          <XCircle className="size-4 text-red-600" />
          <AlertTitle>{t("result.invalid.title")}</AlertTitle>
          <AlertDescription className="text-red-900/75">
            {t("result.invalid.description", { code: result.code })}
          </AlertDescription>
        </Alert>
      </ResultShell>
    );
  }

  if (result.status === "error") {
    return (
      <ResultShell resultKey="error">
        <Alert className="rounded-[var(--sx-radius-card)] border-amber-200 bg-amber-50 p-4 text-amber-950 shadow-none">
          <XCircle className="size-4 text-amber-600" />
          <AlertTitle>{t("result.error.title")}</AlertTitle>
          <AlertDescription className="text-amber-900/75">
            {t("result.error.description")}
          </AlertDescription>
        </Alert>
      </ResultShell>
    );
  }

  return (
    <ResultShell resultKey="valid">
      <div className="border border-emerald-200 bg-emerald-50/70">
        <div className="flex flex-col gap-4 border-b border-emerald-200 p-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-3">
            <motion.div
              initial={{ scale: 0.75, rotate: -12 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="flex size-10 shrink-0 items-center justify-center bg-emerald-600 text-white"
            >
              <CheckCircle2 className="size-5" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-emerald-950">
                {t("result.valid.title")}
              </h3>
              <p className="mt-1 text-sm leading-6 text-emerald-950/70">
                {t("result.valid.description")}
              </p>
            </div>
          </div>
          <span className="w-fit border border-emerald-300 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-900">
            {t("result.valid.badge")}
          </span>
        </div>

        <div className="grid border-l border-t border-emerald-200 sm:grid-cols-2">
          {details.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.06 + index * 0.045,
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "border-b border-r border-emerald-200 bg-white/75 p-4",
                index === details.length - 1 && "sm:col-span-2"
              )}
            >
              <div className="flex gap-3">
                <Icon className="mt-0.5 size-4 shrink-0 text-emerald-700" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="mt-1 break-words font-medium text-emerald-950">
                    {value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ResultShell>
  );
}

function ResultShell({
  children,
  resultKey,
}: {
  children: React.ReactNode;
  resultKey: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={resultKey}
        initial={
          reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(4px)" }
        }
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: -6, filter: "blur(3px)" }
        }
        transition={{
          duration: reduceMotion ? 0 : 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
