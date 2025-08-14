import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BriefGardenTour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const briefGardenImages = [
    '/images/assets/briefgarden.jpeg',
    '/images/assets/briefgarden.jpeg', // Using the same image for now, you can add more later
    '/images/assets/briefgarden.jpeg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === briefGardenImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? briefGardenImages.length - 1 : prevIndex - 1
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
    <div className="brief-garden-tour-page">
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
                  Brief Garden and Eco Star
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
                {/* Brief Garden Images Slider */}
                <div className="brief-garden-images-slider mb-5">
                  <div className="slider-wrapper position-relative">
                    <div className="slider-main">
                      <img 
                        src={briefGardenImages[currentImageIndex]} 
                        alt={`Brief Garden and Eco Star ${currentImageIndex + 1}`}
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
                      {briefGardenImages.map((_, index) => (
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
                  <h3 className="tour-name">Brief Garden and Eco Star</h3>
                  <p className="lead mb-4">
                    Bentota is not only about the beach! It has more to offer for those who love landscaping, gardening, interior design and expressionist architecture.
                  </p>
                  
                  <p className="mb-4">
                    In this exciting tour, our major focus is on a Sri Lankan farm house which is self sufficient by all means. Mr. and Mrs. Premathilake are the proud owners of this serene farm that spreads over 6 acres and 'love' is their mantra of success. After a walk in the farm picking coconuts and helping with animal husbandry, a truly farm-to-table lunch will be prepared by the hosts. You can learn some tricks of the Sri Lankan cuisine such as extracting coconut oil and using coconut for everything in life!
                  </p>
                  
                  <p className="mb-4">
                    Next up, we will be entering the two estates by the famous Bawa brothers Jeffrey and Bewis. The Bawas are world renowned for their tropical gardens and architectural genius. The two estates Lunuganga and Brief express two different personal tastes. We will be touring through the gardens while comparing and contrasting each other.
                  </p>
                  
                  <p className="mb-5">
                    The evening would be spent with turtles, the Indian Ocean and the sunset. Your visit to the turtle conservation center at Ahungalla is a form of donation to maintain this valuable conservation center.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="tour-cta mt-5 text-center">
                  <h4>Ready to Discover Brief Garden and Eco Star?</h4>
                  <p className="mb-4">Book your botanical and eco-tourism adventure today and experience the natural beauty of Bentota beyond the beach.</p>
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

export default BriefGardenTour;
