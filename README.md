# Artem Danilin — personal site

Personal website and blog. Built with [Nuxt 4](https://nuxt.com), [Nuxt Content](https://content.nuxt.com) and [Nuxt UI](https://ui.nuxt.com).

## Requirements

- Node.js 22.22+ (`Jod` LTS) — pinned in `.nvmrc`. Nuxt 4.6 requires `^22.22.3` or `^24.15.0`
- [nvm](https://github.com/nvm-sh/nvm) for version management
- npm (the only supported package manager here — `package-lock.json` is the lockfile)

## Setup

```bash
nvm install   # reads .nvmrc, installs Node 22
nvm use       # switches this shell to Node 22
npm install
```

`npm install` also runs `nuxt prepare`, which generates the `.nuxt` types.

Switching Node versions after `node_modules` already exists requires a reinstall, because native modules (`better-sqlite3`) are compiled against the running Node's ABI:

```bash
rm -rf node_modules .nuxt
npm ci
```

## Development

```bash
npm run start:dev
```

The dev server runs on `http://localhost:3000`, opens a browser and binds to the host. There is no `dev` script.

> Nuxt auto-imports are disabled (`imports.autoImport: false`), so Nuxt APIs, composables and utils must be imported explicitly (usually from `#imports`). Components under `app/components/` are still registered by filename.

## Scripts

| Command                 | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `npm run start:dev`     | Start the dev server (opens browser, binds host) |
| `npm run build`         | Build for production                             |
| `npm run start:preview` | Preview the production build locally             |
| `npm run generate`      | Generate a static site into `.output/public`     |
| `npm run lint`          | Lint with ESLint                                 |
| `npm run lint:fix`      | Lint and auto-fix                                |
| `npm run clean`         | Remove `.nuxt` and the Vite cache                |

## Writing a post

Posts are Markdown files in `content/blog/`. The `blog` collection validates frontmatter in `content.config.ts`, and every field is required:

```yaml
---
title: Object Mother
description: How to simplify the creation of test objects
img: /blog/object-mother/object-mother.webp
alt: java testing pattern
languageTags: [java, testing, pattern]
created: 2026-01-05T15:20:00
lastModified: 2026-01-05T15:20:00
---
```

Put post images in `public/blog/<slug>/` and reference them as `/blog/<slug>/<file>`.

The content index is cached in `.data/content/contents.sqlite` (gitignored). After changing a collection name, source glob or schema in `content.config.ts`, delete `.data` and restart the dev server.

## Project structure

```
app/assets/         Global CSS (Tailwind v4 entry points) and brand palette
app/components/     Vue components
app/composables/    Data fetching helpers for Nuxt Content
app/layouts/        Page layouts
app/pages/          Routes: /, /blog, /blog/[...slug], /work
app/utils/          Small pure helpers
content/blog/       Markdown posts
public/             Static assets (images, favicon)
server/             Reserved for Nitro server routes
content.config.ts   Content collection schema
tailwind.config.ts  Tailwind theme (loaded by app/assets/*.css via @config)
```

## Deployment

There is no deploy config in the repo. Two options:

- **Static:** `npm run generate`, then serve `.output/public` from any static host.
- **Node server:** `npm run build`, then `npm run start:preview` / `node .output/server/index.mjs`.
