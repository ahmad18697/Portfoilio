import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import '../styles/components/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-gradient">Technical</span> Skills
          </h2>
          <p className="section-subtitle">
            Technologies I have worked with
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <motion.div 
              key={index}
              className="skill-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ 
                  background: `linear-gradient(135deg, 
                    hsl(${index * 60}, 80%, 60%), 
                    hsl(${index * 60 + 30}, 80%, 50%))`
                }}>
                  <i className={skillCategory.icon || "fas fa-code"}></i>
                </div>
                <h3>{skillCategory.category}</h3>
              </div>

              <ul className="skills-list">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div 
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        style={{
                          background: `linear-gradient(90deg,
                            hsl(${index * 60}, 80%, 60%),
                            hsl(${index * 60 + 30}, 80%, 50%))`,
                          boxShadow: `0 0 10px hsla(${index * 60}, 80%, 60%, 0.5)`
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;