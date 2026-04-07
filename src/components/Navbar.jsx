import { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Services', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => scrollTo('Home')}>
        <span className="logo-bracket">[</span>
        NS
        <span className="logo-bracket">]</span>
      </div>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <button key={l} className={`nav-link ${active === l ? 'active' : ''}`} onClick={() => scrollTo(l)}>
            <span className="nav-num">{String(links.indexOf(l)).padStart(2,'0')}.</span>
            {l}
          </button>
        ))}
      </nav>

      <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </header>
  );
}
