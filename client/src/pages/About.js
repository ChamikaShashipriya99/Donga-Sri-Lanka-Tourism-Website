import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const videoRef = useRef(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          console.log('About video playing successfully');
        } catch (error) {
          console.log('About video autoplay failed:', error);
          const handleUserInteraction = () => {
            video.play().catch(e => console.log('Still cannot play:', e));
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          };
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        }
      };
      
      playVideo();
    }
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useState(null); // keep React import used

  return (
    <div>
      {/* Hero Section with Background */}
      <section className="about-hero section">
        <div className="about-hero-background">
          {videoLoading && (
            <div className="video-loading">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {videoError && (
            <div className="video-error">
              <p className="text-light">Video unavailable</p>
            </div>
          )}
          <video
            ref={videoRef}
            src="/videos/about/about-bg-video.mp4"
            muted
            loop
            playsInline
            autoPlay
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1
            }}
            onLoadedData={() => setVideoLoading(false)}
            onError={() => setVideoError(true)}
          />
          <div className="about-hero-overlay" style={{ zIndex: 2 }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="section-title text-white">About Donga Sri Lanka</h1>
              <p className="section-subtitle text-white">Your trusted partner in authentic Sri Lankan experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="about-content single-column">
            <div className="about-text">
              <h3 className="mb-4">Discover Sri Lanka with Us</h3>
              <p className="lead mb-4">
                At Donga Sri Lanka, we believe that travel is not just about visiting new places, 
                but about creating authentic connections with local communities and experiencing the 
                real culture of this beautiful island nation.
              </p>
              
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-map-marked-alt"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Local Expert Guides</h5>
                      <p className="text-muted mb-0">Local experts who know every hidden gem of Sri Lanka</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Safe & Responsible Travel</h5>
                      <p className="text-muted mb-0">Your safety and environmental responsibility are our priorities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-heart"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Authentic Experiences</h5>
                      <p className="text-muted mb-0">Real Sri Lankan culture, not just tourist attractions</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-leaf"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Sustainable Tourism</h5>
                      <p className="text-muted mb-0">Supporting local communities and protecting nature</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Link to="/tours" className="btn btn-primary btn-lg me-3">
                  View Our Tours
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">Meet the Donga Team</h2>
              <p className="section-subtitle">The passionate individuals behind your unforgettable Sri Lankan adventures</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center mb-4">
              <div className="team-member">
                <div className="team-photo mb-3" style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '0s'
                }}>
                  <img 
                    src="/images/team/Naveen.png" 
                    alt="Naveen - Operations and PR"
                    className="rounded-circle mx-auto"
                    style={{
                      width: '150px', 
                      height: '150px', 
                      objectFit: 'cover',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                <h5 className="fw-bold mb-1">Naveen</h5>
                <p className="text-muted mb-0">Operations and PR</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 text-center mb-4">
              <div className="team-member">
                <div className="team-photo mb-3" style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '0.5s'
                }}>
                  <img 
                    src="/images/team/Umendra.png" 
                    alt="Umendra - Marketing and PR"
                    className="rounded-circle mx-auto"
                    style={{
                      width: '150px', 
                      height: '150px', 
                      objectFit: 'cover',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                <h5 className="fw-bold mb-1">Umendra</h5>
                <p className="text-muted mb-0">Marketing and PR</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 text-center mb-4">
              <div className="team-member">
                <div className="team-photo mb-3" style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '1s'
                }}>
                  <img 
                    src="/images/team/Kaveen.png" 
                    alt="Kaveen - Logistics and Operations"
                    className="rounded-circle mx-auto"
                    style={{
                      width: '150px', 
                      height: '150px', 
                      objectFit: 'cover',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                <h5 className="fw-bold mb-1">Kaveen</h5>
                <p className="text-muted mb-0">Logistics and Operations</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 text-center mb-4">
              <div className="team-member">
                <div className="team-photo mb-3" style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '1.5s'
                }}>
                  <img 
                    src="/images/team/Dilum.png" 
                    alt="Dilum - Digital Marketing and Online Strategy"
                    className="rounded-circle mx-auto"
                    style={{
                      width: '150px', 
                      height: '150px', 
                      objectFit: 'cover',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                <h5 className="fw-bold mb-1">Dilum</h5>
                <p className="text-muted mb-0">Digital Marketing and Online Strategy</p>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .team-photo {
            transition: transform 0.3s ease;
          }
          
          .team-photo:hover {
            transform: translateY(-15px) scale(1.05);
          }
        `}</style>
      </section>
    </div>
  );
};

export default About; 