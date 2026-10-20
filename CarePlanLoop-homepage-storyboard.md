# CarePlanLoop homepage story blueprint

**Selected direction:** Night Shift  
**Status:** pre-build narrative and motion blueprint. The brand system is proposed; no operating product, demand, clinical benefit, revenue, customer, or deployment is established.

## Creative premise

The homepage follows one fictional, synthetic care-work event from the moment a report arrives to the point where an assigned human reviewer takes responsibility. It makes the handoff legible, then widens the lens to the team workflow, the five proposed modules, and the evidence needed before a pilot.

**Story sentence:** A signal arrives. Its evidence stays attached. The right person is asked to review it. Work and billing evidence remain distinct.

**Buyer in view:** Primary-care population-health leader or risk-bearing care-management operator; clinical and billing owners jointly approve. The voice is operational and specific, with no promises about billing, outcomes, or savings.

**Core design device:** An open, fine-line route passes through each chapter. A warm checkpoint marks where human review is required. It never closes itself or moves to imply clinical approval. Section environments shift from Night Pine to Warm Paper and back to mark narrative chapters. Typography follows the brand kit's moderate scale.

## Homepage chapters

### 01 — A report arrives after hours

- **Purpose:** Establish the product category, intended buyer, first scope, and limits without a generic SaaS claim.
- **Copy:** Eyebrow: `After hours, the work still has an owner.` Headline: `Keep the handoff visible until review.` Body: `CarePlanLoop is a proposed work layer for consent, care-team follow-through, and RPM exceptions—routed to people, with the evidence kept in view.`
- **Visual:** Night Pine hero. A single horizontal route contains three labeled events: reported source → needs human review → assigned nurse. Persistent `CONCEPT PREVIEW · SYNTHETIC DATA` label. Source, timestamp, reviewer role, and separate staff-time lane are legible in the opening view.
- **Action:** Primary `Explore the synthetic demo`; secondary `Discuss a scoped pilot`.
- **Motion:** Route and event labels reveal in order over 450–600 ms. The route stops at the reviewer checkpoint. No autoplay, flashing, forced pause, or scroll hijack. Static complete state is the reduced-motion state.
- **Transition:** Route line exits the hero and becomes a thin chapter marker at the edge of the next section.

### 02 — The problem is the gap between events

- **Purpose:** Show the operational hypothesis: enrollment, consent, care-plan tasks, RPM exceptions, and documentation can be spread across separate processes.
- **Copy:** `The work is distributed. The handoff is easy to lose.` Explain this is a workflow hypothesis to validate; current teams, EHR plans, outsourced CCM vendors, and RPM platforms already address parts of it.
- **Visual:** A wide editorial field with five evidence fragments—consent status, care-plan task, reported reading, staff contact, billing-review evidence—set on separate horizontal tracks. They begin misaligned, then line up against a shared time ruler. No generic card grid.
- **Motion:** Tracks align once as the section enters view; text labels stay still and readable. No implied automated reconciliation in a product that has not been built.
- **Transition:** The time ruler becomes the synthetic patient's month timeline.

### 03 — One synthetic month, in sequence

- **Purpose:** Make the concept concrete through one-condition synthetic example data only.
- **Copy:** `Follow one record through the work—not through a diagnosis.` Supporting note: `Illustrative hypertension program; fictional events; not a real patient or integration.`
- **Visual:** Month timeline with visibly different event types: consent event, reported device reading, assigned follow-up, staff contact, clinician sign-off. Source and timestamps stay attached to every item. A switcher changes among three synthetic cases: clean handoff, ambiguous exception, blocked/abstained. The selected case is the only one in focus.
- **Motion:** Timeline is revealed in chronological order. The case switcher changes actual event content and status, not just colors. Keyboard and touch operable; the full timeline remains available with motion disabled.
- **Guardrail:** No condition inference, dose change, treatment recommendation, automatic triage conclusion, or claim that one-condition enrollment establishes CCM/PCM eligibility.
- **Transition:** A reported reading enlarges into its evidence view.

### 04 — A reported reading stays a report

- **Purpose:** Demonstrate source provenance and uncertainty; make the human review boundary visible.
- **Copy:** `Received is not reviewed.` Body: `A reported value can be routed for review. The example does not interpret it or recommend a clinical action.`
- **Visual:** Evidence pane displays fictional source label, received time, and status `Awaiting clinical review`. Beside it, an exception line ends at `Assigned reviewer: Nurse role · pending`. An ambiguous case shows an explicit `Abstained — reason needs human context` state.
- **Motion:** Source attachment appears first; the route then reaches the reviewer and pauses. The pause is a persistent state, never a loading spinner.
- **Guardrail:** Keep reading, system routing, reviewer action, and clinician sign-off visually distinct.
- **Transition:** The reviewer label becomes the named owner in the next task view.

### 05 — Ownership gives the handoff a next step

- **Purpose:** Show clinician-approved task tracking without suggesting autonomous clinical decisions.
- **Copy:** `A visible owner. A dated next action.`
- **Visual:** One task record with fictional role owner, due time, linked source event, status, and a manual review action. Sign-off is attributed to a fictional clinical role and timestamp. No treatment output appears.
- **Motion:** A manual reviewer selection changes `Unassigned` to `Assigned to nurse role`; the line moves only to the owner field. A second explicit action can mark the example reviewed. The page never auto-completes a task.
- **Transition:** A second, parallel lane enters below the clinical work lane.

### 06 — Staff activity and billing evidence stay separate

- **Purpose:** Preserve the crucial distinction among readings, automated touches, staff work, clinician review, and billing review.
- **Copy:** `A device reading is not a staff service. A log is not a billing determination.`
- **Visual:** Two aligned but separate lanes: `Care-team events` and `Staff contact / time record · for billing review`. A consent event appears as its own event. Add small labels that CCM and RPM are distinct services; qualified practitioner, service, consent, time, and payer requirements need verification in the relevant workflow.
- **Motion:** Lanes align on the same time ruler without merging. The billing lane enters after the staff action event and remains labeled `Review evidence`; it never changes to “billable.”
- **Transition:** The shared time ruler stretches across the team workflow.

### 07 — Five proposed places to support the work

- **Purpose:** Present all five source offers, keeping each distinct and accurately named.
- **Copy and order:**
  1. Enrollment/consent and eligibility review queue.
  2. Clinician-approved personalized care-plan task tracker.
  3. RPM exception triage routed to clinicians.
  4. Contact/time documentation and reconciliation for billing staff.
  5. Longitudinal gap and escalation analytics across care teams.
- **Visual:** One connected horizontal workline with five differently composed stations—not five repeated cards. Each has a specific artifact and a `Proposed module` label. Emphasize the first pilot slice: one-condition care-team task/consent timeline and RPM exception queue, no independent clinical triage.
- **Motion:** Stations enter along the line in reading order. Desktop allows an obvious keyboard/touch selector to reveal detail; mobile uses a vertical sequence. Content never depends on hover.
- **Transition:** The route pauses at a seam between internal workflow and current alternatives.

### 08 — Fit around the team's current system

- **Purpose:** Be credible about incumbents and test the exact workflow fit.
- **Copy:** `Work alongside the people and tools already in the loop.` Note that nurses, EHR care plans, outsourced CCM vendors, and RPM platforms such as Health Recovery Solutions address adjacent pieces. CarePlanLoop's hypothesis is structured work orchestration, not sensor duplication or clinician replacement.
- **Visual:** A restrained systems map places the care team and existing tools around a shared event timeline. No partner logos, integration badges, or unverified connection states. Use `Possible workflow boundary · to validate` labels.
- **Motion:** Existing components appear first; the proposed coordination route is drawn as a thin overlay. Never animate a data connection as if integration exists.
- **Transition:** Existing steps become the baseline for measurement.

### 09 — Measure the workflow before making a claim

- **Purpose:** State how the concept will be validated and how it can fail.
- **Copy:** `The first question is whether follow-through becomes more visible without adding burden.`
- **Visual:** A typographic measurement panel, not fabricated charts. Primary measure: percentage of required care-team follow-ups documented by the assigned owner within local SLA versus baseline. Guardrails: nurse minutes, missed escalations, unbillable-time error. A blank baseline field says `To be measured in a governed workflow replay`.
- **Motion:** Metric labels resolve one by one; no animated result values or success percentage.
- **Evidence note:** Research-stage concept. No efficacy, ROI, reimbursement, billability, coding validity, security, or compliance outcome is established.
- **Transition:** The blank baseline opens into the bounded pilot requirements.

### 10 — A bounded pilot has gates and stop rules

- **Purpose:** Invite a serious discussion while setting buyer expectations.
- **Copy:** `Start with one workflow. Agree on owners, access, and a stop rule.`
- **Visual:** A vertical readiness sequence: 8 clinical/RCM interviews; one governed cohort workflow replay; device-feed rights assessment; jointly signed paid-pilot scope; data-access/security and human-oversight approvals. Each is marked `Required before pilot`, not completed. Stop conditions sit in a side note: staffing cannot meet escalation SLA; device rights unavailable; validated staff time or net margin worsens.
- **Price:** `$1,200 per care team per month + $3,000 onboarding` only when explicitly labeled **hypothetical test price**. Explain it is not a current offer or accepted market price; test against staffing and distinct CCM/RPM economics.
- **CTA:** `Discuss a scoped pilot` with the target roles named: population-health / care-management operations, clinical owner, and RCM owner.
- **Motion:** Readiness path draws down but stops at the unfilled approval gate. No “complete” state is pre-populated.
- **Transition:** Final question and form appear on Warm Paper with calm contrast.

### 11 — Ask about the workflow, not patient data

- **Purpose:** Convert an appropriate B2B visitor into a discovery conversation.
- **Copy:** `Where does your handoff lose its owner?` Explain who this conversation is for and what happens next in plain language.
- **Form fields:** Role; organization type; work email; site/region; current workflow or tool; module of interest; one workflow-fit question. No patient information, health details, uploads, or patient identifiers. Include privacy notice/version, consent timestamp handling, deletion-request path, and honest response expectation when implemented.
- **States:** Labeled idle, validation error, sending, success, and failure. Success is presented only after the eventual backend confirms receipt. During prototype, label the form front-end-only.
- **Motion:** Form labels and supporting notes remain static. Focus treatment is clear and keyboard visible.
- **Footer:** Home, modules, solutions, synthetic demo, validation, trust, about, contact, sign-in, legal, and only verified social links. No invented address or company profile.

## Motion grammar across the full page

- Native scrolling, no scroll-jacking or pinned full-screen trap. Chapter transitions may use a subtle background change, route progression, and brief opacity/position reveal.
- Enter animation: 8–14 px travel and 450–700 ms with the brand ease. Stagger only dependent evidence events; body copy is immediately readable.
- A persistent chapter progress indicator is optional and must be a labeled, non-interactive reading aid; do not let it look like clinical status.
- Pause animation while offscreen. Provide skip-to-content, visible focus, keyboard interaction, and complete still-state diagrams under `prefers-reduced-motion`.
- No autoplaying device values, blinking exceptions, arbitrary chart movement, completion confetti, or checkpoint animation that suggests clinical approval.

## Page-wide claim and content rules

- Mark every product scene `DEMO — SYNTHETIC DATA` or `CONCEPT PREVIEW`; use fictional names, dates, roles, and non-routable identifiers.
- Distinguish reported reading, staff action, consent, clinician sign-off, and billing evidence.
- Do not imply every automated touch or device reading is billable. CCM and RPM remain separate service lines.
- Do not claim live integrations, clinical benefit, diagnosis/treatment, validated workflows, savings, ROI, compliance certification, customers, product availability, or pricing acceptance.
- Keep all five modules proposed; do not rename them as active subscription tiers.

## Approval checkpoint before implementation

Review this story order and copy, then build the homepage and the synthetic three-case demo to these states. Implementation can begin from this blueprint; all research-stage limitations and public-page guardrails remain part of the copy.
