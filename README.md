# almasali.vercel.app

Personal site of Almas Ali. Next.js (App Router), Tailwind CSS v4, Motion and Lenis, deployed on Vercel.

## Editing content
All copy lives in `src/content/`:
- `site.ts`: profile, hero, principles, builds, experience, credentials
- `work.ts`: case studies (each becomes `/work/<slug>`)

Set `profile.resumeUrl` to `"/resume.pdf"` after putting the PDF in `public/`.

## Run locally
```bash
npm install
npm run dev
```

Pushing to `main` deploys to production on Vercel.
