import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import {
  DocumentChecklist,
  HoursCounter,
  ProgressCard,
  SignatureCard,
} from "@/components/domain-components";
import { dashboardCards, quickActions } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        action={
          <Link className="button-primary" href="/dashboard/pps0">
            Continuar trámite
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        }
        description="Tu expediente está casi completo. Solo falta la firma del Supervisor de Campo para avanzar a revisión de Coordinación."
        title="Dashboard estudiante"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardCards.map((card) => (
          <ProgressCard key={card.label} {...card} />
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.7fr]">
        <DocumentChecklist />
        <div className="grid gap-6">
          <HoursCounter />
          <section className="panel p-5">
            <h2 className="text-lg font-bold text-ink">Próximo paso recomendado</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Enviar recordatorio al Supervisor de Campo o abrir la pantalla de firmas para
              completar la conformidad.
            </p>
            <div className="mt-4 grid gap-2">
              {quickActions.map((action) => (
                <Link className="button-secondary justify-start" href={action.href} key={action.href}>
                  <action.icon aria-hidden={true} className="size-4" />
                  {action.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="mt-6">
        <SignatureCard />
      </div>
    </AppShell>
  );
}
