#!/usr/bin/env node

/**
 * Build script for the component library
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔨 Building component library...\n');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create components directory
const componentsDir = path.join(distDir, 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Create styles directory
const stylesDir = path.join(distDir, 'styles');
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
}

// Copy components
const components = [
  'Navigation.astro'
];

components.forEach(component => {
  const source = path.join(__dirname, 'src', 'components', component);
  const dest = path.join(componentsDir, component);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log(`✅ Copied ${component}`);
  } else {
    console.log(`❌ Source not found: ${source}`);
  }
});

// Copy styles
const styles = [
  'navigation.css'
];

styles.forEach(style => {
  const source = path.join(__dirname, 'src', 'styles', style);
  const dest = path.join(stylesDir, style);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log(`✅ Copied ${style}`);
  } else {
    console.log(`❌ Source not found: ${source}`);
  }
});

// Create index.js with proper exports
const indexContent = `// Palletizr Shared Components - Astro Powered
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
export const usage = \`
// In your Astro files:
import { Navigation } from '@palletizr/shared-components';

<Navigation badgeText="Custom Text" variant="transparent" />
\`;
`;

fs.writeFileSync(path.join(distDir, 'index.js'), indexContent);
console.log('✅ Created index.js');

// Create package.json for the dist folder
const packageJson = {
  name: "@palletizr/shared-components",
  version: "2.0.0",
  type: "module",
  main: "./index.js",
  exports: {
    ".": "./index.js",
    "./navigation": "./components/Navigation.astro",
    "./styles": "./styles/navigation.css"
  },
  files: [
    "components/**/*",
    "styles/**/*",
    "index.js"
  ],
  peerDependencies: {
    "astro": "^4.0.0"
  }
};

fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(packageJson, null, 2));
console.log('✅ Created package.json');

// Create README for the dist folder
const readmeContent = `# Palletizr Shared Components

This is the built component library for @palletizr/shared-components.

## Usage

\`\`\`astro
---
import { Navigation } from '@palletizr/shared-components';
---

<Navigation badgeText="Custom Text" variant="transparent" />
\`\`\`

## Components

- \`Navigation.astro\` - Responsive navigation component
- \`navigation.css\` - Navigation styles

## Props

- \`badgeText\` - Text displayed in the navigation badge
- \`subtitleText\` - Subtitle text below the badge
- \`logoUrl\` - URL to the logo image
- \`logoAlt\` - Alt text for the logo
- \`href\` - Link URL for the badge
- \`showBadge\` - Whether to show the badge
- \`variant\` - Visual variant ('default', 'transparent', 'glass')
- \`className\` - Additional CSS classes
`;

fs.writeFileSync(path.join(distDir, 'README.md'), readmeContent);
console.log('✅ Created README.md');

console.log('\n🎉 Component library built successfully!');
console.log('📁 Output directory: dist/');
console.log('\n💡 To use in other repos:');
console.log('   npm link @palletizr/shared-components');
console.log('\n📖 This package is designed for Astro projects');
console.log('   Import components in your .astro files');
