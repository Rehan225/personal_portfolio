import React from 'react';
import { FiBookOpen, FiTarget, FiCompass } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const About = () => {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="star-symbol">✦</span>
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="content-card">
            <p className="about-intro-text">{about.introduction}</p>

            <div className="about-objective-box">
              <div className="about-objective-title">Career Objective</div>
              <p className="about-objective-text">{about.objective}</p>
            </div>
          </div>

          <div className="content-card">
            <div className="about-highlights-list">
              <div className="about-highlight-item">
                <div className="highlight-icon-wrap">
                  <FiBookOpen />
                </div>
                <div>
                  <h3 className="highlight-title">Current Learning Focus</h3>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--linen-muted)', fontSize: '0.925rem' }}>
                    {about.currentFocus.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.35rem' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="about-highlight-item" style={{ marginTop: '1rem' }}>
                <div className="highlight-icon-wrap">
                  <FiCompass />
                </div>
                <div>
                  <h3 className="highlight-title">Areas of Interest</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {about.interests.map((interest, idx) => (
                      <span key={idx} className="project-tech-tag">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="about-highlight-item" style={{ marginTop: '1rem' }}>
                <div className="highlight-icon-wrap">
                  <FiTarget />
                </div>
                <div>
                  <h3 className="highlight-title">Education & Background</h3>
                  <div style={{ fontSize: '0.925rem', marginTop: '0.4rem', color: 'var(--linen-muted)' }}>
                    <div style={{ marginBottom: '0.6rem' }}>
                      <strong style={{ color: 'var(--linen)', display: 'block' }}>{personal.degree} (Pursuing)</strong>
                      <span>{personal.university}</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--linen)', display: 'block' }}>{personal.diplomaDegree}</strong>
                      <span>{personal.diplomaCollege}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
