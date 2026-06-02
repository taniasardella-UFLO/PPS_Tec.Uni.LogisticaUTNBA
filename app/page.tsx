import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { PublicPage } from "@/components/public-layout";
import { benefits, processSteps, rolePanels } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <PublicPage>
      <section className="border-b border-line bg-white">
        <div className="container-page grid min-h-[calc(100vh-4rem)] content-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-sm font-semibold text-institution">
              <ShieldCheck aria-hidden="true" className="size-4" />
              Expediente académico digital
            </div>
            <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Digitalizá la acreditación de tu PPS Laboral
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Un portal para cargar documentación, validar requisitos, firmar electrónicamente y
              seguir cada etapa del proceso de acreditación en un único expediente digital.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="button-primary" href="/dashboard">
                Iniciar trámite
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link className="button-secondary" href="/como-funciona">
                Ver demo del proceso
              </Link>
            </div>
          </div>

          <div className="panel p-5">
            <div className="flex items-center gap-3 border-b border-line pb-4">
              <span className="grid size-12 place-items-center rounded-md bg-institution text-white">
                <FileText aria-hidden="true" className="size-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-muted">Expediente PPS-2026-0142</p>
                <p className="font-bold text-ink">Martina López · Modalidad Laboral</p>
              </div>
            </div>
            <ol className="mt-5 space-y-4">
              {processSteps.slice(0, 5).map((step) => (
                <li className="flex gap-3" key={step.title}>
                  <span className="mt-0.5 grid size-7 place-items-center rounded-full bg-[#edf8f1] text-ok">
                    <CheckCircle2 aria-hidden="true" className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="text-sm leading-5 text-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article className="panel p-5" key={benefit}>
              <CheckCircle2 aria-hidden="true" className="size-5 text-ok" />
              <h2 className="mt-4 font-bold text-ink">{benefit}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Cada acción queda asociada al expediente, al rol responsable y al estado del
                trámite.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-page py-12">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-ink">Roles participantes</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              La maqueta muestra qué hace cada actor del circuito sin instancias sincrónicas
              obligatorias.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rolePanels.map((role) => (
              <article className="rounded-lg border border-line bg-paper p-5" key={role.title}>
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
