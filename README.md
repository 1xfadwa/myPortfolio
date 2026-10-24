# Fadwa Barnawi — Portfolio

Premium, bilingual (EN / AR) personal portfolio built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/       Hero, About, Skills, Projects, Contact, Nav, Footer, Reveal, Eyebrow, LanguageSwitcher
  hooks/useReveal.js        Scroll-reveal animation hook (respects prefers-reduced-motion)
  i18n/translations.js      All English + Arabic copy in one place
  i18n/LanguageContext.jsx  Language/direction state, persisted to localStorage
public/assets/      Memoji images (okay.webp, creative.webp, hi.webp)
```

## Before shipping

- Add your real CV as `public/assets/Fadwa-Barnawi-CV.pdf` — the "Download CV" button already links to it.
- Swap the placeholder project GitHub links in `src/components/Projects.jsx` for your real repos.
- The contact form sends through EmailJS. The Service ID, Template ID and Public Key live in `src/config/emailjs.js`. In the EmailJS dashboard, make sure the template's "To Email" is your address, its "Reply-To" is `{{reply_to}}`, and its body uses `{{name}}`, `{{email}}`, `{{subject}}` and `{{message}}`. Under Account > Security, restrict the key to your site's domain once it's published.
- All copy (English + Arabic) lives in `src/i18n/translations.js` — edit it there rather than in the components.

## Notes

- Colors, fonts, and animation tokens are defined in `tailwind.config.js`.
- Language switching updates `<html lang>` / `<html dir>` live — layouts flip to RTL automatically via Tailwind's `rtl:`/`ltr:` variants and native flexbox direction, no reload.
