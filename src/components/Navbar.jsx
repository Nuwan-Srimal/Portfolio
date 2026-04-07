import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <span className="logo-bracket">[</span>
        NS
        <span className="logo-bracket">]</span>
      </Link>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l, index) => (
          <Link 
            key={l.name} 
            to={l.path}
            className={`nav-link ${location.pathname === l.path ? 'active' : ''}`} 
            onClick={() => setOpen(false)}
          >
            <span className="nav-num">{String(index).padStart(2,'0')}.</span>
            {l.name}
          </Link>
        ))}
      </nav>

      <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </header>
  );
}
