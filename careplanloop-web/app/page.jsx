import Link from 'next/link';
import Icon from './components/Icon';
import CaseExplorer from './components/CaseExplorer';
import { ChapterIndex } from './components/PageHero';
import Faq from './components/Faq';
import ThreadIntro from './components/intro/ThreadIntro';
import ModuleWorkbench from './components/visuals/ModuleWorkbench';
import { TwoLanes, SystemMap } from './components/visuals/StoryIllustrations';
import { solutions } from './data/solutions';

export default function HomePage() {
  return (
    <main id="main-content" className="home-atlas">
      <ThreadIntro />

      <aside className="funding-announcement" aria-label="Funding announcement"><div className="wrap"><span>FUNDING ANNOUNCEMENT</span><p>CarePlanLoop has received venture capital funding. The investor name and funding amount will be announced later.</p></div></aside>

      <nav className="story-directory" aria-label="Homepage story chapters"><div className="wrap"><span>FOLLOW THE HANDOFF</span><a href="#workflow-gap"><i>01</i> Understand the gap</a><a href="#month-in-view"><i>02</i> Follow a record</a><a href="#modules"><i>03</i> Explore the modules</a><a href="#pilot"><i>04</i> Shape a pilot <Icon name="arrow-down" /></a></div></nav>

      <section className="chapter chapter-paper gap-chapter" id="workflow-gap">
        <div className="wrap gap-grid"><ChapterIndex number="02" label="The gap" />
          <div className="gap-copy" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />The work is distributed</p><h2>Enrollment, plans, reports, and follow-up live in different places.</h2><p className="body-large">The hypothesis: care teams need a clearer view of what happened, who owns the next step, and what remains unresolved.</p><p className="body-muted">Teams already use nurses, EHR care plans, outsourced CCM services, and RPM platforms. Those tools address parts of the workflow; the handoff between them is what we want to understand.</p></div>
          <div className="fragment-board" data-reveal aria-label="Separate workflow events on a shared time ruler"><div className="fragment-caption"><span>Current workflow hypothesis</span><span>Illustrative, not measured</span></div><div className="fragment-time"><span>ENROLL</span><span>REPORT</span><span>FOLLOW UP</span><span>RECONCILE</span></div><div className="fragment-row"><span className="fragment-label">Consent</span><span className="fragment-pill pill-paper">record in one place</span><span className="fragment-gap" /><span className="fragment-end">status unclear</span></div><div className="fragment-row"><span className="fragment-label">Care plan</span><span className="fragment-gap" /><span className="fragment-pill pill-green">task assigned</span><span className="fragment-gap" /></div><div className="fragment-row"><span className="fragment-label">RPM report</span><span className="fragment-gap" /><span className="fragment-pill pill-clay">exception arrives</span><span className="fragment-end">owner to confirm</span></div><div className="fragment-row"><span className="fragment-label">Staff time</span><span className="fragment-gap" /><span className="fragment-gap" /><span className="fragment-pill pill-paper">billing review</span></div><div className="fragment-note"><Icon name="info" /><span>Problem hypothesis to validate separately with clinical-ops and RCM teams.</span></div></div>
        </div>
      </section>

      <section className="chapter chapter-sage timeline-chapter" id="month-in-view" data-scroll-chapter><div className="wrap"><ChapterIndex number="03" label="A synthetic month" />
        <div className="timeline-heading" data-reveal><div><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Follow the work, not a diagnosis</p><h2>One month. Every event has a source.</h2></div><p className="body-muted">Illustrative hypertension program timeline. Example records are fictional, with no live device or EHR connection.</p></div>
        <div className="story-sequence" data-scroll-story>
          <aside className="story-stage" data-story-stage data-active-step="0" aria-label="Synthetic event timeline that advances as you scroll">
            <div className="story-stage-head"><div><span className="demo-label"><i /> Concept preview · synthetic data</span><strong>Sample record · SYN-028-A</strong></div><span className="story-stage-counter" data-story-counter>EVENT 01 / 04</span></div>
            <div className="story-stage-progress" aria-hidden="true"><span data-story-progress /></div>
            <ol className="story-event-list">
              <li className="story-event is-current" data-story-event="0"><span className="story-event-date">02 MAY · 09:10</span><span className="story-event-dot"><Icon name="consent" /></span><div><b>Consent event</b><small>Enrollment record · synthetic</small></div><em>Recorded</em></li>
              <li className="story-event" data-story-event="1"><span className="story-event-date">14 MAY · 08:42</span><span className="story-event-dot"><Icon name="report" /></span><div><b>Report received</b><small>Device source · not interpreted</small></div><em>Received</em></li>
              <li className="story-event" data-story-event="2"><span className="story-event-date">14 MAY · 08:43</span><span className="story-event-dot"><Icon name="exception" /></span><div><b>Routed for review</b><small>Owner: nurse role · pending</small></div><em>Pending</em></li>
              <li className="story-event" data-story-event="3"><span className="story-event-date">14 MAY · 09:05</span><span className="story-event-dot"><Icon name="reviewer" /></span><div><b>Clinician sign-off</b><small>Fictional role · example only</small></div><em>Example</em></li>
            </ol>
            <div className="story-stage-lane"><span><i className="lane-key lane-key-events" /> Care-team events</span><span>Separate lane: staff contact + time</span><b>Billing review</b></div>
            <p className="story-stage-note"><Icon name="pause" /> A reported value is not a clinical decision or billing determination.</p>
          </aside>
          <div className="story-steps">
            <article className="story-step is-current" data-story-step="0"><p className="story-step-kicker"><span>01</span> 02 MAY · 09:10</p><h3>Start with consent.</h3><p>A fictional enrollment event opens the month. The source and timestamp stay attached to the record.</p><span className="story-step-state">Enrollment record · synthetic</span></article>
            <article className="story-step" data-story-step="1"><p className="story-step-kicker"><span>02</span> 14 MAY · 08:42</p><h3>A report arrives.</h3><p>A device report is received and preserved as reported data. The system does not interpret the reading.</p><span className="story-step-state">Device report · not interpreted</span></article>
            <article className="story-step" data-story-step="2"><p className="story-step-kicker"><span>03</span> 14 MAY · 08:43</p><h3>The handoff pauses for review.</h3><p>An exception is routed to a nurse role. Ownership is visible; the review remains pending until a person acts.</p><span className="story-step-state">Nurse role · pending review</span></article>
            <article className="story-step" data-story-step="3"><p className="story-step-kicker"><span>04</span> 14 MAY · 09:05</p><h3>Sign-off stays human.</h3><p>A fictional clinician sign-off closes this example handoff. Staff contact and time remain in a separate billing-review lane.</p><span className="story-step-state">Fictional role · example only</span></article>
          </div>
        </div>
      </div></section>

      <section className="chapter chapter-dark evidence-chapter"><div className="wrap evidence-grid"><ChapterIndex number="04" label="The evidence" />
        <div className="evidence-copy" data-reveal><p className="eyebrow"><span className="eyebrow-line" />Received is not reviewed</p><h2>A reported reading stays a report until a person reviews it.</h2><p className="body-light">The concept can show an exception and route it to a named role. It does not interpret a value, make a diagnosis, or recommend treatment.</p><Link className="text-link text-link-light" href="/demo">Open all three synthetic cases <Icon name="arrow-up-right" /></Link></div>
        <div className="evidence-pane" data-reveal><div className="pane-top"><span>Evidence view</span><span className="pane-state"><i /> Awaiting clinical review</span></div><div className="evidence-source"><span className="source-icon"><Icon name="document" /></span><div><small>SOURCE / SYNTHETIC DEVICE REPORT</small><b>Home report received</b><span>14 May · 08:42 local · sample record SYN-028-A</span></div></div><div className="route-to-review"><span className="route-vertical" /><span className="review-pin"><Icon name="reviewer" /></span><div><small>ASSIGNED REVIEWER</small><b>Nurse role · fictional</b><span>Next action: human review</span></div><em>Pending</em></div><div className="pane-foot"><Icon name="pause" /><span>Route pauses here. No automatic clinical decision.</span></div></div>
      </div></section>

      <section className="chapter chapter-paper separation-chapter"><div className="wrap separation-grid"><div data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line"/>A distinction worth keeping</p><h2>One timeline.<br/><em>Two different responsibilities.</em></h2><p className="body-large">A reported reading, a staff action, and a billing decision each need their own evidence.</p><p className="body-muted">Keep care-team events in view while billing staff review contact and time documentation separately. CCM and RPM have distinct service requirements.</p><Link className="text-link" href="/modules/contact-time-reconciliation">Explore the documentation module <Icon name="arrow-up-right"/></Link></div><TwoLanes/></div></section>

      <section className="chapter chapter-paper demo-chapter" id="demo"><div className="wrap"><ChapterIndex number="05" label="Interactive demo" />
        <div className="demo-intro" data-reveal><div><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Concept demo · synthetic data</p><h2>Three cases. Three honest states.</h2></div><p className="body-muted">Switch cases to see how evidence, ownership, and uncertainty change. The records are illustrative and do not represent actual patients, providers, devices, or care.</p></div>
        <div data-reveal><CaseExplorer compact /></div>
        <div className="demo-actions" data-reveal><Link className="button button-green" href="/demo">View the full synthetic demo <Icon name="arrow-right" /></Link><span>Keyboard and touch accessible. No real-world actions are connected.</span></div>
      </div></section>

      <section className="chapter chapter-reed modules-chapter" id="modules"><div className="wrap"><ChapterIndex number="06" label="Proposed modules" />
        <div className="modules-heading" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Five separate workflow tests</p><h2>Support the handoff at each stage.</h2><p className="body-muted">Each is a proposed direction, not a live plan. The first slice pairs a one-condition consent/task timeline with an RPM exception queue and human review.</p></div>
        <ModuleWorkbench />
        <p className="modules-detail-link" data-reveal><Link href="/modules">See all module boundaries and review questions <Icon name="arrow-right" /></Link></p>
      </div></section>

      <section className="chapter chapter-paper targets-chapter"><div className="wrap fit-grid"><ChapterIndex number="07" label="Who should validate" />
        <div className="fit-copy" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Start with the operators</p><h2>One workflow question, asked from each seat.</h2><p className="body-large">Clinical operations and revenue-cycle discovery should happen separately, with both owners involved before a pilot.</p><p className="body-muted">First validation targets are primary-care networks, ACO enablement groups, and RPM implementation partners. Medicare-focused provider groups and risk-contract operators are additional channels to explore.</p></div>
        <div className="persona-rail" data-reveal>{solutions.map((item, i) => <article key={item.slug}><small>0{i + 1} / VALIDATION CHANNEL</small><h3>{item.title}</h3><p>{item.prompt}</p><Link className="mini-link" href={'/solutions/' + item.slug}>Explore this workflow <Icon name="arrow-up-right" /></Link></article>)}</div>
      </div></section>

      <section className="chapter chapter-reed ecosystem-chapter"><div className="wrap"><div className="ecosystem-intro" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line"/>Respect the work already happening</p><h2>There are already people<br/><em>in this loop.</em></h2><p className="body-muted">Nurses, EHR care plans, outsourced CCM services, and RPM platforms already support parts of care. Discovery starts with their workflow and the handoffs between them.</p><Link href="/why-care-work-breaks" className="text-link">Understand the workflow hypothesis <Icon name="arrow-up-right"/></Link></div><SystemMap/></div></section>

      <section className="chapter chapter-sage validation-chapter" id="validation"><div className="wrap validation-grid"><ChapterIndex number="08" label="Validate before claiming" />
        <div className="validation-copy" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Measure the workflow before making a claim</p><h2>More visible follow-through—without adding burden.</h2><p className="body-muted">The question is whether the concept improves operational visibility while preserving staff capacity and escalation safety. That remains untested.</p></div>
        <div className="metric-sheet" data-reveal><div className="metric-head"><span>PRIMARY MEASURE</span><span>TO BE MEASURED</span></div><div className="metric-main"><span className="metric-symbol">%</span><div><b>Required follow-ups documented by assigned owner within local SLA</b><span>Compared with a stated baseline and denominator.</span></div></div><div className="metric-guards"><span>GUARDRAILS</span><div><i>Nurse minutes</i><i>Missed escalations</i><i>Unbillable-time error</i></div></div><div className="metric-foot">No success value is shown before a governed workflow replay.</div></div>
        <aside className="validation-note" data-reveal><Icon name="info" /><p><b>Research-stage concept.</b> Synthetic records do not establish clinical benefit, coding validity, billability, reimbursement, ROI, or regulatory compliance.</p></aside>
      </div></section>

      <section className="chapter chapter-dark pilot-chapter" id="pilot"><div className="wrap pilot-grid"><ChapterIndex number="09" label="The pilot gate" />
        <div className="pilot-copy" data-reveal><p className="eyebrow"><span className="eyebrow-line" />Start with one workflow</p><h2>Agree on owners, access, and a stop rule.</h2><p className="body-light">A governed pilot should begin only after clinical and billing owners review scope, data rights, staffing, and escalation expectations together.</p><div className="price-test"><span>HYPOTHETICAL TEST PRICE</span><b>$1,200 / care team / month <i>+</i> $3,000 onboarding</b><small>Test hypothesis only. Not a current offer or accepted market price.</small></div><Link className="button button-light" href="/request-pilot">Discuss a scoped pilot <Icon name="arrow-up-right" /></Link></div>
        <div className="pilot-gates" data-reveal><div className="gate-heading"><span>READINESS SEQUENCE</span><span>Required before a pilot</span></div><ol><li><span>01</span><b>8 clinical / RCM interviews</b><i>Not yet completed</i></li><li><span>02</span><b>One retrospective replay on a governed, consented cohort</b><i>Not yet completed</i></li><li><span>03</span><b>Device-feed rights assessment</b><i>Not yet confirmed</i></li><li><span>04</span><b>Jointly signed paid-pilot scope</b><i>Not yet agreed</i></li><li><span>05</span><b>Data-access and human-oversight approvals</b><i>Required</i></li></ol><div className="stop-rule"><span className="stop-rule-mark">!</span><p><b>Stop or reposition if</b> staffing cannot meet escalation SLA, device rights are unavailable, or validated staff time / net margin worsens.</p></div></div>
      </div></section>

      <section className="chapter chapter-paper faq-chapter"><div className="wrap content-grid"><ChapterIndex number="10" label="Clear boundaries" /><div className="content-body" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />What this concept does—and does not do</p><h2 className="section-title">The handoff is operational. Clinical judgment stays human.</h2><p className="section-copy">CCM and RPM are distinct services. A device reading, automated touch, staff action, clinician review, and billing decision are not interchangeable events. The organization must verify qualified services, permissions, requirements, and staffing.</p><Faq /><p className="sources-inline">Source reading: <a href="https://www.cms.gov/files/document/chroniccaremanagement.pdf" target="_blank" rel="noreferrer">CMS Chronic Care Management Services booklet</a> · <a href="https://www.cms.gov/medicare/coverage/telehealth/remote-patient-monitoring" target="_blank" rel="noreferrer">CMS Remote Patient Monitoring overview</a>.</p></div></div></section>

      <section className="story-band"><div className="wrap story-band-inner"><h2>Where does your handoff lose its owner?</h2><p>Bring the current workflow, the clinical reviewer, and the billing owner to a scoped discovery conversation.</p><Link className="button button-light" href="/request-pilot">Start a workflow conversation <Icon name="arrow-up-right" /></Link></div></section>
    </main>
  );
}
