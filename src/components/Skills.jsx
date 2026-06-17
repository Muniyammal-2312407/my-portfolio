import React from 'react';

const Skills = () => {
  const skillList = [
    {
      name: 'HTML5',
      category: 'Frontend',
      glowColor: 'rgba(239, 68, 68, 0.2)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f06529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 1.5-1.5 14.5-6.5 4-6.5-4-1.5-14.5zm0 4h-4l.5 5h3.5v3l-2.5 1-2.5-1-.2-2h-2l.4 4.5 4.3 1.5 4.3-1.5.5-5.5H8.5L8.2 8h3.8z"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      glowColor: 'rgba(59, 130, 246, 0.2)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2965f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 1.5-1.5 14.5-6.5 4-6.5-4-1.5-14.5zm0 4h-4.2l.2 2h4v3.5l-2.5 1-2.5-1-.2-2h-2l.4 4.5 4.3 1.5 4.3-1.5.5-7.5H12z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'Frontend/Backend',
      glowColor: 'rgba(245, 158, 11, 0.2)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f0db4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3z"/>
          <path d="M15 11h2v6c0 .5-.5 1-1 1s-1-.5-1-1m-4-7h2v7c0 .5-.5 1-1 1s-1-.5-1-1v-2H9v2c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5v-7h-4z"/>
        </svg>
      )
    },
    {
      name: 'React.js',
      category: 'Frontend',
      glowColor: 'rgba(6, 182, 212, 0.2)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#61dbfb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"/>
          <circle cx="12" cy="12" r="2" fill="#61dbfb"/>
        </svg>
      )
    },
    {
      name: 'MongoDB',
      category: 'Database',
      glowColor: 'rgba(16, 185, 129, 0.2)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4db33d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.5 6 7 10.5 7 14.5c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5C17 10.5 15.5 6 12 2zm0 18v-8"/>
          <path d="M12 2v20c-5.5-4-6-10-6-10s2.5-3 6-10c3.5 7 6 10 6 10s-.5 6-6 10z"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      category: 'Database',
      glowColor: 'rgba(59, 130, 246, 0.2)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00758f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a9 9 0 0 0-9 9c0 3 1.5 5.5 4 7l2-4h3l1 2h2l1-2h2l-2-4h-2m-2-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
          <path d="M12 21a9 9 0 0 0 9-9c0-3-1.5-5.5-4-7l-1 2h-3l-2-2m-1 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      )
    },
    {
      name: 'C++',
      category: 'Programming Languages',
      glowColor: 'rgba(99, 102, 241, 0.2)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00599c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M15 9h-3a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h3"/>
          <path d="M17 12h2m-1-1v2m2-1h2m-1-1v2"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Technical Skills</h2>
          <p>My toolbox containing technologies and frameworks I enjoy building with.</p>
        </div>

        <div className="skills-grid">
          {skillList.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card glass-card reveal"
              style={{ '--glow-color': skill.glowColor }}
            >
              <div className="skill-icon-wrapper">
                {skill.icon}
              </div>
              <div className="skill-meta">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
