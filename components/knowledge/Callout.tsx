import type { ReactNode } from "react";
import { CircleAlert, Info, ShieldCheck } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

type CalloutProps = {
  children: ReactNode;
  title?: string;
  type?: "info" | "warning" | "security";
};

export function Callout({
  children,
  title = "Good to know",
  type = "info",
}: CalloutProps) {
  const Icon =
    type === "warning" ? CircleAlert : type === "security" ? ShieldCheck : Info;

  return (
    <Alert
      className={cn(
        "mt-6 gap-x-3 rounded-xl px-4 py-4",
        type === "security" && "border-green-500/30 bg-green-50/70",
        type === "warning" && "border-amber-500/30 bg-amber-50/70"
      )}
    >
      <Icon className="mt-0.5 size-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="[&_p]:mt-1 [&_p]:leading-6">
        {children}
      </AlertDescription>
    </Alert>
  );
}
