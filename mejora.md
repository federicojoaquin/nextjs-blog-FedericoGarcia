# 🎨 Plan de Mejoras UI — Portfolio fgarciadev.com

## Diagnóstico actual

El portfolio tiene una base funcional sólida pero presenta problemas visuales que lo hacen lucir poco profesional como carta de presentación para un desarrollador backend senior:

| Problema | Impacto |
|---|---|
| Fondo blanco plano con partículas grises sueltas | Apariencia básica, sin personalidad |
| Ilustración de cartoon en sección "About me" | Tono infantil, incoherente con un perfil técnico |
| Subtítulo animado con gradiente amarillo/azul/gris | Colores desarmónicos, muy llamativo sin ser elegante |
| Ícono de Python flotante en hero | Innecesario, rompe la composición |
| Iconos de tecnologías como grid de emojis sueltos | Sin estructura, desordenado visually |
| Tarjetas de soft skills con borde fino y sin jerarquía | Poca visual weight, se pierden |
| Botón "Sobre mi" con estilo `btn-outline-dark` de Bootstrap puro | Genérico, sin identidad |
| Navbar sin background definido en scroll | Transparente, se confunde con el contenido |
| Timeline de experiencia con borde azul puro `#3F51B5` | Color institucional sin refinamiento |
| Tipografía: mezcla de browser-default y Alata sin sistema coherente | Falta jerarquía tipográfica clara |

---

## Paleta de colores propuesta

Cambiar del esquema blanco/azul genérico a un dark mode sobrio y moderno con un accent color único:

```
--bg-primary:    #0D0F14   /* Negro profundo, fondo principal */
--bg-secondary:  #161923   /* Cards y secciones alternas */
--bg-card:       #1E2130   /* Superficie de cards */
--accent:        #6C63FF   /* Violeta profesional, 1 solo accent */
--accent-light:  #8B85FF   /* Hover states */
--text-primary:  #F0F2F8   /* Blanco suave para títulos */
--text-secondary:#9BA3B8   /* Gris claro para párrafos */
--border:        #2A2F42   /* Borders sutiles */
```

> **Por qué violeta:** Es el color asociado a tech/creatividad sin ser el azul genérico de Bootstrap. Se distancia del diseño actual y es coherente con el stack moderno (Next.js, Python).

---

## Mejoras por sección

### 1. Hero (Landing — `page.js` + `Styles.css`)

**Problema:** Fondo blanco, partículas grises, subtítulo multicolor, ícono de Python flotante.

**Solución:**
- Cambiar fondo a `--bg-primary` (#0D0F14 dark) o mantener light pero con más jerarquía
- **Eliminar el ícono de Python** (`tecPyIcon`) — es ruido visual
- Reemplazar el gradiente del subtítulo por texto estático o un typewriter effect elegante en `--accent`
- **Foto de perfil:** cambiar el borde `2px solid #000` por un ring con gradiente o glow sutil en `--accent`
- **Botón CTA "Sobre mí":** reemplazar `btn-outline-dark` por un botón custom con background `--accent`, border-radius 8px, sin Bootstrap
- **Partículas:** bajar la densidad y cambiar el color a `--accent` con muy baja opacidad para dar profundidad sin distracción
- **Social icons:** hacerlos más grandes y con hover effect (scale + color change)

**Archivos a modificar:**
- `app/[locale]/page.js`
- `app/[locale]/Styles.css`

---

### 2. Navbar (`Navbar.js` + `Navbar.css`)

**Problema:** Sin background en estado inicial, se mezcla con el contenido al hacer scroll.

**Solución:**
- Agregar `backdrop-filter: blur(12px)` + `background: rgba(13,15,20,0.85)` al hacer scroll (sticky)
- Links con hover underline animado desde el centro en `--accent`
- Eliminar o refinar el selector de idioma — actualmente parece un componente de sistema operativo
- Logo/nombre en la navbar con tipografía definida (no la default)

**Archivos a modificar:**
- `app/[locale]/components/Navbar.js`
- `app/[locale]/components/Styles/Navbar.css`

---

### 3. About Me (`Section1.js` + `Section1.css`)

**Problema:** Ilustración de cartoon, fondo celeste plano, texto con bold random en mitad de párrafo.

**Solución:**
- **Reemplazar la imagen de cartoon** por una imagen profesional real (la foto de Federico o una imagen de código/terminal estilizada en dark)
- Cambiar fondo de la sección a `--bg-secondary` para separación visual
- Agregar una línea decorativa o badge antes del título (ej: `< About />` en monospace con `--accent`)
- **Botón "Download CV":** misma línea de estilo que el CTA del hero — remover `btnNeon` con shadow morado genérico
- Texto: mantener los bolds pero en los términos correctos — limpiar el `dangerouslySetInnerHTML` si hay etiquetas extra

**Archivos a modificar:**
- `app/[locale]/components/Section1.js`
- `app/[locale]/components/Styles/Section1.css`

---

### 4. Skills / Tecnologías (`Tecnologies.js` + `Tecnologies.css`)

**Problema:** Grid de íconos sueltos sin contenedor, mezcla de emojis con íconos SVG, sin categorización.

**Solución:**
- **Agrupar por categoría** con subtítulos claros:
  - Backend (Python, Django, PostgreSQL, PL/SQL, Oracle)
  - Cloud & DevOps (AWS, Docker, Linux)
  - Frontend (React, Next.js, HTML, CSS, JS, Node)
  - Académico (Haskell, Prolog)
- Cada ícono en una **pill card** con fondo `--bg-card`, border `--border`, y hover que levanta con `--accent` shadow
- Eliminar la separación de "Soft skills" en cards separadas y convertirlos en **tags** dentro de la sección skills (usan demasiado espacio)
- Soft skills como: badges con borde en `--accent` y fondo transparente

**Archivos a modificar:**
- `app/[locale]/components/Tecnologies.js`
- `app/[locale]/components/Styles/Tecnologies.css`

---

### 5. Experience / Timeline (`Timeline.js` + `Timeline.css`)

**Problema:** Borde azul `#3F51B5` en cards, sin fecha resaltada, fondo blanco.

**Solución:**
- Cards con fondo `--bg-card` y borde izquierdo de 3px en `--accent` (estilo moderno, sin borde completo)
- Línea vertical del timeline en `--accent` con opacidad 40%
- Punto central del timeline: círculo relleno `--accent` con pulse animation sutil
- **Fecha en chip:** pill con fondo `--accent/20`, texto `--accent`, en la parte superior de la card
- Hover: `box-shadow` suave en `--accent` (ya existe, solo limpiar los px actuales)
- Íconos de tecnologías dentro del timeline: misma pill card que la sección Skills

**Archivos a modificar:**
- `app/[locale]/components/Timeline.js`
- `app/[locale]/components/Styles/Timeline.css`

---

### 6. Projects / Cards (`Proyect.js`, `Card.js`, etc.)

**Revisión pendiente** — ver el diseño actual antes de proponer cambios. En general:
- Cards con imagen de preview o screenshot del proyecto
- Tags de tecnologías usadas
- Botones de "Ver demo" y "GitHub" con iconos

---

### 7. Sistema tipográfico unificado

Actualmente hay mezcla de fuentes por defecto con Alata importada solo en Section1. Propuesta de sistema completo:

```css
/* En globals.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

--font-sans: 'Inter', system-ui, sans-serif;   /* Cuerpo y UI */
--font-mono: 'JetBrains Mono', monospace;       /* Código, labels técnicos */
```

- Títulos de sección: `Inter 700`, 2rem
- Párrafos: `Inter 400`, 1rem, line-height 1.75
- Labels técnicos (badges, fechas, categorías): `JetBrains Mono 500`

> Eliminar Alata (solo se usa en Section1, no aporta consistencia)

---

### 8. Micro-interacciones generales

- **Scroll reveal:** aplicar `Intersection Observer` (ya existe en el proyecto) a TODAS las secciones, no solo al timeline
- **Cursor personalizado:** dot pequeño con acento `--accent` que sigue el mouse (optional, muy elegante)
- **Hover en links de navbar:** subrayado que crece desde el centro
- **Transiciones globales:** `transition: all 0.2s ease` como default en elementos interactivos

---

## Cambios en `globals.css`

Centralizar las variables CSS aquí en vez de tener colores hardcodeados en cada archivo:

```css
:root {
  --bg-primary:    #0D0F14;
  --bg-secondary:  #161923;
  --bg-card:       #1E2130;
  --accent:        #6C63FF;
  --accent-light:  #8B85FF;
  --text-primary:  #F0F2F8;
  --text-secondary:#9BA3B8;
  --border:        #2A2F42;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## Archivos a modificar (resumen)

| Archivo | Cambio principal |
|---|---|
| `app/globals.css` | Sistema de design tokens + fuentes |
| `app/[locale]/Styles.css` | Hero: dark bg, tipografía, quitar gradient infantil |
| `app/[locale]/page.js` | Quitar ícono Python, refactorizar botón CTA |
| `components/Navbar.js` | Sticky con blur, hover en links |
| `components/Styles/Navbar.css` | Backdrop blur, transiciones |
| `components/Section1.js` | Reemplazar imagen cartoon |
| `components/Styles/Section1.css` | Dark surface, tipografía, botón |
| `components/Tecnologies.js` | Agrupar por categoría, pill cards |
| `components/Styles/Tecnologies.css` | Pill cards con hover |
| `components/Timeline.js` | Chip de fecha, borde izquierdo accent |
| `components/Styles/Timeline.css` | Dark cards, accent border, pulse dot |

---

## Lo que NO cambia

- Estructura de routing con `next-intl` (multi-idioma)
- Lógica de i18n
- Animación de partículas (solo ajuste de color/densidad)
- Scroll reveal con Intersection Observer
- Nombres de componentes y estructura de carpetas
