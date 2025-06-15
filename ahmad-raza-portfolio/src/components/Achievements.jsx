import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import '../styles/components/achievements.css';

const Achievements = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    hidden: {
      opacity: 0
    }
  };

  const itemVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 }
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'LeetCode':
        return <i className="fa-solid fa-laptop-code"></i>;
      case 'CodeChef':
        return <i className="fa-solid fa-utensils"></i>;
      case 'Coding Ninjas':
        return <i className="fa-solid fa-medal"></i>;
      case 'GeeksforGeeks':
        return <i className="fa-solid fa-laptop-code"></i>;
      case 'HackerRank':
        return <i className="fa-brands fa-hackerrank"></i>;
      default:
        return <i className="fa-solid fa-trophy"></i>;
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Achievements
        </motion.h2>

        <motion.div 
          className="achievements-grid"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievements.coding.map((ach, index) => (
            <motion.a 
              key={index} 
              className="achievement-card"
              variants={cardVariants}
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-icon">
                {getPlatformIcon(ach.platform)}
              </div>
              <h3>{ach.platform}</h3>
              <p>{ach.description}</p>
              <span className="rank-badge">{ach.rank}</span>
              {ach.link && (
                <span className="external-link">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              )}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="hackathons-section"
          initial="hidden"
          whileInView="visible"
          variants={listVariants}
          viewport={{ once: true }}
        >
          <h3 className="hackathons-title">Hackathons & Competitions</h3>
          <ul className="hackathons-list">
            {achievements.hackathons.map((hack, i) => (
              <motion.li 
                key={i}
                variants={itemVariants}
                className="hackathon-item"
              >
                <span className={`position-badge ${hack.position.toLowerCase().includes('winner') ? 'winner' : ''}`}>
                  {hack.position}
                </span>
                <div className="event-details">
                  <span className="event-name">{hack.event}</span>
                  {hack.link && (
                    <a 
                      href={hack.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="event-link"
                    >
                      <i className="fa-solid fa-link"></i> Details
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;