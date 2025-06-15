import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="about-content"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="about-image" variants={item}>
            <div className="profile-container">
              <img 
                src="/Linkd.jpg" 
                alt="Ahmad Raza" 
                className="profile-image"
                loading="lazy"
              />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <div className="about-text">
            <motion.h2 className="section-title" variants={item}>
              About <span>Me</span>
            </motion.h2>

            <motion.p variants={item}>
              I'm a Computer Science and Engineering undergraduate with expertise in full-stack web development and AI integration. 
              I specialize in building scalable applications that solve real-world problems through innovative 
              technical solutions.
            </motion.p>
            
            <motion.p variants={item}>
              With experience in both team collaborations and independent projects, I thrive in fast-paced 
              environments that challenge me to grow. My passion lies in creating seamless user experiences 
              powered by cutting-edge technologies.
            </motion.p>

            <motion.div className="details-grid" variants={container}>
              <motion.div className="detail-item" variants={item}>
                <div className="detail-icon">
                  <FaUser />
                </div>
                <div>
                  <h4>Name</h4>
                  <p>Ahmad Raza</p>
                </div>
              </motion.div>

              <motion.div className="detail-item" variants={item}>
                <div className="detail-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ahmadraza993432@gmail.com">Email </a>
                </div>
              </motion.div>

              <motion.div className="detail-item" variants={item}>
                <div className="detail-icon">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4>Education</h4>
                  <p>B.Tech in Computer Science and Engineering.</p>
                </div>
              </motion.div>

              <motion.div className="detail-item" variants={item}>
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Bihar, India</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;