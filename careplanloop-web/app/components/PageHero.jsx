import Icon from './Icon';
import { PageRouteArt } from './visuals/StoryIllustrations';
import HeroScene from './visuals/HeroScene';

export function ChapterIndex({ number, label }) {
  return <div className="chapter-index"><span>{number}</span><i /><span>{label}</span></div>;
}

export default function PageHero({ eyebrow, title, description, aside, tone = 'dark', action }) {
  return (
    <section className={'page-hero page-hero-' + tone}>
      <PageRouteArt />
      <div className="wrap page-hero-grid">
        <div className="page-hero-copy" data-reveal>
          <p className={'eyebrow' + (tone === 'light' ? ' eyebrow-ink' : '')}><span className="hero-eyebrow-icon"><Icon name="document" /></span>{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-description">{description}</p>
          {action ? <div className="hero-actions"><a className={tone === 'dark' ? 'button button-light' : 'button button-green'} href={action.href}>{action.label}<Icon name="arrow-up-right" /></a></div> : null}
        </div>
        <div className="page-hero-visual"><HeroScene />{aside ? <aside className="page-hero-aside" data-reveal><Icon name="info" /><div>{aside}</div></aside> : null}</div>
      </div>
      <div className="wrap page-hero-baseline"><span>CAREPLANLOOP / THE OPEN HANDOFF</span><span><Icon name="arrow-down" /> Scroll to explore</span></div>
    </section>
  );
}
