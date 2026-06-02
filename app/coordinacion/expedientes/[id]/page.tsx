import { CheckCircle2, RotateCcw, Send } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import {
  AuditTrail,
  DocumentsTable,
  ExpedienteSummary,
  ObservationThread,
  ProcessTimeline,
  SignatureCard,
} from "@/components/domain-components";

export default async function GestionExpedientePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell area="coordinacion">
      <PageHeader
        description={`Vista integral de ${id}: documentos, firmas, auditoría, observaciones y acciones de estado.`}
        title="Gestión de expediente"
      />
      <div className="grid gap-6">
        <ExpedienteSummary />
        <section className="panel p-5">
          <h2 className="text-lg font-bold text-ink">Acciones de Coordinación</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Las acciones cambian el estado del expediente y generan eventos de auditoría.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="button-primary" type="button">
              <CheckCircle2 aria-hidden="true" className="size-4" />
              Aprobar documentación inicial
            </button>
            <button className="button-secondary" type="button">
              <RotateCcw aria-hidden="true" className="size-4" />
              Solicitar correcciones
            </button>
            <button className="button-secondary" type="button">
              <Send aria-hidden="true" className="size-4" />
              Derivar a Docente Evaluador
            </button>
          </div>
        </section>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="panel p-5">
            <h2 className="mb-4 text-lg font-bold text-ink">Estado del proceso</h2>
            <ProcessTimeline />
          </section>
          <DocumentsTable />
        </div>
        <SignatureCard />
        <div className="grid gap-6 lg:grid-cols-2">
          <ObservationThread />
          <AuditTrail />
        </div>
      </div>
    </AppShell>
  );
}
