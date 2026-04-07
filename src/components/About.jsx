const skills = [
  { name: 'HTML / CSS', level: 90 },
  { name: 'React.js', level: 75 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Full-Stack Dev', level: 70 },
  { name: 'TryHackMe Practice', level: 65 },
];

const arsenal = [
  { icon: '🖥️', name: 'Kali Linux' },
  { icon: '⚡', name: 'React.js' },
  { icon: '🔐', name: 'Burp Suite' },
  { icon: '🌐', name: 'Node.js' },
  { icon: '🗄️', name: 'Nmap' },
  { icon: '🎨', name: 'Figma' },
  { icon: '📡', name: 'Wireshark' },
  { icon: '🛠️', name: 'VS Code' },
];

export default function About() {
  return (
    <section id="about" className="about-page">
      <div className="about-page-inner">

        {/* ── HERO IDENTITY GRID ── */}
        <div className="ab-identity-grid">

          {/* Image Column */}
          <div className="ab-img-col">
            <div className="ab-img-frame">
              <img
                src="https://avatars.githubusercontent.com/u/112359694?v=4"
                alt="Nuwan Srimal"
                className="ab-portrait"
              />
              <div className="ab-img-overlay" />
            </div>
            <div className="ab-status-card">
              <p className="ab-status-label">System Status</p>
              <p className="ab-status-val">
                <span className="ab-pulse" />
                OPERATIONAL // VERIFIED
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="ab-text-col">
            <p className="ab-eyebrow">Neural Architecture / Lead Developer</p>
            <h1 className="ab-hero-name">
              NUWAN<br />
              <span className="ab-name-accent">SRIMAL</span>
            </h1>
            <div className="ab-bio-blocks">
              <p>
                Specializing in cybersecurity infrastructure and sophisticated full-stack architectures.
                My journey began at the intersection of curiosity and caution—exploring web vulnerabilities
                to build its strongest defenses.
              </p>
              <p>
                I bridge the gap between aesthetic excellence and impenetrable logic. From engineering
                secure APIs to designing immersive UI systems—my objective is to redefine digital safety
                through technical precision and creativity.
              </p>
            </div>
            <div className="ab-meta-grid">
              <div className="ab-meta-item">
                <span className="ab-meta-lbl">Name</span>
                <span className="ab-meta-val">Nuwan Srimal Samaranayaka</span>
              </div>
              <div className="ab-meta-item">
                <span className="ab-meta-lbl">Role</span>
                <span className="ab-meta-val">Cyber Security Student</span>
              </div>
              <div className="ab-meta-item">
                <span className="ab-meta-lbl">Focus</span>
                <span className="ab-meta-val">Full-Stack · UI/UX · Bug Bounty</span>
              </div>
              <div className="ab-meta-item">
                <span className="ab-meta-lbl">Status</span>
                <span className="ab-meta-val ab-avail">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── VISION QUOTE BLOCK ── */}
        <div className="ab-vision-block">
          <span className="ab-vision-deco">🔒</span>
          <blockquote className="ab-vision-quote">
            "To bridge the gap between elegant user interfaces and robust backend security.
            Security is not a feature — it is the foundation of digital trust."
          </blockquote>
          <div className="ab-vision-meta">
            <span>VISION_STATEMENT_001</span>
            <span className="ab-vision-line" />
            <span>SENTINEL PROTOCOL</span>
          </div>
        </div>

        {/* ── BENTO GRID: SKILLS + ARSENAL ── */}
        <div className="ab-bento-grid">

          {/* Skills */}
          <div className="ab-bento-skills">
            <div className="ab-bento-header">
              <div>
                <h3 className="ab-bento-title">CORE_COMPETENCIES</h3>
                <p className="ab-bento-sub">Quantified Tactical Skillset</p>
              </div>
              <span className="ab-bento-icon">◈</span>
            </div>
            <div className="ab-skills-list">
              {skills.map(s => (
                <div key={s.name} className="ab-skill-item">
                  <div className="ab-skill-header">
                    <span className="ab-skill-name">{s.name}</span>
                    <span className="ab-skill-pct">{s.level}%</span>
                  </div>
                  <div className="ab-skill-track">
                    <div className="ab-skill-fill ab-skill-shine" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arsenal */}
          <div className="ab-bento-arsenal">
            <div className="ab-bento-header">
              <div>
                <h3 className="ab-bento-title">ARSENAL</h3>
                <p className="ab-bento-sub">Deployment Stack</p>
              </div>
            </div>
            <div className="ab-arsenal-grid">
              {arsenal.map(t => (
                <div key={t.name} className="ab-tool-card">
                  <span className="ab-tool-icon">{t.icon}</span>
                  <span className="ab-tool-name">{t.name}</span>
                </div>
              ))}
            </div>
            <div className="ab-arsenal-footer">
              <a
                href="https://github.com/Nuwan-Srimal"
                target="_blank"
                rel="noreferrer"
                className="ab-dl-btn"
              >
                VIEW GITHUB PROFILE
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
