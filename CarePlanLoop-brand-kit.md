# CarePlanLoop — Night Shift brand kit

**Status:** proposed identity for the selected visual direction. The name, domain, trademark, product, pricing, and all performance statements remain unverified. This is a concept-stage brand system for a research-stage B2B product.

## 1. Brand idea

**Night Shift** makes the work between a reported signal and a human decision visible. The product should feel composed during an after-hours exception: the source is present, the status is legible, the next owner is named, and the work pauses at a human review point.

**Brand promise:** Keep chronic-care work visible until the right person reviews it.

**Character:** attentive, measured, humane, exact, quietly confident.

**Avoid:** alarmist urgency, hospital stock imagery, generic AI gradients, claims of autonomous care, reimbursement certainty, generic “command center” language.

## 2. Positioning and voice

CarePlanLoop is a proposed human-accountable work layer for care-team follow-through. It connects enrollment and consent review, clinician-approved tasks, reported RPM exceptions, staff activity records, and longitudinal follow-up visibility. It is not a sensor platform, clinician substitute, or automatic billing engine.

Write in direct operational language. Prefer “reported reading,” “routed for review,” “review owner,” and “billing evidence” over “diagnosis,” “AI decision,” “billable touch,” and “automated care.” Make uncertainty explicit. Explain what happens next and who owns it.

**Voice examples**

- Hero: “Keep the handoff visible until review.”
- Product: “A reported exception is waiting for the assigned clinical reviewer.”
- Evidence: “Source: synthetic home reading · 08:42 · received, not interpreted.”
- Boundary: “No diagnosis or treatment recommendation is generated.”
- CTA: “Discuss a scoped pilot” / “Explore the synthetic demo.”

## 3. Logo system

The symbol combines an open circular route, a small clock-like trace, and a warm checkpoint at the gap. It represents continuity with a visible pause for human review. The open route must remain open; do not close the loop or animate the checkpoint into an approval state on its own.

### Files

- `careplanloop-logo-dark.svg` — dark mark and wordmark for light surfaces.
- `careplanloop-logo-light.svg` — light mark and wordmark for dark surfaces.
- `careplanloop-mark-dark.svg` — standalone dark symbol.
- `careplanloop-mark-light.svg` — standalone light symbol.
- `favicon.svg` — dark-ground favicon mark with a solid Night Pine field.

### Use

- Use horizontal logo at a minimum width of 170 px digitally; keep clear space at least the width of the warm checkpoint.
- Use the symbol alone for favicon, compact app rail, and avatar. Keep it at least 24 px in product UI.
- Preserve the supplied colors and proportions. No shadows, gradients, outlines around the whole logo, rotation, recoloring the checkpoint as an alert, or placing it on busy photography.
- For a one-color reproduction, use the entire mark in one color and retain the open gap.

## 4. Color palette

| Token | Hex | Role |
|---|---|---|
| Night Pine | `#172A22` | Main dark canvas, hero and product shell |
| Deep Canopy | `#20372B` | Raised panel and navigation surface |
| Care Ink | `#193328` | Primary text and light-background logo |
| Field Green | `#486A55` | Primary action, links, active route |
| Soft Sage | `#A9B8A5` | Secondary lines, quiet labels on dark |
| Quiet Mint | `#DCE4D8` | Light highlight and completed state |
| Warm Paper | `#F4F2E9` | Primary light surface |
| Pale Reed | `#E8E9DF` | Secondary light surface and dividers |
| Signal Clay | `#C88965` | Human checkpoint, selected exception cue |
| Review Amber | `#D5AC84` | Needs-review status; pair with text/icon |
| Muted Text | `#AEBDB1` | Secondary copy on dark |
| White | `#FFFFFF` | High-contrast text and form surface |

**Ratio:** 60% Warm Paper / 25% Night Pine and Deep Canopy / 10% Sage and Mint / 5% Signal Clay. Clay is a pinpoint accent, never a decorative wash. Red is reserved for explicitly described urgent clinical states and must never be invented in a synthetic sample.

## 5. Typography

**Primary:** Instrument Sans, 400–600. Fallback: DM Sans, system sans-serif. Use for interface and most editorial copy.

**Editorial accent:** Newsreader, 400 italic, used sparingly for a short human-centered phrase or pull quote. Avoid serif display headlines and oversized weights.

| Style | Desktop | Mobile | Weight / leading |
|---|---:|---:|---|
| Display | 48–56 px | 34–38 px | 400–500 / 1.08 |
| H1 | 42–48 px | 32–36 px | 400 / 1.12 |
| H2 | 30–36 px | 27–31 px | 400–500 / 1.18 |
| H3 | 20–24 px | 19–22 px | 500 / 1.3 |
| Body | 16–18 px | 16 px | 400 / 1.6 |
| UI / button | 14–15 px | 14 px | 500 / 1.35 |
| Meta | 11–12 px | 11 px | 500 / 1.4, +0.08em tracking |

Use sentence case. Limit tracking to compact metadata. Break headings across natural phrases; never use all caps as body copy.

## 6. Graphic and illustration language

Create original, fine-line workflow drawings on warm paper or Night Pine. Use a 1.25–1.5 px stroke, round caps, restrained geometry, and small labels tied to visible source events. Draw routes as interrupted lines that stop at a reviewer marker. Use small timing ticks, source brackets, and paired evidence lanes to explain sequence and accountability.

**Primary visual:** an after-hours report arrives; its source and timestamp stay attached as the item moves into a review queue; the route pauses at the clinician checkpoint. A separate lane records staff contact/time for billing review. The illustration must not imply interpretation or treatment.

**Avoid:** stock clinicians, floating glass cards, brain/network imagery, decorative pulse traces, dashboard confetti, copied Klimori diagrams or color compositions. Klimori is a reference for fine detail, layered linework, and thoughtful section transitions only.

## 7. Icon rules

Use a custom line icon set, 20×20 px base grid, 1.5 px stroke, square-ish terminals, round joins. Pair icons with labels for status and meaning. Suggested primitives: source/report, clock, consent document, assigned owner, review checkpoint, staff time record, blocked state. Do not use a bell for every alert or use color alone to signal status.

**Reusable icon assets:** [icon system guide](CarePlanLoop-icon-system.md), [labeled icon sheet](CarePlanLoop-icon-sheet.html), and individual SVGs in `careplanloop-icons/`. Footer social marks are optional and should be linked only to verified company profiles.

## 8. Motion principles

Motion clarifies the sequence and ownership of work. Use a 450–700 ms route reveal as a section enters view: source marker → evidence line → assigned owner → checkpoint, where the line pauses. Use opacity and 8–14 px travel, gentle ease `cubic-bezier(.2,.7,.2,1)`. Keep section transitions native-scroll and skippable; do not hijack wheel/touch input.

Hover: buttons rise at most 2 px and warm accent shifts slightly; evidence rows reveal a fine rule or source detail. Focus: visible 2 px mint/amber outline with 3 px offset. Reduced motion: show the complete still diagram, disable scroll-tied transforms and transition only color/opacity (≤120 ms). No autoplaying readings, blinking alerts, looping progress, or checkpoint motion that implies a clinician approved something.

## 9. UI application

**Primary action:** Field Green background on light canvas; Warm Paper background on Night Pine. Rounded capsule, 44–48 px high, sentence-case label, one small directional arrow. Avoid glossy gradients and oversized pills.

**Secondary action:** text link with an underline that grows from the label; visible keyboard focus.

**Panels:** use a few purposeful framed surfaces, hairline borders, and open typography. Keep the evidence timeline as the main composition. Avoid repeated rounded cards. Panel radius 4–8 px; button radius full; shadows only for a raised review drawer, very soft and short.

**Statuses:**

- Received — neutral outlined dot and source timestamp.
- Awaiting review — clay checkpoint plus text label and reviewer role.
- Blocked / abstained — dashed route, pause icon, reason text.
- Reviewed — named fictional reviewer and timestamp; never infer a treatment action.
- Billing review — separate evidence lane, visibly not a billing determination.

## 10. Product and marketing guardrails

Every product frame must say **DEMO — SYNTHETIC DATA** or **CONCEPT PREVIEW**. Use fictional examples only. Show source, timestamp, owner, unresolved state, and reviewer identity as a fictional role. Separate RPM reports, staff actions, clinician sign-off, consent events, and billing evidence. Do not display diagnosis, treatment recommendation, dose changes, live EHR/device connections, real patient/provider identifiers, or unsupported security/compliance claims.

Care management billing is not implied by automated touches or device readings. A demonstration cannot establish clinical benefit, coding validity, billability, regulatory compliance, ROI, or product operation.

## 11. Design tokens

```css
:root {
  --cl-night-pine: #172A22;
  --cl-deep-canopy: #20372B;
  --cl-care-ink: #193328;
  --cl-field-green: #486A55;
  --cl-soft-sage: #A9B8A5;
  --cl-quiet-mint: #DCE4D8;
  --cl-warm-paper: #F4F2E9;
  --cl-pale-reed: #E8E9DF;
  --cl-signal-clay: #C88965;
  --cl-review-amber: #D5AC84;
  --cl-muted-text: #AEBDB1;
  --cl-font-ui: "Instrument Sans", "DM Sans", system-ui, sans-serif;
  --cl-font-editorial: "Newsreader", Georgia, serif;
  --cl-radius-panel: 6px;
  --cl-radius-button: 999px;
  --cl-motion-ease: cubic-bezier(.2,.7,.2,1);
  --cl-motion-route: 600ms;
}
```

## 12. Next design stage

Apply this identity to the approved website IA and the synthetic 3-case product demo. First make the shared header/footer, homepage long-scroll story, module pages, demo, and pilot request/contact route. Keep inquiry forms B2B-only (role, organization, work email, site/region, workflow-fit question); no patient details or uploads. Pricing stays explicitly hypothetical until validated.
