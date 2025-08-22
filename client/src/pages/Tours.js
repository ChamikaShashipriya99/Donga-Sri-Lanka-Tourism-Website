import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tours = () => {
  const videoRef = useRef(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [showTourModal, setShowTourModal] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = (tour) => {
    // For now, show modal for all tours since we don't have individual pages for these
    setSelectedTour(tour);
    setShowTourModal(true);
  };

  const closeTourModal = () => {
    setShowTourModal(false);
    setSelectedTour(null);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Tour video playing successfully');
        } catch (error) {
          console.log('Tour video autoplay failed:', error);
          const handleUserInteraction = () => {
            video.play().catch(e => console.log('Still cannot play:', e));
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          };
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        }
      };
      
      playVideo();
    }
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tours = [
    {
      id: 1,
      title: "Booze Cruise - The Spirits Culture Tour",
      description: "From Arrack to Kitul Toddy and Lion Beer to Baila Songs, immerse in the vibrant spirits culture of Sri Lanka. Search for elusive plant based liquors, sit at ages-old bars, nibble some of the spiciest bar snacks and dance into some baila tunes. This tour is certainly not for the faint-hearted.",
      price: "$120",
      priceNote: "Per head upwards",
      image: '/images/assets/gallefort.jpg', // Using existing image as placeholder
      duration: "4-6 hours",
      difficulty: "Moderate",
      locations: ["Negombo", "Colombo", "Galle", "Sinharaja", "Jaffna"],
      mealPlan: "Drinks and Bar snacks + Lunch or Dinner",
      highlights: ["Spirits Culture", "Traditional Bars", "Baila Music", "Local Cuisine", "Cultural Experience"]
    },
    {
      id: 2,
      title: "Nature's Pantry - The Foraging Tour",
      description: "Nature is the best pantry as well as the best pharmacy. In this adventure, you would be searching various nooks and corners for lesser known greens, edible forest fruits, fish and meats, spices and condiments with a local foraging expert to cook your breakfast, lunch and dinner.",
      price: "$150",
      priceNote: "Per head upwards",
      image: '/images/assets/sinharaja.jpeg', // Using existing image as placeholder
      duration: "1 Full Day",
      difficulty: "Moderate",
      locations: ["Kudawa rainforest village", "Hasalaka Hills", "Tank country of Anuradhapura", "Colonial City of Galle", "Jaffna - Little India"],
      mealPlan: "BLD with Tea and Drinks",
      highlights: ["Foraging Experience", "Local Expert Guide", "Wild Edibles", "Cooking Experience", "Nature Exploration"]
    },
    {
      id: 3,
      title: "Eat Street - Sri Lanka's Street Food Tour",
      description: "As the sun begins to set and men start rallying around bar counters, the streets come alive with the aromas of creative and quickfire Sri Lankan streetfood. Be prepared to be ravished by spices, coconut oil and roadside vendors. Nota Bene: Always listen to your local guide or prepare to pack your bags.",
      price: "$80",
      priceNote: "Per head upwards",
      image: '/images/assets/koggala.jpeg', // Using existing image as placeholder
      duration: "3-4 hours",
      difficulty: "Easy",
      locations: ["Colombo", "Galle", "Negombo", "Arugambay", "Trincomalee", "Jaffna", "Kandy", "Ella"],
      mealPlan: "All you can eat street food, tea and fizzy drinks",
      highlights: ["Street Food", "Local Vendors", "Cultural Experience", "Evening Tour", "Authentic Cuisine"]
    },
    {
      id: 4,
      title: "Nenda Cooks - The typical Sri Lankan cookery class",
      description: "Italy's got their Nonas and we have our Nendas. With culinary wisdom passed down from generations, they cook some of the best meals in the island. Go to market, bargain like a Nenda and cook a Sri Lankan feast in our very own clay pots.",
      price: "$100",
      priceNote: "Per head upwards",
      image: '/images/assets/pittery.jpeg', // Using existing image as placeholder
      duration: "3-6 hours",
      difficulty: "Easy",
      locations: ["Islandwide"],
      mealPlan: "Lunch and/or Dinner",
      highlights: ["Cooking Class", "Traditional Recipes", "Market Visit", "Clay Pot Cooking", "Cultural Learning"]
    },
    {
      id: 5,
      title: "The Melting Pot - Dishes from other ethnicities in Sri Lanka",
      description: "A tour that celebrates the diversity of Sri Lanka through gastronomy. Walk into the warm hospitality of sweet hindu and islamic communities, sing and drink with the christians, dance with the Burghers and talk of peace.",
      price: "$130",
      priceNote: "Per head upwards",
      image: '/images/assets/moonstone.jpeg', // Using existing image as placeholder
      duration: "Full day or 6-8 hours",
      difficulty: "Easy",
      locations: ["Negombo", "Colombo", "Galle", "Nuwara Eliya"],
      mealPlan: "Full day or Two main meals with Tea and snacks",
      highlights: ["Cultural Diversity", "Multi-Ethnic Cuisine", "Community Interaction", "Traditional Hospitality", "Peace Building"]
    },
    {
      id: 6,
      title: "Mega Kitchens - The Festival Food of Sri Lanka",
      description: "No matter what we believe as a religion or philosophy, we LOVE our food and festivals. Everyday is a day to celebrate in Sri Lanka. Dive into the mega kitchens of Sri Lanka that serve hundreds at once and see what keeps them going.",
      price: "$90",
      priceNote: "Per head upwards",
      image: '/images/assets/briefgarden.jpeg', // Using existing image as placeholder
      duration: "Half day",
      difficulty: "Easy",
      locations: ["Islandwide"],
      mealPlan: "One or two of the main meals and drinks",
      highlights: ["Festival Food", "Mega Kitchens", "Cultural Celebrations", "Traditional Cooking", "Community Feasts"]
    }
  ];

  const fallbackImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="tours-page">
      {/* Hero Section */}
      <section className="tours-hero section">
        <div className="tours-hero-background">
          {videoLoading && (
            <div className="video-loading">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {videoError && (
            <div className="video-error">
              <p className="text-light">Video unavailable</p>
            </div>
          )}
          <video
            ref={videoRef}
            src="https://videos.pexels.com/video-files/32703916/13942121_2560_1440_60fps.mp4"
            muted
            loop
            playsInline
            autoPlay
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1
            }}
            onLoadedData={() => setVideoLoading(false)}
            onError={() => setVideoError(true)}
          />
          <div className="tours-hero-overlay" style={{ zIndex: 2 }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="section-title text-white">Discover Sri Lanka with Donga</h1>
              <p className="section-subtitle text-white">
                Experience authentic Sri Lankan adventures with our curated tours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {tours.map((tour) => (
              <div key={tour.id} className="col-lg-6 col-xl-4 mb-4">
                <div className="tour-card h-100">
                  <div className="tour-image">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="img-fluid"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                    <div className="tour-price">
                      <span className="price">{tour.price}</span>
                      <span className="price-note">{tour.priceNote}</span>
                    </div>
                    <div className="tour-hover-overlay">
                      <button className="btn btn-light btn-lg tour-view-details-btn" onClick={() => handleViewDetails(tour)}>
                        <i className="fas fa-eye me-2"></i>
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="tour-content">
                    <h3 className="tour-title">{tour.title}</h3>
                    <p className="tour-description">{tour.description}</p>
                    
                    <div className="tour-meta">
                      <div className="meta-item">
                        <i className="fas fa-clock me-2"></i>
                        <span>{tour.duration}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-mountain me-2"></i>
                        <span>{tour.difficulty}</span>
                      </div>
                    </div>
                    
                    {tour.locations && (
                      <div className="tour-locations">
                        <h6><i className="fas fa-map-marker-alt me-2"></i>Locations:</h6>
                        <p className="locations-text">{tour.locations.join(', ')}</p>
                      </div>
                    )}
                    
                    {tour.mealPlan && (
                      <div className="tour-meal-plan">
                        <h6><i className="fas fa-utensils me-2"></i>Meal Plan:</h6>
                        <p className="meal-plan-text">{tour.mealPlan}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Ready for Your Sri Lankan Adventure?</h2>
              <p className="lead mb-4">
                Contact us to customize your perfect tour experience
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary btn-lg">
                  Contact Us
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  View All Tours
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Details Modal */}
      {showTourModal && selectedTour && (
        <div className="tour-modal-overlay" onClick={closeTourModal}>
          <div className="tour-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tour-modal-close" onClick={closeTourModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="tour-modal-content">
              <div className="tour-modal-image">
                <img src={selectedTour.image} alt={selectedTour.title} />
              </div>
              <div className="tour-modal-details">
                <h2>{selectedTour.title}</h2>
                <p className="tour-modal-description">{selectedTour.description}</p>
                <div className="tour-modal-meta">
                  <div className="meta-item">
                    <i className="fas fa-clock me-2"></i>
                    <span>{selectedTour.duration}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-mountain me-2"></i>
                    <span>{selectedTour.difficulty}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-dollar-sign me-2"></i>
                    <span>{selectedTour.price} {selectedTour.priceNote}</span>
                  </div>
                </div>
                
                {selectedTour.locations && (
                  <div className="tour-modal-locations">
                    <h5><i className="fas fa-map-marker-alt me-2"></i>Locations:</h5>
                    <p>{selectedTour.locations.join(', ')}</p>
                  </div>
                )}
                
                {selectedTour.mealPlan && (
                  <div className="tour-modal-meal-plan">
                    <h5><i className="fas fa-utensils me-2"></i>Meal Plan:</h5>
                    <p>{selectedTour.mealPlan}</p>
                  </div>
                )}
                <div className="tour-modal-highlights">
                  <h5>Highlights:</h5>
                  <ul className="highlights-list">
                    {selectedTour.highlights.map((highlight, index) => (
                      <li key={index}>
                        <i className="fas fa-check me-2 text-success"></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tour-modal-actions">
                  <button className="btn btn-primary btn-lg me-3">
                    <i className="fas fa-calendar me-2"></i>
                    Book This Tour
                  </button>
                  <button className="btn btn-outline-primary btn-lg">
                    <i className="fas fa-info-circle me-2"></i>
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tours;
