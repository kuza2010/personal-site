# AGENTS.md

Non-obvious rules and landmines for this repo. Commands, post authoring and the stack are documented in `README.md`; only keep here what that file does not cover.

## Commands

`README.md` is the source of truth. Two things that trip agents up: there is **no `dev` script** (use `npm run start:dev`) and **no test suite** (don't run `npm test`).

## Imports: auto-import is disabled

`nuxt.config.ts` sets `imports.autoImport: false`, so nothing is magically in scope:

- Nuxt APIs go through `#imports` (occasionally `#app` / `#components`); Vue APIs through `vue`.
- Components must be imported too: `import InPlaceLink from '~/components/link/InPlaceLink.vue'`.
- Local modules are imported with their extension, matching existing code: `import {usePost} from '~/composables/usePost.ts'`.

A missing import fails at build/runtime, not at lint time.

## Styling

- Tailwind v4 with a v3-style `tailwind.config.ts`. It is only active because `assets/blog.css` / `assets/website.css` contain `@config '../tailwind.config.ts'`.
- `@apply` inside an SFC `<style>` block requires `@reference '../assets/blog.css';` at the top of that block (see `pages/index.vue`).
- Brand color comes from the `alligator` palette / `--color-brand`; use those instead of raw Tailwind greens.
- `@nuxt/ui` is v3, but `app.config.ts` still uses v2 keys (`ui.gray`, `ui.primary`). v3 reads `appConfig.ui.colors.{primary,neutral}`, so those keys are ignored — don't assume changing them re-themes the UI.

## Landmines

- Dates are rendered via `useAppConfig().filters.formatDate` (backed by `moment` in `app.config.ts`), not by importing `moment` in components.
- Navbar links must start with `/`. `normalizeLink` in `utils/normalize-link.ts` returns the literal string `'/ + foo'` for links without a leading slash (template-literal bug), so `link="blog"` produces a broken href.
- The "edit on GitHub" URL in `composables/useGithubLink.ts` hardcodes `kuza2010/personal-site`; update it if the repo moves.
