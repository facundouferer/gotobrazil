# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro 6 static site for Brazilian tourism. Tailwind CSS 4 with Material Design 3 color tokens. Three languages: Spanish (es, default), Portuguese (pt), English (en). Deployed to GitHub Pages.

## Commands

```bash
pnpm dev       # Dev server
pnpm build     # Production build
pnpm preview   # Preview production build
```

No test framework configured. No linter configured.

## Architecture

- **Routing**: File-based. Root `/` (index.astro) redirects to `/{lang}/` via client-side cookie detection. Actual pages live in `src/pages/[lang]/` and export `getStaticPaths()` for all 3 languages.
- **i18n**: Single file `src/i18n/translations.ts` holds ALL text content. Components receive `lang` as prop and access `TRANSLATIONS[lang]`. Never hardcode strings.
- **Layout flow**: `Layout.astro` wraps everything. Pages compose `Navbar` + content + `Footer`, passing `lang` to each. `LanguageSwitcher` is embedded in Navbar (desktop) and as a fixed button (mobile).
- **Language detection**: Two mechanisms — `public/detect-language.js` (sets `data-lang` attribute + localStorage on every page load) and root `index.astro` (reads cookie `user-language` for redirect).
- **Styling**: Tailwind 4 via Vite plugin. Custom theme in `src/styles/global.css` defines Material Design 3 color tokens and font families. Use semantic tokens (`bg-primary`, `text-on-surface`) — no hex colors or arbitrary values in classes.
- **Fonts**: Plus Jakarta Sans (headlines, `font-headline`), Be Vietnam Pro (body, `font-body`).
- **Navbar**: Two variants — `glass-pill` (floating rounded, used on homepage) and `glass-bar` (sticky top bar, used on inner pages).

## Critical Rules

1. **All text must be translated** — add to all 3 language objects in `translations.ts` before using in components
2. **New pages** require `getStaticPaths()` returning all 3 language params
3. **Node >= 22.12.0** required
4. **Package manager**: pnpm
