import React from 'react';
import prodigyCert from '../assets/certificates/Prodigy Intern Cert.pdf';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Prodigy InfoTech',
      period: 'Internship',
      description: [
        'Developed interactive and responsive web pages using modern HTML, CSS, and JavaScript structures.',
        'Collaborated on building modular web layouts, ensuring full responsiveness across mobile, tablet, and desktop viewports.',
        'Explored state management and structured components in React.js for clean frontend architectures.',
        'Implemented custom database-driven utilities and forms matching industry design standards.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git'],
      certificate: prodigyCert
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Professional Experience</h2>
          <p>Highlighting my internships and industry exposure as a developer.</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company gradient-text">{exp.company}</h4>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <ul className="experience-details">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                <div className="experience-footer">
                  <div className="experience-tech">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                      View Internship Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
