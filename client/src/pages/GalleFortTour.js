import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GalleFortTour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleImages = [
    '/images/assets/gallefort.jpg',
    '/images/assets/gallefort1.webp',
    '/images/assets/gallefort2.webp'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="galle-fort-tour-page">
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
                  Galle Fort Tour
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
                {/* Galle Fort Image Slider */}
                <div className="galle-images-slider mb-5">
                  <div className="slider-wrapper position-relative">
                    <div className="slider-main">
                      <img 
                        src={galleImages[currentImageIndex]} 
                        alt={`Galle Fort ${currentImageIndex + 1}`}
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
                      {galleImages.map((_, index) => (
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
                  <h3 className="tour-name">Galle Fort</h3>
                  <p className="lead mb-4">
                    Galle Fort is everybody's go-to destination when they are in Galle. The ramparts beaches, myriad of vibrant businesses and cultures that live in peace makes it the perfect living heritage.
                  </p>
                  
                  <p className="mb-4">
                    In this guided walking tour of the Galle Fort, we will be unveiling you a proud history and culture that is connected to the place. Sometimes we will be walking through the historical remnants and at other times you can sit on the ramparts gazing at the eternal Indian Ocean.
                  </p>
                  
                  <p className="mb-4">
                    Walking through lanes of Galle Fort, you would learn how and why the Fort came to existence, its earliest inhabitants, the etymology of certain place names and the architectural genius that holds the fort. Pit stops would be made at the famous Marine Museums, The Mansion Museum, The Old Breadfruit Tree, The Bastions, The Light House and anywhere that kindles your curiosity. Meanwhile, the cliff jumpers will take your breath away for seconds as they dive off a veritable cliff for living.
                  </p>
                  
                  <p className="mb-5">
                    Giving your tired legs a break, we sit down at the Rampart for a small picnic meal. Your Donga would serve a variety of sizzling hot street food from the Fort vendors. The real surprise would be the delicious gelatos from the legendary Love Gelato Unawatuna; where tropical fruits meets an Italian twist.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="tour-cta mt-5 text-center">
                  <h4>Ready to Experience Galle Fort?</h4>
                  <p className="mb-4">Book your guided walking tour today and discover the magic of this living heritage site.</p>
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

export default GalleFortTour;
