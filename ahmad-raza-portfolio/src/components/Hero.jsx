import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/hero.css';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h1 variants={textVariants}>
              Hi, I'm <span className="name-highlight">Ahmad Raza</span>
            </motion.h1>
            
            <motion.h2 variants={textVariants}>
              Computer Science Undergraduate & Web Developer
            </motion.h2>
            
            <motion.p variants={textVariants}>
              Passionate about creating scalable web applications and integrating AI to enhance user experiences.
            </motion.p>
            
            <motion.div className="hero-cta" variants={textVariants}>
              <motion.a 
                href="#projects" 
                className="btn primary-btn"
                whileHover={{ y: -3 }}
              >
                View My Work
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn outline-btn"
                whileHover={{ y: -3 }}
              >
                Contact Me
              </motion.a>
              
              <motion.a 
                href="/Resume.1.pdf" 
                className="btn resume-btn"
                target="_blank"
                whileHover={{ y: -3 }}
              >
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile-image-container">
              <img 
                src="/Linkd.jpg" 
                alt="Ahmad Raza - Professional Profile" 
                className="profile-image"
              />
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;