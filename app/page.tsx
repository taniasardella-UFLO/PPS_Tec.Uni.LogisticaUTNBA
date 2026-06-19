import Image from "next/image";
import Link from "next/link";
import { FileCheck2, PenLine, ShieldCheck } from "lucide-react";
import { PublicPage } from "@/components/public-layout";
import { rolePanels } from "@/lib/mock-data";

const featureCards = [
  { title: "Configuración por institución", icon: FileCheck2 },
  { title: "Trazabilidad documental", icon: PenLine },
  { title: "Revisión académica y legal", icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <PublicPage>
      <section className="bg-white">
        <div className="container-page grid min-h-[calc(100vh-8.7rem)] items-center gap-12 py-14 lg:grid-cols-[0.92fr_0.78fr] lg:py-16">
          <div className="mx-auto max-w-[590px] lg:mx-0">
            <h1 className="text-[2.7rem] font-black leading-[0.98] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[4.1rem]">
              PPS Talentia organiza el ciclo completo de tu PPS universitaria
            </h1>
            <p className="mt-8 max-w-[560px] text-xl leading-9 text-muted">
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
            <div className="mt-16 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-3">
                {["ML", "CM", "LF", "CP"].map((initials, index) => (
                  <span
                    className="grid size-11 place-items-center rounded-full border-2 border-white text-sm font-black text-white shadow-sm"
                    key={initials}
                    style={{
                      backgroundColor: ["#b0073b", "#008f76", "#2563eb", "#111827"][index],
                    }}
                  >
                    {initials}
                      <strong className="font-black text-ink">MVP</strong> para Tecnicatura Universitaria
                ))}
              </div>
              <span className="h-10 w-px bg-line" aria-hidden="true" />
              <p className="text-xl text-muted">
                <strong className="font-black text-ink">+200</strong> horas trazables
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[508px]">
            <div className="overflow-hidden rounded-[22px] bg-[#eef0f2] shadow-soft">
              <Image
                alt="Estudiante usando una plataforma academica digital"
                className="aspect-[4/5] h-auto w-full object-cover"
                height={1024}
                priority
                src="/images/utn-hero.png"
                width={820}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="utn-ribbon overflow-hidden">
        <div className="container-page py-10 text-white">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Un solo expediente para solicitud, validación, seguimiento y cierre
          </h2>
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
              <p className="mt-3 text-sm leading-6 text-muted">
                Cada acción queda asociada al rol responsable, al documento, al estado del trámite
                y al historial de auditoría.
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
