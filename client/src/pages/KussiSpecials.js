import React, { useRef, useEffect, useState } from 'react';

const KussiSpecials = () => {
  const videoRef = useRef(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scenicOutdoorCookingImages = [
    "/images/scenicoutdoorcooking/scenicoutdoorcooking1.jpg",
    "/images/scenicoutdoorcooking/scenicoutdoorcooking2.jpg",
    "/images/scenicoutdoorcooking/scenicoutdoorcooking3.jpg",
    "/images/scenicoutdoorcooking/scenicoutdoorcooking4.jpg",
    "/images/scenicoutdoorcooking/scenicoutdoorcooking5.jpg",
    "/images/scenicoutdoorcooking/scenicoutdoorcooking6.jpg",
    "/images/scenicoutdoorcooking/scenicoutdoorcooking7.jpg"
  ];

  const specialExperiences = [
    {
      id: 1,
      title: "Scenic Outdoor Cooking",
      image: "/images/scenicoutdoorcooking/scenicoutdoorcooking3.jpg",
      hasGallery: true
    },
    {
      id: 2,
      title: "Elusive Rainforest Mushroom Hunt",
      image: "/images/assets/sinharaja.jpeg"
    },
    {
      id: 3,
      title: "Bee Honey Collecting with Indigenous Men",
      image: "/images/assets/kanneliya.jpeg"
    },
    {
      id: 4,
      title: "Trapper Style Cooking",
      image: "/images/assets/pittery.jpeg"
    },
    {
      id: 5,
      title: "Crab Fishing and Cooking",
      image: "/images/assets/koggala.jpeg"
    },
    {
      id: 6,
      title: "Cook with Elephants",
      image: "/images/assets/moonstone.jpeg"
    },
    {
      id: 7,
      title: "Cook for Temples",
      image: "/images/assets/kalametiya.jpeg"
    }
  ];

  const openGallery = () => {
    setShowGallery(true);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setShowGallery(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === scenicOutdoorCookingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? scenicOutdoorCookingImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Close gallery on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeGallery();
      }
    };

    if (showGallery) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showGallery]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setVideoLoading(false));
      video.addEventListener('error', () => setVideoError(true));
      
      return () => {
        video.removeEventListener('loadeddata', () => setVideoLoading(false));
        video.removeEventListener('error', () => setVideoError(true));
      };
    }
  }, []);

  return (
    <div className="kussi-specials-page">
      {/* Hero Section */}
      <section className="kussi-hero section">
        <div className="kussi-hero-background">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="kussi-video"
          >
            <source src="https://videos.pexels.com/video-files/3765258/3765258-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {videoLoading && (
            <div className="video-loading">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          
          {videoError && (
            <div className="video-error">
              <p>Video failed to load</p>
            </div>
          )}
          
          <div className="kussi-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="section-title text-white">Kussi Specials</h1>
              <p className="section-subtitle text-white">
                Discover our exclusive culinary experiences and special offerings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-5">Exclusive Culinary Adventures</h2>
            </div>
          </div>
          
          <div className="row g-4">
            {specialExperiences.map((experience) => (
              <div key={experience.id} className="col-lg-4 col-md-6">
                <div className="special-experience-card">
                  <div className="experience-image">
                    <img src={experience.image} alt={experience.title} />
                    <div className="experience-hover-overlay">
                      <button 
                        className="experience-view-details-btn"
                        onClick={experience.hasGallery ? openGallery : undefined}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="experience-content">
                    <h3 className="experience-title">{experience.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="gallery-modal-overlay" onClick={closeGallery}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close-btn" onClick={closeGallery}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="gallery-main-image">
              <button className="gallery-nav-btn gallery-prev" onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <img 
                src={scenicOutdoorCookingImages[currentImageIndex]} 
                alt={`Scenic Outdoor Cooking ${currentImageIndex + 1}`}
              />
              <button className="gallery-nav-btn gallery-next" onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            
            <div className="gallery-thumbnails">
              {scenicOutdoorCookingImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
            
            <div className="gallery-counter">
              {currentImageIndex + 1} / {scenicOutdoorCookingImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KussiSpecials;
