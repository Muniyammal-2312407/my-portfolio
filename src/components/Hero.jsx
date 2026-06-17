import React, { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Aspiring Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content reveal active">
          <div className="badge-wrapper animate-float">
            <span className="welcome-badge">🚀 Welcome to my portfolio</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Muniyammal M</span>
          </h1>
          <h2 className="hero-subtitle">
            <span>{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Passionate Computer Science Engineering student interested in Full Stack Development and modern web technologies. I love building responsive, performant, and visually stunning web applications that deliver exceptional user experiences.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => handleScrollTo('projects')}>
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={() => handleScrollTo('contact')}>
              Let's Connect
            </button>
          </div>
          <div className="hero-socials">
            <a href="mailto:muniyammu@gmail.com" className="hero-social-icon" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://github.com/Muniyammal-2312407" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/muniyammal-m-0b767a34a" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal active">
          {/* Circular profile image container with gradient border */}
          <div className="profile-img-container animate-float">
            <img src={profileImg} alt="Muniyammal M" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
