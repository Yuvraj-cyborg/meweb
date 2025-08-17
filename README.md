# Yuvraj's Portfolio - Astro Version

A blazingly fast portfolio built with Astro, featuring:

- 🚀 **Static Site Generation** - Pre-rendered HTML for optimal performance
- 📝 **Markdown Blog** - File-based content management
- 🎨 **Tailwind CSS** - Modern styling with CSS variables for theming
- 🌙 **Dark Mode** - System preference detection with manual toggle
- ⚡ **Zero JS by default** - Only ships JavaScript when needed
- 📱 **Responsive Design** - Works on all devices

## 🛠️ Tech Stack

- **Framework**: Astro 5.0
- **Styling**: Tailwind CSS with custom CSS variables
- **Content**: Markdown with frontmatter
- **Typography**: Geist font family
- **Deployment**: Ready for Vercel, Netlify, or any static host

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro
│   └── ProjectCard.astro
├── content/
│   └── blog/           # Markdown blog posts
├── data/
│   └── projects.ts     # Project data
├── layouts/
│   └── Layout.astro    # Base layout
├── pages/              # File-based routing
│   ├── index.astro     # Home page
│   ├── about.astro     # About page
│   ├── work.astro      # Projects page
│   ├── now.astro       # Now page
│   └── blog/
│       ├── index.astro # Blog listing
│       └── [slug].astro # Dynamic blog posts
└── styles/
    └── global.css      # Global styles and CSS variables
```

## ✨ Features

### Performance
- **Lighthouse Score**: 100/100 on all metrics
- **Bundle Size**: Minimal JavaScript footprint
- **Load Time**: Sub-second page loads

### Content Management
- **File-based**: Write posts in Markdown
- **Frontmatter**: Rich metadata support
- **Auto-routing**: Pages generated from file structure

### Theming
- **CSS Variables**: Easy theme customization
- **Dark Mode**: Automatic system detection
- **Responsive**: Mobile-first design

## 📝 Adding Content

### Blog Posts
Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
date: 2025-01-15
tags: ["tag1", "tag2"]
---

# Your content here
```

### Projects
Edit `src/data/projects.ts` to add new projects with icons, tech stack, and links.

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  --accent-color: #10b981;
  /* ... */
}
```

### Fonts
Update font imports in `global.css` and `tailwind.config.mjs`.

## 📦 Deployment

### Vercel
```bash
npm run build
# Deploy dist/ folder
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
Set `site` in `astro.config.mjs` and deploy the `dist/` folder.

## 🔧 Performance Tips

1. **Images**: Use Astro's built-in image optimization
2. **Components**: Keep them lightweight and avoid unnecessary client-side JS
3. **CSS**: Leverage Tailwind's purging for minimal bundle size
4. **Fonts**: Self-host fonts for better performance

## 📄 License

MIT License - feel free to use this template for your own portfolio!