# PurrBiome Landing Page

Multi-page static marketing website for **PurrBiome**, a feline health and gut-microbiome tracking platform. The site is built with semantic HTML5, modern CSS, and vanilla JavaScript. It requires no build tooling or runtime dependencies and is intended for hosting on GitHub Pages.

Live application demo: https://PurrBiome.streamlit.app/

---

## Table of Contents

- [Pages](#pages)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Features](#features)
- [Deployment](#deployment)
- [Local Development](#local-development)
- [Browser Support](#browser-support)
- [License](#license)

---

## Pages

| Page             | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| `index.html`     | Homepage. Hero section, feature grid, and live demo preview banner.    |
| `science.html`   | Science overview. Feline microbiome importance and tracked metrics.    |
| `features.html`  | Product walkthrough. Three-step process and FAQ accordion.             |
| `404.html`       | Custom error page served by GitHub Pages for unresolved routes.        |

## Project Structure

```
PB_landingPage/
├── index.html
├── science.html
├── features.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css          # Global design system and responsive layout
├── js/
│   └── main.js            # Shared interactivity (menu, reveal, accordion)
├── assets/
│   └── images/            # Local image assets
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions deployment workflow
```

## Design System

The visual language is defined as CSS custom properties in `css/style.css`.

| Token           | Value      | Usage                        |
| --------------- | ---------- | ---------------------------- |
| `--primary`     | `#5B4B8A`  | Purple/indigo, primary brand |
| `--secondary`   | `#8FAE8B`  | Sage green, accents          |
| `--cream`       | `#FAF6F1`  | Page background              |
| `--ink`         | `#2D2A32`  | Primary text color           |

Typography is loaded from Google Fonts: **Plus Jakarta Sans** for headings and **Inter** for body text. Layout is implemented with CSS Grid and Flexbox and is fully responsive across three breakpoints: `1024px`, `860px`, and `560px`.

## Features

- Sticky header with scroll-state shadow and accessible mobile navigation.
- Mobile menu toggled via a hamburger button; closes on link selection, outside click, and `Escape` key.
- Scroll-reveal animations driven by the IntersectionObserver API.
- Native `<details>`-based FAQ accordion with exclusive-open behavior.
- Smooth scrolling with `scroll-padding-top` accounting for the fixed header.
- Reduced-motion support through the `prefers-reduced-motion` media query.
- Cat imagery served from Unsplash with width/quality query parameters and lazy loading below the fold.
- All product CTAs link to the Streamlit application and open in a new tab.


## License

Copyright (c) PurrBiome. All rights reserved.

