'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '../Icon';
import { modules } from '../../data/modules';

const artifacts = [
  { title: 'Enrollment review', tag: 'CONSENT RECORD', reference: 'SYN-028-C', rows: [['Source','Enrollment artifact / 02 May'],['Consent evidence','Missing notice version'],['Owner','Enrollment reviewer · fictional']], state:'Blocked · evidence needed', note:'Eligibility remains a human review question.' },
  { title:'Care-plan follow-through', tag:'APPROVED TASK', reference:'SYN-028-A', rows:[['Source','Fictional clinician-approved plan'],['Next task','Review follow-up documentation'],['Owner','Care manager · fictional']], state:'Task awaiting owner review', note:'No plan, treatment, or dose is generated.' },
  { title:'An exception with context', tag:'REVIEW QUEUE', reference:'SYN-028-B', rows:[['Source','Synthetic report / 14 May · 08:42'],['Uncertainty','Context incomplete'],['Owner','Nurse role · fictional']], state:'Pending · human review', note:'No independent clinical triage or automatic closure.' },
  { title:'The activity record', tag:'BILLING EVIDENCE', reference:'SYN-028-A', rows:[['Source','Fictional staff contact record'],['Evidence','Actor, date, and time reference'],['Owner','Billing reviewer · fictional']], state:'Documentation review needed', note:'A recorded activity is not a billing determination.' },
  { title:'The follow-up picture', tag:'WORKFLOW VISIBILITY', reference:'ILLUSTRATIVE', rows:[['Denominator','Required follow-ups · to define'],['Baseline','Observation window · to agree'],['Owner','Population-health lead']], state:'Measurement not established', note:'No measured outcome, savings, or improvement is shown.' }
];
export default function ModuleWorkbench() {
 const [active,setActive]=useState(2);
 const artifact=artifacts[active];
 return <div className="module-workbench">
  <div className="module-selector" data-reveal role="group" aria-label="Explore proposed modules">{modules.map((module,i)=><button className="module-choice" key={module.slug} type="button" aria-pressed={active===i} aria-controls="module-artifact" onClick={()=>setActive(i)}><span className="choice-number">{module.number}</span><span className="choice-copy"><b>{module.name}</b><small>{module.stage}</small></span><Icon name={module.icon}/></button>)}</div>
  <div className="module-artifact" id="module-artifact" aria-live="polite">
   <div className="artifact-top"><span>DEMO — SYNTHETIC DATA</span><span>0{active+1} / 05</span></div>
   <div className="artifact-scene" key={active}>
    <div className="artifact-symbol" aria-hidden="true"><span/><span/><i><Icon name={modules[active].icon}/></i></div>
    <span className="artifact-tag">{artifact.tag} <i>↗</i></span><h3>{artifact.title}</h3><span className="artifact-reference">{artifact.reference}</span>
    <dl>{artifact.rows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    <div className="artifact-state"><Icon name="pause"/>{artifact.state}</div><p>{artifact.note}</p>
   </div>
   <Link href={'/modules/'+modules[active].slug} className="artifact-link">Explore this proposed module <Icon name="arrow-up-right"/></Link>
  </div>
 </div>;
}
