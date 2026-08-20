import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="resume-box">
          <div className="resume-box-glow"></div>
          
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="star-symbol">✦</span>
            <span>CURRICULUM VITAE</span>
          </div>

          <h2 className="resume-title">My Resume</h2>
          <p className="resume-desc">
            Interested in my technical background? Download my resume for a structured overview of my academic foundation, project portfolio, and technical skills.
          </p>

          <a
            href="/resume.pdf"
            download="Resume_Placeholder.pdf"
            className="btn btn-primary"
            style={{ position: 'relative', zIndex: 2 }}
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
