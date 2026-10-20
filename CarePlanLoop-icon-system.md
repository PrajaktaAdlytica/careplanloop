# CarePlanLoop icon system — Night Shift

**Purpose:** reusable interface icons for the proposed CarePlanLoop site and synthetic demo. This is a custom, monochrome line set designed for the Night Shift brand.

## Construction rules

- 24 × 24 viewBox; 1.6 px stroke; round caps and joins; `currentColor` for theming.
- Use 18–22 px in navigation and controls; 20–24 px in module and content contexts. Keep drawings on the shared optical center.
- Icons supplement text; they never carry status alone. Pair status icons with labels, source/time, and reviewer ownership.
- Use Signal Clay only for the human checkpoint and selected exception emphasis. Do not color every icon by category.
- Minimum interactive target is 44 × 44 px even when the glyph is 18–20 px. Provide visible focus and an accessible name for icon-only controls.
- Motion stays to a 1–2 px hover shift or brief color change. No spinning, pulsing, or blinking alerts.

## Included icons

**Navigation and actions:** `arrow-right`, `arrow-up-right`, `chevron-down`, `chevron-left`, `chevron-right`, `menu`, `close`, `plus`, `minus`, `check`, `external-link`.

**Workflow and product:** `calendar`, `clock`, `document`, `consent`, `list-check`, `report`, `exception`, `reviewer`, `people`, `route`, `pause`, `blocked`, `info`.

**Contact and utility:** `mail`, `phone`, `search`, `filter`.

**Optional footer social marks:** `linkedin`, `x-social`, `youtube`. Show these only beside real, verified company profile links. Omit the marks when a profile is not yet active; do not create dead footer links.

## Files and use

- `careplanloop-icons.svg` — icon symbol sprite.
- Individual `*.svg` files — standalone icons for design handoff or direct asset use.
- `CarePlanLoop-icon-sheet.html` — labeled preview and usage examples.

Sprite example (same-origin website asset):

```html
<button class="icon-button" aria-label="Open menu">
  <svg aria-hidden="true"><use href="/assets/careplanloop-icons.svg#menu"></use></svg>
</button>
<a class="cta" href="/demo">Explore the synthetic demo
  <svg aria-hidden="true"><use href="/assets/careplanloop-icons.svg#arrow-up-right"></use></svg>
</a>
```

For decorative icons use `aria-hidden="true"`; for an icon-only control, name the button itself. Do not put accessible text only in an SVG title.

## Safety and content fit

`exception` is a workflow status symbol, not a diagnosis. `reviewer` represents a human role, not an automated approver. `report` represents a record, not an interpreted clinical result. `consent` means a consent event is present in the demo, not that legal validity has been established. These icons do not imply a security certification, integration, billing eligibility, or clinical decision.
