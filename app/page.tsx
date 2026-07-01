import Link from "next/link";
import { FileCheck2, PenLine, ShieldCheck } from "lucide-react";
import { PublicPage } from "@/components/public-layout";
import { rolePanels } from "@/lib/mock-data";

const featureCards = [
  {
    title: "Configuración por institución",
    icon: FileCheck2,
    description:
      "Cada carrera define sus reglas, horas, documentos y estados sin depender de una lógica fija.",
  },
  {
    title: "Trazabilidad documental",
    icon: PenLine,
    description:
      "Cada paso deja evidencia auditable: solicitudes, observaciones, firmas y aprobaciones.",
  },
  {
    title: "Revisión académica y legal",
    icon: ShieldCheck,
    description:
      "El expediente acompaña el flujo institucional hasta el cierre con validaciones claras.",
  },
];

export default function HomePage() {
  return (
    <PublicPage>
      <section className="border-b border-line bg-white">
        <div className="container-page grid min-h-[calc(100vh-8.7rem)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.72fr] lg:py-16">
          <div className="mx-auto max-w-[620px] lg:mx-0">
            <h1 className="text-[2.7rem] font-black leading-[0.98] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[4.25rem]">
              PPS Talentia organiza el ciclo completo de tu PPS universitaria
            </h1>
            <p className="mt-8 max-w-[580px] text-xl leading-9 text-muted">
              Una plataforma configurable para Tecnicatura Universitaria como MVP inicial y con
              evolución prevista para Licenciatura, trazando cada solicitud, validación,
              seguimiento, informe y constancia final.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="button-primary min-h-[62px] px-8 text-base" href="/dashboard">
                Iniciar solicitud
              </Link>
              <Link className="button-secondary min-h-[62px] px-8 text-base" href="/como-funciona">
                Ver flujo completo
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-3">
                {["TL", "UT", "P0", "P1"].map((initials, index) => (
                  <span
                    className="grid size-11 place-items-center rounded-full border-2 border-white text-xs font-black text-white shadow-sm"
                    key={initials}
                    style={{ backgroundColor: ["#b0073b", "#008f76", "#2563eb", "#111827"][index] }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <span className="h-10 w-px bg-line" aria-hidden="true" />
              <p className="text-xl text-muted">
                <strong className="font-black text-ink">MVP</strong> para Tecnicatura Universitaria
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-institution">Flujo base</p>
              <p className="mt-3 text-lg leading-8 text-ink">
                Solicitud, validación, firma, seguimiento, evaluación y cierre con un expediente único.
              </p>
            </div>
            <div className="panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-institution">Cobertura</p>
              <p className="mt-3 text-lg leading-8 text-ink">
                Convenios activos, propuestas del estudiante, propuestas institucionales y proyectos asignados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((item) => (
            <article className="panel p-6" key={item.title}>
              <span className="grid size-12 place-items-center rounded-[8px] bg-[#f7e6ec] text-institution">
                <item.icon aria-hidden={true} className="size-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-page py-12">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-ink">Roles participantes</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Estudiante, tutor académico, referente externo y coordinación trabajan sobre un flujo
              auditable y configurable.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rolePanels.map((role) => (
              <article className="rounded-[8px] border border-line bg-paper p-5" key={role.title}>
                <role.icon aria-hidden={true} className="size-6 text-institution" />
                <h3 className="mt-4 font-bold text-ink">{role.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PublicPage>
  );
}
