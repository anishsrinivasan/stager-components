# @stager-org/ui

A modern UI component library built with Tailwind CSS v4, Radix UI, and TypeScript. Features CSS variable theming for easy customization across different products.

## 🚀 Quick Start

### Installation

```bash
npm install @stager-org/ui
```

### Basic Usage

```tsx
import { Button } from "@stager-org/ui";
import "@stager-org/ui/globals.css";

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}
```

## 📦 Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from "@stager-org/ui";

// Variants
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>

// As child element
<Button asChild>
  <a href="/link">As Link</a>
</Button>
```

## 🎨 Theming

The library uses CSS variables for theming, making it easy to customize colors, spacing, and typography.

### CSS Variables

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --border: oklch(0.922 0 0);
  --radius: 0.625rem;
}
```

### Custom Themes

Override variables in your CSS:

```css
:root {
  --primary: oklch(0.4 0.2 200); /* Brand blue */
  --secondary: oklch(0.9 0.1 200); /* Light blue */
  --accent: oklch(0.8 0.15 200); /* Accent blue */
  --radius: 0.5rem; /* Consistent border radius */
}
```

## 🛠️ Framework Setup

### Next.js

```bash
# Install dependencies
npm install @stager-org/ui tailwindcss@^4.1.16 @tailwindcss/postcss@^4.1.16 postcss autoprefixer

# Configure PostCSS (postcss.config.js)
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

# Configure Next.js (next.config.js)
const nextConfig = {
  transpilePackages: ["@stager-org/ui"],
};
export default nextConfig;
```

### Vite

```bash
# Install dependencies
npm install @stager-org/ui tailwindcss@^4.1.16 @tailwindcss/postcss@^4.1.16 postcss autoprefixer

# Configure PostCSS (postcss.config.js)
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

# Configure Vite (vite.config.ts)
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@stager-org/ui']
  }
})
```

### Create React App

```bash
# Install dependencies
npm install @stager-org/ui tailwindcss@^3.4.0 postcss autoprefixer

# Configure PostCSS (postcss.config.js)
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

# Configure Tailwind (tailwind.config.js)
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... other colors
      },
    },
  },
  plugins: [],
};
```

## 📚 Documentation

- [Installation Guide](./INSTALLATION.md) - Complete setup instructions
- [Theme Variables Reference](./THEME_VARIABLES.md) - All CSS variables explained
- [Demo Application](http://localhost:3000) - Interactive component showcase

## 🎯 Features

- **TypeScript Support**: Full type definitions included
- **CSS Variables**: Easy theming with CSS custom properties
- **OKLCH Colors**: Modern color format for better consistency
- **Tailwind CSS v4**: Latest Tailwind with CSS-first approach
- **Radix UI**: Accessible, unstyled components
- **Tree Shakeable**: Import only what you need
- **Framework Agnostic**: Works with React, Next.js, Vite, CRA

## 🔧 Development

### Adding New Components

1. Create component in `src/components/`
2. Export from `src/index.tsx`
3. Add to demo app for testing
4. Update documentation

### Building

```bash
# Build the package
npm run build

# Type check
npm run check-types

# Lint
npm run lint
```

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🆘 Support

- Check the [Installation Guide](./INSTALLATION.md) for setup help
- Review the [Theme Variables Reference](./THEME_VARIABLES.md) for customization
- Visit the [demo application](http://localhost:3000) for examples
- Open an issue for bugs or feature requests

## 🗺️ Roadmap

### Current (v1.0.0)
- ✅ Button component
- ✅ CSS variable theming
- ✅ TypeScript support
- ✅ Framework compatibility

### Planned (v1.1.0)
- [ ] Input component
- [ ] Card component
- [ ] Dialog component
- [ ] Dropdown component

### Future (v2.0.0)
- [ ] More components
- [ ] Animation utilities
- [ ] Dark mode support
- [ ] Design tokens system