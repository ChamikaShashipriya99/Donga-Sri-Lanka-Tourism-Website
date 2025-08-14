import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // PROTECTION SYSTEM FOR MAKER CREDIT
  useEffect(() => {
    const protectCredit = () => {
      const creditLink = document.querySelector('.protected-credit-link');
      const creditContainer = document.querySelector('.col-md-4:nth-child(2)');
      
      if (!creditLink || !creditContainer) {
        console.warn('⚠️ PROTECTED CREDIT DETECTED AS MISSING - RESTORING...');
        
        // Restore the protected credit
        const restoredCredit = `
          <p style="margin: 0; color: #999999; font-size: 0.9rem;">
            Made with <i class="fas fa-heart" style="color: #ff8c00; margin: 0 0.25rem;"></i> by 
            <a href="https://github.com/ChamikaShashipriya99" target="_blank" rel="noopener noreferrer" 
               style="color: #ff8c00; text-decoration: none; font-weight: 600; transition: color 0.3s ease;"
               class="protected-credit-link" data-protected="true" data-developer="Chamika Shashipriya"
               data-github="https://github.com/ChamikaShashipriya99" data-project="Donga Sri Lanka Tourism"
               title="Protected Developer Credit - Do Not Remove">
              Chamika Shashipriya
            </a>
          </p>
        `;
        
        if (creditContainer) {
          creditContainer.innerHTML = restoredCredit;
          console.log('✅ PROTECTED CREDIT RESTORED SUCCESSFULLY');
        }
      }
    };

    // Check every 2 seconds
    const protectionInterval = setInterval(protectCredit, 2000);
    
    // Also check on DOM changes
    const observer = new MutationObserver(protectCredit);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(protectionInterval);
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="footer" style={{
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      paddingTop: '3rem',
      paddingBottom: '2rem',
      marginTop: '0',
      borderTop: '3px solid #ff8c00'
    }}>
      <div className="container">
        {/* Logo Section */}
        <div className="footer-logo-section text-center mb-5" style={{
          paddingBottom: '2rem',
          borderBottom: '1px solid #333'
        }}>
          <div className="footer-logos d-flex justify-content-center align-items-center gap-5 flex-wrap">
            <img 
              src="/images/assets/DongaLogo.png" 
              alt="Donga Sri Lanka" 
              className="footer-main-logo"
              style={{ 
                height: '70px', 
                width: 'auto',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            <img 
              src="/images/assets/footerlogo1.jpeg" 
              alt="Footer Logo 1" 
              className="footer-logo-1"
              style={{ 
                height: '55px', 
                width: 'auto',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            <img 
              src="/images/assets/footerlogo2.jpeg" 
              alt="Footer Logo 2" 
              className="footer-logo-2"
              style={{ 
                height: '55px', 
                width: 'auto',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
        </div>

        <div className="footer-content" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div className="footer-section">
            <h5 style={{
              color: '#ff8c00',
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              borderBottom: '2px solid #ff8c00',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>Donga Sri Lanka</h5>
            <p style={{
              lineHeight: '1.6',
              color: '#cccccc',
              marginBottom: '1.5rem'
            }}>
              Experience authentic Sri Lankan adventures with our curated tours. 
              We specialize in sustainable tourism that benefits local communities.
            </p>
            <div className="social-links" style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="https://www.facebook.com/DongaSriLanka" target="_blank" rel="noopener noreferrer" className="social-link" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#1877f2',
                color: 'white',
                borderRadius: '50%',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '1.1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#166fe5';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 12px rgba(24,119,242,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1877f2';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/@donga1020" target="_blank" rel="noopener noreferrer" className="social-link" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#ff0000',
                color: 'white',
                borderRadius: '50%',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '1.1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#cc0000';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 12px rgba(255,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#ff0000';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://wa.me/94766391036" target="_blank" rel="noopener noreferrer" className="social-link" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#25d366',
                color: 'white',
                borderRadius: '50%',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '1.1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1ea952';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 12px rgba(37,211,102,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#25d366';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h5 style={{
              color: '#ff8c00',
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              borderBottom: '2px solid #ff8c00',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>Quick Links</h5>
            <ul className="footer-links" style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { to: '/', text: 'Home' },
                { to: '/tours', text: 'Tours' },
                { to: '/about', text: 'About Us' },
                { to: '/vision', text: 'Vision' },
                { to: '/contact', text: 'Contact Us' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <Link to={link.to} style={{
                    color: '#cccccc',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ff8c00';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#cccccc';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.8rem', color: '#ff8c00' }}></i>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5 style={{
              color: '#ff8c00',
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              borderBottom: '2px solid #ff8c00',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>Popular Tours</h5>
            <ul className="footer-links" style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                'Galle Fort Walking Tour',
                'Sinharaja Rainforest Trek',
                'Koggala Lake & Stilt Fishing',
                'Moonstone and Waterfall',
                'Pottery Experience'
              ].map((tour, index) => (
                <li key={index} style={{ 
                  marginBottom: '0.75rem',
                  color: '#cccccc',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-map-pin me-2" style={{ color: '#ff8c00', fontSize: '0.8rem' }}></i>
                  {tour}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5 style={{
              color: '#ff8c00',
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              borderBottom: '2px solid #ff8c00',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>Contact Information</h5>
            <div className="contact-info">
              <p style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                color: '#cccccc'
              }}>
                <i className="fas fa-envelope-open-text me-3" style={{ color: '#ff8c00', width: '20px' }}></i>
                <a href="mailto:dongasrilanka@gmail.com" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff8c00'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
                  dongasrilanka@gmail.com
                </a>
              </p>
              <p style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                color: '#cccccc'
              }}>
                <i className="fas fa-phone-alt me-3" style={{ color: '#ff8c00', width: '20px' }}></i>
                <a href="tel:+94766391036" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff8c00'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
                  +94 76 6391036
                </a>
              </p>
              <p style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                color: '#cccccc'
              }}>
                <i className="fas fa-map-marker-alt me-3" style={{ color: '#ff8c00', width: '20px' }}></i>
                Southern Province, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{
          borderTop: '1px solid #333',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <div className="row align-items-center">
            <div className="col-md-4" style={{ marginBottom: '1rem' }}>
              <p style={{
                margin: 0,
                color: '#999999',
                fontSize: '0.9rem'
              }}>&copy; 2025 Donga, Sri Lanka. All rights reserved.</p>
            </div>
            <div className="col-md-4" style={{ marginBottom: '1rem' }}>
              <p style={{
                margin: 0,
                color: '#999999',
                fontSize: '0.9rem'
              }}>
                {/* PROTECTED MAKER CREDIT - DO NOT REMOVE */}
                {/* 
                  This credit line is protected by multiple security measures.
                  Removing this credit violates the terms of use and may result in legal action.
                  Developer: Chamika Shashipriya
                  GitHub: https://github.com/ChamikaShashipriya99
                  Project: Donga Sri Lanka Tourism Website
                */}
                Made with <i className="fas fa-heart" style={{ color: '#ff8c00', margin: '0 0.25rem' }}></i> by{' '}
                <a 
                  href="https://github.com/ChamikaShashipriya99" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    color: '#ff8c00',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#e67e00'}
                  onMouseLeave={(e) => e.target.style.color = '#ff8c00'}
                  className="protected-credit-link"
                  data-protected="true"
                  data-developer="Chamika Shashipriya"
                  data-github="https://github.com/ChamikaShashipriya99"
                  data-project="Donga Sri Lanka Tourism"
                  title="Protected Developer Credit - Do Not Remove"
                >
                  Chamika Shashipriya
                </a>
                {/* END PROTECTED MAKER CREDIT */}
              </p>
            </div>
            <div className="col-md-4">
              <div className="language-selector" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#999999', fontSize: '0.9rem' }}>Language:</span>
                <select className="form-select form-select-sm" style={{
                  width: 'auto',
                  backgroundColor: '#333',
                  color: '#ffffff',
                  border: '1px solid #555',
                  borderRadius: '4px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.9rem'
                }}>
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