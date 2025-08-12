import React from 'react';

const Home = () => {
  const slideshowImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Mountain Paradise',
      description: 'Discover breathtaking mountain landscapes'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      title: 'Forest Adventure',
      description: 'Explore pristine forests and wildlife'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      title: 'Beach Bliss',
      description: 'Relax on pristine beaches'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      title: 'Desert Wonders',
      description: 'Experience the magic of deserts'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Alpine Meadows',
      description: 'Wander through beautiful alpine meadows'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Sunset Views',
      description: 'Witness spectacular sunsets'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Mountain Peak'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      title: 'Forest Trail'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      title: 'Ocean View'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      title: 'Desert Dunes'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Alpine Lake'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Valley Vista'
    }
  ];

  return (
    <div id="home">
      {/* Hero Section */}
      <section className="home-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center home-content">
              <h1 className="home-title">Discover Amazing Destinations</h1>
              <p className="home-subtitle">
                Experience the world's most beautiful places with our curated travel experiences
              </p>
              <button className="btn btn-light btn-lg px-4 me-2">
                Explore Now
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-subtitle">Explore our handpicked locations around the world</p>
          
          <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {slideshowImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  data-bs-target="#featuredCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="carousel-inner">
              {slideshowImages.map((image, index) => (
                <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={image.src} className="d-block w-100" alt={image.title} />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">Take a visual journey through stunning landscapes</p>
          
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 