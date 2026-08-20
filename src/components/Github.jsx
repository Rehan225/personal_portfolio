import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import portfolioData from '../data/portfolioData';

const Github = () => {
  const { personal } = portfolioData;
  const isGithubSet = Boolean(personal.github && personal.github !== "YOUR_GITHUB_URL");

  return (
    <section id="github" className="section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="github-card">
          <div className="github-info">
            <div className="github-icon-large">
              <FaGithub />
            </div>
            <h3 className="github-title">MORE ON GITHUB</h3>
            <p className="github-text">
              Explore my open-source repositories, experimental code, and ongoing projects as I continue developing my software engineering skills.
            </p>
          </div>

          <div>
            {isGithubSet ? (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGithub /> Visit GitHub Profile
              </a>
            ) : (
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaGithub /> GitHub Placeholder
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
