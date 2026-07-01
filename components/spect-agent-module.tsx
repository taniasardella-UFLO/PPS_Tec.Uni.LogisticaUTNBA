import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  GitBranch,
  Route,
  ShieldCheck,
} from "lucide-react";
import {
  assistantChecklist,
  assistantPrompt,
  assistantBacklog,
  assistantDimensions,
  assistantIntegrationFlow,
} from "@/lib/spect-agent";

const dimensionIcons = [FileSearch, Route, ClipboardCheck, BadgeCheck, GitBranch];
const dimensionStyles = [
  "bg-[#edf8fa] text-[#007c75]",
  "bg-[#fff7ed] text-[#c65f10]",
  "bg-[#f3f5ff] text-[#4452b8]",
  "bg-[#f7e6ec] text-institution",
  "bg-[#eef8f1] text-[#1f8a4c]",
];

export function SpectAgentModule({ embedded = false }: { embedded?: boolean }) {
  return (
    <section className={embedded ? "space-y-6" : "container-page py-12"}>
      {!embedded ? (
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-institution">
              <Bot aria-hidden="true" className="size-4" />
              Asistente PPS
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl">
              Orienta cada decision del modulo PPS antes de cambiar la web
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              Organiza el producto digital en Situacion, Proceso, Evidencia, Criterios y
              Trazabilidad para integrar PPS Talentia como modulo de una plataforma universitaria.
            </p>
          </div>
          <div className="panel p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
              URL objetivo
            </p>
            <p className="mt-2 break-all text-lg font-bold text-ink">
              pps-tec-uni-logistica-utnba.vercel.app
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="button-primary" href="/dashboard/agente-spect">
                Abrir en portal
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link className="button-secondary" href="/dashboard/expediente">
                Ver expediente
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {assistantDimensions.map((dimension, index) => {
          const Icon = dimensionIcons[index];
          return (
            <article className="panel p-5" key={dimension.key}>
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`grid size-11 place-items-center rounded-[8px] ${dimensionStyles[index]}`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-3xl font-black text-institution">{dimension.key}</span>
              </div>
              <h2 className="mt-5 text-lg font-bold text-ink">{dimension.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{dimension.focus}</p>
              <p className="mt-4 rounded-md border border-line bg-paper p-3 text-sm font-semibold leading-6 text-ink">
                {dimension.outcome}
              </p>
              <ul className="mt-4 space-y-2">
                {dimension.checks.map((check) => (
                  <li className="flex gap-2 text-sm leading-5 text-muted" key={check}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-[#1f8a4c]"
                    />
                    {check}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1fr]">
        <section className="panel p-5">
          <div className="mb-5 flex items-center gap-3">
            <BriefcaseBusiness aria-hidden="true" className="size-6 text-institution" />
            <div>
              <h2 className="text-lg font-bold text-ink">Integracion institucional</h2>
              <p className="text-sm text-muted">De la solicitud al expediente PPS.</p>
            </div>
          </div>
          <div className="space-y-3">
            {assistantIntegrationFlow.map((item) => (
              <Link
                className="block rounded-[8px] border border-line bg-paper p-4 transition hover:border-institution"
                href={item.route}
                key={item.stage}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {item.stage}
                </p>
                <h3 className="mt-2 font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="panel overflow-hidden">
          <div className="border-b border-line p-5">
            <h2 className="text-lg font-bold text-ink">Backlog del asistente</h2>
            <p className="text-sm text-muted">
              Primeras decisiones para que los cambios de producto lleguen a rutas concretas.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] text-left text-sm">
              <thead className="bg-paper text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-3">Orden</th>
                  <th className="px-5 py-3">Cambio</th>
                  <th className="px-5 py-3">Ruta</th>
                  <th className="px-5 py-3">Aceptacion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {assistantBacklog.map((item) => (
                  <tr key={item.change}>
                    <td className="px-5 py-4 font-black text-institution">{item.priority}</td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-ink">{item.change}</p>
                      <p className="mt-1 text-muted">{item.target}</p>
                    </td>
                    <td className="px-5 py-4">
                      <Link className="font-semibold text-institution" href={item.route}>
                        {item.route}
                      </Link>
                    </td>
                    <td className="px-5 py-4 leading-6 text-muted">{item.acceptance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr]">
        <section className="panel p-5">
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck aria-hidden="true" className="size-6 text-institution" />
            <h2 className="text-lg font-bold text-ink">Checklist del agente</h2>
          </div>
          <div className="space-y-3">
            {assistantChecklist.map((item) => (
              <div className="flex gap-3 rounded-md border border-line bg-paper p-3" key={item}>
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#1f8a4c]" />
                <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel p-5">
          <div className="mb-4 flex items-center gap-3">
            <Bot aria-hidden="true" className="size-6 text-institution" />
            <h2 className="text-lg font-bold text-ink">Prompt operativo versionado</h2>
          </div>
          <pre className="max-h-[480px] overflow-auto rounded-lg bg-[#17202a] p-4 text-sm leading-6 text-white">
            <code>{assistantPrompt}</code>
          </pre>
        </section>
      </div>
    </section>
  );
}
