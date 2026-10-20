# CarePlanLoop — website information architecture

**Document:** IA and brief-to-page coverage  
**Status:** Planning only; no visual direction or implementation decisions made  
**Date:** 20 October 2026  
**Working name:** CarePlanLoop (not trademark-cleared; domain not verified)  
**Product status:** Research-stage concept. No operating product, real customers, live integrations, validated pricing, measured outcomes, or demonstrated demand.

## 1. IA principles and scope

This structure preserves the user's CarePlanLoop brief. The Startup Website Master Guide informs completeness and buyer journeys; it does not override the brief. In particular:

- Keep all five source offers as distinct proposed modules and give each a dedicated detail route. They are directions to test, not five available product plans. The first validation/pilot scope remains the one-condition care-team task/consent timeline and RPM exception queue.
- Make the synthetic concept demo central and visibly labeled. It must never imply an operating product, production integration, actual patient/provider, or validated decision.
- Keep clinical decisions with clinicians and billing determinations with the billing organization. No diagnosis, treatment, dose adjustment, independent clinical triage, automated eligibility/coding, billing guarantee, or compliance assertion.
- Show the workflow evidence trail and keep device-reported data, staff actions, clinician sign-off, consent, and billing evidence as distinct event types.
- Preserve the full validation story: separate clinical-operations and RCM discovery, bounded retrospective workflow study on an appropriately consented cohort, device-feed rights, escalation SLA, jointly approved paid-pilot scope, baseline metric, guardrails, and stop conditions.
- Do not publish or deploy patient-data collection, patient outreach, live integrations, analytics, Notion updates, ads, or real-patient functionality as part of this IA.

## 2. Product and offer inventory

| Exact source offer | Page label / suggested route | Job and audience | Stage disclosure |
|---|---|---|---|
| Enrollment/consent and eligibility review queue | `/modules/enrollment-consent-review` | Gives enrollment and consent status a review queue for care operations; eligibility remains a human review. | Proposed module; not an automated eligibility determination. |
| Clinician-approved personalized care-plan task tracker | `/modules/care-plan-task-tracker` | Tracks clinician-approved plan tasks, owner, due point, and status. | Proposed module; the plan and clinical decisions remain clinician-approved. |
| RPM exception triage routed to clinicians | `/modules/rpm-exception-routing` | Makes a reported exception, its provenance, assigned reviewer, and open/closed state visible. | Proposed module; no independent clinical triage or device feed exists. |
| Contact/time documentation and reconciliation for billing staff | `/modules/contact-time-reconciliation` | Separates a staff contact/time record from billing review and reconciliation. | Proposed module; a record or automated touch is not automatically billable. |
| Longitudinal gap and escalation analytics across care teams | `/modules/gap-escalation-analytics` | Provides a proposed cross-team view of follow-up gaps and escalation status. | Proposed module; no performance or outcome evidence exists. |

**Naming note:** the inherited execution brief also contains five internal candidate names under “Chronic Dock Outreach…” (Desk, Review, Proof, Signal, Report). The current user-selected working brand is CarePlanLoop. Do not publish the old brand or treat those candidate module names as approved. Retain them in internal naming notes only until CarePlanLoop names are deliberately chosen and cleared.

For traceability, the five inherited internal candidates map in source order as follows: **Chronic Dock Outreach Desk** → enrollment/consent and eligibility review queue; **Chronic Dock Outreach Review** → clinician-approved personalized care-plan task tracker; **Chronic Dock Outreach Proof** → RPM exception triage routed to clinicians; **Chronic Dock Outreach Signal** → contact/time documentation and reconciliation for billing staff; **Chronic Dock Outreach Report** → longitudinal gap and escalation analytics. They are not current CarePlanLoop product names or approved public labels.

## 3. Global navigation

**Primary navigation**

- **Product**: Platform; Modules (all five names and links); Synthetic demo.
- **Solutions**: Primary-care networks; ACO enablement groups; RPM implementation partners.
- **Validation**: Pilot approach; Pricing hypothesis; Evidence and limits.
- **Company**: About; Contact.
- **Sign in**: polished concept workspace entry with clear prototype/authentication disclosure.
- **Primary CTA**: Request a scoped pilot.

Keep the synthetic demo and pilot request available from the mobile menu. Footer repeats the complete destination map and includes privacy/terms links only when the actual form/data practices have been reviewed. No unprovided company address, social profile, partner logo, customer logo, or integration badge.

## 4. Sitemap and page responsibilities

| Route | Page | Required coverage and key sections |
|---|---|---|
| `/` | Home | Full buyer-facing story; concise category and scope; all five named source offers visible; synthetic demo entry; target organizations; pilot CTA; limits and disclosure. Homepage narrative is detailed in section 5. |
| `/why-care-work-breaks` | Workflow problem | Enrollment, consent, longitudinal tasks, RPM exceptions, staff time, and handoffs are fragmented across people/tools; distinguish observed research from hypotheses. Explain staffing, EHR fit, communication, device coverage, consent, alert fatigue, overlapping programs/billing, payer variation, outcome measurement, and net-margin questions. Include alternatives: nurses/EHR care plans, outsourced CCM, RPM platforms such as Health Recovery Solutions. No claim every organization has the same problem. |
| `/platform` | Product/workflow overview | First product slice: one-condition care-team task/consent timeline plus RPM exception queue. Explain source/provenance, role/owner, status, next action, human approval, unresolved/abstained cases, and separate billing-evidence view. State no live connection or autonomous decision exists. |
| `/modules` | Module index | All five source offers in order, each with distinct responsibility, intended user, proposed status, current limits, and a link to a dedicated page. Do not call them live plans or checkout tiers. |
| `/modules/enrollment-consent-review` | Module detail 1 | Enrollment/consent review queue; consent evidence and eligibility review status; human reviewer and current boundary. No automated qualification or claim. |
| `/modules/care-plan-task-tracker` | Module detail 2 | Clinician-approved personalized care-plan task tracking; task owner, due date, handoff, completion evidence, and unresolved state. No plan generation or treatment recommendation. |
| `/modules/rpm-exception-routing` | Module detail 3 | Report source/time, exception status, assigned clinician role, review state, and documented disposition; synthetic-only. No automatic diagnosis, dose, or clinical recommendation. |
| `/modules/contact-time-reconciliation` | Module detail 4 | Contact and time records, reconciliation fields, reviewer, and separate billing-review status. Explicitly distinguish recorded work from billable service/payment determination. |
| `/modules/gap-escalation-analytics` | Module detail 5 | Proposed longitudinal view of follow-up gaps and escalations by care team, owner, and state. No performance/outcome claims before measurement. |
| `/solutions` | Buyer/use-case index | Three first validation channels: primary-care networks; ACO enablement groups; RPM implementation partners. Also account for Medicare-focused provider groups and risk-contract operators in acquisition/validation planning. Within each, separate clinical-operations/population-health discovery from RCM discovery. Explain where the concept could sit beside current EHR/CCM/RPM workflows; do not assert replacement or integration. |
| `/solutions/primary-care-networks` | Use case | Population-health leader, care manager, clinical approver, and billing owner. Show one-condition timeline example and discovery questions about the current EHR and staffing model. |
| `/solutions/aco-enablement-groups` | Use case | Cross-team follow-up and escalation visibility as a hypothesis; identify operator, clinical oversight, and RCM roles. Avoid risk-contract performance promises. |
| `/solutions/rpm-implementation-partners` | Use case | Exception handoff and ownership around a reported reading; identify device-feed rights and escalation SLA as prerequisites. No implied device compatibility or live integration. |
| `/demo` | Synthetic product demo | A realistic, read-only concept preview with pinned **DEMO · SYNTHETIC DATA · CONCEPT PREVIEW** labels. Show queue/list, opened record, evidence/source pane, owner/reviewer action, and a detail/timeline view. Three scenario paths: clean handoff; ambiguous exception requiring review; blocked/abstained case. Timestamp events and identify fictional role owners. All actions stay unsent and reversible; no patient contact, clinical-system writes, external action, PHI, real identifiers, or automatic advice. |
| `/demo/month-timeline` | Demo scenario / timeline | Synthetic hypertension month storyboard: consent event; reported reading with source and timestamp; outlier routed to nurse and left unresolved; clinician sign-off attributed to a fictional role; staff contact/time separately logged for billing review. No dose/diagnosis output. Clearly distinguish report, staff action, clinician sign-off, consent, and billing evidence. |
| `/pricing` | Commercial hypothesis | State the proposed test hypothesis exactly: **$1,200 per care team per month plus $3,000 onboarding**. Label prominently “hypothetical research price; not an active offer or accepted market price.” Explain test against staffing cost and distinct CCM/RPM economics. No checkout, reimbursement, ROI, or savings claims. Link to scoped conversation. |
| `/validation` | Evidence, pilot, and limits | Research-stage status, alternatives, open questions, retrospective workflow-study plan, baseline, validation metric, guardrails, paid-pilot gate, and stop rule. Separate cited facts, hypotheses, and unknowns. No fabricated customer story, outcome statistic, or quote. |
| `/trust` | Trust, governance, and limits | State the current concept boundaries: synthetic data only; no PHI, diagnosis, treatment, patient outreach, external actions, writes, or live integrations. Explain intended human approval, provenance, and reversibility in a future governed pilot. Do not claim HIPAA compliance, security certifications, or controls that do not exist. |
| `/request-demo` | Guided demo request | A guided walkthrough request for clinical operations, population-health, and RCM roles. Ask which workflow they want to discuss and describe the next step. No patient data or uploads. |
| `/request-pilot` | Scoped pilot inquiry | Product-specific B2B intake: role; organization type; work email; site/region; current workflow/system; selected module/interest; one workflow-fit question; optional scale/context field only if useful. Provide privacy notice/version, consent timestamp, response expectation, no-patient-data warning, and deletion-request route. No medical details, file uploads, patient identifiers, or sensitive records. Form behavior must be described honestly until delivery is connected. |
| `/about` | Company/concept | Provisional name and research-stage concept. **Vision:** make chronic-care operations a human-accountable operating layer with every exception, source, and owner traceable; expand only after permission and measurable operational gain are proven. **Mission:** start with a one-condition care-team task/consent timeline and RPM exception queue, with no independent clinical triage; seek a governed paid pilot by showing where the workflow fails and who must approve each action. No invented team, customers, investors, address, or traction. Link to contact and validation approach. |
| `/contact` | Contact | Business inquiry route and the same minimal, non-patient-data policy. No invented contact address; use an actual configured contact destination only after one is supplied. |
| `/sign-in` | Sign in | Complete, polished concept workspace sign-in presentation with work email/password or the chosen planned method, password visibility, help/recovery path, labels, and validation. Clearly disclose if authentication is not connected. Do not show unplanned SSO/provider controls as working options. |
| `/privacy` and `/terms` | Legal | Required only with reviewed, accurate notices matching actual form storage, analytics, deletion, and processing behavior. Do not invent security or legal assertions. |
| `/404` | Recovery | Branded error state with working links to Home, Demo, Modules, and Request pilot. |

**Results-page adaptation:** the brief says no demand, efficacy, outcome, or ROI has been demonstrated. Use `/validation` as the honest results/evidence destination: explain what has not yet been measured and how future measurement would work. Do not create a conventional customer-results page until evidence exists.

**Not included as public claims/pages yet:** customer stories, measured results, testimonials, integrations directory, docs/API, active checkout, open registration, security certification, or live system status. The brief supplies no evidence or capability to support them. Their relevant questions belong in Validation/Trust content until verified.

## 5. Homepage story and section order

The homepage must tell a scroll-led story while retaining normal page scrolling. Each chapter adds one accountable event to the same month timeline; the story is skippable and its full meaning is available in a still state. The references guide interaction only: use Lux's claim-to-example progression, Blackbird's optional paths into detail, and Klimori's staged progression from separate conditions to one operating picture. Do not copy their visual systems or assume their pinning/reduced-motion mechanics.

1. **Hero — “Keep chronic-care work visible without mistaking automated touches for billable care.”** State the buyer: primary-care population-health leader or risk-bearing care-management operator, with clinical and billing owners jointly approving. Explain the first concept slice in one sentence. CTAs: **View the synthetic demo** and **Request a scoped pilot conversation**. Add visible concept/synthetic disclosure.
2. **The work arrives from different places.** Introduce enrollment/consent, care-plan tasks, reported readings, staff contacts, and billing review as distinct event types; show the handoff/ownership question.
3. **Consent and eligibility are reviewed.** Show a fictional enrollment/consent event with source/time/reviewer state. Explain that the software queue does not determine eligibility.
4. **A clinician-approved plan creates work.** Add assigned tasks and named owner from a human-approved plan; no automatic care plan generation.
5. **A report becomes an exception, not a diagnosis.** Add a synthetic reported outlier with source and time. Route to a fictional nurse role. Keep it visibly unresolved pending human review; show abstention/uncertainty.
6. **A clinician signs off.** Show attributed fictional reviewer, timestamp, and recorded disposition as a separate event. Do not invent treatment or dose changes.
7. **Work records and billing evidence stay distinct.** Add a fictional staff contact/time log and separate billing review state. Clarify that automated touches and readings do not themselves establish billable care.
8. **Five proposed modules.** Show all five offers with exact names, clear concise descriptions, unique compositions (not repeated generic cards), proposed status, and direct page links. Identify the first validation slice as the timeline plus exception queue.
9. **Who should validate it.** Distinguish primary-care networks, ACO enablement groups, and RPM implementation partners; provide separate paths or prompts for clinical operations and RCM.
10. **Fit beside existing workflows.** Name alternatives/categories accurately—care managers and nurses, EHR care plans, outsourced CCM vendors, RPM platforms—and frame differentiation as a hypothesis: structured work orchestration, not sensor duplication or clinician replacement.
11. **What is known and unknown.** Cite CMS policy sources for service distinctions. Make staffing, alert burden, consent, device rights, integration access, overlapping billing, payer variation, outcomes, and net margin explicit discovery questions.
12. **Pilot gate and test price.** Summarize the hypothetical price only with an unmissable label; show validation requirements, metric/guardrails, and stop conditions. Do not imply pricing acceptance, ROI, or a current paid program.
13. **Final scoped-pilot CTA and FAQ.** Ask for the relevant buyer/operator role and workflow context. FAQ addresses scope, synthetic data, clinical review, billing boundaries, integrations, hypothetical pricing, and pilot prerequisites.
14. **Footer.** Product/module links, Solutions, Demo, Validation, About, Contact, Sign in, legal, and verified social/contact links only.

## 6. Synthetic demo data and screenshot specification

**Data model:** fictional program enrollment; consent; care-plan task; RPM report; staff contact; time log; billing-review status. Include fictional owner, event timestamp, status, source/document reference, reviewer, and next action where applicable. Use non-routable example identifiers. Avoid any actual patient/provider names, dates linked to real people, PHI, imported records, EHR/CRM/claims/prescription/government records, or real portal styling.

Seed **8–12 internally consistent fictional records** with chronological timestamps, fictional owners, source-document references, and a plausible mix of pending, blocked, completed, and rejected states. Include at least one honest edge case where the workflow cannot proceed; represent this as an abstention/held state, never as a clinical recommendation.

**Required three cases:**

1. **Clean handoff:** consent and task context are present, a fictional owner is assigned, review is attributed, and the next action/status is visible.
2. **Ambiguous exception:** a reported reading has source/time but context is insufficient; route for clinician review and keep it unresolved. No inference or automated clinical recommendation.
3. **Blocked/abstained:** missing consent/source/required context blocks progression; show why the record is held and who can review. Do not auto-resolve.

**Capture/storyboard requirements:** 16:9 desktop frame at 1440px and a separate 390px mobile capture; queue/list; opened record with evidence/source pane and reviewer action; timeline/detail view; and detail/report view. Persistent DEMO/SYNTHETIC DATA/CONCEPT PREVIEW watermark on every screen and illustrative watermark on any chart. Labels, timestamps, and counts must be internally consistent and readable at 100% zoom. Do not paste an AI-generated UI image as a product capture; capture the real browser prototype after implementation. This IA only specifies the capture; it does not claim one exists. The previously supplied website concept image is not an implementation or deployed-product screenshot.

## 7. Request, analytics, and ad pathways

### Pilot inquiry form

Collect only B2B contact/workflow-fit details: work role, organization type, work email, site/region, relevant workflow, and module interest. Include explicit instruction: **Do not submit patient names, identifiers, clinical details, or records.** No patient records or uploads. Form consent and privacy notice should be clear; provide a deletion-request path. Do not submit a form during planning or QA.

### Analytics plan (future only)

If later approved and implemented, track consent timestamp and notice version, source/UTM, CTA, qualified-lead status, and deletion request path. Do not deploy tracking in this planning assignment. Never build lookalike audiences from patient information. Do not mark analytics or lead qualification as successful without a real qualified buyer commitment.

### Ad test plan (future only)

Audience: population-health/care-management operators, clinical-operations leaders, and RCM decision-makers at primary-care networks, ACO enablement groups, RPM implementation partners, Medicare-focused provider groups, and risk-contract operators. Offer: a care-team handoff audit / workflow-learning conversation. Two copy angles to test with the same geography and spend cap:

- **A — exception framing:** “When a remote reading needs a person to look closer, can your team see who owns the next step?”
- **B — documentation framing:** “Map where consent, follow-up ownership, and staff-time evidence separate in your chronic-care workflow.”

Both variants must say concept DEMO and hypothetical price where price appears. No automatic billing, clinical efficacy, improved health outcomes, guaranteed savings, billing assurance, compliance claim, or individualized patient attributes. Log impressions, qualified visits, role-confirmed pilot requests, and drop-offs. Pause if a creative is misread as clinical guidance or an operating product. These are proposed test angles, not published ads.

## 8. Validation plan content and internal materials

### Discovery audiences and prompts

Run clinical-operations and RCM discovery separately, and interview clinical/compliance oversight owners as their own approval role.

- **Care manager / clinical operations:** “Walk me through the last follow-up or RPM alert that was delayed or hard to close. Where did it arrive, who owned it, what happened next, and what had to be copied elsewhere?” “What evidence makes a handoff complete?” “What adds nurse minutes or alert fatigue?”
- **Clinical approver / oversight owner:** “Which exception types require clinician review, by whom, and what makes an escalation safe to close?” “What source, context, uncertainty, and audit history must be visible?” “What must the workflow never decide or send?”
- **RCM / billing owner:** “Which records do you inspect before CCM or RPM billing review?” “Where do consent, time, duplicate effort, or missing documentation problems arise?” “What would this demo not prove about billability or coding?”
- **Population-health director / risk-bearing operator:** “Which current EHR, outsourced program, or RPM tool already handles parts of this?” “What workflow gap would justify adding another layer?” “Who owns budget, clinical approval, data rights, and escalation SLA?”
- **RPM implementation partner / ACO enablement group:** “Who owns device feed rights and alert routing?” “Where does the current implementation lose owner, status, or response evidence?”

### Metric, pilot gate, and kill rule

- **Primary metric:** percentage of required care-team follow-ups documented by the assigned owner within the locally defined SLA, compared with a stated baseline and denominator.
- **Guardrails:** nurse minutes; missed escalations; unbillable-time error. Also record duplicate handoffs, reviewer agreement, consent interpretation, and extra documentation burden where measured.
- **Pre-pilot readiness gate:** 8 clinical/RCM interviews; one governed cohort workflow replay; device-feed rights assessment; one jointly signed paid-pilot scope; signed data-access/security and human-oversight approvals. These are future decision gates, not achieved outcomes.
- **Stop or reposition if:** clinical staffing cannot meet the escalation SLA; device rights are unavailable; or validated staff time/net margin worsens.
- Do not infer clinical benefit, coding validity, billability, reimbursement, regulatory compliance, or ROI from synthetic records or workflow metrics alone.

### Internal tracking fields (not public site content)

Parent-managed Notion tracking proposal: `concept_number=28`; `working_title=Chronic Care Operations Agent`; `buyer_role`; `operator_role`; `sponsor`; `interview_date`; `incumbent`; `baseline_source`; `data_rights_status`; `safety/compliance_owner`; `offer_of_interest`; `hypothetical_test_price_response`; `demo_objection`; `retrospective_cohort_status`; `pilot_budget_owner`; `pilot_commitment`; `primary_metric`; `stop_rule`; `next_action`; `evidence_url`; `screenshot_verified_by_parent`. **Do not modify Notion as part of the website IA.**

## 9. Brief-to-page coverage checklist

| Brief requirement | Public location / treatment | Status or guardrail |
|---|---|---|
| US-first B2B concept and buyer | Home, Solutions, About | State concept stage; name primary buyer and joint clinical/billing approval. |
| Initial target: primary-care networks, ACO enablement, RPM implementation partners | `/solutions` and three use-case routes | Keep each target distinct; test clinical ops and RCM separately. |
| Problem: scattered enrollment, consent, plans, RPM exceptions, follow-up, time documentation | Home, Why workflow breaks, Platform | State as problem hypothesis; acknowledge incumbent workflows. |
| Exact five modules in source order | Home, `/modules`, five module detail routes | All visible and separate; all labeled proposed. |
| First product slice: one-condition task/consent timeline + RPM exception queue | Home, Platform, Demo, Pilot | Human review only; clarify one condition does not prove CCM/PCM qualification. |
| Synthetic hypertension month demo | `/demo/month-timeline` | Consent → report → nurse route/open exception → clinician sign-off → separate staff time/billing review. No diagnosis/dose output. |
| Three CRM cases: clean, ambiguous, blocked/abstained | `/demo` | Synthetic only, fake identifiers, provenance, owner, timestamps, uncertainty, reviewer decision. |
| Every screen marked demo/synthetic | `/demo` and all captures | Persistent watermark/badge. Never imply live EHR/CRM/device connection. |
| Human approval and traceability; unsent actions reversible | `/platform`, `/trust` content in Validation, Demo | Explicit reviewer identity/role; no external, clinical, payment, or physical action. |
| Five tentative module name ideas under Chronic Dock | Internal naming note | Keep as inherited internal ideas only; CarePlanLoop is the current working brand. Do not publish unapproved names. |
| Competitors/alternatives | Home, Why workflow breaks, Validation | Nurses/EHR care plans, outsourced CCM, HRS/RPM platforms; cite facts and avoid superiority claim. |
| Acquisition channels | Solutions, Pilot CTA | Primary-care networks, ACO enablement groups, Medicare-focused providers, risk-contract operators, RPM implementation partners. |
| Hypothetical price $1,200/team/month + $3,000 onboarding | `/pricing` | Prominently hypothetical test price, not an accepted offer; no checkout or reimbursement/ROI promise. |
| Demand-validation process | `/validation` and `/request-pilot` | Separate interviews, workflow audit, governed retrospective replay, rights/SLA, joint clinical/compliance approval. |
| Primary metric and guardrails | `/validation` | Baseline and denominator required; no performance claim before measurement. |
| Pilot readiness gate and stop rule | `/validation` | 8 interviews, replay, rights assessment, jointly signed scope, signed approvals; explicit stop conditions. |
| Limitations and unresolved risks | Home, Why workflow breaks, Validation | Staffing, alert fatigue, device coverage/rights, consent, duplicate billing, payer variation, outcome attribution, net margin. |
| Mission and vision | `/about` | Human-accountable workflow layer; start narrow and expand only after measurable operational value and permissions. |
| Product screenshot storyboard | Demo route and capture spec | Desktop/mobile dimensions and UI evidence specified above; actual capture occurs only after build. |
| Waitlist/analytics setup | `/request-pilot` and future analytics note | B2B opt-in only, no patient details; tracking not deployed in this IA assignment. |
| Ads and traffic tests | Internal future test spec | Two workflow-learning angles, same target/spend/geography; no clinical/billing claims. Not published now. |
| Product pages, product overview, use cases, about, contact, request-demo, sign-in | Sitemap routes above | Dedicated pages and complete buyer path; auth disclosure if disconnected. |
| Privacy, terms, security, integrations, customer proof | Legal routes / validation content | No fabricated trust claim, live integration, customer or result. Legal copy needs review against actual data practices. |
| Million-dollar expansion hypothesis | Internal strategy; not public claim | Revenue hypothesis only; no invented TAM, guaranteed savings, or valuation statement. |
| Domain/trademark and screenshots | Prelaunch checklist | Parent handles name/legal/domain checks and verifies actual screenshots; no purchase or trademark claim implied. |
| Notion fields | Internal tracking appendix | Parent-managed proposal only; no Notion changes. |

## 10. Open decisions for later stages

These do not block the IA. Resolve them before visual direction/build where they affect copy or functionality:

1. Confirm whether **CarePlanLoop** remains the working public name and run domain/trademark checks before launch.
2. Decide whether inherited module name ideas should be discarded or rewritten under CarePlanLoop.
3. Confirm whether the hypothetical test price should appear publicly or remain a sales-research-only hypothesis.
4. Provide the approved business contact destination and any real social/profile URLs before activating those links.
5. Before any real-patient replay, specify input contracts, reviewer role, evidence provenance, exception criteria, device rights, data-access/security approvals, and human-oversight SLA.
6. Decide whether the first inquiry form is front-end only or connected to an approved secure B2B lead destination; never request patient information.

## 11. Sources to support public factual copy

- [CMS Chronic Care Management booklet](https://www.cms.gov/files/document/chroniccaremanagement.pdf)
- [CMS Remote Patient Monitoring booklet](https://www.cms.gov/files/document/mln901705-telehealth-remote-monitoring.pdf)
- [CMS Advanced Primary Care Management overview](https://www.cms.gov/medicare/payment/fee-schedules/physician-fee-schedule/advanced-primary-care-management-services)
- [Study of CCM implementation in Wyoming primary-care practices](https://www.cambridge.org/core/journals/primary-health-care-research-and-development/article/factors-associated-with-high-vs-low-implementation-of-medicares-chronic-care-management-programme-in-wyoming-primary-care-practices/58A4D4C21C575D8FA6CCF3438C645829)
- [Epic population health](https://www.epic.com/software/population-health/)
- [athenahealth population health](https://www.athenahealth.com/solutions/value-based-care/population-health-management)
- [ThoroughCare CCM software](https://www.thoroughcare.net/chronic-care-management-software)
- [ChartSpan CCM](https://www.chartspan.com/chronic-care-management/)
- [Signallamp CCM outsourcing](https://www.signallamphealth.com/chronic-care-management-outsourcing-makes-sense/)
- [Health Recovery Solutions](https://www.healthrecoverysolutions.com/solutions)
- [Validic RPM](https://validic.com/features/remote-patient-monitoring-solution/)
- [W3C guidance on animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)

