import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-highlight">Ahmad</span> Raza
        </a>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Menu"
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>

        <nav 
          className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <ul className="menu-list">
            {['Home', 'About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <li key={item} className="menu-item">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="menu-link"
                  onClick={closeAllMenus}
                >
                  {item}
                </a>
              </li>
            ))}
            
            <li className="menu-item dropdown" ref={dropdownRef}>
              <button 
                className={`dropdown-toggle ${dropdownOpen ? 'active' : ''}`}
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                Journey
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                {['Education', 'Certifications', 'Achievements'].map((item) => (
                  <li key={item} className="dropdown-item">
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="dropdown-link"
                      onClick={closeAllMenus}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            
            <li className="menu-item">
              <a 
                href="#contact" 
                className="menu-link menu-cta"
                onClick={closeAllMenus}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;