import HeroScene from '../components/visuals/HeroScene';
import SignInForm from '../components/SignInForm';
import Icon from '../components/Icon';

export const metadata = { title: 'Sign in concept' };

export default function SignInPage() {
  return <main id="main-content" className="signin-shell"><section className="signin-story" data-reveal><span className="demo-label"><i /> CONCEPT WORKSPACE · NOT CONNECTED</span><h1>Keep the handoff visible until review.</h1><p>A concept sign-in screen for future care-team work. Authentication, accounts, and protected records are not connected or available.</p><div className="pane-foot"><Icon name="info" /><span>No patient information or credentials are stored by this page.</span></div><HeroScene /></section><section className="signin-panel" data-reveal><SignInForm /></section></main>;
}
