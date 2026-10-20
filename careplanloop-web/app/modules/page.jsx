import PageHero, { ChapterIndex } from '../components/PageHero';
import { modules } from '../data/modules';
import Icon from '../components/Icon';
import Link from 'next/link';

export const metadata = { title: 'Proposed modules' };

export default function ModulesPage() {
  return <main id="main-content">
    <PageHero eyebrow="Five proposed modules" title={<>A workflow system, tested one module at a time.</>} description="These five offers remain separate directions to validate. The first pilot concept is a one-condition task/consent timeline and RPM exception queue, with no independent clinical triage." aside={<><strong>Research-stage status</strong> These are not live product plans, subscription tiers, or available services. Each requires workflow, clinical, billing, and data-rights review.</>} action={{ href: '/demo', label: 'View synthetic demo' }} />
    <section className="content-section content-section-paper"><div className="wrap content-grid"><ChapterIndex number="01" label="Module index" /><div className="content-body content-body-wide" data-reveal><div className="listing-rows">{modules.map((item) => <Link className="listing-row" href={'/modules/' + item.slug} key={item.slug}><span>{item.number}</span><div><b>{item.name}</b><p>{item.short}</p></div><span className="listing-status">{item.stage}</span><Icon name="arrow-up-right" /></Link>)}</div></div></div></section>
    <section className="content-section content-section-sage"><div className="wrap content-grid"><ChapterIndex number="02" label="First slice" /><div className="content-body" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />One condition · human review only</p><h2 className="section-title">Start with a consent/task timeline and exception queue.</h2><p className="section-copy">The first demo focuses on visible provenance, a reviewer queue, uncertainty/abstention, and manual approval. It excludes live integrations, outbound messages, patient contact, writes to clinical or administrative systems, automated determinations, and PHI.</p><div className="proof-strip"><article><small>INCLUDE</small><b>Source and owner</b><p>Fictional event, timestamp, role, and review state.</p></article><article><small>REQUIRE</small><b>Manual approval</b><p>Clinician sign-off stays human and explicitly attributed.</p></article><article><small>EXCLUDE</small><b>Clinical outputs</b><p>No diagnosis, treatment, or dose recommendation.</p></article></div></div></div></section>
  </main>;
}
