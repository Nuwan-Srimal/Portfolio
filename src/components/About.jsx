const skills = [
  { name: 'HTML / CSS', level: 90 },
  { name: 'React.js', level: 75 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Full-Stack Dev', level: 70 },
  { name: 'TryHackMe Practice', level: 65 },
];

const tools = ['VS Code', 'Figma', 'Burp Suite', 'Nmap', 'Git', 'Postman', 'Wireshark'];

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
                <img src="https://avatars.githubusercontent.com/u/112359694?v=4" alt="Nuwan Srimal Avatar" className="avatar-img" />
              </div>
            </div>
            <div className="about-info">
              <div className="info-row"><span className="info-label">Name</span><span>Nuwan Srimal</span></div>
              <div className="info-row"><span className="info-label">Role</span><span>Cyber Security Student</span></div>
              <div className="info-row"><span className="info-label">Focus</span><span>Full-Stack, UI/UX, Bug Bounty</span></div>
              <div className="info-row"><span className="info-label">Status</span><span className="status-open">Open to opportunities</span></div>
            </div>
          </div>
          <p className="about-bio">
            I am a Cyber Security Student continuously exploring the digital world. I am highly focused on Full-Stack Development and UI/UX Design, while also actively practicing my cybersecurity skills through TryHackMe and HackTheBox. I am very interested in Bug Bounty hunting and currently working towards building real-world software solutions and secure environments.
          </p>
          <div className="vision-block">
            <h3 className="vision-title">My Vision</h3>
            <p className="vision-text">
              "To bridge the gap between elegant user interfaces and robust backend security. By integrating Full-Stack Development with Bug Bounty insights, I aim to craft digital experiences that are visually capturing and uncompromisingly secure."
            </p>
          </div>
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
