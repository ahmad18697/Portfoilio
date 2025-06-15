import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import '../styles/components/experience.css';

const Experience = () => {
  const cardVariants = {
    offscreen: {
      x: index => (index % 2 === 0 ? -50 : 50),
      opacity: 0,
      scale: 0.95
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="title-decorator">✦</span> My Experiences <span className="title-decorator">✦</span>
        </motion.h2>
        
        <div className="timeline-scroll">
          <div className="timeline-track">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-card"
                custom={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="timeline-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dot"></div>
                </div>
                
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="company-logo"></div>
                    <div>
                      <h3>{exp.position}</h3>
                      <div className="company-badge">
                        <span>{exp.company}</span>
                        <div className="tenure-badge">{exp.duration}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="experience-body">
                    <ul className="responsibilities">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li 
                          key={i}
                          whileHover={{ 
                            x: 5,
                            background: 'rgba(52, 152, 219, 0.05)'
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="responsibility-marker">
                            <div className="marker-inner"></div>
                          </div>
                          <p>{item}</p>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {exp.skills && (
                      <div className="skills-wheel">
                        {exp.skills.map((skill, i) => (
                          <motion.div 
                            key={i}
                            className="skill-spoke"
                            style={{ 
                              transform: `rotate(${i * (360/exp.skills.length)}deg)`,
                              height: `${80 + (i % 3) * 20}px`
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="skill-tag">{skill}</div>
                          </motion.div>
                        ))}
                        <div className="wheel-center"></div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;