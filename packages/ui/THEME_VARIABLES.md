# Theme Variables Reference

This document provides a complete reference of all CSS variables used in the `@stager-org/ui` component library.

## Color Variables

### Light Mode Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--background` | `oklch(1 0 0)` | Main background color |
| `--foreground` | `oklch(0.145 0 0)` | Main text color |
| `--card` | `oklch(1 0 0)` | Card background color |
| `--card-foreground` | `oklch(0.145 0 0)` | Card text color |
| `--popover` | `oklch(1 0 0)` | Popover background color |
| `--popover-foreground` | `oklch(0.145 0 0)` | Popover text color |
| `--primary` | `oklch(0.205 0 0)` | Primary brand color |
| `--primary-foreground` | `oklch(0.985 0 0)` | Primary text color |
| `--secondary` | `oklch(0.97 0 0)` | Secondary background color |
| `--secondary-foreground` | `oklch(0.205 0 0)` | Secondary text color |
| `--muted` | `oklch(0.97 0 0)` | Muted background color |
| `--muted-foreground` | `oklch(0.556 0 0)` | Muted text color |
| `--accent` | `oklch(0.97 0 0)` | Accent background color |
| `--accent-foreground` | `oklch(0.205 0 0)` | Accent text color |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Destructive/error color |
| `--destructive-foreground` | `oklch(0.577 0.245 27.325)` | Destructive text color |
| `--border` | `oklch(0.922 0 0)` | Border color |
| `--input` | `oklch(0.922 0 0)` | Input border color |
| `--ring` | `oklch(0.708 0 0)` | Focus ring color |

### Dark Mode Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--background` | `oklch(0.145 0 0)` | Main background color |
| `--foreground` | `oklch(0.985 0 0)` | Main text color |
| `--card` | `oklch(0.145 0 0)` | Card background color |
| `--card-foreground` | `oklch(0.985 0 0)` | Card text color |
| `--popover` | `oklch(0.145 0 0)` | Popover background color |
| `--popover-foreground` | `oklch(0.985 0 0)` | Popover text color |
| `--primary` | `oklch(0.985 0 0)` | Primary brand color |
| `--primary-foreground` | `oklch(0.205 0 0)` | Primary text color |
| `--secondary` | `oklch(0.269 0 0)` | Secondary background color |
| `--secondary-foreground` | `oklch(0.985 0 0)` | Secondary text color |
| `--muted` | `oklch(0.269 0 0)` | Muted background color |
| `--muted-foreground` | `oklch(0.708 0 0)` | Muted text color |
| `--accent` | `oklch(0.269 0 0)` | Accent background color |
| `--accent-foreground` | `oklch(0.985 0 0)` | Accent text color |
| `--destructive` | `oklch(0.396 0.141 25.723)` | Destructive/error color |
| `--destructive-foreground` | `oklch(0.637 0.237 25.331)` | Destructive text color |
| `--border` | `oklch(0.269 0 0)` | Border color |
| `--input` | `oklch(0.269 0 0)` | Input border color |
| `--ring` | `oklch(0.556 0 0)` | Focus ring color |

### Chart Colors

| Variable | Light Mode | Dark Mode | Description |
|----------|------------|-----------|-------------|
| `--chart-1` | `oklch(0.646 0.222 41.116)` | `oklch(0.488 0.243 264.376)` | Chart color 1 |
| `--chart-2` | `oklch(0.6 0.118 184.704)` | `oklch(0.696 0.17 162.48)` | Chart color 2 |
| `--chart-3` | `oklch(0.398 0.07 227.392)` | `oklch(0.769 0.188 70.08)` | Chart color 3 |
| `--chart-4` | `oklch(0.828 0.189 84.429)` | `oklch(0.627 0.265 303.9)` | Chart color 4 |
| `--chart-5` | `oklch(0.769 0.188 70.08)` | `oklch(0.645 0.246 16.439)` | Chart color 5 |

### Sidebar Colors

| Variable | Light Mode | Dark Mode | Description |
|----------|------------|-----------|-------------|
| `--sidebar` | `oklch(0.985 0 0)` | `oklch(0.205 0 0)` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Sidebar text |
| `--sidebar-primary` | `oklch(0.205 0 0)` | `oklch(0.488 0.243 264.376)` | Sidebar primary |
| `--sidebar-primary-foreground` | `oklch(0.985 0 0)` | `oklch(0.985 0 0)` | Sidebar primary text |
| `--sidebar-accent` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Sidebar accent |
| `--sidebar-accent-foreground` | `oklch(0.205 0 0)` | `oklch(0.985 0 0)` | Sidebar accent text |
| `--sidebar-border` | `oklch(0.922 0 0)` | `oklch(0.269 0 0)` | Sidebar border |
| `--sidebar-ring` | `oklch(0.708 0 0)` | `oklch(0.439 0 0)` | Sidebar focus ring |

## Spacing Variables

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--radius` | `0.625rem` | Base border radius |
| `--radius-sm` | `calc(var(--radius) - 4px)` | Small border radius |
| `--radius-md` | `calc(var(--radius) - 2px)` | Medium border radius |
| `--radius-lg` | `var(--radius)` | Large border radius |
| `--radius-xl` | `calc(var(--radius) + 4px)` | Extra large border radius |

## Typography Variables

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--font-sans` | `"Geist Sans", ui-sans-serif, system-ui, sans-serif` | Sans-serif font stack |
| `--font-mono` | `"Geist Mono", ui-monospace, monospace` | Monospace font stack |

## OKLCH Color Format

The component library uses OKLCH color format for better color consistency and accessibility. OKLCH stands for:

- **O**kLCH: Perceptual lightness
- **L**ightness: 0-1 (0 = black, 1 = white)
- **C**hroma: 0-0.4 (0 = grayscale, higher = more saturated)
- **H**ue: 0-360 (degrees on color wheel)

### Converting from Other Formats

#### From HEX to OKLCH

```javascript
// Using a color conversion library like culori
import { formatOklch } from 'culori';

const hexToOklch = (hex) => {
  return formatOklch(hex);
};

// Example: #3b82f6 (blue-500) → oklch(0.6 0.2 250)
```

#### From RGB to OKLCH

```javascript
const rgbToOklch = (r, g, b) => {
  const hex = `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
  return formatOklch(hex);
};
```

#### Manual OKLCH Values

Common color values in OKLCH format:

```css
/* Grayscale */
--white: oklch(1 0 0);
--black: oklch(0 0 0);
--gray-100: oklch(0.95 0 0);
--gray-500: oklch(0.5 0 0);
--gray-900: oklch(0.1 0 0);

/* Brand Colors */
--blue-500: oklch(0.6 0.2 250);
--red-500: oklch(0.6 0.2 20);
--green-500: oklch(0.6 0.2 140);
--purple-500: oklch(0.6 0.2 300);
--orange-500: oklch(0.7 0.15 60);
```

## Custom Theme Examples

### Brand Blue Theme

```css
:root {
  --primary: oklch(0.4 0.2 200); /* Brand blue */
  --primary-foreground: oklch(0.98 0 0); /* White text */
  --secondary: oklch(0.9 0.1 200); /* Light blue */
  --secondary-foreground: oklch(0.2 0 0); /* Dark text */
  --accent: oklch(0.8 0.15 200); /* Accent blue */
  --destructive: oklch(0.5 0.2 20); /* Brand red */
}
```

### Warm Theme

```css
:root {
  --primary: oklch(0.5 0.2 30); /* Warm orange */
  --primary-foreground: oklch(0.98 0 0); /* White text */
  --secondary: oklch(0.9 0.1 30); /* Light orange */
  --accent: oklch(0.7 0.15 60); /* Yellow accent */
  --destructive: oklch(0.5 0.2 10); /* Warm red */
}
```

### Monochrome Theme

```css
:root {
  --primary: oklch(0.2 0 0); /* Dark gray */
  --primary-foreground: oklch(0.98 0 0); /* White text */
  --secondary: oklch(0.9 0 0); /* Light gray */
  --secondary-foreground: oklch(0.2 0 0); /* Dark text */
  --accent: oklch(0.7 0 0); /* Medium gray */
  --destructive: oklch(0.3 0 0); /* Darker gray */
}
```

## Usage in Components

### CSS Classes

The library provides utility classes that map to these variables:

```css
.bg-primary { background-color: var(--primary); }
.text-primary-foreground { color: var(--primary-foreground); }
.bg-secondary { background-color: var(--secondary); }
.text-secondary-foreground { color: var(--secondary-foreground); }
.border-border { border-color: var(--border); }
.ring-ring { --tw-ring-color: var(--ring); }
```

### JavaScript/TypeScript

You can also access these variables in JavaScript:

```typescript
// Get computed style
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary');

// Set new value
document.documentElement.style.setProperty('--primary', 'oklch(0.4 0.2 200)');
```

### React Hook Example

```tsx
import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--primary');
  });

  const updateTheme = (newPrimary: string) => {
    document.documentElement.style.setProperty('--primary', newPrimary);
    setTheme(newPrimary);
  };

  return { theme, updateTheme };
};
```

## Best Practices

1. **Consistency**: Use the same color values across your application
2. **Accessibility**: Ensure sufficient contrast ratios (4.5:1 for normal text, 3:1 for large text)
3. **Dark Mode**: Always provide dark mode variants
4. **Testing**: Test your themes in both light and dark modes
5. **Documentation**: Document your custom theme variables for your team

## Browser Support

OKLCH is supported in:
- Chrome 111+
- Firefox 113+
- Safari 15.4+

For older browsers, consider providing fallback values:

```css
:root {
  --primary: #1f2937; /* Fallback for older browsers */
  --primary: oklch(0.2 0 0); /* Modern browsers */
}
```
