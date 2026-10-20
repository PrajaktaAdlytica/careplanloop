const items = [
  ['Is CarePlanLoop an operating product?', 'No. It is a research-stage concept with synthetic-only previews. There are no live integrations, customers, or product claims established.'],
  ['Does the demo make clinical decisions?', 'No. It shows a reported event, provenance, an assigned review role, and unresolved or abstained states. It does not diagnose, recommend treatment, or adjust a dose.'],
  ['Does a device reading or automated touch prove billability?', 'No. A reading, an automated touch, staff documentation, and a billing determination are different things. CCM and RPM are distinct services; the organization must verify applicable requirements.'],
  ['Are integrations available?', 'No live integrations are represented. Data access and device-feed rights are pilot discovery requirements.'],
  ['What is the pilot price?', 'The $1,200 per team per month plus $3,000 onboarding figure is a hypothetical test price, not a current offer or accepted market price.'],
  ['What needs to happen before a pilot?', 'The proposed readiness gate is 8 clinical/RCM interviews, a governed retrospective replay on an appropriately consented cohort, device-feed rights assessment, a jointly signed paid-pilot scope, and data-access/security and human-oversight approvals.']
];

export default function Faq() {
  return <div className="faq-list">{items.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>;
}
