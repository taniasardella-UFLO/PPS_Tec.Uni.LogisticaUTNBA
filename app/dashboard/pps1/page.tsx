import { AppShell, PageHeader } from "@/components/app-shell";
import { PPS1Form } from "@/components/forms";

export default function PPS1Page() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Primera entrega de avance con actividades realizadas, horas del período, evidencias, próximos pasos y firmas."
        title="Primera entrega PPS1"
      />
      <PPS1Form />
    </AppShell>
  );
}
