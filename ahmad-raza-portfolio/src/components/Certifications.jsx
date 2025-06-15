import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import '../styles/components/certifications.css';

const Certifications = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      rotateX: 15
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="title-highlight">Certificate</span>
          <div className="title-decoration"></div>
        </motion.h2>
        
        <div className="certifications-display">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="certification-card"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.12)"
              }}
            >
              <div className="certification-ribbon"></div>
              
              <div className="certification-header">
                <div className="certification-badge">
                  <i className="fas fa-certificate"></i>
                </div>
                <div>
                  <h3>{cert.title}</h3>
                  <span className="issuer">{cert.issuer}</span>
                </div>
              </div>
              
              <div className="certification-body">
                <ul className="certification-items">
                  {cert.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ 
                        x: 5,
                        background: "rgba(52, 152, 219, 0.05)"
                      }}
                    >
                      <span className="item-marker"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="certification-footer">
                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-shield-alt"></i> Verify Credential
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;