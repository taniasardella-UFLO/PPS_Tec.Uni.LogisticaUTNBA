import Link from "next/link";
import {
  Bell,
  BookOpenCheck,
  BriefcaseBusiness,
  ChevronDown,
  ClipboardCheck,
  FileText,
  History,
  Home,
  Layers3,
  PenLine,
  Settings,
  UserRound,
  Users,
} from "lucide-react";
import { people } from "@/lib/mock-data";
import { UtnLogo } from "@/components/utn-brand";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

const navByArea: Record<string, NavItem[]> = {
  estudiante: [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/dashboard/expediente", label: "Mi expediente", icon: History },
    { href: "/dashboard/modalidad", label: "Modalidad", icon: Layers3 },
    { href: "/dashboard/pps0", label: "PPS0", icon: ClipboardCheck },
    { href: "/dashboard/pps1", label: "Entregas", icon: FileText },
    { href: "/dashboard/firmas", label: "Firmas", icon: PenLine },
    { href: "/dashboard/perfil", label: "Perfil", icon: UserRound },
  ],
  coordinacion: [
    { href: "/coordinacion", label: "Dashboard", icon: Home },
    { href: "/coordinacion/expedientes/PPS-2026-0142", label: "Expediente", icon: History },
    { href: "/coordinacion/configuracion", label: "Configuracion", icon: Settings },
  ],
  supervisor: [
    { href: "/supervisor", label: "Mis estudiantes", icon: BriefcaseBusiness },
    { href: "/supervisor/expedientes/PPS-2026-0142", label: "Revision", icon: PenLine },
  ],
  docente: [
    { href: "/docente", label: "Asignados", icon: BookOpenCheck },
    { href: "/docente/expedientes/PPS-2026-0142", label: "Evaluacion", icon: ClipboardCheck },
  ],
};

const areaTitle: Record<string, string> = {
  estudiante: "Portal estudiante",
  coordinacion: "Coordinacion PPS",
  supervisor: "Portal supervisor",
  docente: "Panel docente",
};

export function AppShell({
  area = "estudiante",
  children,
}: {
  area?: "estudiante" | "coordinacion" | "supervisor" | "docente";
  children: React.ReactNode;
}) {
  const nav = navByArea[area];

  return (
    <div className="min-h-screen bg-[#f6f7f9]">
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex min-h-[68px] items-center justify-between gap-4 px-5 lg:px-8">
          <Link href="/" aria-label="Inicio PPS Talentia">
            <UtnLogo compact />
          </Link>
          <div className="flex items-center gap-5 text-sm font-semibold text-ink">
            <button aria-label="Notificaciones" className="text-muted hover:text-institution" type="button">
              <Bell aria-hidden="true" className="size-5" />
            </button>
            <button className="inline-flex items-center gap-2" type="button">
              <span className="grid size-9 place-items-center rounded-full border-4 border-[#dfe3ff] bg-[#6366f1] text-xs font-black text-white">
                SA
              </span>
              <span className="hidden sm:inline">{area === "coordinacion" ? "Super" : people.student.name}</span>
              <ChevronDown aria-hidden="true" className="size-4 text-muted" />
            </button>
          </div>
        </div>
        <div className="h-3 bg-institution" />
      </header>

      <aside className="fixed bottom-6 left-4 top-[100px] z-40 hidden w-[280px] rounded-[8px] bg-white shadow-soft lg:block">
        <div className="flex h-full flex-col">
          <div className="px-6 pb-4 pt-7 text-center">
            <div className="mx-auto grid size-20 place-items-center rounded-full border border-line bg-white text-3xl font-black text-[#5a50a7]">
              SA
            </div>
            <p className="mt-4 font-bold text-ink">
              {area === "coordinacion" ? "Super Admin" : people.student.name}
            </p>
            <Link className="button-secondary mt-4 min-h-10 px-5" href="/dashboard/perfil">
              Mi perfil
            </Link>
          </div>

          <nav aria-label={areaTitle[area]} className="flex-1 space-y-1 px-3 py-3">
            {nav.map((item, index) => (
              <Link
                className={cn(
                  "flex items-center gap-3 rounded-[8px] px-4 py-3 text-sm font-semibold transition",
                  index === 0
                    ? "bg-[#e3f2ef] text-[#008f86]"
                    : "text-[#526070] hover:bg-[#f2f4f7] hover:text-ink",
                )}
                href={item.href}
                key={item.href}
              >
                <item.icon aria-hidden={true} className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <RoleSwitcherMock />
        </div>
      </aside>

      <div className="lg:pl-[316px]">
        <nav
          aria-label="Navegacion movil"
          className="flex gap-2 overflow-x-auto border-b border-line bg-white px-4 py-2 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              className="inline-flex min-w-fit items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold text-muted"
              href={item.href}
              key={item.href}
            >
              <item.icon aria-hidden={true} className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-black text-ink sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
      </div>
      {action ? <div className="flex shrink-0 items-center gap-2">{action}</div> : null}
    </div>
  );
}

export function RoleSwitcherMock() {
  const roles = [
    { href: "/dashboard", label: "Estudiante", icon: UserRound },
    { href: "/supervisor", label: "Supervisor", icon: BriefcaseBusiness },
    { href: "/docente", label: "Docente", icon: BookOpenCheck },
    { href: "/coordinacion", label: "Coordinacion", icon: Users },
  ];

  return (
    <div className="border-t border-line p-3">
      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        Cambiar rol demo
      </p>
      <div className="grid grid-cols-2 gap-2">
        {roles.map((role) => (
          <Link
            className="flex items-center gap-2 rounded-[8px] border border-line px-2 py-2 text-xs font-semibold text-muted hover:border-institution hover:text-institution"
            href={role.href}
            key={role.href}
          >
            <role.icon aria-hidden={true} className="size-3.5" />
            {role.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
