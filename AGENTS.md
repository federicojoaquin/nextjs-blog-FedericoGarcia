# AGENTS.md — Portfolio Federico Garcia

## Project Overview

Personal portfolio website for Federico Garcia built with Next.js App Router and internationalization (English/Spanish). Features a dark/light theme toggle with animated particle backgrounds, soft skill cards with orbit animations, project showcases, experience timeline, and technology stack display.

**Live URL**: Deployed on Vercel.

---

## Tech Stack & Versions

| Dependency               | Version   | Purpose                                    |
|--------------------------|-----------|--------------------------------------------|
| Next.js                  | ^16.1.6   | React framework (App Router)               |
| React / React-DOM        | ^18.3.1   | UI library                                 |
| next-intl                | ^4.8.3    | Internationalization (en/es)               |
| @tsparticles/react       | ^3.0.0    | React wrapper for tsParticles              |
| @tsparticles/slim        | ^3.9.1    | Particle animation engine (slim bundle)    |
| Bootstrap                | ^5.2.3    | CSS framework (grid, utilities)            |
| bootstrap-icons          | ^1.10.3   | Icon set                                   |
| react-intersection-observer | ^9.4.3 | Scroll-triggered animations                |
| swiper                   | ^9.2.4    | Carousel/slider                            |
| @pdftron/webviewer       | ^8.12.0   | PDF viewer (CV display)                    |

### Dev Dependencies

| Dependency               | Version   |
|--------------------------|-----------|
| eslint-config-next       | ^16.1.6   |
| webpack                  | ^5.75.0   |

### Engine Requirement

- **Node.js >= 24.0.0**

### Scripts

```bash
npm run dev     # next dev --turbopack
npm run build   # next build
npm run start   # next start
npm run lint    # next lint
```

---

## Architecture & Directory Structure

```
nextjs-blog-FedericoGarcia/
├── AGENTS.md                  # This file
├── package.json
├── next.config.js             # next-intl plugin + image remote patterns
├── i18n.js                    # next-intl server request config
├── navigation.js              # createNavigation (locales, Link, useRouter, etc.)
├── middleware.js               # next-intl locale routing middleware
├── jsconfig.json
├── webpack.config.js
├── vercel.json
│
├── messages/                  # Translation JSON files
│   ├── en.json                #   English (default locale)
│   └── es.json                #   Spanish
│
├── public/
│   └── pdfs/                  # Downloadable CV PDFs
│       ├── FedericoGarciaENG.pdf
│       ├── FedericoGarciaENG_Bckp.pdf
│       ├── FedericoGarciaESP.pdf
│       └── FedericoGarciaESP_bckp.pdf
│
└── app/
    ├── favicon.ico
    ├── globals.css             # Global styles (body bg: #161923)
    │
    └── [locale]/               # Dynamic locale segment (en | es)
        ├── layout.js           # Root layout — NextIntlClientProvider, Bootstrap imports
        ├── page.js             # Home page — hero section + ParticleBackground
        ├── Styles.css          # Home page styles
        ├── head.js             # <head> metadata
        ├── favicon.ico
        ├── Federico.jpg        # Profile photo (+ backups)
        │
        ├── About/              # About route (/[locale]/About)
        │   ├── layout.js       #   About layout
        │   ├── page.js         #   About page — sections, ParticleBackgroundAbout
        │   └── pageStyles.css  #   About page styles (sections, footer, experience lines)
        │
        ├── Js/                 # Particle configuration files
        │   ├── Particles-config.js        # Home: 15 particles, subtle, upward drift
        │   └── Particles-config-about.js  # About: 60 particles, connecting lines, interactive
        │
        ├── assets/             # Static assets
        │   ├── code_think.svg
        │   ├── Projects.svg
        │   ├── sysadmin_03.png
        │   ├── wave.png / waveSec.JPG / waveSec.svg
        │   └── Icons/          # Technology & skill icons (29 SVG/PNG files)
        │       ├── Python.png, React.png, Next.png, JS.png, CSS.png, HTML.png
        │       ├── Django.svg, DjangoRestBCP.svg, Docker.svg, Node.png
        │       ├── Postgresql.png, Oracle.png, Oracle.svg, PLSQL.png
        │       ├── aws.svg, linux.svg, haskell.svg, prolog.svg, apex.png
        │       ├── language.png, argentina.svg, usa.svg
        │       └── book.svg, change.svg, designer.svg, forms.svg,
        │           reports.svg, team.svg, tool.svg
        │
        └── components/         # React components
            ├── Navbar.js                  # Navigation bar
            ├── LanguagesDropdown.js       # Locale switcher (en/es)
            ├── ThemeToggle.js             # Light/dark theme toggle button
            ├── ParticleBackground.js      # Home particle system (id="tsparticles")
            ├── ParticleBackgroundAbout.js  # About particle system (id="tsparticles-about")
            ├── Section1.js                # "About Me" intro section
            ├── Tecnologies.js             # Tech stack pills by category
            ├── Cards.js                   # Soft skills container (flexbox layout)
            ├── Card.js                    # Individual circular soft skill card
            ├── Proyects.js                # Projects container
            ├── Proyect.js                 # Individual project card
            ├── Timeline.js                # Experience timeline
            ├── Burbles.js                 # Emptied (previously floating bubbles)
            │
            ├── providers/                 # React Context providers
            │   └── ThemeProvider.js       # Theme context (dark/light mode state)
            │
            └── Styles/                    # Component-specific CSS
                ├── Navbar.css
                ├── LanguagesDropdown.css   # Dark theme, white icon filter
                ├── ThemeToggle.css        # Theme toggle button styles
                ├── Section1.css            # Background #161923
                ├── Card.css                # Circular cards, gradient border, orbit anims
                ├── Cards.css               # Flexbox layout with 6rem gap
                ├── Proyect.css             # Dark project cards with !important overrides
                ├── Proyects.css
                ├── Tecnologies.css
                ├── Timeline.css            # Transparent bg, no max-width
                └── Burbles.css
```

---

## Internationalization (i18n)

### Setup

- **Library**: `next-intl` v4.8.3
- **Locales**: `en` (default), `es`
- **Routing**: Dynamic `[locale]` segment in App Router
- **Config chain**:
  1. `navigation.js` — Exports `locales`, `defaultLocale`, `Link`, `useRouter`, `usePathname`, `redirect`, `getPathname` via `createNavigation()`
  2. `middleware.js` — `createMiddleware()` with locale config, matcher excludes `api`, `_next`, and static files
  3. `i18n.js` — `getRequestConfig()` resolves locale from request, loads `messages/{locale}.json`
  4. `next.config.js` — Wraps config with `next-intl/plugin` pointing to `i18n.js`

### Translation Files

- `messages/en.json` — English translations
- `messages/es.json` — Spanish translations
- Keys include: `about_me`, skill names, project descriptions, section titles, etc.

### Known Limitation

- **Do NOT use self-closing HTML tags** (like `<br>` or `<br/>`) inside translation strings that use `t.markup()`. This causes `INVALID_MESSAGE: UNCLOSED_TAG` errors. Use `\n` or split into separate keys instead.

---

## Design System

### Color Palette

| Token            | Dark (default) | Light           | Usage                                      |
|------------------|----------------|-----------------|--------------------------------------------|
| `--bg-primary`   | `#0D0F14`      | `#F5F7FA`       | Darkest background (skills section, footer)|
| `--bg-secondary` | `#161923`      | `#FFFFFF`       | Main content background (About/Section1)   |
| `--bg-card`      | `#1E2130`      | `#FFFFFF`       | Card backgrounds                           |
| `--accent`       | `#6C63FF`      | `#6C63FF`      | Primary accent (borders, buttons, links)   |
| `--accent-light` | `#8B85FF`      | `#8B85FF`      | Gradient end, hover states                 |
| `--text-primary` | `#F0F2F8`      | `#1A1D29`      | Primary text                               |
| `--text-secondary`| `#9BA3B8`     | `#5A6178`      | Secondary text                             |
| `--border`       | `#2A2F42`      | `#E2E6ED`      | Borders                                    |
| `--shadow-color` | rgba(...)      | rgba(...)      | Box shadows                                |

### Theme Toggle

- **Component**: `ThemeToggle.js` — Button with sun/moon icons to switch between themes
- **Provider**: `ThemeProvider.js` — React context that manages theme state
- **Storage**: Theme preference saved in `localStorage` under key `theme`
- **Implementation**: Theme is applied via `data-theme` attribute on `<html>` element
- **Toggle location**: Navbar (next to language dropdown)

### Section Backgrounds

| Section        | Background   | Notes                                |
|----------------|--------------|--------------------------------------|
| About/Content  | `#161923`    | Solid                                |
| Skills/Tech    | `#0D0F14`    | Darkest                              |
| Experience     | `#12151F`    | Unique mid-dark                      |
| Projects       | `transparent` | Particles visible behind             |
| Footer         | `#0d0f14`    | Solid, `position: relative`, `z-index: 10` |

### Typography & Effects

- Footer title and social icons have **neon text-shadow** (`#6C63FF` glow)
- Footer has a **border-top glow** effect
- Language icon uses `filter: brightness(0) invert(1)` for white appearance
- Language dropdown: dark bg (`#1a1d2e`), white text, purple hover (`#6C63FF`)

---

## Component Details

### Particle Systems

Two separate particle configurations to avoid ID conflicts:

| Property            | Home (`Particles-config.js`)    | About (`Particles-config-about.js`) |
|---------------------|---------------------------------|--------------------------------------|
| Container ID        | `tsparticles`                   | `tsparticles-about`                  |
| Component           | `ParticleBackground.js`         | `ParticleBackgroundAbout.js`         |
| Particle count      | 15                              | 60                                   |
| Visibility          | Subtle, background decoration   | Visible, prominent                   |
| Movement            | Upward drift                    | Standard with interaction            |
| Connecting lines    | No                              | Yes                                  |
| Interactivity       | Minimal                         | Hover repulse, click push            |

### Soft Skill Cards (`Card.js` / `Card.css`)

- **Shape**: Circular (`border-radius: 50%`)
- **Background**: `#1e2130`
- **Border**: Gradient from `#6C63FF` to `#8B85FF`
- **Decorations**: Two orbiting dashed circles with CSS `@keyframes spin` and `spinReverse` animations
- **Layout**: Flexbox container (`Cards.js`) with `6rem` gap
- **Responsive**: Cards scale down on smaller screens

### Project Cards (`Proyect.js` / `Proyect.css`)

- **Background**: `#1e2130 !important` (Bootstrap override protection)
- **Text**: White `!important`
- **Buttons**: Dark background with accent-colored borders
- **`!important` is required** — see Known Issues below

### Experience Timeline (`Timeline.js` / `Timeline.css`)

- **Background**: `#12151F` (solid)
- **Center line**: Vertical timeline connector
- **Decorative elements**: Wavy dashed SVG lines on left and right sides (NOT center)
- **Background**: Transparent (to blend with section bg)

### Footer

- **Background**: `#0d0f14` (solid, opaque)
- **Position**: `relative` with `z-index: 10` (renders above particle canvas)
- **Effects**: Neon text-shadow on title and social icons, glowing border-top
- **Layout**: Flex centered

### Burbles (`Burbles.js`)

- **Emptied** — Component returns nothing. Previously rendered floating gray bubble decorations, now disabled in favor of particle backgrounds.

---

## Known Issues & Gotchas

### 1. Bootstrap Hydration Override Bug (CRITICAL)

**Problem**: When navigating from Home to About via client-side routing (Next.js Link), Bootstrap's `.card` class styles get re-applied and override custom dark styles. Cards turn white, text turns black.

**Root cause**: Bootstrap CSS loads with the same specificity and wins after hydration during client-side navigation.

**Fix**: Use `!important` on all custom card/project styles:
- `.cardPresOne`, `.cardPersTwo` — background, color
- `.card-title`, `.card-text` — color
- `.nameProy` — color
- All `.cardContainer` backgrounds

**Affected files**: `Proyect.css`, `Card.css`, `pageStyles.css`

### 2. next-intl Markup Self-Closing Tags

**Problem**: Using `<br>`, `<br/>`, or `<hr/>` in translation JSON values with `t.markup()` throws `INVALID_MESSAGE: UNCLOSED_TAG`.

**Fix**: Avoid self-closing tags in translation strings. Use `\n` or break content into separate translation keys.

### 3. Particle Container ID Conflicts

**Problem**: If both Home and About particle systems use the same container ID, only one initializes.

**Fix**: Home uses `id="tsparticles"`, About uses `id="tsparticles-about"`. Each page has its own component (`ParticleBackground.js` vs `ParticleBackgroundAbout.js`).

### 4. Footer Rendering Behind Particles

**Problem**: The particle canvas can render on top of the footer content.

**Fix**: Footer must have `position: relative` and `z-index: 10` (set inline in `page.js`), plus a solid (non-transparent) background color.

---

## Image Configuration

Remote image patterns allowed in `next.config.js`:

- `https://drive.google.com` — Google Drive hosted images
- `https://i.ibb.co/**` — ImgBB hosted images

Preferred formats: `image/avif`, `image/webp`

---

## Development Notes

### Running Locally

```bash
# Requires Node.js >= 24.0.0
npm install
npm run dev    # Starts dev server with Turbopack
```

### Building for Production

```bash
npm run build
npm run start
```

### Deployment

- Deployed via **Vercel** (`vercel.json` exists in root)
- Images optimized via Next.js Image component with AVIF/WebP formats

### File Naming Conventions

- Components: PascalCase (`ParticleBackground.js`, `LanguagesDropdown.js`)
- CSS: Same name as component (`Card.css` for `Card.js`)
- Routes: PascalCase directories (`About/`)
- Configs: kebab-case with context (`Particles-config-about.js`)
- Assets/Icons: Mix of PascalCase and lowercase (legacy)

---

## Agent Instructions

When working on this codebase, keep in mind:

1. **Always use `!important`** on card and project component background/color styles to prevent Bootstrap overrides during client-side navigation.
2. **Never use self-closing HTML tags** in translation JSON files used with `t.markup()`.
3. **Particle IDs must be unique** per page — never reuse `tsparticles` ID across different particle configs.
4. **Footer must stay above particles** — maintain `position: relative` and `z-index: 10` with a solid background.
5. **Color palette has two themes** — use CSS variables defined in `globals.css`. Dark mode uses `#0D0F14`, `#161923`, `#1E2130`, `#6C63FF`, `#8B85FF`, `#12151F`; Light mode uses `#F5F7FA`, `#FFFFFF`, `#FFFFFF`, `#6C63FF`, `#8B85FF`, `#1A1D29`. Never hardcode colors like `#fff` or `#000` — always use `var(--text-primary)`, `var(--bg-secondary)`, etc.
6. **Theme toggle uses localStorage** — the `ThemeProvider` saves theme to localStorage with key `theme`. Use `data-theme` attribute on `<html>` to apply the theme.
7. **The Burbles component is intentionally empty** — do not re-add bubble decorations.
8. **Two particle systems exist** — Home (subtle, 15 particles) and About (prominent, 60 particles with lines). They must remain separate.
9. **User communicates in Spanish** — comments and explanations should be in Spanish when appropriate.
10. **Dev server uses Turbopack** — `next dev --turbopack`. Keep this in mind for compatibility.
11. **Node >= 24.0.0** is required — do not downgrade engine requirements.
