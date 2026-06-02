import { AppShell, PageHeader } from "@/components/app-shell";
import { SignatureCard } from "@/components/domain-components";
import { SignatureModal } from "@/components/forms";

export default function FirmasPage() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Simulación de firma electrónica con consentimiento, identidad, fecha, IP, user agent, hash y comprobante."
        title="Firma electrónica"
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <SignatureModal />
        <SignatureCard />
      </div>
    </AppShell>
  );
}
