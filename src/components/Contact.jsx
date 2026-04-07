import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    const mailto = `mailto:nuwan@example.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="section-tag">// get_in_touch</p>
          <h2 className="section-title">Contact <span>Me</span></h2>
          <div className="glow-line" />
          <p className="contact-desc">
            Interested in working together, have a security question, or just want to chat about cybersecurity? Drop me a message!
          </p>
          <div className="contact-links">
            <a href="https://github.com/Nuwan-Srimal" target="_blank" rel="noreferrer" className="contact-social">
              <div className="cs-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </div>
              <div><p className="cs-label">GitHub</p><p className="cs-val">@Nuwan-Srimal</p></div>
            </a>
            <a href="https://discord.gg/W42kXxe38u" target="_blank" rel="noreferrer" className="contact-social">
              <div className="cs-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
              </div>
              <div><p className="cs-label">Discord</p><p className="cs-val">Join Server</p></div>
            </a>
            <a href="https://steamcommunity.com/id/loki79723/" target="_blank" rel="noreferrer" className="contact-social">
              <div className="cs-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0z"/></svg>
              </div>
              <div><p className="cs-label">Steam</p><p className="cs-val">loki79723</p></div>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <div className="form-card">
            <div className="form-header">
              <span className="mono-tag">$ send_message --secure</span>
            </div>
            {sent ? (
              <div className="sent-msg">
                <span className="sent-icon">✓</span>
                <p>Message client opened! Talk soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="contact-form">
                <div className="field">
                  <label>Name</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handle} placeholder="What's on your mind?" rows={5} required />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
