// YouTube API Configuration
export const YOUTUBE_CONFIG = {
  // Replace this with your actual YouTube Data API v3 key
  API_KEY: 'YOUR_YOUTUBE_API_KEY',
  
  // Donga YouTube channel username
  CHANNEL_USERNAME: '@donga1020',
  
  // Maximum number of videos to fetch
  MAX_RESULTS: 20,
  
  // API endpoints
  ENDPOINTS: {
    SEARCH_CHANNEL: 'https://www.googleapis.com/youtube/v3/search',
    SEARCH_VIDEOS: 'https://www.googleapis.com/youtube/v3/search',
    VIDEO_DETAILS: 'https://www.googleapis.com/youtube/v3/videos'
  }
};

// Instructions for setting up YouTube API:
/*
1. Go to Google Cloud Console: https://console.cloud.google.com/
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3:
   - Go to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key
5. Replace 'YOUR_YOUTUBE_API_KEY' in this file with your actual API key
6. (Optional) Restrict the API key to only YouTube Data API v3 for security

Note: The YouTube Data API has quotas:
- 10,000 units per day (free tier)
- Each search request costs 100 units
- Each video details request costs 1 unit
- Plan accordingly for your usage needs
*/
