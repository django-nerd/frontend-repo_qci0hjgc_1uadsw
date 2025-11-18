# N1 AI — Automation Agency Website

A modern, professional website for N1 AI built with Vite, React, TailwindCSS, and GSAP. It features smooth scroll-triggered animations, a Spline 3D hero, and a clean corporate aesthetic.

## Tech Stack
- Vite + React
- TailwindCSS
- GSAP + ScrollTrigger (primary animations)
- Spline 3D React component for hero
- React Router for pages
- react-helmet-async for SEO meta tags

## Pages
- Home
- Solutions
- Products
- About
- Contact
- 404

## Run locally
1. Install deps and start dev server
   - npm install
   - npm run dev
2. Open the provided URL (usually http://localhost:3000)

## Structure
- Components for Hero, Feature Grid, Solutions, How It Works, Products, Stats, Navbar, Footer, Layout
- Reusable GSAP setup with ScrollTrigger registered in `src/lib/gsap.js`

## Notes
- Tailwind theme includes brand colors: primary (#1fb6ff), secondary (#0a0f1a), accent (#ff49db)
- Animations: staggered hero, fade-up sections, card hover micro-interactions, parallax on hero Spline
- SEO: meta title + description per page, OG tags on Home
