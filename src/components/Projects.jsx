const projects = [
  {
    title: 'City Football League',
    desc: 'Official website for Sri Lanka\'s City Football League — 100th anniversary edition. Full league management platform with match schedules, standings, and team info.',
    tags: ['Web', 'React', 'Frontend'],
    live: 'https://www.cityfootballleague.lk/',
    github: null,
    status: 'Live',
  },
  {
    title: 'X-Store',
    desc: 'Sri Lankan e-commerce platform for gaming gear, PC parts, and peripherals. Full shopping experience with product listings, cart, and checkout flow.',
    tags: ['React', 'E-Commerce', 'Frontend'],
    live: null,
    github: 'https://github.com/Nuwan-Srimal/x-store-frontend',
    status: 'In Progress',
  },
  {
    title: 'Itech Computers POS',
    desc: 'Point-of-Sale system built for a real computer shop. Handles inventory, sales transactions, billing, and reporting. Private deployment on Vercel.',
    tags: ['POS', 'React', 'Vercel'],
    live: null,
    github: null,
    status: 'Private',
  },
  {
    title: 'OneClick Assist',
    desc: 'Windows desktop productivity app published on the Microsoft Store. A floating radial menu that gives instant access to system tools, file management and utilities with a single click.',
    tags: ['Windows App', 'Microsoft Store', 'Desktop'],
    live: 'https://apps.microsoft.com/detail/9N2CLMT77KD0',
    github: null,
    status: 'Published',
  },
  {
    title: 'Malicious URL Detector',
    desc: 'Real-time web application that uses Machine Learning to detect and classify malicious URLs. Helps users identify phishing, malware, and suspicious links instantly.',
    tags: ['ML', 'Python', 'Security', 'React'],
    live: null,
    github: 'https://github.com/Nuwan-Srimal/Real-Time-Web-Application-for-Malicious-URL-Detection-Using-Machine-Learning',
    status: 'In Progress',
  },
  {
    title: 'Crystal Beauty Clear',
    desc: 'Frontend for a beauty & cosmetics e-commerce brand. Clean, elegant product showcase with modern UI and smooth shopping experience.',
    tags: ['React', 'E-Commerce', 'UI/UX'],
    live: 'https://crystal-beauty-clear-frontend-six.vercel.app/',
    github: null,
    status: 'Live',
  },
];

const statusColor = {
  'Live':        '#00ff88',
  'In Progress': '#febc2e',
  'Published':   '#00d4ff',
  'Private':     '#8892b0',
};

export default function Projects() {
  return (
    <section id="projects" className="projects" style={{ padding: '240px 10% 200px' }}>
      <div className="projects-inner">
        <div className="projects-header">
          <p className="section-tag">// my_work</p>
          <h2 className="section-title">Real <span>Projects</span></h2>
          <div className="glow-line" />
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="project-card">
              <div className="project-top">
                <div className="project-num">{String(i + 1).padStart(2, '0')}</div>
                <span className="project-status" style={{ color: statusColor[p.status] }}>
                  <span className="status-indicator" style={{ background: statusColor[p.status], boxShadow: `0 0 6px ${statusColor[p.status]}` }} />
                  {p.status}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>
              <div className="project-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link live">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
