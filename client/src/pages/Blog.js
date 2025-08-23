import React, { useEffect, useRef, useState } from 'react';
import { YOUTUBE_CONFIG } from '../config/youtube';

const Blog = () => {
  const videoRef = useRef(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [featuredVideoLoading, setFeaturedVideoLoading] = useState(true);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [youtubeLoading, setYoutubeLoading] = useState(true);
  const [youtubeError, setYoutubeError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force video to play
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Blog video playing successfully');
        } catch (error) {
          console.log('Blog video autoplay failed:', error);
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
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch YouTube videos
  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setYoutubeLoading(true);
        
        // First, get the channel ID from the username
        const channelResponse = await fetch(
          `${YOUTUBE_CONFIG.ENDPOINTS.SEARCH_CHANNEL}?part=snippet&q=${YOUTUBE_CONFIG.CHANNEL_USERNAME}&type=channel&key=${YOUTUBE_CONFIG.API_KEY}`
        );
        
        if (!channelResponse.ok) {
          throw new Error('Failed to fetch channel info');
        }
        
        const channelData = await channelResponse.json();
        const channelId = channelData.items[0]?.id?.channelId;
        
        if (!channelId) {
          throw new Error('Channel not found');
        }
        
        // Then, get the videos from the channel
        const videosResponse = await fetch(
          `${YOUTUBE_CONFIG.ENDPOINTS.SEARCH_VIDEOS}?part=snippet&channelId=${channelId}&maxResults=${YOUTUBE_CONFIG.MAX_RESULTS}&order=date&type=video&key=${YOUTUBE_CONFIG.API_KEY}`
        );
        
        if (!videosResponse.ok) {
          throw new Error('Failed to fetch videos');
        }
        
        const videosData = await videosResponse.json();
        setYoutubeVideos(videosData.items || []);
        setYoutubeError(false);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        setYoutubeError(true);
        // Fallback: Show some sample videos if API fails
        setYoutubeVideos([
          {
            id: { videoId: 'fExDKV-b_YY' },
            snippet: {
              title: 'Donga Experience Video 1',
              description: 'Experience the magic of Donga through our amazing content',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/fExDKV-b_YY/mqdefault.jpg` }
              },
              publishedAt: '2024-01-01T00:00:00Z'
            }
          },
          {
            id: { videoId: '_JFHok5XUgE' },
            snippet: {
              title: 'Donga Experience Video 2',
              description: 'Discover the unique blend of culinary excellence and cultural richness',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/_JFHok5XUgE/mqdefault.jpg` }
              },
              publishedAt: '2024-01-02T00:00:00Z'
            }
          },
          {
            id: { videoId: 'YFsNX81bQ8c' },
            snippet: {
              title: 'Donga Experience Video 3',
              description: 'Every Donga journey is unforgettable and unique',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/YFsNX81bQ8c/mqdefault.jpg` }
              },
              publishedAt: '2024-01-03T00:00:00Z'
            }
          },
          {
            id: { videoId: '7s_2ZEfVbt8' },
            snippet: {
              title: 'Donga Experience Video 4',
              description: 'Join us on an adventure through Sri Lanka\'s culinary world',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/7s_2ZEfVbt8/mqdefault.jpg` }
              },
              publishedAt: '2024-01-04T00:00:00Z'
            }
          },
          {
            id: { videoId: '_R52FBRD9Eo' },
            snippet: {
              title: 'Donga Experience Video 5',
              description: 'Stories, insights, and adventures await you',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/_R52FBRD9Eo/mqdefault.jpg` }
              },
              publishedAt: '2024-01-05T00:00:00Z'
            }
          },
          {
            id: { videoId: 'T1ueLmJS63Y' },
            snippet: {
              title: 'Donga Experience Video 6',
              description: 'Explore the rich culture and traditions of Sri Lanka',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/T1ueLmJS63Y/mqdefault.jpg` }
              },
              publishedAt: '2024-01-06T00:00:00Z'
            }
          },
          {
            id: { videoId: 'YozMg_dIjN0' },
            snippet: {
              title: 'Donga Experience Video 7',
              description: 'Immerse yourself in authentic local experiences',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/YozMg_dIjN0/mqdefault.jpg` }
              },
              publishedAt: '2024-01-07T00:00:00Z'
            }
          },
          {
            id: { videoId: 'BbUgIUmKbQA' },
            snippet: {
              title: 'Donga Experience Video 8',
              description: 'From street food to fine dining, discover it all',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/BbUgIUmKbQA/mqdefault.jpg` }
              },
              publishedAt: '2024-01-08T00:00:00Z'
            }
          },
          {
            id: { videoId: 'UAGUEvwGfRw' },
            snippet: {
              title: 'Donga Experience Video 9',
              description: 'Connect with local communities and traditions',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/UAGUEvwGfRw/mqdefault.jpg` }
              },
              publishedAt: '2024-01-09T00:00:00Z'
            }
          },
          {
            id: { videoId: 'aEZKC7EjXbs' },
            snippet: {
              title: 'Donga Experience Video 10',
              description: 'Experience the warmth and hospitality of Sri Lanka',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/aEZKC7EjXbs/mqdefault.jpg` }
              },
              publishedAt: '2024-01-10T00:00:00Z'
            }
          },
          {
            id: { videoId: 'l2s9P3BLngo' },
            snippet: {
              title: 'Donga Experience Video 11',
              description: 'Create memories that will last a lifetime',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/l2s9P3BLngo/mqdefault.jpg` }
              },
              publishedAt: '2024-01-11T00:00:00Z'
            }
          }
        ]);
      } finally {
        setYoutubeLoading(false);
      }
    };

    if (YOUTUBE_CONFIG.API_KEY !== 'YOUR_YOUTUBE_API_KEY') {
      fetchYouTubeVideos();
    } else {
      // Show sample videos if no API key
      setYoutubeVideos([
        {
          id: { videoId: 'fExDKV-b_YY' },
          snippet: {
            title: 'Donga Experience Video 1',
            description: 'Experience the magic of Donga through our amazing content',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/fExDKV-b_YY/mqdefault.jpg` }
            },
            publishedAt: '2024-01-01T00:00:00Z'
          }
        },
        {
          id: { videoId: '_JFHok5XUgE' },
          snippet: {
            title: 'Donga Experience Video 2',
            description: 'Discover the unique blend of culinary excellence and cultural richness',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/_JFHok5XUgE/mqdefault.jpg` }
            },
            publishedAt: '2024-01-02T00:00:00Z'
          }
        },
        {
          id: { videoId: 'YFsNX81bQ8c' },
          snippet: {
            title: 'Donga Experience Video 3',
            description: 'Every Donga journey is unforgettable and unique',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/YFsNX81bQ8c/mqdefault.jpg` }
            },
            publishedAt: '2024-01-03T00:00:00Z'
          }
        },
        {
          id: { videoId: '7s_2ZEfVbt8' },
          snippet: {
            title: 'Donga Experience Video 4',
            description: 'Join us on an adventure through Sri Lanka\'s culinary world',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/7s_2ZEfVbt8/mqdefault.jpg` }
            },
            publishedAt: '2024-01-04T00:00:00Z'
          }
        },
        {
          id: { videoId: '_R52FBRD9Eo' },
          snippet: {
            title: 'Donga Experience Video 5',
            description: 'Stories, insights, and adventures await you',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/_R52FBRD9Eo/mqdefault.jpg` }
            },
            publishedAt: '2024-01-05T00:00:00Z'
          }
        },
        {
          id: { videoId: 'T1ueLmJS63Y' },
          snippet: {
            title: 'Donga Experience Video 6',
            description: 'Explore the rich culture and traditions of Sri Lanka',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/T1ueLmJS63Y/mqdefault.jpg` }
            },
            publishedAt: '2024-01-06T00:00:00Z'
          }
        },
        {
          id: { videoId: 'YozMg_dIjN0' },
          snippet: {
            title: 'Donga Experience Video 7',
            description: 'Immerse yourself in authentic local experiences',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/YozMg_dIjN0/mqdefault.jpg` }
            },
            publishedAt: '2024-01-07T00:00:00Z'
          }
        },
        {
          id: { videoId: 'BbUgIUmKbQA' },
          snippet: {
            title: 'Donga Experience Video 8',
            description: 'From street food to fine dining, discover it all',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/BbUgIUmKbQA/mqdefault.jpg` }
            },
            publishedAt: '2024-01-08T00:00:00Z'
          }
        },
        {
          id: { videoId: 'UAGUEvwGfRw' },
          snippet: {
            title: 'Donga Experience Video 9',
            description: 'Connect with local communities and traditions',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/UAGUEvwGfRw/mqdefault.jpg` }
            },
            publishedAt: '2024-01-09T00:00:00Z'
          }
        },
        {
          id: { videoId: 'aEZKC7EjXbs' },
          snippet: {
            title: 'Donga Experience Video 10',
            description: 'Experience the warmth and hospitality of Sri Lanka',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/aEZKC7EjXbs/mqdefault.jpg` }
            },
            publishedAt: '2024-01-10T00:00:00Z'
          }
        },
        {
          id: { videoId: 'l2s9P3BLngo' },
          snippet: {
            title: 'Donga Experience Video 11',
            description: 'Create memories that will last a lifetime',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/l2s9P3BLngo/mqdefault.jpg` }
            },
            publishedAt: '2024-01-11T00:00:00Z'
          }
        }
      ]);
      setYoutubeLoading(false);
    }
  }, []);

  const handleVideoEnd = () => {
    // Loop the video
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log('Video replay failed:', e));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openYouTubeVideo = (videoId) => {
    if (videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
  };

  return (
    <div className="blog-page">
      {/* Hero Section with Video Background */}
      <section className="blog-hero section">
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
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoading(false)}
            onError={() => setVideoError(true)}
            onEnded={handleVideoEnd}
            style={{ display: videoLoading ? 'none' : 'block' }}
          >
            <source src="https://videos.pexels.com/video-files/32630033/13914707_2560_1440_60fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="section-title text-white">Blog & Videos</h1>
              <p className="section-subtitle text-white">
                Stories, insights, and adventures from Sri Lanka's culinary world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="featured-video-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Featured Video</h2>
              <p className="section-subtitle">
                Check out our latest featured content
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="featured-video-card">
                <div className="video-embed-container">
                  {featuredVideoLoading && (
                    <div className="featured-video-loading">
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading featured video...</span>
                      </div>
                      <p className="text-light mt-2">Loading featured video...</p>
                    </div>
                  )}
                  <iframe
                    src="https://www.youtube.com/embed/5MtzvVkbcRo"
                    title="Featured Donga Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="featured-video-iframe"
                    onLoad={() => setFeaturedVideoLoading(false)}
                    style={{ display: featuredVideoLoading ? 'none' : 'block' }}
                  ></iframe>
                </div>
                <div className="video-info p-4">
                  <h3 className="video-title mb-3">Featured Donga Experience</h3>
                  <p className="video-description">
                    Experience the magic of Donga through our featured video. Discover the unique blend of 
                    culinary excellence and cultural richness that makes every Donga journey unforgettable.
                  </p>
                  <div className="video-actions mt-3">
                    <a 
                      href="https://www.youtube.com/watch?v=5MtzvVkbcRo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary me-3"
                    >
                      <i className="fab fa-youtube me-2"></i>
                      Watch on YouTube
                    </a>
                    <button 
                      className="btn btn-outline-primary"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: 'Featured Donga Video',
                            text: 'Check out this amazing Donga experience!',
                            url: 'https://www.youtube.com/watch?v=5MtzvVkbcRo'
                          });
                        } else {
                          // Fallback for browsers that don't support Web Share API
                          navigator.clipboard.writeText('https://www.youtube.com/watch?v=5MtzvVkbcRo');
                          alert('Video link copied to clipboard!');
                        }
                      }}
                    >
                      <i className="fas fa-share me-2"></i>
                      Share Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="youtube-videos-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Latest Videos from Donga</h2>
              <p className="section-subtitle">
                Watch our latest culinary adventures and travel experiences
              </p>
            </div>
          </div>

          {youtubeLoading ? (
            <div className="row">
              <div className="col-12 text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading videos...</span>
                </div>
                <p className="mt-3">Loading videos from Donga YouTube channel...</p>
              </div>
            </div>
          ) : youtubeError ? (
            <div className="row">
              <div className="col-12 text-center">
                <div className="alert alert-warning" role="alert">
                  <h4 className="alert-heading">API Key Required</h4>
                  <p>
                    To display real YouTube videos, you need to set up a YouTube Data API key. 
                    For now, we're showing sample videos.
                  </p>
                  <hr />
                  <p className="mb-0">
                    <strong>Setup Instructions:</strong><br />
                    1. Go to <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud Console</a><br />
                    2. Create a new project or select existing one<br />
                    3. Enable YouTube Data API v3<br />
                    4. Create credentials (API Key)<br />
                    5. Replace 'YOUR_YOUTUBE_API_KEY' in the Blog.js file
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              {youtubeVideos.map((video) => (
                <div key={video.id.videoId} className="col-lg-4 col-md-6 mb-4">
                  <div className="youtube-video-card">
                    <div className="video-thumbnail" onClick={() => openYouTubeVideo(video.id.videoId)}>
                      <img 
                        src={video.snippet.thumbnails.medium.url} 
                        alt={video.snippet.title}
                        className="img-fluid"
                      />
                      <div className="play-button">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <div className="video-info">
                      <h5 className="video-title" onClick={() => openYouTubeVideo(video.id.videoId)}>
                        {video.snippet.title}
                      </h5>
                      <p className="video-description">
                        {video.snippet.description.length > 100 
                          ? `${video.snippet.description.substring(0, 100)}...` 
                          : video.snippet.description
                        }
                      </p>
                      <div className="video-meta">
                        <span className="publish-date">
                          <i className="fas fa-calendar-alt"></i>
                          {formatDate(video.snippet.publishedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Blog Content Section */}
          <div className="row mt-5">
            <div className="col-12">
              <hr className="my-5" />
              <div className="text-center">
                <h3>Blog Posts Coming Soon</h3>
                <p className="lead">
                  We're working on bringing you amazing stories and insights. Check back soon for our blog posts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
