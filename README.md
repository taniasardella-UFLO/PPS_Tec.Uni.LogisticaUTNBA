# PPS Talentia

Sistema navegable para gestionar PPS universitarias con configuracion por institucion, trazabilidad y flujo de constancia final.

## Stack

- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- Componentes UI estilo shadcn
- Datos mock preparados para migrar a Supabase

## Scripts

```bash
npm run dev
npm run build
```

## Flujo cubierto

- Landing publica, requisitos y como funciona.
- Login mock.
- Dashboard de estudiante.
- Seleccion de modalidad.
- Checklist PPS0.
- Firma electronica simulada con trazabilidad.
- Expediente digital con timeline y auditoria.
- Paneles para Coordinacion, Supervisor y Docente Evaluador.
- Asistente SPECT para orientar especificaciones del modulo PPS integrado a una plataforma universitaria.

## Asistente SPECT

El agente esta documentado en `.agents/pps-spect-agent.md` y visible en:

- `/agente-spect`
- `/dashboard/agente-spect`

SPECT organiza cada cambio en Situacion, Proceso, Evidencia, Criterios y Trazabilidad para dirigir mejoras hacia la web publicada en Vercel.
