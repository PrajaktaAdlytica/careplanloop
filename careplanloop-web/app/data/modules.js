export const modules = [
  {
    number: '01', slug: 'enrollment-consent-review', name: 'Enrollment/consent and eligibility review queue', short: 'Make consent and enrollment state visible for a human review.',
    audience: 'Population-health and care-operations teams', stage: 'Proposed module', icon: 'consent',
    problem: 'Enrollment information, consent evidence, and eligibility review can live across separate processes. The concept would give an authorized reviewer a queue with source, timestamp, missing details, and ownership visible.',
    workflow: ['Enrollment artifact received', 'Consent state recorded with source and date', 'Missing or uncertain evidence held for review', 'Authorized staff records a manual review state'],
    boundary: 'No automated patient eligibility determination, consent interpretation, patient outreach, or write to a clinical or administrative system.',
    questions: ['Which consent record and notice version are authoritative?', 'Who is permitted to resolve missing or conflicting evidence?', 'How do teams account for overlapping programs and payer-specific rules?']
  },
  {
    number: '02', slug: 'care-plan-task-tracker', name: 'Clinician-approved personalized care-plan task tracker', short: 'Keep clinician-approved tasks attached to an owner and follow-up date.',
    audience: 'Care managers and clinical-operations leaders', stage: 'Proposed module', icon: 'list-check',
    problem: 'Tasks can lose their owner between care-plan review, patient follow-up, and team handoff. A proposed tracker would expose owner, due date, linked source, review state, and unresolved items.',
    workflow: ['Clinician-approved plan task entered by an authorized person', 'Task gets a named role owner and due date', 'Staff records follow-up activity separately', 'Completion remains attributable and reversible'],
    boundary: 'No automatic care-plan generation, diagnosis, treatment recommendation, medication or dose change, or external patient message.',
    questions: ['Who approves the plan and each task?', 'What counts as documented follow-through in the current workflow?', 'Which existing EHR task features already meet the need?']
  },
  {
    number: '03', slug: 'rpm-exception-routing', name: 'RPM exception triage routed to clinicians', short: 'Keep reported-source evidence attached as an exception reaches a human reviewer.',
    audience: 'Clinical-operations and RPM implementation teams', stage: 'First-slice focus', icon: 'exception',
    problem: 'A reported device event may need a person to review its source, timing, context, and ownership. The workflow should make uncertainty and routing explicit without interpreting a value.',
    workflow: ['Synthetic or authorized report arrives with source and timestamp', 'Exception status and uncertainty are visible', 'A clinician role receives a review task', 'Human disposition is logged as a separate event'],
    boundary: 'No independent clinical triage, diagnosis, treatment or dose recommendation, device compatibility claim, or automatic closure.',
    questions: ['What threshold and context rules are clinically governed?', 'What escalation SLA can staffing reliably meet?', 'Who controls device-feed rights and alert routing?']
  },
  {
    number: '04', slug: 'contact-time-reconciliation', name: 'Contact/time documentation and reconciliation for billing staff', short: 'Separate staff activity records from device reports and billing determinations.',
    audience: 'Revenue-cycle, billing, and care-management operations', stage: 'Proposed module', icon: 'clock',
    problem: 'Staff contact and time records can be difficult to reconcile with the workflow evidence reviewed by billing teams. A proposed view would keep source, actor role, timestamp, duration evidence, and review state distinct.',
    workflow: ['Authorized staff action is logged with its actor and source', 'Time evidence remains attached to that action', 'Billing staff reviews documentation against their workflow', 'Billing disposition stays a human organization decision'],
    boundary: 'No automated coding, service qualification, reimbursement guarantee, claim submission, or assumption that a device reading or automated touch is billable.',
    questions: ['Which services will qualified practitioners perform?', 'What documentation and time sources are required by the organization?', 'How are overlapping programs and unbillable time handled?']
  },
  {
    number: '05', slug: 'gap-escalation-analytics', name: 'Longitudinal gap and escalation analytics across care teams', short: 'Explore follow-up gaps by owner and state after access and measurement are established.',
    audience: 'Population-health and risk-contract operators', stage: 'Proposed module', icon: 'report',
    problem: 'A team may need to understand which follow-ups remain unassigned, overdue, blocked, or awaiting review. The proposed analytics layer would summarize workflow states only after definitions and permissions are agreed.',
    workflow: ['Define the workflow denominator and local SLA', 'Group required follow-ups by owner and status', 'Show data completeness and unresolved exceptions', 'Compare against a documented baseline'],
    boundary: 'No outcome, savings, risk adjustment, contract performance, or clinical benefit claim before governed measurement.',
    questions: ['Which event source is authoritative?', 'What local SLA and denominator should be used?', 'How will the team separate workflow impact from other program changes?']
  }
];
