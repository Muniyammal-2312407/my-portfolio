import React from 'react';

const About = () => {
  const qualities = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      title: 'Full Stack Development',
      description: 'Building complete web applications using modern MERN stack technologies.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: 'Responsive Design',
      description: 'Creating smooth, mobile-friendly layouts that adjust seamlessly to all viewports.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      title: 'Database Management',
      description: 'Designing structured and performant database models with SQL and MongoDB.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>About Me</h2>
          <p>Driven student passionate about frontend craftsmanship and backend systems.</p>
        </div>

        <div className="about-grid">
          <div className="about-info glass-card reveal">
            <h3>Who I Am</h3>
            <p>
              I am a dedicated <strong>Computer Science Engineering student</strong> with a keen interest in full-stack web development. I focus on creating high-performance, user-friendly applications using modern web technologies.
            </p>
            <p>
              My coding journey revolves around building clean user interfaces, developing robust APIs, and optimizing backend data handling. I thrive on translating complex problems into functional, beautiful digital solutions.
            </p>
            <p>
              By avoiding the academic clutter and focusing on practical code implementation, I'm aiming to deliver modern web apps that conform to the highest industry standards.
            </p>
          </div>

          <div className="about-qualities">
            {qualities.map((q, idx) => (
              <div key={idx} className="quality-card glass-card reveal">
                <div className="quality-icon gradient-text">{q.icon}</div>
                <div className="quality-info">
                  <h4>{q.title}</h4>
                  <p>{q.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
