import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="section-title">About Tourism Paradise</h2>
            <p className="section-subtitle">Your trusted partner in creating unforgettable travel experiences</p>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3 className="mb-4">Discover the World with Us</h3>
            <p className="lead mb-4">
              At Tourism Paradise, we believe that travel is not just about visiting new places, 
              but about creating memories that last a lifetime. Our mission is to provide you with 
              exceptional travel experiences that combine adventure, comfort, and cultural immersion.
            </p>
            
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Expert Guides</h5>
                    <p className="text-muted mb-0">Local experts who know every hidden gem</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Safe Travel</h5>
                    <p className="text-muted mb-0">Your safety is our top priority</p>
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
                    <h5 className="mb-1">Personalized Service</h5>
                    <p className="text-muted mb-0">Tailored experiences just for you</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="fas fa-star"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Premium Quality</h5>
                    <p className="text-muted mb-0">Only the best accommodations and services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="btn btn-primary btn-lg me-3">
                Learn More
              </button>
              <button className="btn btn-outline-primary btn-lg">
                Our Team
              </button>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
              alt="Tourism Team" 
              className="img-fluid rounded"
            />
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="row mt-5 pt-5">
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="bg-white p-4 rounded shadow-custom">
              <h2 className="text-primary-custom fw-bold">500+</h2>
              <p className="text-muted mb-0">Happy Travelers</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="bg-white p-4 rounded shadow-custom">
              <h2 className="text-primary-custom fw-bold">50+</h2>
              <p className="text-muted mb-0">Destinations</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="bg-white p-4 rounded shadow-custom">
              <h2 className="text-primary-custom fw-bold">10+</h2>
              <p className="text-muted mb-0">Years Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="bg-white p-4 rounded shadow-custom">
              <h2 className="text-primary-custom fw-bold">24/7</h2>
              <p className="text-muted mb-0">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 