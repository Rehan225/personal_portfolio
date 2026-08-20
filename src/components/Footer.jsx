import React from 'react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <div className="footer-brand">{personal.name}</div>
          <div className="footer-subtitle">{personal.role}</div>
        </div>

        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-copy">
          <span>© {currentYear} {personal.name}. All rights reserved.</span>
          <span>Built with React & Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
