import { AppShell, PageHeader } from "@/components/app-shell";
import {
  AuditTrail,
  DocumentsTable,
  ExpedienteSummary,
  ObservationThread,
  ProcessTimeline,
} from "@/components/domain-components";

export default function ExpedientePage() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Vista completa del expediente PPS: estado, documentos, firmas, observaciones e historial de cambios."
        title="Expediente PPS"
      />
      <div className="grid gap-6">
        <ExpedienteSummary />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="panel p-5">
            <h2 className="mb-4 text-lg font-bold text-ink">Timeline del proceso</h2>
            <ProcessTimeline />
          </section>
          <DocumentsTable />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <ObservationThread />
          <AuditTrail />
        </div>
      </div>
    </AppShell>
  );
}
