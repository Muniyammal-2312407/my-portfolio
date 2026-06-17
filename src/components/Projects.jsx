import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'DISHDASH Dining Table Reservation System',
      description: 'A full-stack dining table reservation system that lets users view restaurant layouts, select tables in real-time, and place reservation requests. Features an interactive admin dashboard to manage bookings.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
      github: 'https://github.com/Muniyammal-2312407/DISHDASH-Dining-Table-Reservation-System',
      demo: 'https://dishdash-dining-table-reservation-system-36qq2fal2.vercel.app'
    },
    {
      title: 'Blood Donor Finder',
      description: 'A location-enabled helper app that maps registered donors, calculates distances, and allows fast search filters to identify nearby matches during urgent requirements. Built to streamline donor-patient matching.',
      tech: ['React.js', 'Leaflet.js', 'Node.js', 'MongoDB', 'CSS3'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Time Table Reminder',
      description: 'A schedule creator and scheduler that outputs notifications for classes, assignments, and exams. Includes custom alert profiles and local browser storage backup systems.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Notifications API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Traffic Management System',
      description: 'A simulated grid that visualizes flow control, dynamic traffic signals, and load calculation analytics. Features real-time intersection stats and congestion alarms.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Tic Tac Toe Web Application',
      description: 'An interactive classic game featuring a smart AI opponent using the Minimax algorithm, scoreboard logging, custom themes, and smooth sound-cue transitions.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Projects</h2>
          <p>A selection of applications and systems I have designed and engineered.</p>
        </div>

        <div className="projects-grid">
          {projectList.map((project, idx) => (
            <div key={idx} className="project-card glass-card reveal">
              <div className="project-content">
                <div className="project-header">
                  <div className="folder-icon gradient-text">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      className="project-link" 
                      aria-label="GitHub Repository"
                      target={project.github !== '#' ? '_blank' : undefined}
                      rel={project.github !== '#' ? 'noopener noreferrer' : undefined}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a 
                      href={project.demo} 
                      className="project-link" 
                      aria-label="Live Demo"
                      target={project.demo !== '#' ? '_blank' : undefined}
                      rel={project.demo !== '#' ? 'noopener noreferrer' : undefined}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tech-list">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
