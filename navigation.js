/**
 * Palletizr Shared Navigation Component
 * Handles navigation behavior and customization
 */

class PalletizrNavigation {
    constructor(options = {}) {
        this.options = {
            showBadge: true,
            badgeText: 'Professional Calculator',
            enableScrollEffect: true,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.setupScrollEffect();
        this.setupBadge();
    }
    
    setupScrollEffect() {
        if (!this.options.enableScrollEffect) return;
        
        const header = document.querySelector('header.glass-nav');
        if (!header) return;
        
        const updateNav = () => {
            if (window.scrollY > 8) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        
        updateNav();
        window.addEventListener('scroll', updateNav, { passive: true });
    }
    
    setupBadge() {
        const badge = document.querySelector('.nav-badge');
        const badgeText = document.querySelector('#nav-badge-text');
        
        if (!badge || !badgeText) return;
        
        if (this.options.showBadge) {
            badge.style.display = 'block';
            badgeText.textContent = this.options.badgeText;
        } else {
            badge.style.display = 'none';
        }
    }
    
    setBadgeText(text) {
        const badgeText = document.querySelector('#nav-badge-text');
        if (badgeText) {
            badgeText.textContent = text;
        }
    }
    
    showBadge() {
        const badge = document.querySelector('.nav-badge');
        if (badge) {
            badge.style.display = 'block';
        }
    }
    
    hideBadge() {
        const badge = document.querySelector('.nav-badge');
        if (badge) {
            badge.style.display = 'none';
        }
    }
}

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.PalletizrNav = new PalletizrNavigation();
    });
} else {
    window.PalletizrNav = new PalletizrNavigation();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PalletizrNavigation;
}
