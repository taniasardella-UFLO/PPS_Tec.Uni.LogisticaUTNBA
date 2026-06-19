import Link from "next/link";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  LayoutGrid,
  Signature,
  Sparkles,
} from "lucide-react";
import { AppShell, PageHeader } from "@/components/app-shell";
import { StatusBadge } from "@/components/status-badge";

const modalities = [
  {
    title: "Modalidad PPS Asignación Institucional",
    subtitle: "Convenios activos",
    description:
      "La universidad trabaja con empresas u organizaciones que ya tienen convenio vigente. Desde esos convenios activos se habilitan cupos, plazas o prácticas disponibles para estudiantes.",
    icon: Building2,
    status: { label: "Seleccionada", tone: "ok" as const },
    action: { label: "Crear expediente", href: "/dashboard/expediente", variant: "primary" as const },
    flow: [
      "Seleccionar convenio activo",
      "Validar cupo y requisitos",
      "Adjuntar convenio/acuerdo firmado o gestionarlo electrónicamente",
      "Asignar estudiante e iniciar PPS",
    ],
  },
  {
    title: "Modalidad PPS Propuesta por Estudiante",
    subtitle: "Modalidad laboral",
    description:
      "El estudiante propone una empresa, empleo, emprendimiento, organización o espacio laboral donde pueda realizar o acreditar su práctica, sujeto a validación académica e institucional.",
    icon: BriefcaseBusiness,
    status: { label: "Disponible", tone: "info" as const },
    action: { label: "Abrir propuesta", href: "/dashboard/expediente", variant: "secondary" as const },
    flow: [
      "Presentar propuesta del estudiante",
      "Evaluar pertinencia académica",
      "Cargar convenio/acuerdo firmado o iniciar firma digital",
      "Autorizar inicio y seguimiento",
    ],
  },
  {
    title: "Modalidad PPS Propuesta por Universidad a Organizaciones",
    subtitle: "Convocatorias institucionales",
    description:
      "La universidad genera propuestas, convocatorias o necesidades de práctica y las ofrece a empresas, organismos u organizaciones para que participen como entidades receptoras.",
    icon: Sparkles,
    status: { label: "Disponible", tone: "info" as const },
    action: { label: "Ver convocatoria", href: "/dashboard/expediente", variant: "secondary" as const },
    flow: [
      "Publicar necesidad o convocatoria",
      "Relevar organización receptora interesada",
      "Formalizar convenio/acuerdo firmado o electrónico",
      "Asignar cupos y publicar la PPS",
    ],
  },
  {
    title: "Modalidad PPS Hs. de Proyectos Asignados",
    subtitle: "Proyectos y consultoría",
    description:
      "La universidad asigna horas de PPS a proyectos reales, simulados, internos, externos, de consultoría, innovación, investigación aplicada, laboratorios o desafíos institucionales.",
    icon: LayoutGrid,
    status: { label: "Próximamente", tone: "neutral" as const },
    action: { label: "Ver próxima etapa", variant: "secondary" as const },
    flow: [
      "Seleccionar proyecto asignado",
      "Definir horas y entregables",
      "Adjuntar convenio/acuerdo firmado si participa una entidad externa",
      "Registrar avance y cierre con informe final",
    ],
  },
] as const;

export default function ModalidadPage() {
  return (
    <AppShell area="estudiante">
      <PageHeader
        description="Seleccioná la modalidad de PPS. Todas las opciones incluyen el requisito transversal de adjuntar convenio/acuerdo firmado o gestionarlo por firma electrónica antes de publicar, validar, asignar o iniciar la PPS."
        title="Selección de modalidad"
      />
      <div className="grid gap-5 xl:grid-cols-2">
        {modalities.map((modality) => {
          const Icon = modality.icon;

          return (
            <article
              className={`panel p-5 ${modality.status.label === "Seleccionada" ? "border-2 border-institution" : ""}`}
              key={modality.title}
            >
              <div className="flex items-start justify-between gap-3">
                <Icon aria-hidden="true" className="size-8 text-institution" />
                <StatusBadge label={modality.status.label} tone={modality.status.tone} />
              </div>

              <h2 className="mt-4 text-xl font-bold text-ink">{modality.title}</h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-muted">
                {modality.subtitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{modality.description}</p>

              <div className="mt-5 rounded-2xl border border-border bg-surface-subtle p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Signature aria-hidden="true" className="size-4 text-institution" />
                  Convenio o acuerdo obligatorio
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Si participa una empresa, organismo u organización receptora, se debe adjuntar el convenio/acuerdo firmado o gestionarlo por firma electrónica/digital antes de publicar, validar, asignar o iniciar la PPS.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-ink">Flujo</p>
                <ol className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {modality.flow.map((step, index) => (
                    <li className="flex gap-3" key={step}>
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-institution/10 text-xs font-bold text-institution">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {modality.action.href ? (
                  <Link
                    className={modality.action.variant === "primary" ? "button-primary" : "button-secondary"}
                    href={modality.action.href}
                  >
                    {modality.action.label}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                ) : (
                  <button className="button-secondary" type="button">
                    {modality.action.label}
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
