import PageHero, { ChapterIndex } from '../components/PageHero';
import Link from 'next/link';
import Icon from '../components/Icon';

export const metadata = { title: 'Hypothetical pricing test' };

export default function PricingPage() {
  return <main id="main-content">
    <PageHero eyebrow="Commercial hypothesis / not an active offer" title={<>Pricing is a test question, not an accepted price.</>} description="The current research-stage hypothesis is $1,200 per care team per month plus $3,000 onboarding. This has not been validated with buyers and is not available for checkout." aside={<><strong>HYPOTHETICAL TEST PRICE</strong>Test against staffing cost and distinct CCM/RPM economics. SaaS revenue is not equivalent to reimbursable service revenue.</>} action={{ href: '/request-pilot', label: 'Discuss a scoped pilot' }} />
    <section className="content-section content-section-paper"><div className="wrap content-grid"><ChapterIndex number="01" label="Test hypothesis" /><div className="content-body" data-reveal><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Price to test with qualified buyers</p><h2 className="section-title">One care team, one workflow scope.</h2><div className="price-hypothesis"><div><small>HYPOTHETICAL RESEARCH PRICE · NOT A CURRENT OFFER</small><p className="section-copy">Initial test of the one-condition care-team task/consent timeline and RPM exception queue.</p></div><b>$1,200 / team / month<br />+ $3,000 onboarding</b></div><p className="section-copy">No demand, pricing acceptance, net margin, savings, reimbursement, or ROI has been demonstrated. Do not treat the test price as a quote, subscription tier, or paid pilot offer.</p><div className="proof-strip"><article><small>CHECK AGAINST</small><b>Staffing cost</b><p>Validate nurse and care-manager time without assuming workload reduction.</p></article><article><small>SEPARATE</small><b>CCM and RPM economics</b><p>Billable codes are not SaaS revenue. Different service requirements must be reviewed.</p></article><article><small>REQUIRE</small><b>Joint approval</b><p>Clinical and billing owners must agree on scope, pilot gates, data rights, and SLA.</p></article></div><Link className="button button-green" href="/request-pilot">Discuss a price research conversation <Icon name="arrow-up-right" /></Link></div></div></section>
  </main>;
}
