# The Aviationist — Clone

A pixel-oriented recreation of [theaviationist.com](https://theaviationist.com/), built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

> This is a fan/learning project. All article text, images, and branding belong to their original owners (The Aviationist / DC Media Srls). Not affiliated with or endorsed by the original site.

---

## ✨ Features

- **Home page** — autoplaying hero carousel, Popular Posts, Latest Posts, and themed sections (Military Aviation, Drones, Aviation Safety, Troubled Areas, Weapons) with a newsletter CTA
- **Category archive pages** — `Helicopters`, `Drones`, `Global Hotspots`, each with an auto-rotating hero carousel, a "Latest News" list, a social-follow sidebar, and pagination
- **Military Aviation subcategories** — `Aircraft Carriers`, `Airshows`, `F-104`, `F-35`, `Italian Air Force`, using a distinct dark-card hero style
- **Static pages** — `About`, `Contact` (with a working form shell), `Work with Us`, `Advertise with Us`, `Subscribe to Newsletter`
- **Responsive navigation** with dropdown menus and an active-route underline indicator
- Hover states, color accents, and typography matched to the original site

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [`next/image`](https://nextjs.org/docs/app/api-reference/components/image) for optimized images
- [lucide-react](https://lucide.dev/) for icons

## 📁 Project Structure

```
app/
├── page.tsx                              # Home page
├── layout.tsx
├── helicopters/page.tsx
├── drones/page.tsx
├── globalhotspots/page.tsx
├── militaryaviation/
│   ├── page.tsx
│   ├── aircraft-carriers/page.tsx
│   ├── airshows/page.tsx
│   ├── f-104/page.tsx
│   ├── f-35/page.tsx
│   └── italian-air-force/page.tsx
├── about/page.tsx
├── contact/page.tsx
├── work-with-us/page.tsx
├── advertise-with-us/page.tsx
└── subscribe-to-our-newsletter/page.tsx

components/
└── layout/
    ├── Navigation.tsx
    └── Footer.tsx

public/
├── IAF/          # Italian Air Force images
├── Airshows/      # Airshow images
├── Work/          # Work With Us promo graphic
└── ...            # other category image folders
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/<your-username>/aviationist.git
cd aviationist
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## 🖼️ Adding Images

Most posts, authors, and promo graphics currently render as gray placeholders until real assets are added. To activate an image:

1. Drop the file into the matching folder under `public/` (e.g. `public/IAF/IAF-1.webp`).
2. Reference it on the post object, either as a plain string path:
   ```ts
   image: "/IAF/IAF-1.webp",
   ```
   or as a static import (preferred for `next/image`'s automatic sizing):
   ```ts
   import image1 from "@/public/IAF/IAF-1.webp";
   // ...
   image: image1,
   ```

> ⚠️ Files in `/public` are referenced by their path starting with `/` — **never** with an `@` alias (`@` aliases only work inside `import` statements, not inside a string passed to `src`).

## 🗂️ Content Model

Each page currently uses local, hardcoded arrays (`Post`, `Author`, etc.) at the top of its file as placeholder content — there's no CMS or API wired up yet. To connect a real data source:

1. Replace the local arrays with a `fetch` call (or a CMS SDK call) inside the page component.
2. Keep the same shape (`Post`, `Author`, `Tag` interfaces) so the rest of the component tree needs no changes.

## 🧩 Known Gaps / TODO

- [ ] Wire up real article, author, and tag pages (currently many links point to routes that don't exist yet)
- [ ] Connect the Contact and Subscribe forms to a real endpoint + bot-check provider (Cloudflare Turnstile / hCaptcha / reCAPTCHA)
- [ ] Add remaining Military Aviation subcategory pages (e.g. Patches, Mil Ops, Stealth Black Hawk, Tales From the Cockpit)
- [ ] Add remaining avatar and promo images
- [ ] Hero carousels on Military Aviation subcategory pages currently show a single verified slide — add the other slides' content once available
- [ ] Pagination links are static placeholders (no real page-2+ routes yet)

## 📄 License

This project is for educational purposes only. Original content and branding © The Aviationist / DC Media Srls.
