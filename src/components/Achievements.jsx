import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;
  const hasAchievements = Array.isArray(achievements) && achievements.length > 0;

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div className="section-eyebrow">
            <span className="star-symbol">✦</span>
            <span>MILESTONES & RECOGNITION</span>
          </div>
          <h2 className="section-title">Achievements</h2>
        </div>

        {hasAchievements ? (
          <div className="skills-grid">
            {achievements.map((item, index) => (
              <div key={index} className="content-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <FiTrendingUp style={{ color: 'var(--lobster-pink)' }} />
                  <h3 style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                </div>
                {item.category && <span className="project-badge">{item.category}</span>}
                <p style={{ fontSize: '0.925rem', marginTop: '0.75rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state-card">
            <div className="empty-state-title">PROGRESS & MILESTONES</div>
            <p className="empty-state-text">
              Currently focused on building practical engineering experience through academic excellence, personal projects, and continuous learning. Future hackathon participations, academic honors, and competitive achievements will be showcased here as I progress.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
