# Eric Wong

Personal site for Eric Wong: a short story of who the work is for, three project case studies, about and services, and contact.

The previous site was a Hugo Ananke export, last updated in substance around 2023. This repository is now a [Next.js](https://nextjs.org/) app (App Router) styled with Tailwind CSS. English only. The old `/cn` pages were unused theme samples in French, not a Chinese translation, so they were not carried over. The old blog posts were theme samples from *The Hunchback of Notre-Dame*, not Eric’s writing.

Live URL, once GitHub Pages is pointed at this app: [https://eses-wk.github.io/Eric_Portfolio/](https://eses-wk.github.io/Eric_Portfolio/)

## Run locally

Requires Node.js 22.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

`npm run build` writes a static site to `out/`. Without extra environment variables, asset paths are rooted at `/`, which is what you want for local preview and for Vercel.

Preview the export:

```bash
npx serve out
```

## Edit the copy

Page text lives in data files, not in the layout components.

| What | Where |
| --- | --- |
| Name, email, LinkedIn, GitHub, homepage and about copy | `content/site.ts` |
| Case studies | `content/projects.ts` |
| Portrait and project images | `public/images/` |

To add a project, append an object to the `projects` array. Include `slug`, `title`, `summary`, `sections` (problem, approach, outcome), and images. The homepage, work index, and case-study routes all read that array. Old Hugo paths can be listed in `legacySlugs` so a previous URL still renders the new page.

### What Eric should fill in

The previous site did not name an employer, a city, rates, or availability, and it did not publish performance numbers. Those were not invented.

1. **How you take on work.** In `content/site.ts`, replace the `engagement` block. It is rendered on the About page with a visible “Draft — replace this” label. Say whether you take paid client work, advising, or collaboration only, and how a first conversation should start.
2. **Current role, if you want one.** The About page repeats the 2023 description (former investment analyst, data science, marketing analytics in insurance) and does not name an employer. Update `about.paragraphs` if that line is out of date.
3. **Outcomes with real numbers.** Each case study’s Outcome section says what was actually published. If you have a tournament result, a measured Azure bill, or a sourcing outcome you are willing to stand behind, add it in that section. Do not leave a guessed figure in its place.
4. **Portrait.** `public/images/eric-wong.jpg` is the photo from the previous site. Replace the file, and the `portrait` alt text in `content/site.ts`, if you want a newer one.

## Deploy

The app is a static export (`output: "export"` in `next.config.ts`). Two hosts are set up below.

### GitHub Pages (this repository)

The site is a project site, so it is served from `/Eric_Portfolio`, not from the domain root. Production builds for that URL must set:

```bash
NEXT_PUBLIC_BASE_PATH=/Eric_Portfolio
NEXT_PUBLIC_SITE_URL=https://eses-wk.github.io/Eric_Portfolio
```

`.github/workflows/pages.yml` does this on every push to `main` and uploads the `out/` folder with GitHub’s Pages action.

One-time setup in the repository, under **Settings → Pages**:

1. Set **Source** to **GitHub Actions** (not “Deploy from a branch”).
2. Merge this project to `main`.

Until that source is switched, GitHub Pages will keep looking for HTML in the branch root. The old Hugo files are gone, and `out/` is not committed, so the live site will not update on its own.

The previous export sent `noindex, nofollow`. This site allows indexing (`app/robots.ts`). Change that file if the site should stay out of search results.

### Vercel, or a host at the domain root

Leave `NEXT_PUBLIC_BASE_PATH` unset so assets stay at `/`. Set `NEXT_PUBLIC_SITE_URL` to the real origin, for example `https://example.com`, so canonical URLs and the sitemap match the host.

On Vercel: import the repository, framework preset Next.js, and add `NEXT_PUBLIC_SITE_URL`. Do not set `NEXT_PUBLIC_BASE_PATH`. Vercel can also run the app as a server. The static export still works if the build command stays `npm run build`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run lint` | ESLint |
| `npm run build` | Static export into `out/` |
