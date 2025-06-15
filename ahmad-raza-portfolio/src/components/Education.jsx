import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import '../styles/components/education.css';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-highlight">Academic</span> Journey
          </h2>
          <p className="section-subtitle">
            My formal education and qualifications
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </motion.div>

        <motion.div 
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="education-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="card-badge">
                <div className="badge-icon">
                  <i className={index === education.length - 1 ? "fas fa-graduation-cap" : "fas fa-university"}></i>
                </div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <div className="degree-info">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <span className="institution">{edu.institution}</span>
                  </div>
                  <span className="duration-badge">{edu.duration}</span>
                </div>

                <div className="card-body">
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Board/University:</span>
                      <span className="detail-value">{edu.board}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Score:</span>
                      <span className="detail-value highlight">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>

              {index !== education.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;