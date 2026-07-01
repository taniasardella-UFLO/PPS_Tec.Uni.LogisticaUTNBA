export const assistantDimensions = [
  {
    key: "S",
    title: "Situacion",
    focus: "Detecta el caso real que origina el cambio.",
    outcome: "Actor, necesidad PPS, dolor actual y pantalla donde aparece.",
    checks: [
      "Estudiante con PPS activa o solicitud en borrador",
      "Tutor academico o referente externo identificable",
      "Rol academico responsable definido",
    ],
  },
  {
    key: "P",
    title: "Proceso",
    focus: "Alinea el cambio con el circuito PPS configurado por la institucion.",
    outcome: "Estado del expediente, paso del tramite y regla que habilita avanzar.",
    checks: [
      "Solicitud antes de revision academica",
      "Plan de practica luego de la documentacion inicial",
      "Cierre final con horas, evidencias y firmas requeridas",
    ],
  },
  {
    key: "E",
    title: "Evidencia",
    focus: "Define que datos, documentos y pruebas sostienen la decision.",
    outcome: "Campos, adjuntos, versiones, observaciones y eventos de auditoria.",
    checks: [
      "Documentacion obligatoria configurada por carrera",
      "Cronograma con horas definidas por el reglamento",
      "Registro de comentarios y correcciones",
    ],
  },
  {
    key: "C",
    title: "Criterios",
    focus: "Convierte la necesidad en aceptacion verificable.",
    outcome: "Condiciones de exito, validaciones y errores esperados.",
    checks: [
      "No se envia si faltan datos obligatorios",
      "Cada rol ve solo acciones pertinentes",
      "La interfaz muestra proximo paso claro",
    ],
  },
  {
    key: "T",
    title: "Trazabilidad",
    focus: "Cierra el cambio con historial, pruebas y despliegue.",
    outcome: "Evento auditable, test o build verificado y ruta publicada.",
    checks: [
      "Audit event por firma, carga, observacion o aprobacion",
      "Build local antes de publicar",
      "Cambio orientado a la URL de Vercel del proyecto",
    ],
  },
];

export const assistantIntegrationFlow = [
  {
    stage: "Configuracion institucional",
    title: "Reglas de la PPS",
    description: "La institucion define carrera, plan, documentos, horas y estados habilitados.",
    route: "/dashboard/modalidad",
  },
  {
    stage: "Modulo PPS",
    title: "Expediente digital",
    description:
      "El agente transforma la solicitud en plan de practica, firmas, seguimiento y cierre.",
    route: "/dashboard/expediente",
  },
  {
    stage: "Circuito academico",
    title: "Revision y acreditacion",
    description:
      "Coordinacion, tutor y referente externo revisan evidencias hasta aprobar el cierre PPS.",
    route: "/coordinacion",
  },
];

export const assistantBacklog = [
  {
    priority: "1",
    change: "Entrada PPS configurable",
    target: "Crear acceso desde una solicitud institucional hacia el flujo PPS.",
    route: "/dashboard/modalidad",
    acceptance:
      "La solicitud inicia o actualiza un expediente PPS con la configuracion de carrera precargada.",
  },
  {
    priority: "2",
    change: "Ficha de compatibilidad PPS",
    target: "Validar si la propuesta cumple horas, tareas y referente.",
    route: "/dashboard/pps0",
    acceptance:
      "La ficha bloquea el envio si faltan horas, referente o relacion con la carrera.",
  },
  {
    priority: "3",
    change: "Invitacion segura al referente externo",
    target: "Permitir que la organizacion confirme datos y firme.",
    route: "/dashboard/firmas",
    acceptance:
      "El referente ve solo su expediente asignado y cada firma genera registro auditable.",
  },
  {
    priority: "4",
    change: "Panel de Coordinacion",
    target: "Priorizar cambios y observaciones por estado academico.",
    route: "/coordinacion",
    acceptance:
      "Coordinacion ve que casos estan listos, observados, pendientes de firma o de evaluacion.",
  },
];

export const assistantChecklist = [
  "Nombrar actor principal y actor que valida.",
  "Ubicar el paso PPS afectado: solicitud, firmas, seguimiento, cierre o auditoria.",
  "Definir campos y documentos que cambian.",
  "Escribir criterios de aceptacion antes de modificar la interfaz.",
  "Agregar trazabilidad: estado, observacion, firma o evento historico.",
  "Verificar build y ruta visible en la web publicada.",
];

export const assistantPrompt = `Actua como Agente para PPS Talentia.

Objetivo: orientar y convertir necesidades del producto PPS Talentia en cambios concretos para la web pps-tec-uni-logistica-utnba.vercel.app, integrada como modulo de una plataforma universitaria.

Antes de proponer o editar, completa:
S - Situacion: actor, necesidad, dolor y pantalla afectada.
P - Proceso: etapa PPS, estado del expediente y regla institucional.
E - Evidencia: datos, documentos, firmas, observaciones y auditoria.
C - Criterios: condiciones de aceptacion y errores a prevenir.
T - Trazabilidad: evento historico, prueba, build y ruta de despliegue.

Salida esperada:
1. Decision de producto.
2. Cambios de interfaz o datos.
3. Criterios de aceptacion.
4. Archivos o rutas a modificar.
5. Verificacion antes de publicar.`;
