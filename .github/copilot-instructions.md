# Copilot Instructions for Portfolio Website

## Project Overview
This is a **single-page portfolio website** with a brutalist/minimalist design aesthetic. Built with vanilla HTML/CSS/JS (no framework), it features interactive canvas animations, dynamic content population, and theme switching. The entire site is client-side only—no backend, no build process.

## Architecture

### File Structure (Flat & Simple)
```
index.html          # Single-page structure with semantic sections
style.css           # Complete styling (~1000 lines, CSS variables for theming)
app.js              # All JS: data, DOM manipulation, canvas animations, interactions
assets/             # Images (project screenshots, logos, resume PDF)
```

### Data-Driven Design Pattern
**All portfolio content lives in `portfolioData` object in [app.js](app.js#L3-L149)**:
- `personalInfo` - Contact, bio, social links
- `projects` - Work samples with descriptions, tech stacks, links
- `workExperience` - Jobs with responsibilities, dates, locations
- `education` - Degrees, institutions, courses
- `skills` - Categorized technical skills with `topSkills` array
- `certifications` - Professional certs with verification links

**Pattern**: To update content, edit the `portfolioData` object. Functions like `populateWork()`, `populateExperience()`, `populateSkills()` read from this source of truth and dynamically generate HTML via `innerHTML`.

## Key Components

### 1. Section Navigation System
The site uses a **multi-section active state** pattern (not traditional scroll-based):
- Clicking nav links toggles which sections are visible via `.active` class
- `sectionMap` object in [app.js](app.js#L454-L461) defines which sections show together:
  ```javascript
  const sectionMap = {
    home: ['home', 'about'],
    work: ['home', 'experience', 'work'],  // Shows hero + timeline + projects
    about: ['about'],
    // ...
  };
  ```
- `setActiveSections()` function handles transitions, scroll-locking for full-screen views

### 2. Canvas Animations (Performance-Critical)
Two interactive dot matrix animations using HTML5 Canvas:

**Nav Logo Animation** ([app.js](app.js#L520-L683)):
- Renders "ADITYA KULKARNI" as interactive dots
- Uses temporary high-res canvas (2x scale) for better text sampling
- Physics: spring forces, damping (0.85), mouse repulsion
- Dark mode changes hovered dot color from white to black

**Arrow Animation** ([app.js](app.js#L695-L823)):
- Rotated "V" character rendered as dot matrix
- Similar physics but different interaction radius (40px vs 50px)

**Pattern**: Both use `requestAnimationFrame`, device pixel ratio scaling, and debounced resize handlers.

### 3. Dark Mode Implementation
**CSS Variable-based theming** ([style.css](style.css#L11-L28)):
```css
:root { --color-bg: #f8f8f8; --color-text: #1a1a1a; }
body.dark-mode { --color-bg: #1a1a1a; --color-text: #f8f8f8; }
```
- Preference stored in `localStorage` with system preference fallback
- `initializeDarkMode()` function in [app.js](app.js#L825-L883) handles toggle logic
- Canvas animations check `document.body.classList.contains('dark-mode')` for color changes

### 4. Experience Timeline
**Expandable rows with data attributes** ([app.js](app.js#L365-L429)):
- Uses `dataset.expanded` to track state
- Icon fallback: displays first letter of company name if logo missing
- Click handler toggles arrow rotation and responsibility visibility

### 5. Project Cards with Collapsible Descriptions
Each work item has toggle button for description ([app.js](app.js#L330-L343)):
- Inline styles control initial `display: none`
- Arrow rotation class `.expanded` added/removed on toggle
- Tech stack limited to first 5 items via `.slice(0, 5)`

## Development Conventions

### Styling Guidelines
- **No utility classes**: Uses semantic class names (`.hero-card`, `.work-item`, `.experience-row`)
- **CSS custom properties** for all theming, spacing, typography
- **Fixed header** with 2px border, sections have full-width background alternation
- **Brutalist aesthetic**: Bold borders, stark contrasts, Space Grotesk/Space Mono fonts

### JavaScript Patterns
- **Pure vanilla JS**: No frameworks, libraries, or transpilation
- **DOMContentLoaded checks**: All init functions check `document.readyState`
- **Guard clauses**: Functions return early if DOM element not found (`if (!element) return;`)
- **Template literals** for HTML generation, not JSX or templates
- **Event delegation**: Minimal—events attached directly to dynamically created elements

### Content Update Workflow
1. Edit `portfolioData` object in [app.js](app.js#L3)
2. Add any new images to `assets/` folder
3. Refresh browser—no build step required

### Common Gotchas
- **Resume PDF path**: Hardcoded as `assets/Aditya_Kulkarni_Resume.pdf` in two places ([index.html](index.html#L36), [index.html](index.html#L51))
- **Canvas animation performance**: Both animations run continuously via `requestAnimationFrame`—no pause when off-screen
- **Section visibility**: Uses CSS `.active` class, not JavaScript scroll detection
- **Dark mode canvas colors**: Logic is split between CSS variables and canvas `fillStyle` conditionals

## Testing & Validation
- **No automated tests**: Manual browser testing only
- **Cross-browser concerns**: Canvas uses `devicePixelRatio` for HiDPI screens
- **Responsive**: Media queries in [style.css](style.css) handle mobile layouts
- **Performance**: Watch canvas animation frame rates on lower-end devices

## Deployment
Static site hosting (GitHub Pages, Netlify, etc.):
- No build process needed
- Ensure `assets/` folder is included
- All paths are relative—works from any subdirectory
