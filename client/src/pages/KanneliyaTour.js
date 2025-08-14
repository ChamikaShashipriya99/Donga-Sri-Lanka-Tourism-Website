import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KanneliyaTour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const kanneliyaImages = [
    '/images/assets/kanneliya.jpeg',
    '/images/assets/kanneliya2.jpg', // Using the same image for now, you can add more later
    '/images/assets/kanneliya1.jpeg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === kanneliyaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? kanneliyaImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kanneliya-tour-page">
      {/* Tour Overview Section */}
      <section className="tour-overview py-5">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div className="breadcrumb-nav mb-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="breadcrumb-link">
                    <i className="fas fa-home me-1"></i>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/tours" className="breadcrumb-link">
                    Tours
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Kanneliya Rainforest Trek
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
                {/* Kanneliya Images Slider */}
                <div className="kanneliya-images-slider mb-5">
                  <div className="slider-wrapper position-relative">
                    <div className="slider-main">
                      <img 
                        src={kanneliyaImages[currentImageIndex]} 
                        alt={`Kanneliya Rainforest Trek ${currentImageIndex + 1}`}
                        className="img-fluid rounded shadow"
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                      />
                    </div>
                    
                    {/* Slider Navigation */}
                    <button 
                      className="slider-nav-btn prev-btn" 
                      onClick={prevImage}
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <button 
                      className="slider-nav-btn next-btn" 
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    
                    {/* Slider Indicators */}
                    <div className="slider-dots" style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '8px',
                      zIndex: 10
                    }}>
                      {kanneliyaImages.map((_, index) => (
                        <button
                          key={index}
                          className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            border: 'none',
                            background: index === currentImageIndex ? '#007bff' : 'rgba(255,255,255,0.6)',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="overview-text">
                  <h3 className="tour-name">Kanneliya Rainforest Trek</h3>
                  <p className="lead mb-4">
                    Kanneliya is one of our first ever sustainable tourism ventures where we partnered with local guides from the rainforest area. This includes female guides as well.
                  </p>
                  
                  <p className="mb-4">
                    In this easy trail we will be trekking through Kanneliya rainforest to reach Anagimala Ella, a magnificent waterfall which is also home to a variety of endemic aquatic species. The trail is soothing relaxing and rejuvenating because we expose our bodies to probably the freshest air and water in the island. The orchestra of the birds and crickets coupled with frolicking streams would quickly bring a sense of calm to the tired souls.
                  </p>
                  
                  <p className="mb-4">
                    Back in our local guide's home, we sit down for a warm lunch prepared by his or her family using an endless list of ingredients such as ferns, yams, greens and, freshwater prawns. If you have a sweet tooth, there is a wide range of products made from the Kitul Tree, a member of the palm family that could be commonly seen in the rainforest areas. Kitul treacle and Jaggery tasting could be a memorable experience that you could only experience in Sri Lanka.
                  </p>
                  
                  <p className="mb-5">
                    On the way home, we drive through a green mosaic of tea and rubber plantations with pitstops here and there to have a peek into the lives of the locals. After all, life on this island is a paradox; a beautiful paradox that is poetic.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="tour-cta mt-5 text-center">
                  <h4>Ready to Experience Sustainable Rainforest Tourism?</h4>
                  <p className="mb-4">Book your Kanneliya rainforest trek today and support community-based sustainable tourism in Sri Lanka.</p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <button className="btn btn-primary btn-lg">
                      <i className="fas fa-calendar me-2"></i>
                      Book This Tour
                    </button>
                    <button className="btn btn-outline-primary btn-lg">
                      <i className="fas fa-phone me-2"></i>
                      Contact Us
                    </button>
                    <Link to="/tours" className="btn btn-outline-secondary btn-lg">
                      <i className="fas fa-arrow-left me-2"></i>
                      Back to Tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KanneliyaTour;
