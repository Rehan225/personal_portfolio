# Personal Developer Portfolio Website

A polished, modern, responsive personal developer portfolio website built with React, Vite, and JavaScript. 

Designed specifically for students and early-career software developers, this portfolio emphasizes clean presentation, editorial visual identity, and accessible frontend design without inflating background or fabricating experience.

---

## Features

- Responsive Design: Full screen scalability across desktop, laptop, tablet, and mobile browsers.
- Modular Component Architecture: Clean separation of UI components for easy maintenance.
- Centralized Data Store: All text content, projects, links, and skills are managed in a single file (`src/data/portfolioData.js`).
- Editorial Color Identity: Built with custom CSS variables inspired by a warm Midnight Violet & Wine Plum color palette.
- Subtle Animations: Lightweight CSS hover effects, subtle floating visual motifs, and smooth scrolling.
- Accessible Layout: Semantic HTML structure with visible focus states and screen-reader accessible elements.
- Resume Download: Direct download CTA linked to `/resume.pdf`.
- Honest Early-Career Messaging: Pre-configured empty states for certifications and achievements.

---

## Tech Stack

- React 18
- Vite
- JavaScript (ES6+)
- CSS3 (Custom CSS Variables & Flexbox/Grid)
- React Icons (`react-icons`)

---

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg          # Custom star favicon
│   └── resume.pdf           # Downloadable PDF resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   │   ├── Hero.jsx          # Intro header & visual motif
│   │   ├── About.jsx         # Background & career objective
│   │   ├── Skills.jsx        # Categorized technology tags
│   │   ├── Projects.jsx      # Editorial project showcase
│   │   ├── Github.jsx        # Open-source exploration CTA
│   │   ├── Resume.jsx        # Resume download callout
│   │   ├── Certifications.jsx # Credential section with empty state
│   │   ├── Achievements.jsx  # Milestones section with empty state
│   │   ├── Contact.jsx       # Email & social contact details
│   │   └── Footer.jsx        # Footer credits and navigation
│   ├── data/
│   │   └── portfolioData.js  # Centralized portfolio data
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application mount entry point
│   └── index.css             # Global styles and color variables
├── index.html                # HTML entry point with Google Fonts
├── portfolio-info.md         # Technical architecture documentation
├── PORTFOLIO.md              # Source prompt specification
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite build configuration
└── README.md                 # Project user guide
```

---

## Installation

1. Clone or download the repository into your local workspace.
2. Open terminal in the project directory.
3. Install dependencies:

```bash
npm install
```

---

## Run Locally

Start the Vite local development server:

```bash
npm run dev
```

Open the printed URL (typically `http://localhost:5173`) in your web browser.

---

## Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the built site locally:

```bash
npm run preview
```

---

## Customization Guide

All personal information is managed inside `src/data/portfolioData.js`.

### 1. Personal Details
Open `src/data/portfolioData.js` and modify the `personal` object:

```javascript
personal: {
  name: "Jane Doe",
  role: "Aspiring Software Developer",
  email: "jane.doe@example.com",
  location: "New York, NY",
  university: "State University",
  degree: "B.S. Computer Science",
  github: "https://github.com/janedoe",
  linkedin: "https://linkedin.com/in/janedoe",
  bio: "Short headline introduction..."
}
```

### 2. Updating Skills
Modify the arrays in the `skills` object inside `portfolioData.js`:

```javascript
skills: {
  languages: ["JavaScript", "Python", "Java", "C++"],
  frontend: ["React", "HTML5", "CSS3"],
  tools: ["Git", "GitHub", "VS Code"],
  databases: ["SQL", "MongoDB"]
}
```

---

## Adding a Project

To add a new project to the portfolio, append a project object to the `projects` array in `src/data/portfolioData.js`:

```javascript
{
  id: 4,
  number: "04",
  category: "FULL STACK",
  title: "Weather Dashboard",
  description: "A responsive weather application fetching real-time data from OpenWeather API.",
  technologies: ["React", "JavaScript", "REST API", "CSS Modules"],
  github: "https://github.com/yourusername/weather-app",
  liveDemo: "https://your-weather-demo.netlify.app",
  type: "Personal Project"
}
```

If `github` or `liveDemo` are empty strings `""`, the corresponding action buttons will automatically hide.

---

## Replacing the Resume

1. Prepare your resume in PDF format.
2. Rename the file to `resume.pdf`.
3. Place it inside the `public/` directory, replacing `public/resume.pdf`.

The download link in the Resume section will automatically download this file.

---

## Deployment

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import your repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect Vite. Click Deploy.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Set Build Command to `npm run build`.
3. Set Publish Directory to `dist`.
4. Click Deploy Site.

### Deploying to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Update `vite.config.js` to set `base: '/repo-name/'`.
3. Add deployment scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.
