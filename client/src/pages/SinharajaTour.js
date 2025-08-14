import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SinharajaTour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sinharajaImages = [
    '/images/assets/sinharaja.jpeg',
    '/images/assets/sinharaja1.jpeg', // Using the same image for now, you can add more later
    '/images/assets/sinharaja2.jpeg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === sinharajaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? sinharajaImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sinharaja-tour-page">
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
                  Sinharaja Rainforest Trek
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
                {/* Sinharaja Images Slider */}
                <div className="sinharaja-images-slider mb-5">
                  <div className="slider-wrapper position-relative">
                    <div className="slider-main">
                      <img 
                        src={sinharajaImages[currentImageIndex]} 
                        alt={`Sinharaja Rainforest Trek ${currentImageIndex + 1}`}
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
                      {sinharajaImages.map((_, index) => (
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
                  <h3 className="tour-name">Sinharaja Rainforest Trek</h3>
                  <p className="lead mb-4">
                    Sinharaja is Sri Lanka's largest rainforest. It is a UNESCO protected bio-diversity site which is rich in virgin water springs waterfalls and endemic wildlife.
                  </p>
                  
                  <p className="mb-4">
                    This trek is a specialised waterfall trek through Sinharaja; Sri Lanka's largest rainforest complex which spreads over three districts. Though there are many trails to explore Sinharaja, Pitadeniya is the least frequented yet the most rich in pure swimmable water ways. Buddhika, the local trek guide who is a veteran naturalist will usher you through the rainforest keeping an eagle's eye for endemic birds, plants and insects.
                  </p>
                  
                  <p className="mb-4">
                    You will meet refreshing virgin water springs and a few mini waterfalls where you can have a swim safely! A free doctor fish massage is guaranteed in these icy cold pools. According to the villagers, the water of these pools are medicinal due to their contact with the roots of medicinal plants. Back on the trail, Buddhika might surprise you with a green pit viper or a giant Tarantula because they seem to find him wherever he goes.
                  </p>
                  
                  <p className="mb-5">
                    Lunch would be full of local delicacies like forest mushroom, jak fruit, cassava, ferns and fresh fruits prepared by Buddhika's family. If you are lucky, toddy, the Sri Lankan booze would be on the table. This hospitality is too good to be missed.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="tour-cta mt-5 text-center">
                  <h4>Ready to Trek Through Sinharaja Rainforest?</h4>
                  <p className="mb-4">Book your rainforest adventure today and experience the untouched beauty of Sri Lanka's largest rainforest.</p>
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

export default SinharajaTour;
