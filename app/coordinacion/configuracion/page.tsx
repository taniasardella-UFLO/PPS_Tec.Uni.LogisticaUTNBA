import { CalendarClock, FileText, Mail, ShieldCheck } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import { schemaEntities, validationRules } from "@/lib/mock-data";
import { supabaseSchema } from "@/lib/supabase-schema";

export default function ConfiguracionPage() {
  return (
    <AppShell area="coordinacion">
      <PageHeader
        description="Configuración mock de fechas, requisitos, plantillas, textos legales, roles y notificaciones."
        title="Configuración de proceso"
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <ConfigCard icon={CalendarClock} title="Fechas de entregas" value="PPS1 habilitado 30/06/2026" />
        <ConfigCard icon={FileText} title="Plantillas" value="PPS0, PPS1, PPS1 Final" />
        <ConfigCard icon={ShieldCheck} title="Reglas" value={`${validationRules.length} validaciones activas`} />
        <ConfigCard icon={Mail} title="Notificaciones" value="Email y centro de avisos" />
      </div>
      <section className="panel mt-6 p-5">
        <h2 className="text-lg font-bold text-ink">Modelo de datos preparado</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {schemaEntities.map((entity) => (
            <span className="rounded-full border border-line bg-paper px-3 py-1 text-sm font-semibold text-muted" key={entity}>
              {entity}
            </span>
          ))}
        </div>
      </section>
      <section className="panel mt-6 p-5">
        <h2 className="text-lg font-bold text-ink">SQL inicial Supabase</h2>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-[#17202a] p-4 text-sm leading-6 text-white">
          <code>{supabaseSchema}</code>
        </pre>
      </section>
    </AppShell>
  );
}

function ConfigCard({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  value: string;
}) {
  return (
    <article className="panel p-5">
      <Icon aria-hidden={true} className="size-6 text-institution" />
      <h2 className="mt-4 font-bold text-ink">{title}</h2>
      <p className="mt-2 text-sm text-muted">{value}</p>
    </article>
  );
}
