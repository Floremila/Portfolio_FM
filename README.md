# Florencia Méndez Quintana — Portfolio

Personal portfolio built with [Next.js](https://nextjs.org), React, TypeScript and Tailwind CSS.

🔗 **Live:** https://portfolio-fm-2026.vercel.app

## Structure

- `src/data/portfolio.ts` — all content (hero, projects, skills, contact links)
- `src/types/portfolio.ts` — types for that content
- `src/components/sections/` — page sections (Hero, Projects, Skills, About, Contact)
- `public/` — images and the downloadable CV

To add a project, add an object to `projects` in `src/data/portfolio.ts` and put its screenshot in `public/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.
