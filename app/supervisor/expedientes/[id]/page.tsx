import { AppShell, PageHeader } from "@/components/app-shell";
import {
  DocumentsTable,
  ExpedienteSummary,
  HoursCounter,
  SignatureCard,
} from "@/components/domain-components";
import { SignatureModal, SupervisorFeedbackForm } from "@/components/forms";

export default async function RevisionSupervisorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell area="supervisor">
      <PageHeader
        description={`Revisión segura de ${id}: datos de estudiante, organización, proyecto, cronograma, horas, firma y feedback.`}
        title="Revisión de expediente"
      />
      <div className="grid gap-6">
        <ExpedienteSummary />
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <HoursCounter />
          <DocumentsTable />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <SignatureModal />
          <SupervisorFeedbackForm />
        </div>
        <SignatureCard />
      </div>
    </AppShell>
  );
}
