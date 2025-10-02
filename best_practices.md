# 📘 Project Best Practices

## 1. Project Purpose
A production-ready Next.js template for marketing websites in the construction and home services domain (e.g., contractors, builders, cleaning services). It ships with a responsive layout, Bootstrap 5 styling, SCSS architecture, reusable React components, and basic SEO and accessibility patterns. The project uses the Next.js Pages Router and focuses on fast iteration for content-driven pages.

## 2. Project Structure
- pages/
  - _app.jsx: Global CSS/SCSS imports, runtime-only plugin initialization, global metadata, and Layout wrapping.
  - _document.jsx: HTML shell with favicons, font preconnects, and custom head tags.
  - index.jsx: Home route composed from reusable components. Page-level <Head> to override title/description.
- src/
  - components/: Reusable React components (PascalCase files). Examples: Header, Navbar, Footer, Hero, Services, PageProgress, Layout, NextLink wrapper, SocialLinks.
  - hooks/: Custom hooks (camelCase file names). Example: useSticky for scroll-based state.
  - theme/: ThemeProvider for page loader lifecycle and route-aware side effects.
  - plugins/scrollcue/: In-repo scroll animation utility (initialized in _app on route changes).
  - assets/scss/: Modular SCSS with theme partials and variables. style.scss is the main entrypoint.
  - styles/: Additional global CSS files (style.css, responsive.css) imported in _app.
  - data.js: Static data used by components.
- public/
  - img/, video/, fonts/: Static assets served directly by Next.js.
  - css/: Optional compiled CSS output from the "sass" script.
- Config & tooling
  - package.json: Next/React/Bootstrap, sass, and scripts (dev, build, start, sass).
  - next.config.js: images.unoptimized=true; custom webpack rule for media (mp4/webm).
  - jsconfig.json: Path aliases for clean imports (components/*, hooks/*, etc.).
  - .prettierrc.js: Formatting rules.

Notes
- The project uses the Pages Router (pages/), despite the README mentioning the App Router. Follow Pages Router conventions.
- Global CSS/SCSS is imported in _app.jsx (Next supports Sass compilation when "sass" is installed). A separate npm script also compiles SCSS to public/css if desired.

## 3. Test Strategy
No tests are included by default. Recommended setup:
- Unit & Component tests: Jest + React Testing Library
  - Directory: co-locate tests next to components (e.g., src/components/Hero.test.jsx) or use src/__tests__.
  - Mock Next.js internals: mock next/router (useRouter), next/head where necessary.
  - Mock window-dependent features: guard or mock window.scrollTo, window.scrollY, IntersectionObserver.
  - Mock third-party inits (bootstrap JS, scrollCue) when asserting component behavior.
  - Snapshot tests for presentational components with stable DOM structures (e.g., Footer, Services).
- Integration tests
  - Render pages (pages/*.jsx) with provider wrappers (Layout/ThemeProvider as needed) to validate composition.
  - Assert SEO tags via next/head for each page.
- E2E tests (optional)
  - Playwright or Cypress for navigation, responsiveness, and accessibility smoke checks.
- Coverage
  - Aim for 70%+ statements/branches on core components (Header/Navbar, Hero, Services, PageProgress).

## 4. Code Style
- General
  - Functional components with React hooks (no class components).
  - Keep components small and focused; compose via Layout.
  - Prefer data-driven rendering (map over arrays) with stable keys.
  - Use Prettier config in repo: single quotes, no trailing commas, print width 120.
- Typing & docs
  - Use concise JSDoc for component props where helpful (example: Layout, NextLink).
- Async & side effects
  - Only access browser APIs in effects: if (typeof window !== 'undefined') { ... }.
  - Dynamically import browser-only libs (e.g., bootstrap) inside useEffect to avoid SSR issues.
  - Always clean up event listeners and timers in useEffect.
- Naming conventions
  - Files: Components in PascalCase (Hero.jsx), hooks in camelCase (useSticky.js), pages in lowercase route files.
  - Variables/functions: camelCase. Components: PascalCase. Constants/enums: UPPER_SNAKE_CASE when appropriate.
- Styling
  - Prefer SCSS classes over inline styles for maintainability; keep inline styles minimal.
  - Extend or add SCSS partials under src/assets/scss/theme/, aggregate in _theme.scss or style.scss.
  - Use variables from _variables.scss and _theme-colors.scss for consistent theming.
  - Bootstrap utility classes are encouraged to reduce custom CSS when reasonable.
- Accessibility & SEO
  - Provide aria-labels and alt text. Ensure button roles and interactive elements are keyboard accessible.
  - Use next/head in pages for per-page title/description; keep global defaults in _app.
  - Replace placeholder social images/URLs with production values.
- Error handling
  - Guard SSR-incompatible code, especially around window/document.
  - Fail gracefully: conditionally render or no-op if refs aren’t available.

## 5. Common Patterns
- Layout wrapper
  - pages/_app.jsx wraps all pages with <Layout> and <ThemeProvider> for consistent header/footer and global behavior.
- Sticky header pattern
  - useSticky(height) hook adds scroll listener to set sticky state; consumed by Header/Navbar for class toggling.
- Page progress indicator
  - PageProgress uses refs + scroll handler to update an SVG stroke. Cleans up listeners in useEffect.
- Scroll animations
  - scrollCue is initialized on route change. To animate elements, add data-cues, data-interval, data-duration attributes to container/children per the plugin docs.
- Path aliases
  - Import via aliases defined in jsconfig.json (e.g., import Header from 'components/Header').
- Asset handling
  - Place static assets in public/. For videos, prefer /public/video/... referenced by src on <video>.

## 6. Do's and Don'ts
- Do
  - Keep components presentational and composable; pass data via props.
  - Initialize browser-only libraries inside useEffect.
  - Use path aliases for readability and consistency.
  - Centralize colors/spacing/typography in SCSS variables.
  - Add aria-labels for icons/links and descriptive alt text for images.
  - Keep meta tags accurate and page-specific.
- Don’t
  - Access window/document during SSR or outside effects.
  - Overuse inline styles; prefer SCSS classes.
  - Hardcode external URLs in multiple places—extract to config or data files.
  - Block the main thread with heavy synchronous logic in effects.
  - Commit secret keys or sensitive data; use environment variables.

## 7. Tools & Dependencies
- Core libraries
  - next ^14, react ^18, react-dom ^18
  - bootstrap ^5.3, @popperjs/core (for Bootstrap), animate.css
  - sass for SCSS compilation
- Scripts
  - npm run dev: Start development server
  - npm run build: Production build
  - npm start: Start production server
  - npm run sass: Optional SCSS CLI build to public/css (useful for non-Next static workflows)
- Configuration
  - next.config.js: images.unoptimized = true. If you move to Next/Image optimization, update this and prefer <Image>.
  - jsconfig.json: Update path aliases when adding new top-level folders.
  - .prettierrc.js: Respect formatting settings.
- Setup
  - Node 18+. npm i. npm run dev. Visit http://localhost:3000.

## 8. Other Notes
- Router choice
  - This project uses the Pages Router (pages/). Follow file-based routing via pages/ and use next/head per-page.
- Images & performance
  - next.config.js sets images.unoptimized=true. If switching to <Image> optimization, remove or adjust this flag and provide remotePatterns when needed.
- SEO placeholders
  - Replace TODO placeholders in _app.jsx meta (title, description, og/twitter images/URLs) with production values.
- SSR guards
  - Fix or follow the convention: if (typeof window !== 'undefined') to avoid SSR crashes (watch for string literal).
- Plugin lifecycle
  - scrollCue.init is invoked on route changes; if you add pages with dynamic content or portals, call scrollCue.update() after content mounts to re-scan elements.
- CSS/SCSS approach
  - Next compiles SCSS via the sass package; prefer importing SCSS in _app over writing to public/css. The npm run sass script is optional; avoid divergence between generated CSS and SCSS sources.
- Consistency
  - Use the NextLink wrapper consistently (it expects { href, className, title }). If you need standard children semantics, add a second wrapper or adjust the existing one carefully.
