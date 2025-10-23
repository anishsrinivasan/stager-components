# Stager UI Components

A modern UI component library built with Tailwind CSS v4, Radix UI, and TypeScript. This monorepo provides a scalable design system with CSS variable theming, making it easy to maintain consistency across multiple products while allowing for brand customization.

## 🏗️ Architecture

This is a Turborepo monorepo containing:

- **`packages/ui`** - Core component library (`@stager-org/ui`) with TypeScript source distribution
- **`apps/web`** - Next.js demo application with interactive theme customization
- **`apps/docs`** - Documentation site (Next.js)
- **`packages/eslint-config`** - Shared ESLint configuration
- **`packages/typescript-config`** - Shared TypeScript configuration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 10.9.2+

### Installation

```bash
# Install dependencies
npm install

# Start development servers
npm run dev
```

This will start:
- Web demo at `http://localhost:3000` (with interactive theme customization)
- Docs at `http://localhost:3001` (if running)

## 📦 Package Structure

### UI Package (`packages/ui`)

The core component library with:

- **Components**: Button (more coming soon)
- **Theming**: CSS variables for colors, spacing, typography
- **TypeScript**: Full type safety and IntelliSense
- **Exports**: Tree-shakeable individual component imports

```tsx
// Import components
import { Button } from "@stager-org/ui";

// Import styles
import "@stager-org/ui/globals.css";
```

### Demo Applications

#### Web App (`apps/web`)
- Next.js 15 with App Router
- Component showcase and examples
- Interactive theme customization controls
- Real-time theme preview
- Tailwind CSS v4 integration

## 🎨 Theming System

### CSS Variables

The library uses CSS variables for theming, making it easy to customize:

```css
:root {
  /* Colors */
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  
  /* Spacing */
  --radius: 0.5rem;
  
  /* Typography */
  --font-sans: "Geist Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;
}
```

### Using the Package

For detailed installation instructions, see:
- [Installation Guide](./packages/ui/INSTALLATION.md) - Complete setup for Next.js, Vite, CRA
- [Theme Variables Reference](./packages/ui/THEME_VARIABLES.md) - All CSS variables explained
- [UI Package README](./packages/ui/README.md) - Component documentation

### Quick Installation

```bash
npm install @stager-org/ui
```

```tsx
import { Button } from "@stager-org/ui";
import "@stager-org/ui/globals.css";

function App() {
  return <Button>Hello World</Button>;
}
```

### Custom Themes

Create product-specific themes by overriding CSS variables:

```css
:root {
  --primary: oklch(0.4 0.2 200); /* Brand blue */
  --secondary: oklch(0.9 0.1 200); /* Light blue */
  --accent: oklch(0.8 0.15 200); /* Accent blue */
  --radius: 0.5rem; /* Consistent border radius */
}
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start all dev servers
npm run build        # Build all packages
npm run lint         # Lint all packages
npm run format       # Format code with Prettier
npm run check-types  # Type check all packages

# Package-specific
npm run dev --filter=web        # Start only web app
npm run build --filter=ui      # Build only UI package
```

### Adding New Components

1. Create component in `packages/ui/src/components/`
2. Export from `packages/ui/src/index.tsx`
3. Add to demo apps for testing
4. Update documentation

### Framework Integration

#### Next.js
```javascript
// next.config.js
module.exports = {
  transpilePackages: ["@stager-org/ui"],
};
```

#### Vite
```typescript
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: ['@stager-org/ui']
  }
})
```

#### Create React App
Requires Tailwind CSS v3 configuration - see [Installation Guide](./packages/ui/INSTALLATION.md) for details.

## 📚 Documentation

### Component Library
- [UI Package README](./packages/ui/README.md) - Detailed component documentation
- [Installation Guide](./packages/ui/INSTALLATION.md) - Complete setup instructions
- [Theme Variables Reference](./packages/ui/THEME_VARIABLES.md) - CSS variables documentation

### Demo Applications
- [Web Demo](./apps/web) - Next.js showcase with interactive theme customization

## 🔧 Configuration

### TypeScript
Shared TypeScript configurations in `packages/typescript-config/`:
- `base.json` - Base configuration
- `react-library.json` - For React libraries
- `nextjs.json` - For Next.js applications

### ESLint
Shared ESLint configurations in `packages/eslint-config/`:
- `base.js` - Base rules
- `next.js` - Next.js specific rules
- `react-internal.js` - Internal React rules

## 🚀 Deployment

### Building for Production

```bash
# Build all packages
npm run build

# Build specific package
npm run build --filter=ui
```

### Publishing

The UI package is configured for publishing to npm:

```bash
# Publish UI package
cd packages/ui
npm publish
```

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Core component library (Button)
- ✅ CSS variable theming with OKLCH colors
- ✅ TypeScript source distribution
- ✅ Next.js and Vite compatibility
- ✅ Interactive theme customization
- ✅ Comprehensive documentation

### Phase 2 (Planned)
- [ ] Additional components (Input, Card, Dialog, Dropdown, etc.)
- [ ] Build step for external distribution
- [ ] Storybook documentation
- [ ] Unit and integration tests
- [ ] Dark mode support
- [ ] Animation utilities

### Phase 3 (Future)
- [ ] Design tokens system
- [ ] Figma integration
- [ ] Component analytics
- [ ] A11y testing automation

## 🤝 Contributing

1. Make changes in the appropriate package
2. Test changes in demo applications
3. Update documentation
4. Ensure all checks pass: `npm run lint && npm run check-types`

## 📄 License

This project is part of the stager Components Package and follows the organization's licensing terms.

## 🆘 Support

For questions or issues:
1. Check the [Installation Guide](./packages/ui/INSTALLATION.md) for setup help
2. Review the [Theme Variables Reference](./packages/ui/THEME_VARIABLES.md) for customization
3. Visit the [demo application](http://localhost:3000) for interactive examples
4. Open an issue for bugs or feature requests