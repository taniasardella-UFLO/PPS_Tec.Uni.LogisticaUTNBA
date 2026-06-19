import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Download,
  FileUp,
  Info,
  PenLine,
  Plus,
} from "lucide-react";
import {
  auditEvents,
  caseSummary,
  checklist,
  documents,
  observations,
  processSteps,
  signatures,
} from "@/lib/mock-data";
import { StatusBadge } from "@/components/status-badge";

export function ProgressCard({
  label,
  value,
  detail,
  icon: Icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  return (
    <article className="panel p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-muted">{label}</p>
        <span className="grid size-9 place-items-center rounded-md bg-[#edf8fa] text-institution">
          <Icon aria-hidden={true} className="size-4" />
        </span>
      </div>
      <p className="text-2xl font-bold text-ink">{value}</p>
      <p className="mt-2 text-sm leading-5 text-muted">{detail}</p>
    </article>
  );
}

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="space-y-4">
      {processSteps.map((step, index) => (
        <li className="relative flex gap-4" key={step.title}>
          <div className="flex flex-col items-center">
            <span className="grid size-10 place-items-center rounded-md border border-line bg-white text-institution">
              <step.icon aria-hidden={true} className="size-5" />
            </span>
            {index < processSteps.length - 1 ? (
              <span className="mt-2 h-full min-h-8 w-px bg-line" aria-hidden="true" />
            ) : null}
          </div>
          <div className="min-w-0 pb-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-ink">{step.title}</h3>
              <StatusBadge label={step.status} />
            </div>
            {!compact ? <p className="mt-1 text-sm leading-6 text-muted">{step.description}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DocumentChecklist() {
  return (
    <section className="panel p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-ink">Checklist PPS0</h2>
          <p className="text-sm text-muted">Validaciones automáticas de la documentación inicial.</p>
        </div>
        <StatusBadge label="7/8 listo" tone="warn" />
      </div>
      <div className="space-y-3">
        {checklist.map((item) => (
          <div
            className="grid gap-3 rounded-md border border-line bg-paper p-3 sm:grid-cols-[1fr_auto]"
            key={item.label}
          >
            <div>
              <p className="font-semibold text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.help}</p>
            </div>
            <StatusBadge label={item.status} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function DocumentUploadCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) {
  return (
    <article className="rounded-lg border border-line bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-md bg-[#edf8fa] text-institution">
          <FileUp aria-hidden="true" className="size-5" />
        </span>
        <StatusBadge label={status} />
      </div>
      <h3 className="mt-4 font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-5 text-muted">{description}</p>
      <button className="button-secondary mt-4 w-full" type="button">
        <Plus aria-hidden="true" className="size-4" />
        Cargar archivo
      </button>
    </article>
  );
}

export function SignatureCard() {
  return (
    <section className="panel p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-ink">Firma electrónica con trazabilidad</h2>
          <p className="text-sm leading-6 text-muted">
            Esta maqueta simula un circuito de firma electrónica. La validez jurídica final
            dependerá de la normativa aplicable y del proveedor de firma que la institución adopte.
          </p>
        </div>
        <span className="grid size-10 place-items-center rounded-md bg-[#fff7ed] text-action">
          <PenLine aria-hidden="true" className="size-5" />
        </span>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {signatures.map((signature) => (
          <article className="rounded-lg border border-line bg-paper p-4" key={signature.signer}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-ink">{signature.signer}</p>
                <p className="text-sm text-muted">{signature.role}</p>
              </div>
              <StatusBadge label={signature.status} />
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="font-semibold text-muted">Documento</dt>
                <dd className="text-ink">{signature.document}</dd>
              </div>
              <div>
                <dt className="font-semibold text-muted">Fecha</dt>
                <dd className="text-ink">{signature.signedAt}</dd>
              </div>
              <div>
                <dt className="font-semibold text-muted">Código</dt>
                <dd className="break-all text-ink">{signature.code}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-5">
        <Link className="button-primary" href="/dashboard/firmas">
          Gestionar firmas
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}

export function AuditTrail() {
  return (
    <section className="panel p-5">
      <h2 className="text-lg font-bold text-ink">Auditoría del expediente</h2>
      <div className="mt-4 space-y-3">
        {auditEvents.map((event) => (
          <article className="rounded-md border border-line bg-paper p-3" key={`${event.event}-${event.date}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-ink">{event.event}</p>
              <span className="text-xs font-semibold text-muted">{event.date}</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {event.actor} · {event.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ObservationThread() {
  return (
    <section className="panel p-5">
      <div className="mb-4 flex items-center gap-2">
        <AlertCircle aria-hidden="true" className="size-5 text-warn" />
        <h2 className="text-lg font-bold text-ink">Observaciones</h2>
      </div>
      <div className="space-y-3">
        {observations.map((observation) => (
          <article className="rounded-md border border-line bg-paper p-4" key={observation.message}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-ink">{observation.target}</p>
              <StatusBadge label={observation.status} />
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{observation.message}</p>
            <p className="mt-3 text-xs font-semibold text-muted">
              {observation.author} · {observation.createdAt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HoursCounter() {
  return (
    <section className="panel p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-ink">Cómputo de horas</h2>
          <p className="text-sm text-muted">Horas declaradas y política de carga configurada por carrera.</p>
        </div>
        <StatusBadge label="Política configurable" tone="info" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-line bg-paper p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Horas declaradas</p>
          <p className="mt-1 text-3xl font-bold text-ink">{caseSummary.totalDeclaredHours} h</p>
        </div>
        <div className="rounded-md border border-line bg-paper p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Regla de horas</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-ink">{caseSummary.hoursPolicy}</p>
        </div>
      </div>
    </section>
  );
}

export function ExpedienteSummary() {
  return (
    <section className="panel p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold text-muted">{caseSummary.id}</p>
          <h2 className="mt-1 text-xl font-bold text-ink">{caseSummary.project.topic}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{caseSummary.project.objective}</p>
        </div>
        <StatusBadge label="En revisión por coordinación" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <InfoTile label="Modalidad" value={caseSummary.modality} />
        <InfoTile label="Horas previstas" value={`${caseSummary.totalDeclaredHours} horas`} />
        <InfoTile label="Actualizado" value={caseSummary.updatedAt} />
      </div>
    </section>
  );
}

export function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-paper p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{label}</p>
      <p className="mt-1 font-semibold text-ink">{value}</p>
    </div>
  );
}

export function DocumentsTable() {
  return (
    <section className="panel overflow-hidden">
      <div className="border-b border-line p-5">
        <h2 className="text-lg font-bold text-ink">Documentos del proceso</h2>
        <p className="text-sm text-muted">Versiones preparadas para adjuntos privados y PDFs generados.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-paper text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th className="px-5 py-3">Documento</th>
              <th className="px-5 py-3">Tipo</th>
              <th className="px-5 py-3">Responsable</th>
              <th className="px-5 py-3">Versión</th>
              <th className="px-5 py-3">Estado</th>
              <th className="px-5 py-3">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-white">
            {documents.map((doc) => (
              <tr key={doc.title}>
                <td className="px-5 py-4 font-semibold text-ink">{doc.title}</td>
                <td className="px-5 py-4 text-muted">{doc.type}</td>
                <td className="px-5 py-4 text-muted">{doc.owner}</td>
                <td className="px-5 py-4 text-muted">{doc.version}</td>
                <td className="px-5 py-4">
                  <StatusBadge label={doc.status} />
                </td>
                <td className="px-5 py-4">
                  <button className="button-secondary min-h-9 px-3" type="button">
                    <Download aria-hidden="true" className="size-4" />
                    Descargar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-dashed border-line bg-white p-8 text-center">
      <Info aria-hidden="true" className="mx-auto size-8 text-institution" />
      <h2 className="mt-4 text-lg font-bold text-ink">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}

export function LoadingState() {
  return (
    <div className="panel p-5 text-sm font-semibold text-muted">
      Cargando información del expediente...
    </div>
  );
}

export function ErrorState() {
  return (
    <div className="rounded-lg border border-[#efc2bf] bg-[#fff1f0] p-5 text-sm font-semibold text-danger">
      No se pudo cargar la información. Revisá la conexión o intentá nuevamente.
    </div>
  );
}

export function SuccessNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-[#b8dcc7] bg-[#edf8f1] p-4 text-sm leading-6 text-ok">
      <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
      <div>{children}</div>
    </div>
  );
}
