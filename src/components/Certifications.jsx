import React from 'react';
import snowflakeCert from '../assets/certificates/Snowflake certificate.pdf';
import dbmsCert from '../assets/certificates/DBMS Infosys.pdf';

const Certifications = () => {
  const certifications = [
    {
      title: 'SnowPro Associate Certification',
      issuer: 'Snowflake',
      category: 'Cloud & Data Platform',
      description: 'Validates foundational knowledge and technical expertise in the Snowflake Data Cloud platform, including data loading, warehousing, sharing, and performance tuning.',
      certFile: snowflakeCert,
      badgeColor: 'rgba(59, 130, 246, 0.12)',
      borderColor: 'rgba(59, 130, 246, 0.25)',
      iconColor: '#60a5fa',
    },
    {
      title: 'Database Management System',
      issuer: 'Infosys Springboard',
      category: 'Database Engineering',
      description: 'Comprehensive certification in database architectures, SQL query design, entity-relationship diagrams, schema normalization, and database transaction properties.',
      certFile: dbmsCert,
      badgeColor: 'rgba(168, 85, 247, 0.12)',
      borderColor: 'rgba(168, 85, 247, 0.25)',
      iconColor: '#c084fc',
    }
  ];

  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Certifications</h2>
          <p>Verified professional credentials validating my technical knowledge.</p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="cert-card glass-card reveal"
              style={{ '--badge-color': cert.badgeColor, '--badge-border': cert.borderColor }}
            >
              {/* Badge Icon */}
              <div className="cert-badge-wrapper" style={{ background: cert.badgeColor, border: `1px solid ${cert.borderColor}` }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={cert.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>

              {/* Content */}
              <div className="cert-body">
                <span className="cert-category" style={{ color: cert.iconColor }}>{cert.category}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  {cert.issuer}
                </p>
                <p className="cert-description">{cert.description}</p>
              </div>

              {/* View Certificate Button */}
              <a
                href={cert.certFile}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-view-btn"
                style={{ '--btn-border': cert.borderColor, '--btn-color': cert.iconColor }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                View Certificate
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
