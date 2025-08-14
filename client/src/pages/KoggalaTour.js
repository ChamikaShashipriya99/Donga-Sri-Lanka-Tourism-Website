import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KoggalaTour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const koggalaImages = [
    '/images/assets/koggala.jpeg',
    '/images/assets/koggala.jpeg', // Using the same image for now, you can add more later
    '/images/assets/koggala1.jpeg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === koggalaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? koggalaImages.length - 1 : prevIndex - 1
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
    <div className="koggala-tour-page">
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
                  Koggala Lake and Stilt Fishing
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
                {/* Koggala Images Slider */}
                <div className="koggala-images-slider mb-5">
                  <div className="slider-wrapper position-relative">
                    <div className="slider-main">
                      <img 
                        src={koggalaImages[currentImageIndex]} 
                        alt={`Koggala Lake and Stilt Fishing ${currentImageIndex + 1}`}
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
                      {koggalaImages.map((_, index) => (
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
                  <h3 className="tour-name">Koggala Lake and Stilt Fishing</h3>
                  <p className="lead mb-4">
                    The coast is the lifeline of the Southern Province. In this tour, we take you on a life changing journey to prove that life in this island nation is not as easy as it seems to be.
                  </p>
                  
                  <p className="mb-4">
                    The luxurious and gourmet commodities from Ceylon have great untold stories behind them. We begin with the fishermen of the coast who are engaged in ceaseless battles to make a living. From fresh fish to salted dry fish, Southern fishing mirrors the authentic life of fishermen in Sri Lanka. You will witness different arts of fishing such as catamaran fishing, trawler fishing, line fishing and even the celebrated stilt fishing.
                  </p>
                  
                  <p className="mb-4">
                    Passing a myriad of stalls on the roadside we drive down to Handunugoda Tea Museum and Plantation in Ahangama for a guided tour in a low country tea plantation. Here, you could experience the conventions of processing tea leaves and receive opportunity to taste over 35 varieties of hand crafted teas in the Tea Museum. Some quality tea and cakes are also included in the tour.
                  </p>
                  
                  <p className="mb-5">
                    The koggala lake is our next stop where we board Sam's boat to explore the Koggala lake that is home to many varities of birds mammals and reptiles including elusive crocodile. Koggala reflects a fine blend of sea and land that has been converted to livelihoods. In the Cinnamon Island, we find Sam's father who is preparing cinnamon for sale, from tree to bark. A cup of cinnamon tea awaits you.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="tour-cta mt-5 text-center">
                  <h4>Ready to Experience Traditional Stilt Fishing?</h4>
                  <p className="mb-4">Book your Koggala Lake adventure today and witness one of Sri Lanka's most unique cultural traditions.</p>
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

export default KoggalaTour;
