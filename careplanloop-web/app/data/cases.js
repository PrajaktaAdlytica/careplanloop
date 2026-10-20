export const syntheticCases = [
  {
    id: 'SYN-028-A', key: 'clean', title: 'Clean handoff', status: 'Trace complete in example', statusTone: 'reviewed',
    description: 'Consent, source, reviewer, and staff activity remain visible as separate events.',
    owner: 'Clinical reviewer role', statusDetail: 'Clinician sign-off recorded',
    staffTitle: 'Contact/time record · 14 May, 09:21',
    staffDetail: 'Shown for billing review only; not a billing determination.',
    endState: 'Human review is required before any clinical action.',
    events: [
      { time: '02 May · 09:10', title: 'Consent event recorded', detail: 'Enrollment record is present in this synthetic example.', source: 'Source: fictional enrollment record' },
      { time: '14 May · 08:42', title: 'Device report received', detail: 'Reported information only; value intentionally not interpreted.', source: 'Source: synthetic device report' },
      { time: '14 May · 08:43', title: 'Exception routed for review', detail: 'Queue owner: nurse role · review remains a human task.', source: 'Status: awaiting reviewer action', tone: 'warm' },
      { time: '14 May · 09:05', title: 'Clinician sign-off recorded', detail: 'Fictional clinical role and timestamp; no treatment output shown.', source: 'Source: manual reviewer event' }
    ]
  },
  {
    id: 'SYN-028-B', key: 'ambiguous', title: 'Ambiguous exception', status: 'Human review needed', statusTone: 'review',
    description: 'The report lacks context needed to continue; the example abstains and keeps the reviewer in control.',
    owner: 'Nurse role · context review', statusDetail: 'Abstained · context required',
    staffTitle: 'No staff time record shown',
    staffDetail: 'No contact or duration is inferred from the reported device event.',
    endState: 'Abstained. The example waits for human context; no clinical action is proposed.',
    events: [
      { time: '03 May · 11:32', title: 'Consent event recorded', detail: 'Fictional program record; shown as a separate event.', source: 'Source: synthetic enrollment record' },
      { time: '16 May · 07:58', title: 'Device report received', detail: 'Source context is incomplete in this example record.', source: 'Source: synthetic device report' },
      { time: '16 May · 08:02', title: 'Review requested', detail: 'Routed to nurse role with the missing context visible.', source: 'Status: pending · not interpreted', tone: 'warm' },
      { time: '16 May · 08:03', title: 'Abstained · human context required', detail: 'No classification or recommendation is returned.', source: 'Next step: reviewer to assess context', tone: 'dashed' }
    ]
  },
  {
    id: 'SYN-028-C', key: 'blocked', title: 'Blocked / abstained', status: 'Blocked · no external action', statusTone: 'blocked',
    description: 'Consent detail and device-feed rights are not confirmed, so the synthetic flow stops before ingestion or outreach.',
    owner: 'Operations role · rights check', statusDetail: 'Consent / rights need review',
    staffTitle: 'No staff time record shown',
    staffDetail: 'No external contact or device action is represented in this blocked case.',
    endState: 'Blocked before device data or outreach. An authorized owner must resolve access and consent questions.',
    events: [
      { time: '05 May · 14:16', title: 'Consent record needs review', detail: 'The synthetic record does not show a confirmed consent state.', source: 'Source: incomplete fictional enrollment record', tone: 'warm' },
      { time: '05 May · 14:17', title: 'Device-feed rights unconfirmed', detail: 'No device report is ingested in this example.', source: 'Status: access rights not confirmed' },
      { time: '05 May · 14:18', title: 'Flow blocked before processing', detail: 'No patient contact, external action, or clinical routing occurs.', source: 'Owner: operations role · manual review required', tone: 'dashed' }
    ]
  }
];
