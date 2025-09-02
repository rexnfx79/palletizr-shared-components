# Palletizr Astro Components

A modern component library built with Astro for the Palletizr platform. This replaces the previous shared components system with a more maintainable, type-safe approach.

## Quick Start

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

The development server will be available at `http://localhost:4321/`

## Features

- 🚀 **Astro-powered**: Built with the latest Astro framework
- 🎨 **TypeScript**: Full type safety and IntelliSense support
- 🎯 **Zero JS by default**: Components ship with minimal JavaScript
- 🔧 **Customizable**: Extensive props for component customization
- 📱 **Responsive**: Mobile-first design approach

## Components

### Navigation Component

A responsive navigation header with glassmorphism effects and dynamic content.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `badgeText` | `string` | `'Professional Calculator'` | Text displayed in the navigation badge |
| `subtitleText` | `string` | `''` | Subtitle text below the badge |
| `logoUrl` | `string` | `'/logo_bw_long.png'` | URL to the logo image |
| `logoAlt` | `string` | `'Palletizr Logo'` | Alt text for the logo |
| `href` | `string` | `'/token'` | Link URL for the badge |
| `showBadge` | `boolean` | `true` | Whether to show the badge |
| `variant` | `'default' \| 'transparent' \| 'glass'` | `'default'` | Visual variant of the navigation |
| `className` | `string` | `''` | Additional CSS classes |

#### Usage

```astro
---
import { Navigation } from '@palletizr/astro-components';
---

<!-- Basic usage -->
<Navigation />

<!-- Customized navigation -->
<Navigation 
  badgeText="Get Started"
  subtitleText="Join thousands of users"
  href="/signup"
  variant="transparent"
/>

<!-- No badge -->
<Navigation showBadge={false} />
```

#### Dynamic Behavior

The navigation automatically adapts based on the current URL:
- `app.palletizr.com` → Shows "Tutorial"
- `palletizr.com` → Shows "Try Free" with "No signup required"
- Other domains → Shows "Professional Calculator"

## Installation

### For Astro Projects

```bash
npm install @palletizr/astro-components
```

### For Non-Astro Projects

```bash
npm install @palletizr/astro-components
```

Note: Non-Astro projects will need to use the compiled output or consider migrating to Astro.

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
src/
├── components/          # Astro components
│   └── Navigation.astro
├── layouts/            # Layout components
│   └── Layout.astro
├── pages/              # Demo pages
│   ├── index.astro
│   └── test.astro
└── index.ts            # Main exports
```

## Migration from Shared Components

### What Changed

1. **File-based imports** → **Package imports**
2. **Manual file copying** → **npm install**
3. **HTML/CSS/JS files** → **Astro components**
4. **Setup scripts** → **Package manager**

### Migration Steps

#### 1. Remove Old Dependencies

```bash
# Remove old shared components
rm -rf shared-components/
git submodule deinit shared-components
git rm shared-components
```

#### 2. Install New Package

```bash
npm install @palletizr/astro-components
```

#### 3. Update Imports

**Before:**
```html
<link rel="stylesheet" href="shared-components/navigation.css">
<script src="shared-components/navigation.js"></script>
<!-- HTML content copied from navigation.html -->
```

**After:**
```astro
---
import { Navigation } from '@palletizr/astro-components';
---

<Navigation />
```

#### 4. Update Build Process

**Before:** Files were copied/symlinked during setup
**After:** Components are bundled during build

### Benefits of Migration

- ✅ **Better maintainability**: Single source of truth
- ✅ **Type safety**: Full TypeScript support
- ✅ **Versioning**: Semantic versioning with npm
- ✅ **Performance**: Optimized builds and tree-shaking
- ✅ **Developer experience**: Better tooling and debugging
- ✅ **Consistency**: Standardized component API

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Versioning

This project follows [Semantic Versioning](https://semver.org/):
- `v1.0.0` - Initial release
- `v1.1.0` - New features
- `v1.0.1` - Bug fixes

## License

MIT License - see LICENSE file for details.
