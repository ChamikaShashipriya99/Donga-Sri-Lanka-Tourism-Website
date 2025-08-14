import React, { useEffect } from 'react';

const Vision = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vision-page">
      {/* Hero Section */}
      <section className="vision-hero section">
        <div className="vision-hero-background">
          <video
            className="vision-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="https://videos.pexels.com/video-files/32614034/13908348_2560_1440_60fps.mp4" type="video/mp4" />
          </video>
          <div className="vision-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="section-title text-white">Our Vision</h1>
              <p className="section-subtitle text-white">
                Building sustainable tourism for a better Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="vision-content">
                <h2>Empowering Local Communities Through Tourism</h2>
                <p className="lead">
                  At Donga Sri Lanka, we believe that sustainable tourism is the key to preserving 
                  our beautiful country while supporting local communities and protecting our natural heritage.
                </p>

                <div className="vision-points mt-5">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="vision-card text-center p-4">
                        <div className="vision-icon mb-3">
                          <i className="fas fa-leaf fa-3x text-primary"></i>
                        </div>
                        <h4>Environmental Conservation</h4>
                        <p>
                          We are committed to protecting Sri Lanka's natural beauty through 
                          eco-friendly practices and responsible tourism.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="vision-card text-center p-4">
                        <div className="vision-icon mb-3">
                          <i className="fas fa-hands-helping fa-3x text-primary"></i>
                        </div>
                        <h4>Community Development</h4>
                        <p>
                          Our tours directly benefit local communities by providing employment 
                          opportunities and supporting local businesses.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="vision-card text-center p-4">
                        <div className="vision-icon mb-3">
                          <i className="fas fa-graduation-cap fa-3x text-primary"></i>
                        </div>
                        <h4>Cultural Preservation</h4>
                        <p>
                          We help preserve Sri Lankan traditions and culture by sharing 
                          authentic experiences with visitors.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="vision-card text-center p-4">
                        <div className="vision-icon mb-3">
                          <i className="fas fa-globe fa-3x text-primary"></i>
                        </div>
                        <h4>Sustainable Growth</h4>
                        <p>
                          We promote tourism that grows responsibly without compromising 
                          the future of our beautiful island nation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mission-statement mt-5 p-4 bg-light rounded">
                  <h3>Our Mission</h3>
                  <p>
                    To provide authentic, sustainable tourism experiences that showcase the real Sri Lanka, 
                    while ensuring that our operations benefit local communities and preserve our natural 
                    and cultural heritage for future generations.
                  </p>
                </div>

                <div className="values mt-5">
                  <h3>Our Core Values</h3>
                  <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                      <h5><i className="fas fa-heart text-primary me-2"></i>Authenticity</h5>
                      <p>We believe in showing the real Sri Lanka, not just tourist attractions.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <h5><i className="fas fa-shield-alt text-primary me-2"></i>Responsibility</h5>
                      <p>We take responsibility for the impact of tourism on our environment and communities.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <h5><i className="fas fa-star text-primary me-2"></i>Excellence</h5>
                      <p>We strive for excellence in every tour experience we provide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Join Us in Our Mission</h2>
              <p className="lead mb-4">
                Experience Sri Lanka the responsible way and be part of our sustainable tourism journey.
              </p>
              <a href="/tours" className="btn btn-light btn-lg me-3">
                Book a Tour
              </a>
              <a href="/contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
