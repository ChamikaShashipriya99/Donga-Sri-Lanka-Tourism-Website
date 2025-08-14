import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const videoRef = useRef(null);
  const [videoLoading, setVideoLoading] = React.useState(true);
  const [videoError, setVideoError] = React.useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const errorTimerRef = useRef(null);

  const videos = [
    '/videos/hero/background1.mp4',
    '/videos/hero/background2.mp4'
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
      src: '/images/assets/slide1.jpg',
      title: 'Sri Lanka Adventures',
      description: 'Discover the beauty of Sri Lankan landscapes'
    },
    {
      id: 2,
      src: '/images/assets/slide2.jpg',
      title: 'Cultural Heritage',
      description: 'Explore ancient temples and traditions'
    },
    {
      id: 3,
      src: '/images/assets/slide3.jpg',
      title: 'Natural Wonders',
      description: 'Experience pristine beaches and wildlife'
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

      {/* Featured Tours Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Featured Tours</h2>
          <p className="section-subtitle">Experience the best of Sri Lanka with our curated tours</p>
          
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="featured-tour-card">
                <img src='/images/assets/gallefort.jpg '/>
                <div className="tour-info">
                  <h4>Galle Fort Walking Tour</h4>
                  <p>Discover the historic Galle Fort with its ramparts, beaches, and vibrant businesses.</p>
                  <div className="tour-price">$85 per head</div>
                  <button className="btn btn-primary btn-sm">Learn More</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="featured-tour-card">
                <img src='/images/assets/sinharaja.jpeg '/>
                <div className="tour-info">
                  <h4>Sinharaja Rainforest Trek</h4>
                  <p>Explore Sri Lanka's largest rainforest, a UNESCO protected biodiversity site.</p>
                  <div className="tour-price">$100 per head</div>
                  <button className="btn btn-primary btn-sm">Learn More</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="featured-tour-card">
                <img src='/images/assets/koggala.jpeg '/>
                <div className="tour-info">
                  <h4>Koggala Lake & Stilt Fishing</h4>
                  <p>Experience traditional stilt fishing and explore the beautiful Koggala Lake.</p>
                  <div className="tour-price">$80 per head</div>
                  <button className="btn btn-primary btn-sm">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/tours" className="btn btn-outline-primary btn-lg">
              View All Tours
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
              <div className="text-center">
                <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-map-marked-alt fa-2x"></i>
                </div>
                <h4>Expert Guides</h4>
                <p className="text-muted">Our experienced guides know every hidden gem and will make your journey unforgettable.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-shield-alt fa-2x"></i>
                </div>
                <h4>Safe Travel</h4>
                <p className="text-muted">Your safety is our top priority. We ensure all destinations are thoroughly vetted.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-heart fa-2x"></i>
                </div>
                <h4>Personalized Service</h4>
                <p className="text-muted">Every trip is tailored to your preferences, ensuring a truly personal experience.</p>
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