# Peijing Li — Portfolio

Source for my academic portfolio at **https://peijli.github.io**.

Built with [Astro](https://astro.build/) as a static site.

## Develop

```bash
npm install
npm run dev       # dev server at localhost:4321, hot-reloads on change
npm run build     # static build to dist/
npm run preview   # serve the production build locally
```

Requires Node.js.

## Deploy

Production still runs the Jekyll site on `master`. Once this Astro branch is cut over, GitHub Actions will build and publish `dist/` to GitHub Pages 

`web.stanford.edu/~peli` is now redirected to this site of `https://peijli.github.io`.

## Content

- Papers → `src/content/research/`
- Course projects → `src/content/projects/`
- Pages (home, CV, research, academics) → `src/pages/`
- Files (PDFs, etc.) → `public/files/`; images → `public/images/`

Collection schemas live in `src/content.config.ts`.
