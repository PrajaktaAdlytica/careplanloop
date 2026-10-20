import HeroScene from '../components/visuals/HeroScene';
import { ChapterIndex } from '../components/PageHero';
import InquiryForm from '../components/InquiryForm';

export const metadata = { title: 'Request a scoped pilot conversation' };

export default function RequestPilotPage() {
  return <main id="main-content" className="form-page"><div className="wrap form-page-grid"><div className="form-page-copy" data-reveal><ChapterIndex number="01" label="Scoped pilot inquiry" /><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />Research-stage · no active offer</p><h1>Bring the workflow owner, clinical reviewer, and billing owner.</h1><p>A future pilot would start with one condition and a bounded task/consent timeline plus RPM exception queue. It would require defined owners, permitted device/data access, an escalation SLA, a baseline, and a jointly signed scope.</p><p className="contact-expectation">Readiness is not claimed. The gates are 8 clinical/RCM interviews, one retrospective replay on a governed and appropriately consented cohort, device-feed rights assessment, a jointly signed paid-pilot scope, and data-access/security and human-oversight approvals.</p><HeroScene /></div><InquiryForm /></div></main>;
}
