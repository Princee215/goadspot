# GoAdSpot

Marketing site for GoAdSpot — newspaper advertising booking for SMEs, Government Entities, and Individual Advertisers. Built with React + Vite, deployed as a static site.

## Getting started

```bash
npm install
cp .env.example .env   # then paste a Web3Forms access key into .env
npm run dev
```

The contact form needs a free access key from [web3forms.com](https://web3forms.com) (sign up with `goadspot@gmail.com`) set as `VITE_WEB3FORMS_ACCESS_KEY` in `.env`. Without it, the form fails gracefully and visitors can still reach out via the WhatsApp, call, and email buttons.

## Commands

- `npm run dev` — start the dev server (http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Deployment

Deployed on Vercel, which auto-detects the Vite build (`npm run build`, output `dist`). Add `VITE_WEB3FORMS_ACCESS_KEY` as an Environment Variable in the Vercel project settings (Production and Preview) — no `vercel.json` or other config needed.

Custom domains (`goadspot.com`, `goadspot.in`) are attached via Vercel's domain settings, with DNS records updated at the registrar.

## Editing content

All business content (name, phones, email, addresses, service copy, newspaper list) lives in `src/siteData.js` — update it there rather than inside components.

See [CLAUDE.md](./CLAUDE.md) for architecture notes and conventions used in this codebase.
