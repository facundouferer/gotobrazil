# AGENTS.md - Coding Guidelines for gotobrazil

## Project Overview

Astro 6 static site with Tailwind CSS 4, TypeScript strict mode. Tourism website for Brazil.

## Build Commands

```bash
# Development
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

## Code Style

### TypeScript (Strict Mode)

- **Const Types Pattern**: Create const objects first, then extract types
  ```typescript
  const STATUS = { ACTIVE: "active", INACTIVE: "inactive" } as const;
  type Status = (typeof STATUS)[keyof typeof STATUS];
  ```

- **Flat Interfaces**: No inline nested objects
  ```typescript
  // ✅ Good
  interface Address { street: string; city: string; }
  interface User { id: string; address: Address; }

  // ❌ Bad - nested inline
  interface User { address: { street: string } }
  ```

- **Never use `any`**: Use `unknown` or generics instead

### Astro Components

- Use TypeScript for props with explicit interfaces
- Keep frontmatter (---) at the top
- Use `class:list` for conditional classes
- Props should have sensible defaults

```astro
---
interface Props {
  variant?: "glass-pill" | "glass-bar";
  activeLink?: string;
}
const { variant = "glass-pill", activeLink = "" } = Astro.props;
---
```

### Tailwind CSS 4

- **Never use `var()` in className** - use semantic Tailwind classes
- **Never use hex colors** - use Tailwind color palette
- **No arbitrary values for colors** - extend theme if needed

```astro
<!-- ✅ Correct -->
<div class="bg-primary text-on-surface">

<!-- ❌ Wrong -->
<div class="bg-[#1e293b] text-[var(--color)]">
```

### Styling Patterns

- Use `cn()` utility for conditional classes (if available)
- Use `style` prop only for truly dynamic values (percentages, calculations)
- Prefer Tailwind's semantic color tokens: `bg-primary`, `text-on-surface`

### Naming Conventions

- **Components**: PascalCase (`Navbar.astro`, `Footer.astro`)
- **Files**: kebab-case for non-components (`global.css`)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE with `as const`
- **Types/Interfaces**: PascalCase

### Imports

- Use explicit `.astro` extensions
- Group imports: Astro built-ins → Components → Styles
- Use `type` imports when only importing types

```typescript
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/Navbar.astro";
import type { SomeType } from "../types";
import "../styles/global.css";
```

### Project Structure

```
src/
  components/     # Reusable Astro components
  layouts/        # Page layout templates
  pages/          # Route pages (Astro file-based routing)
    [lang]/       # i18n routes: /es/, /pt/, /en/
      index.astro
      destinations.astro
      culture.astro
      gastronomy.astro
  i18n/           # Internationalization
    translations.ts
  styles/         # Global CSS files
  assets/         # Static assets
public/           # Static files (images, favicon)
```

### Internationalization (i18n)

**CRITICAL: All content must be available in 3 languages: Español (es), Português (pt), and English (en).**

The site supports 3 languages: Spanish (es), Portuguese (pt), and English (en).

**Language Detection:**
- Default language: Spanish (es)
- Language is stored in a cookie (`user-language`)
- Root path `/` redirects to `/{lang}/` based on cookie

**Adding Content (REQUIRED):**
When adding ANY new text content to the site:
1. **ALWAYS** add translations to `src/i18n/translations.ts` in ALL 3 language objects (ES, PT, EN)
2. Use the `TRANSLATIONS` object in components:
   ```typescript
   import { TRANSLATIONS, type Language } from "../i18n/translations";
   const t = TRANSLATIONS[lang];
   ```
3. **NEVER** hardcode text strings directly in components - always use translation keys

**Translation Structure:**
```typescript
// In src/i18n/translations.ts
[LANGUAGES.ES]: {
  section: {
    title: "Título en Español",
    description: "Descripción en español",
  },
},
[LANGUAGES.PT]: {
  section: {
    title: "Título em Português",
    description: "Descrição em português",
  },
},
[LANGUAGES.EN]: {
  section: {
    title: "Title in English",
    description: "Description in English",
  },
},
```

**Language Switcher:**
- Use `<LanguageSwitcher currentLang={lang} />` component
- Displays flag emojis (🇪🇸 🇧🇷 🇬🇧) for language selection
- Updates cookie and navigates to translated route

**Creating New Pages:**
1. Create file in `src/pages/[lang]/`
2. Export `getStaticPaths()` with all 3 languages
3. Get language from `Astro.params.lang`
4. Pass `lang` prop to Layout, Navbar, Footer, and LanguageSwitcher
5. **REQUIRED:** Add all text content to `src/i18n/translations.ts` in all 3 languages

### Error Handling

- Use TypeScript strict mode - no implicit any
- Validate external data with type guards
- Handle missing props with defaults

### Formatting

- 2 spaces indentation
- Single quotes for strings
- Trailing commas in multi-line objects/arrays
- Max line length: 100 characters

### Accessibility

- Always include `alt` text for images
- Use semantic HTML elements
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Include `lang` attribute on html element

### Performance

- Use Astro's built-in image optimization
- Lazy load images below the fold
- Minimize client-side JavaScript
- Use `loading="lazy"` for images when appropriate

## Key Dependencies

- `astro`: ^6.0.4
- `tailwindcss`: ^4.2.1
- `@tailwindcss/vite`: ^4.2.1
- `@fontsource-variable/plus-jakarta-sans`: Headline font
- `@fontsource/be-vietnam-pro`: Body font

## Node Version

Requires Node.js >= 22.12.0
