// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bton.si',
  trailingSlash: 'ignore',
  integrations: [sitemap()],

  build: {
    inlineStylesheets: 'auto',
  },

  image: {
    // Use the built-in sharp service for optimized responsive images.
    responsiveStyles: true,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});