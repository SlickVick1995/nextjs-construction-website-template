# Buildify - Next.js Construction Website Template

A modern, responsive website template built with Next.js, React, and Bootstrap for construction companies, contractors, and builders.

## 🚀 Features

- **Next.js 14+** with App Router
- **React 18+** with modern hooks
- **Bootstrap 5.3** responsive grid system
- **SCSS** modular styling architecture
- **Mobile-first** responsive design
- **SEO optimized** with proper meta tags
- **Performance optimized** with lazy loading
- **Accessibility compliant** (WCAG guidelines)

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development](#development)
- [Components](#components)
- [Styling](#styling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ⚡ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/buildify.git

# Navigate to project directory
cd buildify

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
buildify/
├── pages/                    # Next.js pages
│   ├── _app.jsx             # App wrapper component
│   ├── _document.jsx        # HTML document structure
│   └── index.jsx            # Homepage
├── src/
│   ├── components/          # React components
│   │   ├── Hero.jsx         # Hero section component
│   │   ├── Header.jsx       # Site header
│   │   ├── Footer.jsx       # Site footer
│   │   └── ...
│   ├── assets/scss/         # SCSS styling
│   │   ├── theme/           # Theme-specific styles
│   │   │   ├── _hero.scss   # Hero component styles
│   │   │   ├── _buttons.scss
│   │   │   └── ...
│   │   ├── _variables.scss  # SCSS variables
│   │   └── style.scss       # Main stylesheet
│   ├── hooks/               # Custom React hooks
│   ├── theme/               # Theme configuration
│   └── data.js              # Static data
├── public/                  # Static assets
│   ├── img/                 # Images
│   ├── css/                 # Compiled CSS
│   └── fonts/               # Web fonts
└── package.json
```

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Compile SCSS to CSS
npm run sass

# Lint code
npm run lint
```

### Development Workflow

1. **Start development server**: `npm run dev`
2. **Edit components**: Modify files in `src/components/`
3. **Update styles**: Edit SCSS files in `src/assets/scss/`
4. **Compile styles**: Run `npm run sass` after SCSS changes
5. **Test responsiveness**: Use browser dev tools to test different screen sizes

## 🧩 Components

### Hero Component

The Hero component is the main banner section featuring:

- **Responsive video placeholder** (1280x720px → mobile optimized)
- **Professional team imagery** with rounded corners
- **Call-to-action button** with hover effects
- **Mobile-optimized layout** with stacked content
- **Accessibility features** with proper ARIA labels

```jsx
import Hero from 'components/Hero';

// Usage
<Hero />
```

#### Hero Component Features

- ✅ **Fully responsive** across all device sizes
- ✅ **Touch-optimized** for mobile devices
- ✅ **SEO-friendly** with semantic HTML
- ✅ **Performance optimized** with lazy loading
- ✅ **Accessibility compliant** with ARIA attributes

#### Mobile Breakpoints

- **1200px+**: Desktop layout
- **992px**: Tablet landscape
- **768px**: Tablet portrait
- **480px**: Mobile landscape  
- **360px**: Small mobile devices

### Other Components

- **Header**: Navigation with responsive menu
- **Footer**: Contact information and social links
- **Services**: Service offerings display
- **About**: Company information section

## 🎨 Styling

### SCSS Architecture

The project uses a modular SCSS architecture:

```scss
// Main stylesheet imports
src/assets/scss/style.scss

// Theme variables
src/assets/scss/_variables.scss
src/assets/scss/_theme-colors.scss

// Component-specific styles
src/assets/scss/theme/_hero.scss
src/assets/scss/theme/_buttons.scss
src/assets/scss/theme/_navbar.scss
```

### Custom Variables

Key SCSS variables can be customized in `_variables.scss`:

```scss
// Brand colors
$primary: #1a73e8;
$hero-title-color: #144070;
$hero-btn-bg: #17416F;

// Typography
$font-family-sans-serif: 'Manrope', sans-serif;
$hero-font-family: 'Kadwa', serif;

// Spacing
$spacer: 1rem;
$hero-section-padding: 4.375rem 0;
```

### Responsive Design

The template follows a mobile-first approach:

```scss
// Mobile first
.component {
  // Mobile styles (default)
  
  @media (min-width: 768px) {
    // Tablet styles
  }
  
  @media (min-width: 992px) {
    // Desktop styles
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy the 'out' folder to Netlify
```

### Traditional Hosting

```bash
# Build for production
npm run build

# Upload the generated files to your hosting provider
```

## 📱 Browser Support

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile browsers** (iOS Safari, Android Chrome)

## 🔧 Customization

### Changing Colors

Edit `src/assets/scss/_theme-colors.scss`:

```scss
$blue: #your-color !default;
$primary: $blue !default;
```

### Adding New Components

1. Create component file: `src/components/YourComponent.jsx`
2. Add styles: `src/assets/scss/theme/_your-component.scss`
3. Import styles in: `src/assets/scss/theme/_theme.scss`
4. Use component in pages

### Modifying the Hero Section

The Hero component can be customized by:

- Updating images in the component
- Modifying text content
- Adjusting styles in `_hero.scss`
- Changing responsive breakpoints

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Desktop responsiveness** (1200px+)
- [ ] **Tablet responsiveness** (768px-1199px)
- [ ] **Mobile responsiveness** (320px-767px)
- [ ] **Touch interactions** on mobile devices
- [ ] **Accessibility** with screen readers
- [ ] **Performance** with Lighthouse
- [ ] **Cross-browser compatibility**

### Performance Optimization

The template includes several performance optimizations:

- **Image lazy loading**: `loading="lazy"` attributes
- **Optimized fonts**: Preloaded web fonts
- **Minified CSS**: Production builds
- **Component code splitting**: Next.js automatic optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make changes and test thoroughly
4. Commit changes: `git commit -m "Add new feature"`
5. Push to branch: `git push origin feature/new-feature`
6. Submit a pull request

### Code Style Guidelines

- Use **functional components** with hooks
- Follow **JSX best practices**
- Maintain **SCSS modularity**
- Add **proper comments** for complex logic
- Ensure **mobile responsiveness**
- Include **accessibility attributes**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: This README and inline code comments
- **Issues**: [GitHub Issues](https://github.com/your-username/buildify/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/buildify/discussions)

## 🙏 Acknowledgments

- **Bootstrap** team for the CSS framework
- **Next.js** team for the React framework
- **Sass** team for the CSS preprocessor
- **Vercel** for hosting and deployment platform

---

**Built with ❤️ for the construction industry**

For more templates and themes, visit [Themixly](https://themixly.com/)
