import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
          <img 
            src="/images/assets/DongaLogo.png" 
            alt="Donga Sri Lanka" 
            height="60" 
            className="d-inline-block align-text-top me-2"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#ffffff', fontWeight: '500' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/tours') ? 'active' : ''}`} 
                to="/tours"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#ffffff', fontWeight: '500' }}
              >
                Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} 
                to="/gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#ffffff', fontWeight: '500' }}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#ffffff', fontWeight: '500' }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/vision') ? 'active' : ''}`} 
                to="/vision"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#ffffff', fontWeight: '500' }}
              >
                Vision
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#ffffff', fontWeight: '500' }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 