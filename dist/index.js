// Palletizr Shared Components - Astro Powered
// This is a component library for Astro projects

// Export component paths for Astro imports
export const Navigation = './components/Navigation.astro';
export const styles = './styles/navigation.css';

// Export component info
export const components = {
  Navigation: {
    path: './components/Navigation.astro',
    props: {
      badgeText: 'string',
      subtitleText: 'string',
      logoUrl: 'string',
      logoAlt: 'string',
      href: 'string',
      showBadge: 'boolean',
      variant: "'default' | 'transparent' | 'glass'",
      className: 'string'
    }
  }
};

// Export types
export const NavigationProps = {
  badgeText: 'string',
  subtitleText: 'string',
  logoUrl: 'string',
  logoAlt: 'string',
  href: 'string',
  showBadge: 'boolean',
  variant: "'default' | 'transparent' | 'glass'",
  className: 'string'
};

// Export usage instructions
export const usage = `
// In your Astro files:
import { Navigation } from '@palletizr/shared-components';

<Navigation badgeText="Custom Text" variant="transparent" />
`;
