# AGENTS.md

Non-obvious rules and landmines for this repo. Commands, post authoring and the stack are documented in `README.md`; only keep here what that file does not cover.

## Commands

`README.md` is the source of truth. Two things that trip agents up: there is **no `dev` script** (use `npm run start:dev`) and **no test suite** (don't run `npm test`).

Linting uses ESLint 10 flat config (`eslint.config.mjs`), which imports the generated `.nuxt/eslint.config.mjs`. Run `npm run prepare` after changing Nuxt modules or the lint config will fail to load.

## Imports: auto-import is disabled

`nuxt.config.ts` sets `imports.autoImport: false`, so no composable, util or Nuxt API is magically in scope:

- Nuxt APIs go through `#imports` (occasionally `#app` / `#components`); Vue APIs through `vue`.
- Local modules are imported with their extension, matching existing code: `import {usePost} from '~/composables/usePost.ts'`.
- Scanned composables/utils are still re-exported from `#imports` (for example `useGithubLink`), so that is the preferred way to import them.
- Components under `app/components/` **are** auto-registered by filename (`<Navbar />`, `<ResumeItem />`); explicit imports like `~/components/link/InPlaceLink.vue` also work.

A missing import fails at build/runtime, not at lint time.

## Styling

- Tailwind v4 with a v3-style `tailwind.config.ts`. It is only active because `app/assets/blog.css` / `app/assets/website.css` contain `@config '../../tailwind.config.ts'` (paths are relative to the CSS file).
- The same CSS files contain `@source '../../content/**/*'` so Tailwind classes used inside Markdown are still generated after the Nuxt 4 `app/` move.
- `@apply` inside an SFC `<style>` block requires `@reference '../assets/blog.css';` at the top of that block (see `app/pages/index.vue`).
- Interactive brand accents use Nuxt UI semantic utilities (`text-primary`, `ring-primary`, `outline-primary`), not raw `alligator-*` classes. `primary` resolves to the `alligator` palette configured in `app.config.ts`, and switches shade automatically (500 light / 400 dark). The raw palette in `app/assets/theme.css` is the definition, not the default reference; `--color-brand` is reserved for fixed decorative accents such as underlines and `hr`.
- `@nuxt/ui` is v4. `app.config.ts` configures semantic colors via `appConfig.ui.colors` (currently `primary: 'alligator'`). Custom colors must exist in the Tailwind theme, so the `alligator` palette in `app/assets/theme.css` is what makes the brand color resolve. Don't use old v2 keys (`ui.gray`, `ui.primary`).

## Landmines

- Dates are rendered via `useAppConfig().filters.formatDate` (backed by `moment` in `app.config.ts`), not by importing `moment` in components.
- Navbar links must start with `/`. `normalizeLink` in `app/utils/normalize-link.ts` returns the literal string `'/ + foo'` for links without a leading slash (template-literal bug), so `link="blog"` produces a broken href.
- The "edit on GitHub" URL in `app/composables/useGithubLink.ts` hardcodes `kuza2010/personal-site`; update it if the repo moves.
- `content.config.ts` stays at the project root even though app code lives in `app/`; Nuxt Content resolves it from `rootDir`, not `srcDir`.
- `better-sqlite3` is a native module used by Nuxt Content. Switching Node versions after installing requires `rm -rf node_modules .nuxt && npm install`.
