import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProcessTimeline } from "@/components/domain-components";
import { PublicPage } from "@/components/public-layout";
import { rolePanels, validationRules } from "@/lib/mock-data";

export default function ComoFuncionaPage() {
  return (
    <PublicPage>
      <section className="container-page py-12">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-ink">Cómo funciona</h1>
          <p className="mt-3 text-lg leading-8 text-muted">
            El proceso reemplaza trámites manuales por un circuito guiado de formularios,
            documentación, firma electrónica con trazabilidad, observaciones y aprobación.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <section className="panel p-5">
            <ProcessTimeline />
          </section>
          <aside className="grid gap-5">
            <section className="panel p-5">
              <h2 className="text-lg font-bold text-ink">Validaciones clave</h2>
              <ul className="mt-4 space-y-3">
                {validationRules.map((rule) => (
                  <li className="rounded-md border border-line bg-paper p-3 text-sm text-muted" key={rule}>
                    {rule}
                  </li>
                ))}
              </ul>
            </section>
            <section className="panel p-5">
              <h2 className="text-lg font-bold text-ink">Roles</h2>
              <div className="mt-4 grid gap-3">
                {rolePanels.map((role) => (
                  <div className="flex gap-3 rounded-md border border-line bg-paper p-3" key={role.title}>
                    <role.icon aria-hidden={true} className="size-5 shrink-0 text-institution" />
                    <div>
                      <p className="font-semibold text-ink">{role.title}</p>
                      <p className="text-sm leading-5 text-muted">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
        <Link className="button-primary mt-8" href="/dashboard">
          Ingresar al portal
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </section>
    </PublicPage>
  );
}
