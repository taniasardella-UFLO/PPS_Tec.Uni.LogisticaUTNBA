import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { PublicPage } from "@/components/public-layout";
import { requirements } from "@/lib/mock-data";

const faqs = [
  ["¿Cuántas horas requiere la PPS Laboral?", "El mínimo declarado para el circuito es de 200 horas."],
  ["¿Quién firma el PPS0?", "El estudiante y el Supervisor de Campo deben firmar antes de la revisión académica."],
  ["¿Qué pasa si Coordinación observa un documento?", "El expediente vuelve al estudiante con una observación registrada y trazable."],
  ["¿La firma de la maqueta tiene validez legal?", "La maqueta simula firma electrónica. La validez final depende de normativa y proveedor adoptado."],
];

export default function RequisitosPage() {
  return (
    <PublicPage>
      <section className="container-page py-12">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-ink">Requisitos PPS Laboral</h1>
          <p className="mt-3 text-lg leading-8 text-muted">
            Documentación inicial, datos de empresa, supervisor, formularios PPS0, PPS1 y entrega
            final en un expediente digital.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <section className="panel p-5">
            <h2 className="text-lg font-bold text-ink">Documentación requerida</h2>
            <div className="mt-4 space-y-3">
              {requirements.map((item) => (
                <article className="rounded-md border border-line bg-paper p-4" key={item}>
                  <p className="font-semibold text-ink">{item}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="panel p-5">
            <h2 className="text-lg font-bold text-ink">Preguntas frecuentes</h2>
            <div className="mt-4 space-y-3">
              {faqs.map(([question, answer]) => (
                <article className="rounded-md border border-line bg-paper p-4" key={question}>
                  <div className="flex gap-2">
                    <HelpCircle aria-hidden="true" className="size-5 shrink-0 text-institution" />
                    <div>
                      <h3 className="font-semibold text-ink">{question}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{answer}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
        <Link className="button-primary mt-8" href="/login">
          Iniciar trámite PPS
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </section>
    </PublicPage>
  );
}
