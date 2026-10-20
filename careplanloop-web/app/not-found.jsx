import Link from 'next/link';
import Icon from './components/Icon';

export default function NotFound() {
  return <main id="main-content" className="not-found"><div className="wrap"><span className="eyebrow eyebrow-ink"><span className="eyebrow-line" />No record at this address</span><h1>This page is not part of the concept.</h1><p>Return to the story, explore the synthetic demo, or review the proposed modules.</p><div className="actions"><Link className="button button-green" href="/">Back to homepage <Icon name="arrow-up-right" /></Link><Link className="text-link" href="/demo">Open synthetic demo <Icon name="arrow-right" /></Link></div></div></main>;
}
