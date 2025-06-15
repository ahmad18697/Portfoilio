import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import '../styles/components/projects.css';

const Projects = () => {
  const cardVariants = {
    offscreen: { 
      opacity: 0,
      scale: 0.95
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="title-highlight">Code</span> Creations
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
              }}
            >
              <div className="project-badge">
                <span>{project.technologies[0]}</span>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>
                    <span className="title-decoration"></span>
                    {project.title}
                  </h3>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="tech-cloud">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="tech-tag"
                      style={{
                        fontSize: `${0.7 + (i * 0.1)}rem`,
                        opacity: `${0.7 + (i * 0.1)}`,
                        transform: `rotate(${-5 + (i * 5)}deg)`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  {project.liveUrl && (
                    <motion.a 
                      href={project.liveUrl}
                      className="action-btn demo"
                      whileHover={{ 
                        backgroundPosition: 'right center',
                        boxShadow: "0 5px 15px rgba(52, 152, 219, 0.4)"
                      }}
                    >
                      <span>🚀 Live Demo</span>
                    </motion.a>
                  )}
                  {project.codeUrl && (
                    <motion.a 
                      href={project.codeUrl}
                      className="action-btn code"
                      whileHover={{ 
                        backgroundPosition: 'right center',
                        boxShadow: "0 5px 15px rgba(44, 62, 80, 0.3)"
                      }}
                    >
                      <span>👨‍💻 View Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;