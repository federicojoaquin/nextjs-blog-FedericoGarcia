# Plan: Migración Next.js 14.0.3 → 15.x

## Context
El proyecto es un portfolio con App Router, i18n via `next-intl`, y React 18. La versión actual es 14.0.3. La migración a Next.js 15 requiere corregir varios patrones inválidos que existen **incluso hoy** (como `<body>` en page components) que Next.js 15 rechaza más estrictamente, más los breaking changes propios de v15.

---

## Archivos críticos a modificar

| Archivo | Prioridad | Problema |
|---|---|---|
| `app/[locale]/layout.js` | CRÍTICO | params no-async, locale array wrong, sin NextIntlClientProvider |
| `app/[locale]/About/layout.js` | CRÍTICO | `<html>/<body>` anidado + `"use client"` inválido |
| `app/[locale]/page.js` | CRÍTICO | `<body>` como root, `<script>` CDN crudo |
| `app/[locale]/About/page.js` | CRÍTICO | `<body>` como root, import roto, `<script>` CDN crudo |
| `app/[locale]/head.js` | ALTO | Convención deprecated → eliminar |
| `app/[locale]/components/Proyect.js` | ALTO | `layout='responsive'` removido, `class` en vez de `className` |
| `app/[locale]/components/Section1.js` | ALTO | `layout='responsive'` removido |
| `app/[locale]/components/ParticleBackground.js` | MEDIO | API tsparticles v2 → v3 |
| `next.config.js` | MEDIO | `images.domains` → `remotePatterns`, remover file-loader |
| `navigation.js` | MEDIO | `createSharedPathnamesNavigation` → `createNavigation` |
| `middleware.js` | MEDIO | matcher muy restrictivo |
| `i18n.js` | MEDIO | firma `requestLocale` cambiada en next-intl 3.22+ |

---

## Paso 1 — Crear rama de migración

```bash
git checkout -b migration/nextjs-15
```

---

## Paso 2 — Correcciones estructurales (antes de tocar npm)

Estas fixes son válidas en Next.js 14 también, así que se pueden hacer primero y verificar que nada se rompa.

### 2a. `app/[locale]/About/layout.js`
Eliminar `<html>/<head>/<body>` y `"use client"` — solo el root layout puede tener esos tags.
```js
import './pageStyles.css'
export default function AboutLayout({ children }) {
  return children;
}
```

### 2b. `app/[locale]/page.js`
- Reemplazar `<body>` con `<main>`
- Reemplazar `<script>` CDN con `import Script from 'next/script'` + `strategy="afterInteractive"`
- Remover `useRouter` importado pero nunca usado

### 2c. `app/[locale]/About/page.js`
- Reemplazar `<body>` con `<main>`
- Reemplazar `<script>` CDN con `next/script`
- Eliminar `const messages = (import(...)).default` — import() es async, esto devuelve una Promise, no los datos (bug latente)
- Agregar `"use client"` (usa hooks de next-intl)
- Renombrar función `page` → `AboutPage` (componentes deben empezar en mayúscula)

### 2d. `app/[locale]/components/Proyect.js`
- Remover prop `layout='responsive'` (removido en Next.js 13+, crash en 15)
- Cambiar a: `width={700} height={200} style={{ width: '100%', height: 'auto' }}`
- Cambiar todos los `class=` → `className=` (JSX inválido)

### 2e. `app/[locale]/components/Section1.js`
- Remover prop `layout='responsive'`
- Cambiar a: `style={{ width: '100%', height: 'auto' }}`

**Verificar:** `npm run dev` debe arrancar sin errores en Next.js 14 con estos cambios.

---

## Paso 3 — Actualizar configuración de next-intl

### 3a. `app/[locale]/layout.js` — múltiples problemas
```js
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'es'];  // CORREGIDO: era ['en', 'de']

export const metadata = {
  title: 'Federico Garcia',
  description: 'Federico Garcia - Backend Developer Portfolio',
  icons: { icon: '/favicon.ico' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;  // async params - Next.js 15 breaking change

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

### 3b. `app/[locale]/head.js` — ELIMINAR
Mover metadata al layout (3a). Borrar este archivo.

### 3c. `navigation.js`
```js
import { createNavigation } from 'next-intl/navigation';  // renombrado en 3.22+

export const locales = ['en', 'es'];
export const defaultLocale = 'en';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({ locales, defaultLocale });
```

### 3d. `middleware.js` — actualizar matcher
```js
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']  // más robusto: excluye static files y _next
};
```

### 3e. `i18n.js` — actualizar firma
```js
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;  // es una Promise en next-intl 3.22+
  if (!locale || !['en', 'es'].includes(locale)) locale = 'en';
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

---

## Paso 4 — Actualizar packages

```bash
# Next.js 15 + React 18 (mantener React 18 primero, más seguro)
npm install next@15 react@18 react-dom@18

# next-intl latest
npm install next-intl@latest

# Verificar que arranca:
npm run dev
```

---

## Paso 5 — Migrar tsparticles (v2 → v3)

```bash
npm uninstall react-tsparticles tsparticles
npm install @tsparticles/react @tsparticles/slim
```

Actualizar `app/[locale]/components/ParticleBackground.js`:
```js
"use client"
import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import particlesConfig from '../Js/Particles-config'

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;
  return <Particles id="tsparticles" options={particlesConfig} />;
}
```

> ⚠️ El archivo `app/[locale]/Js/Particles-config.js` usa propiedades de la API v2 (e.g. `line_linked`, `out_mode`). Puede necesitar actualización a nombres v3 (`links`, `outModes`). Verificar en consola del browser.

---

## Paso 6 — Limpiar `next.config.js`

```js
const withNextIntl = require('next-intl/plugin')('./i18n.js');

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: 'i.ibb.co', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
});
```
- Eliminar el bloque `webpack` con `file-loader` — los PDFs en `public/` se sirven automáticamente
- Los dominios incorrectos (URLs completas) en `domains` nunca funcionaron bien

---

## Paso 7 — Limpieza de packages

```bash
# Mover eslint-config-next a devDependencies (está mal puesto)
npm uninstall eslint-config-next
npm install --save-dev eslint-config-next@latest

# Remover paquetes duplicados/sin uso
npm uninstall next-i18next react-i18next  # solo se usa next-intl
npm uninstall file-loader                  # webpack rule eliminada
```

Verificar antes de remover `@pdftron/webviewer` y `react-intersection-observer` — grep para confirmar que no se usan.

---

## Paso 8 — Codemod oficial (opcional, como verificación)

```bash
npx @next/codemod@latest upgrade latest
```
El codemod detecta automáticamente async-params y otros patterns. Revisar cada cambio antes de aceptar.

---

## Paso 9 — Build final

```bash
npm run build
npm run start
```

---

## Checklist de verificación

- [ ] `/en` carga correctamente
- [ ] `/es` carga correctamente
- [ ] Switcher de idioma cambia de `/en/...` → `/es/...`
- [ ] `/en/About` muestra todas las secciones (Skills, Experience, Projects)
- [ ] Partículas se ven en la home
- [ ] Links de descarga de CV funcionan
- [ ] Scroll del Navbar funciona (transparencia dinámica)
- [ ] Cards de proyectos muestran imágenes desde `i.ibb.co`
- [ ] `npm run build` sin errores
- [ ] Sin errores de hidratación en consola del browser
