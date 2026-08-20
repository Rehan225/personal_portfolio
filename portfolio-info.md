# Portfolio Website Information and Technical Guide

## Overview

This portfolio application is built with React, Vite, JavaScript, and custom CSS variables. It is specifically tailored for a student or early-career software developer seeking internships, entry-level roles, or academic evaluations.

The architecture emphasizes simplicity, visual elegance, performance, and clean code structure.

---

## Tech Stack & Architecture

- Framework: React 18
- Build Tool: Vite
- Language: JavaScript (ES6+)
- Styling: Custom CSS with CSS Variables (No Tailwind or heavy UI frameworks)
- Icons: React Icons (`react-icons/fi` and `react-icons/fa6`)
- Architecture: Single-Page Application (SPA) with smooth scroll navigation and centralized data state.

---

## Design System & Color Palette

The design identity is built around a dark, warm, and sophisticated palette:

- Midnight Violet (`#160029`): Primary background color.
- Deep Plum (`#25083B`): Secondary background color for cards, header, and contrast elements.
- Wine Plum (`#773344`): Subtle borders, gradients, and secondary accents.
- Lobster Pink (`#D44D5C`): Primary accent for buttons, active state, highlights, and CTA links.
- Almond Silk (`#E3B5A4`): Secondary accent for tags, secondary text, and subtle borders.
- Linen (`#F5E9E2`): Primary body and heading text color.

---

## Typography

- Headings: `Cormorant Garamond` (Serif) - Adds an editorial, premium aesthetic.
- Body & UI: `Inter` (Sans-Serif) - Ensures high legibility across desktop and mobile screens.

---

## Data Architecture

All personal data, links, skills, projects, certifications, and achievements are centralized in `src/data/portfolioData.js`. 

Components render dynamically from this file, ensuring that updating personal information does not require editing JSX templates.

---

## Component Breakdown

1. `Navbar.jsx`: Sticky header with responsive navigation, brand logo, and smooth scrolling anchor links. Mobile navigation includes an accessible toggle menu.
2. `Hero.jsx`: Main introduction banner featuring eyebrow text, role description, call-to-action buttons, quick social links, and an abstract CSS geometric visual motif.
3. `About.jsx`: Narrative overview detailing current learning goals, interests, and career objectives without inflating experience.
4. `Skills.jsx`: Categorized display of programming languages, frontend tools, databases, and developer utilities presented as elegant tag elements.
5. `Projects.jsx`: Editorial layout for featured projects featuring alternating card designs, project numbers, technology stacks, GitHub links, and live demo buttons.
6. `Github.jsx`: Focused call-to-action highlighting open-source activity and repository exploration.
7. `Resume.jsx`: Direct resume download section pointing to `/resume.pdf`.
8. `Certifications.jsx`: Section structure with an honest empty state for ongoing or upcoming credentials.
9. `Achievements.jsx`: Section structure with an honest empty state for future academic or competition milestones.
10. `Contact.jsx`: Clean email and social connection hub using direct mailto link.
11. `Footer.jsx`: Minimalist footer with copyright, navigation links, and credits.

---

## Customization & Placeholder Guide

To customize this portfolio with your actual information:

1. Edit `src/data/portfolioData.js`:
   - Replace `YOUR NAME` with your full name.
   - Replace `YOUR_EMAIL` with your email address.
   - Replace `YOUR_GITHUB_URL` and `YOUR_LINKEDIN_URL` with your profile links.
   - Update `projects` array with your actual projects.
   - Update `skills` categories with your technical competencies.
   - Update `certifications` and `achievements` arrays when earned.

2. Replace Resume PDF:
   - Save your updated resume as `resume.pdf` and place it in the `public/` directory, overwriting `public/resume.pdf`.

---

## Running and Building

- Installation: `npm install`
- Local Development Server: `npm run dev`
- Production Build: `npm run build`
- Preview Production Build: `npm run preview`
