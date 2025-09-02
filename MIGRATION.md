# Migration Guide: Old Shared Components → New Astro-Powered System

This guide helps you migrate from the old shared components system to the new Astro-powered system in the **same repository**.

## Overview

The old system used file copying, symlinks, and manual setup scripts. The new system uses npm packages and Astro components for better maintainability and type safety, but it's still the same `@palletizr/shared-components` package.

## What You Need to Do

### 1. Remove Old Shared Components

#### If using Git submodules:
```bash
# Remove the submodule
git submodule deinit shared-components
git rm shared-components
git commit -m "Remove old shared components submodule"
```

#### If using copied files:
```bash
# Remove the copied files
rm -rf shared-components/
git add -A
git commit -m "Remove old shared components files"
```

### 2. Install New Package

#### For Local Development (Current Setup)

Since this package hasn't been published to npm yet, you can use it locally:

```bash
# In the shared-components repository
npm link

# In your other repositories
npm link @palletizr/shared-components
```

#### For Production Use (After Publishing)

Once published to npm:

```bash
npm install @palletizr/shared-components
```

**Note**: This is the same package name as before, but now it's powered by Astro!

### 3. Update Your Code

#### Before (HTML files):
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="shared-components/navigation.css">
</head>
<body>
  <!-- Old navigation HTML -->
  <header class="glass-nav" id="palletizr-nav">
    <div class="container">
      <div class="nav-row">
        <!-- ... navigation content ... -->
      </div>
    </div>
  </header>
  
  <script src="shared-components/navigation.js"></script>
</body>
</html>
```

#### After (Astro files):
```astro
---
import { Navigation } from '@palletizr/shared-components';
---

<html>
<head>
  <!-- No need to include CSS - it's bundled with the component -->
</head>
<body>
  <Navigation />
</body>
</html>
```

#### If you can't use Astro (React/Vue/vanilla JS):
```jsx
// React example
import { Navigation } from '@palletizr/shared-components';

function App() {
  return (
    <div>
      <Navigation 
        badgeText="Custom Text"
        variant="transparent"
      />
    </div>
  );
}
```

### 4. Update Build Configuration

#### For Astro projects:
No changes needed - components work out of the box.

#### For Vite/Webpack projects:
```js
// vite.config.js
export default {
  optimizeDeps: {
    include: ['@palletizr/shared-components']
  }
}
```

#### For Next.js projects:
```js
// next.config.js
const nextConfig = {
  transpilePackages: ['@palletizr/shared-components']
}
```

## Component Props Reference

### Navigation Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `badgeText` | `string` | `'Professional Calculator'` | Badge text |
| `subtitleText` | `string` | `''` | Subtitle text |
| `logoUrl` | `string` | `'/logo_bw_long.png'` | Logo image URL |
| `logoAlt` | `string` | `'Palletizr Logo'` | Logo alt text |
| `href` | `string` | `'/token'` | Badge link URL |
| `showBadge` | `boolean` | `true` | Show/hide badge |
| `variant` | `'default' \| 'transparent' \| 'glass'` | `'default'` | Visual style |
| `className` | `string` | `''` | Additional CSS classes |

## Common Migration Patterns

### 1. Simple Navigation Replacement

**Before:**
```html
<div id="palletizr-nav">
  <!-- Complex HTML structure -->
</div>
```

**After:**
```astro
<Navigation />
```

### 2. Custom Badge Text

**Before:**
```javascript
// Old way - manipulating DOM
document.getElementById('nav-badge-text').textContent = 'Custom Text';
```

**After:**
```astro
<Navigation badgeText="Custom Text" />
```

### 3. Conditional Navigation

**Before:**
```html
<!-- Different HTML for different pages -->
<header class="glass-nav" id="palletizr-nav">
  <!-- ... -->
</header>
```

**After:**
```astro
<Navigation 
  variant={currentPage === 'home' ? 'transparent' : 'default'}
  badgeText={currentPage === 'home' ? 'Get Started' : 'Learn More'}
/>
```

## Troubleshooting

### Component Not Rendering

1. **Check imports**: Ensure you're importing from the correct path
2. **Verify installation**: Run `npm list @palletizr/shared-components`
3. **Check console errors**: Look for build or runtime errors

### Styles Not Loading

1. **Astro projects**: Styles are automatically bundled
2. **Other frameworks**: You may need to import the CSS manually
3. **Check CSS conflicts**: Ensure no conflicting styles are overriding

### Build Errors

1. **Node version**: Ensure you're using Node.js 18+
2. **Dependencies**: Run `npm install` to ensure all deps are installed
3. **Framework compatibility**: Some frameworks may need additional configuration

### Local Development Issues

If using `npm link`:

1. **Ensure link is created**: Run `npm link` in the shared-components repo
2. **Verify link in other repos**: Run `npm link @palletizr/shared-components`
3. **Check symlinks**: Ensure the link was created correctly
4. **Restart dev servers**: Sometimes dev servers need to be restarted after linking

## Performance Benefits

- **Smaller bundle size**: Tree-shaking removes unused code
- **Faster builds**: No more file copying during setup
- **Better caching**: npm handles versioning and caching
- **Type safety**: Catch errors at build time instead of runtime

## Support

If you encounter issues during migration:

1. Check the [main README](./README.md) for detailed documentation
2. Review the [demo pages](./src/pages/) for examples
3. Open an issue in the repository with your specific error

## Rollback Plan

If you need to rollback temporarily:

```bash
# Uninstall new package
npm uninstall @palletizr/shared-components

# Reinstall old system (if you have the files)
# Copy the old navigation files back
# Update your HTML to use the old system
```

**Note**: Rolling back will lose the benefits of the new system, so it's recommended to fix any issues rather than rollback.

## What's Different Now

- **Same package name**: Still `@palletizr/shared-components`
- **Same repository**: Still `palletizr-shared-components`
- **Better technology**: Now powered by Astro instead of file copying
- **Same functionality**: All your existing navigation components work the same way
- **Better developer experience**: Type safety, better tooling, and documentation

## Publishing to NPM

When you're ready to publish this package:

```bash
# Login to npm (if not already logged in)
npm login

# Publish the package
npm publish --access public
```

**Note**: Make sure you have the right permissions to publish under the `@palletizr` scope.
