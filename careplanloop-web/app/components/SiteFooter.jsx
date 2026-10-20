import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-signature"><span>The work continues.</span><em>Keep the next person in view.</em><a href="/request-pilot" aria-label="Discuss a scoped pilot">↗</a></div>
      <div className="wrap footer-main">
        <div className="footer-brand">
          <Link href="/"><img src="/assets/careplanloop-logo-light.svg" alt="CarePlanLoop" /></Link>
          <p>Keep chronic-care work visible without mistaking automated touches for billable care.</p>
          <span className="footer-stage">Research-stage concept · No live product</span>
        </div>
        <div className="footer-links">
          <div><b>Explore</b><Link href="/platform">Platform</Link><Link href="/modules">Proposed modules</Link><Link href="/demo">Synthetic demo</Link><Link href="/pricing">Pricing hypothesis</Link></div>
          <div><b>For teams</b><Link href="/solutions">Solutions</Link><Link href="/validation">Validation plan</Link><Link href="/trust">Trust & boundaries</Link><Link href="/request-pilot">Request a scoped pilot</Link></div>
          <div><b>Company</b><Link href="/about">About the concept</Link><Link href="/contact">Contact</Link><Link href="/sign-in">Sign in</Link><span className="footer-note">Social profiles will appear after they are verified.</span></div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© CarePlanLoop · Working name; not legally cleared.</span>
        <span>Demo records are synthetic. No patient information is requested.</span>
        <Link href="/trust">Concept data disclosure</Link>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
