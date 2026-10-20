import './globals.css';
import './art-direction.css';
import './motion-polish.css';
import './continuity.css';
import './spacing.css';
import './thread-intro.css';
import 'lenis/dist/lenis.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import MotionSystem from './components/MotionSystem';

export const metadata = {
  title: {
    default: 'CarePlanLoop — Keep the handoff visible until review',
    template: '%s — CarePlanLoop'
  },
  description: 'A research-stage concept for making chronic-care work visible, with source evidence attached and human review at the center.',
  icons: { icon: '/favicon.svg' },
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@1,6..72,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="page-progress" aria-hidden="true"><span /></div>
        <SiteHeader />
        <MotionSystem>{children}</MotionSystem>
        <SiteFooter />
      </body>
    </html>
  );
}
