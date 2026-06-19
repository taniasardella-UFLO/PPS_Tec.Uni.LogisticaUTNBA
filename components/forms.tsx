"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { DocumentUploadCard } from "@/components/domain-components";
import { StatusBadge } from "@/components/status-badge";
import { organization, people } from "@/lib/mock-data";

export function PPS0Form() {
  const [hours, setHours] = useState(220);
  const validHours = hours > 0;

  return (
    <form className="grid gap-5">
      <section className="panel p-5">
        <h2 className="text-lg font-bold text-ink">Datos personales</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Nombre completo" value={people.student.name} />
          <Field label="Legajo" value={people.student.legajo} />
          <Field label="Carrera" value={people.student.carrera} />
          <Field label="Email académico" value={people.student.email} />
        </div>
      </section>

      <section className="panel p-5">
        <h2 className="text-lg font-bold text-ink">Datos de la organización receptora</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Organización" value={organization.name} />
          <Field label="CUIT" value={organization.cuit} />
          <Field label="Área" value={organization.area} />
          <Field label="Cargo del estudiante" value={organization.studentPosition} />
        </div>
      </section>

      <section className="panel p-5">
        <h2 className="text-lg font-bold text-ink">Referente externo</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Nombre" value={people.supervisor.name} />
          <Field label="Cargo" value={people.supervisor.position} />
          <Field label="Email" value={people.supervisor.email} />
          <Field label="Teléfono" value={people.supervisor.phone} />
        </div>
      </section>

      <ProjectSummaryForm />

      <CronogramaBuilder hours={hours} setHours={setHours} validHours={validHours} />

      <section className="grid gap-4 md:grid-cols-3">
        <DocumentUploadCard
          description="Archivo PDF o imagen emitido por la organización receptora."
          status="Cargado"
          title="Constancia o autorización"
        />
        <DocumentUploadCard
          description="Plan de práctica en texto o PDF con objetivos, actividades y alcance."
          status="Completo"
          title="Plan de práctica"
        />
        <DocumentUploadCard
          description="Plan temporal con actividades, fechas estimadas y horas configurables."
          status={validHours ? "Validado" : "Incompleto"}
          title="Cronograma"
        />
      </section>

      <section className="panel p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-ink">Revisión final</h2>
            <p className="text-sm text-muted">
              El sistema valida campos obligatorios, archivos, email del referente externo y horas configuradas.
            </p>
          </div>
          <StatusBadge label={validHours ? "Listo para enviar" : "Requiere corrección"} />
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="button-secondary" type="button">
            Guardar borrador
          </button>
          <button className="button-primary" disabled={!validHours} type="button">
            <Send aria-hidden="true" className="size-4" />
            Enviar a revisión académica
          </button>
        </div>
      </section>
    </form>
  );
}

export function Field({
  label,
  value,
  type = "text",
}: {
  label: string;
  value: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="label">{label}</span>
      <input className="input" defaultValue={value} type={type} />
    </label>
  );
}

export function ProjectSummaryForm() {
  return (
    <section className="panel p-5">
      <h2 className="text-lg font-bold text-ink">Plan de práctica</h2>
      <div className="mt-4 grid gap-4">
        <Field label="Tema" value="Aplicación técnica en un entorno profesional real" />
        <label className="grid gap-2">
          <span className="label">Objetivo</span>
          <textarea
            className="input min-h-28"
            defaultValue="Registrar una práctica supervisada configurable para carrera, institución y reglamento interno."
          />
        </label>
        <label className="grid gap-2">
          <span className="label">Vinculación con la carrera</span>
          <textarea
            className="input min-h-28"
            defaultValue="La propuesta articula contenidos técnicos, desempeño profesional y evidencias de aplicación práctica."
          />
        </label>
      </div>
    </section>
  );
}

export function CronogramaBuilder({
  hours,
  setHours,
  validHours,
}: {
  hours: number;
  setHours: (value: number) => void;
  validHours: boolean;
}) {
  const activities = [
    ["Relevamiento de flujo actual", 45],
    ["Medición de tiempos y desvíos", 55],
    ["Propuesta de mejoras", 65],
    ["Validación con operaciones", 55],
  ];

  return (
    <section className="panel p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink">Seguimiento de horas</h2>
          <p className="text-sm text-muted">La referencia de horas es configurable por carrera.</p>
        </div>
        <StatusBadge label={validHours ? "Horas registradas" : "Sin horas declaradas"} />
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th className="py-2 pr-4">Actividad</th>
              <th className="py-2 pr-4">Fecha estimada</th>
              <th className="py-2 pr-4">Horas</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {activities.map(([activity, activityHours], index) => (
              <tr key={activity}>
                <td className="py-3 pr-4 font-semibold text-ink">{activity}</td>
                <td className="py-3 pr-4 text-muted">
                  Semana {index + 1} a {index + 3}
                </td>
                <td className="py-3 pr-4 text-muted">{activityHours} h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <label className="mt-4 grid max-w-xs gap-2">
        <span className="label">Horas totales declaradas</span>
        <input
          className="input"
          min={0}
          onChange={(event) => setHours(Number(event.target.value))}
          type="number"
          value={hours}
        />
      </label>
    </section>
  );
}

export function PPS1Form({ final = false }: { final?: boolean }) {
  return (
    <form className="grid gap-5">
      <section className="panel p-5">
        <h2 className="text-lg font-bold text-ink">{final ? "Informe final" : "Seguimiento"}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Período" value={final ? "Cierre de práctica" : "Primer avance"} />
          <Field label={final ? "Horas totales" : "Horas del período"} value={final ? "220" : "108"} type="number" />
        </div>
        <label className="mt-4 grid gap-2">
          <span className="label">Actividades realizadas</span>
          <textarea
            className="input min-h-32"
            defaultValue="Relevamiento del proceso, medición de tiempos y análisis de resultados obtenidos durante la PPS."
          />
        </label>
        <label className="mt-4 grid gap-2">
          <span className="label">{final ? "Conclusiones" : "Próximos pasos"}</span>
          <textarea
            className="input min-h-32"
            defaultValue={
              final
                ? "La práctica demuestra integración técnica, trazabilidad y cumplimiento de objetivos configurados."
                : "Validar avances con el tutor académico y preparar la siguiente instancia de seguimiento."
            }
          />
        </label>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <SupervisorFeedbackForm />
        <TeacherEvaluationForm />
      </section>
      <div className="panel p-5">
        <button className="button-primary" type="button">
          <Send aria-hidden="true" className="size-4" />
          {final ? "Enviar a evaluación final" : "Enviar seguimiento"}
        </button>
      </div>
    </form>
  );
}

export function FinalSubmissionForm() {
  return <PPS1Form final />;
}

export function SupervisorFeedbackForm() {
  return (
    <section className="rounded-lg border border-line bg-white p-5">
      <h2 className="text-lg font-bold text-ink">Feedback del referente externo</h2>
      <label className="mt-4 grid gap-2">
        <span className="label">Validación de horas</span>
        <input className="input" defaultValue="Horas validadas según configuración" />
      </label>
      <label className="mt-4 grid gap-2">
        <span className="label">Comentarios técnicos</span>
        <textarea
          className="input min-h-28"
          defaultValue="El desempeño fue satisfactorio y las actividades se vinculan con competencias técnicas aplicadas."
        />
      </label>
    </section>
  );
}

export function TeacherEvaluationForm() {
  return (
    <section className="rounded-lg border border-line bg-white p-5">
      <h2 className="text-lg font-bold text-ink">Evaluación docente</h2>
      <label className="mt-4 grid gap-2">
        <span className="label">Rúbrica simple</span>
        <select className="input" defaultValue="aprobado">
          <option value="aprobado">Aprobado</option>
          <option value="observado">Observado</option>
          <option value="rechazado">No aprobado</option>
        </select>
      </label>
      <label className="mt-4 grid gap-2">
        <span className="label">Comentarios</span>
        <textarea
          className="input min-h-28"
          defaultValue="La propuesta presenta evidencia suficiente y relación clara con contenidos de la carrera."
        />
      </label>
    </section>
  );
}

export function SignatureModal() {
  const [consent, setConsent] = useState(false);
  const [signed, setSigned] = useState(false);
  const signedAt = useMemo(() => new Date().toLocaleString("es-AR"), []);

  return (
    <section className="panel p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-ink">Firmar solicitud inicial</h2>
          <p className="text-sm leading-6 text-muted">
            Confirmá identidad, consentimiento y registro de trazabilidad para esta maqueta.
          </p>
        </div>
        <StatusBadge label={signed ? "Firmado" : "Pendiente"} />
      </div>

      <dl className="mt-5 grid gap-3 md:grid-cols-2">
        <SignatureField label="Documento" value="Solicitud inicial PPS0" />
        <SignatureField label="Estado" value={signed ? "Firmado digitalmente" : "Pendiente de firma"} />
        <SignatureField label="Persona" value={people.student.name} />
        <SignatureField label="Fecha" value={signed ? signedAt : "Sin firma"} />
      </dl>

      <label className="mt-5 flex items-start gap-3 rounded-xl border border-line bg-surface-subtle p-4 text-sm leading-6 text-ink">
        <input checked={consent} onChange={(event) => setConsent(event.target.checked)} type="checkbox" />
        <span>Declaro que la información es correcta y que deseo continuar con el registro de firma.</span>
      </label>

      <div className="mt-5 flex flex-wrap gap-3">
        <button className="button-secondary" type="button">
          Guardar borrador
        </button>
        <button
          className="button-primary"
          disabled={!consent}
          onClick={() => setSigned(true)}
          type="button"
        >
          <CheckCircle2 aria-hidden="true" className="size-4" />
          Firmar documento
        </button>
      </div>
    </section>
  );
}

function SignatureField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <dt className="text-xs uppercase tracking-[0.12em] text-muted">{label}</dt>
      <dd className="mt-2 text-sm font-semibold text-ink">{value}</dd>
    </div>
  );
}
