import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoonstoneTour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const moonstoneImages = [
    '/images/assets/moonstone.jpeg',
    '/images/assets/moonstone1.jpeg',
    '/images/assets/moonstone2.jpeg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === moonstoneImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? moonstoneImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="moonstone-tour-page">
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
                  Moonstone and Waterfall
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
                {/* Moonstone Images Slider */}
                <div className="moonstone-images-slider mb-5">
                  <div className="slider-wrapper position-relative">
                    <div className="slider-main">
                      <img 
                        src={moonstoneImages[currentImageIndex]} 
                        alt={`Moonstone and Waterfall ${currentImageIndex + 1}`}
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
                      {moonstoneImages.map((_, index) => (
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
                  <h3 className="tour-name">Moonstone and Waterfall</h3>
                  <p className="lead mb-4">
                    Moonstones are considered as stones of good luck, health and longevity. However, the story of surfacing a moonstone deserves more recognition.
                  </p>
                  
                  <p className="mb-4">
                    In this immersive tour, we will drive through the semi-urban villages of Baddegama and Elpitiya through paddy fields and cinnamon plantations. Our first destination would be Meetiyagoda, the only location in Sri Lanka where the milky rays of the moon meet the rock bed forming the world's best Moonstone. You will witness the laborious process of mining, cleaning and polishing of moonstones. If you are willing you could swap duties with a miner to wash and clean the moonstones as well!
                  </p>
                  
                  <p className="mb-4">
                    With the luck from the moonstones, we drive up to Andahalena Ella whose name translates as "the waterfall that cries". Be it a cry or a singing, the small trek up to the waterfall is quite an adventure. You realize that life is such a paradox when you meet the gigantic and magnificent waterfall; a scene that subverts the meaning of its sad name. Lunch will be from an ambitious caterer from the village who dreams of converting his home to a small hotel.
                  </p>
                  
                  <p className="mb-5">
                    On the way back, we will be driving along the coast at times stopping for a King Coconut or a glass of citrus. The remnants of the Tsunami would be on your left hand side and these would remind how lucky you are present.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="tour-cta mt-5 text-center">
                  <h4>Ready to Discover Moonstones and Waterfalls?</h4>
                  <p className="mb-4">Book your moonstone and waterfall adventure today and experience the magic of Sri Lanka's natural wonders.</p>
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

export default MoonstoneTour;
