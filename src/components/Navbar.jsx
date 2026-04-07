import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home',     path: '/',         num: '01' },
  { name: 'About',    path: '/about',    num: '02' },
  { name: 'Services', path: '/services', num: '03' },
  { name: 'Projects', path: '/projects', num: '04' },
  { name: 'Contact',  path: '/contact',  num: '05' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [hidden,    setHidden]    = useState(false);
  const [open,      setOpen]      = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      // Hide when scrolling down past 120px, show when scrolling up
      if (currentY > lastY && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="logo-bracket">[</span>NS<span className="logo-bracket">]</span>
        </Link>

        {/* Desktop links */}
        <nav className="nav-links-desktop">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className={`nav-link ${location.pathname === l.path ? 'active' : ''}`}
            >
              <span className="nav-num">{l.num}.</span>
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* ── Full-screen mobile menu overlay ── */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        {/* Close button */}
        <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Decorative label */}
        <p className="mobile-menu-label">// NAVIGATION</p>

        {/* Nav items */}
        <nav className="mobile-nav">
          {links.map((l, i) => (
            <Link
              key={l.name}
              to={l.path}
              className={`mobile-nav-item ${location.pathname === l.path ? 'active' : ''}`}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <span className="mobile-nav-num">{l.num}</span>
              <span className="mobile-nav-name">{l.name}</span>
              <span className="mobile-nav-arrow">→</span>
            </Link>
          ))}
        </nav>

        {/* Footer info */}
        <div className="mobile-menu-footer">
          <span className="mobile-pulse" />
          <span>SYSTEM_ONLINE</span>
          <span className="mobile-menu-divider">·</span>
          <span>v2.0.26</span>
        </div>
      </div>
    </>
  );
}
