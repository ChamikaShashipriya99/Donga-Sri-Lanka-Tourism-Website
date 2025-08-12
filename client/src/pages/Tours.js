import React, { useRef, useEffect, useState } from 'react';

const Tours = () => {
  const videoRef = useRef(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

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

  const tours = [
    {
      id: 1,
      title: "Galle Fort Walking Tour",
      description: "Galle Fort is everybody's go-to destination when they are in Galle. The ramparts beaches, myriad of vibrant businesses and rich history make it a must-visit location.",
      price: "$85",
      priceNote: "Per head upwards",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Historical Fort", "Beach Views", "Local Businesses", "Cultural Heritage"]
    },
    {
      id: 2,
      title: "Pottery Experience",
      description: "Weligama is a busy coastal city. It is well known for its beaches, seafood and marine ecology. However, the traditional pottery craftsmanship here is equally fascinating.",
      price: "$85",
      priceNote: "Per head upwards",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Traditional Pottery", "Hands-on Experience", "Local Craftsmanship", "Cultural Learning"]
    },
    {
      id: 3,
      title: "Moonstone and Waterfall",
      description: "Moonstones are considered as stones of good luck, health and longevity. However, the story of surfacing a moonstone and the beautiful waterfalls in the area create a magical experience.",
      price: "$90",
      priceNote: "Per head upwards",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
      duration: "Full Day",
      difficulty: "Moderate",
      highlights: ["Moonstone Mining", "Waterfall Views", "Natural Beauty", "Spiritual Significance"]
    },
    {
      id: 4,
      title: "Kalametiya Mulkirigala",
      description: "Hambantota is the largest district of the Southern Province. Hot climate, rare geographical formations and the food culture are unique to this region.",
      price: "$90",
      priceNote: "Per head upwards",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      duration: "Full Day",
      difficulty: "Moderate",
      highlights: ["Geological Formations", "Local Cuisine", "Cultural Heritage", "Natural Landscapes"]
    },
    {
      id: 5,
      title: "Brief Garden and Eco Star",
      description: "Bentota is not only about the beach! It has more to offer for those who love landscaping, gardening, and eco-friendly experiences.",
      price: "$90",
      priceNote: "Per head upwards",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Botanical Gardens", "Eco Tourism", "Landscaping", "Nature Walks"]
    },
    {
      id: 6,
      title: "Sinharaja Rainforest Trek",
      description: "Sinharaja is Sri Lanka's largest rainforest. It is a UNESCO protected bio-diversity site which is rich in virgin water springs and unique wildlife.",
      price: "$100",
      priceNote: "Per head upwards",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
      duration: "Full Day",
      difficulty: "Challenging",
      highlights: ["UNESCO Site", "Biodiversity", "Water Springs", "Wildlife Spotting"]
    },
    {
      id: 7,
      title: "Kanneliya Rainforest Trek",
      description: "Kanneliya is one of our first ever sustainable tourism ventures where we partnered with local guides from the rainforest area to provide authentic experiences.",
      price: "$100",
      priceNote: "Per head upwards",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
      duration: "Full Day",
      difficulty: "Challenging",
      highlights: ["Sustainable Tourism", "Local Guides", "Rainforest Trek", "Community Partnership"]
    },
    {
      id: 8,
      title: "Koggala Lake and Stilt Fishing",
      description: "The coast is the lifeline of the Southern Province. In this tour, we take you on a life changing experience of traditional stilt fishing and lake exploration.",
      price: "$80",
      priceNote: "Per head upwards",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Stilt Fishing", "Lake Views", "Traditional Methods", "Coastal Culture"]
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
            src="/videos/tours/tour-bg-video.mp4"
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
                  </div>
                  <div className="tour-content">
                    <h3 className="tour-title">{tour.title}</h3>
                    <p className="tour-description">{tour.description}</p>
                    



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
    </div>
  );
};

export default Tours;
