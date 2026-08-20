import React from 'react';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import portfolioData from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="star-symbol">✦</span>
            <span>FEATURED WORK</span>
          </div>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-container">
          {projects.map((project) => {
            const hasGithub = Boolean(project.github && project.github !== "");
            const hasLiveDemo = Boolean(project.liveDemo && project.liveDemo !== "");

            return (
              <div key={project.id} className="project-card">
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <div className="project-header-meta">
                    <span className="project-category">{project.category}</span>
                    {project.type && <span className="project-badge">{project.type}</span>}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <FaGithub /> GitHub Repository
                      </a>
                    )}

                    {hasLiveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <FaArrowUpRightFromSquare /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
