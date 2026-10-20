'use client';

import { usePathname } from 'next/navigation';
import Icon from '../Icon';
import { modules } from '../../data/modules';
import { solutions } from '../../data/solutions';

const scenes = {
  platform: { label: 'THE COORDINATION LAYER', title: 'One record. A visible next step.', icon: 'document', steps: ['Source attached', 'Owner assigned', 'Review pending'], icons: ['document','reviewer','pause'], note: 'Proposed workflow · no connected systems', field: 'Accountable owner', value: 'Clinical reviewer', state: 'Human decision required' },
  modules: { label: 'FIVE DIRECTIONS / ONE STARTING POINT', title: 'Give each handoff a place.', icon: 'list-check', steps: ['Select a workflow', 'Define its boundary', 'Name its reviewer'], icons: ['list-check','consent','reviewer'], note: 'Proposed modules · validate one at a time', field: 'First-slice concept', value: 'Task / consent timeline + RPM queue', state: 'Scope to validate' },
  solutions: { label: 'THE PEOPLE AROUND THE WORK', title: 'Different roles. A shared question.', icon: 'reviewer', steps: ['Clinical operations', 'Revenue cycle', 'Joint approval'], icons: ['reviewer','clock','consent'], note: 'Discovery sequence · no customer claims', field: 'Discovery focus', value: 'Where does ownership become unclear?', state: 'For discussion' },
  demo: { label: 'DEMO / SYNTHETIC DATA', title: 'Three records. Three distinct states.', icon: 'report', steps: ['Clean handoff', 'Needs review', 'Blocked / abstained'], icons: ['check','exception','pause'], note: 'Fictional cases · no clinical guidance', field: 'Example reference', value: 'SYN-028-A / SYN-028-B / SYN-028-C', state: 'Concept preview only' },
  pricing: { label: 'A PRICE TO TEST, NOT A PROMISE', title: 'Start with a bounded scope.', icon: 'document', steps: ['One care team', 'Defined workflow', 'Joint scope review'], icons: ['reviewer','list-check','consent'], note: 'Hypothetical pricing · no active checkout', field: 'Test hypothesis', value: '$1,200 / team / month + $3,000 onboarding', state: 'Not a validated offer' },
  about: { label: 'THE IDEA BEHIND CAREPLANLOOP', title: 'Continuity needs an owner.', icon: 'reviewer', steps: ['Make work visible', 'Keep its source', 'Leave people in control'], icons: ['report','document','reviewer'], note: 'Research-stage thesis · not a live product', field: 'Design principle', value: 'Every handoff stays attributable', state: 'Human accountability' },
  validation: { label: 'EVIDENCE BEFORE EXPANSION', title: 'Define. Observe. Review.', icon: 'report', steps: ['Establish baseline', 'Governed replay', 'Review guardrails'], icons: ['document','clock','reviewer'], note: 'Proposed study · no measured results', field: 'Primary measure', value: 'Owner-documented follow-ups within local SLA', state: 'Baseline not established' },
  trust: { label: 'VISIBLE BOUNDARIES', title: 'The next decision stays human.', icon: 'consent', steps: ['Attributable source', 'Uncertainty visible', 'Manual review'], icons: ['document','exception','reviewer'], note: 'Concept boundaries · no certification claim', field: 'External system state', value: 'No live connections or external actions', state: 'Synthetic preview only' },
  'why-care-work-breaks': { label: 'FOLLOW THE MISSING HANDOFF', title: 'An event is only the beginning.', icon: 'exception', steps: ['An event arrives', 'Context is scattered', 'Who owns the next step?'], icons: ['report','document','reviewer'], note: 'Workflow hypothesis · to validate with teams', field: 'Question to explore', value: 'Where do source, task, and owner separate?', state: 'Discovery required' },
  contact: { label: 'START WITH A WORKFLOW', title: 'Bring the people closest to it.', icon: 'reviewer', steps: ['Your operating context', 'One handoff', 'A focused conversation'], icons: ['reviewer','document','list-check'], note: 'Prototype form · nothing sent or saved', field: 'Conversation focus', value: 'Clinical operations + billing ownership', state: 'No patient details' },
  'request-pilot': { label: 'A BOUNDED FIRST STEP', title: 'Scope the work together.', icon: 'consent', steps: ['Named owners', 'Data rights + SLA', 'Jointly reviewed scope'], icons: ['reviewer','document','consent'], note: 'Readiness not claimed · prototype inquiry', field: 'Pilot boundary', value: 'One condition / one care team', state: 'Approvals required' },
  'sign-in': { label: 'CONCEPT WORKSPACE', title: 'A place for the next handoff.', icon: 'document', steps: ['Source', 'Owner', 'Review state'], icons: ['document','reviewer','pause'], note: 'Authentication and accounts are not connected', field: 'Workspace state', value: 'Synthetic concept preview', state: 'No protected records' }
};

export default function HeroScene() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const module = segments[0] === 'modules' && modules.find(item => item.slug === segments[1]);
  const solution = segments[0] === 'solutions' && solutions.find(item => item.slug === segments[1]);
  const base = scenes[segments[0]] || scenes.platform;
  let scene = module ? { ...base, label: `PROPOSED MODULE / ${module.number}`, title: module.short, icon: module.icon, steps: module.workflow.slice(0,3), icons: ['document', module.icon, 'reviewer'], field: 'Reviewer context', value: module.audience, state: module.stage } : base;
  if (solution) scene = { ...base, label: solution.title.toUpperCase(), title: solution.prompt, field: 'People to include', value: solution.audience };
  if (segments[0] === 'demo' && segments[1] === 'month-timeline') scene = { ...base, label: 'SYNTHETIC MONTH / MAY', title: 'Keep the sequence attributable.', steps: ['02 May · consent recorded', '14 May · report received', '14 May · routed to nurse role'], icons: ['consent','report','reviewer'], field: 'Illustrative record', value: 'SYN-028-A / a month of distinct events', state: 'Human review remains explicit' };
  return <div className="hero-scene" data-hero-scene data-illustration>
    <div className="scene-topline"><span><i /> CONCEPT PREVIEW</span><Icon name={scene.icon}/></div>
    <div className="scene-emblem" aria-hidden="true"><span/><span/><span/><i><Icon name={scene.icon}/></i><svg viewBox="0 0 400 110" fill="none"><path data-draw-path pathLength="1" strokeDasharray="1" d="M20 55H133Q148 55 148 70V79Q148 94 163 94H237Q252 94 252 79V70Q252 55 267 55H380" stroke="currentColor"/><circle cx="20" cy="55" r="4" fill="currentColor"/><circle cx="380" cy="55" r="4" fill="currentColor"/></svg></div>
    <div className="scene-heading"><small>{scene.label}</small><h2>{scene.title}</h2></div>
    <ol className="scene-stages">{scene.steps.map((step,i)=><li key={step}><span className="scene-step-icon"><Icon name={scene.icons[i]}/></span><span>{step}</span><small>0{i+1}</small></li>)}</ol>
    <div className="scene-ledger"><small>{scene.field}</small><b>{scene.value}</b><span><Icon name="pause"/>{scene.state}</span></div>
    <p className="scene-footnote">{scene.note}</p>
  </div>;
}
