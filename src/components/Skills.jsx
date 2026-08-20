import React from 'react';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Programming Languages', items: skills.languages },
    { title: 'Machine Learning & AI', items: skills.machineLearning },
    { title: 'Tools & Utilities', items: skills.tools },
    { title: 'Databases & Other', items: skills.databases },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="star-symbol">✦</span>
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="content-card skill-category-card">
              <h3 className="skill-category-title">
                <span className="star-symbol">✦</span>
                {category.title}
              </h3>
              <div className="skill-tags-container">
                {category.items.map((skill, itemIdx) => (
                  <span key={itemIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
