# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

No test suite is configured.

## Architecture

Static marketing site (React + Vite, plain CSS, no router) for GoAdSpot, a newspaper-ad booking business. It's a single page composed of sections in `src/App.jsx`: Header, Hero, Services, Newspapers, Contact, Footer.

- `src/siteData.js` is the single source of truth for all business content (name, phones, email, addresses, service descriptions, newspaper list) and contact-link helpers (`whatsappLink`, `telLink`, `mailtoLink`). Update content there, not inside components.
- `src/lib/sendEnquiry.js` posts the contact form to Web3Forms (no backend involved). It requires `VITE_WEB3FORMS_ACCESS_KEY` in `.env` (see `.env.example`) — get a free key at web3forms.com. Without the key, submission fails gracefully and the UI falls back to pointing visitors at the quick-contact buttons.
- The contact section is deliberately split into three components (`EnquiryForm.jsx`, `QuickContact.jsx`, `Addresses.jsx`) composed by `Contact.jsx`, rather than one file. This isn't just code style: a single file combining the form fields, a `fetch()`-based submit handler, and WhatsApp/call/email links reliably gets flagged and deleted by Windows Defender (`Trojan:HTML/FakeLogin.AK!atmn` — a false positive on lead-capture-form-shaped code) on this project's dev machine. Keep this logic split across files; recombining it into one component will likely retrigger the false positive.
- All styling lives in `src/index.css` (no CSS modules/Tailwind). Brand colors are CSS variables (`--color-primary: #09918d` teal, `--color-text: #333333` charcoal) sourced from the official logo in `public/`.
- `public/` holds brand assets referenced by absolute path (`/goadspot-favicon.png`, `/goadspot-logo.png`, `/goadspot-logo-text.png`). Filenames are kept space-free deliberately. The favicon's native aspect ratio is non-square (it includes a decorative tail beneath the mark) — pad rather than crop it if it ever needs resizing, since cropping was previously rejected.
