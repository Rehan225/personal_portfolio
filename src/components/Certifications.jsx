import React from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;
  const hasCertifications = Array.isArray(certifications) && certifications.length > 0;

  return (
    <section id="certifications" className="section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div className="section-eyebrow">
            <span className="star-symbol">✦</span>
            <span>CREDENTIALS</span>
          </div>
          <h2 className="section-title">Certifications</h2>
        </div>

        {hasCertifications ? (
          <div className="skills-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="content-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <FiAward style={{ color: 'var(--lobster-pink)', fontSize: '1.25rem' }} />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--linen)' }}>{cert.name}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--almond-silk)', marginBottom: '0.5rem' }}>
                  {cert.issuer} {cert.date ? `• ${cert.date}` : ''}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: '0.75rem' }}
                  >
                    View Credential <FiExternalLink />
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state-card">
            <div className="empty-state-title">ONGOING LEARNING</div>
            <p className="empty-state-text">
              I am actively expanding my technical skillset through computer science coursework, independent study, and practical application. Verified industry certifications will be listed here as credentials are completed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
