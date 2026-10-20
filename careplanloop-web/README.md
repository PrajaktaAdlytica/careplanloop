# CarePlanLoop — Night Shift website

Complete responsive Next.js App Router site for the research-stage CarePlanLoop concept. The build uses static export so the public concept pages can be hosted as static files after review.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```sh
npm run build
```

The static site is generated in `out/` using Next.js `output: 'export'`.

## Routes

- `/` — scroll-led homepage
- `/why-care-work-breaks/` — workflow hypothesis and alternatives
- `/platform/` — first workflow slice
- `/modules/` and five module detail routes
- `/solutions/` and three validation-channel detail routes
- `/demo/` and `/demo/month-timeline/` — synthetic three-case demo
- `/pricing/` — explicitly hypothetical research price
- `/validation/` — metric, guardrails, pilot gate, stop rule, official source reading
- `/trust/` — data, human-review, and product boundaries
- `/about/`, `/contact/`, `/request-pilot/`, `/sign-in/`
- Branded 404 page

## Implementation notes

- React 19 + Next.js App Router with static export.
- Lenis and GSAP ScrollTrigger enhance native page scrolling and reveal section details. No scroll-jacking, pinned full-screen story, autoplay, or WebGL.
- Reduced-motion preference disables the smooth-scroll and reveal animations; the full page remains readable.
- All workflow examples are fictional and labeled `DEMO — SYNTHETIC DATA` / `CONCEPT PREVIEW`.
- The inquiry and sign-in interactions are front-end only. They do not transmit or save personal data and are not connected to authentication.
- SEO indexing is disabled while the working name and product are unverified. Revisit metadata, privacy notice, and legal routes before any public deployment.
- Fonts use the brand-kit Instrument Sans / Newsreader pairing with system fallbacks.
