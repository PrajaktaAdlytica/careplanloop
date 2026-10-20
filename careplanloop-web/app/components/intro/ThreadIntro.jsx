'use client';

import {useCallback, useEffect, useRef, useState} from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Icon from '../Icon';

const ThreadPlayer = dynamic(() => import('./ThreadPlayer'), {ssr:false, loading:() => <div className="thread-film-poster"/>});

export default function ThreadIntro() {
  const [phase, setPhase] = useState('intro');
  const [ready, setReady] = useState(false);
  const [dimensions, setDimensions] = useState(null);
  const [take, setTake] = useState(0);
  const shell = useRef(null);
  const line = useRef(null);
  const title = useRef(null);
  const film = useRef(null);
  const finish = useCallback(() => {
    const hadFocus = film.current?.contains(document.activeElement);
    setPhase('hero');
    if (hadFocus) requestAnimationFrame(() => title.current?.focus({preventScroll:true}));
  }, []);

  useEffect(() => {
    const measure = () => {
      const rect = shell.current.getBoundingClientRect();
      setDimensions({width:Math.round(rect.width), height:Math.round(rect.height), lineY:line.current.offsetTop});
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(shell.current);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const respectMotion = () => {if (preference.matches) finish();};
    preference.addEventListener('change', respectMotion);
    if (preference.matches || window.location.hash || window.scrollY > 100) finish();
    else setReady(true);
    // Scrolling remains available. Leaving the opening reveals the normal navigation.
    const scroll = () => {if (shell.current.getBoundingClientRect().bottom < window.innerHeight * .35) finish();};
    window.addEventListener('scroll', scroll, {passive:true});
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', respectMotion);
      window.removeEventListener('scroll', scroll);
    };
  }, [finish]);

  const replay = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setTake(value => value + 1);
    setReady(true);
    setPhase('intro');
    requestAnimationFrame(() => film.current?.querySelector('button')?.focus({preventScroll:true}));
  };

  return <section id="top" ref={shell} className="thread-intro" data-phase={phase} aria-label="Held by a Thread — CarePlanLoop introduction">
    <div ref={line} className="thread-handoff-line" aria-hidden="true"><i/></div>
    <div className="thread-hero" inert={phase === 'intro' ? true : undefined} aria-hidden={phase === 'intro' ? true : undefined}>
      <p className="thread-eyebrow">CAREPLANLOOP / CHRONIC CARE OPERATIONS</p>
      <h1 ref={title} tabIndex={-1}><span>Keep the work connected.</span><em>Keep the decision human.</em></h1>
      <p className="thread-description">A proposed coordination layer for consent, follow-through, and reported exceptions. Every source stays visible. Every next step has a human owner.</p>
      <div className="thread-hero-actions">
        <Link href="/demo" className="button button-light">Explore the synthetic demo<Icon name="arrow-up-right"/></Link>
        <Link href="/request-pilot" className="text-link text-link-light">Discuss a scoped pilot<Icon name="arrow-right"/></Link>
      </div>
    </div>
    <div className="thread-hero-footer" inert={phase === 'intro' ? true : undefined} aria-hidden={phase === 'intro' ? true : undefined}>
      <span>Concept preview · synthetic data</span>
      <button className="thread-replay" type="button" onClick={replay}><Icon name="play"/>Replay the opening</button>
      <a href="#workflow-gap">Follow the story<Icon name="arrow-down"/></a>
    </div>
    {phase === 'intro' && <div ref={film} className="thread-film" role="region" aria-label="14-second silent film: a thread connects paper and linen; a hand holds its end.">
      {ready && dimensions ? <ThreadPlayer key={take} {...dimensions} onFinish={finish}/> : <div className="thread-film-poster"/>}
      <button type="button" className="thread-skip" onClick={finish}>Skip intro <Icon name="arrow-right"/></button>
    </div>}
    <noscript><style>{`.thread-film{display:none!important}.thread-hero,.thread-hero-footer,.thread-handoff-line{opacity:1!important;visibility:visible!important;transform:none!important}body:has(.thread-intro) .site-header{opacity:1!important;visibility:visible!important}`}</style><p className="thread-nojs">CarePlanLoop · Keep the work connected. Keep the decision human. <a href="/demo/">Explore the synthetic demo</a></p></noscript>
  </section>;
}
