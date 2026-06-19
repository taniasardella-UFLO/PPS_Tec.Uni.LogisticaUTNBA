import {
  AlertCircle,
  BadgeCheck,
  Bot,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  GraduationCap,
  History,
  PenLine,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

export type CaseStatus =
  | "BORRADOR"
  | "SOLICITUD_ENVIADA"
  | "EN_REVISION_ACADEMICA"
  | "OBSERVADA"
  | "EN_REVISION_ADMINISTRATIVA_LEGAL"
  | "APROBADA_PARA_INICIO"
  | "EN_CURSO"
  | "PAUSADA"
  | "CON_INCIDENTE"
  | "PENDIENTE_INFORME_FINAL"
  | "EN_EVALUACION_FINAL"
  | "APROBADA"
  | "RECHAZADA"
  | "ANULADA"
  | "FINALIZADA_CON_CONSTANCIA";

export const statusLabels: Record<CaseStatus, string> = {
  BORRADOR: "Borrador",
  SOLICITUD_ENVIADA: "Solicitud enviada",
  EN_REVISION_ACADEMICA: "En revisión académica",
  OBSERVADA: "Observada",
  EN_REVISION_ADMINISTRATIVA_LEGAL: "En revisión administrativa/legal",
  APROBADA_PARA_INICIO: "Aprobada para inicio",
  EN_CURSO: "En curso",
  PAUSADA: "Pausada",
  CON_INCIDENTE: "Con incidente",
  PENDIENTE_INFORME_FINAL: "Pendiente de informe final",
  EN_EVALUACION_FINAL: "En evaluación final",
  APROBADA: "Aprobada",
  RECHAZADA: "Rechazada",
  ANULADA: "Anulada",
  FINALIZADA_CON_CONSTANCIA: "Finalizada con constancia",
};

export const people = {
  student: {
    name: "Martina López",
    role: "Estudiante",
    carrera: "Tecnicatura Universitaria en Logística",
    legajo: "175432",
    email: "martina.lopez@alumnos.utn.edu.ar",
    phone: "+54 11 4020-1848",
  },
  supervisor: {
    name: "Carlos Méndez",
    role: "Referente externo",
    position: "Jefe de Operaciones",
    email: "carlos.mendez@organizacion-demo.com",
    phone: "+54 11 4555-0900",
  },
  teacher: {
    name: "Ing. Laura Fernández",
    role: "Tutor académico",
    email: "laura.fernandez@utn.edu.ar",
  },
  coordination: {
    name: "Coordinación PPS Talentia",
    role: "Coordinación PPS",
    email: "pps.talentia@utn.edu.ar",
  },
};

export const organization = {
  name: "Organización Demo S.A.",
  cuit: "30-71621984-7",
  area: "Operaciones",
  address: "Av. del Trabajo 1420, Buenos Aires",
  studentPosition: "Asistente técnico en procesos",
};

export const caseSummary = {
  id: "PPS-2026-0142",
  modality: "Tecnicatura Universitaria",
  status: "EN_REVISION_ACADEMICA" as CaseStatus,
  totalDeclaredHours: 220,
  hoursPolicy: "Definidas por carrera, plan de estudios y reglamento interno",
  createdAt: "2026-05-18",
  updatedAt: "2026-06-01",
  approvedAt: null,
  project: {
    topic: "Aplicación técnica en un entorno profesional real",
    objective:
      "Registrar una PPS configurable para carrera, institución y reglamento, con trazabilidad completa desde la solicitud hasta la constancia final.",
    expectedHours: 220,
  },
};

export const benefits = [
  "Configuración flexible por institución y carrera",
  "Trazabilidad académica, administrativa y documental",
  "Seguimiento del ciclo completo de la PPS",
  "Observaciones y correcciones centralizadas",
  "Registro de horas, actividades y evidencias",
  "Constancia final descargable",
];

export const processSteps = [
  {
    title: "Solicitud inicial",
    description:
      "El estudiante crea un borrador, carga datos base y presenta la solicitud según la configuración institucional.",
    status: "Completo",
    icon: FileText,
  },
  {
    title: "Validación académica y legal",
    description:
      "Coordinación y el área administrativa revisan requisitos, convenios y documentación obligatoria.",
    status: "Completo",
    icon: ClipboardCheck,
  },
  {
    title: "Asignación de tutor y referente",
    description:
      "Se vinculan el tutor académico y el referente externo para coordinar el plan de práctica.",
    status: "En curso",
    icon: PenLine,
  },
  {
    title: "Plan de práctica",
    description:
      "El estudiante presenta objetivos, tareas, cronograma y documentación exigida por la institución.",
    status: "Pendiente",
    icon: ShieldCheck,
  },
  {
    title: "Seguimiento de horas",
    description:
      "Se registran horas, actividades e hitos con validación de los actores responsables.",
    status: "Pendiente",
    icon: CalendarClock,
  },
  {
    title: "Informe final y cierre",
    description:
      "Se evalúa el informe final, se cierra el proceso y se emite la constancia correspondiente.",
    status: "Pendiente",
    icon: BadgeCheck,
  },
];

export const documents = [
  {
    title: "Solicitud inicial",
    type: "Formulario",
    status: "Completo",
    owner: people.student.name,
    version: "v1.2",
  },
  {
    title: "Convenio o autorización",
    type: "Adjunto",
    status: "Cargado",
    owner: organization.name,
    version: "v1.0",
  },
  {
    title: "Plan de práctica",
    type: "Plan",
    status: "Completo",
    owner: people.student.name,
    version: "v1.1",
  },
  {
    title: "Cronograma de actividades",
    type: "Cronograma",
    status: "Validado",
    owner: people.student.name,
    version: "v1.0",
  },
  {
    title: "Informe parcial",
    type: "Seguimiento",
    status: "Programado",
    owner: people.teacher.name,
    version: "Pendiente",
  },
  {
    title: "Informe final",
    type: "Cierre",
    status: "No habilitado",
    owner: people.coordination.name,
    version: "Pendiente",
  },
];

export const checklist = [
  {
    label: "Datos personales y académicos",
    status: "Completo",
    help: "Legajo, carrera, DNI y datos de contacto validados.",
  },
  {
    label: "Datos de la práctica",
    status: "Completo",
    help: "Objetivos, tareas y condiciones de realización cargadas.",
  },
  {
    label: "Organización receptora",
    status: "Completo",
    help: "CUIT, domicilio y contacto institucional.",
  },
  {
    label: "Referente externo",
    status: "Completo",
    help: "Nombre, cargo, email y teléfono verificados.",
  },
  {
    label: "Plan de práctica",
    status: "Completo",
    help: "Objetivos, cronograma y alcance definidos.",
  },
  {
    label: "Cronograma",
    status: "Validado",
    help: "La carga horaria se toma desde la configuración de carrera.",
  },
  {
    label: "Documentación obligatoria",
    status: "Cargado",
    help: "Archivo PDF cargado y pendiente de revisión institucional.",
  },
  {
    label: "Firmas iniciales",
    status: "Pendiente",
    help: "Falta la firma del referente externo.",
  },
];

export const signatures = [
  {
    signer: people.student.name,
    role: people.student.role,
    email: people.student.email,
    document: "Solicitud inicial",
    status: "Firmado",
    signedAt: "2026-06-01 10:14",
    code: "FIR-PPS0-MLO-8B42",
    hash: "sha256:8b42-pps0-martina-v12",
  },
  {
    signer: people.supervisor.name,
    role: people.supervisor.role,
    email: people.supervisor.email,
    document: "Plan de práctica",
    status: "Pendiente",
    signedAt: "A completar",
    code: "Pendiente",
    hash: "sha256:pps0-supervisor-pending",
  },
  {
    signer: people.teacher.name,
    role: people.teacher.role,
    email: people.teacher.email,
    document: "Informe final",
    status: "Programado",
    signedAt: "No habilitado",
    code: "Pendiente",
    hash: "Pendiente",
  },
];

export const observations = [
  {
    author: people.coordination.name,
    role: "Coordinación",
    target: "Plan de práctica",
    message:
      "Validar que el plan de práctica distinga actividades técnicas de tareas rutinarias.",
    status: "Abierta",
    createdAt: "2026-06-01 12:32",
  },
  {
    author: people.teacher.name,
    role: "Tutor académico",
    target: "Informe final",
    message:
      "El objetivo está alineado con la carrera. Se sugiere explicitar evidencias y resultados.",
    status: "Informativa",
    createdAt: "2026-05-30 16:05",
  },
];

export const auditEvents = [
  {
    event: "Solicitud creada",
    actor: people.student.name,
    role: people.student.role,
    date: "2026-05-18 09:08",
  },
  {
    event: "Carrera y plan seleccionados",
    actor: people.student.name,
    role: people.student.role,
    date: "2026-05-18 09:12",
  },
  {
    event: "Documentación enviada a revisión",
    actor: people.student.name,
    role: people.student.role,
    date: "2026-05-29 18:41",
  },
  {
    event: "Firma del estudiante registrada",
    actor: people.student.name,
    role: people.student.role,
    date: "2026-06-01 10:14",
  },
  {
    event: "Validación inicial registrada",
    actor: "Sistema PPS Talentia",
    role: "Automatización",
    date: "2026-06-01 10:15",
  },
];

export const rolePanels = [
  {
    title: "Estudiante",
    description:
      "Solicita la PPS, carga documentación, registra horas y responde observaciones.",
    icon: GraduationCap,
  },
  {
    title: "Tutor académico",
    description:
      "Revisa el plan, acompaña el seguimiento y evalúa el informe final.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Referente externo",
    description:
      "Valida actividades, horas, desempeño y confirma la finalización en la organización.",
    icon: BookOpenCheck,
  },
  {
    title: "Coordinación PPS",
    description:
      "Supervisa el circuito, asigna actores y controla estados, documentación y cierre.",
    icon: Users,
  },
];

export const dashboardCards = [
  {
    label: "Estado actual",
    value: statusLabels[caseSummary.status],
    detail: "La revisión académica define el próximo paso del expediente.",
    icon: Clock3,
  },
  {
    label: "Horas declaradas",
    value: `${caseSummary.totalDeclaredHours} h`,
    detail: caseSummary.hoursPolicy,
    icon: CheckCircle2,
  },
  {
    label: "Documentos",
    value: "5/6",
    detail: "La documentación obligatoria es configurable por institución.",
    icon: FileCheck2,
  },
  {
    label: "Observaciones",
    value: "1 abierta",
    detail: "Coordinación pidió una precisión en el plan de práctica.",
    icon: AlertCircle,
  },
];

export const coordinationMetrics = [
  { label: "Expedientes activos", value: "42" },
  { label: "Pendientes de revisión", value: "11" },
  { label: "Pendientes de firma", value: "8" },
  { label: "Observados", value: "5" },
  { label: "Aprobados este mes", value: "17" },
];

export const assignedCases = [
  {
    id: "PPS-2026-0142",
    student: people.student.name,
    status: statusLabels[caseSummary.status],
    next: "Revisión académica",
    hours: 220,
  },
  {
    id: "PPS-2026-0129",
    student: "Agustín Pereyra",
    status: "En evaluación final",
    next: "Comentario del tutor académico",
    hours: 205,
  },
  {
    id: "PPS-2026-0118",
    student: "Sofía Barrera",
    status: "Observada",
    next: "Corrección del estudiante",
    hours: 198,
  },
];

export const schemaEntities = [
  "users",
  "student_profiles",
  "organizations",
  "supervisors",
  "pps_cases",
  "pps0_submissions",
  "pps1_submissions",
  "documents",
  "signatures",
  "observations",
  "audit_events",
  "notifications",
];

export const validationRules = [
  "No se puede enviar una solicitud sin datos completos.",
  "La cantidad de horas se toma de la configuración de la carrera.",
  "No se avanza sin validación académica y administrativa cuando corresponda.",
  "Toda corrección queda registrada en auditoría.",
  "No se emite la constancia final sin evaluaciones y firmas requeridas.",
];

export const requirements = [
  "La documentación obligatoria se define por institución, carrera, plan de estudios y reglamento interno.",
  "La solicitud inicial debe incluir datos académicos, organización receptora y responsable externo.",
  "El plan de práctica debe indicar objetivos, actividades, cronograma y criterios de validación.",
  "El seguimiento de horas y actividades se carga según la configuración adoptada por la carrera.",
  "El informe final y la evaluación pueden ampliarse en futuras versiones para Licenciatura.",
];

export const quickActions = [
  { href: "/dashboard/agente-spect", label: "Abrir asistente", icon: Bot },
  { href: "/dashboard/pps0", label: "Completar PPS0", icon: ClipboardCheck },
  { href: "/dashboard/firmas", label: "Ver firmas", icon: PenLine },
  { href: "/dashboard/expediente", label: "Abrir expediente", icon: History },
  { href: "/coordinacion", label: "Panel coordinación", icon: UserCheck },
];
