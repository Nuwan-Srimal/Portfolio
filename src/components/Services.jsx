const services = [
  { icon: '🔍', title: 'Penetration Testing', desc: 'Simulating real-world attacks to identify security weaknesses before malicious actors do.', tags: ['Web', 'Network', 'API'] },
  { icon: '🛡️', title: 'Vulnerability Assessment', desc: 'Systematic review of security weaknesses in information systems and network infrastructure.', tags: ['OWASP', 'CVE', 'CVSS'] },
  { icon: '🌐', title: 'Network Security', desc: 'Analyzing network traffic, firewall configurations, and identifying potential intrusion vectors.', tags: ['Wireshark', 'Nmap', 'IDS'] },
  { icon: '🏴‍☠️', title: 'CTF Competitions', desc: 'Competing in Capture The Flag challenges to sharpen offensive and defensive security skills.', tags: ['Web', 'Crypto', 'Forensics'] },
  { icon: '🔐', title: 'Security Auditing', desc: 'Reviewing systems, policies and procedures to ensure security compliance and best practices.', tags: ['Compliance', 'Policy', 'Review'] },
  { icon: '⚡', title: 'Incident Response', desc: 'Rapid identification, containment and recovery from security incidents and breaches.', tags: ['Forensics', 'Analysis', 'Recovery'] },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <div className="services-header">
          <p className="section-tag">// what_i_do</p>
          <h2 className="section-title">My <span>Services</span></h2>
          <div className="glow-line" />
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-card-inner">
                <div className="service-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
                </div>
              </div>
              <div className="card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
