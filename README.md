# Anthony Gonzalez — AI Engineer Portfolio

An editorial portfolio for presenting AI engineering work, product thinking,
and selected case studies. Built with Next.js, TypeScript, Tailwind CSS,
Motion, React Three Fiber, and local MDX content.

## Highlights

- Responsive single-page portfolio with dedicated case study routes
- File-based MDX content for project stories
- Interactive WebGL hero with reduced-motion and non-WebGL fallbacks
- Dynamic page metadata, Open Graph image, sitemap, and robots configuration
- Local variable fonts and optimized portrait rendering
- Accessibility features including semantic landmarks and a skip link

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 with the App Router |
| UI | React 19 and TypeScript |
| Styling | Tailwind CSS 4 and global CSS |
| Animation | Motion |
| 3D | React Three Fiber, Drei, and Three.js |
| Content | MDX, `next-mdx-remote`, and `gray-matter` |
| Deployment | Vercel-ready |

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd anthondev-portfolio-new
npm install
```

Copy the environment example and set the public URL:

```bash
cp .env.example .env.local
```

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Run the quality checks before publishing:

```bash
npm run lint
npm run build
```

## Project structure

```text
src/
├── app/
│   ├── work/[slug]/     # Generated case study pages
│   ├── globals.css      # Global tokens, layout, and visual effects
│   ├── layout.tsx       # Fonts and site-wide metadata
│   ├── page.tsx         # Main portfolio page
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/          # Navigation, CTAs, motion, and 3D UI
├── content/work/        # MDX case studies
└── lib/work.ts          # Case study loading and sorting

public/                  # Static images and downloadable assets
```

## Managing case studies

Case studies live in `src/content/work`. Each `.mdx` file contains frontmatter
used by the home page and its generated `/work/[slug]` route:

```mdx
---
title: "Project title"
slug: "project-title"
summary: "A concise description of the project and its value."
role: "AI Engineer"
year: "2026"
stack:
  - "Next.js"
  - "OpenAI"
cover: "gradient-violet"
featured: true
status: "PUBLISHED"
links:
  live: "https://example.com"
  source: "https://github.com/example/project"
metrics:
  - "Add a verified outcome"
---

## The problem

Write the case study in MDX.
```

Only entries with `featured: true` are loaded. Projects are currently sorted by
their `slug`, so keep the numeric filename or slug convention when ordering
matters.

Use verified project information and outcomes. Do not publish confidential,
estimated, or placeholder metrics as real results.

## Site configuration

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin, without a
trailing slash:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used by the metadata configuration, sitemap, and robots file.
On Vercel, the project falls back to `VERCEL_PROJECT_PRODUCTION_URL` when the
explicit variable is not set.

Before launch, review and replace:

- Draft biography, employment history, and case study content
- Placeholder email, LinkedIn, and GitHub URLs
- Résumé placeholder and downloadable file
- Portrait and any temporary project media
- Site title, description, keywords, and social preview content
- `NEXT_PUBLIC_SITE_URL` with the final domain

## Deployment

The project can be deployed to any platform that supports Next.js. For Vercel:

1. Import the repository.
2. Add `NEXT_PUBLIC_SITE_URL` to the production environment.
3. Deploy and verify the home page, case study routes, social preview,
   `/sitemap.xml`, and `/robots.txt`.

## Commit messages

Commit messages follow the project-specific Conventional Commits guidance in
[`AGENTS.md`](./AGENTS.md). Example:

```text
feat(work): add production AI case study
```
