import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content animate-fade-in">
            <div className="hero-eyebrow">
              <span className="star-symbol">✦</span>
              <span>HELLO, I'M</span>
            </div>

            <h1 className="hero-name">{personal.name}</h1>
            <h2 className="hero-role">{personal.role}</h2>
            <p className="hero-intro">{personal.bio}</p>

            <div className="hero-actions">
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, '#projects')}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn btn-secondary"
                onClick={(e) => handleScrollTo(e, '#contact')}
              >
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              {personal.github && personal.github !== "YOUR_GITHUB_URL" ? (
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-social-link"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
              ) : (
                <a 
                  href="#github" 
                  className="hero-social-link"
                  aria-label="GitHub Section"
                  onClick={(e) => handleScrollTo(e, '#github')}
                >
                  <FaGithub />
                </a>
              )}

              {personal.linkedin && personal.linkedin !== "YOUR_LINKEDIN_URL" ? (
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-social-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              ) : (
                <a 
                  href="#contact" 
                  className="hero-social-link"
                  aria-label="LinkedIn Section"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                >
                  <FaLinkedinIn />
                </a>
              )}

              <a 
                href={`mailto:${personal.email}`} 
                className="hero-social-link"
                aria-label="Email Contact"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <div className="hero-visual-card">
              <div className="visual-backdrop-glow"></div>

              <div className="visual-top-bar">
                <span className="visual-tag">DEVELOPER MOTIF</span>
                <span className="star-symbol">✦</span>
              </div>

              <div className="visual-motif">
                <div className="motif-diamond-outer">
                  <div className="motif-diamond-inner">
                    <span className="motif-center-star">✦</span>
                  </div>
                </div>
              </div>

              <div className="visual-bottom-info">
                <span>AI/ML and GenAI</span>
                <span>EARLY CAREER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
