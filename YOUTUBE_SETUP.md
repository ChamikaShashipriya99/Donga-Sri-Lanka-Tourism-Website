# YouTube API Setup Guide for Donga Tourism Website

This guide will help you set up the YouTube Data API to display videos from the Donga YouTube channel on your blog page.

## Prerequisites

- A Google account
- Access to Google Cloud Console

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" at the top of the page
3. Click "New Project"
4. Enter a project name (e.g., "Donga Tourism Website")
5. Click "Create"

### 2. Enable YouTube Data API v3

1. In your new project, go to "APIs & Services" > "Library"
2. Search for "YouTube Data API v3"
3. Click on "YouTube Data API v3"
4. Click "Enable"

### 3. Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key (you'll need this in the next step)

### 4. Configure Your Website

1. Open `client/src/config/youtube.js`
2. Replace `'YOUR_YOUTUBE_API_KEY'` with your actual API key:

```javascript
export const YOUTUBE_CONFIG = {
  API_KEY: 'AIzaSyB...', // Your actual API key here
  // ... rest of the config
};
```

### 5. (Optional) Restrict API Key for Security

1. In Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click on your API key
3. Under "Application restrictions", select "HTTP referrers (web sites)"
4. Add your website domain
5. Under "API restrictions", select "Restrict key"
6. Select "YouTube Data API v3"
7. Click "Save"

## API Quotas and Limits

- **Free Tier**: 10,000 units per day
- **Search requests**: 100 units each
- **Video details**: 1 unit each
- **Plan accordingly** for your expected usage

## Testing

1. Start your development server: `npm start`
2. Navigate to the Blog page
3. You should see videos loading from the Donga YouTube channel
4. If you see sample videos, check that your API key is correctly configured

## Troubleshooting

### Common Issues

1. **"API Key Required" message**: Make sure you've replaced the placeholder API key
2. **"Channel not found"**: Verify the channel username is correct
3. **"Quota exceeded"**: Check your API usage in Google Cloud Console
4. **CORS errors**: Make sure you're running from the correct domain

### Debug Information

- Check the browser console for error messages
- Verify your API key is active in Google Cloud Console
- Ensure the YouTube Data API v3 is enabled

## Security Notes

- Never commit your API key to version control
- Consider using environment variables for production
- Restrict your API key to only the YouTube Data API v3
- Monitor your API usage regularly

## Support

If you encounter issues:
1. Check the [YouTube Data API documentation](https://developers.google.com/youtube/v3)
2. Review your Google Cloud Console settings
3. Check the browser console for detailed error messages

## Channel Information

- **Channel**: @donga1020
- **API Endpoint**: YouTube Data API v3
- **Max Results**: 20 videos (configurable)
- **Update Frequency**: Real-time (when page loads)
