import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    build: {
      lib: {
        entry: './src/index.ts',
        name: 'PalletizrSharedComponents',
        formats: ['es']
      }
    }
  }
});
