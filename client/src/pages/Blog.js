import React, { useEffect, useRef, useState } from 'react';
import { YOUTUBE_CONFIG } from '../config/youtube';

const Blog = () => {
  const videoRef = useRef(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
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
            id: { videoId: 'sample1' },
            snippet: {
              title: 'Sample Donga Video 1',
              description: 'This is a sample video description',
              thumbnails: {
                medium: { url: 'https://via.placeholder.com/320x180/2c5aa0/ffffff?text=Donga+Video+1' }
              },
              publishedAt: '2024-01-01T00:00:00Z'
            }
          },
          {
            id: { videoId: 'sample2' },
            snippet: {
              title: 'Sample Donga Video 2',
              description: 'Another sample video description',
              thumbnails: {
                medium: { url: 'https://via.placeholder.com/320x180/ff6b35/ffffff?text=Donga+Video+2' }
              },
              publishedAt: '2024-01-02T00:00:00Z'
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
          id: { videoId: 'sample1' },
          snippet: {
            title: 'Sample Donga Video 1',
            description: 'This is a sample video description',
            thumbnails: {
              medium: { url: 'https://via.placeholder.com/320x180/2c5aa0/ffffff?text=Donga+Video+1' }
            },
            publishedAt: '2024-01-01T00:00:00Z'
          }
        },
        {
          id: { videoId: 'sample2' },
          snippet: {
            title: 'Sample Donga Video 2',
            description: 'Another sample video description',
            thumbnails: {
              medium: { url: 'https://via.placeholder.com/320x180/ff6b35/ffffff?text=Donga+Video+2' }
            },
            publishedAt: '2024-01-02T00:00:00Z'
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
    if (videoId && videoId !== 'sample1' && videoId !== 'sample2') {
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
