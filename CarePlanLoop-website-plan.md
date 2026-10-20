# CarePlanLoop — website plan

**Status:** Research and narrative plan, 20 October 2026  
**Brand status:** CarePlanLoop is a working name; name, trademark, and domain are unverified.  
**Product status:** Early concept. No operating product, customers, integrations, clinical outcomes, or validated pricing have been established.

## 1. Research takeaways

- **Start with the handoff problem.** Care coordination work spans enrollment and consent, a clinician-approved plan, follow-up tasks, incoming RPM reports, exceptions, human review, and billing documentation. The research surfaced staffing, EHR integration, communication, and feedback as barriers in a small primary-care implementation study. Treat those as interview hypotheses, not universal facts.
- **The initial story should be narrower than the eventual offer set.** Lead with a synthetic, one-condition care-team timeline and RPM exception queue. Preserve all five modules as separate product directions, but do not present them as mature or available plans.
- **Make the boundary between workflow and reimbursement visible.** CMS CCM eligibility requires at least two qualifying chronic conditions and defined service elements. RPM is a distinct service. A reading, alert, automated touch, timer, task, or consent marker is not automatically billable. A one-condition workflow slice does not establish CCM or PCM eligibility. Avoid billing, compliance, clinical outcome, or savings promises.
- **The category already has alternatives.** EHR population-health tools, care-management vendors such as ThoroughCare, outsourced CCM providers such as ChartSpan and Signallamp, and RPM platforms including Health Recovery Solutions all overlap with parts of the workflow. Discovery must ask what remains difficult in the buyer’s current tools and whether the gap is software, staffing, process, or data access.
- **Pilot gate:** validate through separate clinical-operations and RCM interviews; then run a bounded synthetic workflow evaluation. Any real-patient replay or pilot needs explicit data rights, security and contracting review, clinical oversight, device-feed rights, and an agreed escalation SLA.

## 2. Reference interaction study

These sites inform scroll pacing only. Their visual identities, illustrations, copy, and interface layouts are not design references for CarePlanLoop.

- **[Lux Capital](https://www.luxcapital.com/):** the live page moves from its “sci-fi into sci-fact” thesis to portfolio examples and then to Riskgaming/contact routes. The useful pattern is **claim → specific example → deeper route**. I did not verify a pinned or scroll-scrubbed sequence.
- **[Blackbird](https://www.blackbird.vc/):** the live homepage makes its proposition prominent and surrounds it with independently accessible stories and navigation paths. Adapt optional depth: clinical operations, clinical oversight, and RCM visitors should be able to choose what matters to them without being forced through a long animation.
- **[Klimori](https://www.klimori.com/):** the current page introduces an operating model, brings separate conditions into one picture, then follows a daily operating trace through an exception, a proposed adjustment, evidence, and access. The intro has a visible skip control. Exact pinning/scroll-scrub mechanics and reduced-motion/mobile behavior were not established, so do not assume them.

**CarePlanLoop adaptation:** separate signals → shared care context → unresolved handoff → named human reviewer → recorded decision → billing evidence kept distinct. Native scrolling stays in control. Every chapter remains understandable without motion, and the intro can be skipped.

## 3. Proposed homepage story

**Working narrative:** *A care plan is only useful when the next action has an owner.* The story shows how a care team keeps work visible across a month, while making clear that software organizes evidence and handoffs; clinicians retain clinical judgment and billing staff determine documentation readiness.

1. **Opening — One patient month, made legible.** A quiet, precise timeline begins with a fictional program enrollment and consent event. A short promise explains that CarePlanLoop is a concept for coordinating chronic-care work. Primary CTA: **Explore the workflow**. Secondary CTA: **Discuss a scoped pilot**. Persistent “Concept preview · synthetic data” label.
2. **The work is distributed.** The timeline separates consent, plan tasks, reported readings, staff contact, clinician review, and billing review into distinct events. Scrolling reveals where ownership or evidence is missing; it does not imply a clinical conclusion.
3. **A report arrives; an exception remains open.** A synthetic outlier appears with source and timestamp. It is routed to a fictional nurse role and stays unresolved until a human review is recorded. The visual shows provenance, owner, due point, and abstention state.
4. **Review is the decision point.** Show a clinician’s attributed sign-off as a separate event. No diagnosis, dose change, automated triage conclusion, or external action appears.
5. **Operational evidence stays separate.** A second track shows staff contact and time documentation for billing review. Labels distinguish “work recorded” from “billing determination.” Do not use invented savings or reimbursement totals.
6. **Five proposed modules, one first test.** Use five differently composed editorial sections/diagram callouts rather than a repeated icon-card grid: enrollment/consent review; clinician-approved care-plan tracker; RPM exception routing; contact/time reconciliation; longitudinal gap/escalation analytics. Label each “proposed module.” Mark the one-condition timeline and exception queue as the first concept to validate.
7. **Fit and limits.** Explain what the concept may organize, what existing EHR/RPM/outsourced workflows might already cover, and the open questions: staffing, device rights, incumbent overlap, consent, alert burden, and net margin.
8. **A bounded next step.** Invite clinical-operations, population-health, and RCM owners to request a scoped workflow conversation. State what they should bring and that no patient information should be submitted.

## 4. Motion and visual system principles

- **Persistent object:** a month-long care timeline that gains tracks and annotations as the story advances. Each scroll chapter changes one meaningful state; no decorative dashboard numbers.
- **Motion grammar:** events enter in chronological order; evidence lines connect source to handoff; unresolved items remain visibly open; human review uses a distinct, attributed mark; billing evidence appears on its own lane.
- **Section variety:** wide timeline, narrow editorial interlude, focused exception review, and an evidence ledger. Use typography, rules, annotation, and whitespace to create hierarchy instead of five interchangeable cards.
- **Accessibility:** keep native scroll; provide a skip link/control; support keyboard/focus; preserve a complete still version with `prefers-reduced-motion`; motion must never hide essential copy or delay access to the demo/CTA. Mobile uses stacked chapters and a compact timeline, not forced horizontal dragging.
- **Brand foundation still to decide:** logo/wordmark, favicon, palette, type pairing, icon and illustration rules, and motion object. The working name stays provisional until checked.

## 5. Initial information architecture

- **Home:** complete story and primary pilot CTA.
- **Platform:** concept scope, workflow, provenance, roles, and human-review boundaries.
- **Modules:** five proposed offers, with clear status and separate jobs.
- **Use cases:** primary-care networks, ACO enablement groups, and RPM implementation partners; clinical-operations and RCM perspectives.
- **Pilot:** scope, hypothetical test price only if retained and clearly labeled, prerequisites, metric, and stop conditions.
- **Trust & governance:** synthetic-data demo rules, permissions, human oversight, and current limitations; no unsupported certifications or compliance claims.
- **About / Contact:** provisional company story and low-friction business contact.
- **Request a scoped pilot:** role, organization type, work email, workflow-fit question, notice/consent. No patient details or uploads.
- **Sign in:** polished concept-preview screen only if needed; disclose that authentication is not connected.
- **Privacy and Terms:** include only once reviewed for the actual form/data practices.

## 6. Validation and claim guardrails

**Interview separately:** care manager/clinical operations, clinical approver, and RCM/billing owner. Ask each to reconstruct the last missed follow-up or RPM alert; identify the source, owner, next step, unresolved handoff, and what had to be copied into another system. Ask what current tools already do and what evidence is needed before closing work.

**First metric:** percentage of required follow-ups documented by the assigned owner within the locally defined SLA versus a stated baseline. Guardrails: nurse minutes, missed escalations, duplicate handoffs, consent-status interpretation, and unbillable-time error. Do not claim this metric has improved until measured with an agreed denominator and baseline.

**Stop conditions:** stop or reposition if staffing cannot meet the escalation SLA, device/data rights are unavailable, or validated staff time/net margin worsens. Do not infer clinical benefit, billability, coding validity, or compliance from a synthetic demo.

## 7. Sources

- [CMS Chronic Care Management booklet](https://www.cms.gov/files/document/chroniccaremanagement.pdf)
- [CMS Remote Patient Monitoring booklet](https://www.cms.gov/files/document/mln901705-telehealth-remote-monitoring.pdf)
- [CMS Advanced Primary Care Management overview](https://www.cms.gov/medicare/payment/fee-schedules/physician-fee-schedule/advanced-primary-care-management-services)
- [Primary-care CCM implementation study](https://www.cambridge.org/core/journals/primary-health-care-research-and-development/article/factors-associated-with-high-vs-low-implementation-of-medicares-chronic-care-management-programme-in-wyoming-primary-care-practices/58A4D4C21C575D8FA6CCF3438C645829)
- [Epic population health](https://www.epic.com/software/population-health/)
- [athenahealth population health](https://www.athenahealth.com/solutions/value-based-care/population-health-management)
- [ThoroughCare CCM software](https://www.thoroughcare.net/chronic-care-management-software)
- [ChartSpan CCM](https://www.chartspan.com/chronic-care-management/)
- [Signallamp CCM outsourcing](https://www.signallamphealth.com/chronic-care-management-outsourcing-makes-sense/)
- [Health Recovery Solutions](https://www.healthrecoverysolutions.com/solutions)
- [Validic RPM](https://validic.com/features/remote-patient-monitoring-solution/)
- [W3C guidance on animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
