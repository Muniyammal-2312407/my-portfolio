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
      github: 'https://github.com/Muniyammal-2312407/REPLACE_WITH_BLOOD_DONOR_FINDER_REPO',
      demo: '#'
    },
    {
      title: 'Smart Time Table Reminder',
      description: 'A schedule creator and scheduler that outputs notifications for classes, assignments, and exams. Includes custom alert profiles and local browser storage backup systems.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Notifications API'],
      github: 'https://github.com/Muniyammal-2312407/REPLACE_WITH_SMART_TIME_TABLE_REMINDER_REPO',
      demo: '#'
    },
    {
      title: 'Traffic Management System',
      description: 'A simulated grid that visualizes flow control, dynamic traffic signals, and load calculation analytics. Features real-time intersection stats and congestion alarms.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
      github: 'https://github.com/Muniyammal-2312407/REPLACE_WITH_TRAFFIC_MANAGEMENT_SYSTEM_REPO',
      demo: '#'
    },
    {
      title: 'Tic Tac Toe Web Application',
      description: 'An interactive classic game featuring a smart AI opponent using the Minimax algorithm, scoreboard logging, custom themes, and smooth sound-cue transitions.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
      github: 'https://github.com/Muniyammal-2312407/Tic-Tac-Toe',
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
          {projectList.map((project, idx) => {
            const isDishDash = project.title.includes('DISHDASH');
            const isTicTacToe = project.title.includes('Tic Tac Toe');
            const hasOnlyGithub = !isDishDash;

            return (
              <div key={idx} className="project-card glass-card reveal">
                <div className="project-content">
                  <div className="project-header">
                    <div className="folder-icon gradient-text">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className={`project-buttons${hasOnlyGithub && !isTicTacToe ? ' centered' : ''}`}>
                  {isDishDash && (
                    <a 
                      href={project.demo} 
                      className="project-btn project-btn-primary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {isTicTacToe && (
                    <div className="project-btn-placeholder"></div>
                  )}
                  <a 
                    href={project.github} 
                    className="project-btn project-btn-secondary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
