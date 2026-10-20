'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';

const scenes = [
  { label: 'The source', icon: 'report', title: 'A report arrives.', detail: 'The original event stays attached.', field: 'Reported source', value: 'Synthetic device report', status: 'Received · not interpreted', time: '14 May · 08:42' },
  { label: 'The evidence', icon: 'document', title: 'Context travels with it.', detail: 'Source, timestamp, and uncertainty stay visible.', field: 'Evidence reference', value: 'SYN-028-A / report-014', status: 'Context requires review', time: '14 May · 08:42' },
  { label: 'The reviewer', icon: 'reviewer', title: 'The next step has an owner.', detail: 'The route stops at a human review point.', field: 'Assigned reviewer', value: 'Nurse role · fictional', status: 'Pending human review', time: '14 May · 08:43' }
];

export default function HandoffAtlas() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const container = useRef(null);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setActive(previous => Math.min(previous + 1, 2));
    }, 1600);
    const finish = window.setTimeout(() => setPlaying(false), 4700);
    const stopWhenHidden = () => { if (document.hidden) setPlaying(false); };
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) setPlaying(false); });
    observer.observe(container.current);
    document.addEventListener('visibilitychange', stopWhenHidden);
    return () => { clearInterval(timer); clearTimeout(finish); observer.disconnect(); document.removeEventListener('visibilitychange', stopWhenHidden); };
  }, [playing]);
  const play = () => { if (playing) setPlaying(false); else { setActive(0); setPlaying(true); } };
  const scene = scenes[active];
  return <div ref={container} className="handoff-atlas" data-atlas data-scene={active} data-playing={playing}>
    <div className="atlas-caption"><span><i /> Concept preview · synthetic data</span><span>FIELDNOTE / 028</span></div>
    <div className="atlas-field">
      <svg className="atlas-route" viewBox="0 0 640 510" fill="none" aria-hidden="true">
        <defs><linearGradient id="atlas-ribbon" x1="100" y1="120" x2="560" y2="450" gradientUnits="userSpaceOnUse"><stop stopColor="#779681"/><stop offset=".55" stopColor="#365d48"/><stop offset="1" stopColor="#b4c7ad"/></linearGradient></defs>
        <g className="atlas-contours">{[0,1,2,3,4].map(i => <ellipse key={i} cx="320" cy="264" rx={216+i*12} ry={132+i*9} stroke="currentColor" opacity={.3-i*.045}/>)}</g>
        <path d="M491 327C421 422 201 459 110 357C19 256 167 115 328 99C446 86 560 131 560 205" stroke="#13261d" strokeWidth="29"/>
        <path d="M491 313C421 408 201 445 110 343C19 242 167 101 328 85C446 72 560 117 560 191" stroke="url(#atlas-ribbon)" strokeWidth="19"/>
        <path d="M491 306C421 401 201 438 110 336C19 235 167 94 328 78C446 65 560 110 560 184" stroke="#b4c7ad" strokeOpacity=".55" strokeWidth="1"/>
        <path className="atlas-draw" data-draw-path pathLength="1" d="M132 315C91 243 206 132 330 118C430 105 525 138 526 198" stroke="#d7b394" strokeWidth="2" strokeDasharray="1"/>
        <path d="M509 319L521 305M517 325L529 311" stroke="#d8ab88" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="526" cy="208" r="12" fill="#c88965" stroke="#e0c0a2"/><circle cx="526" cy="208" r="23" stroke="#c88965" strokeOpacity=".35"/>
        <path d="M526 230V284H570" stroke="#a2b39e" strokeDasharray="3 5"/>
      </svg>
      <div className="atlas-source" data-art-layer><span className="atlas-slip-icon"><Icon name="report" /></span><small>SOURCE / 08:42</small><b>Report received</b><div className="slip-rules"><i/><i/><i/></div><span className="atlas-source-foot">SYN-028-A <Icon name="arrow-up-right" /></span></div>
      <div className="atlas-core"><span className="atlas-core-kicker">THE OPEN HANDOFF</span><span className="atlas-core-title">Evidence in view.<br/><em>People in control.</em></span><span className="atlas-core-rule"/></div>
      <div className="atlas-review" data-art-layer><span className="atlas-review-icon"><Icon name="reviewer" /></span><div><small>HUMAN CHECKPOINT</small><b>Nurse role</b><span>Review pending</span></div><span className="atlas-pause">Ⅱ</span></div>
      <span className="atlas-axis atlas-axis-start">01 / REPORTED</span><span className="atlas-axis atlas-axis-end">02 / FOR REVIEW</span>
    </div>
    <div className="atlas-inspector" aria-live="polite"><div><small>{scene.field}</small><b key={scene.value}>{scene.value}</b></div><span className="atlas-status"><i/>{scene.status}</span></div>
    <div className="atlas-controls" role="group" aria-label="Explore the handoff illustration">{scenes.map((item,i)=><button key={item.label} type="button" aria-pressed={active===i} onClick={()=>{setPlaying(false);setActive(i);}}><span>0{i+1}</span>{item.label}<Icon name={item.icon}/></button>)}</div>
    <div className="atlas-playback"><button type="button" onClick={play} aria-label={playing ? 'Pause handoff animation' : 'Replay the illustrative handoff'}><Icon name={playing ? 'pause' : 'play'} />{playing ? 'Pause sequence' : 'Play the handoff'}</button><span>3 stages · ends at human review</span></div><p className="atlas-description">{scene.detail} <span>{scene.time} · illustrative event</span></p>
  </div>;
}
