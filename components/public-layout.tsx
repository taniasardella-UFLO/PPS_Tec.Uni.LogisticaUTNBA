import Link from "next/link";
import { FileText, LogIn } from "lucide-react";

const publicLinks = [
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/requisitos", label: "Requisitos" },
  { href: "/login", label: "Ingresar" },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link className="flex items-center gap-2 font-bold text-ink" href="/">
          <span className="grid size-9 place-items-center rounded-md bg-institution text-white">
            <FileText aria-hidden="true" className="size-5" />
          </span>
          PPS Digital
        </Link>
        <nav aria-label="Navegación pública" className="hidden items-center gap-1 md:flex">
          {publicLinks.map((link) => (
            <Link className="button-ghost" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="button-primary" href="/login">
          <LogIn aria-hidden="true" className="size-4" />
          Portal
        </Link>
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
            Maqueta funcional para demostrar un expediente académico digital,
            asincrónico y trazable.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="hover:text-institution" href="/dashboard">
            Demo estudiante
          </Link>
          <Link className="hover:text-institution" href="/coordinacion">
            Coordinación
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
