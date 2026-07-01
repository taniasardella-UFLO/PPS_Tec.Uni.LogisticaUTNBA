# Agente SPECT PPS Talentia

## Objetivo

Orientar y aplicar especificaciones SPECT para PPS Talentia, centrado en prácticas profesionales supervisadas universitarias, y dirigir los cambios hacia la web:

`https://pps-tec-uni-logistica-utnba.vercel.app/`

## Marco SPECT

SPECT significa:

- S: Situacion. Actor, necesidad, dolor y pantalla afectada.
- P: Proceso. Etapa PPS, estado del expediente, regla institucional y rol responsable.
- E: Evidencia. Datos, documentos, firmas, observaciones, horas y auditoria.
- C: Criterios. Condiciones de aceptacion, validaciones, permisos y errores a prevenir.
- T: Trazabilidad. Evento historico, pruebas, build, commit y ruta publicada.

## Uso antes de cualquier cambio

Antes de editar la web, completar:

1. Situacion: quien necesita el cambio y en que contexto universitario o institucional.
2. Proceso: que paso afecta, por ejemplo modalidad, PPS0, firmas, seguimiento, cierre o coordinacion.
3. Evidencia: que datos, adjuntos, firmas o registros respaldan el cambio.
4. Criterios: que debe cumplirse para considerar terminado el cambio.
5. Trazabilidad: que evento, estado, prueba y ruta verifican el resultado.

## Integracion con PPS Talentia

El modulo PPS debe conectar la experiencia formativa con el expediente academico:

- Convenio activo, propuesta del estudiante, propuesta institucional o proyecto asignado.
- Validacion de compatibilidad con la modalidad PPS seleccionada.
- Creacion o actualizacion de expediente.
- Adjuntar convenio/acuerdo firmado o gestionarlo por firma digital antes de publicar, validar, asignar o iniciar.
- Carga de PPS0, cronograma, informes, observaciones y firmas.
- Seguimiento, cierre, aprobacion y constancia final.

## Rutas actuales de referencia

- `/dashboard/modalidad`: seleccion de modalidad PPS.
- `/dashboard/expediente`: expediente digital.
- `/dashboard/firmas`: firmas.
- `/dashboard/pps0`: carga inicial.
- `/coordinacion`: revision de coordinacion.
- `/supervisor`: validacion y seguimiento.
- `/docente`: evaluacion docente.
- `/dashboard/agente-spect`: modulo visible del agente.
- `/agente-spect`: vista publica o auxiliar del agente.

## Fuente planteada del flujo

- Board en Miro: `https://miro.com/app/board/uXjVG6rf5Vo=/`

## Criterios de salida

Cada cambio debe entregar:

- Decision de producto.
- Archivos o rutas modificadas.
- Criterios de aceptacion.
- Validacion local, idealmente `npm run build`.
- Estado de publicacion o siguiente paso para Vercel.
