export const solutions = [
  {
    slug: 'primary-care-networks', title: 'Primary-care networks', audience: 'Population-health leader · care manager · clinical approver · billing owner',
    summary: 'Explore whether a one-condition timeline can make consent, care-plan follow-through, and reported exceptions easier to review across a primary-care team.',
    prompt: 'Which handoff currently crosses the most people or tools before a clinical reviewer can see its source and owner?',
    constraints: ['Start from the network’s existing EHR care-plan workflow.', 'Verify clinical staffing and the escalation SLA before adding alerts.', 'Clinical and billing owners jointly review any pilot scope.']
  },
  {
    slug: 'aco-enablement-groups', title: 'ACO enablement groups', audience: 'Enablement operator · population-health owner · clinical and RCM reviewers',
    summary: 'Test whether a shared view of follow-up ownership and escalation states is useful across care teams, without implying risk-contract performance gains.',
    prompt: 'Where does cross-team follow-through become difficult to see in the current operating model?',
    constraints: ['Define the workflow cohort and source permissions first.', 'Use local denominators and baselines for any retrospective review.', 'No risk-contract savings or outcome claim is established.']
  },
  {
    slug: 'rpm-implementation-partners', title: 'RPM implementation partners', audience: 'Implementation lead · clinical operations · device-feed owner',
    summary: 'Map the boundary between a device report, an exception, an assigned reviewer, and a manual disposition. The concept does not duplicate sensors or make clinical decisions.',
    prompt: 'Who owns the feed rights, alert routing, and escalation SLA after a report arrives?',
    constraints: ['Device-feed rights and permitted use must be documented.', 'Alert criteria and safe response expectations need clinical ownership.', 'No device compatibility or live integration is represented.']
  }
];
