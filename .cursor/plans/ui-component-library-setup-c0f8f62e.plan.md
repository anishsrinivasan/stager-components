<!-- c0f8f62e-8b7e-49e0-9b93-d5334c61a880 53b8fd0b-d2d0-46e7-a550-4277067aa695 -->
# Component Library Documentation and Theme Customization

## Overview

Create production-ready documentation for installing and using the UI component library in consumer applications, plus add interactive theme customization to the demo page.

## 1. Update Package Configuration for npm Publishing

**File: `packages/ui/package.json`**

- Update package name from `@workspace/ui` to `@stager-org/ui`
- Set proper version (e.g., `1.0.0`)
- Add repository, author, and license fields
- Ensure `main` and `types` exports point correctly
- Add `files` field to specify what gets published

## 2. Create Installation Documentation

**File: `packages/ui/INSTALLATION.md`** (new file)

Create comprehensive guide with:

### Quick Start Section

- npm installation command: `npm install @stager/ui`
- Peer dependencies (React, Tailwind CSS v4, PostCSS)
- CSS import: `import "@stager/ui/globals.css"`
- Component import example

### Setup for Next.js

- PostCSS config with `@tailwindcss/postcss`
- `next.config.js` transpilePackages configuration
- Layout file CSS import
- Complete working example

### Setup for Vite

- PostCSS config
- Vite config optimizeDeps
- main.tsx CSS import
- Complete working example

### Setup for Other React Apps

- PostCSS and Tailwind setup
- CSS import approach
- Component usage

### Theme Customization Section

**Option 1: Direct Import (Simplest)**

- Import package CSS directly
- Override variables in your own CSS file

**Option 2: Copy Theme Variables (Most Flexible)**

- Provide complete CSS variable list for copy-paste
- Show how to customize colors, spacing, fonts
- Include both light and dark mode variables

### Component Usage Examples

- Button component with all variants
- Props documentation
- TypeScript usage

## 3. Update Root README

**File: `README.md`**

- Update to reflect current package structure (remove CRA demo references)
- Add link to installation guide
- Update package name from `@repo/ui` to `@workspace/ui`
- Add "Using the Package" section with link to installation docs
- Update available themes and customization info

## 4. Add Theme Customization Controls to Demo Page

**File: `apps/web/app/page.tsx`**

Add interactive theme editor at the top/side of the page:

- Color pickers for key theme colors (primary, secondary, accent, destructive, background, foreground)
- Radius slider (0-1rem)
- Font family selector (optional)
- Real-time preview using JavaScript to update CSS variables via `document.documentElement.style.setProperty()`
- "Reset to Default" button
- "Copy CSS" button to export the current theme as CSS variables

Example implementation:

```tsx
const [primary, setPrimary] = useState('oklch(0.205 0 0)');

useEffect(() => {
  document.documentElement.style.setProperty('--primary', primary);
}, [primary]);
```

## 5. Update UI Package README

**File: `packages/ui/README.md`**

- Add installation instructions from INSTALLATION.md
- Update component list (only Button currently)
- Add theme customization examples
- Include links to demo app

## 6. Add CSS Variables Reference

**File: `packages/ui/THEME_VARIABLES.md`** (new file)

Complete reference of all CSS variables:

- Colors (with descriptions and default values)
- Spacing/radius
- Typography
- Include OKLCH format explanation
- Show how to convert from HEX/RGB to OKLCH

## 7. Create Copy-Paste Examples

Add to installation docs:

- Complete globals.css file for copy-paste
- PostCSS config examples
- Next.js config snippet
- Vite config snippet
- Theme override examples

## Key Implementation Details

**Theme Controls Pattern:**

```tsx
// Use useState for each theme variable
const [primary, setPrimary] = useState('oklch(0.205 0 0)');

// Update CSS variable on change
useEffect(() => {
  document.documentElement.style.setProperty('--primary', primary);
}, [primary]);

// Copy theme function
const copyTheme = () => {
  const css = `:root {
  --primary: ${primary};
  /* ... other variables */
}`;
  navigator.clipboard.writeText(css);
};
```

**Package Export in package.json:**

```json
{
  "name": "@stager/ui",
  "version": "1.0.0",
  "main": "./src/components/button.tsx",
  "exports": {
    "./globals.css": "./src/styles/globals.css",
    "./components/*": "./src/components/*.tsx",
    "./lib/*": "./src/lib/*.ts"
  },
  "files": ["src", "README.md"]
}
```

### To-dos

- [ ] Install Tailwind, Radix UI, and component utilities
- [ ] Create CSS variable system and theme files
- [ ] Set up Tailwind configuration with CSS variables
- [ ] Create utility functions and shared types
- [ ] Build initial component set (Button, Input, Label, Select, Separator, Card)
- [ ] Configure package.json exports and module resolution
- [ ] Update web app with Tailwind config and component examples
- [ ] Write comprehensive README with usage instructions