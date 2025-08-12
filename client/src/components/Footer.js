import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5>Donga Sri Lanka</h5>
            <p>
              Experience authentic Sri Lankan adventures with our curated tours. 
              We specialize in sustainable tourism that benefits local communities.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tours">Tours</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/vision">Vision</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Popular Tours</h5>
            <ul className="footer-links">
              <li>Galle Fort Walking Tour</li>
              <li>Sinharaja Rainforest Trek</li>
              <li>Koggala Lake & Stilt Fishing</li>
              <li>Moonstone and Waterfall</li>
              <li>Pottery Experience</li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Contact Information</h5>
            <div className="contact-info">
              <p>
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto:dongasrilanka@gmail.com">dongasrilanka@gmail.com</a>
              </p>
              <p>
                <i className="fab fa-whatsapp me-2"></i>
                <a href="tel:+94766391036">+94 76 6391036</a>
              </p>
              <p>
                <i className="fas fa-map-marker-alt me-2"></i>
                Southern Province, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>&copy; 2024 Donga Sri Lanka. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="language-selector">
                <span className="me-2">Language:</span>
                <select className="form-select form-select-sm d-inline-block w-auto">
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="it">Italian</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 