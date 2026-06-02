import Link from "next/link";
import { ArrowRight, FileWarning, PenLine } from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import { AuditTrail, ObservationThread, ProgressCard } from "@/components/domain-components";
import { StatusBadge } from "@/components/status-badge";
import { assignedCases, coordinationMetrics } from "@/lib/mock-data";

const metricIcons = [FileWarning, PenLine, FileWarning, PenLine, FileWarning];

export default function CoordinacionPage() {
  return (
    <AppShell area="coordinacion">
      <PageHeader
        action={
          <Link className="button-primary" href="/coordinacion/expedientes/PPS-2026-0142">
            Gestionar expediente
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        }
        description="Panel para revisar documentación, firmas, observaciones, auditoría y estados del proceso PPS."
        title="Panel coordinación"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {coordinationMetrics.map((metric, index) => (
          <ProgressCard
            detail="Vista mock de indicadores operativos."
            icon={metricIcons[index]}
            key={metric.label}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </div>
      <section className="panel mt-6 overflow-hidden">
        <div className="border-b border-line p-5">
          <h2 className="text-lg font-bold text-ink">Expedientes pendientes</h2>
          <p className="text-sm text-muted">Priorizados por próximo responsable y estado documental.</p>
        </div>
        <CasesTable basePath="/coordinacion/expedientes" />
      </section>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ObservationThread />
        <AuditTrail />
      </div>
    </AppShell>
  );
}

export function CasesTable({ basePath }: { basePath: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-paper text-xs uppercase tracking-[0.12em] text-muted">
          <tr>
            <th className="px-5 py-3">Expediente</th>
            <th className="px-5 py-3">Estudiante</th>
            <th className="px-5 py-3">Estado</th>
            <th className="px-5 py-3">Próximo paso</th>
            <th className="px-5 py-3">Horas</th>
            <th className="px-5 py-3">Acción</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line bg-white">
          {assignedCases.map((item) => (
            <tr key={item.id}>
              <td className="px-5 py-4 font-semibold text-ink">{item.id}</td>
              <td className="px-5 py-4 text-muted">{item.student}</td>
              <td className="px-5 py-4">
                <StatusBadge label={item.status} />
              </td>
              <td className="px-5 py-4 text-muted">{item.next}</td>
              <td className="px-5 py-4 text-muted">{item.hours} h</td>
              <td className="px-5 py-4">
                <Link className="button-secondary min-h-9 px-3" href={`${basePath}/${item.id}`}>
                  Abrir
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
