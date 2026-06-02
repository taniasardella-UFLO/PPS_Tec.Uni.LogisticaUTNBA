import { AppShell, PageHeader } from "@/components/app-shell";
import { PPS0Form } from "@/components/forms";

export default function PPS0Page() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Formulario inicial dividido en pasos con datos personales, laborales, organización, supervisor, proyecto, cronograma y adjuntos."
        title="Carga PPS0"
      />
      <PPS0Form />
    </AppShell>
  );
}
