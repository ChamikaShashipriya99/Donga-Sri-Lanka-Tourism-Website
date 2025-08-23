import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TourDetails = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [eatstreetImages, setEatstreetImages] = useState([]);
  const [megakitchensImages, setMegakitchensImages] = useState([]);
  const [naturespantryImages, setNaturespantryImages] = useState([]);
  const [themeltingpotImages, setThemeltingpotImages] = useState([]);
  const [nendacooksImages, setNendacooksImages] = useState([]);

  // Tour data - you can move this to a separate file later
  const tours = [
    {
      id: 1,
      title: "Booze Cruise - The Spirits Culture Tour",
      description: "From Arrack to Kitul Toddy and Lion Beer to Baila Songs, immerse in the vibrant spirits culture of Sri Lanka. Search for elusive plant based liquors, sit at ages-old bars, nibble some of the spiciest bar snacks and dance into some baila tunes. This tour is certainly not for the faint-hearted.",
      price: "$120",
      priceNote: "Per head upwards",
      image: '/images/assets/gallefort.jpg',
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
      image: '/images/assets/sinharaja.jpeg',
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
      image: '/images/eatstreet/eatstreet7.jpg',
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
      image: '/images/assets/pittery.jpeg',
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
      image: '/images/assets/moonstone.jpeg',
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
      image: '/images/assets/briefgarden.jpeg',
      duration: "Half day",
      difficulty: "Easy",
      locations: ["Islandwide"],
      mealPlan: "One or two of the main meals and drinks",
      highlights: ["Festival Food", "Mega Kitchens", "Cultural Celebrations", "Traditional Cooking", "Community Feasts"]
    }
  ];

  // Eat Street images array
  const eatstreetImageList = [
    '/images/eatstreet/eatstreet1.jpg',
    '/images/eatstreet/eatstreet2.jpg',
    '/images/eatstreet/eatstreet3.jpg',
    '/images/eatstreet/eatstreet4.jpg',
    '/images/eatstreet/eatstreet5.jpg',
    '/images/eatstreet/eatstreet6.jpg',
    '/images/eatstreet/eatstreet7.jpg',
    '/images/eatstreet/eatstreet8.jpg',
    '/images/eatstreet/eatstreet9.jpg',
    '/images/eatstreet/eatstreet10.jpg',
    '/images/eatstreet/eatstreet11.jpg',
    '/images/eatstreet/eatstreet12.jpg',
    '/images/eatstreet/eatstreet13.jpg',
    '/images/eatstreet/eatstreet14.jpg',
    '/images/eatstreet/eatstreet15.jpg',
    '/images/eatstreet/eatstreet16.jpg',
    '/images/eatstreet/eatstreet17.jpg',
    '/images/eatstreet/eatstreet18.jpg',
    '/images/eatstreet/eatstreet19.jpg',
    '/images/eatstreet/eatstreet20.jpg'
  ];

  // Mega Kitchens images array
  const megakitchensImageList = [
    '/images/megakitchens/megakitchens.jpg',
  ];

  // Nature's Pantry images array
  const naturespantryImageList = [
    '/images/naturespantry/497401700_24019237757689242_3132255596382340986_n.jpg',
    '/images/naturespantry/naturespantry1.jpg',
    '/images/naturespantry/naturespantry2.jpg',
    '/images/naturespantry/naturespantry3.jpg',
    '/images/naturespantry/naturespantry4.jpg',
    '/images/naturespantry/naturespantry5.jpg',
    '/images/naturespantry/naturespantry6.jpg',
    '/images/naturespantry/naturespantry7.jpg',
    '/images/naturespantry/naturespantry8.jpg',
    '/images/naturespantry/naturespantry9.jpg',
    '/images/naturespantry/naturespantry10.jpg',
    '/images/naturespantry/naturespantry11.jpg',
    '/images/naturespantry/naturespantry12.jpg'
  ];

  // The Melting Pot images array
  const themeltingpotImageList = [
    '/images/themeltingpot/themeltingpot1.jpg',
    '/images/themeltingpot/themeltingpot2.jpg',
    '/images/themeltingpot/themeltingpot3.jpg',
    '/images/themeltingpot/themeltingpot4.jpg',
    '/images/themeltingpot/themeltingpot5.jpg',
    '/images/themeltingpot/themeltingpot6.jpg',
    '/images/themeltingpot/themeltingpot7.jpg',
    '/images/themeltingpot/themeltingpot8.jpg',
    '/images/themeltingpot/themeltingpot9.jpg',
    '/images/themeltingpot/themeltingpot10.jpg'
  ];

  // Nenda Cooks images array
  const nendacooksImageList = [
    '/images/nendacooks/nendacooks1.jpg',
    '/images/nendacooks/nendacooks2.jpg',
    '/images/nendacooks/nendacooks3.jpg',
    '/images/nendacooks/nendacooks4.jpg',
    '/images/nendacooks/nendacooks5.jpg',
    '/images/nendacooks/nendacooks6.jpg',
    '/images/nendacooks/nendacooks7.jpg',
    '/images/nendacooks/nendacooks8.jpg',
    '/images/nendacooks/nendacooks9.jpg',
    '/images/nendacooks/nendacooks10.jpg',
    '/images/nendacooks/nendacooks11.jpg',
    '/images/nendacooks/nendacooks12.jpg',
    '/images/nendacooks/nendacooks13.jpg'
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the tour by ID
    const foundTour = tours.find(t => t.id === parseInt(tourId));
    if (foundTour) {
      setTour(foundTour);
      // Update page title to match tour name
      document.title = `${foundTour.title} - Donga Tourism`;
      // If it's the Eat Street tour, set the images
      if (foundTour.id === 3) {
        setEatstreetImages(eatstreetImageList);
      }
      // If it's the Mega Kitchens tour, set the images
      if (foundTour.id === 6) {
        setMegakitchensImages(megakitchensImageList);
      }
      // If it's the Nature's Pantry tour, set the images
      if (foundTour.id === 2) {
        setNaturespantryImages(naturespantryImageList);
      }
      // If it's The Melting Pot tour, set the images
      if (foundTour.id === 5) {
        setThemeltingpotImages(themeltingpotImageList);
      }
      // If it's the Nenda Cooks tour, set the images
      if (foundTour.id === 4) {
        setNendacooksImages(nendacooksImageList);
      }
    } else {
      // Tour not found, redirect to tours page
      navigate('/tours');
    }
  }, [tourId, navigate]);

  if (!tour) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-details-page">
      {/* Page Title */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
                             <h1 className="display-4 fw-bold text-primary mb-3">{tour.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Details Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-content">
                <h2>Tour Overview</h2>
                <p className="lead">{tour.description}</p>
                
                <div className="tour-details-grid">
                  <div className="detail-item">
                    <h5><i className="fas fa-map-marker-alt me-2"></i>Locations</h5>
                    <p>{tour.locations.join(', ')}</p>
                  </div>
                  
                  <div className="detail-item">
                    <h5><i className="fas fa-utensils me-2"></i>Meal Plan</h5>
                    <p>{tour.mealPlan}</p>
                  </div>
                </div>

                <div className="tour-highlights">
                  <h3>Tour Highlights</h3>
                  <div className="highlights-grid">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        <i className="fas fa-check text-success me-2"></i>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="tour-sidebar">
                <div className="tour-booking-card">
                  <h4>Book This Tour</h4>
                  <div className="price-display">
                    <span className="price">{tour.price}</span>
                    <span className="price-note">{tour.priceNote}</span>
                  </div>
                  <button className="btn btn-primary btn-lg w-100 mb-3">
                    <i className="fas fa-calendar me-2"></i>
                    Book Now
                  </button>
                  <button className="btn btn-outline-primary w-100">
                    <i className="fas fa-phone me-2"></i>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eat Street Images Gallery - Only show for Eat Street tour */}
      {tour.id === 3 && eatstreetImages.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-5">Street Food Gallery</h2>
                <div className="eatstreet-gallery">
                  <div className="row">
                    {eatstreetImages.map((image, index) => (
                      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="gallery-item">
                          <img
                            src={image}
                            alt={`Street Food ${index + 1}`}
                            className="img-fluid rounded"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mega Kitchens Images Gallery - Only show for Mega Kitchens tour */}
      {tour.id === 6 && megakitchensImages.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-5">Festival Food Gallery</h2>
                <div className="megakitchens-gallery">
                  <div className="row">
                    {megakitchensImages.map((image, index) => (
                      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="gallery-item">
                          <img
                            src={image}
                            alt={`Festival Food ${index + 1}`}
                            className="img-fluid rounded"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nature's Pantry Images Gallery - Only show for Nature's Pantry tour */}
      {tour.id === 2 && naturespantryImages.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-5">Foraging Experience Gallery</h2>
                <div className="naturespantry-gallery">
                  <div className="row">
                    {naturespantryImages.map((image, index) => (
                      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="gallery-item">
                          <img
                            src={image}
                            alt={`Foraging Experience ${index + 1}`}
                            className="img-fluid rounded"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* The Melting Pot Images Gallery - Only show for The Melting Pot tour */}
      {tour.id === 5 && themeltingpotImages.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-5">Multi-Ethnic Cuisine Gallery</h2>
                <div className="themeltingpot-gallery">
                  <div className="row">
                    {themeltingpotImages.map((image, index) => (
                      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="gallery-item">
                          <img
                            src={image}
                            alt={`Multi-Ethnic Cuisine ${index + 1}`}
                            className="img-fluid rounded"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nenda Cooks Images Gallery - Only show for Nenda Cooks tour */}
      {tour.id === 4 && nendacooksImages.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-5">Traditional Cooking Gallery</h2>
                <div className="nendacooks-gallery">
                  <div className="row">
                    {nendacooksImages.map((image, index) => (
                      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="gallery-item">
                          <img
                            src={image}
                            alt={`Traditional Cooking ${index + 1}`}
                            className="img-fluid rounded"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Tours Button */}
      <section className="py-4">
        <div className="container">
          <div className="text-center">
            <button 
              className="btn btn-outline-primary btn-lg"
              onClick={() => navigate('/tours')}
            >
              <i className="fas fa-arrow-left me-2"></i>
              Back to All Tours
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;
