# Donga Sri Lanka - Tourism Application

A modern, responsive tourism website showcasing authentic Sri Lankan experiences with dynamic content, background videos, and an engaging user interface.

## 🌟 Features

### 🎥 Dynamic Background Videos
- **Home Page**: Sequential hero videos (background1.mp4 → background2.mp4)
- **About Page**: Autoplay looping background video (about-bg-video.mp4)
- **Tours Page**: Hero section background video (tour-bg-video.mp4)

### 🖼️ Full-Page Image Slider
- **Responsive Design**: Adapts to all screen sizes
- **Local Assets**: Uses slide1.jpg, slide2.jpg, slide3.jpg
- **Auto-rotation**: Smooth transitions every 3 seconds
- **Navigation Controls**: Previous/Next buttons and indicator dots

### 👥 Team Section
- **Interactive Design**: Floating animation effects with shadows
- **Real Team Photos**: Naveen, Umendra, Kaveen, Dilum
- **Professional Layout**: Clean, modern presentation

### 💬 Client Testimonials
- **5 Client Reviews**: Real feedback from satisfied customers
- **Professional Cards**: Dark theme with white text
- **Responsive Grid**: Adapts to different screen sizes

### 📊 Community Impact
- **Statistics Display**: 53 tours, 07 operators, 800K donations
- **Natural Background**: Beautiful landscape imagery
- **Professional Presentation**: Clean, impactful design

### 🎨 Modern UI/UX
- **Gradient Navigation**: Dark professional gradient navbar
- **Brand Consistency**: Donga logo throughout the application
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Page transitions and hover effects

## 🚀 Technology Stack

### Frontend
- **React 19.1.1** - Modern React with hooks
- **Bootstrap 5.3.7** - Responsive CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router DOM** - Client-side routing

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web application framework
- **Concurrently** - Run multiple commands simultaneously

### Development Tools
- **Create React App** - React development environment
- **ESLint** - Code quality and consistency
- **Web Vitals** - Performance monitoring

## 📁 Project Structure

```
tourism-app/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   │   ├── images/        # Image assets
│   │   │   ├── assets/    # General assets (logos, backgrounds)
│   │   │   ├── team/      # Team member photos
│   │   │   └── testimonials/ # Client testimonial photos
│   │   ├── videos/        # Video assets
│   │   │   ├── hero/      # Home page hero videos
│   │   │   ├── about/     # About page background video
│   │   │   └── tours/     # Tours page background video
│   │   ├── index.html     # Main HTML template
│   │   └── manifest.json  # PWA manifest
│   ├── src/               # React source code
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main application component
│   │   └── App.css        # Global styles
│   └── package.json       # Frontend dependencies
├── server/                 # Node.js backend
│   ├── index.js           # Server entry point
│   └── package.json       # Backend dependencies
├── .gitignore             # Git ignore rules
└── package.json           # Root project configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tourism-app
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

### Manual Installation

1. **Install root dependencies**
   ```bash
   npm install
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Start servers**
   ```bash
   # Terminal 1 - Start server
   cd server && npm start
   
   # Terminal 2 - Start client
   cd client && npm start
   ```

## 📱 Available Scripts

### Root Level
- `npm start` - Start both client and server
- `npm run server` - Start only the backend server
- `npm run client` - Start only the React frontend
- `npm run dev` - Development mode with both servers
- `npm run install-all` - Install dependencies for all packages

### Client Level
- `npm start` - Start React development server
- `npm run build` - Build production version
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 🌐 Application Pages

### 🏠 Home Page (`/`)
- Hero section with sequential background videos
- Featured tours showcase
- Full-page image slider
- Why choose us section
- Client testimonials
- Community impact statistics

### 🗺️ Tours Page (`/tours`)
- Hero section with background video
- Tour packages grid
- Detailed tour information
- Pricing and duration details

### ℹ️ About Page (`/about`)
- Hero section with background video
- Company story and mission
- Team member profiles with animations
- Company values and approach

### 👁️ Vision Page (`/vision`)
- Company vision and goals
- Future plans and objectives

### 📞 Contact Page (`/contact`)
- Contact information
- Contact form
- Location details

## 🎨 Customization

### Adding New Videos
1. Place video files in appropriate folders:
   - Hero videos: `client/public/videos/hero/`
   - About video: `client/public/videos/about/`
   - Tours video: `client/public/videos/tours/`

2. Update video references in respective page components

### Adding New Images
1. Place images in appropriate folders:
   - General assets: `client/public/images/assets/`
   - Team photos: `client/public/images/team/`
   - Testimonials: `client/public/images/testimonials/`

2. Update image references in components

### Modifying Colors and Styles
- Global styles: `client/src/App.css`
- Component-specific styles: Inline styles or component CSS files
- Bootstrap customization: Override Bootstrap variables

## 🔧 Configuration

### Environment Variables
Create `.env` files in both client and server directories:

**Client (.env)**
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development
```

**Server (.env)**
```env
PORT=5000
NODE_ENV=development
```

### PWA Configuration
Update `client/public/manifest.json` for Progressive Web App features:
- App name and description
- Icon sizes and types
- Theme colors

## 🚀 Deployment

### Frontend Build
```bash
cd client
npm run build
```

### Backend Deployment
```bash
cd server
npm start
```

### Production Considerations
- Set `NODE_ENV=production`
- Use environment variables for sensitive data
- Implement proper error handling
- Add logging and monitoring
- Set up SSL certificates

## 🧪 Testing

### Frontend Testing
```bash
cd client
npm test
```

### Backend Testing
```bash
cd server
npm test
```

## 📊 Performance

### Optimization Features
- Lazy loading for images and videos
- Optimized video formats
- Responsive image sizing
- CSS animations with hardware acceleration
- Efficient React component structure

### Monitoring
- Web Vitals integration
- Performance metrics tracking
- User experience monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👥 Team

- **Naveen** - Operations and PR
- **Umendra** - Marketing and PR
- **Kaveen** - Logistics and Operations
- **Dilum** - Digital Marketing and Online Strategy

## 📞 Support

For support and inquiries:
- Email: [contact@dongasrilanka.com]
- Website: [www.dongasrilanka.com]
- Phone: [+94 XX XXX XXXX]

---

**Donga Sri Lanka** - Explore. Experience. Embrace the beauty of Sri Lanka.
