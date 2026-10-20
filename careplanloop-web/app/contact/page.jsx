import HeroScene from '../components/visuals/HeroScene';
import { ChapterIndex } from '../components/PageHero';
import InquiryForm from '../components/InquiryForm';

export const metadata = { title: 'Contact and workflow discovery' };

export default function ContactPage() {
  return <main id="main-content" className="form-page"><div className="wrap form-page-grid"><div className="form-page-copy" data-reveal><ChapterIndex number="01" label="Contact" /><p className="eyebrow eyebrow-ink"><span className="eyebrow-line" />B2B workflow discovery</p><h1>Where does your handoff lose its owner?</h1><p>For population-health and care-management operators, clinical-operations leaders, billing owners, ACO enablement groups, and RPM implementation partners.</p><p>Clinical-ops and RCM discovery are explored separately. A pilot requires joint clinical and billing approval.</p><p className="contact-expectation">This prototype does not transmit or save form details. No patient information or clinical detail should be entered.</p><HeroScene /></div><InquiryForm /></div></main>;
}
