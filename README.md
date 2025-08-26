# Palletizr Shared Components

Shared UI components for the Palletizr platform, used across multiple repositories.

## Components

### Navigation Component

A responsive navigation header with glassmorphism effects.

#### Files
- `navigation.html` - HTML structure
- `navigation.css` - Styles and animations  
- `navigation.js` - Interactive behavior

#### Usage

**Method 1: Include Files Directly**
```html
<!-- Include CSS -->
<link rel="stylesheet" href="shared-components/navigation.css">

<!-- Include HTML -->
<!-- Replace existing header with content from navigation.html -->

<!-- Include JS -->
<script src="shared-components/navigation.js"></script>
```

**Method 2: JavaScript Integration**
```html
<div id="navigation-container"></div>

<script>
// Load navigation dynamically
fetch('shared-components/navigation.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navigation-container').innerHTML = html;
        // Initialize navigation
        new PalletizrNavigation({
            showBadge: true,
            badgeText: 'Custom Text',
            enableScrollEffect: true
        });
    });
</script>
```

#### Customization Options

```javascript
const nav = new PalletizrNavigation({
    showBadge: true,                    // Show/hide badge
    badgeText: 'Professional Calculator', // Badge text
    enableScrollEffect: true            // Enable scroll effects
});

// Dynamic methods
nav.setBadgeText('New Text');
nav.showBadge();
nav.hideBadge();
```

#### CSS Variables

The component uses CSS custom properties that can be overridden:

```css
:root {
    --color-primary: #0F4C81;
    --color-gray-900: #111827;
    --color-gray-600: #4B5563;
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-border: rgba(255, 255, 255, 0.18);
    --glass-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.35);
}
```

## Integration with Git Submodules

### Setup in Parent Repository

```bash
# Add as submodule
git submodule add https://github.com/rexnfx79/palletizr-shared-components.git shared-components

# Initialize and update
git submodule update --init --recursive
```

### Update Shared Components

```bash
# In parent repository
cd shared-components
git pull origin main
cd ..
git add shared-components
git commit -m "Update shared components"
```

### Auto-sync with GitHub Actions

Create `.github/workflows/sync-shared-components.yml`:

```yaml
name: Sync Shared Components
on:
  repository_dispatch:
    types: [shared-components-updated]
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: recursive
          token: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Update submodules
        run: |
          git submodule update --remote --merge
          git add .
          git diff --staged --quiet || git commit -m "Auto-update shared components"
          git push
```

## Versioning

Use semantic versioning for shared components:
- `v1.0.0` - Initial release
- `v1.1.0` - New features
- `v1.0.1` - Bug fixes
