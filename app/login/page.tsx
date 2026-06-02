import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { PublicPage } from "@/components/public-layout";

export default function LoginPage() {
  return (
    <PublicPage>
      <section className="container-page grid min-h-[calc(100vh-9rem)] place-items-center py-12">
        <div className="panel w-full max-w-lg p-6">
          <div className="mb-6">
            <span className="grid size-12 place-items-center rounded-md bg-institution text-white">
              <LockKeyhole aria-hidden="true" className="size-6" />
            </span>
            <h1 className="mt-4 text-3xl font-bold text-ink">Login institucional</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              Acceso mock para recorrer la maqueta. En producción se integraría Supabase Auth,
              email mágico o proveedor institucional.
            </p>
          </div>
          <form className="grid gap-4">
            <label className="grid gap-2">
              <span className="label">Email</span>
              <input className="input" defaultValue="martina.lopez@alumnos.frba.utn.edu.ar" type="email" />
            </label>
            <label className="grid gap-2">
              <span className="label">Clave</span>
              <input className="input" defaultValue="demo-pps" type="password" />
            </label>
            <Link className="button-primary" href="/dashboard">
              Ingresar al portal
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <button className="button-secondary" type="button">
              Continuar con Google
            </button>
          </form>
          <p className="mt-5 rounded-lg border border-line bg-paper p-3 text-sm leading-6 text-muted">
            El acceso real debe proteger sesiones, archivos privados, roles y políticas RLS antes
            de operar con documentación institucional.
          </p>
        </div>
      </section>
    </PublicPage>
  );
}
