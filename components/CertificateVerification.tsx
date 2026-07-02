"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      value: displayedCertificate?.recipientName ?? t("result.valid.demo.recipient"),
    },
    {
      icon: Trophy,
      label: t("result.valid.fields.award"),
      value:
        displayedCertificate?.certificateTitle ?? t("result.valid.demo.award"),
    },
    {
      icon: FileCheck2,
      label: t("result.valid.fields.event"),
      value: displayedCertificate?.eventName ?? t("result.valid.demo.event"),
    },
    {
      icon: CalendarDays,
      label: t("result.valid.fields.issuedAt"),
      value: displayedCertificate?.issuedAt ?? t("result.valid.demo.issuedAt"),
    },
    {
      icon: Hash,
      label: t("result.valid.fields.code"),
      value: displayedCertificate?.code ?? DEMO_CODE,
    },
  ];

  return (
    <main className="overflow-hidden pt-16">
      <section className="relative px-4 py-20 sm:px-6 sm:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_38%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(to_right,rgba(22,101,52,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,101,52,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Badge className="bg-green-100 text-green-900" variant="secondary">
              <ShieldCheck className="size-3.5" />
              {t("badge")}
            </Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {t("description")}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["official", "public", "private"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border bg-white/75 p-4 text-sm shadow-sm backdrop-blur"
                >
                  <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    {item === "official" && <FileCheck2 className="size-4" />}
                    {item === "public" && <Search className="size-4" />}
                    {item === "private" && <LockKeyhole className="size-4" />}
                  </div>
                  <p className="font-medium">{t(`trust.${item}.title`)}</p>
                  <p className="mt-1 leading-6 text-muted-foreground">
                    {t(`trust.${item}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden rounded-[2rem] border bg-white/88 shadow-[0_30px_100px_rgba(22,101,52,0.16)] backdrop-blur">
            <div className="pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-green-200/60 blur-3xl" />
            <CardHeader className="relative gap-3 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <FileCheck2 className="size-6" />
                </div>
              </div>
              <div>
                <CardTitle className="text-2xl font-semibold tracking-tight">
                  {t("form.title")}
                </CardTitle>
                <CardDescription className="mt-2 text-base leading-7">
                  {t("form.description")}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="relative space-y-6 p-6 pt-0 sm:p-8 sm:pt-0">
              <form onSubmit={handleSubmit} className="space-y-3">
                <label
                  htmlFor="certificate-code"
                  className="text-sm font-medium"
                >
                  {t("form.label")}
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    id="certificate-code"
                    value={code}
                    onChange={(event) => {
                      setCode(event.target.value);
                      setResult({ status: "idle" });
                    }}
                    placeholder={t("form.placeholder")}
                    className="h-12 rounded-full bg-white px-5 font-mono tracking-[0.18em] uppercase"
                    autoComplete="off"
                  />
                  <Button
                    type="submit"
                    className="h-12 rounded-full px-6"
                    disabled={!normalizedCode || isSubmitting}
                  >
                    <Search className="size-4" />
                    {isSubmitting ? t("form.checking") : t("form.submit")}
                  </Button>
                </div>
              </form>

              <VerificationResult
                result={result}
                details={details}
                isSubmitting={isSubmitting}
              />
            </CardContent>
          </Card>
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
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <div className="flex items-center gap-4">
            <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-green-700 shadow-sm">
              <div className="absolute inset-0 rounded-2xl bg-green-200/60 blur-md" />
              <LoaderCircle className="relative size-6 animate-spin" />
            </div>
            <div>
              <h3 className="font-semibold text-green-950">
                {t("result.loading.title")}
              </h3>
              <p className="mt-1 text-sm leading-6 text-green-900/75">
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
        <Alert className="rounded-2xl bg-muted/40 p-4">
          <ShieldCheck className="size-4 text-green-700" />
          <AlertTitle>{t("result.idle.title")}</AlertTitle>
          <AlertDescription>{t("result.idle.description")}</AlertDescription>
        </Alert>
      </ResultShell>
    );
  }

  if (result.status === "invalid") {
    return (
      <ResultShell resultKey="invalid">
        <Alert className="rounded-2xl border-red-200 bg-red-50 p-4 text-red-950">
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
        <Alert className="rounded-2xl border-amber-200 bg-amber-50 p-4 text-amber-950">
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
      <div className="rounded-[1.5rem] border border-green-200 bg-green-50 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-3">
            <motion.div
              initial={{ scale: 0.75, rotate: -12 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-white"
            >
              <CheckCircle2 className="size-5" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-green-950">
                {t("result.valid.title")}
              </h3>
              <p className="mt-1 text-sm leading-6 text-green-900/75">
                {t("result.valid.description")}
              </p>
            </div>
          </div>
          <Badge className="w-fit bg-white text-green-900" variant="outline">
            {t("result.valid.badge")}
          </Badge>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {details.map(({ icon: Icon, label, value }, index) => (
            <motion.div
            key={label}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.08 + index * 0.055,
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "rounded-2xl border border-green-200/70 bg-white/80 p-4",
              label.length > 18 && "sm:col-span-2"
            )}
          >
            <div className="flex gap-3">
              <Icon className="mt-0.5 size-4 shrink-0 text-green-700" />
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 font-medium text-green-950">{value}</p>
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
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={resultKey}
        initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
