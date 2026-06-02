import Link from "next/link";
import { BriefcaseBusiness, Building2, CircleHelp, Home, LogIn } from "lucide-react";
import { UtnLogo } from "@/components/utn-brand";

const publicLinks = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/como-funciona", label: "Proceso", icon: BriefcaseBusiness },
  { href: "/requisitos", label: "Requisitos", icon: Building2 },
  { href: "/login", label: "Ayuda", icon: CircleHelp },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="container-page flex min-h-[78px] items-center justify-between gap-4">
        <Link href="/" aria-label="Inicio PPS Digital">
          <UtnLogo />
        </Link>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link className="hidden text-ink hover:text-institution sm:inline-flex" href="/login">
            Iniciar sesion
          </Link>
          <Link className="button-primary min-h-12 px-6" href="/login">
            <LogIn aria-hidden="true" className="size-4 sm:hidden" />
            Crear cuenta
          </Link>
        </div>
      </div>
      <div className="utn-ribbon">
        <nav
          aria-label="Navegacion publica"
          className="container-page flex min-h-[60px] items-center gap-5 overflow-x-auto"
        >
          {publicLinks.map((link, index) => (
            <Link
              className={
                index === 0
                  ? "inline-flex min-w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink"
                  : "inline-flex min-w-fit items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white"
              }
              href={link.href}
              key={link.href}
            >
              <link.icon aria-hidden={true} className="size-4" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-6 py-8 text-sm text-muted md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-semibold text-ink">PPS Digital</p>
          <p>
            Maqueta funcional para demostrar un expediente academico digital,
            asincronico y trazable.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="hover:text-institution" href="/dashboard">
            Demo estudiante
          </Link>
          <Link className="hover:text-institution" href="/coordinacion">
            Coordinacion
          </Link>
          <Link className="hover:text-institution" href="/supervisor">
            Supervisor
          </Link>
          <Link className="hover:text-institution" href="/docente">
            Docente
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function PublicPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </>
  );
}
