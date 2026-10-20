'use client';

import { useState } from 'react';
import Icon from './Icon';
import { syntheticCases } from '../data/cases';

export default function CaseExplorer({ compact = false }) {
  const [activeKey, setActiveKey] = useState('clean');
  const active = syntheticCases.find((item) => item.key === activeKey) || syntheticCases[0];

  return (
    <section className={'case-explorer' + (compact ? ' case-explorer-compact' : '')} aria-label="Synthetic case explorer">
      <div className="case-explorer-top">
        <div><span className="micro-label">{compact ? 'ONE-CONDITION CARE WORKFLOW' : 'CONCEPT PREVIEW / READ-ONLY'}</span><h3>{compact ? 'Month timeline / sample queue' : 'Sample queue · fictional record set'}</h3></div>
        <span className="demo-label demo-label-light"><i /> DEMO — SYNTHETIC DATA</span>
      </div>
      <div className="case-toolbar">
        <div className="case-tabs" role="group" aria-label="Choose a synthetic example case">
          {syntheticCases.map((item, index) => (
            <button key={item.key} className={'case-tab' + (active.key === item.key ? ' is-active' : '')} type="button" aria-pressed={active.key === item.key} onClick={() => setActiveKey(item.key)}>
              <span>0{index + 1}</span> {item.title}
            </button>
          ))}
        </div>
        <span className="filter-note"><Icon name="filter" /> Example cases only</span>
      </div>
      <div className="case-layout">
        <aside className="case-summary" aria-live="polite">
          <div className="summary-top"><span className="case-id">{active.id}</span><span className={'case-status status-' + active.statusTone}><i /><span>{active.status}</span></span></div>
          <h4>{active.title}</h4>
          <p>{active.description}</p>
          <dl>
            <div><dt>PROGRAM</dt><dd>Hypertension · fictional</dd></div>
            <div><dt>OWNER</dt><dd>{active.owner}</dd></div>
            <div><dt>STATUS</dt><dd>{active.statusDetail}</dd></div>
          </dl>
          <div className="summary-boundary"><Icon name="info" /><span>Example state only. No diagnosis, treatment, or billing determination.</span></div>
        </aside>
        <div className="case-events-wrap">
          <div className="case-events-label"><span>EVENT TRACE</span><span>LOCAL TIME · MAY</span></div>
          <ol className="case-events" aria-live="polite">
            {active.events.map((event, index) => (
              <li className={'case-event' + (event.tone ? ' event-' + event.tone : '')} key={active.key + '-' + index}>
                <span className="event-time">{event.time}</span>
                <span className="event-marker"><i /></span>
                <span className="event-content"><b>{event.title}</b><p>{event.detail}</p><small>{event.source}</small></span>
              </li>
            ))}
          </ol>
          <div className="billing-lane">
            <div className="billing-lane-icon"><Icon name="clock" /></div>
            <div><small>SEPARATE STAFF ACTIVITY LANE</small><b>{active.staffTitle}</b><span>{active.staffDetail}</span></div>
            <span className="billing-review-tag">Review evidence</span>
          </div>
          <div className="case-end-state"><Icon name="pause" /><span>{active.endState}</span></div>
        </div>
      </div>
      <div className="case-foot"><span>All names, dates, IDs, and events are fictional.</span><span>No patient outreach · no live integrations · no PHI</span></div>
    </section>
  );
}
