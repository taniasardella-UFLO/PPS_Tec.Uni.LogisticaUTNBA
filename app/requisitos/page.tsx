import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { PublicPage } from "@/components/public-layout";
import { requirements } from "@/lib/mock-data";

const faqs = [
  ["¿Las horas están fijas?", "No. Cada carrera, plan de estudios o reglamento interno define su propia carga horaria."],
  ["¿Quién firma la solicitud inicial?", "La firma depende de la configuración institucional y de los actores asignados al caso."],
  ["¿Qué pasa si una revisión observa un documento?", "El expediente vuelve al actor responsable con una observación registrada y trazable."],
  ["¿La firma de la maqueta tiene validez legal?", "La maqueta simula firma electrónica. La validez final depende de la normativa y del proveedor adoptado."],
];

export default function RequisitosPage() {
  return (
    <PublicPage>
      <section className="container-page py-12">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-ink">Requisitos PPS Talentia</h1>
          <p className="mt-3 text-lg leading-8 text-muted">
            La documentación obligatoria se parametriza por institución, carrera, plan de estudios y
            reglamento interno. La plataforma sólo administra lo que cada unidad académica configure.
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
          Iniciar solicitud
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </section>
    </PublicPage>
  );
}
