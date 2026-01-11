# 🚀 Portfolio Website - Space Theme Edition

A stunning, modern portfolio website with a cosmic space theme, featuring dark/light mode, smooth animations, and a professional PDF resume viewer. Built with React 18, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

### Design
- **🌌 Space Theme**: Cosmic purple/black color palette with stellar visual effects
- **🌓 Dark/Light Mode**: Seamless theme switching with persistent preferences
- **✨ Animated Background**: Dynamic star field with particles
- **🎭 Smooth Animations**: Professional transitions using Framer Motion
- **📱 Fully Responsive**: Perfect on desktop, tablet, and mobile

### Functionality
- **📄 PDF Resume Viewer**: Embedded PDF viewer with fallback details view
- **📝 Data-Driven**: All content managed through single JSON file
- **🎯 Professional Navigation**: Smooth scrolling and route transitions
- **⚡ Fast Performance**: Optimized with Vite for instant load times
- **🎨 Custom Design System**: Unique space-themed components

## 📄 Pages

1. **Home** - Hero section with animated stats and CTA buttons
2. **About** - Personal information, highlights, and interests
3. **Work** - Professional experience timeline with achievements
4. **Education** - Academic background and qualifications
5. **Skills** - Categorized technical skills with visual indicators
6. **Projects** - Featured projects with detailed descriptions
7. **Resume** - PDF viewer with downloadable resume

## 🛠️ Tech Stack

- **React 18.3.1** - Latest React with modern hooks
- **Vite 5** - Next-generation frontend tooling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 11** - Professional animation library
- **React Router 6** - Client-side routing
- **Lucide React** - Beautiful icon library
- **React PDF** - PDF viewing capabilities

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

Your portfolio will be available at `http://localhost:3000`

## 📝 Updating Your Portfolio

### 1. Update Personal Information

Edit `src/data/portfolio.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "phone": "+1 XXX XXX XXXX",
    "location": "Your Location",
    "bio": "Your professional bio",
    "social": {
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourusername"
    }
  }
}
```

### 2. Add Your Resume PDF

1. Place your resume PDF in the `public` folder (name it `resume.pdf`)
2. The Resume page will automatically load it
3. Update the `pdfUrl` in `portfolio.json` if using a different name:

```json
"resume": {
  "pdfUrl": "/resume.pdf",
  "lastUpdated": "2024-01-10"
}
```

### 3. Theme Customization

The dark/light mode toggle is automatic! Users can:
- Click the theme toggle button in the navbar
- System preferences are detected automatically
- Theme preference is saved in localStorage

### 4. Customize Colors

Edit `tailwind.config.js` to change the space theme colors:

```javascript
colors: {
  cosmos: { /* Purple shades */ },
  nebula: { /* Accent purples */ },
  starlight: { /* Grays for dark mode */ },
  void: { /* Blacks for dark mode */ }
}
```

## 🎨 Theme System

### Dark Mode Features
- Automatic system preference detection
- Manual toggle with smooth transition
- Persistent theme selection (localStorage)
- Optimized for both light and dark displays

### Customizing Themes

The theme is managed by React Context in `src/contexts/ThemeContext.jsx`. 

## 🌟 Animation Features

- **Page Transitions**: Smooth fade-in and slide-up animations
- **Hover Effects**: Interactive hover states on all cards and buttons
- **Scroll Animations**: Elements animate as you scroll
- **Loading States**: Smooth loading indicators
- **Particle Background**: Animated star field canvas

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
│   └── resume.pdf      # Your resume PDF (add this)
├── src/
│   ├── components/     # Reusable components
│   │   ├── CosmicBackground.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── contexts/       # React contexts
│   │   └── ThemeContext.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Work.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Resume.jsx
│   ├── data/           # Portfolio data
│   │   └── portfolio.json
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click
4. Add your resume.pdf to the public folder

### Netlify
1. Build: `npm run build`
2. Deploy the `dist` folder
3. Add `_redirects` file for SPA routing

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

## 🎯 Key Features Explained

### PDF Resume Viewer
- Embedded PDF viewer using iframe
- Fallback to details view if PDF not available
- Toggle between PDF and structured details
- Download button for easy access

### Cosmic Background
- Canvas-based star field animation
- Responsive particle system
- Performance optimized
- Complements both light and dark themes

### Theme Toggle
- Sun/Moon icon with smooth rotation
- Instant theme switching
- System preference detection
- Saved to localStorage

## ⚡ Performance Tips

- Images are optimized for web
- Code is split by route
- Animations use CSS transforms (GPU accelerated)
- Theme transitions are smooth but fast
- PDF is lazy-loaded on Resume page

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🆘 Troubleshooting

### PDF Not Showing
1. Make sure `resume.pdf` is in the `public` folder
2. Check `pdfUrl` in `portfolio.json`
3. Try clearing browser cache
4. Use the "Details" view as fallback

### Theme Not Persisting
1. Check browser localStorage permissions
2. Try clearing site data and reload
3. Check browser console for errors

### Animations Laggy
1. Reduce `particleCount` in `CosmicBackground.jsx`
2. Disable reduce motion in OS settings
3. Check browser GPU acceleration

## 🤝 Contributing

Feel free to fork and customize! This is your portfolio - make it unique!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with 💜 using React, Tailwind CSS, Framer Motion, and a lot of cosmic inspiration**

Need help? Check the code comments or create an issue!
