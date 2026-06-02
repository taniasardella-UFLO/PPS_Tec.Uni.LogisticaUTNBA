import { Bell, Mail, Phone } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import { people } from "@/lib/mock-data";

export default function PerfilPage() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Datos personales, carrera, legajo y preferencias de notificación del estudiante."
        title="Perfil"
      />
      <section className="panel p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Info label="Nombre" value={people.student.name} />
          <Info label="Carrera" value={people.student.carrera} />
          <Info label="Legajo" value={people.student.legajo} />
          <Info label="Email académico" value={people.student.email} icon={<Mail aria-hidden="true" className="size-4" />} />
          <Info label="Teléfono" value={people.student.phone} icon={<Phone aria-hidden="true" className="size-4" />} />
          <Info label="Notificaciones" value="Email y avisos del portal" icon={<Bell aria-hidden="true" className="size-4" />} />
        </div>
      </section>
    </AppShell>
  );
}

function Info({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-line bg-white p-4">
      <p className="flex items-center gap-2 text-sm font-semibold text-muted">
        {icon}
        {label}
      </p>
      <p className="mt-2 font-bold text-ink">{value}</p>
    </div>
  );
}
