import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-elaborate">
      <div className="footer-inner">
        <div className="footer-col brand">
          <h2 className="footer-logo">
            <span className="logo-bracket">[</span>
            NS
            <span className="logo-bracket">]</span>
          </h2>
          <p className="footer-brand-desc">
            Bridging the gap between elegant design and robust security. Building digital experiences for tomorrow.
          </p>
        </div>
        <div className="footer-col links">
          <h3 className="footer-heading">Navigation</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col focus">
          <h3 className="footer-heading">Focus Areas</h3>
          <p>Full-Stack Web Dev</p>
          <p>UI/UX Design</p>
          <p>Bug Bounty</p>
          <p>Cybersecurity</p>
        </div>
        <div className="footer-col social">
          <h3 className="footer-heading">Connect</h3>
          <a href="https://github.com/Nuwan-Srimal" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://discord.gg/W42kXxe38u" target="_blank" rel="noreferrer">Discord</a>
          <a href="https://steamcommunity.com/id/loki79723/" target="_blank" rel="noreferrer">Steam</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          <span className="mono-tag" style={{ fontSize: '0.7rem' }}>// </span>
          Built with React + Vite · Nuwan Srimal © 2026
        </p>
      </div>
    </footer>
  );
}
