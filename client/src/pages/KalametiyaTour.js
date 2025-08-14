import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KalametiyaTour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const kalametiyaImages = [
    '/images/assets/kalametiya.jpeg',
    '/images/assets/kalametiya.jpeg', // Using the same image for now, you can add more later
    '/images/assets/kalametiya.jpeg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === kalametiyaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? kalametiyaImages.length - 1 : prevIndex - 1
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
    <div className="kalametiya-tour-page">
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
                  Kalametiya Mulkirigala
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
                {/* Kalametiya Images Slider */}
                <div className="kalametiya-images-slider mb-5">
                  <div className="slider-wrapper position-relative">
                    <div className="slider-main">
                      <img 
                        src={kalametiyaImages[currentImageIndex]} 
                        alt={`Kalametiya Mulkirigala ${currentImageIndex + 1}`}
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
                      {kalametiyaImages.map((_, index) => (
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
                  <h3 className="tour-name">Kalametiya Mulkirigala</h3>
                  <p className="lead mb-4">
                    Hambantota is the largest district of the Southern Province. Hot climate, rare geographical formations and the food culture are the highlights here.
                  </p>
                  
                  <p className="mb-4">
                    The Dongas would meet you after lunch to drive you upto Mulgirigala aka The Rock Temple. Located on a hillock, the temple is a complex of pagodas and statues which, according to historians, belong to the 2nd century BC. A merry climb of 533 steps would take you to the top of the rock where one could witness the magnanimity of the Southern Province; the eternal blue on one side and the eternal green on the other.
                  </p>
                  
                  <p className="mb-4">
                    Our next destination is Ussangoda National Park which is an extraordinary geographical formation. According to geologists, a massive meteor that fell here back in the day has lead to the formation of a reddish brown soil structure. The view of the Indian ocean from the Ussangoda Cliff is simply breath taking.
                  </p>
                  
                  <p className="mb-5">
                    We close the day with a once-in-a-lifetime experience that you can only get in the tropics; a sunset bird watching tour by paddleboat in a coastal lagoon. Gayan our boat operator cum naturalist is confident that this tour is the best birdwatching tour in the island. Countless varieties of endemic and foreign birds could be observed in the Kalametiya Lagoon among the reeds, on the water or hidden in the mangroves. Get your cameras ready!
                  </p>
                </div>

                {/* Call to Action */}
                <div className="tour-cta mt-5 text-center">
                  <h4>Ready to Explore Kalametiya Mulkirigala?</h4>
                  <p className="mb-4">Book your geological and cultural adventure today and discover the unique landscapes of Hambantota.</p>
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

export default KalametiyaTour;
