import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-eyebrow">
            <span className="star-symbol">✦</span>
            <span>WORK & INTERNSHIPS</span>
          </div>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="skills-grid">
          {experience.map((item) => (
            <div key={item.id} className="content-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <FiBriefcase style={{ color: 'var(--lobster-pink)', fontSize: '1.2rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--linen)' }}>{item.role}</h3>
              </div>
              
              <div style={{ fontSize: '0.9rem', color: 'var(--almond-silk)', fontWeight: 500, marginBottom: '0.75rem' }}>
                {item.company} &nbsp;•&nbsp; <span style={{ color: 'var(--linen-muted)' }}>{item.period}</span>
              </div>

              <p style={{ fontSize: '0.925rem', color: 'var(--linen-muted)', margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
