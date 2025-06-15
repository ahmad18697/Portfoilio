import React from 'react';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Ahmad Raza</h3>
            <p>Computer Science and Engineering Undergraduate & Web Developer passionate about creating innovative solutions.</p>
            <div className="footer-social">
              <a href="https://github.com/ahmad18697" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://linkedin.com/in/ahmad69718" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://twitter.com/ahmadkhan_ah" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://leetcode.com/ahmad197" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <i className="fas fa-code"></i> LeetCode
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="#about"><i className="fas fa-chevron-right"></i> About</a></li>
              <li><a href="#skills"><i className="fas fa-chevron-right"></i> Skills</a></li>
              <li><a href="#projects"><i className="fas fa-chevron-right"></i> Projects</a></li>
              <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Bihar, India</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>ahmadraza993432@gmail.com</span>
              </li>
             
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ahmad Raza. All rights reserved.</p>
          <div className="footer-credits">
            <p>Designed & Built with <i className="fas fa-heart"></i> by Ahmad</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;