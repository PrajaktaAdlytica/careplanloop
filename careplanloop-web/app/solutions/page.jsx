import Link from 'next/link';
import PageHero, { ChapterIndex } from '../components/PageHero';
import Icon from '../components/Icon';
import { solutions } from '../data/solutions';

export const metadata = { title: 'Solutions and validation audiences' };

export default function SolutionsPage() {
  return <main id="main-content">
    <PageHero eyebrow="Solutions / first validation channels" title={<>Three operating contexts. One handoff question.</>} description="CarePlanLoop is a US-first B2B concept. Start with primary-care networks, ACO enablement groups, and RPM implementation partners; test clinical-operations and RCM discovery separately." aside={<><strong>Additional channels to explore</strong> Medicare-focused provider groups and risk-contract operators. No customer demand or willingness-to-pay has been demonstrated.</>} action={{ href: '/request-pilot', label: 'Discuss a workflow' }} />
    <section className="content-section content-section-paper"><div className="wrap content-grid"><ChapterIndex number="01" label="Validation channels" /><div className="content-body content-body-wide" data-reveal><div className="listing-rows">{solutions.map((item,index)=><Link className="listing-row" href={'/solutions/'+item.slug} key={item.slug}><span>0{index+1}</span><div><b>{item.title}</b><p>{item.summary}</p></div><span className="listing-status">Workflow hypothesis</span><Icon name="arrow-up-right" /></Link>)}</div></div></div></section>
    <section className="content-section content-section-sage"><div className="wrap content-grid"><ChapterIndex number="02" label="Separate discovery" /><div className="content-body" data-reveal><h2 className="section-title">Ask the clinical-operations and billing owners different questions.</h2><div className="persona-rail"><article><small>CLINICAL OPERATIONS</small><h3>Workload and escalation safety</h3><p>Who reviews which exception, what response can staffing support, and where can alert fatigue show up?</p></article><article><small>REVENUE CYCLE</small><h3>Documentation and reconciliation</h3><p>Which consent, service, contact, and time evidence do billing owners inspect? What would the demo not prove?</p></article><article><small>JOINT APPROVAL</small><h3>Scope and accountable owners</h3><p>Who controls data/device rights, escalation SLA, security review, budget, and a signed pilot scope?</p></article></div><p className="section-copy">Acquisition channels include primary-care networks, ACO enablement groups, Medicare-focused provider groups, risk-contract operators, and RPM implementation partners. These are hypotheses to test, not proven channels.</p></div></div></section>
  </main>;
}
