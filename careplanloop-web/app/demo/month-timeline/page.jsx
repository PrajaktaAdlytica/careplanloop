import PageHero, { ChapterIndex } from '../../components/PageHero';
import CaseExplorer from '../../components/CaseExplorer';
import Link from 'next/link';
import Icon from '../../components/Icon';

export const metadata = { title: 'Synthetic month timeline' };

export default function MonthTimelinePage() {
  return <main id="main-content"><PageHero eyebrow="Synthetic scenario / month timeline" title={<>A month of events, with each role and source kept distinct.</>} description="This fictional hypertension workflow shows consent, a reported event, a nurse review route, clinician sign-off, and staff-time evidence on a separate billing-review lane." aside={<><strong>DEMO — SYNTHETIC DATA</strong>Fictional identifiers, names, dates, and roles only. No patient, provider, device, claims, or portal records are present.</>} />
    <section className="content-section content-section-paper"><div className="wrap content-grid"><ChapterIndex number="01" label="Month timeline" /><div className="content-body content-body-wide" data-reveal><CaseExplorer /></div></div></section>
    <section className="content-section content-section-sage"><div className="wrap content-grid"><ChapterIndex number="02" label="Event distinctions" /><div className="content-body" data-reveal><h2 className="section-title">A record is not the decision that follows it.</h2><div className="listing-rows">{[['Consent event','A separate record with source and timestamp.'],['Reported reading','Device-reported data only; not interpreted by the demo.'],['Staff action','Contact and time evidence entered by a fictional role.'],['Clinician sign-off','A human review event; no treatment or dose output.'],['Billing review','A separate organization decision; not established by any automated touch.']].map(([name,desc],i)=><article className="listing-row" key={name}><span>0{i+1}</span><div><b>{name}</b><p>{desc}</p></div><span className="listing-status">Separate event</span><Icon name="info" /></article>)}</div><Link className="text-link" href="/demo">Back to all demo cases <Icon name="arrow-left" /></Link></div></div></section>
  </main>;
}
