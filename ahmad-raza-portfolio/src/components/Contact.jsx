import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://ahmadraza-ashy.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.section 
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Let's <span className="highlight-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
           Got an idea or project? Let's make it happen — message me anytime.
          </motion.p>
          <motion.div 
            className="header-decoration"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="info-card">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-details">
                  <h3>Email Me</h3>
                  <a href="mailto:ahmadraza993432@gmail.com">ahmadraza993432@gmail.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="method-details">
                  <h3>Location</h3>
                  <p>Bihar, India</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <motion.a 
                    href="https://github.com/ahmad18697" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <i className="fab fa-github"></i>
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com/in/ahmad69718" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com/ahmadkhan_ah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength="2"
                whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)" }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)" }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <motion.textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                minLength="10"
                whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)" }}
              ></motion.textarea>
            </div>

            <motion.button 
              type="submit" 
              className="submit-btn"
              disabled={status === 'submitting'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'submitting' ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  Send Message <i className="fas fa-paper-plane"></i>
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.div 
                className="form-message success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-check-circle"></i> Message sent successfully!
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                className="form-message error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-exclamation-circle"></i> Error sending message. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;