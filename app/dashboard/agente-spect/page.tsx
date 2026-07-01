import { AppShell, PageHeader } from "@/components/app-shell";
import { SpectAgentModule } from "@/components/spect-agent-module";

export default function AgenteSpectDashboardPage() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Marco operativo para orientar el modulo PPS Talentia, con decisiones trazables y configuracion por institucion."
        title="Asistente PPS"
      />
      <SpectAgentModule embedded />
    </AppShell>
  );
}
