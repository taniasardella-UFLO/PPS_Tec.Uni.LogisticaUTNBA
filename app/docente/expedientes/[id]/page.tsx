import { CheckCircle2, RotateCcw } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import {
  DocumentsTable,
  ExpedienteSummary,
  ObservationThread,
  ProcessTimeline,
  SignatureCard,
} from "@/components/domain-components";
import { TeacherEvaluationForm } from "@/components/forms";

export default async function EvaluacionDocentePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell area="docente">
      <PageHeader
        description={`Evaluación académica de ${id}: documentación, rúbrica, comentarios, aprobación, observación y firma.`}
        title="Evaluación docente"
      />
      <div className="grid gap-6">
        <ExpedienteSummary />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="panel p-5">
            <h2 className="mb-4 text-lg font-bold text-ink">Proceso</h2>
            <ProcessTimeline compact />
          </section>
          <TeacherEvaluationForm />
        </div>
        <section className="panel p-5">
          <h2 className="text-lg font-bold text-ink">Acciones docentes</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="button-primary" type="button">
              <CheckCircle2 aria-hidden="true" className="size-4" />
              Aprobar y firmar
            </button>
            <button className="button-secondary" type="button">
              <RotateCcw aria-hidden="true" className="size-4" />
              Observar entrega
            </button>
          </div>
        </section>
        <DocumentsTable />
        <div className="grid gap-6 lg:grid-cols-2">
          <ObservationThread />
          <SignatureCard />
        </div>
      </div>
    </AppShell>
  );
}
