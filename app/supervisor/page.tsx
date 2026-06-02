import Link from "next/link";
import { ArrowRight, CheckCircle2, PenLine, Users } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import { CasesTable } from "@/app/coordinacion/page";
import { ProgressCard, SignatureCard } from "@/components/domain-components";

export default function SupervisorPage() {
  return (
    <AppShell area="supervisor">
      <PageHeader
        action={
          <Link className="button-primary" href="/supervisor/expedientes/PPS-2026-0142">
            Revisar expediente
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        }
        description="Expedientes asignados, estudiantes pendientes de revisión, firmas y feedback desde la organización."
        title="Portal Supervisor"
      />
      <div className="grid gap-4 md:grid-cols-3">
        <ProgressCard detail="Requieren acción del supervisor." icon={PenLine} label="Firmas pendientes" value="2" />
        <ProgressCard detail="Avances listos para feedback." icon={Users} label="Feedback pendiente" value="1" />
        <ProgressCard detail="Horas confirmadas en expedientes." icon={CheckCircle2} label="Horas validadas" value="425" />
      </div>
      <section className="panel mt-6 overflow-hidden">
        <div className="border-b border-line p-5">
          <h2 className="text-lg font-bold text-ink">Mis estudiantes</h2>
          <p className="text-sm text-muted">Casos asignados a Carlos Méndez.</p>
        </div>
        <CasesTable basePath="/supervisor/expedientes" />
      </section>
      <div className="mt-6">
        <SignatureCard />
      </div>
    </AppShell>
  );
}
