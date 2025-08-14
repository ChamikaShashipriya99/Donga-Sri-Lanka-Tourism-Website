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
      {/* Hero Section with Image Slider */}
      <section className="moonstone-hero section">
        <div className="image-slider-container">
          <div className="image-slider">
            <img 
              src={moonstoneImages[currentImageIndex]} 
              alt={`Moonstone and Waterfall ${currentImageIndex + 1}`}
              className="slider-image"
            />
            <div className="slider-overlay">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto text-center">
                    <h1 className="hero-title">Moonstone and Waterfall</h1>
                    <p className="hero-subtitle">Discover the magic of moonstones and the beauty of Andahalena Ella waterfall</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slider Navigation */}
          <button className="slider-nav prev" onClick={prevImage}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="slider-nav next" onClick={nextImage}>
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Slider Indicators */}
          <div className="slider-indicators">
            {moonstoneImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

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
