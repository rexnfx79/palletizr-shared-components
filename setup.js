#!/usr/bin/env node

/**
 * Palletizr Shared Components Setup Script
 * Helps integrate shared components into projects
 */

const fs = require('fs');
const path = require('path');

class SharedComponentsSetup {
    constructor() {
        this.componentsDir = __dirname;
        this.targetDir = process.cwd();
    }

    async setup(options = {}) {
        console.log('🚀 Setting up Palletizr Shared Components...\n');

        const config = {
            copyFiles: true,
            updateHTML: true,
            createSymlinks: false,
            ...options
        };

        try {
            if (config.copyFiles) {
                await this.copyComponentFiles();
            }

            if (config.createSymlinks) {
                await this.createSymlinks();
            }

            if (config.updateHTML) {
                await this.updateHTMLFiles();
            }

            console.log('✅ Setup complete!\n');
            this.printUsageInstructions();

        } catch (error) {
            console.error('❌ Setup failed:', error.message);
            process.exit(1);
        }
    }

    async copyComponentFiles() {
        console.log('📁 Copying component files...');
        
        const files = ['navigation.html', 'navigation.css', 'navigation.js'];
        const targetDir = path.join(this.targetDir, 'shared-components');

        // Create directory if it doesn't exist
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        for (const file of files) {
            const sourcePath = path.join(this.componentsDir, file);
            const targetPath = path.join(targetDir, file);
            
            if (fs.existsSync(sourcePath)) {
                fs.copyFileSync(sourcePath, targetPath);
                console.log(`   ✓ Copied ${file}`);
            }
        }
    }

    async createSymlinks() {
        console.log('🔗 Creating symlinks...');
        
        const files = ['navigation.html', 'navigation.css', 'navigation.js'];
        const targetDir = path.join(this.targetDir, 'shared-components');

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        for (const file of files) {
            const sourcePath = path.join(this.componentsDir, file);
            const targetPath = path.join(targetDir, file);
            
            if (fs.existsSync(sourcePath)) {
                try {
                    if (fs.existsSync(targetPath)) {
                        fs.unlinkSync(targetPath);
                    }
                    fs.symlinkSync(sourcePath, targetPath);
                    console.log(`   ✓ Linked ${file}`);
                } catch (error) {
                    console.log(`   ⚠️  Could not create symlink for ${file}: ${error.message}`);
                }
            }
        }
    }

    async updateHTMLFiles() {
        console.log('📝 Looking for HTML files to update...');
        
        const htmlFiles = this.findHTMLFiles(this.targetDir);
        
        for (const htmlFile of htmlFiles) {
            await this.updateHTMLFile(htmlFile);
        }
    }

    findHTMLFiles(dir, files = []) {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
                this.findHTMLFiles(fullPath, files);
            } else if (item.endsWith('.html')) {
                files.push(fullPath);
            }
        }
        
        return files;
    }

    async updateHTMLFile(filePath) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check if it already includes shared navigation
        if (content.includes('shared-components/navigation.css') || 
            content.includes('palletizr-nav')) {
            console.log(`   ⏭️  ${path.basename(filePath)} already updated`);
            return;
        }

        let updatedContent = content;

        // Add CSS link in head
        if (content.includes('</head>')) {
            const cssLink = '    <link rel="stylesheet" href="shared-components/navigation.css">\n';
            updatedContent = updatedContent.replace('</head>', `${cssLink}</head>`);
        }

        // Add JS script before closing body
        if (content.includes('</body>')) {
            const jsScript = '    <script src="shared-components/navigation.js"></script>\n';
            updatedContent = updatedContent.replace('</body>', `${jsScript}</body>`);
        }

        // Write updated content
        fs.writeFileSync(filePath, updatedContent);
        console.log(`   ✓ Updated ${path.basename(filePath)}`);
    }

    printUsageInstructions() {
        console.log(`
📖 Usage Instructions:

1. Include the navigation in your HTML:
   Replace your existing header with the content from shared-components/navigation.html

2. The navigation will auto-initialize with default settings.

3. Customize the navigation:
   <script>
   // After the navigation loads
   window.PalletizrNav.setBadgeText('Custom Text');
   </script>

4. Keep components updated:
   - If using git submodules: git submodule update --remote
   - If using copied files: re-run this setup script

📚 See shared-components/README.md for detailed documentation.
        `);
    }
}

// CLI usage
if (require.main === module) {
    const args = process.argv.slice(2);
    const options = {};

    if (args.includes('--symlinks')) {
        options.createSymlinks = true;
        options.copyFiles = false;
    }

    if (args.includes('--no-html-update')) {
        options.updateHTML = false;
    }

    const setup = new SharedComponentsSetup();
    setup.setup(options);
}

module.exports = SharedComponentsSetup;
