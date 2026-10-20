# CarePlanLoop concept website

Responsive static prototype built from `CarePlanLoop-homepage-storyboard.md` and the Night Shift brand kit.

## Files

- `index.html` — scroll-led homepage and inline synthetic case explorer.
- `demo.html` — standalone three-case concept demo.
- `assets/site.css` and `assets/site.js` — shared responsive system and interactions.
- `assets/icons.svg` — shared icon sprite.
- Brand SVGs and favicon are copied into `assets/`.

## Preview

Serve this directory with any static file server. For example:

```sh
python3 -m http.server 4175 --directory outputs/careplanloop-site
```

Then open `http://127.0.0.1:4175/`.

This prototype has no backend. The inquiry form is front-end only and explicitly reports that information is not sent or saved. All demo records are synthetic. Do not treat the concept as an operating product or a clinical, billing, or compliance decision system.
