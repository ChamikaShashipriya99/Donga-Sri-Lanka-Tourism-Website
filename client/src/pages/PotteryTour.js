import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PotteryTour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const potteryImages = [
    '/images/assets/pittery.jpeg',
    '/images/assets/pittery1.jpeg',
    '/images/assets/pittery2.jpeg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === potteryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? potteryImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pottery-tour-page">
      {/* Hero Section with Image Slider */}
      <section className="pottery-hero section">
        <div className="image-slider-container">
          <div className="image-slider">
            <img 
              src={potteryImages[currentImageIndex]} 
              alt={`Pottery Experience ${currentImageIndex + 1}`}
              className="slider-image"
            />
            <div className="slider-overlay">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto text-center">
                    <h1 className="hero-title">Pottery Experience</h1>
                    <p className="hero-subtitle">Discover the ancient art of pottery in the coastal gem of Weligama</p>
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
            {potteryImages.map((_, index) => (
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
                  Pottery Experience
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="overview-content">
                <h2 className="section-title text-center mb-5">Tour Overview</h2>
                
                <div className="overview-text">
                  <h3 className="tour-name">Pottery Experience</h3>
                  <p className="lead mb-4">
                    Weligama is a busy coastal city. It is well known for its beaches, seafood and marine ecology. However, in this walking tour, we unveil an unseen aspect of this coastal gem; culture.
                  </p>
                  
                  <p className="mb-4">
                    Pottery has been one of the two life lines in Weligama. The roadside stalls full of earthenware would bear testimony for this. In this adventure, you get the chance to turn the Potter's wheel under the guidance Mr. Gunadasa, the legendary potter of Weligama. Inside the potter's hut you will witness the laborious process of mixing, molding, drying and painting; pretty much the full process of making an earthenware vessel. Get ready to make your own coffee cup or breakfast bowl!
                  </p>
                  
                  <p className="mb-4">
                    En route to our next destination, we meet the determined fishermen of Kapparatota who take a life risk to bring seafood to the table. You will also get the chance to have a quick walk in the fish market where different varieties of edible fish are sorted cleaned and sold. This is another opportunity to realize that Sri Lankans work hard for their bread and butter. The float ebbing to and fro in the bay is quite a scene and is considered as a very insta-worthy click.
                  </p>
                  
                  <p className="mb-5">
                    Kushtarajagala or the "healing statue" would be the next stop where we would stand beside a massive rock carving of 16 feet that belongs to the 6th century AD. Why not wish good health to your loved ones here!
                  </p>

                  <p className="mb-5">
                    The tour ends with a drink of King Coconut or a boiled corn maize sold by the roadside vendors.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="tour-cta mt-5 text-center">
                  <h4>Ready to Experience the Art of Pottery?</h4>
                  <p className="mb-4">Book your pottery experience today and discover the cultural heritage of Weligama.</p>
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

export default PotteryTour;
