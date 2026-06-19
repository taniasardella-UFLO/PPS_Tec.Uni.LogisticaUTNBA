import { CheckCircle2, Clock3, OctagonAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "ok" | "warn" | "info" | "danger" | "muted";

const toneClass: Record<Tone, string> = {
  ok: "border-[#b8dcc7] bg-[#edf8f1] text-ok",
  warn: "border-[#f1d2aa] bg-[#fff7ed] text-warn",
  info: "border-[#b9d9de] bg-[#edf8fa] text-institution",
  danger: "border-[#efc2bf] bg-[#fff1f0] text-danger",
  muted: "border-line bg-paper text-muted",
};

function inferTone(label: string): Tone {
  const text = label.toLowerCase();
  if (text.includes("aprob") || text.includes("firmado") || text.includes("validado")) {
    return "ok";
  }
  if (text.includes("pendiente") || text.includes("revisión") || text.includes("revision") || text.includes("curso")) {
    return "warn";
  }
  if (text.includes("observ") || text.includes("corrección") || text.includes("rechaz") || text.includes("anul")) {
    return "danger";
  }
  if (text.includes("programado") || text.includes("habilitado")) {
    return "info";
  }
  return "muted";
}

export function StatusBadge({
  label,
  tone,
}: {
  label: string;
  tone?: Tone;
}) {
  const resolvedTone = tone ?? inferTone(label);
  const Icon =
    resolvedTone === "ok" ? CheckCircle2 : resolvedTone === "danger" ? OctagonAlert : Clock3;

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold",
        toneClass[resolvedTone],
      )}
    >
      <Icon aria-hidden={true} className="size-3.5" />
      {label}
    </span>
  );
}
