import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero, { ChapterIndex } from '../../components/PageHero';
import Icon from '../../components/Icon';
import { modules } from '../../data/modules';

export function generateStaticParams() {
  return modules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const module = modules.find((item) => item.slug === slug);
  return module ? { title: module.name } : {};
}

export default async function ModuleDetailPage({ params }) {
  const { slug } = await params;
  const module = modules.find((item) => item.slug === slug);
  if (!module) notFound();
  return <main id="main-content">
    <PageHero eyebrow={'Proposed module / ' + module.number} title={<>{module.name}</>} description={module.short} aside={<><strong>{module.stage}</strong>{module.audience}<br /><br />This is a concept direction only; workflow permission, ownership, and constraints need validation.</>} action={{ href: '/request-pilot', label: 'Discuss this workflow' }} />
    <section className="content-section content-section-paper"><div className="wrap content-grid"><ChapterIndex number="01" label="Workflow hypothesis" /><div className="content-body" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Problem to examine</p><h2 className="section-title">A clearer record of where work waits.</h2><p className="section-lede">{module.problem}</p><div className="detail-visual"><div className="detail-visual-title"><b>Illustrative workflow stages</b><span>Human-owned · synthetic preview only</span></div><div className="detail-lines">{module.workflow.map((step, index) => <div className="detail-line" key={step}><span className="line-num">0{index + 1}</span><b>{step}</b><span>Source and reviewer state remain visible</span></div>)}</div></div></div></div></section>
    <section className="content-section content-section-sage"><div className="wrap content-grid"><ChapterIndex number="02" label="Boundary" /><div className="content-body" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />What this concept does not do</p><h2 className="section-title">Human judgment stays with the authorized owner.</h2><p className="section-lede">{module.boundary}</p><div className="validation-note"><Icon name="info" /><p>Concept screen only. No live integration, patient data, clinical advice, or billing assurance is represented.</p></div></div></div></section>
    <section className="content-section content-section-paper"><div className="wrap content-grid"><ChapterIndex number="03" label="Discovery prompts" /><div className="content-body" data-reveal><h2 className="section-title">Questions for the workflow owner.</h2><div className="listing-rows">{module.questions.map((question,index)=><article className="listing-row" key={question}><span>0{index+1}</span><div><b>{question}</b><p>Discuss with the relevant clinical-operations and billing owners.</p></div><span className="listing-status">To validate</span><Icon name="info" /></article>)}</div><Link className="text-link" href="/modules">Back to all modules <Icon name="arrow-left" /></Link></div></div></section>
  </main>;
}
