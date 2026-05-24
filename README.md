# StreamFlix Actividades

Base en Next.js con App Router para 18 actividades educativas embebibles por iframe. El modulo se organiza en 6 guiones y cada guion tiene 3 actividades.

## Correr el proyecto

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Agregar una nueva actividad

1. Agregar metadata en `src/data/activities.ts` con `id`, `guideSlug`, `activitySlug`, `title`, `objective`, `route` y `order`.
2. Agregar contenido en `src/data/activityContent.tsx`: consigna, codigo inicial, preview, mensajes y funcion `validate`.
3. Crear la ruta en `src/app/actividades/[guion]/actividad-n/page.tsx` usando `ActivityPage`.
4. Si pertenece a un guion nuevo, agregar tambien su indice con `GuideIndex`.

Las validaciones deben analizar texto, no ejecutar codigo externo, y apoyarse en `src/lib/normalize.ts` para busquedas flexibles.

## Modificar una validacion

Cada guion tiene su archivo en `src/lib/validators/`:

- `componentes.ts`
- `templateHtml.ts`
- `includesHtml.ts`
- `utilidadesCss.ts`
- `insertarPlantillas.ts`
- `uiReutilizable.ts`

Todas las funciones devuelven:

```ts
{
  success: boolean;
  messages: string[];
}
```

Usa mensajes claros y accionables, por ejemplo: `Falta crear el template con id movie-card-template.`

## Embeber por iframe

Cada actividad es una ruta independiente. Ejemplo:

```html
<iframe
  src="https://tu-dominio.vercel.app/actividades/template-html/actividad-1"
  title="Actividad StreamFlix"
  width="100%"
  height="760"
></iframe>
```

Las pantallas son responsive y no requieren backend, base de datos, autenticacion ni variables de entorno.

## Publicar en Vercel

1. Subir el repositorio a GitHub, GitLab o Bitbucket.
2. Importarlo desde el dashboard de Vercel.
3. Vercel detecta Next.js automaticamente. Usar:
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `.next`
4. Publicar.
