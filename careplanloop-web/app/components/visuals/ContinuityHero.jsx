'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../Icon';

gsap.registerPlugin(ScrollTrigger);

const records = [
  { icon: 'consent', label: 'CONSENT', date: '02 MAY / 09:10', title: 'Permission has a source.', source: 'Enrollment record', state: 'Recorded', cls: 'consent' },
  { icon: 'report', label: 'REPORTED EVENT', date: '14 MAY / 08:42', title: 'A reading is a report.', source: 'Synthetic device report', state: 'Not interpreted', cls: 'report' },
  { icon: 'clock', label: 'STAFF ACTIVITY', date: '14 MAY / 09:12', title: 'Time stays separate.', source: 'Fictional staff entry', state: 'For billing review', cls: 'time' }
];

export default function ContinuityHero() {
  const root = useRef(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference) and (min-height: 650px)', () => {
      const node = root.current;
      node.classList.add('cinema-ready');
      const q = gsap.utils.selector(node);
      const timeline = gsap.timeline({ scrollTrigger: {
        trigger: node, start: () => `top ${window.innerWidth <= 920 ? 68 : 82}px`, end: 'bottom bottom', scrub: 0.65,
        invalidateOnRefresh: true,
        onUpdate: self => { node.dataset.act = self.progress < .26 ? '0' : self.progress < .66 ? '1' : '2'; }
      }});
      gsap.set(q('.continuity-act'), { autoAlpha: 0, y: 45 });
      gsap.set(q('.continuity-review'), { autoAlpha: 0, y: 45 });
      gsap.set(q('.continuity-route-progress'), { strokeDashoffset: 1 });
      gsap.set(q('.continuity-receipt'), { x: i => (window.innerWidth <= 920 ? [0, 0, 0] : [-60, 0, 60])[i], y: () => window.innerWidth <= 920 ? 0 : 18 });
      gsap.set(q('.continuity-separation'), { scaleX: 0, transformOrigin: 'left' });
      timeline.to(q('.continuity-opening'), { y: -80, autoAlpha: 0, duration: .15 }, .05)
        .to(q('.continuity-act-one'), { y: 0, autoAlpha: 1, duration: .12 }, .18)
        .to(q('.continuity-receipt'), { x: 0, y: 0, duration: .25, stagger: .055, ease: 'power2.inOut' }, .2)
        .to(q('.continuity-route-progress'), { strokeDashoffset: 0, duration: .36, ease: 'none' }, .3)
        .to(q('.continuity-separation'), { scaleX: 1, duration: .2 }, .38)
        .to(q('.continuity-act-one'), { y: -40, autoAlpha: 0, duration: .1 }, .6)
        .to(q('.continuity-act-two'), { y: 0, autoAlpha: 1, duration: .12 }, .69)
        .to(q('.receipt-consent, .receipt-time'), { opacity: .35, duration: .18 }, .68)
        .to(q('.receipt-report'), { y: -22, duration: .18 }, .68)
        .to(q('.continuity-review'), { y: 0, autoAlpha: 1, duration: .2 }, .73)
        .to(q('.continuity-meter i'), { scaleX: 1, duration: 1, ease: 'none' }, 0);
      let alive = true;
      document.fonts.ready.then(() => { if (alive) ScrollTrigger.refresh(); });
      return () => { alive = false; node.classList.remove('cinema-ready'); delete node.dataset.act; };
    });
    return () => media.revert();
  }, []);

  return <section ref={root} className="continuity-cinema" id="top" aria-label="The continuity line: a scroll-driven synthetic handoff">
    <div className="continuity-sticky">
      <div className="continuity-grain" aria-hidden="true" />
      <div className="continuity-meta wrap"><span><i/> CAREPLANLOOP / CHRONIC CARE OPERATIONS</span><a href="#workflow-gap">Skip the story <Icon name="arrow-down"/></a></div>
      <div className="continuity-opening">
        <p className="continuity-kicker">THE CONTINUITY LINE</p>
        <h1>Keep the work connected.<br/><em>Keep the decision human.</em></h1>
        <p>A proposed coordination layer for consent, follow-through, and reported exceptions.<br className="desktop-break"/> Every source stays visible. Every next step has a human owner.</p>
        <div className="continuity-actions"><Link href="/demo" className="button button-light">Explore the synthetic demo<Icon name="arrow-up-right"/></Link><Link href="/request-pilot" className="text-link text-link-light">Discuss a scoped pilot<Icon name="arrow-right"/></Link></div>
      </div>
      <div className="continuity-act continuity-act-one"><span>01 / PUT THE CONTEXT BACK TOGETHER</span><h2>Separate events.<br/><em>One traceable story.</em></h2><p>Consent, reported data, and staff work retain their own sources.<br/>Connections make the sequence visible; they do not establish billability.</p></div>
      <div className="continuity-act continuity-act-two"><span>02 / LEAVE THE DECISION WITH A PERSON</span><h2>The line continues.<br/><em>The decision waits.</em></h2><p>The reported event reaches a named reviewer.<br/>No diagnosis, treatment recommendation, or automatic closure.</p></div>
      <div className="continuity-map" aria-label="Synthetic consent, reported event, and staff activity connected in time; human review remains pending">
        <div className="continuity-ruler"><span>02 MAY</span><span>14 MAY</span><span>SEPARATE EVIDENCE LANE</span></div>
        <svg className="continuity-routes" viewBox="0 0 1000 320" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d="M165 160V205Q165 225 185 225H480Q500 225 500 205V160M500 225H635Q655 225 655 245V285" stroke="currentColor" strokeOpacity=".18"/>
          <path className="continuity-route-progress" pathLength="1" strokeDasharray="1" d="M165 160V205Q165 225 185 225H480Q500 225 500 205V160M500 225H635Q655 225 655 245V285" stroke="#d5ab83" strokeWidth="2"/>
          <path d="M835 160V285" stroke="currentColor" strokeOpacity=".4" strokeDasharray="3 6"/>
          <circle cx="165" cy="225" r="4" fill="#cbb08e"/><circle cx="500" cy="225" r="4" fill="#cbb08e"/><circle cx="655" cy="285" r="6" fill="#d5ab83"/>
        </svg>
        <div className="continuity-records">{records.map(record => <article className={'continuity-receipt receipt-'+record.cls} key={record.cls}><div className="receipt-heading"><Icon name={record.icon}/><span>{record.label}</span></div><small>{record.date}</small><h3>{record.title}</h3><div className="receipt-source"><span>{record.source}</span><span>{record.state}</span></div></article>)}</div>
        <span className="continuity-separation" aria-hidden="true"/>
        <div className="continuity-review"><span className="review-stop"><Icon name="pause"/></span><div><small>ASSIGNED OWNER / FICTIONAL ROLE</small><b>Nurse review pending</b></div><span className="review-open">Open</span></div>
        <span className="continuity-map-note">SYN-028-A · ILLUSTRATIVE MAY TIMELINE</span>
      </div>
      <div className="continuity-bottom wrap"><span>CONCEPT PREVIEW · SYNTHETIC DATA</span><div className="continuity-chapters"><span>Sources</span><div className="continuity-meter"><i/></div><span>Human review</span></div><span className="continuity-scroll"><Icon name="arrow-down"/> Scroll to connect the work</span></div>
    </div>
  </section>;
}
