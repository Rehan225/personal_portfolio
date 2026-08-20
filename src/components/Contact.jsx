import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-container">
          <div>
            <div className="section-eyebrow">
              <span className="star-symbol">✦</span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-text">
              I am always open to entry-level software roles, internship opportunities, collaborative projects, or conversations around technology and web development.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <a
                href={`mailto:${personal.email}`}
                className="btn btn-primary"
              >
                <FaEnvelope /> Send Me an Email
              </a>
            </div>
          </div>

          <div className="content-card">
            <h3 className="skill-category-title" style={{ marginTop: 0 }}>
              <span className="star-symbol">✦</span> Contact Details
            </h3>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--almond-silk)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</div>
                  <a href={`mailto:${personal.email}`} style={{ color: 'var(--linen)' }}>
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaGithub />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--almond-silk)', textTransform: 'uppercase', letterSpacing: '1px' }}>GitHub</div>
                  {personal.github && personal.github !== "YOUR_GITHUB_URL" ? (
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--linen)' }}>
                      {personal.github}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--linen-muted)' }}>{personal.github}</span>
                  )}
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaLinkedinIn />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--almond-silk)', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn</div>
                  {personal.linkedin && personal.linkedin !== "YOUR_LINKEDIN_URL" ? (
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--linen)' }}>
                      {personal.linkedin}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--linen-muted)' }}>{personal.linkedin}</span>
                  )}
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaLocationDot />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--almond-silk)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</div>
                  <span style={{ color: 'var(--linen)' }}>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
