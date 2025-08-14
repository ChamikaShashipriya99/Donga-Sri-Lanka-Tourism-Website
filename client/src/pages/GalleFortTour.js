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
      {/* Hero Section with Image Slider */}
      <section className="galle-hero section">
        <div className="image-slider-container">
          <div className="image-slider">
            <img 
              src={galleImages[currentImageIndex]} 
              alt={`Galle Fort ${currentImageIndex + 1}`}
              className="slider-image"
            />
            <div className="slider-overlay">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto text-center">
                    <h1 className="hero-title">Galle Fort Walking Tour</h1>
                    <p className="hero-subtitle">Discover the living heritage of Sri Lanka's most iconic coastal fortress</p>
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
            {galleImages.map((_, index) => (
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
                  Galle Fort Tour
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
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
