import {
  AlertCircle,
  BadgeCheck,
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
  | "draft_started"
  | "modality_selected"
  | "pps0_in_progress"
  | "waiting_student_signature"
  | "waiting_supervisor_signature"
  | "ready_for_coordination_review"
  | "coordination_review"
  | "changes_requested"
  | "initial_approved"
  | "pps1_enabled"
  | "pps1_submitted"
  | "pps1_under_review"
  | "pps1_approved"
  | "final_enabled"
  | "final_submitted"
  | "final_under_review"
  | "approved"
  | "rejected"
  | "archived";

export const statusLabels: Record<CaseStatus, string> = {
  draft_started: "Borrador iniciado",
  modality_selected: "Modalidad seleccionada",
  pps0_in_progress: "PPS0 en carga",
  waiting_student_signature: "Pendiente de firma del estudiante",
  waiting_supervisor_signature: "Pendiente de firma del supervisor",
  ready_for_coordination_review: "Listo para revisión de coordinación",
  coordination_review: "En revisión por coordinación",
  changes_requested: "Observado, requiere corrección",
  initial_approved: "Documentación inicial aprobada",
  pps1_enabled: "Primera entrega habilitada",
  pps1_submitted: "PPS1 entregado",
  pps1_under_review: "PPS1 en revisión",
  pps1_approved: "PPS1 aprobado",
  final_enabled: "Entrega final habilitada",
  final_submitted: "Entrega final presentada",
  final_under_review: "Cierre en evaluación",
  approved: "Acreditación PPS aprobada",
  rejected: "No aprobado",
  archived: "Archivado",
};

export const people = {
  student: {
    name: "Martina López",
    role: "Estudiante",
    carrera: "Ingeniería Industrial",
    legajo: "175432",
    email: "martina.lopez@alumnos.frba.utn.edu.ar",
    phone: "+54 11 4020-1848",
  },
  supervisor: {
    name: "Carlos Méndez",
    role: "Supervisor de Campo",
    position: "Jefe de Operaciones",
    email: "carlos.mendez@logisticasur.com",
    phone: "+54 11 4555-0900",
  },
  teacher: {
    name: "Ing. Laura Fernández",
    role: "Docente Evaluador",
    email: "laura.fernandez@frba.utn.edu.ar",
  },
  coordination: {
    name: "Coordinación PPS Logística",
    role: "Coordinación PPS",
    email: "pps.logistica@frba.utn.edu.ar",
  },
};

export const organization = {
  name: "Logística Sur S.A.",
  cuit: "30-71621984-7",
  area: "Operaciones",
  address: "Av. del Trabajo 1420, Buenos Aires",
  studentPosition: "Analista de procesos logísticos",
};

export const caseSummary = {
  id: "PPS-2026-0142",
  modality: "Modalidad Laboral",
  status: "coordination_review" as CaseStatus,
  totalRequiredHours: 200,
  totalDeclaredHours: 220,
  createdAt: "2026-05-18",
  updatedAt: "2026-06-01",
  approvedAt: null,
  project: {
    topic: "Optimización del proceso de preparación de pedidos",
    objective:
      "Relevar, analizar y proponer mejoras en el flujo operativo de picking y despacho.",
    expectedHours: 220,
  },
};

export const benefits = [
  "Checklist guiado de documentación",
  "Firma electrónica con trazabilidad",
  "Seguimiento de estados en tiempo real",
  "Observaciones y correcciones centralizadas",
  "Registro de horas y avances",
  "Expediente final descargable",
];

export const processSteps = [
  {
    title: "Inicio del trámite digital",
    description:
      "El estudiante revisa requisitos, selecciona modalidad e inicia un expediente PPS.",
    status: "Completo",
    icon: FileText,
  },
  {
    title: "Carga PPS0",
    description:
      "Datos personales, organización, supervisor, proyecto, cronograma y constancia laboral.",
    status: "Completo",
    icon: ClipboardCheck,
  },
  {
    title: "Firma electrónica inicial",
    description:
      "Estudiante y Supervisor de Campo firman con registro de consentimiento, fecha, hash e historial.",
    status: "En curso",
    icon: PenLine,
  },
  {
    title: "Revisión académica",
    description:
      "Coordinación valida documentación, puede observar o derivar a evaluación docente.",
    status: "Pendiente",
    icon: ShieldCheck,
  },
  {
    title: "PPS1 y seguimiento",
    description:
      "El estudiante entrega avances, horas y evidencias; supervisor y docente revisan.",
    status: "Pendiente",
    icon: CalendarClock,
  },
  {
    title: "Cierre y constancia",
    description:
      "Entrega final, firmas completas, aprobación formal y expediente descargable.",
    status: "Pendiente",
    icon: BadgeCheck,
  },
];

export const documents = [
  {
    title: "Formulario PPS0",
    type: "PPS0",
    status: "Completo",
    owner: people.student.name,
    version: "v1.2",
  },
  {
    title: "Constancia laboral",
    type: "Adjunto",
    status: "Cargado",
    owner: organization.name,
    version: "v1.0",
  },
  {
    title: "Desarrollo del proyecto",
    type: "Proyecto",
    status: "Completo",
    owner: people.student.name,
    version: "v1.1",
  },
  {
    title: "Cronograma",
    type: "Cronograma",
    status: "Validado: 220 horas",
    owner: people.student.name,
    version: "v1.0",
  },
  {
    title: "PPS1 Avance",
    type: "PPS1",
    status: "Programado",
    owner: people.teacher.name,
    version: "Pendiente",
  },
  {
    title: "PPS1 Final",
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
    label: "Datos laborales",
    status: "Completo",
    help: "Cargo, área, antigüedad y funciones cargadas.",
  },
  {
    label: "Organización",
    status: "Completo",
    help: "CUIT, domicilio y contacto institucional.",
  },
  {
    label: "Supervisor de Campo",
    status: "Completo",
    help: "Nombre, cargo, email y teléfono verificados.",
  },
  {
    label: "Desarrollo del proyecto",
    status: "Completo",
    help: "Resumen dentro del límite sugerido de dos carillas.",
  },
  {
    label: "Cronograma",
    status: "Validado",
    help: "El plan alcanza 220 horas declaradas.",
  },
  {
    label: "Constancia laboral",
    status: "Cargado",
    help: "Archivo PDF cargado y pendiente de revisión institucional.",
  },
  {
    label: "Firmas iniciales",
    status: "Pendiente",
    help: "Falta la firma del Supervisor de Campo.",
  },
];

export const signatures = [
  {
    signer: people.student.name,
    role: people.student.role,
    email: people.student.email,
    document: "PPS0",
    status: "Firmado",
    signedAt: "2026-06-01 10:14",
    code: "FIR-PPS0-MLO-8B42",
    hash: "sha256:8b42-pps0-martina-v12",
  },
  {
    signer: people.supervisor.name,
    role: people.supervisor.role,
    email: people.supervisor.email,
    document: "PPS0",
    status: "Pendiente",
    signedAt: "A completar",
    code: "Pendiente",
    hash: "sha256:pps0-supervisor-pending",
  },
  {
    signer: people.teacher.name,
    role: people.teacher.role,
    email: people.teacher.email,
    document: "PPS1 Avance",
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
    target: "Cronograma",
    message:
      "Validar que las actividades de mejora queden separadas de las tareas operativas habituales.",
    status: "Abierta",
    createdAt: "2026-06-01 12:32",
  },
  {
    author: people.teacher.name,
    role: "Docente Evaluador",
    target: "Proyecto",
    message:
      "El objetivo está alineado con la carrera. Se sugiere agregar indicador de tiempo de preparación.",
    status: "Informativa",
    createdAt: "2026-05-30 16:05",
  },
];

export const auditEvents = [
  {
    event: "Expediente creado",
    actor: people.student.name,
    role: people.student.role,
    date: "2026-05-18 09:08",
  },
  {
    event: "Modalidad Laboral seleccionada",
    actor: people.student.name,
    role: people.student.role,
    date: "2026-05-18 09:12",
  },
  {
    event: "PPS0 enviado a firma",
    actor: people.student.name,
    role: people.student.role,
    date: "2026-05-29 18:41",
  },
  {
    event: "Firma electrónica del estudiante registrada",
    actor: people.student.name,
    role: people.student.role,
    date: "2026-06-01 10:14",
  },
  {
    event: "Validación automática de cronograma aprobada",
    actor: "Sistema PPS Digital",
    role: "Automatización",
    date: "2026-06-01 10:15",
  },
];

export const rolePanels = [
  {
    title: "Estudiante",
    description:
      "Carga documentos, firma formularios, corrige observaciones y consulta el estado del expediente.",
    icon: GraduationCap,
  },
  {
    title: "Supervisor de Campo",
    description:
      "Valida vínculo laboral, horas, feedback y firma documentos desde un acceso seguro.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Docente Evaluador",
    description:
      "Revisa PPS0, avances y cierre final con rúbrica, comentarios y firma trazable.",
    icon: BookOpenCheck,
  },
  {
    title: "Coordinación PPS",
    description:
      "Audita documentación, solicita correcciones, administra estados y aprueba formalmente.",
    icon: Users,
  },
];

export const dashboardCards = [
  {
    label: "Estado actual",
    value: statusLabels[caseSummary.status],
    detail: "Falta la firma del Supervisor de Campo para continuar.",
    icon: Clock3,
  },
  {
    label: "Horas previstas",
    value: "220 h",
    detail: "Cumple el mínimo requerido de 200 horas.",
    icon: CheckCircle2,
  },
  {
    label: "Documentos",
    value: "4/5",
    detail: "La documentación inicial está cargada.",
    icon: FileCheck2,
  },
  {
    label: "Observaciones",
    value: "1 abierta",
    detail: "Coordinación pidió una precisión en cronograma.",
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
    next: "Firma del Supervisor de Campo",
    hours: 220,
  },
  {
    id: "PPS-2026-0129",
    student: "Agustín Pereyra",
    status: "PPS1 en revisión",
    next: "Comentario docente",
    hours: 205,
  },
  {
    id: "PPS-2026-0118",
    student: "Sofía Barrera",
    status: "Observado, requiere corrección",
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
  "No se puede enviar PPS0 sin datos completos.",
  "El cronograma debe alcanzar al menos 200 horas.",
  "No se pasa a revisión académica sin firma del estudiante y del supervisor.",
  "Toda corrección queda registrada en auditoría.",
  "No se aprueba el cierre final sin horas suficientes y firmas completas.",
];

export const requirements = [
  "Formulario PPS0 con datos personales, académicos, laborales y del Supervisor de Campo.",
  "Constancia laboral que indique antigüedad y función o desempeño.",
  "Desarrollo del proyecto con tema, objetivos, actividades, empresa y vínculo con la carrera.",
  "Cronograma con actividades, fechas estimadas y mínimo 200 horas.",
  "PPS1 de avance y PPS1 Final con evidencias, feedback y firmas.",
];

export const quickActions = [
  { href: "/dashboard/pps0", label: "Completar PPS0", icon: ClipboardCheck },
  { href: "/dashboard/firmas", label: "Ver firmas", icon: PenLine },
  { href: "/dashboard/expediente", label: "Abrir expediente", icon: History },
  { href: "/coordinacion", label: "Panel coordinación", icon: UserCheck },
];
