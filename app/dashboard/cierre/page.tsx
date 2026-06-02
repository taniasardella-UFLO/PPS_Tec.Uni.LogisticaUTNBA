import { AppShell, PageHeader } from "@/components/app-shell";
import { FinalSubmissionForm } from "@/components/forms";

export default function CierrePage() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Entrega final con horas totales, conclusiones, bibliografía, evidencias, feedback final y envío a evaluación."
        title="Entrega final"
      />
      <FinalSubmissionForm />
    </AppShell>
  );
}
