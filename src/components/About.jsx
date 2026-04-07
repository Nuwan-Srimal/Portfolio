const skills = [
  { name: 'Network Security', level: 80 },
  { name: 'Penetration Testing', level: 70 },
  { name: 'Linux / Kali Linux', level: 85 },
  { name: 'CTF Competitions', level: 75 },
  { name: 'Python Scripting', level: 65 },
  { name: 'Vulnerability Assessment', level: 72 },
];

const tools = ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'Hydra', 'John the Ripper', 'Gobuster', 'SQLMap'];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-left">
          <p className="section-tag">// about_me</p>
          <h2 className="section-title">Who Am <span>I</span></h2>
          <div className="glow-line" />
          <div className="about-card">
            <div className="about-avatar">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="60" height="60" opacity="0.4">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
                </svg>
              </div>
              <div className="avatar-status">
                <span className="status-dot" />
                <span className="status-text">Available for work</span>
              </div>
            </div>
            <div className="about-info">
              <div className="info-row"><span className="info-label">Name</span><span>Nuwan Srimal</span></div>
              <div className="info-row"><span className="info-label">Role</span><span>Cyber Security Student</span></div>
              <div className="info-row"><span className="info-label">Focus</span><span>Ethical Hacking, CTF</span></div>
              <div className="info-row"><span className="info-label">Status</span><span className="status-open">Open to opportunities</span></div>
            </div>
          </div>
          <p className="about-bio">
            My journey in cybersecurity has equipped me with a strong foundation in identifying vulnerabilities, implementing security measures, and staying updated on the latest threats. I love breaking things (ethically) to understand how to better defend them.
          </p>
          <div className="tools-section">
            <p className="tools-label">// tools_i_use</p>
            <div className="tools-grid">
              {tools.map(t => <span key={t} className="tool-badge">{t}</span>)}
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="skills-label">// skill_levels</p>
          <div className="skills-list">
            {skills.map(s => (
              <div key={s.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
