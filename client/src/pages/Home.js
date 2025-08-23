import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const videoRef = useRef(null);
  const [videoLoading, setVideoLoading] = React.useState(true);
  const [videoError, setVideoError] = React.useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const errorTimerRef = useRef(null);

  const videos = [
    'https://videos.pexels.com/video-files/17842220/17842220-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/9903225/9903225-hd_1920_1080_25fps.mp4'
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force video to play
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video playing successfully');
        } catch (error) {
          console.log('Video autoplay failed:', error);
          // Try to play on user interaction
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
  }, [currentVideoIndex]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVideoEnd = () => {
    console.log('Video ended, switching from video', currentVideoIndex);
    // Switch to next video when current one ends
    setCurrentVideoIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % videos.length;
      console.log('Switching to video', newIndex, ':', videos[newIndex]);
      return newIndex;
    });
  };
  const slideshowImages = [
    {
      id: 1,
      src: '/images/slideshow/slideshow1.jpg',
      title: 'Sri Lanka Adventures',
      description: 'Discover the beauty of Sri Lankan landscapes'
    },
    {
      id: 2,
      src: '/images/slideshow/slideshow2.jpg',
      title: 'Cultural Heritage',
      description: 'Explore ancient temples and traditions'
    },
    {
      id: 3,
      src: '/images/slideshow/slideshow3.jpg',
      title: 'Natural Wonders',
      description: 'Experience pristine beaches and wildlife'
    },
    {
      id: 4,
      src: '/images/slideshow/slideshow4.jpg',
      title: 'Scenic Beauty',
      description: 'Breathtaking views of Sri Lankan countryside'
    },
    {
      id: 5,
      src: '/images/slideshow/slideshow5.jpg',
      title: 'Adventure Awaits',
      description: 'Embark on unforgettable journeys'
    },
    {
      id: 6,
      src: '/images/slideshow/slideshow6.jpg',
      title: 'Local Experiences',
      description: 'Immerse yourself in authentic culture'
    },
    {
      id: 7,
      src: '/images/slideshow/slideshow7.jpg',
      title: 'Memorable Moments',
      description: 'Create lasting memories in paradise'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="home-section section">
        {/* Background Video */}
        <div className="video-background">
          {videoLoading && (
            <div className="video-loading">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {videoError && (
            <div className="video-error">
              <p className="text-light">Video unavailable - showing fallback image</p>
              <button 
                className="btn btn-light btn-sm mt-2"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.play().catch(e => console.log('Manual play failed:', e));
                  }
                }}
              >
                Try Play Video
              </button>
            </div>
          )}
          {!videoLoading && !videoError && (
            <div className="video-controls">
              <button 
                className="btn btn-outline-light btn-sm me-2"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.play().catch(e => console.log('Manual play failed:', e));
                  }
                }}
              >
                ▶ Play Video
              </button>
              <span className="text-light small">
                Video {currentVideoIndex + 1} of {videos.length}
              </span>
            </div>
          )}
          <video 
            ref={videoRef}
            src={videos[currentVideoIndex]}
            autoPlay 
            muted 
            loop={false}
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            poster="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1600&q=80"
            onLoadStart={() => {
              console.log('Video loading started');
              setVideoLoading(true);
              setVideoError(false);
              if (errorTimerRef.current) {
                clearTimeout(errorTimerRef.current);
                errorTimerRef.current = null;
              }
            }}
            onCanPlay={() => {
              console.log('Video can play');
              setVideoLoading(false);
              setVideoError(false);
              if (errorTimerRef.current) {
                clearTimeout(errorTimerRef.current);
                errorTimerRef.current = null;
              }
            }}
            onError={(e) => {
              console.log('Video error:', e);
              // Defer showing error to allow other <source> candidates to load
              if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
              errorTimerRef.current = setTimeout(() => {
                const v = videoRef.current;
                const cannotPlay = !v || v.readyState < 2; // HAVE_CURRENT_DATA
                if (cannotPlay) {
                  setVideoError(true);
                  setVideoLoading(false);
                }
              }, 1200);
            }}
            onLoadedData={() => console.log('Video data loaded')}
            onPlay={() => console.log('Video started playing')}
            onPause={() => console.log('Video paused')}
            onEnded={handleVideoEnd}
            style={{ display: 'block' }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center home-content">
              <h1 className="home-title">Discover Sri Lanka with Donga</h1>
              <p className="home-subtitle">
                Experience authentic Sri Lankan adventures with our curated tours and sustainable tourism experiences
              </p>
              <Link to="/tours" className="btn btn-light btn-lg px-4 me-2">
                View Tours
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

             {/* Signature Food Ventures Section */}
      <section className="py-5">
        <div className="container">
           <h2 className="section-title">Signature Food Ventures</h2>
           <p className="section-subtitle">Experience the authentic flavors and culinary traditions of Sri Lanka</p>
          
          <div className="row">
                         <div className="col-lg-4 col-md-6 mb-4">
                <div className="food-venture-card">
                  <div className="food-venture-image mb-3">
                    <img 
                      src="/images/eatstreet/eatstreet1.jpg" 
                      alt="EatStreet Food Venture" 
                      className="img-fluid rounded"
                      style={{width: '100%', height: '200px', objectFit: 'cover'}}
                    />
                 </div>
                  <h4>EatStreet</h4>
                  <p className="text-muted">Experience the vibrant street food culture with our curated EatStreet adventures.</p>
               </div>
             </div>
             
             <div className="col-lg-4 col-md-6 mb-4">
                <div className="food-venture-card">
                  <div className="food-venture-image mb-3">
                    <img 
                      src="/images/nendacooks/nendacooks1.jpg" 
                      alt="NendaCooks Food Venture" 
                      className="img-fluid rounded"
                      style={{width: '100%', height: '200px', objectFit: 'cover'}}
                    />
                 </div>
                  <h4>NendaCooks</h4>
                  <p className="text-muted">Discover authentic local cooking experiences and traditional culinary techniques.</p>
               </div>
             </div>
             
             <div className="col-lg-4 col-md-6 mb-4">
                <div className="food-venture-card">
                  <div className="food-venture-image mb-3">
                    <img 
                      src="/images/themeltingpot/themeltingpot1.jpg" 
                      alt="The Melting Pot Food Venture" 
                      className="img-fluid rounded"
                      style={{width: '100%', height: '200px', objectFit: 'cover'}}
                    />
                 </div>
                  <h4>The Melting Pot</h4>
                  <p className="text-muted">Immerse yourself in diverse culinary traditions and fusion food experiences.</p>
               </div>
             </div>
          </div>
          
                     <div className="text-center mt-4">
              <Link to="/tours" className="btn btn-outline-primary btn-lg">
                View All Food Ventures
             </Link>
           </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="fullpage-slideshow">
        <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
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
                <img 
                  src={image.src} 
                  className="d-block w-100 h-100" 
                  alt={image.title}
                  style={{
                    objectFit: 'cover',
                    width: '100vw',
                    height: '100vh',
                    minHeight: '100vh'
                  }}
                />
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
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Experience the difference with our premium services</p>
          
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center service-card">
                <div className="service-icon-wrapper bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-compass fa-2x"></i>
                </div>
                <h4>Expert Guides</h4>
                <p className="text-muted">Our experienced guides know every hidden gem and will make your journey unforgettable.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center service-card">
                <div className="service-icon-wrapper bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-shield-check fa-2x"></i>
                </div>
                <h4>Safe Travel</h4>
                <p className="text-muted">Your safety is our top priority. We ensure all destinations are thoroughly vetted.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center service-card">
                <div className="service-icon-wrapper bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-user-cog fa-2x"></i>
                </div>
                <h4>Personalized Service</h4>
                <p className="text-muted">Every trip is tailored to your preferences, ensuring a truly personal experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donga Sustainable Tourism Section */}
      <section className="py-5" style={{backgroundColor: '#1a1a1a'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="text-white p-4">
                <div className="quote-container position-relative">
                  <div className="quote-icon position-absolute" style={{
                    top: '-20px',
                    left: '-20px',
                    fontSize: '4rem',
                    color: 'rgba(255,255,255,0.1)',
                    fontFamily: 'Georgia, serif',
                    animation: 'float 3s ease-in-out infinite'
                  }}>
                    "
                  </div>
                  <blockquote className="blockquote animated-text" style={{
                    fontSize: '1.3rem', 
                    lineHeight: '1.8', 
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}>
                    <span className="text-line" style={{
                      display: 'inline-block',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
                    }}>
                      "Donga is a team dedicated to promote sustainable tourism in the Southern Province of Sri Lanka.
                    </span>
                    <span className="text-line" style={{
                      display: 'inline-block',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
                    }}>
                      All our experiences have been curated to highlight the Southern way of life.
                    </span>
                    <span className="text-line" style={{
                      display: 'inline-block',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animation: 'fadeInUp 0.8s ease-out 1s forwards'
                    }}>
                      By touring with Donga, you help local artisans and skilled professionals to uplift their standards of living."
                    </span>
                  </blockquote>
                  <div className="quote-footer mt-4" style={{
                    opacity: 0,
                    animation: 'fadeIn 1s ease-out 1.5s forwards'
                  }}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="image-container position-relative overflow-hidden rounded shadow-lg homepage-image-float-1" style={{
                    height: '280px',
                    transition: 'all 0.4s ease-in-out',
                    cursor: 'pointer'
                  }}>
                    <img 
                      src="/images/assets/Home1.jpg" 
                      alt="Young woman making pottery" 
                      className="img-fluid w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease-in-out'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.parentElement.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.parentElement.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                      }}
                    />
                    <div className="image-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{
                      background: 'linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}>
                      <i className="fas fa-search-plus text-white" style={{fontSize: '1.5rem'}}></i>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="image-container position-relative overflow-hidden rounded shadow-lg homepage-image-float-2" style={{
                    height: '200px',
                    transition: 'all 0.4s ease-in-out',
                    cursor: 'pointer'
                  }}>
                    <img 
                      src="/images/assets/Home4.jpg" 
                      alt="Person shaping clay" 
                      className="img-fluid w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease-in-out'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.parentElement.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.parentElement.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                      }}
                    />
                    <div className="image-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{
                      background: 'linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}>
                      <i className="fas fa-search-plus text-white" style={{fontSize: '1.5rem'}}></i>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="image-container position-relative overflow-hidden rounded shadow-lg homepage-image-float-3" style={{
                    height: '200px',
                    transition: 'all 0.4s ease-in-out',
                    cursor: 'pointer'
                  }}>
                    <img 
                      src="/images/assets/Home2.jpg" 
                      alt="Woman at pottery wheel" 
                      className="img-fluid w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease-in-out'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.parentElement.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.parentElement.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                      }}
                    />
                    <div className="image-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{
                      background: 'linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}>
                      <i className="fas fa-search-plus text-white" style={{fontSize: '1.5rem'}}></i>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="image-container position-relative overflow-hidden rounded shadow-lg homepage-image-float-4" style={{
                    height: '280px',
                    transition: 'all 0.4s ease-in-out',
                    cursor: 'pointer'
                  }}>
                    <img 
                      src="/images/assets/Home3.jpg" 
                      alt="Man and woman working together on pottery" 
                      className="img-fluid w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease-in-out'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.parentElement.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.parentElement.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                      }}
                    />
                    <div className="image-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{
                      background: 'linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}>
                      <i className="fas fa-search-plus text-white" style={{fontSize: '1.5rem'}}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5" style={{backgroundColor: '#2c3e50'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title text-white">Our Happy Clients!</h2>
              <div className="text-white mx-auto" style={{width: '60px', height: '2px', backgroundColor: 'white'}}></div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card p-4 rounded" style={{backgroundColor: '#34495e', minHeight: '300px', position: 'relative'}}>
                <div className="testimonial-text text-white mb-4">
                  "Donga really curates and creates authentic experiences. The best part of the tours is, it is not commercial. Well done to Donga in what they do and their sim to enrich and improve the lives of the locals. Sustainable tourism at its best."
                </div>
                <div className="testimonial-quote text-white" style={{fontSize: '4rem', position: 'absolute', bottom: '10px', right: '20px', opacity: '0.3'}}>
                  "
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img 
                      src="/images/testimonials/morne.jpg" 
                      alt="Morné Abrahams"
                      className="rounded-circle"
                      style={{width: '50px', height: '50px', objectFit: 'cover'}}
                    />
                  </div>
                  <div>
                    <h6 className="text-white mb-0">Morné Abrahams</h6>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card p-4 rounded" style={{backgroundColor: '#34495e', minHeight: '300px', position: 'relative'}}>
                <div className="testimonial-text text-white mb-4">
                  "I highly recommend booking an adventure with DONGA. From my initial enquiry to being dropped back home, they were efficient, professional and charming. Their service and customer care is top notch."
                </div>
                <div className="testimonial-quote text-white" style={{fontSize: '4rem', position: 'absolute', bottom: '10px', right: '20px', opacity: '0.3'}}>
                  "
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img 
                      src="/images/testimonials/christina.jpg" 
                      alt="Christina Jackson"
                      className="rounded-circle"
                      style={{width: '50px', height: '50px', objectFit: 'cover'}}
                    />
                  </div>
                  <div>
                    <h6 className="text-white mb-0">Christina Jackson</h6>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card p-4 rounded" style={{backgroundColor: '#34495e', minHeight: '300px', position: 'relative'}}>
                <div className="testimonial-text text-white mb-4">
                  "We had an amazing day at Sinharaja organised by this great company, amazing scenery, wildlife and food and toddy afterwards! Strongly recommended."
                </div>
                <div className="testimonial-quote text-white" style={{fontSize: '4rem', position: 'absolute', bottom: '10px', right: '20px', opacity: '0.3'}}>
                  "
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img 
                      src="/images/testimonials/chris.jpg" 
                      alt="Chris Mears"
                      className="rounded-circle"
                      style={{width: '50px', height: '50px', objectFit: 'cover'}}
                    />
                  </div>
                  <div>
                    <h6 className="text-white mb-0">Chris Mears</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card p-4 rounded" style={{backgroundColor: '#34495e', minHeight: '300px', position: 'relative'}}>
                <div className="testimonial-text text-white mb-4">
                  "We loved our morning pottery-making organized by Donga. We got loads of information and really enjoyed having a go on the wheel ourselves too! I'd definitely recommend this experience to others!"
                </div>
                <div className="testimonial-quote text-white" style={{fontSize: '4rem', position: 'absolute', bottom: '10px', right: '20px', opacity: '0.3'}}>
                  "
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img 
                      src="/images/testimonials/martina.jpg" 
                      alt="Martina HC"
                      className="rounded-circle"
                      style={{width: '50px', height: '50px', objectFit: 'cover'}}
                    />
                  </div>
                  <div>
                    <h6 className="text-white mb-0">Martina HC</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card p-4 rounded" style={{backgroundColor: '#34495e', minHeight: '300px', position: 'relative'}}>
                <div className="testimonial-text text-white mb-4">
                  "We had the most amazing day with Donga visiting the elephants in Udalawawe National Park. We were picked up from our hotel with a basket of local exotic fruits waiting for us to nibble on while we travelled to the park. Naveen is the perfect guide throughout the day. The park is magical where your are transported into the natural habitat of many animals. It really is a wonderful experience. The elephants are treated with the upmost respect free to roam around an immense area. You really get an opportunity to understand the characters and personalities of these wonderful creatures. A great local lunch is had and then off to visit the baby elephants at the transit home is a must before heading back home. I wish we had more time to book more of Donga's trips. Next time"
                </div>
                <div className="testimonial-quote text-white" style={{fontSize: '4rem', position: 'absolute', bottom: '10px', right: '20px', opacity: '0.3'}}>
                  "
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img 
                      src="/images/testimonials/claire.jpg" 
                      alt="Claire Burgess"
                      className="rounded-circle"
                      style={{width: '50px', height: '50px', objectFit: 'cover'}}
                    />
                  </div>
                  <div>
                    <h6 className="text-white mb-0">Claire Burgess</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-5 position-relative" style={{
        backgroundImage: 'url(/images/assets/community-impact-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="position-absolute w-100 h-100" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          top: 0,
          left: 0
        }}></div>
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title text-white">Our community impact</h2>
              <div className="text-white mx-auto" style={{width: '60px', height: '2px', backgroundColor: 'white'}}></div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6 text-center mb-4">
              <div className="community-stat">
                <h1 className="text-white fw-bold mb-2" style={{fontSize: '3.5rem'}}>53</h1>
                <p className="text-white mb-0" style={{fontSize: '1.1rem'}}>IMMERSIVE TOURS</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-6 text-center mb-4">
              <div className="community-stat">
                <h1 className="text-white fw-bold mb-2" style={{fontSize: '3.5rem'}}>07</h1>
                <p className="text-white mb-0" style={{fontSize: '1.1rem'}}>OPERATORS</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-6 text-center mb-4">
              <div className="community-stat">
                <h1 className="text-white fw-bold mb-2" style={{fontSize: '3.5rem'}}>800K</h1>
                <p className="text-white mb-0" style={{fontSize: '1.1rem'}}>COMMUNITY DONATIONS<br/>(LKR)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Add custom styles for fullpage slideshow
const styles = `
  .fullpage-slideshow {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  .fullpage-slideshow .carousel {
    width: 100%;
    height: 100%;
  }
  
  .fullpage-slideshow .carousel-inner {
    height: 100vh;
  }
  
  .fullpage-slideshow .carousel-item {
    height: 100vh;
  }
  
  .fullpage-slideshow .carousel-item img {
    width: 100vw !important;
    height: 100vh !important;
    object-fit: cover;
    object-position: center;
  }
  
  .fullpage-slideshow .carousel-caption {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    bottom: 50px;
  }
  
  .fullpage-slideshow .carousel-indicators {
    bottom: 30px;
  }
  
  .fullpage-slideshow .carousel-control-prev,
  .fullpage-slideshow .carousel-control-next {
    width: 5%;
  }
`;

// Inject styles into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
} 