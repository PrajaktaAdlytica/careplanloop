import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero, { ChapterIndex } from '../../components/PageHero';
import { solutions } from '../../data/solutions';
import Icon from '../../components/Icon';

export function generateStaticParams() {
  return solutions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  return solution ? { title: solution.title + ' workflow discovery' } : {};
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  return <main id="main-content">
    <PageHero eyebrow="Validation audience / workflow hypothesis" title={<>{solution.title}</>} description={solution.summary} aside={<><strong>Roles to include</strong>{solution.audience}<br /><br />Clinical-operations and RCM discovery are separate; a pilot needs joint review and approval.</>} action={{ href: '/request-pilot', label: 'Discuss this workflow' }} />
    <section className="content-section content-section-paper"><div className="wrap content-grid"><ChapterIndex number="01" label="Discovery question" /><div className="content-body" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Start with today's workflow</p><h2 className="section-title">{solution.prompt}</h2><div className="detail-visual"><div className="detail-visual-title"><b>Possible discovery path</b><span>To validate with the operating team</span></div><div className="detail-lines"><div className="detail-line"><span className="line-num">01</span><b>Map current system and people</b><span>Care managers · EHR · CCM/RPM provider</span></div><div className="detail-line"><span className="line-num">02</span><b>Identify one handoff to examine</b><span>Source · owner · next action</span></div><div className="detail-line"><span className="line-num">03</span><b>Agree on safe review boundaries</b><span>Clinical role · SLA · data rights</span></div><div className="detail-line"><span className="line-num">04</span><b>Set baseline and stop conditions</b><span>Follow-through · staffing · escalations</span></div></div></div></div></div></section>
    <section className="content-section content-section-sage"><div className="wrap content-grid"><ChapterIndex number="02" label="Constraints" /><div className="content-body" data-reveal><h2 className="section-title">Questions that must be resolved first.</h2><div className="listing-rows">{solution.constraints.map((constraint,index)=><article className="listing-row" key={constraint}><span>0{index+1}</span><div><b>{constraint}</b><p>Discovery item · no current capability claim</p></div><span className="listing-status">Open question</span><Icon name="info" /></article>)}</div><Link className="text-link" href="/solutions">Back to validation audiences <Icon name="arrow-left" /></Link></div></div></section>
  </main>;
}
