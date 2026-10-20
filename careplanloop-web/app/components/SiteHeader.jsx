'use client';

import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const closeDropdowns = () => {
    navRef.current?.querySelectorAll('.nav-menu[open]').forEach((menu) => {
      menu.open = false;
    });
  };

  const close = () => {
    closeDropdowns();
    setOpen(false);
  };

  const toggleNavigation = () => {
    if (open) close();
    else setOpen(true);
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) close();
    };

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return;

      const expandedSummary = navRef.current?.querySelector('.nav-menu[open] summary');
      if (!open && !expandedSummary) return;

      event.preventDefault();
      close();
      if (open) toggleRef.current?.focus();
      else expandedSummary?.focus();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner wrap">
        <Link className="brand" href="/" aria-label="CarePlanLoop home" onClick={close}>
          <img src="/assets/careplanloop-logo-light.svg" alt="CarePlanLoop" />
        </Link>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-nav" onClick={toggleNavigation}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav ref={navRef} className={'site-nav' + (open ? ' is-open' : '')} id="site-nav" aria-label="Main navigation">
          <details className="nav-menu" name="site-navigation"><summary>Product <Icon name="chevron-down" /></summary><div className="nav-dropdown"><Link href="/platform" onClick={close}><b>Platform</b><span>How a handoff stays traceable</span></Link><Link href="/modules" onClick={close}><b>Proposed modules</b><span>Five workflow directions</span></Link><Link href="/demo" onClick={close}><b>Synthetic demo</b><span>Explore three example states</span></Link></div></details>
          <details className="nav-menu" name="site-navigation"><summary>Solutions <Icon name="chevron-down" /></summary><div className="nav-dropdown"><Link href="/solutions/primary-care-networks" onClick={close}><b>Primary-care networks</b><span>Care-team follow-through</span></Link><Link href="/solutions/aco-enablement-groups" onClick={close}><b>ACO enablement groups</b><span>Cross-team visibility</span></Link><Link href="/solutions/rpm-implementation-partners" onClick={close}><b>RPM implementation partners</b><span>Exception handoff discovery</span></Link></div></details>
          <Link href="/validation" onClick={close}>Validation</Link>
          <details className="nav-menu" name="site-navigation"><summary>Company <Icon name="chevron-down" /></summary><div className="nav-dropdown nav-dropdown-right"><Link href="/about" onClick={close}><b>About</b><span>Mission and concept status</span></Link><Link href="/trust" onClick={close}><b>Trust & boundaries</b><span>What the concept does not do</span></Link><Link href="/contact" onClick={close}><b>Contact</b><span>Discuss a workflow</span></Link></div></details>
          <Link className="nav-signin" href="/sign-in" onClick={close}>Sign in</Link>
          <Link className="nav-cta" href="/request-pilot" onClick={close}>Discuss a scoped pilot <Icon name="arrow-up-right" /></Link>
        </nav>
      </div>
    </header>
  );
}
