import Link from "next/link";
import {
  Bell,
  BookOpenCheck,
  BriefcaseBusiness,
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
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

const navByArea: Record<string, NavItem[]> = {
  estudiante: [
    { href: "/dashboard", label: "Inicio", icon: Home },
    { href: "/dashboard/expediente", label: "Mi expediente", icon: History },
    { href: "/dashboard/modalidad", label: "Modalidad", icon: Layers3 },
    { href: "/dashboard/pps0", label: "PPS0", icon: ClipboardCheck },
    { href: "/dashboard/pps1", label: "Entregas", icon: FileText },
    { href: "/dashboard/firmas", label: "Firmas", icon: PenLine },
    { href: "/dashboard/perfil", label: "Perfil", icon: UserRound },
  ],
  coordinacion: [
    { href: "/coordinacion", label: "Panel general", icon: Home },
    { href: "/coordinacion/expedientes/PPS-2026-0142", label: "Expediente", icon: History },
    { href: "/coordinacion/configuracion", label: "Configuración", icon: Settings },
  ],
  supervisor: [
    { href: "/supervisor", label: "Mis estudiantes", icon: BriefcaseBusiness },
    { href: "/supervisor/expedientes/PPS-2026-0142", label: "Revisión", icon: PenLine },
  ],
  docente: [
    { href: "/docente", label: "Asignados", icon: BookOpenCheck },
    { href: "/docente/expedientes/PPS-2026-0142", label: "Evaluación", icon: ClipboardCheck },
  ],
};

const areaTitle: Record<string, string> = {
  estudiante: "Portal estudiante",
  coordinacion: "Coordinación PPS",
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
    <div className="min-h-screen bg-paper">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-line bg-white lg:block">
        <div className="flex h-full flex-col">
          <Link className="flex min-h-16 items-center gap-3 border-b border-line px-5" href="/">
            <span className="grid size-10 place-items-center rounded-md bg-institution text-white">
              <FileText aria-hidden="true" className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-ink">PPS Digital</span>
              <span className="block text-xs text-muted">{areaTitle[area]}</span>
            </span>
          </Link>
          <nav aria-label={areaTitle[area]} className="flex-1 space-y-1 px-3 py-4">
            {nav.map((item) => (
              <Link
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold text-muted transition hover:bg-[#eef4f5] hover:text-ink"
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

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
          <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {areaTitle[area]}
              </p>
              <p className="text-sm font-semibold text-ink">{people.student.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link className="button-secondary hidden sm:inline-flex" href="/dashboard">
                Ver demo
              </Link>
              <button aria-label="Notificaciones" className="button-secondary px-3" type="button">
                <Bell aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
          <nav
            aria-label="Navegación móvil"
            className="flex gap-2 overflow-x-auto border-t border-line px-4 py-2 lg:hidden"
          >
            {nav.map((item) => (
              <Link
                className="inline-flex min-w-fit items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-muted"
                href={item.href}
                key={item.href}
              >
                <item.icon aria-hidden={true} className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
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
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h1>
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
    { href: "/coordinacion", label: "Coordinación", icon: Users },
  ];

  return (
    <div className="border-t border-line p-3">
      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        Cambiar rol demo
      </p>
      <div className="grid grid-cols-2 gap-2">
        {roles.map((role) => (
          <Link
            className={cn(
              "flex items-center gap-2 rounded-md border border-line px-2 py-2 text-xs font-semibold text-muted",
              "hover:border-institution hover:text-institution",
            )}
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
