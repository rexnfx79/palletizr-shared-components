# Palletizr Shared Components

This is the built component library for @palletizr/shared-components.

## Usage

```astro
---
import { Navigation } from '@palletizr/shared-components';
---

<Navigation badgeText="Custom Text" variant="transparent" />
```

## Components

- `Navigation.astro` - Responsive navigation component
- `navigation.css` - Navigation styles

## Props

- `badgeText` - Text displayed in the navigation badge
- `subtitleText` - Subtitle text below the badge
- `logoUrl` - URL to the logo image
- `logoAlt` - Alt text for the logo
- `href` - Link URL for the badge
- `showBadge` - Whether to show the badge
- `variant` - Visual variant ('default', 'transparent', 'glass')
- `className` - Additional CSS classes
