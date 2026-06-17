import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email submission
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactChannels = [
    {
      name: 'Email',
      value: 'mailto:muniyammu@gmail.com',
      label: 'muniyammu@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      name: 'GitHub',
      value: 'https://github.com/Muniyammal-2312407',
      label: 'github.com/Muniyammal-2312407',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      value: 'https://www.linkedin.com/in/muniyammal-m-0b767a34a',
      label: 'linkedin.com/in/muniyammal-m-0b767a34a',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Get In Touch</h2>
          <p>Have an opportunity or want to collaborate? Reach out via form or social links!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let's collaborate</h3>
            <p className="contact-pitch">
              I am open to intern roles, junior full-stack developer opportunities, and joint software creations. Feel free to connect via any of the channels below.
            </p>
            
            <div className="channels-wrapper">
              {contactChannels.map((channel, i) => (
                <a key={i} href={channel.value} target="_blank" rel="noopener noreferrer" className="channel-link glass-card">
                  <div className="channel-icon gradient-text">{channel.icon}</div>
                  <div className="channel-meta">
                    <span className="channel-name">{channel.name}</span>
                    <span className="channel-label">{channel.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container glass-card reveal">
            <h3>Direct Inquiry</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              {status === 'success' && (
                <div className="form-feedback success-feedback">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
