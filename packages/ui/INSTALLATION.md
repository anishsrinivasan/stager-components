# Installation Guide

This guide will help you install and configure `@stager-org/ui` in your React application.

## Quick Start

### 1. Install the Package

```bash
npm install @stager-org/ui
```

### 2. Install Peer Dependencies

```bash
npm install react react-dom
npm install tailwindcss@^4.1.16 @tailwindcss/postcss@^4.1.16 postcss autoprefixer
```

### 3. Import Styles

Add this import to your main CSS file or layout component:

```css
@import "@stager-org/ui/globals.css";
```

### 4. Use Components

```tsx
import { Button } from "@stager-org/ui";

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}
```

## Framework-Specific Setup

### Next.js (App Router)

#### 1. Install Dependencies

```bash
npm install @stager-org/ui
npm install tailwindcss@^4.1.16 @tailwindcss/postcss@^4.1.16 postcss autoprefixer
```

#### 2. Configure PostCSS

Create or update `postcss.config.js`:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

#### 3. Configure Next.js

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@stager-org/ui"],
};

export default nextConfig;
```

#### 4. Import Styles

In your `app/layout.tsx`:

```tsx
import "@stager-org/ui/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### 5. Use Components

```tsx
import { Button } from "@stager-org/ui";

export default function Home() {
  return (
    <div>
      <Button>Hello World</Button>
    </div>
  );
}
```

### Vite

#### 1. Install Dependencies

```bash
npm install @stager-org/ui
npm install tailwindcss@^4.1.16 @tailwindcss/postcss@^4.1.16 postcss autoprefixer
```

#### 2. Configure PostCSS

Create `postcss.config.js`:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

#### 3. Configure Vite

Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@stager-org/ui']
  }
})
```

#### 4. Import Styles

In your `main.tsx`:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@stager-org/ui/globals.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### 5. Use Components

```tsx
import { Button } from "@stager-org/ui";

function App() {
  return (
    <div>
      <Button>Hello World</Button>
    </div>
  );
}

export default App;
```

### Create React App

#### 1. Install Dependencies

```bash
npm install @stager-org/ui
npm install tailwindcss@^3.4.0 postcss autoprefixer
```

#### 2. Configure PostCSS

Create `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### 3. Configure Tailwind

Create `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
```

#### 4. Import Styles

In your `src/index.css`:

```css
@import "@stager-org/ui/globals.css";
```

#### 5. Use Components

```tsx
import { Button } from "@stager-org/ui";

function App() {
  return (
    <div>
      <Button>Hello World</Button>
    </div>
  );
}

export default App;
```

## Theme Customization

### Option 1: Direct Import (Simplest)

Import the package CSS and override variables in your own CSS:

```css
/* In your main CSS file */
@import "@stager-org/ui/globals.css";

/* Override theme variables */
:root {
  --primary: oklch(0.4 0.2 200); /* Custom blue */
  --secondary: oklch(0.9 0.1 200); /* Light blue */
  --radius: 0.75rem; /* More rounded corners */
}
```

### Option 2: Copy Theme Variables (Most Flexible)

Copy the complete theme variables to your own CSS file:

```css
/* Copy this to your globals.css */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.556 0 0);
}
```

## Component Usage

### Button Component

```tsx
import { Button } from "@stager-org/ui";

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="default">Default</Button>
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

// With click handler
<Button onClick={() => alert('Clicked!')}>
  Click me
</Button>
```

### TypeScript Support

The package includes full TypeScript definitions:

```tsx
import { Button } from "@stager-org/ui";
import type { ButtonProps } from "@stager-org/ui";

// All props are typed
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Troubleshooting

### Common Issues

1. **Styles not loading**: Make sure you've imported the CSS file
2. **Tailwind classes not working**: Ensure PostCSS is configured correctly
3. **TypeScript errors**: Make sure you have the latest version of the package

### Getting Help

- Check the [Theme Variables Reference](./THEME_VARIABLES.md)
- Review the [UI Package README](./README.md)
- Visit the [demo application](http://localhost:3000) for examples

## Copy-Paste Examples

### Complete PostCSS Config

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

### Complete Next.js Config

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@stager-org/ui"],
};

export default nextConfig;
```

### Complete Vite Config

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@stager-org/ui']
  }
})
```

### Theme Override Example

```css
/* Custom theme for your brand */
:root {
  --primary: oklch(0.4 0.2 200); /* Brand blue */
  --secondary: oklch(0.9 0.1 200); /* Light blue */
  --accent: oklch(0.6 0.2 300); /* Purple accent */
  --destructive: oklch(0.5 0.2 20); /* Brand red */
  --radius: 0.5rem; /* Consistent border radius */
}
```
