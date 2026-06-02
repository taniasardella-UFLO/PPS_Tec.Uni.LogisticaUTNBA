import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import { StatusBadge } from "@/components/status-badge";

export default function ModalidadPage() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Seleccioná la modalidad de PPS. Esta maqueta desarrolla especialmente el flujo laboral."
        title="Selección de modalidad"
      />
      <div className="grid gap-5 md:grid-cols-2">
        <article className="panel border-2 border-institution p-5">
          <div className="flex items-start justify-between gap-3">
            <BriefcaseBusiness aria-hidden="true" className="size-8 text-institution" />
            <StatusBadge label="Seleccionada" tone="ok" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-ink">Modalidad Laboral</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Para estudiantes que acreditan práctica desde su organización o lugar de trabajo actual.
          </p>
          <Link className="button-primary mt-5" href="/dashboard/expediente">
            Crear expediente
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </article>
        <article className="panel p-5">
          <GraduationCap aria-hidden="true" className="size-8 text-institution" />
          <h2 className="mt-4 text-xl font-bold text-ink">Modalidad Académica</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Flujo preparado para una futura iteración con requisitos y circuito propio.
          </p>
          <button className="button-secondary mt-5" type="button">
            Ver próximamente
          </button>
        </article>
      </div>
    </AppShell>
  );
}
