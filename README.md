# Shawon Haque Portfolio

Awwwards-winning portfolio website built with Next.js, TypeScript, Tailwind CSS, GSAP, and Framer Motion.



## 🌐 Live Demo

- **Primary:** [shawon-f1v0iqyb0-simon141404-1554s-projects.vercel.app](https://shawon-f1v0iqyb0-simon141404-1554s-projects.vercel.app)
- **Alternative:** [shaown-haque.vercel.app](https://shaown-haque.vercel.app)

---

## ✨ Features

### Cinematic Intro
- 3-4 second animated loading screen
- Animated galaxy background with 100+ stars
- Split letter animation for "SHAWON HAQUE"
- Blur, scale, opacity stagger effects
- Purple/blue glow pulse
- Lens flare crosses text

### Custom Cursor
- Inner dot (8px white)
- Outer ring (40px) with trailing animation
- Glow effect on hover
- Magnetic hover for interactive elements

### Smooth Scrolling
- Lenis integration for momentum scrolling
- GSAP ScrollTrigger for scroll-based animations
- Scroll progress indicator

### Visual Effects
- Nebula background with animated gradients
- Floating particles throughout
- Neon glow effects (purple, blue, pink)
- Glassmorphism cards with blur
- Noise & film grain overlays
- Grid pattern background

### Sections
- **Hero** - 100vh with huge transparent typography, profile image with neon ring
- **About** - Split layout, glass cards, animated counters
- **Skills** - Animated cards with progress bars, glow borders
- **Projects** - Filter buttons, hover zoom, tilt effects
- **Experience** - Glowing timeline, alternating layout
- **Contact** - Futuristic glass form, animated inputs
- **Footer** - Minimal design, glow social icons

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | GSAP, Framer Motion |
| Smooth Scroll | Lenis |
| 3D | React Three Fiber (ready) |

### Dependencies

```json
{
  "next": "^16.2.12",
  "react": "^latest",
  "typescript": "^7.0.0",
  "tailwindcss": "^4.0.0",
  "gsap": "^latest",
  "framer-motion": "^latest",
  "lenis": "^latest",
  "@react-three/fiber": "^latest",
  "@react-three/drei": "^latest"
}
```

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/simon141404-gif/shaown-haque.git

# Navigate to project
cd shaown-haque

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

## 📁 Project Structure

```
shaown-haque/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles, animations, effects
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main page component
│   └── components/
│       ├── About.tsx         # About section with counters
│       ├── Contact.tsx       # Contact form with validation
│       ├── Cursor.tsx        # Custom cursor component
│       ├── Experience.tsx    # Work experience timeline
│       ├── Footer.tsx        # Footer with social links
│       ├── Hero.tsx          # Hero section with profile
│       ├── LoadingScreen.tsx # Cinematic intro
│       ├── Navbar.tsx       # Floating navigation
│       ├── Projects.tsx      # Project showcase with filters
│       └── Skills.tsx        # Skills with progress bars
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 🎨 Design System

### Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Background | #050505 | Main background |
| Background Secondary | #09090B | Card backgrounds |
| Background Tertiary | #0D1117 | Section backgrounds |
| Accent Purple | #8B5CF6 | Primary accent, glows |
| Accent Blue | #3B82F6 | Secondary accent |
| Accent Pink | #EC4899 | Highlight accent |
| Accent Cyan | #06B6D4 | Tertiary accent |
| White | #FFFFFF | Text, icons |

### Typography

| Font | Usage | Weight |
|------|-------|--------|
| Bebas Neue | Display headings, hero text | 400 |
| Inter | Body text, UI elements | 400, 500, 600 |

### Font Sizes

- Hero Title: 12vw (responsive)
- Section Title: 3rem - 6rem (clamp)
- Headings: 1.5rem - 2rem
- Body: 1rem
- Small: 0.875rem

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | < 768px | Single column, stacked |
| Tablet | 768px - 1024px | Two columns where applicable |
| Desktop | > 1024px | Full layout, side-by-side |

### Mobile Optimizations
- Hidden navigation (hamburger menu)
- Smaller typography
- Adjusted spacing
- Touch-friendly buttons

---

## 🌐 Live Demo

- **Primary:** [shawon-f1v0iqyb0-simon141404-1554s-projects.vercel.app](https://shawon-f1v0iqyb0-simon141404-1554s-projects.vercel.app)
- **Alternative:** [shaown-haque.vercel.app](https://shaown-haque.vercel.app)

---

## 📄 License

MIT License - feel free to use this project for learning and inspiration.

---

Built with ❤️ by [Shawon Haque](https://github.com/simon141404-gif)
