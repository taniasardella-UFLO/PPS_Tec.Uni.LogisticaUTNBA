import Link from "next/link";
import { ArrowRight, BookOpenCheck, ClipboardCheck, FileCheck2 } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import { CasesTable } from "@/app/coordinacion/page";
import { ProgressCard } from "@/components/domain-components";

export default function DocentePage() {
  return (
    <AppShell area="docente">
      <PageHeader
        action={
          <Link className="button-primary" href="/docente/expedientes/PPS-2026-0142">
            Evaluar expediente
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        }
        description="Expedientes asignados, PPS0 para revisión, avances, cierres y evaluaciones."
        title="Panel docente"
      />
      <div className="grid gap-4 md:grid-cols-3">
        <ProgressCard detail="Documentación inicial lista para revisar." icon={ClipboardCheck} label="PPS0 en revisión" value="4" />
        <ProgressCard detail="Primeras entregas con feedback pendiente." icon={BookOpenCheck} label="PPS1" value="6" />
        <ProgressCard detail="Cierres listos para evaluación final." icon={FileCheck2} label="Entregas finales" value="2" />
      </div>
      <section className="panel mt-6 overflow-hidden">
        <div className="border-b border-line p-5">
          <h2 className="text-lg font-bold text-ink">Expedientes asignados</h2>
          <p className="text-sm text-muted">Casos de Ing. Laura Fernández.</p>
        </div>
        <CasesTable basePath="/docente/expedientes" />
      </section>
    </AppShell>
  );
}
