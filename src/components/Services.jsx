const services = [
  { icon: '💻', title: 'Web Development', desc: 'Building responsive, modern, and high-performance websites and web applications using cutting-edge technologies.', tags: ['React', 'Full-Stack', 'Frontend'] },
  { icon: '📱', title: 'App Development', desc: 'Creating intuitive and engaging mobile applications designed to provide seamless user experiences across devices.', tags: ['Android', 'iOS', 'Mobile'] },
  { icon: '⚙️', title: 'Software Development', desc: 'Developing custom software solutions tailored to solve specific business problems and automate processes.', tags: ['Custom', 'Scalable', 'Logic'] },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Designing user-centric interfaces with a strong focus on aesthetics, accessibility, and smooth user journeys.', tags: ['Figma', 'Prototyping', 'Design'] },
  { icon: '🖌️', title: 'Graphic Design', desc: 'Crafting visually stunning graphics, logos, and digital branding assets to elevate online presence.', tags: ['Branding', 'Visuals', 'Creative'] },
  { icon: '✍️', title: 'Article Writing', desc: 'Writing technical articles, documentation, and engaging content related to technology and cybersecurity.', tags: ['Tech Blog', 'Docs', 'Content'] },
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
