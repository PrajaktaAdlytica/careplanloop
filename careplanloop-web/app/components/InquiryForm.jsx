'use client';

import { useState } from 'react';
import Icon from './Icon';

export default function InquiryForm() {
  const [feedback, setFeedback] = useState('');
  function submit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setFeedback('Prototype interaction only: no information was transmitted or stored. A live confirmation should appear only after an approved inquiry system confirms receipt.');
  }
  return (
    <form className="inquiry-form" onSubmit={submit} data-reveal>
      <div className="form-hint"><Icon name="info" /><span>Prototype form only. It does not transmit or save your information. Do not enter patient information or health details.</span></div>
      <div className="form-row">
        <label>Role<select name="role" required defaultValue=""><option value="" disabled>Select your role</option><option>Population health / care operations</option><option>Clinical operations</option><option>Revenue cycle / billing</option><option>ACO enablement / RPM implementation</option><option>Other B2B role</option></select></label>
        <label>Organization type<select name="organization" required defaultValue=""><option value="" disabled>Select organization type</option><option>Primary-care network</option><option>ACO enablement group</option><option>Risk-bearing provider</option><option>RPM implementation partner</option><option>Other provider organization</option></select></label>
      </div>
      <div className="form-row"><label>Work email<input type="email" name="email" autoComplete="email" required placeholder="name@organization.com" /></label><label>Site / region<input type="text" name="region" required placeholder="City, state or region" /></label></div>
      <label>Which workflow are you exploring?<select name="workflow" required defaultValue=""><option value="" disabled>Choose a workflow</option><option>Enrollment and consent review</option><option>Care-plan task follow-through</option><option>RPM exception routing</option><option>Staff contact/time documentation</option><option>Cross-team escalation visibility</option><option>Still mapping the workflow</option></select></label>
      <label>What handoff would you want to examine?<textarea name="fit" rows="3" required maxLength={600} placeholder="Describe the operational handoff only. Do not include patient details." /></label>
      <label className="consent-check"><input type="checkbox" name="consent" required /><span>I understand this is a concept-stage inquiry and that this prototype does not send or store my information.</span></label>
      <button className="button button-green form-submit" type="submit">Preview inquiry state <Icon name="arrow-right" /></button>
      <p className="form-feedback" aria-live="polite">{feedback}</p>
    </form>
  );
}
